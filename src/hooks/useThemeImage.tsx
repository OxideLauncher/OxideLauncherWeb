import { useTheme } from './useTheme';

/**
 * Custom hook to get theme-aware image paths
 * Automatically switches between light and dark variants based on current theme
 * 
 * @param basePath - The base path to the dark version (e.g., '/assets/BrowseModpacks.webp')
 * @returns The appropriate image path based on the current theme
 */
export function useThemeImage(basePath: string): string {
  const { theme } = useTheme();
  
  // If theme is light, insert 'Light' before the file extension
  if (theme === 'light') {
    const lastDotIndex = basePath.lastIndexOf('.');
    if (lastDotIndex !== -1) {
      return basePath.slice(0, lastDotIndex) + 'Light' + basePath.slice(lastDotIndex);
    }
  }
  
  return basePath;
}
