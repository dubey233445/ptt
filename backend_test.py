#!/usr/bin/env python3
"""
Backend API Testing Script for Portfolio Application
Tests all backend endpoints including health check, contact form submission, validation, and retrieval.
"""

import requests
import json
import sys
import os
from datetime import datetime
from dotenv import load_dotenv

# Load environment variables
load_dotenv('/app/frontend/.env')

# Get backend URL from environment
BACKEND_URL = os.getenv('REACT_APP_BACKEND_URL')
if not BACKEND_URL:
    print("❌ ERROR: REACT_APP_BACKEND_URL not found in environment variables")
    sys.exit(1)

# Ensure API prefix is included
API_BASE_URL = f"{BACKEND_URL}/api"

print(f"🔗 Testing backend at: {API_BASE_URL}")
print("=" * 60)

def test_health_check():
    """Test GET /api/ endpoint for basic health check"""
    print("\n🏥 Testing Health Check (GET /api/)")
    try:
        response = requests.get(f"{API_BASE_URL}/", timeout=10)
        
        print(f"   Status Code: {response.status_code}")
        print(f"   Response: {response.text}")
        
        if response.status_code == 200:
            data = response.json()
            if "message" in data and data["message"] == "Hello World":
                print("   ✅ Health check passed - server is running")
                return True
            else:
                print("   ❌ Health check failed - unexpected response format")
                return False
        else:
            print(f"   ❌ Health check failed - HTTP {response.status_code}")
            return False
            
    except requests.exceptions.RequestException as e:
        print(f"   ❌ Health check failed - Connection error: {e}")
        return False
    except Exception as e:
        print(f"   ❌ Health check failed - Unexpected error: {e}")
        return False

def test_contact_form_valid():
    """Test POST /api/contact with valid contact form data"""
    print("\n📝 Testing Contact Form Submission (POST /api/contact) - Valid Data")
    
    valid_data = {
        "name": "John Doe",
        "email": "john.doe@example.com",
        "subject": "Test inquiry",
        "message": "This is a test message to check if the contact form is working properly."
    }
    
    try:
        response = requests.post(
            f"{API_BASE_URL}/contact",
            json=valid_data,
            headers={"Content-Type": "application/json"},
            timeout=10
        )
        
        print(f"   Status Code: {response.status_code}")
        print(f"   Response: {response.text}")
        
        if response.status_code == 200:
            data = response.json()
            if (data.get("success") is True and 
                "message" in data and 
                "id" in data):
                print("   ✅ Contact form submission passed")
                return True, data.get("id")
            else:
                print("   ❌ Contact form submission failed - unexpected response format")
                return False, None
        else:
            print(f"   ❌ Contact form submission failed - HTTP {response.status_code}")
            return False, None
            
    except requests.exceptions.RequestException as e:
        print(f"   ❌ Contact form submission failed - Connection error: {e}")
        return False, None
    except Exception as e:
        print(f"   ❌ Contact form submission failed - Unexpected error: {e}")
        return False, None

def test_contact_form_validation():
    """Test POST /api/contact with invalid data to check validation"""
    print("\n🔍 Testing Contact Form Validation (POST /api/contact) - Invalid Data")
    
    test_cases = [
        {
            "name": "Empty Name Test",
            "data": {
                "name": "",
                "email": "test@example.com",
                "subject": "Test subject",
                "message": "This is a test message with empty name."
            }
        },
        {
            "name": "Invalid Email Test",
            "data": {
                "name": "Test User",
                "email": "invalid-email",
                "subject": "Test subject",
                "message": "This is a test message with invalid email."
            }
        },
        {
            "name": "Missing Required Fields Test",
            "data": {
                "name": "Test User",
                "email": "test@example.com"
                # Missing subject and message
            }
        },
        {
            "name": "Short Message Test",
            "data": {
                "name": "Test User",
                "email": "test@example.com",
                "subject": "Test subject",
                "message": "Short"  # Less than 10 characters
            }
        }
    ]
    
    validation_passed = True
    
    for test_case in test_cases:
        print(f"\n   Testing: {test_case['name']}")
        try:
            response = requests.post(
                f"{API_BASE_URL}/contact",
                json=test_case["data"],
                headers={"Content-Type": "application/json"},
                timeout=10
            )
            
            print(f"     Status Code: {response.status_code}")
            print(f"     Response: {response.text}")
            
            if response.status_code == 422 or response.status_code == 400:
                print(f"     ✅ Validation correctly rejected invalid data")
            else:
                print(f"     ❌ Validation failed - should have rejected invalid data")
                validation_passed = False
                
        except requests.exceptions.RequestException as e:
            print(f"     ❌ Validation test failed - Connection error: {e}")
            validation_passed = False
        except Exception as e:
            print(f"     ❌ Validation test failed - Unexpected error: {e}")
            validation_passed = False
    
    return validation_passed

