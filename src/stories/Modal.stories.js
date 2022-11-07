import React from 'react'
import { storiesOf } from "@storybook/react";
import '../styles.css'

const stories = storiesOf('App Test', module)

stories.add('App', ()=>{

    return (
        <h1>Hello</h1>
    )
})