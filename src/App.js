import FirstComponent from './Components/FirstComponent';
import './App.css';
import SecondLevel from './Components/SecondLevel';
import ThirdLevel from './Components/ThirdLevel';

function App() {
  return (
    <div className="App">
      <h1>DAV Public School, Bhilai</h1>
      <FirstComponent />
      <SecondLevel />
      <ThirdLevel />
    </div>
  );
}

export default App;
