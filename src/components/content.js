import React from 'react';
import ShoppingList from './shoppinglist.js';

class Content extends React.Component {
    render() {
        return (
            <ShoppingList name="张三">
                <li>Instagram</li>
                <li>WhatsApp</li>
                <li>Oculus</li>
            </ShoppingList>
        );
    }
}

export default Content;