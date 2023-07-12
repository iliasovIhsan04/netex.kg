import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="wrapper">
          <h1>
            {" "}
            <span className="first">Лови момент</span> лидер в продаже и обмене
            криптовалюты
          </h1>
          <p>
            Откройте двери к финансовой свободе с нашей интуитивно понятной
            платформой для продажи, обмена и покупки криптовалюты
          </p>
          <button className="btn">Регистрация по телефону или эл почте</button>
        </div>
        <div className="wrapper2">
          <p>
            Погрузитесь в мир криптовалютных возможностей и начните финансовое
            путешествие прямо сейчас!
          </p>
          <div className="save">
            <img src="" />
            <div className="bitcoin">
              <span>5000+</span>
              <p> пользователей Кыргызстана</p>
            </div> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
