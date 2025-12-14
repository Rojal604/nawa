# Deployment Guide - GitHub Pages

This guide will walk you through deploying your **Nava Ganga Financial Consultancy** website to GitHub Pages.

## 📋 Prerequisites

- Git installed on your computer
- GitHub account (username: **AriMhz**)
- Your website code ready to deploy

## 🚀 Deployment Steps

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and log in with your account (**AriMhz**)
2. Click the **+** button in the top-right corner and select **New repository**
3. Fill in the repository details:
   - **Repository name**: `nava-ganga-financial-consultancy`
   - **Description**: Financial consultancy website
   - **Visibility**: Choose **Public** (required for free GitHub Pages)
   - **DO NOT** initialize with README, .gitignore, or license
4. Click **Create repository**

### Step 2: Initialize Git and Push Code

Open PowerShell/Terminal in your project directory (`c:\Users\user\Downloads\nava-ganga-financial-consultancy`) and run:

```bash
# Initialize git repository (if not already initialized)
git init

# Add all files to git
git add .

# Commit your changes
git commit -m "Initial commit: Nava Ganga Financial Consultancy website"

# Add your GitHub repository as remote
git remote add origin https://github.com/AriMhz/nava-ganga-financial-consultancy.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

> **Note**: You may be prompted to authenticate with GitHub. Follow the on-screen instructions.

### Step 3: Configure GitHub Pages

1. Go to your repository on GitHub:
   `https://github.com/AriMhz/nava-ganga-financial-consultancy`

2. Click on **Settings** tab (top menu)

3. In the left sidebar, click **Pages** (under "Code and automation" section)

4. Under **Source**, select:
   - **Source**: `GitHub Actions`
   
5. That's it! GitHub will now use the Actions workflow to deploy your site.

### Step 4: Wait for Deployment

1. Go to the **Actions** tab in your repository
2. You should see a workflow run called "Deploy Next.js site to Pages"
3. Wait for it to complete (usually takes 2-5 minutes)
4. Once the workflow shows a green checkmark ✅, your site is deployed!

### Step 5: Access Your Website

Your website will be available at:

🌐 **https://AriMhz.github.io/nava-ganga-financial-consultancy/**

## 🔄 Updating Your Website

Whenever you make changes to your website:

```bash
# Make your changes to the code
# Then commit and push:
git add .
git commit -m "Description of your changes"
git push
```

The GitHub Actions workflow will automatically rebuild and redeploy your site!

## 🛠️ Configuration Details

### Next.js Configuration

The `next.config.mjs` file has been configured with:

- **`output: 'export'`**: Generates static HTML/CSS/JS files
- **`basePath: '/nava-ganga-financial-consultancy'`**: Ensures proper routing for GitHub Pages
- **`images.unoptimized: true`**: Allows images to work with static export

### GitHub Actions Workflow

The workflow file (`.github/workflows/deploy.yml`) automatically:

1. Checks out your code
2. Sets up Node.js environment
3. Installs dependencies
4. Builds your Next.js site
5. Deploys to GitHub Pages

It runs automatically whenever you push to the `main` branch.

## 🐛 Troubleshooting

### Deployment Failed

1. Check the **Actions** tab for error messages
2. Ensure all dependencies are correctly installed
3. Verify the build works locally: `npm run build`

### 404 Error on Deployment

1. Make sure GitHub Pages is configured to use **GitHub Actions** (not a branch)
2. Wait a few minutes after the workflow completes
3. Clear your browser cache and try again

### Images or Links Not Working

1. Ensure all internal links use relative paths
2. Images should be in the `public` folder
3. Check that `basePath` is correctly set in `next.config.mjs`

### Permission Errors During Push

If you get authentication errors:

1. Set up a Personal Access Token (PAT):
   - Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
   - Generate new token with `repo` scope
   - Use the token as your password when pushing

2. Or set up SSH keys:
   - Follow [GitHub's SSH key guide](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)

## 📞 Need Help?

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Next.js Static Export Documentation](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)

---

**Happy Deploying! 🎉**
