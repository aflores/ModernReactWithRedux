import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { checkFrn } from '../actions';

class FccCheck extends Component {
  componentDidMount() {

    const { id } = this.props.match.params;
    this.props.checkFrn(id);
  }

  renderLicInfo() {

    const frn = this.props.frn;

    if (!frn.status) {
      return <h3>Fetching Data...</h3>
    }

    if (frn.status === 'OK') {
      const lic = frn.Licenses.License[0];

      return <div> 
      <div>Callsign: {lic.callsign}</div>
      <div>Name: {lic.licName}</div>
      <div>Status: {lic.statusDesc}</div>
      <div>Expired: {lic.expiredDate}</div>
      <div>Category: {lic.categoryDesc}</div>
      <div>Details: <a href={lic.licDetailURL} target="fcc">FCC Site</a></div>
      </div>
    }
    return "No match, check frn or try again tomorrow"
  }

  render() {
    return (
      <div>
        <h2>FCC Information</h2>
        <div>{this.renderLicInfo()}
        </div>
      </div>)
  }
}

function mapStateToProps({ frn }) {
  return { frn }
}

export default connect(mapStateToProps, { checkFrn })(FccCheck);