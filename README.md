# Project Name: Agetware Assignment

## Project Information
Agetware Assignment is a React-based e-commerce application designed to provide users with a seamless shopping experience. The application allows users to browse a variety of products, view detailed information about each product, manage their shopping cart, and apply filters to refine their product search. The project leverages modern web technologies, including React, Vite, and Tailwind CSS, to create a responsive and user-friendly interface.

### Key Features
- **Product Browsing**: Users can view a list of products with images, titles, prices, and ratings.
- **Product Details**: Each product has a dedicated page with detailed information.
- **Shopping Cart**: Users can add or remove products from their cart and view the total price.
- **Filters**: Users can filter products by price, category, and rating.
- **Search Functionality**: Users can search for products using a search bar.

## Project Structure
The project is organized into several key directories and files, each serving a specific purpose:

- **src/**: The main source directory containing all the application code.
  - **components/**: Contains reusable components for the application.
    - **custom/**: Custom components like the Header, which is displayed on every page.
    - **pages/**: Components representing different pages of the application:
      - **Home.jsx**: The main page displaying a list of products and filters.
      - **ProductDetails.jsx**: Displays detailed information about a selected product.
      - **Cart.jsx**: Shows the user's shopping cart with the ability to modify quantities and remove items.
      - **SingleProduct.jsx**: Represents an individual product card with add/remove functionality.
      - **Filters.jsx**: Contains filtering options for products.
      - **Rating.jsx**: A component for displaying and interacting with product ratings.
  - **context/**: Contains the Context API setup for managing global state:
    - **Context.jsx**: Provides the context for cart and product state management.
    - **Reducers.js**: Contains reducers for handling cart and product-related actions.
  - **lib/**: Utility functions (e.g., `utils.js` for class name merging).
  - **ui/**: Contains UI components like buttons, cards, and input fields.
  - **index.css**: Global styles for the application.
  - **main.jsx**: Entry point of the application where the React app is rendered.
  - **App.jsx**: Main application component that sets up routing and layout.
  
- **public/**: Contains static files like `index.html` and images.
  
- **vite.config.js**: Configuration file for Vite, the build tool used in this project.

- **tailwind.config.js**: Configuration file for Tailwind CSS, which is used for styling the application.

## Setup Instructions

To set up the project locally, follow these detailed steps:

1. **Clone the Repository**:
   Open your terminal and run the following command to clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install Node.js**:
   Ensure you have Node.js installed on your machine. You can download it from [Node.js official website](https://nodejs.org/).

3. **Install Dependencies**:
   After navigating to the project directory, install the required dependencies using npm:
   ```bash
   npm install
   ```

4. **Run the Development Server**:
   Start the Vite development server with the following command:
   ```bash
   npm run dev
   ```
   This will start the server and provide you with a local URL (usually `http://localhost:3000`) where you can view the application.

5. **Open the Application**:
   Open your web browser and navigate to the provided URL (e.g., `http://localhost:3000`) to view the application in action.

6. **Explore the Application**:
   - Browse through the product listings on the home page.
   - Click on individual products to view their details.
   - Use the filters to refine your product search.
   - Add products to your cart and view the cart summary.

### Additional Notes
- **API Integration**: The application fetches product data from an external API (`https://fakestoreapi.com/products`). Ensure you have a stable internet connection for the application to function correctly.
- **Styling**: The application uses Tailwind CSS for styling. You can customize styles by modifying the `tailwind.config.js` file.
- **Testing**: You can run tests (if any are included) using the command:
  ```bash
  npm test
  ```

## License
This project is licensed under the MIT License. Feel free to modify and use it as per your requirements.
