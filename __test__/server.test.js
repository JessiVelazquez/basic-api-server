'use strict';

const { server } = require('../src/server.js'); // bring in your server for testing (because it is a module)
const supertest = require('supertest'); // pull in npm package of supertest for making requests and mocking a server env
const mockRequest = supertest(server); // mock the server for us

describe('API SERVER:', () => {

  it('should respond with a 404 on a bad route', async () => {
    return mockRequest.get('/where').then((data) => {
      expect(data.status).toBe(404);
    });
  });

  it('should respond with a 404 on bad method', async () => {
    return mockRequest.post('/').then((data) => {
      expect(data.status).toBe(404);
    });
  });

  it('should create a new item in the db', async () => {
    const response = await mockRequest.post('/things').send({ name: 'brian' })
    expect(response.status).toBe(201);
    expect(response.body.record.name).toEqual('brian');
  });

  it('should retrieve an item from the db', async () => {
    const response = await mockRequest.get('/things/1');
    expect(response.status).toBe(200);
    // expect(response.body).toBe(true);
    console.log(response.body);
  });

  it('should retrieve all items from the db', async () => {
    const response = await mockRequest.get('/things');
    expect(response.status).toBe(200);
  });

  it('should create a new item in the db', async () => {
    const response = await mockRequest.post('/food').send({ name: 'brian' })
    expect(response.status).toBe(201);
    expect(response.body.record.name).toEqual('brian');
  });

  it('should retrieve an item from the db', async () => {
    const response = await mockRequest.get('/food/1');
    expect(response.status).toBe(200);
    // expect(response.body).toBe(true);
    console.log(response.body);
  });

  it('should retrieve all items from the db', async () => {
    const response = await mockRequest.get('/food');
    expect(response.status).toBe(200);
  });

  it('should create a new item in the db', async () => {
    const response = await mockRequest.post('/shoe').send({ name: 'brian' })
    expect(response.status).toBe(201);
    expect(response.body.record.name).toEqual('brian');
  });

  it('should retrieve an item from the db', async () => {
    const response = await mockRequest.get('/shoe/1');
    expect(response.status).toBe(200);
    // expect(response.body).toBe(true);
    console.log(response.body);
  });

  it('should retrieve all items from the db', async () => {
    const response = await mockRequest.get('/shoe');
    expect(response.status).toBe(200);
  });  


  //stretch - update tests

  it('should show that an item was updated', async () => {
    const response = await mockRequest.put('/shoe/1').send({ name: 'jessi' });
    expect(response.status).toBe(200);
    expect(response.body.record.name).toEqual('jessi');
  });

  it('should show that an item was updated', async () => {
    const response = await mockRequest.put('/food/1').send({ name: 'jessi' });
    expect(response.status).toBe(200);
    expect(response.body.record.name).toEqual('jessi');
  });

  // stretch - delete tests

  it('should show that an item was deleted', async () => {
    const response = await mockRequest.delete('/shoe/1');
    expect(response.status).toBe(200);
  });

  it('should show that an item was deleted', async () => {
    const response = await mockRequest.delete('/food/1');
    expect(response.status).toBe(200);
  });

});