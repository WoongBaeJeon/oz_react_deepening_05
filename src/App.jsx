import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
// - `App.jsx` 컴포넌트 내 요구 사항
//     - 전체 화면을 구성하는 컴포넌트 입니다.
//     - 카트에 상품을 추가하는 함수 `addToCart` 를 완성하세요.
//     - 상품은 **배열객체**로 이루어져 있습니다.
const App = () => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        if (cart.length >= 8) {
            alert(`더 이상 상품을 추가할 수 없습니다.`);
        } else {
            setCart([...cart, product]);
        }
        // console.log(setCart);
        // TODO: 카트에 상품을 추가하는 함수를 완성하세요.
        // 상품은 배열객체로 이루어져 있습니다.
        // 카트에 상품이 8개 이상이면 alert를 띄워
        // 더 이상 상품을 추가할 수 없다고 알려주세요.
    };

    return (
        <>
            <div className="container">
                <ProductList addToCart={addToCart} />
            </div>
            <Cart cart={cart} setCart={setCart} />
        </>
    );
};

export default App;
