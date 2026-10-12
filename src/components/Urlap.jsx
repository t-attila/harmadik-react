import { useState } from "react"
function Urlap(){
  const [nev, setNev] = useState('');
  const nevMod = (event) => {
    setNev(event.target.value);
  }

  const [user, setUser] = useState(
    { regNev: '', 
      lakhely: '', 
      nyelv: {en: '', ge: ''},  
      nem: '', 
      bio: '' 
    });
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
        
          <p>Nyelvtudás</p>
          <label htmlFor="en">Angol</label>
          <input type="checkbox" id="en" checked={ user.nyelv.en } onChange={ (e) => {
            setUser({ ...user, nyelv: { ...user.nyelv, en: e.target.checked ? 'angol' : ''} })
          }}/>
          <label htmlFor="ge">Német</label>
          <input type="checkbox" id="ge" checked={ user.nyelv.ge} onChange={ (e) => {
            setUser({ ...user, nyelv: { ...user.nyelv, ge: e.target.checked ? 'német' : '' }})
          }} />

          <p>Nem</p>
          <label htmlFor="ffi">Férfi</label>
          <input type="radio" name="nem" id="ffi" value="férfi" onChange={ (e) => {
            setUser({ ...user, nem: e.target.value })
          } }/>
          <label htmlFor="no">Nő</label>
          <input type="radio" name="nem" id="no" value="nő" onChange={ (e) => {
            setUser({ ...user, nem: e.target.value })
          }} />
          <br />

          <label htmlFor="bio">Bemutatkozás</label> <br />
          <textarea id="bio" value={ user.bio } onChange={ (e) => {
            setUser({ ...user, bio: e.target.value })
          } }/>
        </fieldset>
      </form>
      <p>Felhasználó</p>
      <ul>
        <li>Felhasználónév: { user.regNev }</li>
        <li>Település: { user.lakhely }</li>
        <li>Nyelvtudás: { Object.values(user.nyelv).join(' ') }</li>
        <li>Nem: { user.nem }</li>
        <li>Bemutatkozás: { user.bio }</li>
      </ul>
    </>
  )
}
export default Urlap