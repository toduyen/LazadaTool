import React, {useCallback, useState} from 'react'
import {
    Row,
    Col,
    FormGroup,
    Input,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Card,
    CardHeader,
    CardTitle,
    CardBody,
    Badge
} from "reactstrap";
function Choicedevice() {
    const [Device,
        setDevice] = useState("Link");
    const [LinkInput,
        setLinkInput] = useState({});
    const handleInput = useCallback(({
        target: {
            name,
            value
        }
    }) => setLinkInput(state => ({
        ...state,
        [name]: value
    }), []), [])
    const resetInput = () => {
        setLinkInput({InputLink: ''})
    }
    const convertAndReturn = useCallback(() => {
        try {
            switch (LinkInput.InputLink.split(" ").length) {
                case 3:
                    return true;
                default:
                    return false;
            }
        } catch (error) {
            return null;
        }
    }, [LinkInput
            ?.InputLink])
    return (
        <React.Fragment>
            <Row>
                <Col lg="3" md="3">
                    <UncontrolledDropdown>
                        <DropdownToggle caret data-toggle="dropdown" color="success">
                            🔩 Choice Input [LINK]
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem onClick={() => setDevice("Link")}>LINK</DropdownItem>
                            <DropdownItem onClick={() => setDevice("Camera")}>CAMERA</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Col>
            </Row>
            {(Device === "Link")
                ? <Row>
                        <Col lg="12" md="12">
                            <FormGroup>
                                <label>Link Image
                                    <span
                                        style={{
                                        backgroundColor: 'black',
                                        padding: '4px',
                                        color: 'white',
                                        borderRadius: '50px',
                                        cursor: 'pointer'
                                    }}
                                        onClick={resetInput}>X</span>
                                    <Badge color="default">Đã tiếp nhận và xử lý sau 10s</Badge>
                                </label>
                                <Input
                                    name="InputLink"
                                    cols="80"
                                    onChange={handleInput}
                                    placeholder="💡 Dán 2 LINK cùng lúc theo thứ tự mặt trước và mặt sau cách nhau phím space chấp nhận link có đuôi là .PNG , .JPG đồng ý ấn nút space"
                                    rows="3"
                                    disabled={convertAndReturn()}
                                    value={LinkInput.InputLink}
                                    type="textarea"/>
                            </FormGroup>
                        </Col>
                    </Row>
                : <Row>
                    <Col lg="7" md="12">
                        <Card>
                            <CardHeader>
                                <CardTitle tag="h4">Camera</CardTitle>
                            </CardHeader>
                            <CardBody className="d-flex justify-content-center">
                                <Col className="font-icon-list col-xs-6 col-xs-6" lg="12" md="12" sm="12">
                                    <div
                                        className="font-icon-detail setUpMaxHeightFrameImage"
                                        style={{
                                        border: '1px dashed #e44cc4'
                                    }}>
                                        <i className="tim-icons icon-mobile"/>
                                        <p>📸 Bạn đang dùng camera trước</p>
                                    </div>
                                </Col>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
}
        </React.Fragment>
    )
}

export default Choicedevice