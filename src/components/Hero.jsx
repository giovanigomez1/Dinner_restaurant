import logo from '../images/logo.svg'

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
          <button className='btn'>Book a table</button>
        </div>
      </div>
    </main>
  )
}

export default Hero
