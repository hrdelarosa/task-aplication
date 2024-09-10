const CREATE_TASKS_URL_API = 'http://localhost:1234/tasks'

export async function createTask({ title, description, due_date, status, favorite, remind_at }) {
    try {
        const res = await fetch(CREATE_TASKS_URL_API, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title: title, description: description, due_date: due_date, status: status, favorite: favorite, remind_at: remind_at }),
        })

        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`) 
        const data = res

        return `Task created ${data}`
    } catch (error) {
        console.error('Error fetching tasks:', error)
        throw error
    }
}