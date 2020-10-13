import axios from "axios";

export const fetchPizzas = (category, sortBy) => (dispatch) => {
    console.log(sortBy)
    dispatch(setLoaded(false))
    axios.get(`http://localhost:3001/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy}&_order=desc`).then(({data}) => {
        dispatch(setPizzas(data))
    })
}

export const setLoaded = (payload) => ({
    type: 'SET_LOADED',
    payload
})

export const setPizzas = (items) => ({
    type: 'SET_PIZZAS',
    payload: items
})