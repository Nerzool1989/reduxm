import './App.css';
import PaperWrapper from './components/PaperWrapper'
import PanelBottom from './Views/PanelBottom';
import PanelMiddle from './Views/PanelMiddle';
import PanelTop from './Views/PanelTop'


function App() {
  return (
    <div className="App">
      <PaperWrapper>
        <PanelTop/>
      </PaperWrapper>
      <PaperWrapper>
        <PanelMiddle/>
      </PaperWrapper>
      <PaperWrapper>
        <PanelBottom/>
      </PaperWrapper>
    </div>
  );
}

export default App;
