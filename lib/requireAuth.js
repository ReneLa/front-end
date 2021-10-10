import React, { Component } from "react";
import Router from "next/router";
import { graphql } from "react-apollo";
import { CURRENT_USER_QUERY } from "../components/User";

export default WrappedComponent => {
  class RequireAuth extends Component {
    componentWillUpdate(nextProps, params) {
      if (!nextProps.data.loading && !nextProps.data.me) {
        Router.replace({ pathname: "/" });
      }
      Router.replace({ pathname: "/landlord/welcome" });
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return graphql(CURRENT_USER_QUERY)(RequireAuth);
};
