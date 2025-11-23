# 🛋️ Furniture E-Commerce Platform

A full-featured furniture e-commerce web application built with Angular 16, featuring user authentication, dynamic product catalog, shopping cart management, and checkout functionality.

![Angular](https://img.shields.io/badge/Angular-16.2.16-red?style=flat&logo=angular)
![TypeScript](https://img.shields.io/badge/TypeScript-5.1.3-blue?style=flat&logo=typescript)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

- 🔐 **User Authentication** - Secure login and registration with form validation
- 🛒 **Shopping Cart** - Add to cart, update quantities, remove items with real-time price calculations
- 📦 **Product Catalog** - Browse furniture items with detailed product information
- 💳 **Checkout Process** - Complete purchase flow with order summary
- 👤 **User Profile** - Manage account information and view order history
- 📱 **Responsive Design** - Mobile-friendly UI with Bootstrap integration
- 🔄 **Real-time Updates** - Dynamic data binding and instant UI updates
- 💾 **Session Persistence** - LocalStorage integration for cart and user sessions

## 🚀 Tech Stack

- **Frontend Framework:** Angular 16.2.16
- **Language:** TypeScript 5.1.3
- **Styling:** CSS3, Bootstrap
- **Icons:** FontAwesome 6.7.1
- **HTTP Client:** Angular HttpClient for REST API integration
- **Routing:** Angular Router
- **Forms:** Reactive Forms with Validators
- **State Management:** Angular Services
- **Backend API:** JSON Server (Mock REST API)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (v6 or higher)
- [Angular CLI](https://angular.io/cli) (v16.2.16)

```bash
npm install -g @angular/cli@16.2.16
```

## ⚙️ Installation

1. **Clone the repository**

```bash
git clone https://github.com/s-cube-15/Angular-Furniture-Commerce.git
cd Angular-Furniture-Commerce
```

2. **Install dependencies**

```bash
npm install
```

3. **Install JSON Server (for backend API)**

```bash
npm install -g json-server
```

## 🏃‍♂️ Running the Application

### 1. Start the Backend API Server

In the project root directory, run:

```bash
json-server --watch DataAPI.json --port 3000
```

The API server will run at `http://localhost:3000`

### 2. Start the Angular Development Server

In a new terminal (also in the project root), run:

```bash
ng serve
```

Navigate to `http://localhost:4200/` in your browser. The application will automatically reload if you change any source files.

## 📁 Project Structure

```
Angular-Furniture-Commerce/
├── src/
│   ├── app/
│   │   ├── components/           # Reusable components
│   │   │   ├── header/
│   │   │   └── footer/
│   │   ├── pages/                # Page components
│   │   │   ├── dashboard/        # Home page with product listings
│   │   │   ├── shop/             # Product catalog
│   │   │   ├── cart/             # Shopping cart
│   │   │   ├── checkout/         # Checkout page
│   │   │   ├── login/            # User login
│   │   │   ├── register/         # User registration
│   │   │   ├── profile/          # User profile
│   │   │   ├── about/            # About page
│   │   │   └── contact/          # Contact page
│   │   ├── app-routing.module.ts # Route configurations
│   │   ├── app.component.ts      # Root component
│   │   └── app.module.ts         # Root module
│   ├── assets/                   # Static assets (images, icons)
│   ├── styles.css                # Global styles
│   └── index.html                # Main HTML file
├── DataAPI.json                  # Mock database for JSON Server
├── angular.json                  # Angular configuration
├── package.json                  # Dependencies
└── tsconfig.json                 # TypeScript configuration
```

## 🛣️ Application Routes

| Route        | Component | Description                      |
| ------------ | --------- | -------------------------------- |
| `/`          | Login     | Default landing page             |
| `/login`     | Login     | User authentication              |
| `/register`  | Register  | New user registration            |
| `/dashboard` | Dashboard | Home page with featured products |
| `/shop`      | Shop      | Product catalog                  |
| `/cart`      | Cart      | Shopping cart management         |
| `/checkout`  | Checkout  | Order summary and checkout       |
| `/profile`   | Profile   | User account information         |
| `/about`     | About     | About the company                |
| `/contact`   | Contact   | Contact form and information     |

## 🔧 Available Scripts

### Development

```bash
ng serve                  # Start dev server at http://localhost:4200
ng serve --open          # Start dev server and open browser
ng serve --port 4300     # Start dev server on custom port
```

### Building

```bash
ng build                 # Build for production
ng build --watch         # Build with watch mode
ng build --configuration development  # Development build
```

### Testing

```bash
ng test                  # Run unit tests via Karma
ng e2e                   # Run end-to-end tests
```

### Code Generation

```bash
ng generate component component-name     # Generate new component
ng generate service service-name         # Generate new service
ng generate module module-name           # Generate new module
```

## 🔑 Key Features Implementation

### Authentication System

- Form validation with custom validators
- Password matching validation
- Email pattern validation
- LocalStorage for session management

### Shopping Cart

- Add/remove items dynamically
- Quantity increment/decrement
- Real-time total price calculation
- Persistent cart state via API

### REST API Integration

- HTTP GET requests for fetching data
- HTTP POST requests for creating records
- HTTP DELETE requests for removing items
- Error handling and response management

## 📦 API Endpoints

The application uses the following API endpoints (via JSON Server):

| Method | Endpoint    | Description           |
| ------ | ----------- | --------------------- |
| GET    | `/users`    | Fetch all users       |
| POST   | `/users`    | Register new user     |
| GET    | `/cart`     | Fetch cart items      |
| POST   | `/cart`     | Add item to cart      |
| DELETE | `/cart/:id` | Remove item from cart |

## 🎨 UI/UX Features

- Clean and modern design
- Responsive layout for all devices
- Smooth animations and transitions
- Intuitive navigation
- Visual feedback for user actions
- Form validation with error messages

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 👤 Author

**Sudhanshu Sabale**

- GitHub: [@s-cube-15](https://github.com/s-cube-15)
- LinkedIn: [Sudhanshu Sabale](https://www.linkedin.com/in/sudhanshu-sabale-28ab4520a/)
- Email: sudhanshussable2@gmail.com

## 🙏 Acknowledgments

- Angular team for the amazing framework
- Bootstrap for responsive design components
- FontAwesome for beautiful icons
- JSON Server for quick backend prototyping

## 📞 Support

For support, email sudhanshussable2@gmail.com or create an issue in the repository.

---

⭐ Star this repo if you find it helpful!
