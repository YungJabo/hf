import './last.css'
import i1 from './images/i1.png'
import i2 from './images/i2.png'
import i3 from './images/i3.png'
import i4 from './images/i4.png'
import i5 from './images/i5.png'
function Last(){
    return (
      <div className="last">
        
          <div className="l-card">
            <span className="l-txt1">SUPPLEMENT</span>
            <a href="" className="l-txt2">
              Benefits
            </a>
            <a href="" className="l-txt2">
              Formula
            </a>
            <a href="" className="l-txt2">
              Immunity
            </a>
            <a href="" className="l-txt2">
              Journal
            </a>
            <a href="" className="l-txt2">
              Reviews
            </a>
            <a href="" className="l-txt3">
              Buy
            </a>
          </div>
          <div className="l-card">
            <span className="l-txt1">LYMA LASER</span>
            <a href="" className="l-txt2">
              LYMA Laser
            </a>
            <a href="" className="l-txt2">
              Active Mist
            </a>
            <a href="" className="l-txt2">
              Priming Serum
            </a>
            <a href="" className="l-txt2">
              Technology
            </a>
            <a href="" className="l-txt2">
              Results
            </a>
            <a href="" className="l-txt2">
              Journal
            </a>
            <a href="" className="l-txt2">
              Reviews
            </a>
            <a href="" className="l-txt3">
              Buy
            </a>
          </div>
          <div className="l-card">
            <span className="l-txt1">ABOUT</span>
            <a href="" className="l-txt2">
              About
            </a>
            <a href="" className="l-txt2">
              Journal
            </a>
            <a href="" className="l-txt2">
              FAQs
            </a>
            <a href="" className="l-txt2">
              FAQs
            </a>
            <a href="" className="l-txt2">
              Terms
            </a>
            <a href="" className="l-txt2">
              Privacy
            </a>
            <a href="" className="l-txt2">
              Warranty
            </a>
          </div>

          <div className="l-card">
            <span className="l-txt1">ACCOUNT</span>
            <a href="" className="l-txt2">
              Activate
            </a>
            <a href="" className="l-txt2">
              My subscription
            </a>
            <a href="" className="l-txt2">
              Add extras
            </a>
            <a href="" className="l-txt2">
              My orders
            </a>
            <a href="" className="l-txt2">
              Account details
            </a>
            <a href="" className="l-txt2">
              Payment method
            </a>
            <a href="" className="l-txt2">
              Login details
            </a>
          </div>
          <div className="l-card card-right">
            <span className="l-txt1">NEWSLETTER</span>
            <a href="" className="l-txt2">
              Subscribe to our newsletter.
            </a>
            <div className="l-block">
              <input
                type="text"
                className="l-input"
                placeholder="LYMA Newsletter"
              />
              <button className="l-btn">SIGN UP</button>
            </div>
            <div className="l-icons">
              <a href="" className="l-a-icons">
                <img src={i1} alt="" className="l-img-icons" />
              </a>
              <a href="" className="l-a-icons">
                <img src={i2} alt="" className="l-img-icons" />
              </a>
              <a href="" className="l-a-icons">
                <img src={i3} alt="" className="l-img-icons" />
              </a>
              <a href="" className="l-a-icons">
                <img src={i4} alt="" className="l-img-icons" />
              </a>
              <a href="" className="l-a-icons">
                <img src={i5} alt="" className="l-img-icons" />
              </a>
            </div>
            <a href="" className="l-txt2">
              © LYMA Life Ltd. 2021
            </a>
          </div>
      </div>
    );
}
export default Last;