import React,{Component} from 'react' ;
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchSingleCar,addToWishList,removeFromWishList } from '../../actions';

class CarItemCard extends Component{


    constructor(props) {
        super(props);
        this.state={isInWishList:false,
                    car:props.car,
                    isHovered:false
                    };
    };
    ToggleCarWishlist(event){
        var car = JSON.parse(event.target.id);
        if(!this.state.isInWishList){
            this.props.addToWishList(car);
            this.setState({isInWishList:true});
        }
        else{  
            this.props.removeFromWishList(car);
            this.setState({isInWishList:false});
            
        }
    }
    componentDidMount(){
        var car= this.props.car;
        
        if(this.props.wishlistproducts.filter(function(e){return e._id === car._id}).length===1){
            this.setState({isInWishList:true})
        }
    }
    mouseHover(event){
        this.setState({isHovered:true});  
    }

    mouseUnHover(event){
        this.setState({isHovered:false});  
    }



    render(){

        var heartStyle = {};
        if(!this.state.isHovered){
            heartStyle = {
                color: '#d11717',
                fontWeight: 'bold'
            };
        }

        const {car} = this.props;
        return(
            <div className="col-sm-12 col-md-6 col-lg-6">
            <div className="product-item hover-img">
                <a className="product-img">
                    <img src={`${process.env.PUBLIC_URL}/images/${car.imageName}`} alt="" />
                </a>
                <div className="product-caption">
                    <h4 className="product-name">
                    <a>
                    {car.name} / <b>{car.condition.toUpperCase()}</b>
                    </a>
                    <span className="f-18"> ${car.price}</span>
                    </h4>
                </div>
                <ul className="absolute-caption">
                    <li>
                    <i className="fa fa-clock-o" />{car.year}
                    </li>
                    
                    <li onClick={()=>this.props.fetchSingleCar(car)}>
                        <Link to={`/cars/singlproduct`}>
                        <i className="fa fa-search" />View
                        </Link>
                    </li>
                     
                    <li onMouseEnter={this.mouseHover.bind(this)} onMouseLeave={this.mouseUnHover.bind(this)}>
                            <i id={JSON.stringify(car)} className={this.state.isInWISHLIST ? "fa fa-heart" : "fa fa-heart-o"} 
                            style={heartStyle} 
                            onClick={this.ToggleCarWishlist.bind(this)}      
                            />WishList
                    </li>
                                     
                </ul>   
            </div>
        </div>

        );
    } 

};





function mapStateToProps({ WISHLISTproducts }) {
    return { WISHLISTproducts };
}


export default connect(mapStateToProps,{ fetchSingleCar, addToWISHLIST, removeFromWISHLIST})(CarItemCard) ;