import resim from './images/realizm.jpg'


function Realizm(props){
<>
    <img src ={resim}/>
    
    <h1>Realizm Nedir?</h1>

    return(
        <li>{props.aciklama}Realizm veya Gerçekçilik, 19. yüzyılda ortaya çıkan bir sanat akımıdır. Bu yüzyılda gerçekleşen endüstriyel gelişmeler, toplumsal sınıfların belirginleşmesi, insanları duygular dünyasından gerçekler dünyasına itmiştir. Sanatçılar da bu gelişmelere tepki olarak Realist (gerçekçi) çalışmalar gerçekleştirmeye başladılar. Realizm, konuların idealist bir tarzda ele alındığı Romantizm’e bir tepki olarak başladı. Realistler sıradan veya gerçekçi temaları ortaya koyabilmek için teatral dramadan ve sanatın klasik formlarından uzaklaşma eğiliminde oldular.</li>
    );
    </>
}
export default Realizm;