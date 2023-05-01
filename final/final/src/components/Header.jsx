import '../static/css/Header.css';
import GlobalNav from './GlobalNav';
import Logo from '../static/images/logo.jpg';

function Header({ onNav, isLogin, user, loginFormRef}) {

  function loginBtn() {
    return (
      <div className='header-login'>
        <button className='header-login-btn' type='button' aria-label='Login button' onClick={() => loginFormRef.current.showModal()}>Subscribe</button>
      </div>
    )
  }

  function userInfo() {
    return (
      <div className='header-user' aria-label='username'>
        <span aria-label='Your username'>Thanks for subscribing, {user['username']}</span>
          {loginBtn()}
      </div>
    )
  }

  return (
    <header className="header ${darkModeClass}">
      <img
        src={Logo}
        className="header-logo"
        alt="Sneaker Club Logo: Shoe Picture"
        aria-label='Header logo'
      />
      <h1 className="header-title" aria-label='Header title'>
        Sneaker Club
      </h1>
      {isLogin ? userInfo() : loginBtn()}
      <GlobalNav onNav={onNav} className="header-nav" />
    </header>
  );
}
export default Header;