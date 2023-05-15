import OgrenciBilgi from "./OgrenciBilgi";

function FrontEnd(props){
    return(
        <>
        <ul>
            <li>Front-End geliştirme için Html15 gereklidir</li>
            <li>Front-End geliştirme için Css gereklidir</li>
            <li>Front-End geliştirme için Javascript gereklidir</li>
            <li>Front-End geliştirme için Bootstrap 4 gereklidir</li>
            <li>Front-End geliştirme için Jquery gereklidir</li>
        </ul>   
         
        <p>Yukarıdaki derslere kayıtlı öğrenci {props.name} {props.surname}</p>

        <OgrenciBilgi name="Gizem" surname="Ustahüseyin"/>    
        </>
        ); 


  }

  export default FrontEnd;
