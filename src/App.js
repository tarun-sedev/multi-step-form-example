import { Provider } from 'react-redux';
import RegistraionContainer from './containers/RegistrationContainer';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <RegistraionContainer />
    </Provider>
  );
}

export default App;
