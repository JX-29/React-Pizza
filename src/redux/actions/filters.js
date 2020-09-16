
//отправляет новое значение редюсеру, реагирующему на set_sort_by
const setSortBy = (sortName) => ({
    type: 'SET_SORT_BY',
    payload: sortName
})

const setCategory = (categoryIndex) => ({
    type: 'SET_CATEGORY',
    payload: categoryIndex
})