# Portfolio Backend Integration Contracts

## Overview
This document outlines the API contracts and integration requirements for Ashish Dubey's portfolio website backend.

## Current Frontend State
- **Mock Data**: Currently using static data in components
- **Contact Form**: Frontend form exists but not connected to backend
- **No External APIs**: No third-party integrations required

## Backend Requirements

### 1. Contact Form API
**Endpoint**: `POST /api/contact`

**Request Body**:
```json
{
  "name": "string (required)",
  "email": "string (required, valid email)",
  "subject": "string (required)",
  "message": "string (required)"
}
```

**Response**:
```json
{
  "success": true,
  "message": "Message sent successfully",
  "id": "contact_message_id"
}
```

**Database Schema** (MongoDB):
```javascript
{
  _id: ObjectId,
  name: String,
  email: String,
  subject: String,
  message: String,
  createdAt: Date,
  status: String // 'new', 'read', 'archived'
}
```

### 2. Contact Messages Management API
**Get All Messages**: `GET /api/contact` (for admin view)
**Get Message by ID**: `GET /api/contact/:id`
**Update Message Status**: `PUT /api/contact/:id/status`

## Integration Points

### Frontend Changes Required
1. **Contact Form** (`/app/frontend/src/components/Contact.jsx`):
   - Remove mock form submission
   - Add API call to `POST /api/contact`
   - Add proper error handling and success messages
   - Add loading states during submission

### Backend Implementation
1. **Models**: Contact message model
2. **Routes**: Contact form submission and management
3. **Validation**: Input validation for all fields
4. **Error Handling**: Proper error responses

## Database Collections
- `contact_messages`: Store all contact form submissions

## Environment Variables
- All existing MongoDB and API configurations remain unchanged
- No new environment variables required

## Success Criteria
1. Contact form submits successfully to backend
2. Messages are stored in MongoDB
3. Proper validation and error handling
4. Success/error feedback to user
5. Clean removal of mock data from frontend

## Notes
- No authentication required for contact form submission
- Basic rate limiting should be considered for contact form
- Email notifications can be added later if needed