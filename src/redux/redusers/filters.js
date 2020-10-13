
//изначальное состояние. Данные до первого изменения будут такими
const initialState = {
    category: null,
    sortBy: 'popular',
}

//
const filters = (state = initialState, action) => {

    //если тип содержит эту строку. Реагирует только на действия с таким типом
    if (action.type === 'SET_SORT_BY') {
        return {
            //возвращает объект с измененным полем sortBy, не трогая остальные
            ...state,
            sortBy: action.payload
        };
    }
    if (action.type === 'SET_CATEGORY') {
        return {
            //возвращает объект с измененным полем sortBy, не трогая остальные
            ...state,
            category: action.payload
        };
    }
    return state
}

export default filters;