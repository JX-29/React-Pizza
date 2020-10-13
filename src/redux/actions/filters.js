
//отправляет новое значение редюсеру, реагирующему на set_sort_by
export const setSortBy = (sortName) => ({
    type: 'SET_SORT_BY',
    payload: sortName
})

export const setCategory = (categoryIndex) => ({
    type: 'SET_CATEGORY',
    payload: categoryIndex
})