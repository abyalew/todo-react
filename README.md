# 📝 Todo App (React + TypeScript + Vite)

A simple Todo application built with **React**, **TypeScript**, **TailwindCSS**, and **Vitest**. This app allows users to manage a list of tasks with basic features like adding, listing, and toggling todos. Currently, it uses `localStorage` for persistence.

---

## 🚀 Features

- Add new todos
- Mark todos as complete/incomplete
- Persist data in browser `localStorage`
- Component-level unit tests using **Vitest** and **Testing Library**
- Responsive and clean UI using **TailwindCSS** and **DaisyUI**

---

## 🧪 Testing

This project uses:

- [`Vitest`](https://vitest.dev/) for unit testing
- [`@testing-library/react`](https://testing-library.com/docs/react-testing-library/intro/) for rendering and user interaction testing

To run tests:

```bash
npm run test
```

## 🔧 Improvements & Future Work

✅ Use a backend API to store todos for better scalability and multi-device support.

✅ Automate deployment to platforms like Vercel, Netlify, or GitHub Pages via CI (e.g., GitHub Actions).

✅ Create integration and end-to-end (E2E) tests using tools like Cypress or Playwright for full user flow validation.