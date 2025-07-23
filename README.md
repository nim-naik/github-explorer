---

## 🔍 GitHub Explorer App

### 📌 Overview

The **GitHub Explorer** is a lightweight, responsive web application that allows users to search for GitHub profiles and view key information such as followers, following, bio, and repositories. It uses the GitHub public API and is built using vanilla **HTML**, **CSS**, and **JavaScript** — no frameworks required.

---

### 🧠 App Summary

* **Search GitHub users** by typing their username
* View profile details:

  * Name, Bio, Avatar
  * Followers, Following
  * Public Repositories
* Display up to 5 repositories with clickable links
* Provides error messages for invalid usernames or API errors
* Responsive and styled with a modern gradient UI
* No dependencies beyond `axios` CDN for API requests

---

### 🚀 How to Run

1. **Download or clone** the repository.
2. Extract the files if zipped.
3. Simply open `index.html` in any modern web browser.


---

### 📂 Files Included

* `index.html` – Main HTML file with form and container elements
* `style.css` – Styling using Poppins font, gradients, and responsive layout
* `script.js` – Handles API calls and DOM manipulation using vanilla JavaScript
* `user.jpeg` – Placeholder avatar (optional), replaceable with dynamic GitHub avatars
* `README.md` – This file

---

### 🔧 Dependencies

* [Axios CDN](https://cdn.jsdelivr.net/npm/axios) (loaded via script tag)
* GitHub REST API (no authentication required for basic usage)

---

### 🖼️ UI and Icons

* The application uses a stylish, card-based UI with soft gradients and shadow effects.
* All avatars are pulled live from GitHub API.
* A default `user.jpeg` image is included for development or placeholder use.

---

### 🛠 Requirements

* Modern browser (Chrome, Firefox, Edge)
* Internet connection (to fetch GitHub data via API)

---
