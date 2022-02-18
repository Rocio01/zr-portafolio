import './App.css';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Services from './components/Services';
import About from './components/About';
import Work from './components/Work';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Introduction />
      <Services />
      <About />
      <Work />
      <Footer />
    </div>
  );
}

export default App;
