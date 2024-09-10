export async function updateDueDate({ date, id }) {
  let update_url_api = `http://localhost:1234/tasks/dueDate/${id}`

  try {
    const res = await fetch(update_url_api, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ date: date }),
    })
  
    if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`) 
    const data = res
  
    return `Updated Task ${data}`
  } catch (error) {
    console.error('Error fetching tasks:', error)
    throw error  
  }
}