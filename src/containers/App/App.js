import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


// Actions
import * as DrawerActions from '../../actions/drawer';

import './App.css';

import { Routes } from '../../Routes';

import Drawer from 'material-ui/Drawer/Drawer';
import Toolbar from 'material-ui/Toolbar/Toolbar';
import AppBar from 'material-ui/AppBar/AppBar';

class App extends Component {
  constructor(props) {
    super(props)
  }

  toggleDrawer(e) {
    this.props.actions.toggleDrawer(this.props.drawer.open);
  }

  componentWillMount() {
    console.log(this.props)
  }
  
  render() {
    return (
      <div className={`${this.props.drawer.open ? 'drawer-open': ''}`}>
        <Drawer 
        open={this.props.drawer.open} 
        docked={window.innerWidth > 768 ? true : false}
        containerClassName="mainDrawer"
        onRequestChange={(open) => this.props.actions.toggleDrawer(!open)}>
          
        </Drawer>
        <AppBar 
        title="Dream Sea" 
        className="navToolbar" 
        onLeftIconButtonClick={e => this.toggleDrawer(e)}
        showMenuIconButton={this.props.auth.isAuthenticated}/>
        <div className={"bodyWrapper"}>
          <Routes />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    drawer: state.drawer,
    auth: state.auth,
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(Object.assign({}, DrawerActions), dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);