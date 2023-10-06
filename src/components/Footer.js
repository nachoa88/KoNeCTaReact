import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer>
            <div id="footer">
                <Link to="/information" className="navbar-brand" id="info-link"><i className="fas fa-info"></i>Information</Link>
                <Link to="/" className="navbar-brand" id="faqs-link"><i className="fas fa-comment"></i>FAQS</Link>
                <Link to="/" className="navbar-brand" id="social-media-link"><i className="fas fa-users"></i>Social Media</Link>
            </div>
        </footer>
    )
}

export default Footer;