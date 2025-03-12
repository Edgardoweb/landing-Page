import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combines multiple class names into a single string, resolving Tailwind CSS conflicts.
 * @param {...string} inputs - Class names or conditional class name objects
 * @returns {string} - Merged class name string
 */
export function cn(...inputs) {
    return twMerge(clsx(inputs))
}

/**
 * Formats a number as currency
 * @param {number} value - The number to format
 * @param {string} currency - Currency code (default: 'USD')
 * @param {string} locale - Locale for formatting (default: 'en-US')
 * @returns {string} - Formatted currency string
 */
export function formatCurrency(value, currency = "USD", locale = "en-US") {
    return new Intl.NumberFormat(locale, {
        style: "currency",
        currency,
    }).format(value)
}

/**
 * Truncates text to a specified length and adds ellipsis
 * @param {string} text - Text to truncate
 * @param {number} length - Maximum length before truncation
 * @returns {string} - Truncated text
 */
export function truncateText(text, length = 100) {
    if (!text || text.length <= length) return text
    return `${text.slice(0, length).trim()}...`
}

/**
 * Debounces a function call
 * @param {Function} fn - Function to debounce
 * @param {number} delay - Delay in milliseconds
 * @returns {Function} - Debounced function
 */
export function debounce(fn, delay = 300) {
    let timeoutId
    return (...args) => {
        if (timeoutId) clearTimeout(timeoutId)
        timeoutId = setTimeout(() => {
            fn(...args)
        }, delay)
    }
}

/**
 * Generates a random string ID
 * @param {number} length - Length of the ID
 * @returns {string} - Random ID
 */
export function generateId(length = 8) {
    return Math.random()
        .toString(36)
        .substring(2, 2 + length)
}

/**
 * Safely access nested object properties without errors
 * @param {Object} obj - Object to access
 * @param {string} path - Dot notation path to property
 * @param {*} defaultValue - Default value if property doesn't exist
 * @returns {*} - Property value or default
 */
export function getNestedValue(obj, path, defaultValue = undefined) {
    const keys = path.split(".")
    let result = obj

    for (const key of keys) {
        if (result === null || result === undefined || typeof result !== "object") {
            return defaultValue
        }
        result = result[key]
    }

    return result === undefined ? defaultValue : result
}

