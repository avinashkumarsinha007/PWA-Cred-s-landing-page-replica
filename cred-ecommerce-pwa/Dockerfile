# Step 1: Use an official Node image as the base image
FROM node:18-alpine

# Step 2: Set the working directory in the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json to the container
COPY package*.json ./

# Step 4: Install the project dependencies
RUN npm install

# Step 5: Copy the rest of the project files to the container
COPY . .

# Step 6: Build the project (for production)
RUN npm run build

# Step 7: Install a simple HTTP server to serve the static files
RUN npm install -g serve

# Step 8: Expose the port that the app will run on
EXPOSE 3000

# Step 9: Start the app using the serve command
CMD ["serve", "-s", "build", "-l", "3000"]
