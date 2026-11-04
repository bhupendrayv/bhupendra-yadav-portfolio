import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const backupDir = path.join(process.cwd(), 'backups');
if (!fs.existsSync(backupDir)) {
  fs.mkdirSync(backupDir, { recursive: true });
}

const date = new Date().toISOString().replace(/[:.]/g, '-');
const backupPath = path.join(backupDir, `portfolio-backup-${date}.tar`);

const items = [
  'src',
  'public',
  'index.html',
  'package.json',
  'package-lock.json',
  'vite.config.js',
  'tailwind.config.js',
  'postcss.config.js',
  'eslint.config.js',
  'vercel.json',
  '.env.example',
  'README.md',
].filter((item) => fs.existsSync(path.join(process.cwd(), item)));

try {
  execSync(`tar -cf "${backupPath}" ${items.join(' ')}`, { stdio: 'inherit' });
  const stats = fs.statSync(backupPath);
  console.log(`✅ Backup successfully created: ${backupPath}`);
  console.log(`📦 Archive size: ${(stats.size / 1024).toFixed(2)} KB`);
} catch (error) {
  console.error('Backup failed:', error);
  process.exit(1);
}

