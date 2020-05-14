import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { setupStore } from '../redux/store';

const store = setupStore();

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default App;
