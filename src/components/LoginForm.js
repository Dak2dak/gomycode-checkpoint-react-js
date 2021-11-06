import React from "react";

export default function LoginForm() {
  return (
    <div class="container">
      <div className="col-md-5" id="bg-clear">
        <div className="row">
          <div className="col-md-8">
            <h3 className="text-left">Registration Form</h3>
          </div>
          <div className="col-md-4">
            <span className="glyphicon glyphicon-pencil">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                class="bi bi-pencil"
                viewBox="0 0 16 16"
              >
                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
              </svg>
            </span>
          </div>
        </div>
        <hr />

        <div className="row">
          <label className="label col-md-2 control-label">E-mail</label>
          <div className="col-md-10">
            <input
              type="Email"
              className="from-control"
              name="Email"
              placeholder="E-mail"
            />
          </div>
        </div>

        <div className="row">
          <label className="label col-md-2 control-label">Password</label>
          <div className="col-md-10">
            <input
              type="Password"
              className="from-control"
              name="Password"
              placeholder="Password"
            />
            <br />
          </div>
          <div className="checking">
            <input type="checkbox" />
            <small>Remember</small>
          </div>
        </div>

        <div className="row">
          <label className="label col-md-2 control-label">Message</label>
          <div className="col-md-10">
            <textarea className="from-control"></textarea>
          </div>
        </div>

        <div className="row">
          <label className="label col-md-2 control-label">Gender</label>
          <div className="col-md-10 border-b-none">
            <input type="radio" name="mal" value="male" />
            <small>Male</small>
            <input type="radio" name="fem" value="female" />
            <small>Female</small>
          </div>
        </div>

        <div className="row">
          <label className="label col-md-2 control-label">Country</label>
          <div className="col-md-10">
            <select className="from-control">
              <option>Ivory Coast</option>
              <option>Senegal</option>
              <option>Burkina Faso</option>
              <option>Togo</option>
              <option>Ghana</option>
              <option>Nigeria</option>
              <option>Liberia</option>
              <option>Benin</option>
              <option>Marocco</option>
            </select>
          </div>
        </div>
        <div className="bottom-btn">
          <a href="#">
            <div className="btn btn-info">Submit</div>
          </a>
          <a href="#">
            <div className="btn btn-warning">Cancel</div>
          </a>
        </div>
      </div>
    </div>
  );
}
