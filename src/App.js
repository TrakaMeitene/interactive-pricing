import "./App.css";
import Logs from './Komponentes/Logs';

function App() {
    
const DUMMY = [

  {value: 10},
 {value:100},
];

  return (
    <div>
        <div className="topContainer">
        <div className="circles">
          <h1>Simple, traffic-based pricing</h1>
          <p>Sign-up for our 30-day trial.No cedit card required.</p>
        </div>
        <Logs dati={DUMMY[0].value}/>
      </div>
      
    </div>
  )
};

export default App;
