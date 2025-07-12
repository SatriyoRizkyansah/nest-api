# RestoApp - Restaurant Management System

🚧 **Status: Under Development** 🚧

Aplikasi manajemen restoran yang sedang dalam tahap pengembangan. Sistem ini terdiri dari API backend dan web frontend untuk mengelola produk, pesanan, dan pengguna restoran.

## Tech Stack

### Backend (API)

- **NestJS** - Framework Node.js untuk membangun API yang efisien dan scalable
- **TypeScript** - Superset JavaScript dengan type safety
- **Prisma** - ORM modern untuk database operations
- **PostgreSQL/MySQL** - Database utama (configured via Prisma)

### Frontend (Web)

- **React** - Library JavaScript untuk membangun user interface
- **TypeScript** - Type safety untuk frontend development
- **Create React App** - Toolchain untuk React development

### Tools & Architecture

- **Monorepo Structure** - Menggunakan workspace untuk mengelola multiple apps
- **Database Migration** - Prisma migrations untuk version control database
- **Testing** - Jest untuk unit dan integration testing

## Project Setup

```bash
npm install
```

## Run Development

```bash
# API development
cd apps/api
npm run start:dev

# Web development
cd apps/web
npm start
```

## Current Features

### API Endpoints

- **Users** - Manajemen pengguna
- **Products** - Manajemen produk menu
- **Orders** - Manajemen pesanan

### Database Schema

- User management
- Product catalog
- Order processing
- Database migrations setup

## Development Progress

- ✅ Project structure setup
- ✅ Database schema & migrations
- ✅ Basic API endpoints (Users, Products, Orders)
- ✅ React frontend setup
- 🔄 Frontend UI implementation
- 🔄 Authentication system
- 🔄 Order management features
- 🔄 Product management UI

## License

MIT License
