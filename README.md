# 🎬 NxtFlix - Movie Streaming Application

NxtFlix is a modern React-based movie web application built with Vite and React Router. It mimics popular streaming platforms by offering user authentication, real-time movie search, interactive genre filtering, a persistent Watch Later list, and detailed view pages.

## ✨ Key Features

- 🔐 **JWT Authentication & Protected Routes:** Restricts core application pages (`Home`, `WatchLater`, `MovieDetails`) to authenticated users using cookie-based token checks (`js-cookie`).
- 🔍 **Real-Time Movie Search & Filtering:** Filter movies instantly by title search query or by specific genres (Action, Sci-Fi, Drama, etc.).
- 📌 **Watch Later Management:** Add or remove movies from a personalized Watch Later list stored locally in state and `localStorage`.
- 🔔 **Interactive Toast Notifications:** Context-driven popup alerts inform users when movies are added or removed from their list.
- 📱 **Movie Details Page:** Dynamic route rendering (`/movies/:id`) displaying rating, year, genre, and full movie details.
- 🚫 **404 Handling:** Integrated error handling displaying a custom "Page Not Found" screen for invalid search queries or missing routes without header navigation clutter.

## 🛠️ Tech Stack

- **Frontend Library:** React 18
- **Build Tool:** Vite
- **Routing:** React Router v6
- **State Management:** React Context API (`WatchLaterContext`)
- **Authentication:** `js-cookie`
- **Styling:** Dynamic CSS-in-JS & CSS Modules

## 🚀 Getting Started

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/NaraDeepthi/NXTFLIX.git](https://github.com/NaraDeepthi/NXTFLIX.git)
   cd nxtflix
