#!/bin/bash

# Production Build Script for Droneverse Frontend
set -e

echo "🚀 Starting production build..."

# Set production environment variables
export NODE_ENV=production
export NEXT_PUBLIC_API_URL=http://new.droneverse.in
export NEXT_PUBLIC_DOMAIN=http://new.droneverse.in
export NEXT_PUBLIC_USE_DUMMY_DATA=false

# Clean previous builds
echo "🧹 Cleaning previous builds..."
rm -rf .next
rm -rf out

# Install dependencies
echo "📦 Installing dependencies..."
npm ci --only=production --prefer-offline --no-audit

# Run linting
echo "🔍 Running linting..."
npm run lint

# Build the application
echo "🏗️ Building application..."
npm run build

# Create production bundle
echo "📦 Creating production bundle..."
mkdir -p production-build
cp -r .next production-build/
cp -r public production-build/
cp package.json production-build/
cp package-lock.json production-build/

# Create deployment manifest
echo "📋 Creating deployment manifest..."
cat > production-build/deployment-info.txt << EOF
Build Date: $(date)
Commit: $(git rev-parse HEAD 2>/dev/null || echo "Unknown")
Branch: $(git branch --show-current 2>/dev/null || echo "Unknown")
Node Version: $(node --version)
NPM Version: $(npm --version)
Environment: Production
API URL: $NEXT_PUBLIC_API_URL
Domain: $NEXT_PUBLIC_DOMAIN
EOF

echo "✅ Production build completed successfully!"
echo "📁 Build files are in: production-build/"
echo "📊 Build size: $(du -sh production-build/ | cut -f1)"
