import { useState, useEffect } from "react"

//API
import API from '../API'

//Helpers
import {isPersistedState} from '../helpers'

const initialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0
}

export const useHomeFetch = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [state, setState] = useState(initialState)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [isLoadingMore, setIsLoadingMore] = useState(false)
    
    const fetchMovies = async (searchTerm = "", page ) => {
       try {
        setError(false)
        setLoading(true)

        const movies = await API.fetchMovies(searchTerm, page)  
        setState(prev => ({
            ...movies,
            results: 
              page > 1 ? [...prev.results, ...movies.results ] : [...movies.results]
        }))
       } catch (error) {
         setError(true)
       }

       //Loading STate to False
       setLoading(false)
    }

    // Initial and Search
    useEffect(() => {
        if(!searchTerm) {
          const sessionState = isPersistedState('home-state')

          if(sessionState) {
            setState(sessionState)
            return
          }
        }

        setState(initialState)
        fetchMovies(searchTerm, searchTerm);
    }, [searchTerm])

    // Write to sessionStorage
    useEffect(() => {
      if(!searchTerm) {
        sessionStorage.setItem('home-state', JSON.stringify(state))
      }
    }, [state, searchTerm])

    // Load More
    useEffect(() => {
      if(!isLoadingMore) return;

      fetchMovies(searchTerm, state.page + 1)
      setIsLoadingMore(false)
    }, [isLoadingMore, searchTerm, state.page])

    return { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore}
}

