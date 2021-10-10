import React from 'react'
// reactstrap components
import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Table,
    Row,
    Col,
    Button
} from "reactstrap";
function LazadaListProducts() {
    return (
        <React.Fragment>
            <div className="content">
                <Row>
                    <Col md="12">
                        <Card className="card-plain">
                            <CardHeader>
                                <CardTitle tag="h4">Danh sách hàng đang có</CardTitle>
                                <p className="category">Các mặt hàng đang có trong shop theo thời gian thực</p>
                                <Button color="success" className="animation-on-hover">🔑 Export file excel</Button>
                            </CardHeader>
                            <CardBody>
                                <Table className="tablesorter" responsive>
                                    <thead className="text-primary">
                                        <tr>
                                            <th>STT</th>
                                            <th>Tên sản phẩm</th>
                                            <th>Số lượng</th>
                                            <th>Giá NDT</th>
                                            <th>% vận chuyển</th>
                                            <th>Giá VNĐ</th>
                                            <th>Giá Shoppe</th>
                                            <th>Giá bán dự kiến</th>
                                            <th>Doanh thu</th>
                                            <th>Trừ chi phí 10%</th>
                                            <th>Lợi nhuận sp</th>
                                            <th className="text-center">Lợi nhuận gộp</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Dakota Rice</td>
                                            <td>Niger</td>
                                            <td>Oud-Turnhout</td>
                                            <td>Dakota Rice</td>
                                            <td>Niger</td>
                                            <td>Oud-Turnhout</td>
                                            <td>Dakota Rice</td>
                                            <td>Niger</td>
                                            <td>Oud-Turnhout</td>
                                            
                                            <td>Dakota Rice</td>
                                            <td>Niger</td>
                                            <td className="text-center">$36,738</td>
                                        </tr>
                                        
                                    </tbody>
                                </Table>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    )
}

export default LazadaListProducts
