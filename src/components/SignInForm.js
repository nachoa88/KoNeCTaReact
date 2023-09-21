import { NavLink } from "react-router-dom";

function SignInForm() {
    return (
        <div className="row form mb-3">
            <div className="form col">
                <form className="form-signin" method="post">
                    <h1 className="form-signin-heading">User login</h1>
                    <div className="form-group">
                        <div className="col-12">
                            <input id="username" type="text" placeholder="User Name" className="form-control" />
                            <input id="password" type="text" placeholder="Password" className="form-control" />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="container">
                            <div className="row">
                                <div className="caja col-4">
                                    <label className="checkbox">
                                        <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe" />Remember me</label>
                                </div>
                                <div class="caja col-8">
                                    <NavLink to="/profile" className="btn btn-lg btn-primary btn-block" type="submit">Log in</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h5 className="form-signin-footer">You don't have an user? Create one!</h5>
                    <div className="caja col-12">
                        <NavLink to="/register" className="btn btn-lg btn-primary btn-block" type="submit">Register</NavLink>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignInForm;