import GolOldu from "./GolOldu";
import GolOlmadi from "./GolOlmadi";

function Gol(props){
    const OlduMu = props.deger;

    if(OlduMu ==="true"){
        return <GolOldu/>
    }
    else{
        return <GolOlmadi/>
    }
}
export default Gol