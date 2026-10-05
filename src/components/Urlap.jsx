import { useState } from "react"
function Urlap(){
  const [nev, setNev] = useState('');
  const nevMod = (event) => {
    setNev(event.target.value);
  }

  const [user, setUser] = useState({ regNev: '', lakhely: '' })
  const userNevMod = (e) => {
    setUser({ ...user, regNev: e.target.value })
  }

  return (
    <>
      <h2>Egyszerű űrlap</h2>
      <form onSubmit={ (event)=>{ event.preventDefault() } }>
        <fieldset>
          <legend>Helló</legend>
          <label htmlFor="nev">Add meg a neved: </label>
          <input type="text" id="nev" value={ nev } onChange={ nevMod } />
        </fieldset>
      </form>
      <p>Helló { nev }</p>

      <h2>Regisztrációs űrlap</h2>
      <form onSubmit={ (e)=>{ e.preventDefault() } }>
        <fieldset>
          <label htmlFor="regNev">Regisztrációs név</label> 
          <input type="text" id="regNev" value={ user.regNev } onChange={ userNevMod }/>
          <br />

          <label htmlFor="telepules">Település</label> 
          <select id="telepules" value={ user.lakhely } onChange={ (e)=>{ setUser({ ...user, lakhely:e.target.value }) } }>
            <option value="">Válasszon!</option>
            <option value="Szeged">Szeged</option>
            <option value="Mórahalom">Mórahalom</option>
            <option value="Pécs">Pécs</option>
          </select>
        
        </fieldset>
      </form>
      <p>Felhasználó</p>
      <ul>
        <li>Felhasználónév: { user.regNev }</li>
        <li>Település: { user.lakhely }</li>
      </ul>
    </>
  )
}
export default Urlap