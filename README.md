# SUPREME
### we are supreme!

This project is a fully functional freelancing website where clients can place orders for custom slides, and the admin can create and deliver those slides. Payments are processed through blockchain technology, ensuring secure and transparent transactions.

## Features

- User Authentication: Allow users to sign up, log in, and manage their accounts.
- Order Placement: Clients can place orders for custom slides with specific requirements.
- User Panel: User can view their spent amount, their placed orders and the order activity.
- Admin Panel: Admins can view and manage orders, create and deliver slides, and monitor user activity.
- Payment Integration: Integration with blockchain technology for secure and transparent payments.
- Responsive Design: The website is responsive and works seamlessly on desktop and mobile devices.
- Animation: Utilizes animations and transitions to enhance the user experience.
- Customization: TailwindCSS is used for styling, allowing for easy customization and theming.

## Technologies Used

### Frontend

- React with Vite: Fast and lightweight development environment for React applications.
- TailwindCSS: Utility-first CSS framework for building custom designs quickly.
- DaisyUI: UI parts which makes the production fast and responsive.
- Framer Motion: A library for creating fluid animations and transitions in React applications.
- Locomotive: For smooth scrolling experience.

### Backend

- Express.js: Web application framework for Node.js, providing a robust set of features for building APIs.
- Node.js: JavaScript runtime environment for server-side development.
- MongoDB: NoSQL database for storing application data, providing flexibility and scalability.

## Folder Structure

```
frontend/
  ├── react-app/       # Frontend React application with Vite
  │   ├── public/      # Public assets and index.html
  │   ├── src/         # Source code for React components and pages
  │   └── package.json # Frontend dependencies and scripts
backend/
  ├── express-app/     # Backend Express.js application
  │   ├── controllers/ # Controllers for handling routes and business logic
  │   ├── models/      # Data models for MongoDB
  │   ├── routes/      # Express routes for API endpoints
  │   └── package.json # Backend dependencies and scripts
```

## Installation

1. Clone the repository to your local machine:

```bash
git clone <https://github.com/WaliMuhammadAhmad/supreme.git>
```

2. Install dependencies for the frontend and backend:
- I recommend split the terminal:
```bash
# Navigate to the frontend directory
cd frontend/react-app
```
```
# Install frontend dependencies
npm install
```
```
# Navigate to the backend directory
cd ../../backend/express-app
```
```
# Install backend dependencies
npm install
```

3. Start the frontend and backend servers:

```bash
npm run dev
```

4. Access the application in your localhost.

## License

This project is licensed under the [MPL-2.0 license](LICENSE).
