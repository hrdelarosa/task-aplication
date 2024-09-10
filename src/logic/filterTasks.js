export function filterTasksProgress(tasks) {
    return tasks.filter(task => task.status === "pending")
}

export function filterTasksCompleted(tasks) {
    return tasks.filter(task => task.status === "completed")
}
