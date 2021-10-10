import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    Row,
    Col,
    CardTitle,
} from "reactstrap";
function Displaycard() {
    return (
        <Row>
            <Col lg="6" md="12">
                <Card>
                    <CardHeader>
                        <CardTitle tag="h4">🎫 1. Front card</CardTitle>
                    </CardHeader>
                    <CardBody className="d-flex justify-content-center">
                        <Col className="font-icon-list col-xs-6 col-xs-6" lg="12" md="12" sm="12">
                            <div className="font-icon-detail setUpMaxHeightFrameImage">
                                <i className="tim-icons icon-image-02"/>
                                <p>🎫 Front card not link</p>
                            </div>
                        </Col>
                    </CardBody>
                </Card>
            </Col>
            <Col lg="6" md="12">
                <Card>
                    <CardHeader>
                        <CardTitle tag="h4">📟 2. Back card</CardTitle>
                    </CardHeader>
                    <CardBody className="d-flex justify-content-center">
                        <Col className="font-icon-list col-xs-6 col-xs-6" lg="12" md="12" sm="12">
                            <div className="font-icon-detail setUpMaxHeightFrameImage">
                                <i className="tim-icons icon-image-02"/>
                                <p>🎫 Back card not link</p>
                            </div>
                        </Col>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    )
}

export default Displaycard