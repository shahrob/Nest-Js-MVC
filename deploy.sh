#!/bin/bash

# Deployment script for NestJS MongoDB Sample Project

echo "🚀 Starting deployment process..."

# Build the project
echo "📦 Building the project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful"
else
    echo "❌ Build failed"
    exit 1
fi

# Run tests
echo "🧪 Running tests..."
npm run test

if [ $? -eq 0 ]; then
    echo "✅ Tests passed"
else
    echo "❌ Tests failed"
    exit 1
fi

# Start the application
echo "🚀 Starting the application..."
npm run start:prod

echo "✅ Deployment completed successfully!"
echo "🌐 Application is running at: http://localhost:3000"
