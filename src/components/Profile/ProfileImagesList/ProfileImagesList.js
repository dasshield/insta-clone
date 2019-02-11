import React, {Component} from "react";
import Row from "antd/es/grid/row";
import Col from "antd/es/grid/col";
import "./ProfileImagesList.css";

class ProfileImagesList extends Component {
  render() {
    return (
      <Row gutter={28}>
        <Col span={8}>
          <div className="col-xs-12 col-sm-6 col-md-4 p-y-15">
            <img className="img-responsive" src={"https://r.hswstatic.com/w_907/gif/tesla-cat.jpg"}/>
          </div>
        </Col>
        <Col span={8}>
          <div className="col-xs-12 col-sm-6 col-md-4 p-y-15">
            <img className="img-responsive" src={"https://r.hswstatic.com/w_907/gif/tesla-cat.jpg"}/>
          </div>
        </Col>
        <Col span={8}>
          <div className="col-xs-12 col-sm-6 col-md-4 p-y-15">
            <img className="img-responsive" src={"https://r.hswstatic.com/w_907/gif/tesla-cat.jpg"}/>
          </div>
        </Col>
      </Row>
    );
  }
}

export default ProfileImagesList;
