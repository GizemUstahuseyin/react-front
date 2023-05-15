import resim from './images/kubizm.jpg'


function Kübizm(props){
<>
    <img src ={resim}/>
    
    <h1>Kübizm Nedir?</h1>

    return(
        <li>{props.aciklama}Kübizm, 20. yüzyıl başındaki temsile dayalı sanat anlayışından saparak devrim yapan Fransız sanat akımıdır.[1] Pablo Picasso ve Georges Braque, nesne yüzeylerinin ardına bakarak konuyu aynı anda değişik açılardan sunabilecek geometrik şekilleri vurgulamışlardır.</li>
    );
</>
}
export default Kübizm;