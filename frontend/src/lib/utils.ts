import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Utility function to merge Tailwind CSS classes intelligently
 * 
 * Why we need this:
 * - clsx: handles conditional classes ("text-red-500", isActive && "bg-blue-500")
 * - twMerge: resolves Tailwind conflicts (if you have "bg-red-500 bg-blue-500", only blue wins)
 * 
 * Example:
 * cn("bg-red-500", "text-white", isLarge && "text-xl", className)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Create initials from a full name
 * Used for avatar placeholders when images fail
 */
export function getInitials(name: string): string {
  return name
    .split(' ')
    .map(word => word.charAt(0))
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

/**
 * Format a date to readable string
 * Example: "2024-01-15" → "Jan 15, 2024"
 */
export function formatDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short', 
    day: 'numeric',
  }).format(d)
}