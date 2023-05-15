import OgrenciBilgi from "./OgrenciBilgi";

function BackEnd(props){
    return(
        <>
        <ul>
            <li>Back-End geliştirme için Asp.net gereklidir</li>
            <li>Back-End geliştirme için C# gereklidir</li>
        </ul>        

        <p>Yukarıdaki derslere kayıtlı öğrenci {props.name} {props.surname}</p>

        <OgrenciBilgi name="Gizem" surname="Ustahüseyin"/>   
        </>
        );
  }

  export default BackEnd;
