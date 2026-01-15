// Helper to get the correct base path for assets
export const getBasePath = () => {
  return process.env.NEXT_PUBLIC_BASE_PATH || ''
}

// Helper to get asset URL with base path
export const getAssetUrl = (path: string) => {
  const basePath = getBasePath()
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return `${basePath}${normalizedPath}`
}
