import { AppProps } from 'next/app';
import UserProvider from '../src/context/userContext';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
};
export default App;
