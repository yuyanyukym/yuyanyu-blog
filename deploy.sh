#!/bin/bash
# ~/xiaobai-blog/deploy.sh
# 自动部署脚本

set -e

REPO_DIR="/home/xiaobai/xiaobai-blog"
BUILD_DIR="$REPO_DIR/dist"

cd "$REPO_DIR"
git pull origin main
npm install
npm run build

# 重启 Nginx
systemctl reload nginx

echo "✓ Blog deployed at $(date)"
