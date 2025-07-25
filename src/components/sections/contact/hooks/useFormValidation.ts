'use client';
import { useState, useCallback } from 'react';

interface ValidationRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  min?: number;
  max?: number;
  custom?: (value: string) => boolean;
  message?: string;
}

interface ValidationRules {
  [key: string]: ValidationRule;
}

interface ValidationErrors {
  [key: string]: string;
}

export const useFormValidation = (rules: ValidationRules) => {
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});

  // Validate a single field
  const validateField = useCallback((name: string, value: string): boolean => {
    const rule = rules[name];
    if (!rule) return true;

    // Required validation
    if (rule.required && (!value || value.trim() === '')) {
      setErrors(prev => ({ 
        ...prev, 
        [name]: rule.message || `${name} is required` 
      }));
      return false;
    }

    // Skip other validations if field is empty and not required
    if (!rule.required && (!value || value.trim() === '')) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
      return true;
    }

    // Min length validation
    if (rule.minLength && value.length < rule.minLength) {
      setErrors(prev => ({ 
        ...prev, 
        [name]: rule.message || `${name} must be at least ${rule.minLength} characters` 
      }));
      return false;
    }

    // Max length validation
    if (rule.maxLength && value.length > rule.maxLength) {
      setErrors(prev => ({ 
        ...prev, 
        [name]: rule.message || `${name} must be no more than ${rule.maxLength} characters` 
      }));
      return false;
    }

    // Pattern validation (for email, phone, etc.)
    if (rule.pattern && !rule.pattern.test(value)) {
      setErrors(prev => ({ 
        ...prev, 
        [name]: rule.message || `${name} format is invalid` 
      }));
      return false;
    }

    // Number range validation
    if (rule.min && parseFloat(value) < rule.min) {
      setErrors(prev => ({ 
        ...prev, 
        [name]: rule.message || `${name} must be at least ${rule.min}` 
      }));
      return false;
    }

    if (rule.max && parseFloat(value) > rule.max) {
      setErrors(prev => ({ 
        ...prev, 
        [name]: rule.message || `${name} must be no more than ${rule.max}` 
      }));
      return false;
    }

    // Custom validation function
    if (rule.custom && !rule.custom(value)) {
      setErrors(prev => ({ 
        ...prev, 
        [name]: rule.message || `${name} validation failed` 
      }));
      return false;
    }

    // If all validations pass, remove error
    setErrors(prev => {
      const newErrors = { ...prev };
      delete newErrors[name];
      return newErrors;
    });
    return true;
  }, [rules]);

  // Validate all fields
  const validateAll = useCallback((data: { [key: string]: string }): boolean => {
    let isValid = true;
    const newErrors: ValidationErrors = {};

    Object.keys(rules).forEach(fieldName => {
      const fieldValue = data[fieldName] || '';
      if (!validateField(fieldName, fieldValue)) {
        isValid = false;
      }
    });

    return isValid;
  }, [rules, validateField]);

  // Mark field as touched
  const touchField = useCallback((name: string) => {
    setTouched(prev => ({ ...prev, [name]: true }));
  }, []);

  // Clear all errors
  const clearErrors = useCallback(() => {
    setErrors({});
    setTouched({});
  }, []);

  // Clear specific field error
  const clearFieldError = useCallback((name: string) => {
    setErrors(prev => {
      const newErrors = { ...prev };
      delete newErrors[name];
      return newErrors;
    });
  }, []);

  // Get error for specific field (only if touched)
  const getFieldError = useCallback((name: string): string | undefined => {
    return touched[name] ? errors[name] : undefined;
  }, [errors, touched]);

  return {
    errors,
    touched,
    validateField,
    validateAll,
    touchField,
    clearErrors,
    clearFieldError,
    getFieldError,
    hasErrors: Object.keys(errors).length > 0,
    isFieldValid: (name: string) => !errors[name]
  };
};
