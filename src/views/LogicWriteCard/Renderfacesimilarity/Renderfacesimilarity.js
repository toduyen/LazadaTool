import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    Col,
    CardTitle,
    Badge,
    Button,
    CardImg
} from "reactstrap";
function Renderfacesimilarity() {
    return (
        <React.Fragment>
            <Col md="12" lg="3">
                <Card className="card-plain">
                    <CardHeader>
                        <CardTitle tag="h4">✔ Result Face similarity</CardTitle>
                        <p className="category">Kết quả phản hồi sẽ tính theo % khớp khuôn mặt</p>
                    </CardHeader>
                    <CardBody className="d-flex justify-content-center">
                        <Col className="font-icon-list col-xs-6 col-xs-6" lg="12" md="12" sm="12">
                            <CardImg
                                top
                                src="https://photo-cms-sggp.zadn.vn/Uploaded/2021/nkdkswkqoc/original/2015/12/images597493_cmnd-6.jpg"
                                style={{
                                width: '90%',
                                height: 'auto'
                            }}
                                alt="cmd"/>
                            <CardBody>
                                <p className="mb-0">🌿 Khuôn mặt có tỉ lệ chính xác là 🌿
                                    <Badge color="default">20%</Badge>
                                    <Badge color="info">40%</Badge>
                                    <Badge color="warning">60%</Badge>
                                    <Badge color="primary">80%</Badge>
                                    <Badge color="success">100%</Badge>

                                </p>
                            </CardBody>
                        </Col>
                    </CardBody>

                </Card>
            </Col>
            <Col md="12" lg="3" className="d-flex justify-content-center">
                <Card className="card-plain d-flex justify-content-center">
                    <div className="font-icon-detail setUpMaxHeightFrameImage">
                        <Button color="success" className="animation-on-hover">
                            📸 OpenWebCam
                        </Button>
                        <p>📙 Opencam</p>
                    </div>
                </Card>
            </Col>
        </React.Fragment>
    )
}

export default Renderfacesimilarity