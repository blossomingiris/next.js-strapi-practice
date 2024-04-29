export async function getUsers() {
  const BASIC_URL = 'http://127.0.0.1:1337'
  try {
    const response = await fetch(`${BASIC_URL}/api/user-entries`)
    const { data } = await response.json()
    return data
  } catch (error) {
    console.error(error)
  }
}

export async function getUser(id: string) {
  const BASIC_URL = 'http://127.0.0.1:1337'
  try {
    const response = await fetch(`${BASIC_URL}/api/user-entries/${id}`)
    const { data } = await response.json()
    return data
  } catch (error) {
    console.error(error)
  }
}
