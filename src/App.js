import logo from './logo.svg';
import './App.css';
import Article from "./components/Article";

function App() {
  return (
    <div className="App">
      <Article
        title={'React入門'}
        content={'ここはコンテンツです！'}
      />
    </div>
  );
}

export default App;
