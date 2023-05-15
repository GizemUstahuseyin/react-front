import React from 'react';
import ReactDOM from 'react-dom/client';
// import Araba from './Araba';
// import Garaj from './Garaj';
// import FrontEnd from './Front-End';
// import BackEnd from './BackEnd';
// import OgrenciBilgi from './OgrenciBilgi';
// import Futbol from './Futbol';
//import Tuslar from './tuslar';
// import Gol from './gol';
// import Secim from './secim';
// import SayiUret from './sayiUret';
// import Sinif from './sinif';
// import SinifListesi from './sinifListesi';
import Menu from './menu';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Garaj/>
    <Araba/>
    <FrontEnd/>   
    <BackEnd/>
    <OgrenciBilgi/>
    <Futbol/>
    <SayiUret sayi="random"/>
    <Tuslar/> 
    <Gol deger="true"/>
    <Secim/>
    <Sinif sayi={sinif}/>
     <SinifListesi/> */}
     <Menu/>
     </React.StrictMode>
  
);

reportWebVitals();
