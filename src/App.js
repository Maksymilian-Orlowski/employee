import './App.css';
import Empl from './Empl.js';
import dire from './assets/dire.jpg'

function App() {
  return (

    <div className="App">
      <h1>Eployees of the battle of Grunwald </h1>
      <Empl firstname="Adam" surname="Kowalski" work="general director" experience="256 years" image={dire} />
    </div>

  );
}

export default App;
