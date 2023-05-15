function Futbol(){
    const sut= function(){
        alert("Harika bir şut!");
    }

    return(
        <button onClick={sut}>Şut Çek!</button>
    );
}

export default Futbol;
