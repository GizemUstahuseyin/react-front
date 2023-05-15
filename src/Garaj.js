import Araba from './Araba';

function Garaj(){

  const garajarac= {yer:"Garaj", model:"Ford", tip:"4X4"}

    return(
      <>
        <h1>Garajımda ne var?</h1>
        <Araba arac={garajarac} />
      </>
    );
  }

  export default Garaj;
