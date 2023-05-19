import { Router } from './router/index'
import NavBar from './components/header/NavBar.jsx'
import HeaderInfoBar from './components/headerInfoBar/headerInfoBar.jsx'
import Footer from './components/footer/Footer.jsx'
import './App.scss'

//REDUX (default import store/index.js)
import { Provider } from 'react-redux'
import store from './store'



function App() {
  return (
    <div className="App" id="home" style={{ backgroundImage: "url('./mainBg.jpg')" }} >
        <div>
            <HeaderInfoBar />
            <NavBar />
            <div id="BodyWrapper" className='BodyWrapper'>
            <Provider store={store}>
              <Router />
            </Provider>
            </div>
            <Footer />
        </div>
    </div>
  );
}

export default App;
