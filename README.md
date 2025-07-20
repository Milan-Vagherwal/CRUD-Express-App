
# Express CRUD & Routing Practice

This project is a basic Node.js + Express web application connected to MongoDB using Mongoose.  
It demonstrates the core concepts of:

- Routing
- Middleware usage
- Static file serving
- Form handling using EJS
- MongoDB CRUD operations

---

## 🚀 Features

- Create a new user (via form)
- Fetch user details
- Update user info (hardcoded)
- Serve static files (CSS/JS)
- Learn by experimenting with routes and middleware

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- EJS Template Engine
- HTML, CSS, JavaScript (Vanilla)

---

## 📦 Installation & Setup

1. Clone the repo  
   ```bash
   git clone https://github.com/your-username/project-name.git
   ```

2. Navigate to project directory  
   ```bash
   cd project-name
   ```

3. Install dependencies  
   ```bash
   npm install
   ```

4. Start MongoDB (locally)

5. Run the server  
   ```bash
   node app.js
   ```

6. Visit `http://localhost:3000` in your browser

---

## 🧪 API Endpoints Overview

| Method | Route               | Description             |
|--------|---------------------|-------------------------|
| GET    | `/`                 | Renders main form       |
| POST   | `/get-form-data`    | Logs form input         |
| GET    | `/register`         | Shows user registration |
| POST   | `/register`         | Saves user to DB        |
| GET    | `/get-user`         | Fetches hardcoded user  |
| GET    | `/update-user-pass` | Updates hardcoded user  |

---

## 📁 Folder Structure

```
project/
│
├── app.js
├── db.js
├── models/
│   └── user.js
├── public/
│   ├── index.css
│   └── index.js
├── views/
│   ├── index.ejs
│   └── register.ejs
└── README.md
```
<img width="270" height="633" alt="image" src="https://github.com/user-attachments/assets/1425b5ac-e36a-4af9-968e-907f02d8c432" />


---

## 🧠 What I Learned

- Setting up Express routes and middleware
- Serving static files and handling forms
- Connecting MongoDB with Mongoose
- Writing schema and using `findOne`, `findOneAndUpdate`
- Using EJS templates and rendering HTML forms

---

## 👨‍💻 Author

**Milan Vagherwal**  
Email: [your-email@example.com]  
GitHub: [https://github.com/your-username](https://github.com/your-username)
