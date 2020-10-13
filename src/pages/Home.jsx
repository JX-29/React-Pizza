import React from 'react';
import {Categories, PizzaCard, SortPopup, PlaceholderPizza} from '../components';
import {useDispatch, useSelector} from "react-redux";
import {setCategory, setSortBy} from "../redux/actions/filters";
import {fetchPizzas} from "../redux/actions/pizzas";

function Home() {

    const { items, sortBy } = useSelector(({pizza, filter})=> {
        return {
            items: pizza.items,
            sortBy: filter.sortBy,
        }
    })
    const category = useSelector(({filter})=> filter.category)
    const isLoaded = useSelector(({pizza})=> pizza.isLoaded)

    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(fetchPizzas(category, sortBy))
    }, [ category, sortBy])

    const onSelectCategory = React.useCallback((index) => {
        dispatch(setCategory(index))
    }, [])

    const onSelectSortType = React.useCallback((type) => {
        dispatch(setSortBy(type))
    }, [])

    const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

    const sortItems = [
        {name: 'популярности', type: 'popular'},
        {name: 'цене', type: 'price'},
        {name: 'алфавит', type: 'name'}
    ]


  return (
    <div className="container">
      <div className="content__top">
        <Categories
            activeCategory = {category}
            onClickItem={onSelectCategory}
            items={categoryNames}
        />
        <SortPopup activeSortType = {sortBy} items={sortItems} onClickSortPopup = {onSelectSortType}/>
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
          {isLoaded ? items.map(pizza => <PizzaCard key = {pizza.id} {...pizza}/>) : Array(16).fill(0).map((_, index) => <PlaceholderPizza key = {index}/>)}
      </div>
    </div>
  );
}

export default Home;
