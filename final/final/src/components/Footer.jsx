import '../static/css/Footer.css';
function Footer() {
  return (
    <footer className="footer">
      <div aria-label='Website Author'>
        Sneaker Club (Yufan Gao)
      </div>
        <div className="footer-wrapper">
            <a href="https://www.instagram.com/thecocoyo/" target="_blank">
                Author's Instagram
            </a>
            <a href="https://github.com/yufangao" target="_blank">
                Author's Github
            </a>
            <a href="https://www.flightclub.cn/" target="_blank">
                More Info: Flight Club
            </a>
        </div>

    </footer>
  );
}

export default Footer;
