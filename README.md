
---

````markdown
# 🧠 ThinkBoard – MERN Notes Application

A secure, responsive, and feature-rich full-stack note-taking application built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js). ThinkBoard allows users to create, edit, and delete personal notes with real-time updates, authentication, and a clean UI.

## 🚀 Features

- 🔐 **JWT Authentication** – Secure user registration and login
- 📋 **Note CRUD Operations** – Create, Read, Update, Delete notes
- 🎯 **Redux Toolkit** – Efficient global state management
- 💻 **Responsive UI** – Built with Bootstrap for all screen sizes
- 📦 **RESTful APIs** – Modular and scalable backend services
- 🗃️ **MongoDB Integration** – Persistent note storage
- ⚙️ **Clean Architecture** – Separation of concerns across frontend/backend

## 🛠️ Tech Stack

**Frontend:**
- React.js
- Redux Toolkit
- Bootstrap
- Axios

**Backend:**
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT
- Bcrypt.js

## 🧑‍💻 Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/manorath833/mern-thinkboard-notes_application.git
cd mern-thinkboard-notes_application
````

### 2. Setup the backend

```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` directory with the following:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

Then start the backend server:

```bash
npm run server
```

### 3. Setup the frontend

```bash
cd ../frontend
npm install
npm start
```

> The app should now be running at `http://localhost:3000/`

## 📸 Screenshots (Optional)

*Add screenshots here if available*

## 📂 Folder Structure

```
mern-thinkboard-notes_application/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
│
├── frontend/
│   ├── components/
│   ├── pages/
│   ├── redux/
│   └── App.js
│
├── README.md
```

## 📌 Future Enhancements

* 🌐 Deployment to Render/Vercel
* 🧭 Tag-based search and filtering
* 📱 PWA Support for offline access
* 🔔 Real-time notifications with Socket.io

## 🧑‍🎓 Author

* **Manorath Bhatt**
* [GitHub](https://github.com/manorath833)
* [LinkedIn](https://www.linkedin.com/in/manorath-bhatt)

---

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for details.

```

---


```
