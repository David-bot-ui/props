import React from 'react'
import './Header.scss'
import Card from '../Card/Card'
import Title from '../Title/Title'
const Header = () => {
  return (
    <>

    <Title title="Motocycles"/>
    <div className="wrap">
         <Card name="KAWASAKI NINJA" image="https://motorrika.ru/image/cache/catalog/Motorcycles/1_kawasaki/kawasaki-ninja-650-lime-green-ebony-2023-01-540x400.jpg" />
         <Card name="YAMAXA" image="https://lh4.googleusercontent.com/proxy/ErKsEAxuvOf5X92Asg9kQF7UHsIKZ17eHWS9jghuHqfjvf9QoGKTpjrkDAYy-Kvab50nlkyaLArBDE4wKNvRgpU_dIlMJcvkMmEdX_Dm2Hacd02m_I18htJ5RTB7cTdJ8vA " />
         <Card name="SUZUKI" image="https://procircuit.cl/cdn/shop/products/web2.png?v=1657330941" />
         <Card />
    </div>
     <Title title="Motobikes"/>
     <div className="wrap">
         <Card name="KAWASAKI NINJA" image="https://motorrika.ru/image/cache/catalog/Motorcycles/1_kawasaki/kawasaki-ninja-650-lime-green-ebony-2023-01-540x400.jpg" />
         <Card name="YAMAXA" image="https://lh4.googleusercontent.com/proxy/ErKsEAxuvOf5X92Asg9kQF7UHsIKZ17eHWS9jghuHqfjvf9QoGKTpjrkDAYy-Kvab50nlkyaLArBDE4wKNvRgpU_dIlMJcvkMmEdX_Dm2Hacd02m_I18htJ5RTB7cTdJ8vA " />
         <Card name="SUZUKI" image="https://procircuit.cl/cdn/shop/products/web2.png?v=1657330941" />
         <Card />
    </div>
    
    
    </>
  )
}

export default Header