import React from 'react';
import FlashDeals from '../Commponents/flashDeals/FlashDeals';
import Home from '../Commponents/mainpage/Home';
import TopCate from '../Commponents/top/TopCate';
import NewArrivals from '../Commponents/newarrivals/NewArrivals';
import Discount from '../Commponents/discount/Discount';
import Shop from '../Commponents/shop/Shop';
import Annu from '../Commponents/annocuments/Annu';
import Wrapper from '../Commponents/wrapper/Wrapper';

const Pages = ({ productItems, cartItem, addToCart, shopItems }) => {
  return (
    <>
        <Home cartItem={cartItem} />
        <FlashDeals productItems={productItems} addToCart={addToCart} />
        <TopCate />
        <NewArrivals />
        <Discount />
        <Shop shopItems={shopItems} addToCart={addToCart} />
        <Annu />
        <Wrapper />
    </>
  )
}

export default Pages