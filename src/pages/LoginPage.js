import Logo from '../components/Logo.js';
import SignInForm from '../components/SignInForm.js';

import '../components/css/Logo.css';
import '../components/css/Forms.css';

function Login () {
    return (
        <div>
            <Logo />
            <SignInForm />
        </div>
    );
}

export default Login;