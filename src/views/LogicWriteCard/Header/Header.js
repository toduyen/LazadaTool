import React from 'react'
import {
    CardHeader
} from "reactstrap";
function Header() {
    return (

        <CardHeader>
            <h5 className="title">🎫Đây là tính năng bóc tách dữ liệu giấy tờ tùy thân</h5>
            <p className="category">
                💡 Version 1.0.0{" "}
                <a href="/">WriteCard function</a>
            </p>
        </CardHeader>
    )
}

export default Header
