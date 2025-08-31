// Debug utility to help diagnose loading issues
export async function debugFileLoading() {
  console.log('=== Debug File Loading ===');
  
  // Check if we're in development or production
  console.log('Environment:', import.meta.env.MODE);
  console.log('Base URL:', import.meta.env.BASE_URL);
  
  // Try to load files with different patterns
  const patterns = [
    '/src/content/*.md',
    '/src/content/blogs/*.md', 
    '/src/content/news/*.md',
    '../content/*.md',
    '../content/blogs/*.md',
    '../content/news/*.md'
  ];
  
  for (const pattern of patterns) {
    try {
      const files = import.meta.glob(pattern, { as: 'raw', eager: false });
      console.log(`Pattern "${pattern}":`, Object.keys(files));
    } catch (error) {
      console.log(`Pattern "${pattern}" failed:`, error);
    }
  }
  
  // Check if files exist by trying to fetch them directly
  const testFiles = [
    '/src/content/2025-01-23-aramco-prequalified.md',
    '/src/content/blogs/2025-01-15-future-of-multiphase-flow-measurement.md'
  ];
  
  for (const file of testFiles) {
    try {
      const response = await fetch(file);
      console.log(`Direct fetch "${file}":`, response.status, response.statusText);
    } catch (error) {
      console.log(`Direct fetch "${file}" failed:`, error);
    }
  }
  
  console.log('=== End Debug ===');
}

// Call this function to debug
if (import.meta.env.DEV) {
  debugFileLoading();
}