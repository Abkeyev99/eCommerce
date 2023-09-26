import React from "react"
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            orders: [],
            currentItems: [],
            items: [
                {
                    id: 1,
                    title: "Кресло",
                    img: 'c-grey.jpg',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
                    category: 'light',
                    price: '69.99'
                },
                {
                    id: 2,
                    title: "Стол",
                    img: 'img_1.png',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
                    category: 'tables',
                    price: '149.00'
                },
                {
                    id: 3,
                    title: "Диван",
                    img: 'img.png',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
                    category: 'sofa',
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
        this.state.currentItems = this.state.items
        this.addToOrder = this.addToOrder.bind(this)
        this.deleteOrder = this.deleteOrder.bind(this)
        this.chooseCategory = this.chooseCategory.bind(this)

    }

    render() {
        return (
            <div className="wrapper">
                <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
                <Categories chooseCategory={this.chooseCategory}/>
                <Items items={this.state.currentItems} onAdd={this.addToOrder}/>
                <Footer/>
            </div>
        );
    }

    chooseCategory(category) {
        if (category === 'all') {
            this.setState({currentItems: this.state.items})
            return
        }
        this.setState({
            currentItems: this.state.items.filter(el => el.category === category)
        })
    }

    deleteOrder(id) {
        this.setState({orders: this.state.orders.filter(el => el.id !== id)})
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
