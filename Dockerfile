# Use official Node.js runtime as base image
FROM node:18-alpine

# Set working directory in the container
WORKDIR /app

# Copy package files
COPY package*.json ./
COPY tsconfig.json ./

# Install dependencies
RUN npm ci --only=production

# Copy source code
COPY . .

# Build TypeScript to JavaScript
RUN npm run build

# Create uploads directory and set proper permissions
RUN mkdir -p uploads && chown -R node:node uploads

# Switch to non-root user for security
USER node

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]