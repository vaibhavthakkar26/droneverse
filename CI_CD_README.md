# 🚀 CI/CD Pipeline for Droneverse Frontend

This document explains the complete CI/CD setup for deploying the Droneverse frontend application to production.

## 📋 Overview

The CI/CD pipeline automatically builds, tests, and deploys the frontend application when code is pushed to the `main` or `master` branch. It includes:

- **Automated Testing**: Linting and build verification
- **Production Build**: Optimized build with production environment variables
- **FTP Deployment**: Automatic deployment to Hostinger server
- **Build Artifacts**: Caching and artifact management

## 🏗️ Pipeline Structure

### 1. Test and Build Job (`test-and-build`)
- **Trigger**: Push to main/master branch or pull request
- **Actions**:
  - Code checkout
  - Node.js setup (v18)
  - Dependency installation
  - Linting
  - Production build
  - Artifact upload

### 2. Deploy Job (`deploy`)
- **Trigger**: Only after successful build (main/master branch only)
- **Actions**:
  - Download build artifacts
  - Production dependency installation
  - FTP deployment to server
  - Deployment verification

## 🔧 Setup Requirements

### GitHub Secrets
Configure these secrets in your GitHub repository settings:

```bash
FTP_SERVER=your-ftp-server.com
FTP_USERNAME=your-username
FTP_PASSWORD=your-password
```

### Environment Variables
The pipeline automatically sets these production variables:

```bash
NODE_ENV=production
NEXT_PUBLIC_API_URL=http://new.droneverse.in
NEXT_PUBLIC_DOMAIN=http://new.droneverse.in
NEXT_PUBLIC_USE_DUMMY_DATA=false
```

## 🚀 Manual Deployment

### Using Build Scripts

#### Linux/Mac:
```bash
cd frontend
chmod +x scripts/build-production.sh
./scripts/build-production.sh
```

#### Windows:
```cmd
cd frontend
scripts\build-production.bat
```

### Using NPM Scripts
```bash
# Install production dependencies
npm ci --only=production

# Build for production
npm run build

# Start production server
npm start
```

## 📁 Deployment Files

### Included in Deployment:
- `.next/` - Built application files
- `public/` - Static assets
- `package.json` - Dependencies
- `package-lock.json` - Lock file
- `deployment-info.txt` - Build metadata

### Excluded from Deployment:
- `src/` - Source code
- `node_modules/` - Dependencies
- `.github/` - CI/CD configuration
- Configuration files (tailwind, postcss, eslint)
- Documentation files

## 🔍 Monitoring and Debugging

### Build Artifacts
- Stored for 7 days
- Accessible in GitHub Actions
- Include build logs and files

### Deployment Logs
- Verbose logging enabled
- FTP transfer details
- Build timestamp and commit info

## 🛠️ Troubleshooting

### Common Issues:

1. **Build Failures**
   - Check linting errors
   - Verify environment variables
   - Check Node.js version compatibility

2. **Deployment Failures**
   - Verify FTP credentials
   - Check server directory permissions
   - Ensure sufficient disk space

3. **Environment Issues**
   - Verify API endpoints are accessible
   - Check production environment variables
   - Ensure dummy data is disabled

### Debug Commands:
```bash
# Check build output
npm run build

# Verify production build
npm start

# Check environment variables
echo $NODE_ENV
echo $NEXT_PUBLIC_API_URL
```

## 🔄 Pipeline Customization

### Adding New Steps:
1. Edit `.github/workflows/deploy.yml`
2. Add new steps under the appropriate job
3. Test locally before pushing

### Environment-Specific Configurations:
- Modify `production.env` for environment variables
- Update `deploy.config.js` for deployment settings
- Adjust build scripts as needed

## 📊 Performance Optimization

### Build Optimizations:
- Production-only dependencies
- Cached npm packages
- Optimized Next.js build
- Excluded development files

### Deployment Optimizations:
- Incremental FTP transfers
- Selective file inclusion
- Backup and rollback support
- Parallel job execution

## 🔒 Security Considerations

- FTP credentials stored as GitHub secrets
- Production environment isolation
- No source code in deployment
- Secure dependency installation

## 📞 Support

For issues with the CI/CD pipeline:
1. Check GitHub Actions logs
2. Verify environment configuration
3. Test build scripts locally
4. Review deployment configuration

---

**Last Updated**: $(date)
**Pipeline Version**: 2.0
**Next.js Version**: 15.4.6
