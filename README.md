# 🗃 Product Management System API

This is a RESTful API for a simple Product Management System, built with Node.js, Express, and Sequelize ORM.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Requirements](#requirements)
- [Installation](#installation)
- [Configuration](#configuration)
- [Database Setup](#database-setup)
- [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
- [Deployment](#deployment)
- [Testing](#testing)

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

## 🚀 Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/product-management-system.git
cd product-management-system
```

2. Install dependencies:


```shellscript
npm install
```

## ⚙️ Configuration

1. Create a `.env` file in the root directory with the following content:


```plaintext
DB_HOST=your_database_host
DB_USER=your_database_user
DB_PASS=your_database_password
DB_NAME=your_database_name
PORT=3000
```

Replace the placeholders with your actual database credentials.

## 🗄️ Database Setup

1. Create the database:


```shellscript
npx sequelize-cli db:create
```

2. Run migrations:


```shellscript
npx sequelize-cli db:migrate
```

3. (Optional) Seed the database with sample data:


```shellscript
npx sequelize-cli db:seed:all
```

## 🏃‍♂️ Running the Application

To start the server in development mode:

```shellscript
npm run dev
```

For production:

```shellscript
npm start
```

The API will be available at `http://localhost:3000` (or the port you specified in the .env file).

## 📚 API Documentation

The API documentation is available in Postman format. You can find the exported collection file in the `docs` directory of this repository.

To view the API documentation:

1. Import the collection file into Postman.
2. The collection includes all available endpoints with example requests and responses.


### Main Endpoints

- `GET /products`: List all products (with pagination and search)
- `GET /products/:id`: Get a single product with its series
- `POST /products`: Create a new product
- `PUT /products/:id`: Update a product
- `DELETE /products/:id`: Delete a product


For detailed information on request/response formats and query parameters, please refer to the Postman documentation.

## 🚀 Deployment

The API is deployed on Render and can be accessed at:

[https://product-management-8or6.onrender.com](https://product-management-8or6.onrender.com)

## 🧪 Testing

To run tests:

```shellscript
npm test
```

This will execute the test suite and provide a report on the API's functionality.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

```plaintext

This README now includes emojis for better visual appeal and uses icons to represent the tech stack you're using. The code is presented in a single block without breaks, making it easier to copy and paste. The tech stack is displayed using badges, which provide a clean and informative look.
```
