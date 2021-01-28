const baseURL = 'https://hash-front-test.herokuapp.com/'

export default async function post() {
  const response = await fetch(baseURL, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      amount: 2000,
      installment: 4,
      mdr: 3,
    }),
  })


  return response.json()
}
