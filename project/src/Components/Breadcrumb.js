import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb'

const breadcrumb = () =>{
    return(
        <Breadcrumb>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                About
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Instructions</Breadcrumb.Item>
        </Breadcrumb>
    )
};

export default breadcrumb