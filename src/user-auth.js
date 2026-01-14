// user-auth.js

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// In-memory "user database" (for demonstration)
const users = [];

// Secret key for JWT (in real apps, store in environment variable)
const JWT_SECRET = process.env.JWT_SECRET || 'supersecretkey';

/**
 * Register a new user
 * @param {string} email 
 * @param {string} password 
 */
export async function registerUser(email, password) {
  // Check if user already exists
  if (users.find(u => u.email === email)) {
    throw new Error('User already exists');
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Store user
  const user = { email, password: hashedPassword };
  users.push(user);

  return { message: 'User registered successfully', user: { email } };
}

/**
 * Authenticate a user and return JWT
 * @param {string} email 
 * @param {string} password 
 */
export async function loginUser(email, password) {
  const user = users.find(u => u.email === email);
  if (!user) {
    throw new Error('Invalid email or password');
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw new Error('Invalid email or password');
  }

  // Generate JWT (expires in 1 hour)
  const token = jwt.sign({ email: user.email }, JWT_SECRET, { expiresIn: '1h' });
  return { message: 'Login successful', token };
}

/**
 * Verify JWT token
 * @param {string} token 
 */
export function verifyToken(token) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (err) {
    throw new Error('Invalid or expired token');
  }
}
