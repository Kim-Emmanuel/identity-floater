
/**
 * Local Asset Registry
 * 
 * This file manages local image resources. 
 * Using Data URIs allows for offline rendering and "local" file simulation 
 * without needing complex build-time asset copying for this environment.
 */

// A high-tech, minimalist avatar placeholder in SVG format
// Represents a digital identity suitable for the "Hacker-Chic" theme.
const svgAvatar = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#06b6d4"/>
      <stop offset="100%" stop-color="#3b82f6"/>
    </linearGradient>
  </defs>
  <rect width="400" height="400" fill="url(#bg)"/>
  <!-- Abstract Head -->
  <circle cx="200" cy="160" r="70" fill="url(#accent)" opacity="0.9"/>
  <!-- Abstract Body -->
  <path d="M200 260c-80 0-130 140-130 140h260s-50-140-130-140z" fill="url(#accent)" opacity="0.6"/>
  <!-- Tech Ring -->
  <circle cx="200" cy="200" r="180" stroke="url(#accent)" stroke-width="2" fill="none" stroke-dasharray="10 20" opacity="0.3"/>
</svg>
`;

// Export as a Data URI for immediate usage in <img src="..." />
export const LOCAL_AVATAR = `data:image/svg+xml;base64,${btoa(svgAvatar)}`;
