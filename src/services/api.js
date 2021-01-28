const baseURL = 'https://hash-front-test.herokuapp.com/'

export default async function post(data) {
  const response = await fetch(baseURL, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })


  return response.json()
}
