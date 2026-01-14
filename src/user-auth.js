// user-auth.js

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const users = [];

const JWT_SECRET = process.env.JWT_SECRET || 'supersecretkey';

/**
 * Validate email format
 */
function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

/**
 * Validate password strength
 * Minimum 8 chars, at least one letter and one number
 */
function isStrongPassword(password) {
  return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
}

/**
 * Register a new user
 */
export async function registerUser(email, password) {
  if (!isValidEmail(email)) throw new Error('Invalid email format');
  if (!isStrongPassword(password)) throw new Error('Password must be at least 8 characters long and include letters and numbers');

  if (users.find(u => u.email === email)) {
    throw new Error('User already exists');
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = { email, password: hashedPassword, lastLogin: null };
  users.push(user);

  return { message: 'User registered successfully', user: { email } };
}

/**
 * Authenticate a user and return JWT
 */
export async function loginUser(email, password) {
  const user = users.find(u => u.email === email);
  if (!user) throw new Error('Invalid email or password');

  const match = await bcrypt.compare(password, user.password);
  if (!match) throw new Error('Invalid email or password');

  user.lastLogin = new Date().toISOString();

  const token = jwt.sign({ email: user.email }, JWT_SECRET, { expiresIn: '1h' });
  return { message: 'Login successful', token, lastLogin: user.lastLogin };
}

/**
 * Reset user password
 */
export async function resetPassword(email, newPassword) {
  if (!isStrongPassword(newPassword)) throw new Error('Password must be at least 8 characters long and include letters and numbers');

  const user = users.find(u => u.email === email);
  if (!user) throw new Error('User not found');

  user.password = await bcrypt.hash(newPassword, 10);
  return { message: 'Password reset successfully', email: user.email };
}

/**
 * Verify JWT token
 */
export function verifyToken(token) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (err) {
    throw new Error('Invalid or expired token');
  }
}
