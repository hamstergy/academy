
import React from "react";
import { geolocated, geoPropTypes } from "react-geolocated";

class Demo extends React.Component {
    render() {
        if (this.props.coords) {
            localStorage.setItem('latitude', this.props.coords.latitude);
            localStorage.setItem('longitude', this.props.coords.longitude);
        }
        return true;
    }
  }
  Demo.propTypes = Object.assign({}, Demo.propTypes, geoPropTypes);

  export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
  })(Demo);
  