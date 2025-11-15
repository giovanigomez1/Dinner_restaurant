import salmon from '../images/homepage/salmon-desktop-tablet.jpg'
import beef from '../images/homepage/beef-desktop-tablet.jpg'
import chocolate from '../images/homepage/chocolate-desktop-tablet.jpg'
import patternDiv from '../images/patterns/pattern-divide.svg'


function Highlights() {
  return (
    <div className='highlights'>
      <div className="highlights__cont">
        <div className="highlights__cont--text">
          <img src={patternDiv} alt="" />
          <h3>A few highlights from our menu</h3>
          <p>We cater for all dietary requirements, but here’s a glimpse at some of our diner’s favourites. 
              Our menu is revamped every season.</p>
        </div>      
        <div className="highlights__cont--imgs">
          <div className="dish">
            <div className="dish__img">
              <img src={patternDiv} alt="" />
              <div className='dish__img--cont--salmon'></div>
            </div>
            <div className="dish__inf">
              <h4>Seared Salmon Fillet</h4>
              <p>Our locally sourced salmon served with a refreshing buckwheat summer salad.</p>
            </div>
          </div>
          <div className="dish">
            <div className="dish__img">
              <img src={patternDiv} alt="" />
              <div className='dish__img--cont--beef'></div>
              {/* <img src={beef} alt="" /> */}
            </div>
            <div className="dish__inf">
              <h4>Seared Salmon Fillet</h4>
              <p>Our locally sourced salmon served with a refreshing buckwheat summer salad.</p>
            </div>
          </div>
          <div className="dish">
            <div className="dish__img">
              <img src={patternDiv} alt="" />
              {/* <img src={chocolate} alt="" /> */}
              <div className='dish__img--cont--chocolate'></div>
            </div>
            <div className="dish__inf">
              <h4>Seared Salmon Fillet</h4>
              <p>Our locally sourced salmon served with a refreshing buckwheat summer salad.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Highlights


