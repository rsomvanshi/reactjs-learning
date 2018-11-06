import React from 'react'
import { render } from 'react-dom'
import Menu from './components/menu'
import data from './data/recipes'
import ReactDOM from 'react-dom'

window.React = React

render(
    <Menu recipes={data} />,
    document.getElementById("root")
)