import React, { Component } from 'react';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';

import {connect} from 'react-redux'

class Dashboard extends Component {
  render() {
    //console.log(this.props)
    const {projectler} = this.props
    console.log(projectler)
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projectPropu={projectler}/>
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    );
  }
}

// propsumuzun adı projectler. kafana göre isim verebilirsin 
// state rootreducerımıza erişiyor o yüzden projectx adı ordan geliyor
// projectReducerdakiArray ise state'teki projectx'in importunu aldığı yerdeki array
const mapStateToProps = (state) => {
  return {
    projectler: state.projectx.projectReducerdakiArray
  }
}
export default connect(mapStateToProps)(Dashboard)