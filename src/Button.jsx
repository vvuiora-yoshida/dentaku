











export default function Button(props){
    const {
        text ,
        ...other
    } = props ;
  return (  
       <div className="other"></div>
    <Button text={"ぼたんです～"}
    <button>ぼたんです～ </button>
    <button>
      { props.text }
    </button>

  );
}