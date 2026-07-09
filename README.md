# LetsChat

LetsChat is a real-time full-stack messaging application built with modern web technologies. It offers users a fast, secure, and smooth chatting experience with live messaging, online presence, and protected authentication.

## Features

- **Real-time chat** powered by Socket.IO — instant messaging with live online status
- **Secure auth** — JWT-based authentication with protected client/server routes
- **Modular architecture** — reusable components for a fast, maintainable UI
- **Robust error handling** — structured responses across frontend and backend
- **Personalization** — full profile and settings management

## Tech Stack

- React
- Vite
- Tailwind CSS
- Node.js
- Express.js
- MongoDB with Mongoose
- Socket.IO
- JWT
- Cloudinary

## Getting Started

### Setup .env file

```env
MONGODB_URI=...
PORT=5001
JWT_SECRET=...

CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...

NODE_ENV=development
```

### Build the app

```bash
npm run build
```

### Start the app

```bash
npm start
```