const request = require('supertest');
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('../src/schema');

// Set up the Express app and Apollo Server for testing
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: false,  // Disable GraphQL Playground for tests
  introspection: true,
});

beforeAll(async () => {
  await server.start();  // Start Apollo server asynchronously
  server.applyMiddleware({ app, path: '/graphql' }); // Apply the middleware to Express
});

describe('GraphQL API Tests', () => {

  // Test for appetizers
  it('should return appetizers', async () => {
    const response = await request(app)
      .post('/graphql')
      .send({
        query: `
          query {
            appetizers {
              name
              description
              price
            }
          }
        `
      });

    expect(response.status).toBe(200);
    expect(response.body.data.appetizers).toHaveLength(5);
    expect(response.body.data.appetizers[0]).toHaveProperty('name');
    expect(response.body.data.appetizers[0]).toHaveProperty('description');
    expect(response.body.data.appetizers[0]).toHaveProperty('price');
  });

  // Test for fajitas
  it('should return fajitas', async () => {
    const response = await request(app)
      .post('/graphql')
      .send({
        query: `
          query {
            fajitas {
              name
              description
              price
            }
          }
        `
      });

    expect(response.status).toBe(200);
    expect(response.body.data.fajitas).toHaveLength(2);
    expect(response.body.data.fajitas[0]).toHaveProperty('name');
    expect(response.body.data.fajitas[0]).toHaveProperty('description');
    expect(response.body.data.fajitas[0]).toHaveProperty('price');
  });

  // Test for tacos
  it('should return tacos', async () => {
    const response = await request(app)
      .post('/graphql')
      .send({
        query: `
          query {
            tacos {
              name
              description
              price
            }
          }
        `
      });

    expect(response.status).toBe(200);
    expect(response.body.data.tacos).toHaveLength(4);
    expect(response.body.data.tacos[0]).toHaveProperty('name');
    expect(response.body.data.tacos[0]).toHaveProperty('description');
    expect(response.body.data.tacos[0]).toHaveProperty('price');
  });

  // Test for sandwiches with sides
  it('should return sandwiches with sides', async () => {
    const response = await request(app)
      .post('/graphql')
      .send({
        query: `
          query {
            sandwichesWithSides {
              sandwich {
                name
                description
                bread_options
                price {
                  half
                  full
                }
              }
              sides {
                name
                price
              }
            }
          }
        `
      });

    expect(response.status).toBe(200);
    expect(response.body.data.sandwichesWithSides).toHaveLength(2);  // Should return both cold and hot sandwiches
    expect(response.body.data.sandwichesWithSides[0].sandwich).toHaveProperty('name');
    expect(response.body.data.sandwichesWithSides[0].sides).toHaveLength(4);  // Ensure sides are included
  });

  // Test for enchiladas
  it('should return enchiladas', async () => {
    const response = await request(app)
      .post('/graphql')
      .send({
        query: `
          query {
            enchiladas {
              name
              description
              prices {
                uno
                dos
                tres
              }
            }
          }
        `
      });

    expect(response.status).toBe(200);
    expect(response.body.data.enchiladas).toHaveLength(4);
    expect(response.body.data.enchiladas[0]).toHaveProperty('name');
    expect(response.body.data.enchiladas[0]).toHaveProperty('prices');
  });

  // Test for quiche
  it('should return quiche', async () => {
    const response = await request(app)
      .post('/graphql')
      .send({
        query: `
          query {
            quiche {
              name
              description
              price
            }
          }
        `
      });

    expect(response.status).toBe(200);
    expect(response.body.data.quiche).toHaveLength(2);
    expect(response.body.data.quiche[0]).toHaveProperty('name');
    expect(response.body.data.quiche[0]).toHaveProperty('description');
    expect(response.body.data.quiche[0]).toHaveProperty('price');
  });

  // Test for green salads
  it('should return green salads', async () => {
    const response = await request(app)
      .post('/graphql')
      .send({
        query: `
          query {
            greenSalads {
              name
              description
              price
            }
          }
        `
      });

    expect(response.status).toBe(200);
    expect(response.body.data.greenSalads).toHaveLength(2);
    expect(response.body.data.greenSalads[0]).toHaveProperty('name');
    expect(response.body.data.greenSalads[0]).toHaveProperty('description');
    expect(response.body.data.greenSalads[0]).toHaveProperty('price');
  });
});
