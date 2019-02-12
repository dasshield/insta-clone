import React from "react";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import Tabs from "antd/es/tabs";
import Icon from "antd/es/icon";
import "./Profile.css";
import ProfileImagesList from "./ProfileImagesList/ProfileImagesList";

const TabPane = Tabs.TabPane;

const Profile = () => (
  <div>
    <ProfileHeader/>
    <Tabs className="profile-tabs" tabPosition="bottom">
      <TabPane tab={<span color="#282c34"><Icon type="table"/>Posts</span>} key="1"/>
      <TabPane tab={<span color="#282c34"><Icon type="solution"/>Tagged</span>} key="2"/>
    </Tabs>
    <ProfileImagesList/>
  </div>
);

export default Profile;