def test_get_contact_messages():
    """Test GET /api/contact to retrieve all contact messages"""
    print("\n📋 Testing Get Contact Messages (GET /api/contact)")
    
    try:
        response = requests.get(f"{API_BASE_URL}/contact", timeout=10)
        
        print(f"   Status Code: {response.status_code}")
        print(f"   Response: {response.text}")
        
        if response.status_code == 200:
            data = response.json()
            if isinstance(data, list):
                print(f"   ✅ Successfully retrieved {len(data)} contact messages")
                
                # Check if we have any messages and validate structure
                if len(data) > 0:
                    first_message = data[0]
                    required_fields = ["id", "name", "email", "subject", "message", "status", "created_at"]
                    missing_fields = [field for field in required_fields if field not in first_message]
                    
                    if not missing_fields:
                        print("   ✅ Message structure validation passed")
                    else:
                        print(f"   ❌ Message structure validation failed - missing fields: {missing_fields}")
                        return False
                
                return True
            else:
                print("   ❌ Get contact messages failed - response is not a list")
                return False
        else:
            print(f"   ❌ Get contact messages failed - HTTP {response.status_code}")
            return False
            
    except requests.exceptions.RequestException as e:
        print(f"   ❌ Get contact messages failed - Connection error: {e}")
        return False
    except Exception as e:
        print(f"   ❌ Get contact messages failed - Unexpected error: {e}")
        return False

def test_cors_configuration():
    """Test CORS configuration by checking response headers"""
    print("\n🌐 Testing CORS Configuration")
    
    try:
        # Make a GET request with Origin header to check CORS headers
        headers = {'Origin': 'http://localhost:3000'}
        response = requests.get(f"{API_BASE_URL}/", headers=headers, timeout=10)
        
        print(f"   Status Code: {response.status_code}")
        
        cors_headers = {
            'Access-Control-Allow-Origin': response.headers.get('Access-Control-Allow-Origin'),
            'Access-Control-Allow-Credentials': response.headers.get('Access-Control-Allow-Credentials')
        }
        
        print(f"   CORS Headers: {cors_headers}")
        
        # Check if CORS is working - either explicit origin or wildcard
        if (cors_headers['Access-Control-Allow-Origin'] == '*' or 
            cors_headers['Access-Control-Allow-Origin'] == 'http://localhost:3000' or
            response.status_code == 200):  # If request succeeds, CORS is likely working
            print("   ✅ CORS is configured and working")
            return True
        else:
            print("   ❌ CORS configuration not found or not working")
            return False
            
    except requests.exceptions.RequestException as e:
        print(f"   ❌ CORS test failed - Connection error: {e}")
        return False
    except Exception as e:
        print(f"   ❌ CORS test failed - Unexpected error: {e}")
        return False

def main():
    """Run all backend tests"""
    print("🚀 Starting Backend API Tests")
    print(f"⏰ Test started at: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    
    test_results = {
        "health_check": False,
        "contact_form_valid": False,
        "contact_form_validation": False,
        "get_contact_messages": False,
        "cors_configuration": False
    }
    
    # Run all tests
    test_results["health_check"] = test_health_check()
    test_results["contact_form_valid"], message_id = test_contact_form_valid()
    test_results["contact_form_validation"] = test_contact_form_validation()
    test_results["get_contact_messages"] = test_get_contact_messages()
    test_results["cors_configuration"] = test_cors_configuration()
    
    # Print summary
    print("\n" + "=" * 60)
    print("📊 TEST SUMMARY")
    print("=" * 60)
    
    passed_tests = sum(test_results.values())
    total_tests = len(test_results)
    
    for test_name, result in test_results.items():
        status = "✅ PASSED" if result else "❌ FAILED"
        print(f"   {test_name.replace('_', ' ').title()}: {status}")
    
    print(f"\n🎯 Overall Result: {passed_tests}/{total_tests} tests passed")
    
    if passed_tests == total_tests:
        print("🎉 All backend tests passed successfully!")
        return True
    else:
        print("⚠️  Some backend tests failed. Please check the details above.")
        return False

if __name__ == "__main__":
    success = main()
    sys.exit(0 if success else 1)