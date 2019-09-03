import {useEffect} from 'react';
import {useRoutes} from 'hookrouter';
import './App.css';
import routes from './router';

function App() {
  const routeResult = useRoutes(routes);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return routeResult;
}

export default App;