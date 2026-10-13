
import { test, expect } from '@playwright/test';

test('GET user returns the expected data', async ({ request }) => {
  const response = await request.get(
    'https://jsonplaceholder.typicode.com/users/1'
  );

  // Check the HTTP status
  expect(response.status()).toBe(200);

  // Read the JSON response
  const user = await response.json();

  // Check the returned data
  expect(user.id).toBe(1);
  expect(user.name).toBe('Leanne Graham');
  expect(user.email).toBe('Sincere@april.biz');
});
