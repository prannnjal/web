#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 LeadBoostX Favicon Generator');
console.log('================================\n');

const publicDir = path.join(__dirname, '..', 'public');
const logoPath = path.join(publicDir, 'Screenshot_2025-08-13_023958-removebg-preview.png');

// Check if logo exists
if (!fs.existsSync(logoPath)) {
  console.error('❌ Logo file not found:', logoPath);
  console.log('Please make sure your logo is in the public folder');
  process.exit(1);
}

console.log('✅ Logo found:', path.basename(logoPath));
console.log('\n📋 Required Favicon Files:');
console.log('----------------------------');

const requiredFiles = [
  { name: 'favicon.ico', sizes: '16x16, 32x32, 48x48 (multi-size ICO)' },
  { name: 'favicon-16x16.png', sizes: '16x16 PNG' },
  { name: 'favicon-32x32.png', sizes: '32x32 PNG' },
  { name: 'apple-touch-icon.png', sizes: '180x180 PNG' }
];

requiredFiles.forEach(file => {
  const filePath = path.join(publicDir, file.name);
  if (fs.existsSync(filePath)) {
    console.log(`✅ ${file.name} - ${file.sizes}`);
  } else {
    console.log(`❌ ${file.name} - ${file.sizes} (MISSING)`);
  }
});

console.log('\n🔧 How to Generate Favicon Files:');
console.log('==================================');
console.log('1. Go to: https://favicon.io/');
console.log('2. Upload your logo: Screenshot_2025-08-13_023958-removebg-preview.png');
console.log('3. Download the generated favicon package');
console.log('4. Extract and copy all files to your public/ folder');
console.log('\nAlternative tools:');
console.log('- https://realfavicongenerator.net/ (Professional)');
console.log('- https://www.favicon-generator.org/ (Simple)');

console.log('\n📁 After generating, restart your dev server to see the favicon!');
console.log('\n💡 Pro tip: You can also use the HTML tool at /favicon-generator.html');
