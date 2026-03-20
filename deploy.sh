#!/bin/bash

# Portfolio Deployment Script
# This script deploys the portfolio app to production using Docker

set -e

# Configuration
APP_NAME="portfolio"
CONTAINER_NAME="portfolio-app-prod"
IMAGE_NAME="$APP_NAME:latest"

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

# Helper functions
log_info() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

log_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    log_error "Docker is not installed. Please install Docker first."
    exit 1
fi

if ! command -v docker-compose &> /dev/null; then
    log_error "Docker Compose is not installed. Please install Docker Compose first."
    exit 1
fi

# Stop and remove existing container
log_info "Stopping and removing existing container..."
docker-compose -f docker-compose.prod.yml down

# Remove old image
log_info "Removing old Docker image..."
docker rmi $IMAGE_NAME 2>/dev/null || true

# Build new image
log_info "Building new Docker image..."
docker-compose -f docker-compose.prod.yml build --no-cache

# Start the application
log_info "Starting the application..."
docker-compose -f docker-compose.prod.yml up -d

# Wait for application to start
log_info "Waiting for application to start..."
sleep 10

# Check if application is running
if docker ps | grep -q $CONTAINER_NAME; then
    log_info "Application is running successfully!"
    log_info "Container: $CONTAINER_NAME"
    log_info "Image: $IMAGE_NAME"

    # Show logs
    log_info "Recent logs:"
    docker logs --tail 20 $CONTAINER_NAME
else
    log_error "Failed to start the application!"
    log_error "Check the logs with: docker logs $CONTAINER_NAME"
    exit 1
fi

log_info "Deployment completed successfully!"
log_info "Application is available at: http://localhost:3000"