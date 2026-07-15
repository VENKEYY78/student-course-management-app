import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-about">
          <h3>ABC College</h3>
          <p>
            Empowering students to learn, grow, and succeed through quality education and innovation.
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#courses">Courses</a></li>
            <li><a href="#">Admissions</a></li>
            <li><a href="#">Placements</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>📍 Tenali, Andhra Pradesh, India</p>
          <p>📞 +91 ***** ****0</p>
          <p>✉️ info@abccollege.edu.in</p>
        </div>

        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} ABC College. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
