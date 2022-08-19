import "./header.css"
import logo from './images/log.svg'
function Header(){
    return (
      <div className="header">
        <nav className="h-nav1">
          <a href="" className="h-nav">
            SUPPLEMENT
          </a>
          <a href="" className="h-nav">
            LASER
          </a>
          <a href="" className="h-nav">
            REVIEWS
          </a>
          <a href="" className="h-nav">
            JOURNAL
          </a>
          <a href="" className="h-nav">
            ABOUT
          </a>
        </nav>
        <a href="" className="h-logo-a">
          <img src={logo} alt="" className="h-logo" />
        </a>
        <nav className="h-nav2">
          <a href="" className="h-nav">
            HELP & SUPPORT
          </a>
          <a href="" className="h-nav">
            ACTIVATE
          </a>
          <a href="" className="h-nav">
            ACCOUNT
          </a>
          <button className="h-btn">BUY</button>
        </nav>
      </div>
    );
}
export default Header;