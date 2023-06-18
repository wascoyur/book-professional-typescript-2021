import "./App.scss";
import { Aside } from "./components/Aside";
import { UnitAhead } from "./components/UnitAhead";
import { Rule17 } from "./unit-2/Rule17";

function App() {
  const result = map([1, 2, 3, 4], (x) => x)
  const headers:{head:string}= {head: "Unit 2. Type System"}

  return (<div className="App">
    <div className="grid-container">
      <header>First header</header>
      <aside className="aside">
        {/*<Aside {...headers}/>*/}

        <UnitAhead {...headers}/>
      </aside>
      <main>
        <Rule17/>
      </main>
      <footer>footer</footer>
    </div>
  </div>)
}

export default App;

function map(array: unknown[], f: (item: unknown) => unknown): unknown[] {
  const result = []
  for (let i = 0; i < array.length; i++) {
    result[i] = f(array[i])
  }
  return result
}
//TODO:
