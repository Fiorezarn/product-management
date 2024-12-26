# 🗃 Product Management System API

This is a RESTful API for a simple Product Management System, built with Node.js, Express, and Sequelize ORM.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Requirements](#requirements)
- [Installation](#installation)
- [Database Setup](#database-setup)
- [API Documentation](#api-documentation)
- [Deployment](#deployment)

## ✨ Features

- 📝 CRUD operations for products
- 🔍 Search products by name
- 📄 Pagination for product listing
- 🌳 Nested object representation of products with their series
- 🏗️ MVC architecture

## 🛠️ Tech Stack

![Node.js](https://img.shields.io/badge/-Node.js-339933?style=flat-square&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/-Express-000000?style=flat-square&logo=express&logoColor=white)
![MySQL](https://img.shields.io/badge/-MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white)
![Sequelize](https://img.shields.io/badge/-Sequelize-52B0E7?style=flat-square&logo=sequelize&logoColor=white)
![Axios](https://img.shields.io/badge/-Axios-5A29E4?style=flat-square&logo=axios&logoColor=white)
![Swagger](https://img.shields.io/badge/-Swagger-85EA2D?style=flat-square&logo=swagger&logoColor=black)
![Faker](https://img.shields.io/badge/-Faker-7D4698?style=flat-square&logo=faker&logoColor=white)

## 🔧 Requirements

- Node.js (v14 or higher)
- MySQL

## 🚀 Installation & Setup

1. Clone the repository:
```bash
git clone https://github.com/your-username/product-management-system.git
cd product-management-system
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

4. Update the `.env` file with your database credentials and other configuration settings.

## 🗄️ Database Setup

1. Create the database:
```bash
npx sequelize-cli db:create
```

2. Run migrations:
```bash
npm run migrate:up
```

3. (Optional) Seed the database with sample data:
```bash
npm run seed:up
```

## 🏃‍♂️ Running the Application

Start the server:
```bash
npm run start
```

The API will be available at `http://localhost:3000` (or the port you specified in the .env file).

## 📚 API Documentation

API documentation is available via Swagger UI at:
![product-management](https://github.com/user-attachments/assets/8534409f-8d3c-4515-9619-82abe6fc10ad)


[https://product-management-8or6.onrender.com/api-docs/#/](https://product-management-8or6.onrender.com/api-docs/#/)

### Main Endpoints

- `GET /products`: List all products (with pagination and search)
- `GET /products/:id`: Get a single product with its series
- `POST /products`: Create a new product
- `PUT /products/:id`: Update a product
- `DELETE /products/:id`: Delete a product

## 🚀 Deployment

The API is deployed on Render and can be accessed at:

[https://product-management-8or6.onrender.com](https://product-management-8or6.onrender.com)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.
