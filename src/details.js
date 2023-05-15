function Details(props){
  
    return(
        <>
        <img style={{ 
             border:"1px solid black",
             justifyContent:'center',
             textAlign:'center',
             width:'50%',
             border:'dotted 4px'
                 }} 

     src={props.resim} />
        <p> {props.aciklama} </p>
        </>
    );
}

export default Details;