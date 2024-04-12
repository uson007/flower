import React from "react";
import image2 from "./../../images/Rectangle 202.png";

const BouquetFlower = () => {
  return (
    <div>
      <div
        style={{
          background: "#fcefe4",
          padding: "0 150px",
          display: "flex",
          alignItems: "center",
          gap: "120px",
          height: "840px",
        }}
      >
        <h1
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "50px",
            fontSize: "50px",
            position: "absolute",
            top: "5720px",
            left: "420px",
          }}
        >
          Предложи свой букет
        </h1>
        <div className="containerInputs">
          <input
            style={{
              width: "550px",
              height: "70px",
              borderRadius: "40px",
              fontSize: "22px",
              paddingLeft: "20px",
              border: "none",
              border: "2px solid grey",
            }}
            type="text"
            placeholder="Имя"
          />
          <input
            style={{
              width: "550px",
              height: "70px",
              borderRadius: "40px",
              fontSize: "22px",
              paddingLeft: "20px",
              border: "none",
              border: "2px solid grey",
            }}
            type="number"
            placeholder="Телефон"
          />
          <input
            style={{
              width: "550px",
              height: "300px",
              fontSize: "22px",
              paddingLeft: "20px",
              border: "2px solid grey",
              borderRadius: "10px",
            }}
            type="text"
            placeholder="Ваша идея"
          />
        </div>
        <img style={{ paddingTop: "90px" }} height={600} src={image2} alt="" />
      </div>
      <button style={{
        position: "absolute",
        top: "6490px",
        left: "660px",
        width: "200px",
        height: "50px",
        color: "white",
        borderRadius: "30px",
        background: "#D7537A",
        border: "none",
        fontSize: "20px",
        cursor: "pointer"
      }}>Отправить</button>
    </div>
  );
};

export default BouquetFlower;
