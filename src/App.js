import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

// Components
import Header from './components/Header';
import Home from './components/Home';
import Movie from './components/Movie';
import NotFound from './components/NotFound'

// Styles
import { GlobalStyle } from './GlobalStyles';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/:movieID' element={<Movie />} />
      <Route path='/*' element={<NotFound />} />
    </Routes>
    <GlobalStyle />
  </Router>
)


// function App() {
//   return (
//     <div className="App">  
//       <Header />
//       <Home />
//       <GlobalStyle />
//     </div>
//   );
// }

export default App;
