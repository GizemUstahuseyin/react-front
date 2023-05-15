import resim from './images/grafitti.jpg'


function Grafitti(props){
<>
    <img src ={resim}/>
    
    <h1>Grafitti Nedir?</h1>

    return(
        <li>{props.aciklama}Grafiti, çoğunlukla kamusal bir alanda yer alan bir duvar ya da yüzeye çizilmiş, kazınmış veya püskürtülmüş yazı ve çizimlerdir.

        Kelime, Yunanca "graphein" (yazmak) kelimesinden gelmiş ve İtalyanca "sgraffio" (karalamak) kelimesinden türemiştir.[1] İlk çağlardan beri bir durumu resmetme, tanımlama ya da dikkat çekme yöntemlerinden birisidir.[2] Bugün bilinen anlamıyla grafiti, 1960'ların sonlarında Amerika Birleşik Devletleri'nin hip hop kültürüyle birlikte doğmuştur.
        
        Modern şehirlerde otobüslerin içlerine sivri bir aletle kazınan yazılardan sokak duvarlarına sprey boyayla çizilen resimlere kadar pek çok uygulama grafitinin kapsamına girmektedir. Kimi çevrelerce bir sanat dalı olarak kabul edilirken, bir başka bakış açısı da, grafitiyi vandalizm olarak değerlendirmekte ve suçla ilişkilendirmektedir.</li>
    );
    </>
}
export default Grafitti;