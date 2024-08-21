# Subtitle Download Website

A web application for downloading subtitles, built with a MERN stack. The backend is developed using Mongoose, CORS, body-parser, Express, and Multer, while the frontend uses React, react-router-dom, and Axios.
![Homepage](https://github.com/sahan026/images/blob/main/image1.png)

## Features

- **User Authentication**: Register and log in to access subtitle download features.
- **Subtitle Upload**: Upload subtitle files in various formats.
- **Subtitle Search**: Search for subtitles by movie/series name.
- **Download Subtitles**: Download subtitles directly from the website.

## Tech Stack

### Backend

- **Node.js**: Server environment.
- **Express**: Web framework for Node.js.
- **Mongoose**: MongoDB object modeling tool.
- **CORS**: Cross-Origin Resource Sharing middleware.
- **body-parser**: Middleware to parse incoming request bodies.
- **Multer**: Middleware for handling `multipart/form-data`, used for file uploads.

### Frontend

- **React**: JavaScript library for building user interfaces.
- **react-router-dom**: DOM bindings for React Router.
- **Axios**: Promise-based HTTP client for the browser and Node.js.

## Installation

### Backend

1. **Clone the repository:**

```bash
git clone https://github.com/your-username/subtitle-download-website.git
cd subtitle-download-website
```

2. **Install dependencies:**

```bash
npm install concurrently express mongoose cors body-parser multer -g nodemon
```

3. **Create a `.env` file and add your MongoDB URI and other environment variables:**

```
MONGO_URI=your_mongodb_uri
PORT=9000
```

4. **Start the server:**

```bash
npm start
```

The backend server should now be running on `http://localhost:9000`.

### Frontend

1. **Navigate to the client directory:**

```bash
cd client
```

2. **Install dependencies:**

```bash
npm install axios react-router-dom
```

3. **Start the frontend development server:**

```bash
npm start
```

The frontend server should now be running on `http://localhost:4200`.

## Usage

### Register/Login

Users need to register or log in to upload or download subtitles. Use the registration and login forms provided on the website.

### Upload Subtitles

Once logged in, users can upload subtitle files using the upload form. The backend will handle the storage of these files.

### Search and Download Subtitles

Users can search for subtitles by movie or series name. The search results will provide download links for the available subtitles.

## Project Structure

### Backend

The backend includes the following files and directories:

```plaintext
server.js
routes/
├── user.js
├── subtitle.js
models/
├── user.js
├── subtitle.js
```

### Frontend

The frontend (located in the `client` directory) includes the following files and directories:

```plaintext
client/
├── public
│   ├── index.html
├── src
│   ├── components
│   │   ├── Home.js
│   │   ├── Navbar.js
│   │   ├── Login.js
│   │   ├── Signup.js
│   │   ├── InputSub.js
│   │   └── MovieDetails.js
│   ├── uploads
│   │   └── images
│   ├── subtitles
│   │   └── subtitles
│   ├── App.js
│   ├── index.js
│   └── api
│       └── axiosConfig.js
```

## Images

### Homepage

![Homepage](https://github.com/sahan026/images/blob/main/image1.png)

### Register Page

![Register Page](https://github.com/sahan026/images/blob/main/image3.png)

### Login Page

![Login Page](https://github.com/sahan026/images/blob/main/image2.png)

### Upload Subtitle Page

![Upload Subtitle Page](https://github.com/sahan026/images/blob/main/image4.png)

### Unic Subtitles Page

![Search Subtitles Page](https://github.com/sahan026/images/blob/main/image5.png)

## Contributing

Contributions are welcome! Please fork this repository and submit pull requests.
