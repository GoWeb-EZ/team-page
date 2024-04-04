import { BrowserRouter as Router } from 'react-router-dom';
import { RouteSwitch } from './components/RouteSwitch';
import { Layout } from './components/Layout/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <RouteSwitch />
      </Layout>
    </Router>
  );
}

export default App;
