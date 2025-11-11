# Troubleshooting Guide

## Common Issues and Solutions

### Issue: "npm start" doesn't work

**Solution 1: Clear cache and reinstall**
```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
npm start
```

**Solution 2: Check Node.js version**
Make sure you have Node.js version 14 or higher:
```bash
node --version
```

**Solution 3: Port already in use**
If port 3000 is already in use, you can:
- Close the other application using port 3000
- Or set a different port: `set PORT=3001 && npm start` (Windows) or `PORT=3001 npm start` (Mac/Linux)

### Issue: "Module not found" errors

**Solution:**
```bash
npm install
```

### Issue: Tailwind CSS not working

**Solution:**
Make sure `tailwind.config.js` and `postcss.config.js` are in the root directory, and `src/index.css` has the Tailwind directives.

### Issue: Blank page or styling not loading

**Solution:**
1. Check browser console for errors (F12)
2. Make sure all files are saved
3. Restart the development server

### Issue: Dark mode not working

**Solution:**
The dark mode is configured in `tailwind.config.js` with `darkMode: 'class'`. Make sure this setting is present.

## Step-by-Step Setup

1. **Navigate to project directory:**
   ```bash
   cd "C:\Jony\My portofolio\My-Profile"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm start
   ```

4. **Open browser:**
   The app should automatically open at `http://localhost:3000`

## If Nothing Works

1. Delete `node_modules` folder
2. Delete `package-lock.json`
3. Run `npm install` again
4. Run `npm start`

