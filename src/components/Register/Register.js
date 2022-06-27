import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import './Register.css';
import { FormValidation } from '../../utils/FormValidation';



const Register = ({ onAuth, infoMessage }) => {

  const { values, handleChange, errors, isValid, resetForm } = FormValidation({});
  const { name, email, password } = values;

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onAuth(values);
    resetForm();
  }

  return (
    <section className='register'>
      <Logo className='register__logo' />
      <h1 className='register__title'>Добро пожаловать!</h1>
      <form
        className='register__form'
        onSubmit={handleSubmit}
        id='register'
      >
        <div className='register__fieldset'>
          <label className='register__label'>Имя
            <input
              className='register__input'
              type='text'
              name='name'
              placeholder='Имя'
              minLength={2}
              maxLength={30}
              required={true}
              value={name || ''}
              onChange={handleChange}
              />
            <span
              className={`register__error ${!isValid && 'register__error_active'}`}
              id='register-name-error'
            >
              {errors.name}
            </span>
          </label>
          <label className='register__label'>E-mail
            <input
              className='register__input'
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
              className={`register__error ${!isValid && 'register__error_active'}`}
              id='register-email-error'
            >
              {errors.email}
            </span>
          </label>

          <label className='register__label'>Пароль
            <input
              className='register__input'
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
              className={`register__error ${!isValid && 'register__error_active'}`}
              id='register-password-error'
            >
              {errors.password}
            </span>
          </label>
        </div>
        <button
          className={`register__btn-submit ${!isValid && 'register__btn-submit-disabled'}`}
          type='submit'
          form='register'
          disabled={!isValid}
        >
          Зарегистрироваться
        </button>
      </form>

      <div className='register__login'>
        <p className='register__login-text'>Уже зарегистрированы?</p>
        <Link to='/signin' className='register__login-link'>Войти</Link>
      </div>
    </section>
  )
}

export default Register;
