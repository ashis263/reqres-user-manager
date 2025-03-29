## Overview
A user mananement system developed with ReactJS that integrates with the Reqres API to perform user management functions, including authentication, user listing, and CRUD operations.

## Live Demo
[Live on netlify](https://mimosapudica.netlify.app)

## Features
### Level 1: Authentication
- Login screen with email and password fields.
- Uses `POST /api/login` endpoint for authentication.
- Stores authentication token on successful login.
- Redirects to the Users List page.

### Level 2: User List with Pagination
- Fetches users from `GET /api/users?page=${pageNumber}`.
- Displays user details (first name, last name, avatar) in a structured format.
- Implements pagination or lazy loading for user navigation.

### Level 3: User Management
- **Edit User:** 
    - Opens a form pre-filled with user data.
    - Updates first name, last name, and email.
    - Uses `PUT /api/users/{id}` for updates.
- **Delete User:** 
    - Removes a user from the list.
    - Uses `DELETE /api/users/{id}`.

## Technologies Used
- React 19
- React Router
- React Hook Form
- Axios
- Tailwind CSS & DaisyUI
- SweetAlert2 for notifications

## Installation Guide

### Prerequisites
Ensure you have the following installed on your system:
- [Node.js (LTS)](https://nodejs.org/)
- [Git](https://git-scm.com/)
- A package manager (npm, yarn, or pnpm)

### Steps to Install and Run

#### 1. Clone the Repository
```sh
git clone https://github.com/ashis263/reqres-user-manager.git
cd reqres-user-manager
```

#### 2. Install Dependencies
```sh
npm install
```

#### 3. Start the Development Server
```sh
npm start
```

#### 4. Open the Application
Visit `http://localhost:3000` in your browser.

## Assumptions and Considerations
- The application assumes the Reqres API is always available and functional.
- Token expiration is not handled as the API does not provide token expiry details.
- Basic styling is applied for responsiveness; advanced UI/UX can be added as needed.

## Useful Links
- [Reqres API Documentation](https://reqres.in/)
- [React Documentation](https://reactjs.org/)
- [Axios Documentation](https://axios-http.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [SweetAlert2 Documentation](https://sweetalert2.github.io/)
