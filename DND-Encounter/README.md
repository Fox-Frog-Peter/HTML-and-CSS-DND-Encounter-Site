# Encounter Builder Web App (MVP)
*A lightweight multi-RPG encounter generator with authentication and persistence.*

---

## 📖 Overview
The **Encounter Builder Web App** is a small but fully functional **full-stack project** designed to showcase:
- Secure user authentication
- RESTful API design
- Integration between **Spring Boot (backend)** and **React (frontend)**
- Procedural encounter generation for multiple RPG systems (e.g., **D&D, Mörk Borg, Stormlight, Cosmere RPGs**)

This application demonstrates both **core software engineering skills** and the ability to create **user-friendly web tools** for tabletop RPG players.

---

## 🚀 Features
### Core Pages
1. **Home / Landing Page**
    - Select RPG system
    - Buttons for *Generate Encounter*, *Login*, *Register*

2. **Register Page**
    - Create new account with username, email, and password

3. **Login Page**
    - JWT-secured login form

4. **Encounter Generator Page**
    - Options: game system, party size, difficulty, setting, encounter type
    - Dynamic output:
      > *“3 snarling goblins leap from the shadows of the ruined tavern…”*
    - Logged-in users can **save encounters**

5. **User Dashboard Page**
    - Logged-in users see saved encounters
    - Guests see: *“Encounters are not saved for guests.”*

---

## ⚙️ Tech Stack
- **Frontend:** React, React Router, Tailwind CSS
- **Backend:** Spring Boot (Java), REST API
- **Database:** PostgreSQL
- **Authentication:** JWT tokens
- **Build Tools:** Maven, npm/yarn

---

## 📂 Project Structure
/encounter-builder
├── backend/ # Spring Boot backend
│ ├── src/main/java/com/encounterbuilder
│ │ ├── controller/ # REST API endpoints
│ │ ├── model/ # User + Encounter models
│ │ ├── dao/ # Data access layer
│ │ └── security/ # JWT authentication
├── frontend/ # React frontend
│ ├── src/
│ │ ├── components/ # Buttons, Forms, Layout
│ │ ├── pages/ # Home, Login, Register, Encounter, Profile
│ │ ├── services/ # API calls to backend
└── README.md
