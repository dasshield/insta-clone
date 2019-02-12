import React from "react";
import Col from "antd/es/grid/col";
import Row from "antd/es/grid/row";
import "./ImagesRow.css";
import {Link} from "react-router-dom";

const ImagesRow = ({images, rowKey}) => (
  <Row gutter={28} key={rowKey} className="images-row">
    {
      images.map((image, colKey) => (
        <Col span={8} key={colKey} className="image-wrapper">
          <Link
            to={{
              pathname: `/p/${image.id}`,
              state: {
                modal: true,
              },
            }}
          >
            <img alt={image.description} className="row-image" src={image.urls.small}/>
          </Link>
        </Col>
      ))
    }
  </Row>
);

export default ImagesRow;
