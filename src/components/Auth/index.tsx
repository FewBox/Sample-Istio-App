import * as React from 'react';
import { connect } from 'react-redux';
import { autobind } from 'core-decorators';
import { Store } from '../../reducers/State';
import { withRouter } from 'react-router-dom';
import { clearPath } from '../../actions';

export interface AuthProps {
    path: string;
    history: any;
    clearPath: any;
}

class Auth extends React.Component<AuthProps, any> {
  constructor(props) {
    super(props);
  }
  @autobind
  redirect()
  {
    if(this.props.path)
    {
      this.props.history.push(this.props.path);
      this.props.clearPath();
    }
  }
  public render() {
    this.redirect();
    return (
      <div>
      </div>
    );
  }
}

const mapStateToProps = ({master}: Store) => ({
    path: master.path
});

const mapDispatchToProps = {
  clearPath
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Auth));