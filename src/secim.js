import React from 'react';
import ReactDOM from 'react-dom/client';
import Cay from "./cay";
import Kahve from "./kahve";
import Sut from "./sut";

function Secim(){

    const secim = function(x){
        const div = ReactDOM.createRoot(document.getElementById('aciklama'));

        if (x==='1'){
            div.render(
                <Cay/>
            )
        }
        else if (x==='2'){
            div.render(
                <Kahve/>
            )
        }
        else if (x==='3'){
            div.render(
                <Sut/>
            )
        }
    }
    return(
        <>
        <button onClick={()=>secim('1')}>Ben ÇAY! Faydalarımı görmek için tıkla...</button>
        <button onClick={()=>secim('2')}>Ben KAHVE! Faydalarımı görmek için tıkla...</button>
        <button onClick={()=>secim('3')}>Ben SUT! Faydalarımı görmek için tıkla...</button>
        <div id="aciklama"></div>
        </>
    );
}

export default Secim;