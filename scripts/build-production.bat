@echo off
setlocal enabledelayedexpansion

REM Production Build Script for Droneverse Frontend (Windows)
echo 🚀 Starting production build...

REM Set production environment variables
set NODE_ENV=production
set NEXT_PUBLIC_API_URL=http://new.droneverse.in
set NEXT_PUBLIC_DOMAIN=http://new.droneverse.in
set NEXT_PUBLIC_USE_DUMMY_DATA=false

REM Clean previous builds
echo 🧹 Cleaning previous builds...
if exist .next rmdir /s /q .next
if exist out rmdir /s /q out
if exist production-build rmdir /s /q production-build

REM Install dependencies
echo 📦 Installing dependencies...
call npm ci --only=production --prefer-offline --no-audit

REM Run linting
echo 🔍 Running linting...
call npm run lint

REM Build the application
echo 🏗️ Building application...
call npm run build

REM Create production bundle
echo 📦 Creating production bundle...
mkdir production-build
xcopy .next production-build\.next /e /i /h /y
xcopy public production-build\public /e /i /h /y
copy package.json production-build\
copy package-lock.json production-build\

REM Create deployment manifest
echo 📋 Creating deployment manifest...
echo Build Date: %date% %time% > production-build\deployment-info.txt
echo Environment: Production >> production-build\deployment-info.txt
echo API URL: %NEXT_PUBLIC_API_URL% >> production-build\deployment-info.txt
echo Domain: %NEXT_PUBLIC_DOMAIN% >> production-build\deployment-info.txt

echo ✅ Production build completed successfully!
echo 📁 Build files are in: production-build\
echo.
pause
