import React from 'react';
import './ContainerTitle.css';

export const ContainerTitle = (props) => {
  return (
      <div>
          <h1 className="title">{props.title}</h1>
          <h4 className="sub-title">{props.subTitle}</h4>
      </div>
  )
}