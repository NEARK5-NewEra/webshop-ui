import React from "react";
import { Row, Col } from "antd";
import SigninForm from "./SignInForm";
import { login, logout } from '../../utils'

// const { networkId } = getConfig(process.env.NODE_ENV || 'development')


const Signin = (props) => {
  React.useEffect(
    () => {
      window.walletConnection.isSignedIn()
    }, [])
  if (!window.walletConnection.isSignedIn()) {
    return (
      <button onClick={login}>Sign in</button>
    )
  }
  return (
    <Row>
      <button className="link" style={{ float: 'right' }} onClick={logout}>
        Sign out
      </button>
      {window.accountId}!
      {/* <Col offset={4}></Col>
      <Col span={16} style={{ display: 'flex', justifyContent: "center", alignItems: 'center' }}>
        <SigninForm />
      </Col>
      <Col offset={4}></Col> */}
    </Row>
  );
};

export default Signin;
