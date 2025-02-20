# Banking System

This project is a simple banking system with a frontend, backend, and user authentication. It allows users to register, log in, and manage their balance by depositing, withdrawing, and viewing transactions.

## Features

- **User Registration & Login**: Secure login and registration system for users.
- **Balance Management**: View current balance, deposit funds, withdraw funds.
- **Transaction History**: View a list of transactions (deposit and withdrawal) made by the user.
- **MySQL Database**: All data, including user details and transactions, are stored in a MySQL database.

## Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MySQL
- **Authentication**: JSON Web Token (JWT)
  
## Installation

### Prerequisites

- Node.js (version 14 or above)
- MySQL Server installed
- Git

### Steps to Set Up

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repository/banking-system.git
   ```

2. Navigate to the project directory:
   ```bash
   cd banking-system
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Start the frontend server:
   ```bash
   npm start
   ```

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Set up your MySQL database:
   - Create a database named `bank`.
   - Import the schema from `backend/database/schema.sql` to set up tables for users and transactions.

4. Configure the `.env` file with your MySQL credentials:
   ```env
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=your_password
   DB_NAME=banking_system
   JWT_SECRET=your_jwt_secret
   ```

5. Start the backend server:
   ```bash
   npm start
   ```

### Usage

1. Open the frontend application in your browser (usually available at `http://localhost:3000`).
2. Register as a new user or log in with your credentials.
3. Once logged in, you will be greeted with a dashboard showing:
   - **Welcome, [username]**.
   - **Your Balance**: Displays the current account balance.
   - **Deposit**: Allows you to add funds to your account.
   - **Withdraw**: Allows you to withdraw funds from your account.
   - **Transactions**: View the transaction history (deposits and withdrawals).

## Endpoints (Backend)

- **POST /api/register**: Register a new user.
- **POST /api/login**: Log in to the system and receive a JWT token.
- **GET /api/balance**: Fetch the current balance of the logged-in user.
- **POST /api/deposit**: Deposit funds into the user account.
- **POST /api/withdraw**: Withdraw funds from the user account.
- **GET /api/transactions**: Get a list of transactions (deposits and withdrawals).

## Testing

To test the application, you can use Postman or any other API testing tool to call the backend APIs directly.

## Contributing

Feel free to fork the repository and submit pull requests if you want to contribute to the project. Please make sure to follow the code style and include tests for new features or bug fixes.

## License

This project is licensed under the MIT License.

## Acknowledgments

- MySQL for managing the database
- React.js and Node.js for building the application
- Tailwind CSS for styling the frontend

