import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './TabPage.css'
import Tabbar from '@/components/Tabbar/Tabbar'

export default class routerPage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div>
                {
                    this.props.routes.map((route,key)=>{
                        if(route.exact){
                            return <Route className="tab-view" key={key} exact path={route.path} component={route.component}/>
                        }else{
                            return <Route className="tab-view" key={key} path={route.path} component={route.component}/>
                        } 
                    
                    })
                }
                <Tabbar tabs={this.props.routes}/>
            </div>
        )
    }
}
