import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const TopicList = (props) => {
  return (
    <div className="top-nav-bar__topic-list">
      {props.topics.map((topic, index) => 
        <TopicListItem key={topic.id} data={topic}/>
      )}
    </div>
  );
};

export default TopicList;