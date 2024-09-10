import { useEffect, useState } from "react"
import { getFavoritesTasks } from "../service/favoritesTasks"

export function useFavoritesTask() {
  const [tasksFavorites, setTasksFavorites] = useState([])
  const [error, setError] = useState('')
  const [toogle, setToogle] = useState(false)

  useEffect(() => {
    fetchFavoritesTasks()
  }, [toogle])
  
  function fetchFavoritesTasks() {
    getFavoritesTasks()
      .then((favorites) => {
        setTasksFavorites(favorites)
      })
      .catch((e) => {
        setError(e)
      })
  }

  function toogleFavorite() {
    setToogle(!toogle)
  }

  return { tasksFavorites, toogleFavorite, error }
}