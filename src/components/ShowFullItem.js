import React from 'react';



class ShowFullItem extends React.Component {



    render() {
        return (
            <div className='full-item'>
                <div>
                    <img src={"./img/" + this.props.item.img } onClick={()=> this.props.onShowItem(this.props.item)}/>
                    <h2>{this.props.item.title}</h2>
                    <p>{this.props.item.desc}</p>
                    <b>{this.props.item.price}$</b>
                    <div onClick={()=> this.props.onAdd(this.props.item)} className='add-to-cart'>+</div>
                </div>
            </div>
        );

    }
}

export default ShowFullItem;






