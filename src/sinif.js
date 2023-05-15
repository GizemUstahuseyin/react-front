function Sinif (props){
    const yoklama = props.sayi;
    return(
        <>
        <h1>Sınıf Yoklama</h1>
        {yoklama.length===5 &&
        <h2>Sınıf tam, {yoklama.length} kişi var.</h2>
        }
        </>
    );
}
export default Sinif;