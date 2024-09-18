# Project: PWA in Micro-Frontend Architecture

## Project Overview
This project is a **Progressive Web App (PWA)** that replicates **Cred's landing page** with e-commerce functionalities. The application is developed using **React** and follows a **micro-frontend architecture**, ensuring modularity and scalability. 

Key features of this project include:
- **PWA Implementation** for enhanced performance, offline support, and mobile-first experience.
- **Micro-frontend Architecture** that allows different parts of the application to be independently deployed and integrated.
- **Lazy-loading of Components** to boost performance by loading only required components on demand.
- High performance metrics achieved, passing **Lighthouse testing**.
- **Unit and Functional Tests** using **Jest** and **Cypress** for custom components and functionality.
- **Docker** used for containerization and easy setup.

## Features Implemented
1. **PWA:** The entire application is built with Progressive Web App standards.
2. **Micro-frontend Architecture:** The application is modular and built using micro-frontends to ensure flexibility and maintainability.
3. **Jest Unit Testing:** Unit tests for custom components to ensure code quality and correctness.
4. **Lazy-loaded Components:** All React components are lazy-loaded for optimized performance.
5. **Cypress Testing:** Functional and end-to-end testing using Cypress.
6. **React**: The project is built using **React.js** for creating dynamic and efficient user interfaces.
7. **Desktop View:** Optimized for desktop with responsiveness in mind.
8. **Dockerized Application:** The project can be run using Docker for consistent development and production environments.

## Getting Started

### Prerequisites
- Node.js (v16+)
- Docker (for containerization)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/pwa-cred-landing-page-replica.git

2. Navigate to the project directory:

   cd pwa-cred-landing-page-replica

3. Install the dependencies:
   
   npm install

5. Run the application:
   
   npm start

### Running the Application with Docker

1. Build the Docker image:
 
  docker build -t pwa-cred-replica .

2. Run the Docker container:

   docker run -p 3000:3000 pwa-cred-replica
