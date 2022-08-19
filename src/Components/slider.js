import React from 'react'
import none from './images/sl-none.png'
import yes from './images/sl-this.png'
import sl12 from './images/sl-12.png'
import sl3 from './images/sl-3.png'
import sl45 from "./images/sl-45.png"
import './slider.css'

// js



let cards = React.createRef();






function swap(l){
    
    let a = getComputedStyle(cards.current);
    let b = a.left;
    let c = Math.trunc(b.replace('px','')/12.625);
    console.log(c, (l*27)-16);
    let d = -16+ (l * 27);
   if(c!=(l*27)-16)  {
    cards.current.style.left = d+'%';

   }
    
    
}
    

 





class slider extends React.Component{
    constructor(props){
      super(props);

      this.state={
        name1: none,
        name2: none,
        name3: yes,
        name4: none,
        name5: none,
      };

      this.change=this.change.bind(this);
    }

    
change(l){
  if(l==2){
  this.setState({
    name1: yes,
    name2: none,
    name3: none,
    name4: none,
    name5: none,
  })
  
}
if(l==1){
  this.setState({
    name1: none,
    name2: yes,
    name3: none,
    name4: none,
    name5: none,
  })
  
}
if(l==0){
  this.setState({
    name1: none,
    name2: none,
    name3: yes,
    name4: none,
    name5: none,
  })
  
}
if(l==-1){
  this.setState({
    name1: none,
    name2: none,
    name3: none,
    name4: yes,
    name5: none,
  })
  
}
if(l==-2){
  this.setState({
    name1: none,
    name2: none,
    name3: none,
    name4: none,
    name5: yes,
  })
  
}
}



  render(){
   
    
    
    

    return (
      <div className="slider">
        <div className="sl-cards" ref={cards}>
          <div className="sl-card" id="card1">
            <span className="sl-txt">
              “Miracle pills. The days of taking a cocktail of hit and miss
              vitamins are over.”
            </span>
            <img src={sl12} alt="" className="sl-img" />
          </div>
          <div className="sl-card">
            <span className="sl-txt">
              “Your one stop solution to feeling energised and focused.”
            </span>
            <img src={sl12} alt="" className="sl-img" />
          </div>
          <div className="sl-card">
            <span className="sl-txt">
              “A revelation. Not just about looking better and feeling better.
              LYMA is about real health benefits.”
            </span>
            <img src={sl3} alt="" className="sl-img"  />
          </div>
          <div className="sl-card">
            <span className="sl-txt">“Experts are queuing up to praise LYMA.”</span>
            <img src={sl45} alt="" className="sl-img" />
          </div>
          <div className="sl-card">
            <span className="sl-txt">“The A-list secret health hack.”</span>
            <img src={sl45} alt="" className="sl-img" />
          </div>
          
        </div>

        <div className="cl-choose" >
          <button  className="choose" id="ch1" onClick={()=>{swap(2);this.change(2)}}>
            <img src={this.state.name1} alt=""  />
          </button>
          <button  className="choose" id="ch2" onClick={()=>{swap(1);this.change(1)}}>
          <img src={this.state.name2} alt=""   />
          </button>
          <button   className="choose" id="ch3" onClick={()=>{swap(0);this.change(0)}}>
          <img src={this.state.name3} alt=""  />
          </button>
          <button   className="choose" id="ch4" onClick={()=>{swap(-1);this.change(-1)}}>
          <img src={this.state.name4} alt="" />
          </button>
          <button   className="choose" id="ch5" onClick={()=>{swap(-2);this.change(-2)}}>
          <img src={this.state.name5} alt="" />
          </button>
        </div>
      </div>
    );
  }
}
export default slider;