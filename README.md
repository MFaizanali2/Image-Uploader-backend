Image Uploader (Cloudinary + MERN Backend)

A lightweight MERN backend project for uploading images to Cloudinary. This API supports secure image handling, multipart form data, and simple REST endpoints for uploading and managing images. Built with Node.js, Express, MongoDB, and Cloudinary.

🚀 Features

Upload images directly to Cloudinary

REST API endpoints for easy integration

Multer for handling multipart/form-data

Secure environment variable management

Clean, modular backend structure

📦 Tech Stack

Node.js

Express.js

MongoDB

Cloudinary

Multer

🛠️ Installation & Setup
1. Clone the repository
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

2. Install dependencies
npm install

3. Install nodemon globally
npm i -g nodemon

4. Create a .env file
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
MONGODB_URI=your_mongodb_connection_string

5. Run the server
nodemon Server.js

📡 API Endpoint
POST /upload

Upload an image to Cloudinary.

Request:
multipart/form-data with a field named image

📁 Folder Structure
├── Model/

├── views/

├── public/

├── Server.js

└── package.json
