# 🍔 FoodApp - Food Delivery Application

A modern, responsive food delivery web application built with React, featuring real-time restaurant listings, search functionality, and dynamic routing. This project demonstrates proficiency in React development, API integration, state management, and modern web development practices.

## ✨ Features

- **Restaurant Listing**: Browse through restaurants with real-time data fetched from Swiggy API
- **Search Functionality**: Search restaurants by name with real-time filtering
- **Top Rated Filter**: Filter restaurants by rating (4.5+ stars)
- **Dynamic Routing**: Multi-page navigation using React Router with nested routes
- **Restaurant Details**: View detailed information including ratings, delivery time, cost, and location
- **Responsive Design**: Mobile-friendly interface with CSS Grid and Flexbox layouts
- **Interactive UI**: Hover effects and smooth transitions for enhanced user experience
- **State Management**: Efficient state handling using React Hooks (useState, useEffect)
- **Loading States**: Loading indicators during data fetching

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.2.1
- **Routing**: React Router DOM 7.11.0
- **Build Tool**: Parcel 2.16.3
- **Styling**: 
  - Custom CSS with modern layouts
  - Tailwind CSS 3.4.18
- **API Integration**: Swiggy Restaurant API

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd FoodApp
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:1234` (or the port shown in terminal)

## 📁 Project Structure

```
FoodApp/
├── components/
│   ├── Header.js          # Navigation header with login/logout
│   ├── Body.js            # Main restaurant listing component
│   ├── RestaurantCard.js  # Individual restaurant card component
│   ├── RestaurantMenu.js  # Restaurant menu details page
│   ├── About.js           # About page
│   ├── Contact.js         # Contact page
│   ├── Error.js           # Error handling component
│   └── Shimmer.js         # Loading skeleton component
├── src/
│   └── App.js             # Main app component with routing
├── util/
│   └── mockData.js        # Mock restaurant data
├── index.html             # Entry HTML file
├── index.css              # Global styles
└── package.json           # Project dependencies
```

## 🎯 Key Concepts Demonstrated

- **React Hooks**: useState, useEffect for state and lifecycle management
- **React Router**: Client-side routing with nested routes and dynamic parameters
- **API Integration**: Fetching and handling data from external APIs
- **Component Architecture**: Reusable, modular component design
- **State Management**: Local state management with React hooks
- **Event Handling**: User interactions and form submissions
- **CSS Grid & Flexbox**: Modern, responsive layout techniques
- **Async JavaScript**: Handling promises and async/await patterns
- **ES6+ Features**: Modern JavaScript syntax and features

## 🔌 API Integration

The application integrates with Swiggy's public API to fetch:
- Restaurant listings based on location coordinates
- Restaurant menu data (in development)
- Real-time restaurant information including ratings, delivery time, and pricing

## 🌐 Routes

- `/` - Home page with restaurant listings
- `/about` - About page
- `/contact` - Contact page
- `/restaurants/:resId` - Individual restaurant menu page (dynamic route)

## 📝 Future Enhancements

- Complete restaurant menu page implementation
- User authentication and authorization
- Shopping cart functionality
- Order placement system
- User reviews and ratings
- Payment integration
- Location-based services
- Enhanced search with filters (cuisine type, price range)

## 👨‍💻 Author

**Rashmi Anand**

## 📄 License

This project is licensed under the ISC License.
