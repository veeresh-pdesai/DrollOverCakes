import React,{ Component } from 'react'
class Cake extends Component{
    render(){
        let {name,src} = this.props;
        return(
            <div className="card" style={{width: '20rem',marginLeft:'12px'}}>
            <img className="card-img-top" style={{height:'250px',width:'100%'}} src={src} alt="Card cap"/>
            <div className="card-body">
              <h4 className="card-title">{name}</h4>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        )
    }
}

export default Cake