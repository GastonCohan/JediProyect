import React from 'react'
import ShopComponent from '../../components/shopComponent/shopComponent';
import NavBarComponent from '../../components/NavBar/NavBarComponent';

// RENDER 



function legoShop() {

    return (
        <div>
            <ShopComponent collection="legoProducts" shopName="de Lego" firebaseCollection='legoProducts' />
        </div>



    );

}


export default legoShop