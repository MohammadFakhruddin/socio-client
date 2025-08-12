import { Link } from "react-router";
import logo from "../assets/socio-logo.png";
import { FaFacebookF, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content pt-10 pb-4 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Logo & About */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <img src={logo} alt="SocioServe" className="h-10" />
          </div>
          <p className="text-sm text-gray-500">
            Empowering communities through meaningful social events. Join, create, and make an impact!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="footer-title text-primary">Quick Links</h4>
          <ul className="text-sm space-y-1">
            <li><Link to="/" className="link link-hover">Home</Link></li>
            <li><Link to="/events" className="link link-hover">Upcoming Events</Link></li>
            <li><Link to="/create-event" className="link link-hover">Create Event</Link></li>
            <li><Link to="/about" className="link link-hover">About Us</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="footer-title text-primary">Contact</h4>
          <p className="text-sm">Email: <a href="mailto:support@socioserve.org" className="link">support@socioserve.org</a></p>
          <p className="text-sm">Location: Dhaka, Bangladesh</p>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="footer-title text-parimary">Follow Us</h4>
          <div className="flex gap-4 mt-2">
            <a href="#" className="btn btn-sm btn-circle bg-primary text-white"><FaFacebookF /></a>
            <a href="#" className="btn btn-sm btn-circle bg-primary text-white"><FaTwitter /></a>
            <a href="#" className="btn btn-sm btn-circle bg-primary text-white"><FaInstagram /></a>
            <a href="mailto:support@socioserve.org" className="btn btn-sm btn-circle bg-primary text-white"><FaEnvelope /></a>
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="mt-10 border-t border-base-300 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} SocioServe. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
