const { gql } = require('apollo-server-express');
const fs = require('fs');

// Load menu data from the JSON file
const menuData = JSON.parse(fs.readFileSync('src/menuData.json', 'utf8'));

// Define the GraphQL schema with type definitions
const typeDefs = gql`
  type Price {
    half: Float
    full: Float
    uno: Float
    dos: Float
    tres: Float
  }

  type Appetizer {
    name: String
    description: String
    price: Float
  }

  type Sandwich {
    name: String
    description: String
    bread_options: [String]
    price: Price
  }

  type Side {
    name: String
    price: Float
  }

  type SoupAndSalad {
    name: String
    description: String
    price: Float
  }

  type Fajita {
    name: String
    description: String
    price: Float
  }

  type Taco {
    name: String
    description: String
    price: Float
  }

  type Enchilada {
    name: String
    description: String
    prices: Price
  }

  type Quiche {
    name: String
    description: String
    price: Float
  }

  type GreenSalad {
    name: String
    description: String
    price: Float
  }

  type SandwichWithSides {
    sandwich: Sandwich
    sides: [Side]
  }

  type Query {
    appetizers: [Appetizer]
    entrees: [Appetizer]
    coldSandwiches: [Sandwich]
    hotSandwiches: [Sandwich]
    sandwichesWithSides: [SandwichWithSides]
    soupsAndSalads: [SoupAndSalad]
    fajitas: [Fajita]
    tacos: [Taco]
    enchiladas: [Enchilada]
    quiche: [Quiche]
    greenSalads: [GreenSalad]
  }
`;

// Resolvers for each field in the schema
const resolvers = {
  Query: {
    appetizers: () => menuData.appetizers,
    entrees: () => menuData.entrees,
    coldSandwiches: () => menuData.sandwiches.cold,
    hotSandwiches: () => menuData.sandwiches.hot,
    sandwichesWithSides: () => {
      return [
        {
          sandwich: menuData.sandwiches.cold,
          sides: menuData.sandwiches.sides
        },
        {
          sandwich: menuData.sandwiches.hot,
          sides: menuData.sandwiches.sides
        }
      ];
    },
    soupsAndSalads: () => menuData.soups_and_salads,
    fajitas: () => menuData.fajitas,
    tacos: () => menuData.tacos,
    enchiladas: () => menuData.enchiladas,
    quiche: () => menuData.quiche,
    greenSalads: () => menuData.green_salads
  }
};

module.exports = { typeDefs, resolvers };
