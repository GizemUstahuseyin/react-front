import Liste from "./liste";

function SinifListesi(){

    const sinif=["Ayşe","Fatma","Hayriye","Büşra","Gamze"];

    return(
        <>
        <h1>Bugün Kimler Sınıfta?</h1>
        <ul>
            {sinif.map((ad)=><Liste ogrenci={ad}/>)}
        </ul>
        </>
    );
}
export default SinifListesi;