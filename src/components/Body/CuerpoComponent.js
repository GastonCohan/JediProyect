import React from 'react'
import "./CuerpoComponentStyles.css"
import CardItemComponent from '../CardItem/CardItemComponent'

// RENDER 

const CuerpoComponent = () => (
  <div>
    <div className="Banner">
      <img src="https://www.thehomegaming.com/user/pages/01.blog/224.star-wars-a-traves-del-canon-00-principal/l3fya3oustw41.jpg" alt="" style={{height: "50vh", width: "100%"}} />
    </div>
    <div className="titleContainer">
      <h1 className="textTitleBody">¿ Quiénes Somos ? </h1>
    </div>
    <div className="containerAboutUs">
      <h2 className="textAboutUs">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum iure natus ratione. Illo autem, ullam recusandae ratione provident odio perferendis nihil quam sint obcaecati, fugit debitis tempora nisi ducimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae illo iure tempore nostrum quidem ipsam non a deserunt. Velit, ipsum nihil quibusdam facere beatae placeat vero odit corporis earum nisi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, odio delectus impedit iusto saepe non officia ea ipsum modi nihil architecto quo possimus quam labore velit eius molestiae facilis vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam deserunt corporis libero? Harum sint mollitia ratione totam numquam omnis enim, perferendis iste itaque fugiat et ipsum fuga sapiente corrupti minus. </h2>
    </div>
    <div className="titleContainer">
      <h1 className="textTitleBody">Tienda </h1>
    </div>
    <div className="tiendaContainer">
      <CardItemComponent/>
    </div>
  </div>
)

export default CuerpoComponent

