import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Main } from './pages/main/main';
import { Login } from './pages/login';
import { CreatePost } from './pages/create-post/create-post';
import { Navbar } from './components/navbar';
import './App.css';




/* Packages that we will need in this project
1) npm install react-router-dom
2) npm install firebase
3) npm install react-firebase-hooks
4) npm install react-hook-form yup @hookform/resolvers
*/
function App() {
  return (
    <>
      <div className='App'>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Main />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/createpost' element={<CreatePost />}/>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App
