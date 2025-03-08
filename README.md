# OLX Clone

This project is a simple OLX clone built using React, JavaScript, JWT (JSON Web Tokens), Django REST Framework (DRF), and Firebase. The platform allows users to sell and buy products, ensuring secure authentication and authorization.

## Features
- User authentication and authorization using JWT
- Users can sell and buy products
- CRUD operations (Create, Read, Update, Delete) managed by Firebase
- Secure backend API with Django REST Framework

## Tech Stack
- **Frontend:** React, JavaScript
- **Backend:** Django REST Framework (DRF), JWT for authentication
- **Database:** Firebase

## Installation

### Prerequisites
Ensure you have the following installed:
- Node.js & npm
- Python & Django

### Frontend Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/Ashkar-m/olx-clone.git
   cd olx-clone/frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React development server:
   ```bash
   npm start
   ```

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd ../backend
   ```
2. Create and activate a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate   # For Mac/Linux
   venv\Scripts\activate      # For Windows
   ```
3. Install backend dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Apply database migrations:
   ```bash
   python manage.py migrate
   ```
5. Run the Django server:
   ```bash
   python manage.py runserver
   ```

## Firebase Configuration
1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
2. Enable Firestore Database and Authentication.
3. Get your Firebase configuration and add it to `firebaseConfig.js` in the frontend.

## API Endpoints
- **User Authentication:**
  - `POST /api/register/` - Register a new user
  - `POST /api/login/` - Authenticate user and return JWT
- **Product Management:**
  - `GET /api/products/` - Retrieve all products
  - `POST /api/products/` - Add a new product
  - `PUT /api/products/:id/` - Update a product
  - `DELETE /api/products/:id/` - Delete a product

## License
This project is open-source and available under the [MIT License](LICENSE).

## Contributing
Feel free to submit pull requests and issues to improve the project.

