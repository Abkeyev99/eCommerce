import React from "react"
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            orders: [],
            items: [
                {
                    id: 1,
                    title: "Кресло",
                    img: 'c-grey.jpg',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
                    category: 'chairs',
                    price: '69.99'
                },
                {
                    id: 2,
                    title: "Стол",
                    img: 'img_1.png',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
                    category: 'chairs',
                    price: '149.00'
                },
                {
                    id: 3,
                    title: "Диван",
                    img: 'img.png',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
                    category: 'chairs',
                    price: '549.99'
                },
                {
                    id: 4,
                    title: "Стул белый",
                    img: 'img_3.png',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
                    category: 'chairs',
                    price: '49.99'
                },
                {
                    id: 5,
                    title: "Стул серый",
                    img: 'img_2.png',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
                    category: 'chairs',
                    price: '55.00'
                },
                {
                    id: 6,
                    title: "Деревянный буфет",
                    img: 'img_4.png',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
                    category: 'chairs',
                    price: '49.99'
                },
            ]
        }
        this.addToOrder = this.addToOrder.bind(this)
        this.deleteOrder = this.deleteOrder.bind(this)
    }

    render() {
        return (
            <div className="wrapper">
                <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
                <Footer/>
                <Items items={this.state.items} onAdd={this.addToOrder}/>
            </div>
        );
    }

    deleteOrder(id) {
       this.setState({orders: this.state.orders.filter(el => el.id !== id )})
    }

    addToOrder(item) {
        let isInArray = false
        this.state.orders.forEach(el => {
            if (el.id === item.id)
                isInArray = true
        })
        if (!isInArray)
            this.setState({orders: [...this.state.orders, item]})

    }
}

export default App;
