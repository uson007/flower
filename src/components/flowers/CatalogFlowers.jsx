import React from "react";
import rouse from "./../../images/Для кого.png";
import rouse2 from "./../../images/Сладости.png";
import rouse3 from "./../../images/Подарки.png";
import rouse4 from "./../../images/Букеты.png";
import rouse5 from "./../../images/Розы.png";
import rouse6 from "./../../images/Праздничная коллекция.png";
import rouse7 from "./../../images/Комнатные растения.png";

const CatalogFlowers = () => {
  return (
    <div>
        <h1 style={{position: "absolute", top: "3250px", left: "100px", fontSize: "50px"}}>Каталог</h1>
      <div style={{ display: "flex", gap: "20px", padding: "0 100px", background: "#fcefe4" }}>
        <span style={{display: "flex", flexDirection: "column"}}>
          <div>
            <img src={rouse} alt="" />
            <p className="text4">Для кого</p>
          </div>
          <div>
            <img style={{ marginTop: "20px" }} src={rouse2} alt="" />
            <p className="text5">Сладости</p>
          </div>
        </span>
        <span>
        <div>
          <img src={rouse3} alt="" />
          <p className="text6">Подарки</p>
        </div>
        <div style={{marginTop: "26.5px"}}>
          <img src={rouse4} alt="" />
          <p className="text7">Букеты</p>
        </div>
        <div style={{marginTop: "26.5px"}}>
          <img src={rouse5} alt="" />
          <p className="text8">Розы</p>
        </div>
        </span>
        <span>
        <div>
            <img src={rouse6} alt="" />
            <p className="text9">Праздничная коллекция</p>
          </div>
          <div>
            <img style={{ marginTop: "20px" }} src={rouse7} alt="" />
            <p className="text10">Комнатные растения</p>
          </div>
        </span>
      </div>
    </div>
  );
};

export default CatalogFlowers;
