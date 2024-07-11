# Use the official Node.js image as the base image
FROM node:22

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and pnpm-lock.yaml files to the working directory
COPY package.json .
COPY pnpm-lock.yaml .

# Install the dependencies using pnpm
RUN npm install -g pnpm
RUN pnpm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port on which the application will run (if applicable)
EXPOSE 3000

# Start the application
CMD ["pnpm", "start:dev"]