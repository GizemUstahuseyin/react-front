import List from "./example1-navbar";

function Liste(){

    const navbar=["Soyut Sanat","Kübizm","Realizm","Grafitti"];

    return(
        <>
        <ul style={{listStyleType:"none", marginLeft:"20", display:"inline-block",minWidth: "150px",color: "black", lineHeight: "60px", textAlign: "center", fontFamily: "'Times New Roman'", borderRadius: "50px",position:"center"}}>
            {navbar.map((ad)=><List sanat={ad}/>)}
        </ul>
        </>
    );
}
export default Liste;