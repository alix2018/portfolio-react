import {useEffect} from 'react';
import {useRoutes} from 'hookrouter';
import './App.css';
import ReactGA from 'react-ga';
import routes from './router';

function App() {
  ReactGA.initialize('');
  ReactGA.pageview(window.location.pathname + window.location.search);
  const routeResult = useRoutes(routes);

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  return routeResult;
}

export default App;