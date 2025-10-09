import logo from '../images/logo.svg'
import pattern from '../images/patterns/pattern-curve-bottom-right.svg'
import lines from '../images/patterns/pattern-lines.svg'



function Form () {
  return (
    <div className="form">
      <div className="form__main">
        <div className="form__main--logo">
          <img src={logo} alt="" />
        </div>
        <div className="form__main--content">
          <h1>Reservations</h1>
          <p>We can't wait to host you. If you have any special requirements please feel
            free to call on the phone number below.
            We'll be happy to accommodate you.
          </p>
        </div>
      </div>
      <div className="form__pattern">
        <img src={pattern} alt="" />
        <img className='form__pattern--lines' src={lines} alt="" />
        <div className="form__pattern--cf">
          <form action="">
            <input type="text" />
            <input type="email" />
            <button className="btn">Make reservation</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;