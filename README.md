# 👑 NewsKing - Modern News App

A modern and responsive **News Application** built with **React + Vite**, featuring real-time news, category filtering, search, and infinite scrolling.

---

## 🚀 Features

* 📰 Live News Fetching – Real-time data powered by News API
* 🔍 Smart Search with Debounce – Reduces unnecessary API calls for better performance
* 📂 Category-Based Filtering – Browse news by Business, Sports, Technology, and more
* ♾️ Infinite Scrolling – Seamless content loading for smooth user experience
* ⚡ Optimized Performance – Built with Vite + Lazy Loading for faster load times
* 🎨 Modern UI – Styled with Tailwind CSS for a clean and elegant look
* 🧠 AbortController Handling – Prevents race conditions and stale data issues
* ⏳ Skeleton Loaders – Improves perceived performance while fetching data
* 🌙 Responsive Design – Works smoothly across mobile, tablet, and desktop

---

## 🛠️ Tech Stack

* **Frontend:** React, Vite
* **Styling:** Tailwind CSS
* **API:** GNews / News API
* **State Management:** React Hooks

---

## 📸 Preview
**Home**
> ![Home Page](/Images/Home.png)
**News**
> ![News Page](/Images/TopNews.png)
**About**
> ![About Page](/Images/About.png)

---

## ⚙️ Installation

```bash
# Clone the repo
git clone https://github.com/your-username/newsKing.git

# Navigate to project
cd newsKing

# Install dependencies
npm install

# Run the app
npm run dev
```

---

## 🔑 Environment Variables

Create a `.env` file in root:

```env
VITE_APIKEY=your_api_key_here
```

---

## 🌐 API Used

* GNews API (recommended)
* NewsAPI (limited requests)

---

## 📁 Project Structure

```
src/
 ├── components/
 │   ├── News.jsx
 │   ├── NewsItem.jsx
 │   ├── Navbar.jsx
 │   ├── Searchbar.jsx
 │   ├── Dropdown.jsx
 │   ├── SkeletonCard.jsx
 │
 ├── App.jsx
 └── main.jsx
```

---

## 🚀 Future Improvements

* ❤️ Bookmark / Save News
* 🌙 Dark Mode
* 🔥 Trending Section
* 🧠 Backend Caching (avoid API limits)
* 📊 News Analytics

---

## 🐞 Known Issues

* Free API has request limits (429 error)
* Some images may be null from API

---

## 🤝 Contributing

Feel free to fork this repo and improve it!

---

## 📄 License

This project is licensed under the MIT License.

---

## 💡 Author

Made with ❤️ by **Shubham (coder 👨‍💻)**

---
