import React from "react";
import "./ProfileHeader.css";
import Row from "antd/es/grid/row";
import Col from "antd/es/grid/col";
import Avatar from "antd/es/avatar";

const ProfileHeader = () => (
  <Row type="flex" justify="center" align="top">
    <Col span={4} offset={2}>
      <Avatar size={150} src="https://www.rabota.md/uploads/2017_09_08_13_14_52_logo.png"/>
    </Col>
    <Col span={16} offset={2}>
      <div className="header-summary">
        <h2>ebsintegrator</h2>
        <ul className="header-stats">
          <li><strong>48</strong> posts</li>
          <li><strong>113</strong> followers</li>
          <li><strong>130</strong> following</li>
        </ul>
      </div>

    </Col>
  </Row>
);

export default ProfileHeader;
