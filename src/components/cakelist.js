import React,{ Component } from 'react'
import Cake from './cake'
class CakeList extends Component{
    render(){
        let cakes = [{id:1,name:"Honey cake",src:"img/1.jpg"},{id:2,name:"Black Forest",src:"img/2.jpg"},{id:3,name:"Red Velvet",src:"img/3.gif"}];
        let cakesTemp = cakes.map(cake=>{
            return <Cake key={cake.id} {...cake}/>
        })
        return(
            <div className="row">{cakesTemp}</div>
        )
    }
}

export default CakeList