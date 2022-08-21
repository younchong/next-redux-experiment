import { Provider } from 'react-redux'
import '../styles/globals.css'
import { store, wrapper } from '../redux/store';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default wrapper.withRedux(MyApp);
