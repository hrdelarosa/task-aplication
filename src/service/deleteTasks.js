export async function taskDelete({ id }) {
    let delete_task_url = `http://localhost:1234/tasks/${id}`

    try {
        const res = await fetch(delete_task_url, {
            method: 'DELETE'
        })
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`)
        const data = await res.json()

        return data
        
    } catch (error) {
        console.error('Error fetching tasks:', error)
        throw error 
    }
    
}