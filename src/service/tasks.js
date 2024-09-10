const TASKS_URL_API = 'http://localhost:1234/tasks'

export async function getTasks() {
    try {
        const res = await fetch(TASKS_URL_API)
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`) 
        const data = await res.json()

        return data
    } catch (error) {
        console.error('Error fetching tasks:', error.message)
        throw error    
    }
}