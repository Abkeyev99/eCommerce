import React from "react";
import Item from "./Item";


class Items extends React.Component {

    render() {
        return (
            <main >
                {this.props.items.map(el=>(
                  <Item key={el.id} item={el} onAdd={this.props.onAdd}/>
                ))}
            </main>
        );
    }

}
export default Items;