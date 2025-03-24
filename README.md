# ExamEase - Online Examination Platform 📚

[![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)](https://firebase.google.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Responsive](https://img.shields.io/badge/Responsive-Design-4285F4?style=for-the-badge&logo=google-chrome&logoColor=white)](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)

A modern examination platform with user authentication and management system powered by Firebase.

**Live Demo:** [your-deployment-link-here] <!-- Add your deployment link -->

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
- **Hosting:** (Specify if using Firebase Hosting)

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

## Firebase Setup 🔥
1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable **Realtime Database** and **Email/Password Authentication**
3. Replace `firebaseConfig` in login.js and sign-up.js with your credentials:
```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "YOUR_DATABASE_URL",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_ID",
  appId: "YOUR_APP_ID"
};
```

## Installation 💻
1. Clone repository:
```bash
git clone [your-repo-url]
```
2. Install dependencies (if any):
```bash
npm install  # Add if using any node modules
```
3. Configure Firebase as per above instructions
4. Open in browser:
```bash
open index.html
```

## Screenshots 📸
<!-- Add your screenshots here -->
| Login Page | Signup Page | Dashboard |
|------------|-------------|-----------|
| ![Login](screenshots/login.png) | ![Signup](screenshots/signup.png) | ![Dashboard](screenshots/dashboard.png) |

## Security Notes 🔒
```javascript
// Current security implementation (improve these in production):
// - Passwords stored in Realtime Database (consider using Firebase Authentication)
// - Basic email/password validation
// - Session management through client-side redirects
```

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

## Roadmap 🗺️
- [ ] Implement Firebase Authentication
- [ ] Add password encryption
- [ ] Create exam interface
- [ ] Add role-based access control
- [ ] Implement result analytics

## License 📄
This project is licensed under the [MIT License](https://opensource.org/licenses/MIT)

---

**Developed with ❤️ by Prabhnoor Singh**  

[![GitHub](https://img.shields.io/badge/View_Source-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/prabhnoor25)
