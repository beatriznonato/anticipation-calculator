const baseURL = 'https://hash-front-test.herokuapp.com/'

export default async function post(data) {
  try {
    const response = await fetch(baseURL, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    if(response.status === 408){
      return {
        error: true,
        errorMessage: 'Timeout Request'
      }
    } if(response.status === 500) {
      return {
        error: true,
        errorMessage: 'Internal Server'
      }
    }
    return {
      error: false,
      errorMessage: null,
      data: await response.json()
    }
  } catch (error) {
    return{
      error: true,
      errorMessage: error
    }
  }
}
