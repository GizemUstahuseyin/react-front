/* eslint-disable jsx-a11y/alt-text */
import resim from './images/soyutsanat.jpg'

function SoyutSanat(props){
<>
    <img src ={resim}/>
    
    <h1>Soyut Sanat Nedir?</h1>

    return(
        <li>{props.aciklama}Soyut sanat, genel anlamıyla doğada var olan gerçek nesneleri betimlemek yerine, biçimler ve renklerin, temsili olmayan veya öznel kullanımı ile yapılan sanata denir. Nonfigüratif sanat terimi ile değişmeli olarak kullanılır. 20. yüzyıl başında bu terim, gerçek biçimleri sadeleştirilmiş veya değiştirilmiş halleriyle imgelere indirgeyen Kübist ve Fütürist sanatı tanımlamak için de kullanılmıştır.</li>
    );
    </>
}
export default SoyutSanat;





