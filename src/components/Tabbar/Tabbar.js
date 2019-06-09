import React, { Component } from 'react'
import './Tabbar.css';

export default class Tabbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
             
        }
    }

    componentWillReceiveProps(nextProps){
        // let pathName = nextProps.location.pathname;
    }
    
    render() {
        return (
            <div className="tabbar-ct"> 
                {
                    this.props.tabs.map((page,key)=>{
                        return (
                            <div key={key} className="tabbar-item">
                                <div className="tabbar-icon">
                                    <img src={page.icon} alt=""/>
                                </div>
                                <div className="tabbar-title">{page.title}</div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
