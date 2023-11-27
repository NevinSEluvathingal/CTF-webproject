import {RouterProvider,createBrowserRouter} from 'react-router-dom'

import WelcomePage from './App.jsx';
import Leaderboard from './leaderboard.jsx';

const router = createBrowserRouter([
  { path: '/', element: <WelcomePage /> },
  { path: '/results', element: <Leaderboard /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;