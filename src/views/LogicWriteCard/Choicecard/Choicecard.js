import React from 'react'
import {
    Row,
    Col,
    FormGroup,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from "reactstrap";
function Choicecard() {
    return (
        <Row>
            <Col lg="3" md="3">
                <FormGroup>
                    <label>Choice Card</label>
                    <UncontrolledDropdown>
                        <DropdownToggle caret data-toggle="dropdown" color="success">
                            🔩 Card input [CMND]
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem>Link</DropdownItem>
                            <DropdownItem>Camera</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </FormGroup>
            </Col>
        </Row>
    )
}

export default Choicecard;