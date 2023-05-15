function SayiUret(props){

const sut = function(){
    const sayi=Math.round(Math.random()+1);
    const tahmin = prompt("1 veya 2 giriniz.");
    
if(tahmin >2 || tahmin<1){
    alert("Lütfen 1 veya 2 giriniz.");
}
else if (sayi === tahmin){
    alert("GOL");
}
else{
    alert("Şut Kaçtı")
}
}
return(
    <button onClick={sut}>Şut Çek!</button>
)
}
export default SayiUret;
