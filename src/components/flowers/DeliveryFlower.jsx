import React from "react";
import backgroundImage from "./../../images/изображение_2021-03-19_141853-removebg 1.png"

const DeliveryFlower = () => {
  return (
    <div>
      <img width={1381} height={700} src={backgroundImage} alt="" />
      <div style={{padding: "0 180px"}}>
        <h1 className="delviri">Доставка</h1>
        <p className="text11">
          Возьмём на себя все заботы по <br />
          созданию, оформлению и доставке <br />
          корпоративных букетов в обычные и <br />
          праздничные дни за разумные деньги
        </p>
      </div>
    </div>
  );
};

export default DeliveryFlower;
