import { NavLink } from "react-router-dom";

function RegisterForm() {
    return (
        <div className="row form mb-3">
            <div className="form col">
                <form className="form-signin" method="post">
                    <h1 className="form-signin-heading">Sign Up</h1>
                    <div className="form-group">
                        <div className="col-12">
                            <input id="name" type="text" placeholder="Name" className="form-control" />
                            <input id="surname" type="text" placeholder="Surname" className="form-control" />
                            <input id="email" type="text" placeholder="Email" className="form-control" />
                            <input id="username" type="text" placeholder="User Name" className="form-control" />
                            <input id="password" type="text" placeholder="Password" className="form-control" />
                            <input id="rpassword" type="text" placeholder="Repeat Password" className="form-control" />
                        </div>
                    </div>
                    <div className="col-12">
                        <label className="checkbox" id="terms">
                            <input type="checkbox" value="terms" name="terms" /> I Accept the terms and conditions.
                        </label>
                    </div>
                    <div class="col-12">
                        <NavLink to="/profile" className="btn btn-lg btn-primary btn-block" id="signup" type="submit">Sign Up</NavLink>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default RegisterForm;