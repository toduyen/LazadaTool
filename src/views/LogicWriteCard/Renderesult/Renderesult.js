import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    Col,
    CardTitle,
    Table
} from "reactstrap";
function Renderesult() {
    return (
        <Col md="12" lg="6">
            <Card className="card-plain">
                <CardHeader>
                    <CardTitle tag="h4">💡 render result</CardTitle>
                    <p className="category">Tùy kết quả mà sẽ có thông tin đầy đủ</p>
                </CardHeader>
                <CardBody>
                    <Col md="12">
                        <Card className="card-plain">
                            <CardHeader>
                                <CardTitle tag="h4">🧬 Result</CardTitle>
                            </CardHeader>
                            <CardBody>
                                <Table className="tablesorter">
                                    <thead className="text-primary">
                                        <tr>
                                            <th>Name</th>
                                            <th>Country</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Dakota Rice</td>
                                            <td>Niger</td>

                                        </tr>
                                        <tr>
                                            <td>Minerva Hooper</td>
                                            <td>Curaçao</td>

                                        </tr>
                                        <tr>
                                            <td>Sage Rodriguez</td>
                                            <td>Netherlands</td>

                                        </tr>
                                    </tbody>
                                </Table>
                            </CardBody>
                        </Card>
                    </Col>
                </CardBody>
            </Card>
        </Col>
    )
}

export default Renderesult