import logo from '../images/logo.svg'
import pattern from '../images/patterns/pattern-curve-bottom-right.svg'
import lines from '../images/patterns/pattern-lines.svg'
import { SlArrowUp } from "react-icons/sl";
import { IoCheckmark } from "react-icons/io5";
import iconPlus from '../images/icons/icon-plus.svg'
import iconMinus from '../images/icons/icon-minus.svg'
import { Link } from 'react-router-dom';


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
  const [people, setPeople] = useState(2)
  const [nameErr, setNameErr] = useState(false)
  const [emailErr, setEmailErr] = useState(null)
  const [dateErr, setDateErr] = useState(null)
  const [timeErr, setTimeErr] = useState(null)


  function resetForm() {
    setName('')
    setEmail('')
    setDay('')
    setMonth('')
    setYear('')
    setHour('')
    setMinutes('')
  }


  function onPeopleChange(op) {
    if(op === 'minus') {
      if(people <= 2) return
      setPeople(people - 1)
    } else {
      setPeople(people + 1)
    }
  }
  

  function formSubmit(e) {
    e.preventDefault()
    if(name === '') setNameErr(true)
    if(email === '') setEmailErr(true)
    if(month === '' || day === '' || year === '') setDateErr(true)
    if(hour === '' || minutes === '') setTimeErr(true)
    resetForm()
  }



  return (
    <div className="form">
      <div className="form__main">
        <div className="form__main--logo">
          <Link to='/'><img src={logo} alt="" /></Link>
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
          <form className='form' onSubmit={formSubmit}>
            <div className="form__group--name-email">
              <div className="group">
                <input 
                  type="text" 
                  placeholder='Name' 
                  value={name} 
                  onChange={(e) => setName(e.target.value)}
                  onClick={() => setNameErr(false)}
                />
                {nameErr && <p className='errorMsg'>This field is required</p>}
              </div>
              <div className="group">
                <input 
                  type="email" 
                  placeholder='Email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onClick={() => setEmailErr(false)}
                />
                {emailErr && <p className='errorMsg'>This field is required</p>}
              </div>
            </div>

            <div className="form__group--date">
              <div className="group__date">
                <div className="label">
                  <p>Pick a date</p>
                  {dateErr && <p className='errorMsg'>This field is incomplete</p>}
                </div>
                <div className="pick__date">
                  <input 
                    type="number" 
                    placeholder='MM' 
                    min='0' 
                    max='12'
                    value={month}
                    onChange={(e) => setMonth(e.target.value)}
                    onClick={() => setDateErr(false)}
                  />
                  <input 
                    type="number" 
                    placeholder='DD' 
                    min='0' 
                    max='31'
                    value={day}
                    onChange={(e) => setDay(e.target.value)} 
                    onClick={() => setDateErr(false)}
                  />
                  <input 
                    type="number" 
                    placeholder='YYYY' 
                    min='2025' 
                    max='3000'  
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    onClick={() => setDateErr(false)}
                  />
                  
                </div>
              </div>
              <div className="group__time">
                <div className="label">
                  <p>Pick a time</p>
                  {timeErr && <p className='errorMsg'>This field is incomplete</p>}
                </div>
                <div className="pick__time">
                  <input 
                    type="number" 
                    placeholder='09' 
                    min='0' 
                    max='12'
                    value={hour}
                    onChange={(e) => setHour(e.target.value)}
                    onClick={() => setTimeErr(false)}
                  />
                  <input 
                    type="number" 
                    placeholder='00' 
                    min='0' 
                    max='59'
                    value={minutes}
                    onChange={(e) => setMinutes(e.target.value)}
                    onClick={() => setTimeErr(false)}
                  />
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
                <button type='button' onClick={() => onPeopleChange('plus')}><img src={iconPlus} alt="" /></button>
                <p>{people} People</p>
                <button type='button' onClick={() => onPeopleChange('minus')}><img src={iconMinus} alt="" /></button>
              </div>
            </div>
            <button className="btn btn__link btn__form">Make reservation</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;