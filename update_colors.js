const fs = require('fs');
const path = require('path');

const replacements = {
  "#fdfaf6": "#f4f7fb", // Background
  "#1c1917": "#0b1a30", // Foreground/Text
  "#78716c": "#4a5b73", // Muted text
  "#e7e5e4": "#d3dde8", // Borders
  "#57534e": "#334155", // Medium gray
  "#a8a29e": "#64748b", // Light gray
  "#fef08a": "#bfdbfe", // Yellow highlight -> Soft blue
  "#333": "#1e3a8a",    // Hover dark -> Navy hover
  "#44403c": "#1e293b", // Dark border
  "#292524": "#0f172a"  // Dark background
};

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;
  
  for (const [oldColor, newColor] of Object.entries(replacements)) {
    content = content.split(oldColor).join(newColor);
  }
  
  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log("Updated", filePath);
  }
}

const componentsDir = path.join(__dirname, 'components');
fs.readdirSync(componentsDir).forEach(file => {
  if (file.endsWith('.tsx')) {
    processFile(path.join(componentsDir, file));
  }
});

processFile(path.join(__dirname, 'app', 'globals.css'));
