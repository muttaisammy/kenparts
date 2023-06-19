import React,{Component} from 'react';

class Home extends Component{

    componentDidMount(){
       window.updateCarousel();
       window.reRenderRangeSlider();
    }
    
    render(){
        return(
            <div className="wrap-body-inner">
                <div className="product product-grid product-grid-2 car m-t-lg-90 p-t-sm-35 m-b-lg-20">
                    <div className="heading">
                        <h3>DEAL ITEMS</h3>
                    </div>
                    <div className="row">
                        <div
                        id="fifi"
                        className="owl"
                        data-items="3"
                        data-itemsdesktop="2"
                        data-itemsdesktopsmall="2"
                        data-itemstablet="2"
                        data-itemsmobile="1"
                        data-pag="false"
                        data-buttons="true"
                        >
                        <div className="col-lg-12">
                            <div className="product-item hover-img">
                            <a   className="product-img">
                                <img
                                src={`${process.env.PUBLIC_URL}/images/forageharvester.jpg`}
                                alt=""
                                />
                            </a>
                            <div className="product-caption">
                                <h4 className="product-name">
                                <a>
                                    KUHN POWER / <b>Clean</b>
                                </a>
                                <span className="f-18"> 1000,000</span>
                                </h4>
                            </div>
                            <ul className="absolute-caption">
                                <li>
                                <i className="fa fa-clock-o" />2020
                                </li>
                                <li>
                                <i className="fa fa-car" />New & Used
                                </li>
                                <li>
                                <i className="fa fa-road" />Fast PTO
                                </li>
                            </ul>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="product-item hover-img">
                            <a   className="product-img">
                                <img
                                src={`${process.env.PUBLIC_URL}/images/hardi.jpeg`}
                                alt=""
                                />
                            </a>
                            <div className="product-caption">
                                <h4 className="product-name">
                                <a>
                                    Hardi 600 Ltrs / <b>Hot Deal</b>
                                </a>
                                <span className="f-18"> 450,000</span>
                                </h4>
                            </div>
                            <ul className="absolute-caption">
                                <li>
                                <i className="fa fa-clock-o" />Used
                                </li>
                                <li>
                                <i className="fa fa-car" />PTO boosted
                                </li>
                                <li>
                                <i className="fa fa-road" />
                                </li>
                            </ul>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="product-item hover-img">
                            <a   className="product-img">
                                <img
                                src={`${process.env.PUBLIC_URL}/images/premio.jpg`}
                                alt=""
                                />
                            </a>
                            <div className="product-caption">
                                <h4 className="product-name">
                                <a  >
                                    Premio 240 / <b>used</b>
                                </a>
                                <span className="f-18"> 800,000</span>
                                </h4>
                            </div>
                            <ul className="absolute-caption">
                                <li>
                                <i className="fa fa-clock-o" />2013
                                </li>
                                <li>
                                <i className="fa fa-car" />Auto
                                </li>
                                <li>
                                <i className="fa fa-road" />Petrol
                                </li>
                            </ul>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="product-item hover-img">
                            <a   className="product-img">
                                <img
                                src={`${process.env.PUBLIC_URL}/mf165.jpg`}
                                alt=""
                                />
                            </a>
                            <div className="product-caption">
                                <h4 className="product-name">
                                <a  >
                                    MF 165 / <b>used</b>
                                </a>
                                <span className="f-18"> 910,000</span>
                                </h4>
                            </div>
                            <ul className="absolute-caption">
                                <li>
                                <i className="fa fa-clock-o" />
                                </li>
                                <li>
                                <i className="fa fa-car" />Import
                                </li>
                                <li>
                                <i className="fa fa-road" />Power steering
                                </li>
                            </ul>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="product-item hover-img">
                            <a   className="product-img">
                                <img
                                src={`${process.env.PUBLIC_URL}/fvr.jpg`}
                                alt=""
                                />
                            </a>
                            <div className="product-caption">
                                <h4 className="product-name">
                                <a  >
                                    Mitsubishi FVR / <b>used</b>
                                </a>
                                <span className="f-18"> 1,500,000</span>
                                </h4>
                            </div>
                            <ul className="absolute-caption">
                                <li>
                                <i className="fa fa-clock-o" />1998
                                </li>
                                <li>
                                <i className="fa fa-car" />Manual
                                </li>
                                <li>
                                <i className="fa fa-road" />Diesel
                                </li>
                            </ul>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="product-item hover-img">
                            <a   className="product-img">
                                <img
                                src={`${process.env.PUBLIC_URL}/images/ford5000.jpg`}
                                alt=""
                                />
                            </a>
                            <div className="product-caption">
                                <h4 className="product-name">
                                <a  >
                                    Engine rebuild / <b>used</b>
                                </a>
                                <span className="f-18"> 1,200,000</span>
                                </h4>
                            </div>
                            <ul className="absolute-caption">
                                <li>
                                <i className="fa fa-clock-o" />OK
                                </li>
                                <li>
                                <i className="fa fa-car" />Manual
                                </li>
                                <li>
                                <i className="fa fa-road" />PTO
                                </li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="banner-item banner-2x banner-bg-9 color-inher m-b-lg-50">
                <h3 className="f-weight-300">
                    Start Selling With <strong>KENSTATE</strong> Now!
                </h3>
                <a className="ht-btn ht-btn-default" href="/sellacar">
                    Sell your Auto, Tractor, Implement, Spare etc
                </a>
                </div>   
            </div>
        ); 
    }
}

export default Home ;