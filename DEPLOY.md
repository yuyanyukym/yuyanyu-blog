# 快速部署到 VPS 的说明

## 本地搭建（已完成）
1. Astro 项目已初始化
2. 首页内容在 `src/pages/index.astro`

## VPS 部署（下一步）

### 1. 初始化远程 Git 仓库
```bash
ssh xiaobai@204.152.208.139
cd /home/xiaobai
git init --bare xiaobai-blog.git
cd xiaobai-blog.git/hooks
cp /path/to/.git-hooks-post-receive post-receive
chmod +x post-receive
```

### 2. 本地配置 Git remote
```bash
cd ~/Projects/xiaobai-blog
git init
git add .
git commit -m "init: Astro blog setup"
git remote add origin ssh://xiaobai@204.152.208.139/home/xiaobai/xiaobai-blog.git
git push -u origin main
```

### 3. VPS 端 Nginx 配置
```bash
# 复制配置
sudo cp nginx.conf.example /etc/nginx/sites-available/xiaobai-blog
sudo ln -s /etc/nginx/sites-available/xiaobai-blog /etc/nginx/sites-enabled/

# 测试 + 启动
sudo nginx -t
sudo systemctl restart nginx
```

### 4. 之后每次更新
```bash
git push origin main
# VPS 端自动触发 post-receive，构建部署完成
```

## 难度点（学习价值）
- Git hooks 自动化部署
- Nginx 反向代理 + 静态文件缓存
- 二进制部署 vs 手动 rsync
- Astro 构建优化
