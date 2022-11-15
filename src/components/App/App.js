import React from "react";
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import SavedMovies from '../SavedMovies/SavedMovies';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import Login from '../Auth/Login';
import Register from '../Auth/Register';
import Error from '../Error/Error';
import ProtectedRoute from "../ProtectedRoute";
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { register, checkTokenValidity, authorize } from "../../utils/authApi";
import { getUserInfo, setUserInfo } from "../../utils/mainApi";
import { userUpdateSuccess } from '../../utils/constants';

function App() {
  // state
  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(true)
  const history = useHistory();

  // functions
  function handleLogin(email, password) {
    authorize(email, password)
    .then(res => {
        if (res.token) {
            localStorage.setItem("token", res.token)
        }
        setLoggedIn(true)
        this.history.push("/movies")
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    })
    .catch((err) => {
        console.log(err);
        alert(err)
    })
}

function handleRegistration(name, email, password) {
    register(name, email, password)
    .then(res => {
        setLoggedIn(true)
        this.history.push("/movies")
    })
    .catch((err) => {
        console.log(err);
        alert(err)
    })
}

function handleUpdateUser(name, email) {
  setUserInfo(name, email)
  .then(res => {
    setCurrentUser(res.user)
    alert(userUpdateSuccess)
  })
  .catch((err) => {
    console.log(err);
    alert(err)
  })
}

  function handleLogOut() {
    setLoggedIn(false);
    setCurrentUser({})
    localStorage.removeItem("token")
    localStorage.removeItem('storageMovies')
    localStorage.removeItem('searchOptions')
    localStorage.removeItem('allMovies')
  }

  // Hooks
  React.useEffect(() => {
    const token = localStorage.getItem("token")
    if (!token) {
        handleLogOut()
    } else {
        checkTokenValidity(token)
        .then(res => {
            setLoggedIn(true);
        })
        .catch(err => {
            console.log(err)
            handleLogOut()
        })
    }
}, [])

  React.useEffect(() => {
    getUserInfo()
        .then(res => {
            setCurrentUser(res)
        })
        .catch((err) => {
            console.log(err);
        });
}, [])

  return (
    <BrowserRouter>
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <Header loggedIn={loggedIn} />
        <main>
          <Switch>
                <Route exact path='/'>
                  <Main />
                </Route>
                  <ProtectedRoute loggedIn={loggedIn} path='/movies'>
                    <Movies />
                  </ProtectedRoute>
                  <ProtectedRoute loggedIn={loggedIn} path='/saved-movies'>
                    <SavedMovies />
                  </ProtectedRoute> 
                <ProtectedRoute loggedIn={loggedIn} path='/profile'>
                  <Profile onLogOut={handleLogOut} onSubmit={handleUpdateUser} />
                </ProtectedRoute>
            <Route path="/signin">
              <Login onSubmit={handleLogin} />
            </Route>
            <Route path="/signup">
              <Register onSubmit={handleRegistration} />
            </Route>
            <Route path='*'>
              <Error />
            </Route>
          </Switch>
        </main>
        <Footer />
      </div>
      </CurrentUserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
