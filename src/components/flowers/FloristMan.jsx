import React from "react";
import flower from "./../../images/Слой 0.png";
import flower10 from "./../../images/200170600552_256263 1.png";
import flower11 from "./../../images/image 21.png";
import flower12 from "./../../images/Rectangle 61.png";
import flower13 from "./../../images/Rectangle 61 (1).png";
import flower14 from "./../../images/Rectangle 61 (2).png";
import flower15 from "./../../images/image 22.png";
import flower16 from "./../../images/Rectangle 61 (3).png";
import flower17 from "./../../images/Rectangle 61 (4).png";

const FloristMan = () => {
  return (
    <div>
      <div style={{ padding: "0 100px" }}>
        <span
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            marginTop: "30px",
          }}
        >
          <div>
            <img src={flower} alt="flower" />
          </div>
          <div>
            <h1 style={{ fontSize: "27px", fontWeight: "600" }}>FLORISTMAN</h1>
            <p style={{ fontSize: "12px" }}>Широкий выбор на любой вкус</p>
          </div>
        </span>
        <div style={{ display: "flex", gap: "16px" }}>
          <div style={{ marginTop: "26.5px" }}>
            <img src={flower10} alt="" />
            <p className="flower10">Цветы</p>
          </div>
          <div style={{ marginTop: "26.5px" }}>
            <img src={flower11} alt="" />
            <p className="flower11">Воздушные шары</p>
          </div>
          <div style={{ marginTop: "26.5px" }}>
            <img src={flower12} alt="" />
            <p className="flower12">Аксессуары</p>
          </div>
          <div style={{ marginTop: "26.5px" }}>
            <img src={flower13} alt="" />
            <p className="flower13">Фруктовые сладости</p>
          </div>
        </div>
        <div style={{ display: "flex", gap: "16px" }}>
          <div style={{ marginTop: "26.5px" }}>
            <img src={flower14} alt="" />
            <p className="flower14">Сладости</p>
          </div>
          <div style={{ marginTop: "26.5px" }}>
            <img src={flower15} alt="" />
            <p className="flower15">Подарки</p>
          </div>
          <div style={{ marginTop: "26.5px" }}>
            <img src={flower16} alt="" />
            <p className="flower16">Услуги</p>
          </div>
          <div style={{ marginTop: "26.5px" }}>
            <img src={flower17} alt="" />
            <p className="flower17">Комнатные растения</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloristMan;
