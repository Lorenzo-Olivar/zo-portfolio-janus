
// react imports
import { Outlet } from 'react-router-dom';

// header and footer import
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

// serves the navbar and pages
function App() {
  return (
    <>
      <Header/>
      <main className="mx-2">
        <Outlet/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
