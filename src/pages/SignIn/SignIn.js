import React, { useState } from "react";
import { Row, Col } from "antd";
import SigninForm from "./SignInForm";
import { get_payment_shop_info, login, logout } from '../../utils'


// const { networkId } = getConfig(process.env.NODE_ENV || 'development')


const Signin = (props) => {
  // const [inputFieldValue, setInputFiledValue] = useState({});

  const handleCall = async () => {
    const value = await get_payment_shop_info();
    // setInputFiledValue(value);
    console.log("value:", value)
  }

  // React.useEffect(
  //   () => {
  //     window.walletConnection.isSignedIn()
  //   }, [])
  // if (!window.walletConnection.isSignedIn()) {
  //   return (
  //     <button onClick={login}>Sign in</button>
  //   )
  // }
  return (
    <Row>
      {/* <button className="link" style={{ float: 'right' }} onClick={logout}>
        Sign out
      </button>
      {window.accountId}!
      <br />
  
      <button onClick={handleCall}>get payment shop</button> */}
      {/* <br />
      <input type="text" value={inputFieldValue}></input>
      <button onClick={pay(inputFieldValue)}>get payment id</button> */}



      <Col offset={4}></Col>
      <Col span={16} style={{ display: 'flex', justifyContent: "center", alignItems: 'center' }}>
        <SigninForm />
      </Col>
      <Col offset={4}></Col>
    </Row>
  );
};

export default Signin;
