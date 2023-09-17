import React from 'react';

function Footer() {
    return (
        <footer>
            <div id="footer">
                <nav>
                    <a href="#" target="_blank" aria-label="Information">
                        <i className="fas fa-info"></i> Information
                    </a>
                    <a href="#" target="_blank" aria-label="FAQs">
                        <i className="fas fa-comment"></i> FAQs
                    </a>
                    <a href="#" target="_blank" aria-label="Users">
                        <i className="fas fa-users"></i> Users
                    </a>
                </nav>
            </div>
        </footer>
    )
}

export default Footer;
