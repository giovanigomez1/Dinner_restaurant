import patternDiv from '../images/patterns/pattern-divide.svg'
import patternLine from '../images/patterns/pattern-lines.svg'
import patternCurveLeft from '../images/patterns/pattern-curve-top-left.svg'
import patternCurveRight from '../images/patterns/pattern-curve-top-right.svg'


function Enjoyable() {
  return (
    <div className='enjoyable'>
      <div className="enjoyable__family">
        <div className="enjoyable__family--location">
          <div className='location__img'></div>
          <img className='pattern__cr' src={patternCurveRight} alt="" />
        </div>
        <div className="enjoyable__family--text">
          <img src={patternDiv} alt="" />
          <h2>Enjoyable place for all the family</h2>
          <p>Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal.</p>
        </div>

      </div>
      <div className="enjoyable__food">
        <div className="enjoyable__food--text">
          <img src={patternDiv} alt="" />
          <h2>The most locally sourced food</h2>
          <p>All our ingredients come directly from our farm or local fishery. So you can be sure that you're eating the freshest, most sustainable food.</p>
        </div>
        <div className="enjoyable__food--locally">
          <div className='locally__img'></div>
          <img className='pattern__left' src={patternCurveLeft} alt="" />
          <img className='pattern__line' src={patternLine} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Enjoyable
