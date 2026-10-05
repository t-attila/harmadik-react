function Hello(){
  const hello = () => {
    window.alert('Helló Világ');
  }
  const nev = 'Mekk Elek';
  const helloVki = (vki) => {
    window.alert('Helló ' + vki);
  }
  return (
    <>
      <button onClick={ hello }>Helló</button>
      <button onClick={ ()=>{ helloVki(nev) } }>Helló valaki</button>
    </>
  )
}
export default Hello