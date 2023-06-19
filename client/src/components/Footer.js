import React from 'react';

const Footer = () => {
    return(
        <footer id="wrap-footer" className="bg-gray-1 color-inher">
            <div className="footer-top">
            <div className="container">
                <div className="bg-gray-1 p-l-r">
                <div className="row">
                    <div className="col-xs-12 col-sm-4 col-md-4">
                    <div className="heading-1">
                    </div>
                    <p>
                        
                    </p>
                    <ul className="list-default">
                        <li>
                        <i className="fa fa-signal" />ELDORET, KENYA
                        </li>
                        <li>
                        <a href="tel:01686813774">
                            <i className="fa fa-phone" />+254 724-052-417
                        </a>
                        </li>
                        <li>
                        <i className="fa fa-envelope-o" />kenstatellc@gmail.com
                        </li>
                        <li>
                        <i className="fa fa-globe" />http://www.kenstate-web.netlify.app
                        </li>
                    </ul>
                    </div>
                    <div className="col-xs-12 col-sm-4 col-md-4">
                    <div className="newsletter text-left">
                        <div className="heading-1">
                        <h3>Newsletter</h3>
                        </div>
                        <p>
                        Coming Soon !{" "}
                        </p>
                        <form>
                        <div className="form-group">
                            <input
                            type="email"
                            className="form-control form-item"
                            id="Email1"
                            placeholder="Email"
                            />
                        </div>
                        <button type="submit" className="ht-btn ht-btn-default">
                            Subscribe
                        </button>
                        </form>
                    </div>
                    </div>
                    <div className="col-xs-12 col-sm-4 col-md-4">
                    <div className="heading-1">
                        <h3>Quick Links</h3>
                    </div>
                    <ul className="list-default">
                        <li>
                        <a  >
                            <i className="fa fa-angle-right" />Privacy Policy
                        </a>
                        </li>
                        <li>
                        <a  >
                            <i className="fa fa-angle-right" />Community
                        </a>
                        </li>
                        <li>
                        <a  >
                            <i className="fa fa-angle-right" />Blog
                        </a>
                        </li>
                        <li>
                        <a  >
                            <i className="fa fa-angle-right" />Guide use
                        </a>
                        </li>
                        <li>
                        <a  >
                            <i className="fa fa-angle-right" />Our Servces
                        </a>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div className="footer-bt color-inher">
            <div className="container">
                <div className="bg-gray-0c p-l-r">
                <div className="row">
                    <div className="col-md-6">
                    <p>
                        © 2023 Designed by{" "}
                        <a href="www.kenstate-web.netlify.app">KENSTATE ALLIED</a>.
                        All rights reserved
                    </p>
                    </div>
                    <div className="col-md-6">
                    <ul className="social-icon list-inline pull-right">
                        <li>
                        <a  >
                            <i className="fa fa-facebook" />
                        </a>
                        </li>
                        <li>
                        <a  >
                            <i className="fa fa-google" />
                        </a>
                        </li>
                        <li>
                        <a  >
                            <i className="fa fa-youtube" />
                        </a>
                        </li>
                        <li>
                        <a  >
                            <i className="fa fa-facebook" />
                        </a>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
            </div>
      </footer>
    );
};

export default Footer;