import React from 'react';
import banner from '../../assets/banner/main-image.svg'
import secure from '../../assets/banner/secure.png'
import setting from '../../assets/banner/setting.png'
import startup from '../../assets/banner/startup.png'
import './style.css'

const Banner = () => {
    return (
        <div className="main-banner">
            <div className="continer-banner">
                <div className="banner-left">
                    <h1>Надёжные серверы на базе KVM с мгновенной установкой</h1>
                    <h2>Высокая производительность по низкой цене!</h2>

                    <button>Смотреть тарифы</button>
                </div>
                <div className="banner-right">
                    <img src={banner} alt="" />
                </div>
            </div>

            <div className="banner-icons">
                <div className="icon_box">
                    <div className="main-icon">
                        <img width={50} src={secure} alt="" />
                    </div>
                    <div className="main-text">
                        <h2>Высокая надежность</h2>
                        <h3>Используем надёжное оборудование всемирно известных брендов!</h3>
                    </div>
                </div>
                <div className="icon_box">
                    <div className="main-icon">
                        <img width={65} src={setting} alt="" />
                    </div>
                    <div className="main-text">
                        <h2>Полный контроль</h2>
                        <h3>Полный root доступ к серверу, никаких ограничений!</h3>
                    </div>
                </div>
                <div className="icon_box">
                    <div className="main-icon">
                        <img width={50} src={startup} alt="" />
                    </div>
                    <div className="main-text">
                        <h2>Быстрая установка</h2>
                        <h3>Сервер будет готов­ к работе менее чем за 1 минуту</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
