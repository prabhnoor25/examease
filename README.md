# ExamEase - Online Examination Platform 📚

[![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)](https://firebase.google.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Responsive](https://img.shields.io/badge/Responsive-Design-4285F4?style=for-the-badge&logo=google-chrome&logoColor=white)](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)

A modern examination platform with user authentication and management system powered by Firebase.

**Live Demo:** [ExamEase](https://prabhnoor25.github.io/examease)

## Features ✨
- 🔐 Firebase Authentication
- 📱 Responsive Mobile-First Design
- 📊 User Session Management
- 📝 Form Validation
- 🔄 Real-time Database Updates
- 🎨 Interactive UI Components
- 📱 Mobile-Optimized Navigation

## Tech Stack 🛠️
- **Frontend:** HTML5, CSS3, JavaScript
- **Backend:** Firebase Realtime Database
- **Auth:** Firebase Authentication

## Project Structure 📁
```
examease/
├── index.html
├── navbar.css
├── navbar.js
├── styles.css
├── images/
│   ├── logo.png
│   ├── icon.png
│   └── ...other assets
└── pages/
    ├── login/
    │   ├── login.html
    │   ├── login.css
    │   └── login.js
    ├── sign-up/
    │   ├── sign-up.html
    │   ├── sign-up.css
    │   └── sign-up.js
    ├── contact-us.html
    └── pricing.html
```

## Installation 💻
1. Clone repository:
```bash
git clone https://github.com/prabhnoor25/examease.git
```
2. Open in browser:
```bash
open index.html
```

## Screenshots 📸

**Login Page** 

<img src="screenshots/login.png" style="width: 100%; display: block; margin: 0 auto;">

**Signup Page**  

<img src="screenshots/signup.png" style="width: 100%; display: block; margin: 0 auto;">

**Select Role**  

<img src="screenshots/select-role.png" style="width: 100%; display: block; margin: 0 auto;">

**Dashboard** 

<img src="screenshots/dashboard.png" style="width: 100%; display: block; margin: 0 auto;">

## Database Schema 🗃️
```json
{
  "users": {
    "userATexampleDOTcom": {
      "name": {
        "fName": "John",
        "lName": "Doe"
      },
      "email": "user@example.com",
      "pwd": "password123"
    }
  }
}
```

## License 📄
This project is licensed under the [MIT License](/LICENSE)

---

**Developed with ❤️ by Prabhnoor Singh**  

[![GitHub](https://img.shields.io/badge/View_Source-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/prabhnoor25/examease)
