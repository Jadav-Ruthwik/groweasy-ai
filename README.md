# 🚀 GrowEasy AI Importer

An AI-powered CRM CSV Importer built with **Next.js**, **Express.js**, and **Google Gemini AI** that intelligently understands CSV data, maps fields automatically, and converts records into GrowEasy CRM compatible format.

---

## ✨ Features

- 📂 Upload CRM CSV files
- 🤖 AI-powered column detection using Gemini AI
- 🔄 Automatic CRM field mapping
- 📊 CSV preview before import
- 📈 Import summary dashboard
- 🔍 Search imported records
- ⚡ Animated import progress
- 📱 Fully responsive modern UI
- 🎨 Clean SaaS-inspired design

---

## 🛠️ Tech Stack

### Frontend

- Next.js 16
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- Framer Motion
- Axios
- PapaParse

### Backend

- Node.js
- Express.js
- Multer
- Google Gemini AI SDK

---

## 📁 Project Structure

```text
groweasy-ai/
│
├── frontend/
│   ├── app/
│   ├── components/
│   ├── lib/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/Jadav-Ruthwik/groweasy-ai.git

cd groweasy-ai
```

---

## Backend Setup

```bash
cd backend

npm install

npm run dev
```

Create a `.env` file inside the backend folder.

```env
GEMINI_API_KEY=YOUR_API_KEY
```

---

## Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend runs on

```
http://localhost:3000
```

Backend runs on

```
http://localhost:5000
```

---

## 📤 How It Works

1. Upload a CRM CSV file.
2. Preview the uploaded data.
3. Click **Confirm AI Import**.
4. Gemini AI analyzes and maps the CSV.
5. Review the generated CRM records.
6. Import summary displays:
   - Imported records
   - Skipped records
   - Processing time
   - AI accuracy

---

## 📸 Screenshots

### Home Page

_Add screenshot here_

### CSV Upload

_Add screenshot here_

### Import Results

_Add screenshot here_

---

## 📌 Future Improvements

- Export processed CSV
- Export JSON
- Authentication
- Dark Mode
- Bulk imports
- Database integration
- CRM API integration
- Deployment on Vercel & Render

---

## 👨‍💻 Author

**Jadav Ruthwik**

📧 Email: 23211a05b9@bvrit.ac.in

GitHub:
https://github.com/Jadav-Ruthwik

LinkedIn:
https://www.linkedin.com/in/jadav-ruthwik/

---

## 📄 License

This project was developed as part of the **GrowEasy AI Importer Assignment**.

© 2026 Jadav Ruthwik. All Rights Reserved.
