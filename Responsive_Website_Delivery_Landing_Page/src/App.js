import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Nav from './components/Nav';
import Security from './components/Security';
import Services from './components/Services';
import SocialMedia from './components/SocialMedia';
function App() {
  return (
    <div className="App">
        <header className="header" id="header">
            <Nav></Nav>
        </header>

        <main className='main'>
          <Home></Home>
          <About></About>
          <Security></Security>
          <Services></Services>
          <SocialMedia></SocialMedia>
          <Contact></Contact>
        </main>

        <footer class="footer section">
          <Footer></Footer>
        </footer>
    </div>
  );
}

export default App;
