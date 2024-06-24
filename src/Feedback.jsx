import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Feedback() {
  return (
    <div className="container">
      <form>
        <br />
        <br/>
        <label htmlFor="feedback" style={{ fontSize:"200%",color:"aliceblue", fontFamily:"serif" }}>
          Enter your valuable feedback
        </label>
        <br />
        <br />
        <input type="text" id="feedback" className="form-control" style={{ marginBottom: "100px" }} />
        <input type="submit"  className="btn btn-primary" />
      </form>
    </div>
  );
}

export default Feedback;


