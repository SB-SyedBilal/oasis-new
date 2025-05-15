// Centralized validation and sanitization utilities for forms

// Email regex (RFC 5322 Official Standard)
export const isValidEmail = (email) =>
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);

// Name: allow letters, spaces, hyphens, apostrophes, min 2 chars
export const isValidName = (name) =>
  /^[a-zA-Z\s'-]{2,}$/.test(name);

// Phone: digits, optional +, 7-20 digits
export const isValidPhone = (phone) =>
  /^\+?[0-9\s-]{7,20}$/.test(phone);

// Basic XSS sanitization (removes < > &)
export const sanitizeInput = (str) =>
  String(str).replace(/[<>]/g, '').replace(/&/g, 'and');

// Subject: allow letters, numbers, spaces, min 2 chars
export const isValidSubject = (subject) =>
  /^[\w\s'-]{2,}$/.test(subject);

// General required field
export const isRequired = (value) => value && value.trim() !== '';
