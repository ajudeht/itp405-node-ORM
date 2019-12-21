let session = require('./app');
const qs = require('querystring');
const supertest = require('supertest')
const request = supertest(session.app);

it('Returns 404 for Nonexistent Tracks', async done => {
  const response = await request.patch('/api/tracks/a');
  expect(response.status).toBe(404);
  done();
});

it('Returns 200 for Valid Tracks', async done => {
  const response = await request.patch('/api/tracks/1');
  expect(response.status).toBe(200)
  done()
});

it('Returns 422 When Posting Invalid Entries', async done => {
  const response = await request.patch('/api/tracks/1?' + qs.stringify({"name": "", "milliseconds": "a", "unitPrice": "b"}));
  expect(response.status).toBe(422);
  done();
});

afterEach( async () => {
  await session.server.close();
})
