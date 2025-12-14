import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Gets the base path for the application
 * This is needed for GitHub Pages deployment where the app is hosted at a subdirectory
 */
export const basePath = process.env.NODE_ENV === 'production'
  ? '/nava-ganga-financial-consultancy'
  : '';

/**
 * Helper function to get the correct asset path
 * @param path - The path relative to the public directory (e.g., '/logo.jpeg')
 * @returns The full path including basePath if in production
 */
export function getAssetPath(path: string): string {
  return `${basePath}${path}`;
}
