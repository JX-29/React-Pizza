import React from "react";
import PropTypes from 'prop-types'
import classNames from 'classnames'


export default function PizzaCard({imageUrl, name, price, types, sizes}) {

    const availableTypes = ['тонкое', 'традиционное'];
    const availableSizes = [26, 30, 40]
    const [activeType, setActiveType] = React.useState(types[0])
    const [activeSize, setActiveSize] = React.useState(0)

    const onSelectType = (idx) => {
        setActiveType(idx)
    }
    const onSelectSize = (idx) => {
        setActiveSize(idx)
    }





    return (
        <div className="pizza-block">
            <img
                className="pizza-block__image"
                src={imageUrl}
                alt={name}
            />
            <h4 className="pizza-block__title">{name}</h4>
            <div className="pizza-block__selector">
                <ul>
                    {availableTypes.map((typeName, idx) =>
                        <li
                            key={`${idx}_${typeName}`}
                            onClick={() => onSelectType(idx)}
                            className={classNames({
                                active: activeType === idx,
                                disabled: !types.includes(idx),
                            })}
                        >{typeName}</li>)}
                </ul>
                <ul>
                    {availableSizes.map((size, idx) =>
                        <li
                            key={`${idx}_${size}`}
                            onClick={() => onSelectSize(idx)}
                            className={classNames({
                                active: activeSize === idx,
                                disabled: !sizes.includes(size),
                            })}
                        >
                        {size}см.
                    </li>)}
                </ul>
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">от {price} ₽</div>
                <div onClick={() =>console.log(availableTypes[activeType], availableSizes[activeSize], name, price, imageUrl)} className="button button--outline button--add">
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white"
                        />
                    </svg>
                    <span>Добавить</span>
                </div>
            </div>
        </div>
    )
}

PizzaCard.propTypes = {
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    category: PropTypes.number.isRequired,
    types: PropTypes.arrayOf(PropTypes.number).isRequired,
    price: PropTypes.number.isRequired,
    sizes: PropTypes.arrayOf(PropTypes.number).isRequired

}

PizzaCard.defaultProps = {
    name: 'Название пиццы',
    imageUrl: '',
    rating: 0,
    category: 0,
    types: [],
    price: 0,
    sizes: []
}