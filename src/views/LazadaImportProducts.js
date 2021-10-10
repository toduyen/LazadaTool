import {useFormik} from 'formik';
import * as Yup from 'yup';
import React, {useCallback, useState} from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    FormGroup,
    Form,
    Badge,
    Row,
    Input,
    Col,
    Button,
    CardImg,
    CardText,
    Modal,
    ModalHeader,
    ModalBody,
    Label
} from "reactstrap";
import Camera, {IMAGE_TYPES} from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
function LazadaImportProducts() {
    const formik = useFormik({
        initialValues: {
            nameProduct: '',
            quantityProduct: '',
            priceNDT: '',
            priceVND: '',
            priceShoppe: '',
            priceByDemo: ''
        },
        validationSchema: Yup.object({
            nameProduct: Yup
                .string()
                .max(50, '💡 Tên không quá 50 ký tự')
                .required('💡 Chưa nhập'),
            quantityProduct: Yup
                .string()
                .max(3, '💡 Số lượng không quá 999')
                .required('💡 Chưa nhập'),
            priceNDT: Yup
                .string()
                .max(10, '💡 giá tiền không quá 10 con số')
                .required('💡 Chưa nhập'),
            priceVND: Yup
                .string()
                .max(20, '💡 giá tiền không quá 30 con số')
                .required('💡 Chưa nhập'),
            priceShoppe: Yup
                .string()
                .max(20, '💡 giá tiền không quá 30 con số')
                .required('💡 Chưa nhập'),
            priceByDemo: Yup
                .string()
                .max(20, '💡 giá tiền không quá 30 con số')
                .required('💡 Chưa nhập')
        }),
        onSubmit: values => {
            alert(JSON.stringify(values));
        }
    });
    const [WidthAndHight] = useState({width: 640, height: 280})
    const [modalMini,
        setmodalMini] = useState(false);
    const [deviceCame] = useState(["FACING_MODES.USER", "FACING_MODES.ENVIRONMENT"])
    const [nullDevice, setNullDevice] = useState("");
    const [ShortImage,setShortImage] = useState({data: null, error: null})
    const handleTakePhoto = useCallback((dataUri) => {
        setShortImage({data: dataUri, error: false})
    }, [])
    const handleCameraError = useCallback((error) => {
        setShortImage({data: null, error: true})
    }, [])
    const resetDataImage = useCallback(() => {
        setShortImage({data: null, error: false})
    }, [])
    const toggleModalMini = useCallback(
        () => {
            setmodalMini(!modalMini);
        },
        [modalMini],
    )
    const handleAddrTypeChange = useCallback(
        (e) => {
            setNullDevice(deviceCame[e.target.value])
        },
        [nullDevice],
    )
    return (
        <React.Fragment>
            <div className="content">
                <Row>
                    <Col md="7">
                        <Card>
                            <CardHeader>
                                <h5 className="title">Camera</h5>
                            </CardHeader>
                            <CardBody>
                                <Form>
                                    <Row>
                                        <Col md="12">
                                            <FormGroup>
                                                <Camera
                                                    imageType={IMAGE_TYPES.JPG}
                                                    imageCompression={0.97}
                                                    isMaxResolution={true}
                                                    idealFacingMode={nullDevice ? nullDevice : "FACING_MODES.ENVIRONMENT"}
                                                    isImageMirror={false}
                                                    isSilentMode={true}
                                                    isDisplayStartCameraError={true}
                                                    isFullscreen={false}
                                                    sizeFactor={1}
                                                    idealResolution={WidthAndHight}
                                                    onTakePhoto={(dataUri) => {
                                                    handleTakePhoto(dataUri)
                                                }}
                                                    onCameraError=
                                                    {(error) =>{handleCameraError(error)} }/>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </Form>
                            </CardBody>
                            <CardFooter>
                                Trạng thái webcam: {ShortImage
                                    ?.error
                                        ? <Badge
                                                style={{
                                                color: "black"
                                            }}
                                                color="danger"
                                                pill>Lỗi webcam do có 1 thiết bị khác cũng đang bật webcam</Badge>
                                        : <Badge
                                            style={{
                                            color: "black"
                                        }}
                                            color="success"
                                            pill>Ổn định</Badge>}
                                <Badge
                                    color="info"
                                    onClick={() => toggleModalMini()}
                                    style={{
                                    color: "black",
                                    cursor: "pointer"
                                }}>Chọn camera</Badge>
                                <Modal isOpen={modalMini} toggle={() => toggleModalMini()} size="sm">
                                    <ModalHeader
                                        className="justify-content-center"
                                        toggle={() => toggleModalMini()}>
                                        Chọn camera
                                    </ModalHeader>
                                    <ModalBody>
                                        <FormGroup>
                                            <Label for="exampleSelect1">Hãy chọn camera</Label>
                                            <Input type="select" name="select" id="exampleSelect1"  onChange={e => handleAddrTypeChange(e)} style={{color: "black"}}>
                                                {
                                                    deviceCame.map((name, key) => <option key={key} value={key}>{name}</option>)
                                                }
                                            </Input>
                                        </FormGroup>
                                    </ModalBody>
                                </Modal>

                            </CardFooter>
                        </Card>
                    </Col>
                    <Col md="5">
                        <Card>
                            <CardHeader>
                                <h5 className="title">Nhập dữ liệu</h5>
                            </CardHeader>
                            <CardBody>
                                <form onSubmit={formik.handleSubmit}>
                                    <Col md="12">
                                        <Card>
                                            {ShortImage
                                                ?.data
                                                    ? <React.Fragment>
                                                            <CardImg
                                                                top
                                                                src={ShortImage
                                                                ?.data}
                                                                alt="anh san pham"/>
                                                            <CardBody>
                                                                <CardText>Hình ảnh vừa chụp muốn chụp lại chọn reset</CardText>
                                                                <Button
                                                                    color="success"
                                                                    className="animation-on-hover"
                                                                    onClick={() => resetDataImage()}>🔨 Reset</Button>
                                                            </CardBody>
                                                        </React.Fragment>
                                                    : <Col className="font-icon-list col-xs-12 col-xs-12" md="12">
                                                        <div className="font-icon-detail">
                                                            <i className="tim-icons icon-image-02"/>
                                                            <p>Chưa có ảnh</p>
                                                        </div>
                                                    </Col>
}
                                        </Card>
                                        <FormGroup>
                                            <label htmlFor="nameProduct">🧬 Tên sản phẩm {formik.touched.nameProduct && formik.errors.nameProduct
                                                    ? (
                                                        <Badge
                                                            style={{
                                                            color: "black"
                                                        }}
                                                            color="danger">{formik.errors.nameProduct}</Badge>
                                                    )
                                                    : null}</label>
                                            <Input
                                                id="nameProduct"
                                                name="nameProduct"
                                                type="text"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.nameProduct}/>

                                            <label htmlFor="quantityProduct">🛒 Số lượng {formik.touched.quantityProduct && formik.errors.quantityProduct
                                                    ? (
                                                        <Badge
                                                            style={{
                                                            color: "black"
                                                        }}
                                                            color="danger">{formik.errors.quantityProduct}</Badge>
                                                    )
                                                    : null}</label>
                                            <Input
                                                id="quantityProduct"
                                                name="quantityProduct"
                                                type="number"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.quantityProduct}/>
                                            <Row>
                                                <Col md="6">
                                                    <label htmlFor="priceVND">💷 Giá VNĐ {formik.touched.priceVND && formik.errors.priceVND
                                                            ? (
                                                                <Badge
                                                                    style={{
                                                                    color: "black"
                                                                }}
                                                                    color="danger">{formik.errors.priceVND}</Badge>
                                                            )
                                                            : null}</label>
                                                    <Input
                                                        id="priceVND"
                                                        name="priceVND"
                                                        type="number"
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.priceVND}/>
                                                </Col>
                                                <Col md="6">
                                                    <label htmlFor="priceNDT">💶 Giá nhân dân tệ {formik.touched.priceNDT && formik.errors.priceNDT
                                                            ? (
                                                                <Badge
                                                                    style={{
                                                                    color: "black"
                                                                }}
                                                                    color="danger">{formik.errors.priceNDT}</Badge>
                                                            )
                                                            : null}</label>
                                                    <Input
                                                        id="priceNDT"
                                                        name="priceNDT"
                                                        type="number"
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.priceNDT}/>
                                                </Col>
                                            </Row>

                                            <Row>
                                                <Col md="6">
                                                    <label htmlFor="priceShoppe">💵 Giá Shoppe {formik.touched.priceShoppe && formik.errors.priceShoppe
                                                            ? (
                                                                <Badge
                                                                    style={{
                                                                    color: "black"
                                                                }}
                                                                    color="danger">{formik.errors.priceShoppe}</Badge>
                                                            )
                                                            : null}</label>
                                                    <Input
                                                        id="priceShoppe"
                                                        name="priceShoppe"
                                                        type="number"
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.priceShoppe}/>
                                                </Col>
                                                <Col md="6">
                                                    <label htmlFor="priceNDT">💴 Giá dự kiến {formik.touched.priceByDemo && formik.errors.priceByDemo
                                                            ? (
                                                                <Badge
                                                                    style={{
                                                                    color: "black"
                                                                }}
                                                                    color="danger">{formik.errors.priceByDemo}</Badge>
                                                            )
                                                            : null}</label>
                                                    <Input
                                                        id="priceByDemo"
                                                        name="priceByDemo"
                                                        type="number"
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.priceByDemo}/>
                                                </Col>
                                            </Row>

                                            <Button type="submit" color="success" className="animation-on-hover">🎆 SEND</Button>
                                        </FormGroup>
                                    </Col>
                                </form>

                            </CardBody>
                            <CardFooter></CardFooter>
                        </Card>
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    )
}

export default LazadaImportProducts
