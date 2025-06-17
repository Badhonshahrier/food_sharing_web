#  Food Sharing Web Application

**Live URL:** [https://food-sharing-auth-9235a.web.app](https://food-sharing-auth-9235a.web.app)

---

##  Project Purpose

This project is a community-driven **food sharing platform** where users can donate surplus food, request available food, and manage their donations. It aims to reduce food waste and help communities connect and share with those in need.

---

##  Key Features

-  **User Authentication:** Email/password and Google sign-in using Firebase Authentication.
-  **Add Food Donations:** Logged-in users can add new food items with images, quantity, pickup location, and expiry date.
-  **Available Foods List:** View all available foods shared by users.
-  **Manage My Foods:** Logged-in users can manage (edit/delete) the food donations they've posted.
-  **Request Foods:** Users can request available foods.
-  **Responsive UI:** Fully responsive layout with clean, modern design using Tailwind CSS and DaisyUI.
-  **Google Sign-In Integration**
-  **JWT Token Authentication:** Token-based protected routes using Firebase token verification in the backend.
-  **Food Status Tracking:** Track whether a food item is “Available” or “Requested.”

---

##  NPM Packages Used

###  Frontend:
- `react`
- `react-router-dom`
- `firebase`
- `axios`
- `sweetalert2`
- `daisyui`
- `tailwindcss`

###  Backend:
- `express`
- `cors`
- `dotenv`
- `mongodb`
- `firebase-admin`
- `jsonwebtoken`