import React from "react";
import "./footer.css";
import phone from "./../../images/icons8-viber 1.png";
import facebook from "./../../images/icons8-facebook 1.png";
import whatsapp from "./../../images/icons8-whatsapp 1.png";
import instagramm from "./../../images/icons8-instagram (2) 1.png";

const Footer = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "45px", paddingTop: "80px" }}>Контакты:</h2>
        <a href="https://wa.me/996223367607">
          <p
            style={{ marginTop: "20px", fontWeight: "600", cursor: "pointer" }}
          >
            +996-223367607
          </p>
        </a>
        <p style={{ fontWeight: "600", cursor: "pointer" }}>
          Електоронный_адрес@gmail.com
        </p>
        <span
          style={{
            display: "flex",
            alignItems: "center",
            marginLeft: "578px",
            marginTop: "20px",
            gap: "20px",
          }}
        >
          <a href="+996223367607">
            <img
              style={{ width: "40px", height: "40px", cursor: "pointer" }}
              src={phone}
              alt=""
            />
          </a>
          <a href="https://www.facebook.com/?locale=ru_RU">
            <img
              style={{ width: "40px", height: "40px", cursor: "pointer" }}
              src={facebook}
              alt=""
            />
          </a>
          <a href="https://wa.me/996223367607">
            <img
              style={{ width: "40px", height: "40px", cursor: "pointer" }}
              src={whatsapp}
              alt=""
            />
          </a>
          <a href="https://www.instagram.com/direct/t/17844473313160805/">
            <img
              style={{ width: "40px", height: "40px", cursor: "pointer" }}
              src={instagramm}
              alt=""
            />
          </a>
        </span>
        <p style={{ marginTop: "20px" }}>©2021. Все права защищены </p>
      </div>
    </div>
  );
};

export default Footer;
