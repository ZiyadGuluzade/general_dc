import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
// import About from './components/about/About';
import Contacts from './components/contacts/Contacts';
import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
