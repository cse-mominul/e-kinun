# e-kinun

A modern MERN stack e-commerce platform with a minimalist glassmorphism UI, modular architecture, BDT (৳) currency formatting, and practical inventory management workflows.

## Highlights

- **Modern UI:** Clean, responsive shopping experience with glassmorphism-inspired styling.
- **Modular Architecture:** Clear backend/frontend separation for easier maintenance and scaling.
- **BDT Currency Support:** Consistent product and cart price formatting in Bangladeshi Taka (৳).
- **Inventory Management:** Product stock tracking and admin-side management capabilities.

## Tech Stack

### Backend
- MongoDB
- Express.js
- Node.js
- Mongoose
- JWT Authentication

### Frontend
- React
- Vite
- Tailwind CSS
- Axios
- React Router

## Project Structure

```text
e-kinun/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── scripts/
│   └── server.js
└── frontend/
    ├── src/
    │   ├── api/
    │   ├── components/
    │   ├── context/
    │   └── pages/
    └── vite.config.js
```

## Installation

### 1) Clone the repository

```bash
git clone <your-repo-url>
cd e-kinun
```

### 2) Install dependencies

```bash
cd backend
npm install

cd ../frontend
npm install
```

### 3) Configure environment variables

Create a `.env` file inside `backend/` (see the next section for exact keys).

### 4) Run the backend

```bash
cd backend
npm run dev
```

Backend runs on: `http://localhost:5000`

### 5) Run the frontend

```bash
cd frontend
npm run dev
```

Frontend runs on: `http://localhost:5173`

## Environment Variables

Create this file:

- `backend/.env`

Recommended configuration:

```env
NODE_ENV=development
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/e-kinun
JWT_SECRET=your_super_secret_jwt_key
```

### Variable Notes
- `NODE_ENV`: App environment (`development`, `production`, etc.).
- `PORT`: Backend server port.
- `MONGO_URI`: MongoDB connection string.
- `JWT_SECRET`: Secret key used to sign authentication tokens.

## Useful Scripts

### Backend (`backend/package.json`)
- `npm run dev` — Start server with nodemon.
- `npm start` — Start server with Node.
- `npm run admin:create` — Create or update admin user.

### Frontend (`frontend/package.json`)
- `npm run dev` — Start Vite dev server.
- `npm run build` — Build production assets.
- `npm run preview` — Preview production build locally.

## API Base Path

The frontend uses `/api` as base path via Axios, and the backend serves:

- `/api/auth`
- `/api/products`
- `/api/orders`
- `/api/admin`

## License

This project is for learning and portfolio use. Add your preferred license if needed.

---

## Docker Setup

See `DOCKER_SETUP.md` for full details. Quick start:

1. Ensure you have a `backend/.env` file (see example below).
2. Build and start with Docker Compose:
    ```bash
    docker compose up --build
    ```
3. **Access Your App**
   - Visit `http://localhost:5000` in your browser.
   - API: `http://localhost:5000/api`

**Sample backend/.env:**
```env
PORT=5000
MONGO_URI=mongodb://mongodb:27017/e-kinun
JWT_SECRET=digicart_super_secret_key_change_in_production
NODE_ENV=production
```

---

## Default Admin Credentials

After running the admin script, use:

- **Email:** `admin@clickandpick.com`
- **Password:** `admin1234` (default from Docker env)

> **Note:** Change the password after first login for security!

---

## 🚀 GitHub Actions CI/CD

The project includes an automated deployment workflow located at `.github/workflows/deploy.yml`.

### Prerequisites (GitHub Secrets)
To use the CI/CD pipeline, add the following secrets in your GitHub Repository (**Settings > Secrets and variables > Actions**):

| Secret Name | Description |
| :--- | :--- |
| `DOCKERHUB_USERNAME` | Your Docker Hub username |
| `DOCKERHUB_TOKEN` | Your Docker Hub Personal Access Token |
| `VM_HOST` | Public IP of your CloudStack VM |
| `VM_USER` | SSH username (e.g., `ubuntu` or `root`) |
| `VM_PASSWORD` | SSH password for the VM |
| `MONGO_URI` | Production MongoDB connection string |
| `JWT_SECRET` | Secret key for JWT authentication |

### How it works
1. On every **push to `main`**, the workflow builds a Docker image.
2. It pushes the image to **Docker Hub**.
3. It connects to your VM via SSH.
4. It pulls the latest image and restarts the container automatically.

---

## Useful Commands

**Create/Update admin user:**
```bash
cd backend
npm run admin:create
```
db user pass:
web_admin
momin1452

