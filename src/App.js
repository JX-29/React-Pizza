import React, {Component} from 'react';
import {connect} from 'react-redux'
import axios from "axios"
import {setPizzas} from "./redux/actions/pizzas";
import { Header } from './components';
import { Home, Cart } from './pages';
import { Route } from "react-router";



//
// function App() {
//
//     const [pizzas, setPizzas] = React.useState([]);
//
//     React.useEffect(() => {
//         axios.get('http://localhost:3000/db.json').then(({data}) => setPizzas(data.pizzas))
//     }, [])
// }

class App extends Component {
    componentDidMount() {
        axios.get('http://localhost:3000/db.json').then(({data}) => {
            //передаем в глобальную память с помощью redux массив с пиццами
            //такая запись эквивалентна  this.props.dispatch(setPizzas(data.pizzas))
            this.props.setPizzas(data.pizzas)
        })
    }

    render() {
        console.log(this.props)
        return (
            <div className="wrapper">
                <Header />
                <div className="content">
                    <Route path="/" render={() => <Home pizzas = {this.props.items}/>} exact />
                    <Route path="/cart" render={() => <Cart/>} exact />
                </div>
            </div>
        );
    }
}


//передаем массив с пиццами в this.props
const mapStateToProps = (state) => {
    return {
        items: state.pizza.items
    }
}

//передаем setPizzas в this.props
const mapDispatchToProps = {
    setPizzas
}

//передает компоненту возможность работы с Redux
//в первую скобку передаются данные из памяти и действия, а во вторую передается компонент
export default connect(mapStateToProps, mapDispatchToProps)(App);
