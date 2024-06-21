# Zoro Task: Login and User Page

## Overview

This project demonstrates a basic implementation of a login system using Next.js, Tailwind CSS, TypeScript, and MongoDB. The application includes a login page where users can enter their username and password, and upon successful authentication, they are redirected to a user page displaying some basic user information.

## Setup and Installation

Clone the repository:

```bash
git clone https://github.com/DanClubb/zoro-task.git
```

```bash
cd <repository-directory>
```

Install dependencies:

```bash
npm install
```

Set up environment variables:
Create a .env.local file in the root directory and add the following variables:

usually wouldn't have this public but the URI is: mongodb+srv://admin:yEPjP0WQ2VBAZR7N@cluster0.qnw1qai.mongodb.net/zoro

```bash
MONGODB_URI=<your-mongodb-uri>
```

Run the development server:

```bash
npm run dev
```

## Constraints and Limitations

Time Constraints: Due to limited time, the following features were not implemented:

-   Tests: Automated tests (unit, integration, etc.) are not included.
-   Secure Login: The login implementation is basic and lacks security measures.

## Future Improvements

-   Ability to create account through the auth form.
-   Add Tests: Implement comprehensive testing to ensure the robustness of the application.
-   Enhance Security: Improve the login system by adding encryption for storing passwords and using JWT for authorization.
