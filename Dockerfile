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


RUN mkdir -p uploads && chown -R node:node uploads

USER node

EXPOSE 3000


CMD ["npm", "start"]