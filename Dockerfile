# Use an official Node.js image
FROM node:20-alpine
#FROM node:20-slim

RUN mkdir -p /home/app
# Create app directory
WORKDIR /home/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app
COPY . .

# Expose the port Vite runs on
EXPOSE 5173

# Start the dev server
CMD ["npm", "run", "dev"]
