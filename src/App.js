import './App.css';
import Header from './components/Header';
import Footer from './components/footer';
import HomePage from './components/HomePage';

function App() {
  return (
    <div className="App ">
      <header className="App-header">
      </header>
      <Header isHomePage={true} />
      <HomePage />

      <Footer />

    </div>
  );
}

export default App;
