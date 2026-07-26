export async function signIn(email, password) {
  const response = await fetch('https://serverless-api-teal.vercel.app/api/auth/signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();

  if (!response.ok || !data.success) {
    throw new Error(data.message || 'Failed to sign in');
  }

  return data;
}