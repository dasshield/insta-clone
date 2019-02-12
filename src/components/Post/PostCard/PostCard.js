import React from "react";
import Spin from "antd/es/spin";
import Card from "antd/es/card";
import {Meta} from "antd/es/list/Item";
import Avatar from "antd/es/avatar";
import "./PostCard.css";

const PostCard = ({data}) => (
  data.isFetching
    ? <Spin tip="Loading..."/>
    : <div className="post-container">
      <div className="post-content">
        <img alt={data.post.description} src={data.post.urls.small}/>
      </div>
      <div className="post-content post-description">
        <Card className="post-user-card">
          <Meta
            avatar={<Avatar src="https://www.rabota.md/uploads/2017_09_08_13_14_52_logo.png"/>}
            title="ebsintegrator · Following"
          />
        </Card>
      </div>
    </div>
);

export default PostCard;
