import React, { Component } from "react";
import Layout from "../components/Layout";
import Button from "../../examples/Button.js";

export default class tours extends Component {
  render() {
    return (
      <Layout>
        hello from tours page!!!!!
        <div>
          <Button big>First Button</Button>
          <Button color="red">Second Button</Button>
        </div>
      </Layout>
    );
  }
}
