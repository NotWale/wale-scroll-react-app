import React from "react";
import { useState } from "react";
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  FormLabels,
  FormDrop,
  FormP,
  TopP,
} from "./TipsElements";

const Tips = () => {
  const [amount, setAmount] = useState(0);
  const [curamount, setCurAmount] = useState(0);
  const [coin, setCoin] = useState("");
  const [curCoin, setCurCoin] = useState("XMR");

  const theCoin = (e) => {
    setCurCoin(e.target.value);
    console.log("current coin: " + curCoin);
  };

  const handleChange = (e) => {
    setCurAmount(e.target.value);
  };

  const changeAmount = () => {
    console.log("cur: " + curamount + " amount: " + amount);
    if (curamount >= amount) {
      console.log("HIGHER!");
      if (curamount.match(/\d/)) {
        setAmount(curamount);
        setCoin(curCoin);
      }
    }
  };

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">Dev</Icon>
          <TopP>
            Today's top Donation: {amount} {coin}
          </TopP>
          <FormContent>
            <Form action="#">
              <FormH1>Send me a Tip!</FormH1>
              <FormP>Note: This doesn't actually send me any money :/</FormP>
              <FormLabels>
                <FormLabel htmlFor="for">Amount</FormLabel>
                <FormLabel>Coin</FormLabel>
              </FormLabels>
              <FormLabels>
                <FormInput
                  step="1"
                  value={curamount}
                  onChange={handleChange}
                  type="number"
                  required
                />
                <FormDrop onChange={theCoin}>
                  <option value="XMR">XMR</option>
                  <option value="BCH">BCH</option>
                  <option value="ARR">ARR</option>
                </FormDrop>
              </FormLabels>
              <FormButton onClick={changeAmount} type="submit">
                Send
              </FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default Tips;
