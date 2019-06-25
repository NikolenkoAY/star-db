import Spinner from "../spinner";
import React, { Component } from "react";

const withData = View => {
  return class extends Component {
    state = {
      data: null
    };

    componentDidUpdate(prevProps) {
      if (this.props.getData !== prevProps.getData) {
        this.update();
      }
    }

    componentDidMount() {
      this.update();
    }

    update() {
      this.props.getData().then(data => {
        this.setState({
          data
        });
      });
    }

    render() {
      const { data } = this.state;
      if (!data) {
        return <Spinner />;
      }

      return <View data={data} {...this.props} />;
    }
  };
};

export default withData;
