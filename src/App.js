import React from "react"
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [
                {
                    id: 1,
                    title: "Кресло",
                    img:'c-grey.jpg',
                    desc:'Lorem ipsum dolor sit amet, consectetur adipisicing.',
                    category: 'chairs',
                    price: '49.99'
                },
            {
                    id: 2,
                    title: "Стол",
                    img:'img_1.png',
                    desc:'Lorem ipsum dolor sit amet, consectetur adipisicing.',
                    category: 'chairs',
                    price: '49.99'
                },
            {
                    id: 3,
                    title: "Диван",
                    img:'img.png',
                    desc:'Lorem ipsum dolor sit amet, consectetur adipisicing.',
                    category: 'chairs',
                    price: '49.99'
                },
            {
                    id: 4,
                    title: "Стул белый",
                    img:'img_3.png',
                    desc:'Lorem ipsum dolor sit amet, consectetur adipisicing.',
                    category: 'chairs',
                    price: '49.99'
                },
                {
                    id: 5,
                    title: "Стул серый",
                    img:'img_2.png',
                    desc:'Lorem ipsum dolor sit amet, consectetur adipisicing.',
                    category: 'chairs',
                    price: '49.99'
                },
                {
                    id: 6,
                    title: "Деревянный буфет",
                    img:'img_4.png',
                    desc:'Lorem ipsum dolor sit amet, consectetur adipisicing.',
                    category: 'chairs',
                    price: '49.99'
                },
            ]
        }
    }


    render() {
        return (
            <div className="wrapper">
                <Header/>
                <Footer/>
                <Items items={this.state.items}/>
            </div>
        );
    }

}

export default App;
