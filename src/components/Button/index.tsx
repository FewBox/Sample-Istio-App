import * as React from 'react';
import './style.scss';

export interface ButtonProps {
    onClick?: any;
}

export default class Button extends React.Component<ButtonProps, any> {
  render() {
    return (
      <div className="button" onClick={this.props.onClick}>
        {this.props.children}
      </div>
    );
  }
}
