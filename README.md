# Express.js User Management API

This is a simple Express.js API for managing users, including creating, reading, updating, and deleting user records in a MySQL database.

## Project Structure

## Setup

1. Clone the repository:

   ```sh
   git clone https://github.com/Anuradha2k21/express-js-simple
   cd express-js-simple
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Create a `.env` file in the root directory with the following content:

   ```env
   DB_HOST=localhost
   DB_USER=root
   DB_PASS=
   DB_NAME=express_js
   PORT=3000
   ```

4. Set up the database:

   - Create the database and tables by running the SQL commands in `database.sql`.

5. Start the server:
   ```sh
   node app.js
   ```

## API Endpoints

### Get All Users

- **URL:** `/api/users`
- **Method:** `GET`
- **Description:** Retrieve all users.
- **Response:**
  ```json
  [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john.doe@example.com",
      "created_at": "2023-10-01T00:00:00.000Z"
    },
    ...
  ]
  ```

### Get User by ID

- **URL:** `/api/users/:id`
- **Method:** `GET`
- **Description:** Retrieve a user by ID.
- **Response:**
  ```json
  {
    "id": 1,
    "name": "John Doe",
    "email": "john.doe@example.com",
    "created_at": "2023-10-01T00:00:00.000Z"
  }
  ```

### Create a User

- **URL:** `/api/users`
- **Method:** `POST`
- **Description:** Create a new user.
- **Request Body:**
  ```json
  {
    "name": "John Doe",
    "email": "john.doe@example.com"
  }
  ```
- **Response:**
  ```json
  {
    "id": 1,
    "name": "John Doe",
    "email": "john.doe@example.com"
  }
  ```

### Update a User

- **URL:** `/api/users/:id`
- **Method:** `PUT`
- **Description:** Update an existing user.
- **Request Body:**
  ```json
  {
    "name": "John Doe",
    "email": "john.doe@example.com"
  }
  ```
- **Response:**
  ```json
  {
    "id": 1,
    "name": "John Doe",
    "email": "john.doe@example.com"
  }
  ```

### Delete a User

- **URL:** `/api/users/:id`
- **Method:** `DELETE`
- **Description:** Delete a user by ID.
- **Response:** `204 No Content`

## License

This project is licensed under the MIT License.
