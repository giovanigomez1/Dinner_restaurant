import logo from '../images/logo.svg'
import pattern from '../images/patterns/pattern-curve-bottom-right.svg'
import lines from '../images/patterns/pattern-lines.svg'
import { SlArrowUp } from "react-icons/sl";
import { IoCheckmark } from "react-icons/io5";

import { useState } from 'react';







function Form () {
  
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [month, setMonth] = useState('')
  const [day, setDay] = useState('')
  const [year, setYear] = useState('')
  const [hour, setHour] = useState('')
  const [minutes, setMinutes] = useState('')
  const [time, setTime] = useState('AM')
  

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
          <form className='form'>
            <div className="form__group--name-email">
              <input 
                type="text" 
                placeholder='Name' 
                value={name} 
                onChange={(e) => setName(e.target.value)}
              />
              <input 
                type="email" 
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
                
            </div>

            <div className="form__group--date">
              <div className="group__date">
                <div className="label">
                  <p>Pick a date</p>
                </div>
                <div className="pick__date">
                  <input type="number" placeholder='MM' min='0' max='12'/>
                  <input type="number" placeholder='DD' min='0' max='31' />
                  <input type="number" placeholder='YYYY' min='2025' max='3000'  />
                  
                </div>
              </div>
              <div className="group__time">
                <div className="label">
                  <p>Pick a time</p>
                </div>
                <div className="pick__time">
                  <input type="number" placeholder='09' min='0' max='12'/>
                  <input type="number" placeholder='00' min='0' max='59'/>
                  <div className="pick__time--ampm">
                    <input 
                      type="text" 
                      placeholder='AM' 
                      value={time}
                      onChange={(e) => e}   
                    />
                    <SlArrowUp />
                    <div className="ampm">
                      <div className="ampm__cont">
                        <div 
                          className="ampm__cont--ele"
                          onClick={() => setTime('AM')}
                        >
                          <IoCheckmark 
                            className={`${time === 'AM' ? '' : 'nonvisible'}`}
                          />
                          <p>AM</p>
                        </div>
                        <div 
                          className="ampm__cont--ele"
                          onClick={() => setTime('PM')}
                        >
                          <IoCheckmark
                            className={`${time === 'PM' ? '' : 'nonvisible'}`}
                          />
                          <p>PM</p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div className="group__people">
                
              </div>
            </div>
            <button type='submit' className="btn btn__link btn__form">Make reservation</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;