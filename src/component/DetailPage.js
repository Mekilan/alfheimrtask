import React, { useState } from "react";
import { Card } from "react-bootstrap";

class DetailPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            detailview: []
        };
    }
    componentDidMount(props) {
        debugger;
        const { detailview } = this.props;
        this.setState({ detailview });
    }
    render() {
        return (
            <div className="row">
                <div className="col-lg-5">
                    <Card className="card-lst">
                        <Card.Img
                            variant="top"
                            src=""
                            className="card-l-img"
                        />
                    </Card>
                </div>
                <div className="col-lg-6">
                </div>
            </div>
        )
    }
}

export default DetailPage;