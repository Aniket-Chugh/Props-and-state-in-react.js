function CartLogic({ items }) {
    return (
        <div>
            <h1>
                Your Cart
            </h1>

            <ol type="a">
                {
                    items.map((items) => {
                        return (<li key={items.key}>
                            {items.name} - {items.price}$
                        </li>)
                    })
                }
            </ol>
        </div>
    );
}

function CartItems() {
    const CartItems = [
        { id: 1, name: "Laptop", price: 999 },
        { id: 2, name: "Smartphone", price: 499 },
        { id: 3, name: "Pant", price: 34 },
        { id: 4, name: "Geans", price: 345 },


    ]
    return <CartLogic items={CartItems}></CartLogic>
}


export default CartItems;
