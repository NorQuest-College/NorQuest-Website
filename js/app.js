/**
 * Javascript for the webiste
 */
import "./scripts.js";
// import "./customizer.js";
// import "./navigation.js";
// import "./skip-link-focus-fix.js";

// Import SVGs for sprites
function requireAll(r) {
  r.keys().forEach(r);
}

requireAll(require.context('/images/sprites/', true, /\.svg$/));