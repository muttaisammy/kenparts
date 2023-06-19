import React , {Component} from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from 'react-redux';
import { fetchProducts } from '../../actions';

import ProductsContainer from './ProductsContainer';
import ProductDetails from './ProductDetails';

class ProductsShop extends Component{

    constructor(props){
        super(props);
        this.state={
          activePage:'Engine Parts',
        }
    }

    componentDidMount() {
        this.props.fetchProducts('Engine Parts');
    }

    renderFiltredProducts(activePage){
        this.setState({activePage});
        this.props.fetchProducts(activePage);
    }
    
    
    render(){
       
        return(
            <div className="wrap-body-inner" style={{minHeight: '1200px'}}>
                
                <section className="m-t-lg-30 m-t-xs-0">
                        <div className="row">
                            <div className="col-sm-4 col-md-3 col-lg-3">
                                <div className="category m-b-lg-50 ">
                                    <div className="heading m-b-lg-0">
                                        <h3 className="p-l-lg-20" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                                <i className="fa fa-bars"></i>Caterory
                                        </h3>
                                    </div>
                                    <ul className="collapse in" id="collapseExample">
                                       
                                        <li className={this.state.activePage === 'Engine Parts' ? 'active' : ''}><a onClick={()=>this.renderFiltredProducts('Engine Parts')} > Engine Parts<i className="fa fa-chevron-right pull-right"></i></a></li>
                                        <li  className={this.state.activePage === 'Tractor Parts' ? 'active' : ''}><a onClick={()=>this.renderFiltredProducts('Tractor Parts')} >Tractor Parts<i className="fa fa-chevron-right pull-right"></i></a></li>
                                        <li><a >Car Implement Parts<i className="fa fa-chevron-right pull-right"></i></a></li>
                                        <li><a  >Electronics<i className="fa fa-chevron-right pull-right"></i></a></li>
                                        <li><a  >Lorry Parts<i className="fa fa-chevron-right pull-right"></i></a></li>
                                        <li><a  >ExJapan body Parts<i className="fa fa-chevron-right pull-right"></i></a></li>
                                        <li><a  >Hydraulics<i className="fa fa-chevron-right pull-right"></i></a></li>
                                        <li><a  >Bearings<i className="fa fa-chevron-right pull-right"></i></a></li>
                                        <li><a  >Electricals<i className="fa fa-chevron-right pull-right"></i></a></li>
                                        <li><a  >Tyres & Lubes<i className="fa fa-chevron-right pull-right"></i></a></li>
                                    </ul>
                                </div>
                                <div className="banner-item banner-bg-4 banner-1x color-inher">
                                    <h3 className="f-weight-300"><strong>Tyres Rack</strong></h3>
                                    <p>Affordable Prices call us</p>
                                    <a className="ht-btn ht-btn-default">Shop now</a>
                                    
                                    
 
                                    
                                </div>
                            </div>
                            <BrowserRouter>
                                    <div>
                                    <Route exact path="/products" render={()=><ProductsContainer products={this.state.activePage} productsList={this.props.products}/>} />
                                    <Route exact path="/products/singlproduct" component={ProductDetails} />
                                    </div>
                            </BrowserRouter>

                        </div>
                </section>
            </div>
        );
    }
}   



function mapStateToProps({ products }) {
    return { products };
}
  
export default connect(mapStateToProps,{fetchProducts})(ProductsShop);
