import React from 'react'
import Header from '../header/Header'
import { CssBaseline } from '@material-ui/core'
import './style.css'

export default function MainContainer({children}){

    return(

        <div className="div-container">
            <CssBaseline/>
            <Header/>
            {children}
        </div>
    )
}