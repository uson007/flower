import React from "react";
import romashka from "./../../images/Ромашки для наташки.png";

const CardFlower = () => {
  return (
    <div className="cardFlowers">
      <div>
        <h1 style={{fontSize: "48px", paddingTop: "20px"}}>Скидки</h1>
      </div>
      <div style={{marginLeft: "-170px"}} className="container2">
        <img width={266} height={245} src={romashka} alt="" />
        <span>
          <p>№225 “Ромашки для Наташки” </p>
          <p>№225 “Ромашки для Наташки” </p>
        </span>
        <span
          style={{
            display: "flex",
            alignItems: "center",
            gap: "67px",
            marginTop: "20px",
          }}
        >
          <span style={{display: "flex",flexDirection: "column", alignItems: "center"}}>
          <del className="del" style={{ color: "#7ea048", }}>4500 сом</del>
          <p style={{ color: "#7ea048", fontWeight: "600" }}>3900 сом</p>
          </span>
          <button className="btn2">Заказать</button>
        </span>
      </div>
      {/* 2222222222222222222222222222222222222222222222222222222 */}
      <div className="container2">
        <img width={266} height={245} src={romashka} alt="" />
        <span>
          <p>№225 “Ромашки для Наташки” </p>
          <p>№225 “Ромашки для Наташки” </p>
        </span>
        <span
          style={{
            display: "flex",
            alignItems: "center",
            gap: "67px",
            marginTop: "20px",
          }}
        >
          <span style={{display: "flex",flexDirection: "column", alignItems: "center"}}>
          <del className="del" style={{ color: "#7ea048", }}>4500 сом</del>
          <p style={{ color: "#7ea048", fontWeight: "600" }}>3900 сом</p>
          </span>
          <button className="btn2">Заказать</button>
        </span>
      </div>
      {/* 333333333333333333333333333333333333333333333333333 */}
      <div className="container2">
        <img width={266} height={245} src={romashka} alt="" />
        <span>
          <p>№225 “Ромашки для Наташки” </p>
          <p>№225 “Ромашки для Наташки” </p>
        </span>
        <span
          style={{
            display: "flex",
            alignItems: "center",
            gap: "67px",
            marginTop: "20px",
          }}
        >
          <span style={{display: "flex",flexDirection: "column", alignItems: "center"}}>
          <del className="del" style={{ color: "#7ea048", }}>4500 сом</del>
          <p style={{ color: "#7ea048", fontWeight: "600" }}>3900 сом</p>
          </span>
          <button className="btn2">Заказать</button>
        </span>
      </div>
      {/* 44444444444444444444444444444444444444444444444444444444444 */}
      <div className="container2">
        <img width={266} height={245} src={romashka} alt="" />
        <span>
          <p>№225 “Ромашки для Наташки” </p>
          <p>№225 “Ромашки для Наташки” </p>
        </span>
        <span
          style={{
            display: "flex",
            alignItems: "center",
            gap: "67px",
            marginTop: "20px",
          }}
        >
          <span style={{display: "flex",flexDirection: "column", alignItems: "center"}}>
          <del className="del" style={{ color: "#7ea048", }}>4500 сом</del>
          <p style={{ color: "#7ea048", fontWeight: "600" }}>3900 сом</p>
          </span>
          <button className="btn2">Заказать</button>
        </span>
      </div>
    </div>
  );
};

export default CardFlower;
