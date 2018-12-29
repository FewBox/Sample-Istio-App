import * as React from 'react';
import { MessageType } from '../../reducers/State';
import { message } from 'antd';
import './style.scss';
import {injectIntl} from 'react-intl';

export interface IMessage {
    type: MessageType;
    intlId: string;
    content?: string;
    isVisable: boolean;
    intl?: any;
    onClose: any;
}

class Message extends React.PureComponent<IMessage, any> {
  componentDidUpdate()
  {
    if(this.props.isVisable)
    {
      message.destroy();
      let duration = 3;
      let messageContent;
      if(this.props.content){
        messageContent = this.props.content;
      }
      else{
        messageContent = this.props.intl.formatMessage({id:this.props.intlId});
      }
      switch(this.props.type)
      {
          case MessageType.Error:
            message.error(messageContent, duration, this.props.onClose);
            break;
          case MessageType.Info:
            message.info(messageContent, duration, this.props.onClose);
            break;
          case MessageType.Loading:
            message.loading(messageContent, 0, this.props.onClose);
            break;
          case MessageType.Success:
            message.success(messageContent, duration, this.props.onClose);
            break;
          case MessageType.Warning:
            message.warning(messageContent, duration, this.props.onClose);
            break;
          default:
            break;
        }
    }
    else
    {
      message.destroy();
    }
  }
  public render() {
    return (
      <div className="notification">
      </div>
    );
  }
}

export default injectIntl(Message);