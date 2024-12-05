# Restaurant Menu API

This is a **GraphQL API** for a restaurant menu, built using **Apollo Server** and **Express**. The API exposes menu items such as appetizers, sandwiches, entrees, fajitas, tacos, enchiladas, quiche, and green salads. It also includes functionality for querying side items associated with sandwiches.

## Features

- **GraphQL API** to query restaurant menu data.
- Allows querying of **appetizers**, **entrees**, **sandwiches** (including sides), **fajitas**, **tacos**, **enchiladas**, **quiche**, and **green salads**.
- Uses **Apollo Server** for handling GraphQL requests and **Express** for routing.
- Supports querying menu items with flexible price structures.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Testing](#testing)
- [Notes](#implementation-notes)

## Technologies Used

- **Node.js** – JavaScript runtime for the backend.
- **Apollo Server** – GraphQL server used to create the API.
- **Express** – Web framework to handle HTTP requests.
- **GraphQL** – Data query language for interacting with the menu data.
- **Jest** – JavaScript testing framework.
- **Supertest** – HTTP assertion library for testing GraphQL queries.

## Installation

### Prerequisites

- **Node.js** and **npm** installed on your machine.

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/restaurant-menu-api.git
   cd restaurant-menu-api 
   ```

2. Install Dependencies
  To install the required dependencies, run:

    ```bash
    npm install
    ```
3. Ensure you have the menuData.json file with your restaurant menu data (which should already be included in the repo).

## Project Structure
```bash
restaurant-menu-api/
├── src/
│   ├── index.js           # Main server file
│   ├── schema.js          # GraphQL schema definitions
│   ├── menuData.json      # Menu data source
├── tests/
│   ├── api.test.js        # Automated tests
├── package.json           # Project metadata and scripts
├── README.md              # Project documentation
```

## Usage
### Accessing the API with GraphiQL
1. Open your browser and navigate to:
    ```bash
    http://localhost:4000/graphql
    ```
2. You will be directed to **Apollo Studio** (GraphQL Playground), which provides an interactive interface to write and execute queries.
In Apollo Studio, you can start running queries like the following example:

    Example Query
    ```bash
    query {
      appetizers {
        name
        description
        price
      }
    }

    query {
      tacos {
        name
        description
        price
      }
    }
    ```

---

## Testing
### Run Tests
Run the following command to execute automated tests:
```bash
npm test
```

Jest will run the test suite and display the results in the terminal. The tests check various GraphQL queries such as appetizers, tacos, sandwiches with sides, and more.

### Test Coverage
The tests cover the following menu items:

- Appetizers
- Fajitas
- Tacos
- Sandwiches
- Enchiladas
- Quiche
- Green Salads

### Test File

The test file is located in `/tests/api.test.js`.

---

## Implementation Notes

1. Project Overview

    The **Restaurant Menu API** is a GraphQL API built using Apollo Server and Express. It allows querying various restaurant menu items, including appetizers, sandwiches (with sides), fajitas, tacos, enchiladas, quiche, and green salads.

2. Key Components

    1. **Apollo Server**: Handles GraphQL queries and integrates with Express.
    2. **GraphQL Schema**: Defines types for Menu Items (e.g., Sandwich, Fajita, Appetizer) and queries like sandwichesWithSides and fajitas.
    3. **Resolvers**: Fetch data from menuData.json, resolving GraphQL queries to the static data.
    4. **Static Data**: Menu items are hardcoded in menuData.json. This could be replaced with a database in a real-world scenario.
    5. **Testing**: Automated tests are written using Jest and Supertest, covering all menu item queries.

3. How it Works

    - **Server Setup**: Apollo Server is configured with the GraphQL schema and resolvers in index.js.

    - **Schema and Resolvers**: The schema defines types like Sandwich, Price, and Fajita, and resolvers fetch data from menuData.json.

    - **GraphQL Queries**: Queries like appetizers, sandwichesWithSides, and tacos are used to retrieve menu data.