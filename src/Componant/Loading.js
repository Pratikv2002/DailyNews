import React, { Component } from 'react'
import Spinner from './Spinner.gif'

export default class Loading extends Component {
    render() {
        return (
            <div style={{"marginTop":"200px"}} className='text-center'>
                <img src={Spinner} alt="Spinner" />
            </div>
        )
    }
}
