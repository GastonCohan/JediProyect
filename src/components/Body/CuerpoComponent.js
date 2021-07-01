import React from 'react'
import "./CuerpoComponentStyles.css"

// RENDER 

const CuerpoComponent = () => (
  <div>
    <div className="Banner">
      <img src="https://www.thehomegaming.com/user/pages/01.blog/224.star-wars-a-traves-del-canon-00-principal/l3fya3oustw41.jpg" alt="Banner" style={{ height: "50vh", width: "100%" }} />
    </div>
    <div className="titleContainer">
      <h1 className="textTitleBody">¿ Quiénes Somos ? </h1>
    </div>
    <div className="containerAboutUs">
      <h2 className="textAboutUs">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum iure natus ratione. Illo autem, ullam recusandae ratione provident odio perferendis nihil quam sint obcaecati, fugit debitis tempora nisi ducimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae illo iure tempore nostrum quidem ipsam non a deserunt. Velit, ipsum nihil quibusdam facere beatae placeat vero odit corporis earum nisi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, odio delectus impedit iusto saepe non officia ea ipsum modi nihil architecto quo possimus quam labore velit eius molestiae facilis vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam deserunt corporis libero? Harum sint mollitia ratione totam numquam omnis enim, perferendis iste itaque fugiat et ipsum fuga sapiente corrupti minus. </h2>
    </div>
    <div className="titleContainer">
      <h1 className="textTitleBody">Colecciones </h1>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "2%" }}>
        <ul>
          <div style={{ display: "flex", width: "1000px", justifyContent: "center", alignItems: "center", height: "20vh", border: "1px solid rgba(0, 0, 0, 1)" }}>
            <img src="https://cdn.palbincdn.com/users/40535/upload/images/banner-star-wars1-2.jpg" alt="Banner" style={{ height: "20vh", width: "100%" }} />
          </div>
          <div style={{ display: "flex", width: "1000px", justifyContent: "center", alignItems: "center", marginTop: "24px", height: "20vh", border: "1px solid rgba(0, 0, 0, 1)" }}>
            <img src="https://i2.wp.com/www.lafosadelrancor.com/wp-content/uploads/2018/11/Star-Wars-Planeta-Comic.jpg?zoom=2&fit=970%2C250&ssl=1" alt="Banner" style={{ height: "20vh", width: "100%" }} />
          </div>
          <div style={{ display: "flex", width: "1000px", justifyContent: "center", alignItems: "center", marginTop: "24px", height: "20vh", border: "1px solid rgba(0, 0, 0, 1)" }}>
            <img src="https://pbs.twimg.com/media/EF4wuCXUEAAv6Yc.jpg" alt="Banner" style={{ height: "20vh", width: "100%" }} />
          </div>
          <div style={{ display: "flex", width: "1000px", justifyContent: "center", alignItems: "center", marginTop: "24px", height: "20vh", border: "1px solid rgba(0, 0, 0, 1)", marginBottom: "10%" }}>
            <img src="https://www.lego.com/cdn/cs/set/assets/blt0aef318b4ac5fecb/HeroBanner-Standard_desktop.jpg?fit=crop&format=jpg&quality=80&width=1600&height=500&dpr=1" alt="Banner" style={{ height: "20vh", width: "100%" }} />
          </div>
        </ul>
      </div>
    </div>

  </div>
)

export default CuerpoComponent

