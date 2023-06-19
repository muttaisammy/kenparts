import React from 'react';


const ContactUs = () =>{

    return(
        <div className="wrap-body-inner">
        <div className="hidden-xs">
            <div className="row">
                <div className="col-lg-6">
                    <ul className="ht-breadcrumb pull-left">
                        <li className="home-act"><a href=" "><i className="fa fa-home"></i></a></li>
                        <li className="active">Contact</li>
                    </ul>
                </div>
            </div>
        </div>
        <section className="block-contact m-t-lg-30 m-t-xs-0 p-b-lg-50">
            <div className="">
                <div className="row">
                    <div className="col-sm-6 col-md-6 col-lg-6 m-b-xs-30">
                        <div className="heading">
                            <h3>Contact info</h3>
                        </div>
                        <div className="contact-info p-lg-30 p-xs-15 bg-gray-fa bg1-gray-2">
                            <div className="content">
                                <p>Thank you.</p>
                                <ul className="list-default">
                                    <li><i className="fa fa-clock-o"></i>ELDORET, KE</li>
                                    <li><i className="fa fa-phone"></i>+254-724 052 417</li>
                                    <li><i className="fa fa-envelope-o"></i>kenstatellc@gmail.com</li>
                                    <li><i className="fa fa-globe"></i>www.kenstate.web.netlify.app</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-6">
                        <div className="heading">
                            <h3>Contact Form</h3>
                        </div>
                        <div className="contact-form p-lg-30 p-xs-15 bg-gray-fa bg1-gray-2">
                            <form>
                                <div className="form-group">
                                    <input type="email" className="form-control form-item" placeholder="Email" />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control form-item" placeholder="Phone"/>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control form-item" placeholder="Adress"/>
                                </div>
                                <textarea className="form-control form-item h-200 m-b-lg-10" placeholder="Content" rows="3"></textarea>
                                <button type="submit" className="ht-btn ht-btn-default">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    );

};


export default ContactUs;