# Sample app

A lightweight Node.js module that provides user authentication functionality including **registration, login, password reset, JWT-based token verification**, and input validation for email and password.  
Designed for demonstration and educational purposes, it can be extended to a full backend API or integrated into larger projects.

---

## Table of Contents

- [Project Description](#project-description)
- [Installation](#installation)
- [Usage](#usage)
  - [Register User](#register-user)
  - [Login User](#login-user)
  - [Reset Password](#reset-password)
  - [Verify Token](#verify-token)
- [Contributing](#contributing)
- [License](#license)

---

## Project Description

The module is a simple, modular Node.js authentication system:

- Handles **user registration** with email format and password strength validation
- Provides **login functionality** and returns JWT tokens
- Supports **password reset** for users
- Includes **token verification** using JWT
- Demonstrates **basic error handling** and logging
- Uses **bcrypt** for password hashing and **jsonwebtoken** for secure authentication

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/user-auth-module.git
cd user-auth-module
```

2. Install dependencies:

```bash
npm install bcrypt jsonwebtoken
```

3. Ensure Node.js v18+ is installed:

```bash
node -v
```

4. Optional: Set a secret key for JWT in your environment:

```bash
export JWT_SECRET="your_super_secret_key"
```

---

## Usage

Import the module and use the functions in your project.

```js
import { registerUser, loginUser, resetPassword, verifyToken } from './user-auth.js';
```

### Register User

```js
try {
  const result = await registerUser('alice@example.com', 'Password123');
  console.log(result);
} catch (err) {
  console.error('Registration failed:', err.message);
}
```

### Login User

```js
try {
  const result = await loginUser('alice@example.com', 'Password123');
  console.log('JWT Token:', result.token);
} catch (err) {
  console.error('Login failed:', err.message);
}
```

### Reset Password

```js
try {
  const result = await resetPassword('alice@example.com', 'NewPass123');
  console.log(result.message);
} catch (err) {
  console.error('Password reset failed:', err.message);
}
```

### Verify Token

```js
try {
  const payload = verifyToken('your_jwt_token_here');
  console.log('Token payload:', payload);
} catch (err) {
  console.error('Token verification failed:', err.message);
}
```

---

## API Documentation

| Function | Parameters | Returns | Description |
|----------|------------|---------|-------------|
| `registerUser(email, password)` | `email: string, password: string` | Promise<{ message, user }> | Registers a new user with validation and password hashing |
| `loginUser(email, password)` | `email: string, password: string` | Promise<{ message, token, lastLogin }> | Authenticates a user and returns JWT token |
| `resetPassword(email, newPassword)` | `email: string, newPassword: string` | Promise<{ message, email }> | Resets a user’s password with validation |
| `verifyToken(token)` | `token: string` | Object | Verifies a JWT token and returns the payload |

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/my-feature`
3. Make your changes and commit them: `git commit -m "feat(auth): description"`
4. Push to your branch: `git push origin feature/my-feature`
5. Open a pull request describing your changes

Please ensure all code is tested and follows **consistent formatting**.

---

## License

This project is licensed under the **MIT License**.  
See the [LICENSE](LICENSE) file for more details.

