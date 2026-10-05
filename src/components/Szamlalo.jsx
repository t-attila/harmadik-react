import { useState } from "react";

function Szamlalo(){
  const [szam, setSzam] = useState(0);  
  const [kettoHatvany, setKettoHatvany] = useState(1);

  const novel = () => {
    setSzam(szam+1);
    setKettoHatvany(kettoHatvany*2);
  }
  return (
    <>
    <p>Számláló értéke: { szam }</p>
    <p>A 2 hatványa { kettoHatvany } </p>
    <button onClick={ novel }>+1</button>
    </>
  )
}
export default Szamlalo