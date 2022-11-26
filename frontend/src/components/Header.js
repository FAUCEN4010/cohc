import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <div className="main-header" >
        <div className="header">
        <Row>
                <Col>
                    <FontAwesomeIcon icon={faFaceSmile} /> &nbsp; City of Happy Citizens
                </Col>
                <Col align="right">
                    Property Management System
                </Col>
            </Row>
        </div>
    </div>
  )
}

export default Header