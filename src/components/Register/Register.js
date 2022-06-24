import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import './Register.css';



const Register = () => {
  return (
    <section className='register'>
      <Logo className='register__logo' />
      <h1 className='register__title'>Добро пожаловать!</h1>
      <form className='register__form'>
      <div className='register__fieldset'>
          <label className='register__label'>Имя
            <input
              className='register__input'
              type={'text'}
              name={'name'}
              placeholder='Имя'
              minLength={2}
              maxLength={30}
              required={true}
              />
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
              />
          </label>
          <label className='register__label'>Пароль
            <input
              className='register__input'
              type='password'
              name='password'
              placeholder='Пароль'
              required={true}
              />
          </label>
          <span className='register__error'>Что-то пошло не так...</span>
        </div>
        <button className='register__btn-submit' type='submit'>Зарегистрироваться</button>
      </form>
      <div className='register__login'>
        <p className='register__login-text'>Уже зарегистрированы?</p>
        <Link to='/signin' className='register__login-link'>Войти</Link>
      </div>
    </section>
  )
}

export default Register;
