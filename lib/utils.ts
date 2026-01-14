import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Helper function to get the correct asset path
 * For Vercel deployment, no base path prefix is needed
 * @param path - The path relative to the public directory (e.g., '/logo.jpeg')
 * @returns The path as-is for Vercel deployment
 */
export function getAssetPath(path: string): string {
  return path;
}
