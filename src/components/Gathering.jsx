import patternCurveRight from '../images/patterns/pattern-curve-top-right.svg'
import family from '../images/homepage/family-gathering-desktop.jpg'
import special from '../images/homepage/special-events-desktop.jpg'
import social from '../images/homepage/social-events-desktop.jpg'
import lines from '../images/patterns/pattern-lines.svg'
import { Link } from 'react-router-dom'


import { useState } from 'react';

const tabs = [
  {label: "Family Gathering", image: family, title: <h4>Family Gathering</h4>, content: <p>We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We'll provide a memorable experience for all. </p>}, 
  {label: "Special Events", image: special, title: <h4>Special Events</h4>, content: <p>Wheter it's a romantic dinner or special date you're celebrating with others we'll look after you. We'll be sure to mark your special date with an unforgettable meal. </p>}, 
  {label: "Social Events", image: social, title: <h4>Social Events</h4>, content: <p>Are you looking to have a larger social event? No problem! We're more than happy to cater for big parties. We'll work with you to make your event a hit with everyone.</p>}, 
]


function Gathering () {

  const [active, setActive] = useState(tabs[0].image)




  return (
    <div className='gathering'>
      <img className='gathering__pattern' src={patternCurveRight} alt="" />
      <div className="gathering__slides">
        <img className='gathering__slides--lines' src={lines} alt="" />
        <div className="gathering__slides--img">
          <img src={active} alt="" />
          
        </div>
        <div className="gathering__slides--content">
          {tabs.map((tab) => (
            tab.image === active && <>{tab.title} {tab.content}</> 
          ))}
          <Link to='/form' className='btn btn__gathering btn__link'>Book a Table</Link>
        </div>
        <div className="gathering__slides--btns">
          {tabs.map(tab => {
            return (
              <div className='gathering__slides--btns-opt'>
                <p className={active === tab.image ? 'active__tab': ''} onClick={() => setActive(tab.image)}>{tab.label}</p>
                <div className={`divider ${active === tab.image ? '' : 'hidden'}` }></div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default Gathering;