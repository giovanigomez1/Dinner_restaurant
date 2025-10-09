import logo from '../images/logo.svg'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <main className="hero">
      <div className="hero__main">
        <div className="hero__main--logo">
          <img src={logo} alt="" />
        </div>
        <div className="hero__main--content">
          <h1>Exquisite dining <span>since 1989</span></h1>
          <p>Experience our seasonal menu in beautiful country surroundings. 
            Eat the freshest produce from the comfort of our farmhouse.
          </p>
          <Link to='/form' className='btn btn__link'>Book a table</Link>
        </div>
      </div>
    </main>
  )
}

export default Hero
