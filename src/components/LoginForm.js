import React from 'react'

export default function LoginForm() {
    return (
        <div class="container">
            <div className="col-md-5" id="bg-clear">
           
                <div className="row">
                    <div className="col-md-6">
                        <h3 className="text-left">Registration Form</h3>
                    </div>
                    <div className="col-md-6">
                        <span className="glyphicon glyphicon-pencil"></span>
                    </div> 
                </div>
                <hr/>

                <div className="row">
                    <label className="label col-md-2 control-label">E-mail</label>
                    <div className="col-md-10">
                        <input type="Email" className="from-control" name="Email" placeholder="E-mail" />
                    </div>
                </div>

                <div className="row">
                    <label className="label col-md-2 control-label">Password</label>
                    <div className="col-md-10">
                        <input type="Password" className="from-control" name="Password" placeholder="Password" /><br/>
                    </div>
                    <div className="checking">
                        <input type="checkbox"/><small>Remember</small>
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
                        <input type="radio" name="mal" value="male" /><small>Male</small>
                        <input type="radio" name="fem" value="female" /><small>Female</small> 
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
                    <a href="#"><div className="btn btn-info">Submit</div></a>
                    <a href="#"><div className="btn btn-warning">Cancel</div></a>
                </div>
           

            </div>
        </div>
    )
}
