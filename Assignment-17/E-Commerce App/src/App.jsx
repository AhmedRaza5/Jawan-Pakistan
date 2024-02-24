
import { useDispatch } from 'react-redux';
import './App.css'
import Router from './config/Router'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './config/firebaseConfig';
import { set_user_auth } from './store/slice/user_data_slice';

function App() {
  

  return (
    <>
    <Router/>
    </>
  )
}

export default App
