import React from 'react'
import {
    Card,
    CardBody,
    Row,
    Col,
} from "reactstrap";
import Choicecard from './LogicWriteCard/Choicecard/Choicecard';
import Choicedevice from './LogicWriteCard/Choicedevice/Choicedevice';
import './LogicWriteCard/css/WriteCard.css';
import Displaycard from './LogicWriteCard/Displaycard/Displaycard';
import Header from './LogicWriteCard/Header/Header';
import Renderesult from './LogicWriteCard/Renderesult/Renderesult';
import Renderfacesimilarity from './LogicWriteCard/Renderfacesimilarity/Renderfacesimilarity';
function WriteCard() {
    return (
        <React.Fragment>
            <div className="content">

                <Row>
                    <Col md="12">
                        <Card>
                            <Header/>
                            <CardBody className="all-icons">
                                <Choicedevice/>
                                <Choicecard/>
                                <Displaycard/>
                                <Row>
                                    <Renderesult/>
                                    <Renderfacesimilarity/>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    )
}

export default WriteCard
