import React from 'react';
import { Header } from './components';
import { Home, Cart } from './pages';
import { Route } from "react-router";


function App() {
        return (
            <div className="wrapper">
                <Header />
                <div className="content">
                    <Route path="/" component={Home} exact />
                    <Route path="/cart" component={Cart} exact />
                </div>
            </div>
        );
}


// //передаем массив с пиццами в this.props
// // const mapStateToProps = (state) => {
// //     return {
// //         items: state.pizza.items,
// //         filters: state.filters
// //     }
// // }
// //
// // //передаем setPizzas в this.props
// // const mapDispatchToProps = {
// //     setPizzas
// // }
// //
// // //передает компоненту возможность работы с Redux
// // //в первую скобку передаются данные из памяти и действия, а во вторую передается компонент
// // export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App
