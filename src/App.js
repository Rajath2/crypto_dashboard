import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './Components/Header'
import Coinpage from './Pages/Coinpage';
import Homepage from './Pages/Homepage';

  const useStyles = makeStyles(() => ({
    App: {
      backgroundColor: "#3e236e",
      color: "#DCF3E5",
      minHeight: "100vh",
    },
  }));

function App() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header/>
        <Routes>
          <Route path="/" Component={Homepage} exact/>
          <Route path="/coins/:id" Component={Coinpage}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
