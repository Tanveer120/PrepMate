const fs = require('fs');

const indexCssPath = 'd:/PrepMate/src/index.css';
let css = fs.readFileSync(indexCssPath, 'utf8');

function hexToRgb(hex) {
  hex = hex.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return `${r} ${g} ${b}`;
}

css = css.replace(/--color-[a-z0-9-]+:\s*#([A-Fa-f0-9]{6});/g, (match, hex) => {
  const name = match.split(':')[0];
  return `${name}: ${hexToRgb(hex)};`;
});

fs.writeFileSync(indexCssPath, css);
console.log("Converted hex to rgb in index.css");

const tailwindConfigPath = 'd:/PrepMate/tailwind.config.js';
let config = fs.readFileSync(tailwindConfigPath, 'utf8');

config = config.replace(/'var\(--color-([a-z0-9-]+)\)'/g, "'rgb(var(--color-$1) / <alpha-value>)'");

fs.writeFileSync(tailwindConfigPath, config);
console.log("Updated tailwind.config.js to use rgb(var() / <alpha-value>)");
