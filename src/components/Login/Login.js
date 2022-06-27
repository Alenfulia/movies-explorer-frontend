import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import './Login.css';
import { FormValidation } from '../../utils/FormValidation';

const Login = ({ onAuth, infoMessage }) => {

  const { values, handleChange, errors, isValid, resetForm } = FormValidation({});
  const { email, password } = values;

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onAuth(values);
    resetForm();
  };

  return (
    <section className='login'>
      <Logo className='login__logo' />
      <h1 className='login__title'>Рады видеть!</h1>
      <form
        className='login__form'
        onSubmit={handleSubmit}
        id='login'
      >
      <div className='login__fieldset'>
          <label
            className='login__label'>E-mail
            <input
              className='login__input'
              type='email'
              name='email'
              placeholder='pochta@yandex.ru'
              minLength={2}
              maxLength={30}
              required={true}
              value={email || ''}
              onChange={handleChange}
            />
            <span
              className={`login__error ${!isValid && 'login__error_active'}`}
              id='login-email-error'
            >
              {errors.email}
            </span>
          </label>
          <label className='login__label'>Пароль
            <input
              className='login__input'
              type='password'
              name='password'
              placeholder='Пароль'
              minLength={2}
              maxLength={8}
              required={true}
              value={password || ''}
              onChange={handleChange}
              />
             <span
              className={`login__error ${!isValid && 'login__error_active'}`}
              id='login-password-error'
            >
              {errors.password}
            </span>
          </label>
        </div>
        <button
          className={`login__btn-submit ${!isValid && 'login__btn-submit_disabled'}`}
          type='submit'
          form='login'
          disabled={!isValid}
          >
            Войти
          </button>
      </form>

      <div className='login__auth'>
        <p className='login__auth-text'>Ещё не зарегистрированы?</p>
        <Link to='/signup' className='login__auth-link'>Регистрация</Link>
      </div>
    </section>
  )
}

export default Login;
