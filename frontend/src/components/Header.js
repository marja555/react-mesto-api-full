import React from 'react';
import logoPath from '../images/logo.svg';
import { Route, Link } from 'react-router-dom';


function Header(props) {

  return (
    <header className="header">
      <img src={logoPath} className="header__logo" alt="Логотип" />
      <Route path="/sign-up">
        <Link className="auth__route-link" to="/sign-in">Войти</Link>
      </Route>
      <Route path="/sign-in">
        <Link to="/sign-up" className="auth__route-link">Регистрация</Link>
      </Route>
      <Route exact path='/'>
        <div className="header__container">
          <p className="header__email">{props.email}</p>
          <Link to='/sign-in' className="auth__route-link" onClick={props.onLogout}>Выйти</Link>
        </div>
      </Route>
    </header>
  );
}

export default Header;