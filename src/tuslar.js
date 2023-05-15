function Tuslar(){
    const nereden = function(x){
    const sonuc = document.getElementById("sonuc");
    sonuc.innerHTML=x;

    }
    return(
        <>
        <button onClick={()=>nereden('Ben 1 numaralı butonum!')}>Bana Tıkla</button>
        <button onClick={()=>nereden('Ben 2 numaralı butonum!')}>Bana Tıkla</button>
        <button onClick={()=>nereden('Ben 3 numaralı butonum!')}>Bana Tıkla</button>
        <p id="sonuc"></p>
        </>
    );
}
export default Tuslar;