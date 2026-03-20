# Docker Deployment Guide

This guide explains how to deploy the portfolio application using Docker on a VPS.

## Prerequisites

- Docker 20.10+ installed
- Docker Compose 2.0+ installed
- Node.js 18+ (if building locally)
- Git

## Quick Start

### Option 1: Using Docker Compose (Recommended)

1. Clone the repository:
```bash
git clone <your-repo-url>
cd prj_portfolio
```

2. Build and run:
```bash
docker-compose up -d
```

The application will be available at `http://localhost:3000`

### Option 2: Using the Deploy Script

1. Make the script executable:
```bash
chmod +x deploy.sh
```

2. Run the deployment:
```bash
./deploy.sh
```

## Production Deployment

### Using Nginx Reverse Proxy

1. Update `nginx/conf.d/default.conf` with your domain name:
```nginx
server_name your-domain.com www.your-domain.com;
```

2. Obtain SSL certificates with Let's Encrypt:
```bash
# Install certbot
sudo apt update
sudo apt install certbot python3-certbot-nginx

# Obtain certificates
sudo certbot --nginx -d your-domain.com -d www.your-domain.com
```

3. Deploy with production configuration:
```bash
docker-compose -f docker-compose.prod.yml up -d
```

### Environment Variables

Create a `.env` file in the root directory:
```env
NODE_ENV=production
PORT=3000
```

## Docker Commands

### Build the image:
```bash
docker build -t portfolio .
```

### Run the container:
```bash
docker run -d -p 3000:3000 --name portfolio portfolio
```

### View logs:
```bash
docker logs -f portfolio
```

### Stop the container:
```bash
docker stop portfolio
```

### Remove the container:
```bash
docker rm portfolio
```

## VPS Deployment Steps

### 1. Server Setup

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker $USER

# Install Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

### 2. Clone and Deploy

```bash
# Clone repository
git clone <your-repo-url>
cd prj_portfolio

# Make deploy script executable
chmod +x deploy.sh

# Deploy
./deploy.sh
```

### 3. Configure Firewall

```bash
# Allow HTTP and HTTPS
sudo ufw allow 22
sudo ufw allow 80
sudo ufw allow 443
sudo ufw enable
```

### 4. Setup SSL with Certbot

```bash
# Install certbot
sudo apt install certbot python3-certbot-nginx

# Get SSL certificate
sudo certbot --nginx -d your-domain.com -d www.your-domain.com

# Setup auto-renewal
sudo crontab -e
# Add: 0 12 * * * /usr/bin/certbot renew --quiet
```

## Troubleshooting

### Container won't start:
```bash
# Check logs
docker logs portfolio-app-prod

# Check container status
docker ps -a
```

### Port already in use:
```bash
# Find what's using the port
sudo lsof -i :3000

# Kill the process
sudo kill -9 <PID>
```

### Permission issues:
```bash
# Fix Docker permissions
sudo chown -R $USER:$USER /var/run/docker.sock
```

## Performance Optimization

The Docker image is already optimized with:
- Multi-stage build
- Alpine Linux for smaller size
- Node.js production mode
- Gzip compression in Nginx
- Security headers

## Monitoring

To monitor the application:

```bash
# View resource usage
docker stats

# View logs in real-time
docker logs -f portfolio-app-prod

# Check container health
docker inspect portfolio-app-prod | grep -A 10 Health
```

## Updates

To update the application:

1. Pull latest changes:
```bash
git pull origin main
```

2. Redeploy:
```bash
./deploy.sh
```

## Security Notes

- The application runs as a non-root user
- Security headers are configured
- Docker containers have restricted privileges
- SSL/TLS is enforced in production
- Rate limiting can be configured in Nginx if needed