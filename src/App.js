import logo from './logo.svg';
import './App.css';
import home from './pages/home'
import activityPage from './pages/activityPage'
import foodPage from './pages/foodPage'
import historyPage from './pages/historyPage'
import infoPage from './pages/infoPage'
import lodgingPage from './pages/lodgingPage'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path = '/Home' element={<Home />}/>
        <Route path = '/Activity' element={<activityPage />}/>
        <Route path = '/Food' element={<foodPage />}/>
        <Route path = '/History' element={<historyPage />}/>
        <Route path = '/Info' element={<infoPage />}/>
        <Route path = '/Lodging' element={<lodgingPage />}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
