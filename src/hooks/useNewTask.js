import { useEffect, useRef, useState } from "react"

export function useNewTask() {
    const [title, updateTitle] = useState('')
    const [description, updateDescription] = useState('')
    const [favorite, updateFavorite] = useState(false)
    const [error, setError] = useState(null)
    const isFirstInput = useRef(true)

    useEffect(() => {
        if (isFirstInput.current) {
        isFirstInput.current = title === ''
        return
        }

        if (title === '') {
        setError('No se puede guardar una tarea vacía')
        return
        }

        setError(null)
    }, [title])

    return {
        title,
        updateTitle,
        description,
        updateDescription,
        favorite,
        updateFavorite,
        error,
    }
}