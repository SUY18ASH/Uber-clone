# Backend API Documentation

## Users API

## POST /users/register
Registers a new user.

### Request Body
```json
{
  "fullname": {
    "firstname": "string (min. 3 chars)",
    "lastname": "string (min. 3 chars, optional)"
  },
  "email": "string (min. 5 chars)",
  "password": "string (min. 6 chars)"
}
```

### Response
- 201: Returns the token and user object
- 400: Validation errors or missing fields

### Example Response
```json
{
  "token": "example.jwt.token",
  "user": {
    "_id": "123456",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john@example.com"
  }
}
```

## POST /users/login
Logs in a user.

### Request Body
```json
{
  "email": "string (must be valid email)",
  "password": "string (min. 6 chars)"
}
```

### Response
- 201: Returns the token and user object
- 400: Validation errors
- 401: Invalid email or password

### Example Response
```json
{
  "token": "example.jwt.token",
  "user": {
    "_id": "123456",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john@example.com"
  }
}
```