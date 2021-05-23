import './App.css';
import PaperWrapper from './components/PaperWrapper'
import View1 from './view1/view1'




function App() {
  return (
    <div className="App">
      <PaperWrapper>
        <View1/>
      </PaperWrapper>
      <PaperWrapper/>
      <PaperWrapper/>
    </div>
  );
}

export default App;
