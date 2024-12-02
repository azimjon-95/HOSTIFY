import React from 'react';
import { Link, useParams } from 'react-router-dom';
import cloud from '../../assets/memory/cloud-1.png'
import hi_cpu from '../../assets/memory/hi-cpu-box.png'
import memory from '../../assets/memory/memory-box.png'
import windows from '../../assets/memory/windows-box.png'
import './style.css';

const BannerVPS = () => {
    const { id } = useParams();

    const banners = [
        { id: 'standard', title: "Стандартные VPS/VDS", content: "Стандартные облачные серверы для большинства повседневных задач, сбалансированное количество ресурсов процессора, оперативной памяти и диска", image: cloud },
        { id: 'memory', title: "Memory VPS/VDS", content: "Облачные серверы с повышенным соотношением ресурсов оперативной памяти к процессору. Для тяжелых задач, не требующих интенсивной работы процессора", image: memory },
        { id: 'hi-cpu', title: "Hi-CPU VPS/VDS", content: "Облачные серверы на базе процессоров с высокой частотой: Intel Core / AMD Ryzen", image: hi_cpu },
        { id: 'windows', title: "Windows VPS/VDS", content: "Облачные серверы на базе операцоинной системы Windows. Для задач, требующих работы с удаленным рабочим столом", image: windows },
    ];

    const banner = banners.find((b) => b.id === id);

    if (!banner) {
        return <div className="vpCcontainer">Banner not found!</div>;
    }

    return (
        <div className="vpCcontainer">
            <div>
                <h1>{banner.title}</h1>
                <p>{banner.content}</p>
                <Link to="/userAuth/new">
                    <button>Смотреть тарифы</button>
                </Link>
            </div>
            <div className="vpCcontainer-img">
                <img
                    src={banner.image} // Rasm yo'lini moslang
                    alt="VPS Illustration"
                />
            </div>
        </div>
    )
}

export default BannerVPS