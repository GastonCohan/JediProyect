import React from 'react'
import ShopComponent from '../../components/shopComponent/shopComponent';


// RENDER 



function ShopComponentPage(props) {


    return (
        <div>
            <ShopComponent collection="products" shopName="principal" firebaseCollection="products" />
        </div>
    );
}


export default ShopComponentPage
