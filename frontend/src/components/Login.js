import React, { useState } from 'react';

function Login(props) {
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

    return(
        <div className="auth">
            <h2 className="auth__title">Вход</h2>
            <form className="auth__form" onSubmit={handleSubmit}>
                <input 
                required 
                className="auth__input"
                name="email" 
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleEmail} />
                <input 
                required 
                className="auth__input"
                name="password" 
                type="password"
                placeholder="Пароль"
                value={password}
                onChange={handlePassword} />
                <button type="submit" className="auth__submit-button">Войти</button>
            </form>
        </div> 
    )
}
export default Login;