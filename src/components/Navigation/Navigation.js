import './Navigation.css';

const Navigation = () => {
  return (
    <nav>
      <ul className="navigation__menu">
        <li className="navigation__menu-link">
          <a className="navigation__link" href='https://yandex.ru/'>Регистрация</a>
        </li>
        <li className="navigation__menu-link">
          <button className='navigation__button'>
            <a className="navigation__link-button" href='https://yandex.ru/'>Войти</a>
          </button>
        </li>
      </ul>
    </nav>
  )
};

export default Navigation;
