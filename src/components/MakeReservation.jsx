import { Link } from "react-router-dom";

function MakeReservation () {
  return (
    <div className="reservation">
      <h3>Ready to make a reservation?</h3>
      <Link to='/form' className="btn btn__link">Book a table</Link>
    </div>
  );
};

export default MakeReservation;