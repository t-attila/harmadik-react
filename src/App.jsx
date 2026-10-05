import Hello from "./components/Hello.jsx";
import Szamlalo from "./components/Szamlalo.jsx";
import Urlap from "./components/Urlap.jsx";

function App() {
  return (
    <>
      <h1>Események</h1>
      <Hello />

      <h1>Komponens állapot (State)</h1>
      <Szamlalo />

      <h1>Űrlap használata</h1>
      <Urlap />

    </>
  )
}

export default App
