import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <div className="footer__links-wr">
                <Link to="/notfound">FAQ</Link>
                <Link to="/notfound">Help Center</Link>
                <Link to="/notfound">Account</Link>
                <Link to="/notfound">Media Center</Link>
                <Link to="/notfound">Investor Relations</Link>
                <Link to="/notfound">Jobs</Link>
                <Link to="/notfound">Ways to Watch</Link>
                <Link to="/notfound">Terms of Use</Link>
                <Link to="/notfound">Privacy</Link>
                <Link to="/notfound">Cookie Preferences</Link>
                <Link to="/notfound">Corporate Information</Link>
                <Link to="/notfound">Contact Us</Link>
            </div>
        </footer>
    )
}

export default Footer