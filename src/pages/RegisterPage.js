import Logo from '../components/Logo.js';
import RegisterForm from '../components/RegisterForm.js';

import '../components/css/Logo.css';
import '../components/css/Forms.css';

function Login () {
    return (
        <div>
            <Logo />
            <RegisterForm />
        </div>
    );
}

export default Login;