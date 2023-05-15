import NavList from "./NavList";
import mavirus from './images/mavirus.jpg';
import bengal from './images/bengal.jpg';
import van from './images/vanjpg.jpeg';
import tekir from './images/tekir.jpg';

import React from "react";
import ReactDOM from 'react-dom/client';
import Details from "./details";


function Menu(){

    const baslik = ["Bengal", "Tekir", "Van", "Mavi Rus"];

    const aciklama = ["Bengal kedileri güzel, zeki ve vahşi görünümlü kedilerdir. Bu melez kedi cinsi , kalıpları ve kişilikleri nedeniyle popülaritesini artırıyor ve büyük bir ev kedisi ile yaklaşık aynı boyutta kalıyor. Bir Asya leopar kedisi ( Felis bengalensis - 'Bengal' adının türetildiği yer) Abyssinian, Mısır mau veya Amerikan shorthair gibi evcil bir ev kedisiyle üretilerek geliştirildi.Günümüzde çoğu Bengal kedisi, Afrika leopar kedisinden birkaç nesil uzaklaştığından, özel bir bakıma ihtiyaçları yoktur. Onlar sadece daha büyük 'ev kedileri' dir. Ölü tüyleri almak ve tüy yumaklarını önlemeye yardımcı olmak için kedinizi haftalık tarama ile tımar etmelisiniz. Kedinizin tırnaklarını birkaç haftada bir kesin ve bir tırmalama direği sağlayın. Herhangi bir kedi kirli ve kötü kokulu bir kum kabı kullanmayı reddetmeye başlayacağı için temiz ve taze bir çöp kutusu sağlayın.Bengal kedileri aktiftir ve bir tırmanma ağacı ve odayı araştırmak için kedinize bir levrek bulması için fırsatlar sağlamalısınız. Kedinizin ilgisini çekmek için etkileşimli oyuncaklar sağlayın. Birlikte oynayarak zaman geçirin; Kedinize lazer noktasını getirmesi ve lazer noktasını yakalamasını öğretebilirsiniz.Bengal kedilerinin, çoğu ev kedisinin sahip olmadığı bir özellik olan suyu sevdiği bilinmektedir. Akvaryumunuzun balık tutma havuzu olmamasına dikkat etmeniz gerekebilir.Herhangi bir kedide olduğu gibi, bir Bengal kedisi en iyi şekilde sadece iç mekan kedisi olarak saklanır . Bu onları diğer hayvanlardan hastalık kapmaktan, kavga etmekten, yırtıcı hayvanların saldırısına uğramaktan veya araçlara çarpmaktan korur.Bu cins köpekler ve diğer kedilerle iyi geçinmelidir. Bununla birlikte, gerbil, hamster veya kobayınız varsa, onları kediniz tarafından takip edildiğini görebilirsiniz. Kedileri doğal avlarından ayrı tutmak en iyisidir.", 

    "Tekir, postu siyah çizgilerle ve beneklerle süslü, kül renginde veya boz olan çoğunlukla kafasının ön tarafında M harfine benzer deseni olan melez ırklı bir kedi türüdür. Afrika yaban kedisi (Felis sylvestris lybica) ve Avrupa'nın Mahalli Vahşi Kedisi (Felis Sylvestris Sylverstris) karışımıdır. Sokak kedilerinin çoğunluğu bu melez ırktandır. Tekirler bazen hatalı bir biçimde sadece bir kedi soyu olarak düşünülmektedir, ama aslına bakılırsa tekir deseni genel melez nüfuslu birçok türde bulunur. Tekir deseni, kedilerde Avrupa yaban kedisinin yanı sıra aynı renklere sahip olan Afrika yaban kedisine de bağlı olabilecek doğal şekilde oluşan bir özelliktir.Türkçedeki 'tekir' sözcüğü, Latincede 'kaplan' anlamına gelen 'tigris' sözcüğünden gelmiştir.Tekir kedilerin gözleri genellikle siyah, mavi, sarı, gri, beyaz ve kahverengidir.", "Van kedisinin göz rengi üç gruba ayrılır. Her iki gözü mavi (daima turkuaz mavisi), her iki gözü kehribar (sarı renk ve tonları, çok nadiren kahverengi) ve tek-göz (heterokromik; yani bir gözü mavi diğer gözü kehribar renkte olanlar) diye gruplandırılır. Mavi renk, daima turkuaz mavisi özelliğinde olurken, kehribar rengi farklı tonlarda görülebilir. Bununla birlikte, mavi gözlü Van kedileri de kendi arasında 'mavi gözlü kısa, kadife kürklü' ve 'mavi gözlü-uzun, ipek kürklü' olarak ikiye ayrılır.Van kedilerinde, yeni doğan yavruların gözleri grimsi renktedir. Yavru kedinin doğumundan 25 gün sonra göz renkleri farklılaşmaya başlar ve 40 gün sonra da göz renkleri netleşir. İki kulağı arasında bir veya iki adet siyah nokta bulunan Van kedisi yavrularının çoğu tek-göz olur. Ve bu siyah noktalar âdeta tek-göz kedilerin mührü olarak tanımlanır. Van kedisi gibi değişik göz rengine sahip köpeklerin, evcil güvercinlerin ve insanların da bulunduğu ve bu özelliğin genetik bir defekt sendrom olduğu bilinmektedir.",
    
    "Mavi Rus kedisi (İngilizce adıyla 'Russian Blue'), kısa tüylü, maviye çalan gümüş renkli bir kedi ırkıdır. 1860'larda Rusya'da görülmeye başlanmış daha sonrasında ve İngiltere'ye gelmiştir.[1] Rivayetler İngiliz gemicilerin, Rusya'dan dünyaya yaydığını söyler.Ağırlıkları ortalama 3–5 kg arasında, uzunlukları ortalama 60 cm civarındadır.Göz renkleri yeşil, mavi veya sarıdır. Kısa tüylü ve maviye çalan gümüş renkli bir kedi ırkıdır. Vücutları 2 kat tüy ile kaplıdır. Ömürleri yaklaşık 12-15 yıldır ama dayanıklı oldukları için iyi bir bakım gören Mavi Rus kedileri 25 yıla kadar yaşar. Bu özelliği ile dünyanın en sağlıklı ve en uzun ömürlü kedileri arasına girer.Mavi rus kedilerinin tüylerinin kısa olmalarından dolayı tüy dökümü çok az olmaktadır. Tüy bakımları yıkama ve tımar işlemi ile yapılmaktadır. Tırnak ve ağız bakımları kediler için özel ürünler ile yapılmalıdır. Mavi rus kedisi gözleri diğer kedi türlerine göre daha açık olduğu için akma ve çapak yapabilmektedir. Bu yüzden göz akmalarının ve çapak olan kısımların temizlenme işlemi yapılmalıdır."];

    const resim = [bengal, tekir, van, mavirus];

    const goster = (index) => {
        const detay = ReactDOM.createRoot(document.getElementById("detay"));
            detay.render(
                <Details 
                    aciklama={aciklama[index]} 
                    resim={resim[index]} 
                />
            )
    }
    
    return(
        <>
            <div style={{ border:"1px solid black"}} >

                <ul style={{
                    listStyleType: "none",
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                        }} >

            {baslik.map((eleman, index) => (<NavList menuElemani = {eleman} tiklandiginda = {() => goster(index)}/>))}
        </ul>
            </div>

            
        <div id="detay" style={{ 
            
             border:"1px solid black",
             justifyContent:'center',
             textAlign:'center',
             paddingTop:'1%',
                 }} >

     </div>

        </>
    );
}

export default Menu;
