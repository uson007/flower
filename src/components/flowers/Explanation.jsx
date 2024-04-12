import React from "react";
import flowerBeauty from "./../../images/Фото1.png";
import flowerBeauty2 from "./../../images/Фото2.png";
import flowerBeauty3 from "./../../images/Фото3.png";

const Explanation = () => {
  return (
    <div className="explanation">
      <div>
        <h1 style={{ paddingTop: "30px", fontSize: "46px" }}>
          Почему именно мы?
        </h1>
        <div>
          <img
            width={563}
            height={625}
            className="flower1"
            src={flowerBeauty}
            alt="flowers"
          />
          <p className="text">
            Вы можете выбрать любую цветочную <br /> композицию из нашего
            каталога или <br /> заказать свой вариант. Вы можете выбрать <br />
            любую цветочную композицию из нашего <br /> каталога или заказать
            свой вариант
          </p>
        </div>
        <div>
          <img className="flowerBeauty2" src={flowerBeauty2} alt="" />
          <p className="text2">
            Вы можете выбрать любую <br />
            цветочную композицию из нашего <br />
            каталога или заказать свой вариант
          </p>
        </div>
        <div>
          <img className="flowerBeauty3" src={flowerBeauty3} alt="" />
          <p className="text3">
            Вы можете выбрать любую <br />
            цветочную композицию из нашего <br />
            каталога или заказать свой вариант
          </p>
        </div>
      </div>
    </div>
  );
};

export default Explanation;
