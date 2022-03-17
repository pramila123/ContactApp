import logo from './logo.svg';
import './App.css';
import AddContact from './components/Contact/AddContact';
import ContactList from './components/Contact/ContactList';
import { Provider } from 'react-redux';
import store from './components/Redux/store';
function App() {
  return (
   <>
   <Provider store={store}>
   <AddContact/>
   <ContactList/>
   </Provider>
  
   </>
  );
}

export default App;
