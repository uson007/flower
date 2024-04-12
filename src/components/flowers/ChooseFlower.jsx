import React from 'react';
import flowerImage from "./../../images/image (12).png"

const ChooseFlower = () => {
  return (
    <div id='chooseFlower'>
      <div className='chooseFlower'>
        <div className='flowerImage'>
          <img width={1382} height={700} src={flowerImage} alt="" />
        </div>
        <div className='containerParagraph'>
        <p className='paragraph1'>Подарите ощущение праздника</p>
        <h1 className='paragraph2'>Собираем букеты, <br/> созданные для Вас</h1>
        <button className='btn'>Выбрать букет</button>
        </div>
      </div>
    </div>
  );
};

export default ChooseFlower;