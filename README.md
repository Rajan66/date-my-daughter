# Bonus Task

## Tasks Implemented

### 1. Created an API
- Implemented models, controllers and routes to create an `application` API.
- Configured and migrated `SQLite` database using `sequelize`.
### 2. Authentication
- Implemented user authentication through email using `x-headers`.
- Created `Valid_email` table to store list of `valid_emails`.
- Added `ENV` variables such that only admin can create new `valid_emails`
### 3. Documentation and Status Code
- Added comments on crucial features for better code readability
- Returned appropriate status codes with the response json.

## How to Run
### 1. Install the dependencies
```
  npm install
```
### 2. Start migration
```
  npx sequelize-cli db:migrate
```
### 3. Run the app
```
  npm run dev
```
## Outputs:
![backend1](https://github.com/user-attachments/assets/21fecf00-85e6-43d0-bd76-64cde736539a)
![backend2](https://github.com/user-attachments/assets/9922fb60-fc26-46ea-ad99-748ee22c8763)
![backend3](https://github.com/user-attachments/assets/4e8beb64-d2b9-4bfb-91c6-4241939f6367)


