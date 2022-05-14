import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

function Register(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleEmail(e) {
        setEmail(e.target.value);
    }

    function handlePassword(e) {
        setPassword(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onSubmit({email, password});
    }

    return props.isLoggedIn ? (<Redirect to="/" />) : (
        <div className="auth">
            <p className="auth__title">Регистрация</p>
            <form className="auth__form" onSubmit={handleSubmit}>
                <input 
                required 
                className="auth__input"
                name="email" 
                type="email"
                value={email}
                onChange={handleEmail} />
                <input 
                required 
                className="auth__input"
                name="password" 
                type="password"
                value={password}
                onChange={handlePassword}
                 />
                <button type="submit" className="auth__submit-button">Зарегистрироваться</button>
                <p className="auth__subtitle">Уже зарегистрированы? <Link className="auth__subtitle" to="/sign-in">Войти</Link></p>
            </form>
        </div> 
    )
}
export default Register;