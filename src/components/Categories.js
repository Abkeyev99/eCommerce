import React from 'react';


class Categories extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'Все'

                },
                {
                    key: 'chairs',
                    name: 'Стулья'

                },
                {
                    key: 'sofa',
                    name: 'Диван'

                },
                {
                    key: 'tables',
                    name: 'Стол'

                },
                {
                    key: 'light',
                    name: 'Кресло'

                }

            ]
        }
    }

    render() {
        return (
            <div className='categories'>
                {this.state.categories.map(el=> (
                    <div key={el.key} onClick={()=> this.props.chooseCategory(el.key)}>{el.name}</div>
                    )
                )}
            </div>
        );

    }
}

export default Categories;