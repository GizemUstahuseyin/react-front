/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import ReactDOM from 'react-dom/client';import Grafitti from "./Grafitti";
import Realizm from "./Realizm";
import Kübizm from "./Kübizm";
import SoyutSanat from "./SoyutSanat";

function List(props){

    const secim = function(x){
        const div = ReactDOM.createRoot(document.getElementById('aciklama'));

        if (x==='1'){
            div.render(
                <SoyutSanat/>
            )
        }
        else if (x==='2'){
            div.render(
                <Kübizm/>
            )
        }
        else if (x==='3'){
            div.render(
                <Realizm/>
            )
        }
        else if(x==='4'){
            div.render(
               <Grafitti/>
                )
        }
    }
    return(
        <>
        <li style={{listStyleType:"none", marginLeft:"50",marginRight: "50", display:"inline-block",minWidth: "350px",color: "black", lineHeight: "60px", textAlign: "center", fontFamily: "'Times New Roman'", borderRadius: "50px"}}>{props.sanat}</li>
        <a onClick={()=>secim('1')}></a>
        <a onClick={()=>secim('2')}></a>
        <a onClick={()=>secim('3')}></a>
        <a onClick={()=>secim('4')}></a>
        </>
    );
}
export default List;
