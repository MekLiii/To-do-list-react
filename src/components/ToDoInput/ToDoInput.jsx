import React from "react";
import styled from "styled-components";
import { ArrowForwardOutline } from "react-ionicons";
import AnimationNotValid from "../animations/AnimationNotValid";


function ToDoInput({ value, onChange, onSubmit, isValid, status = "" }) {
  return (
    <ToDoInputBox>
      <div>
        <p>Add some to do!</p>
      </div>
      <InuputIconBox>
        <AnimationNotValid isValid={isValid}>
          <Input value={value} onChange={onChange} />
        </AnimationNotValid>
        <ArrowForwardOutline
          color={"#ffcc70"}
          title={"Submit"}
          height="50px"
          width="50px"
          onClick={onSubmit}
          style={{ cursor: "pointer" }}
        />
      </InuputIconBox>
      <StatusBox>
        <P>{status}</P>
      </StatusBox>
    </ToDoInputBox>
  );
}
const ToDoInputBox = styled.div`
  width: 100%;
  height: 300px;
  background-image: linear-gradient(
    -43deg,
    #4158d0 0%,
    #c850c0 46%,
    #ffcc70 100%
  );
  -webkit-box-shadow: 0px 0px 61px -32px rgba(66, 68, 90, 1);
  -moz-box-shadow: 0px 0px 61px -32px rgba(66, 68, 90, 1);
  box-shadow: 0px 0px 61px -32px rgba(66, 68, 90, 1);
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Input = styled.input`
  width: 100%;
  height: 50px;
  border: none;
  outline: none;
  font-size: 30px;
`;
const InuputIconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const StatusBox = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const P = styled.p``;

export default ToDoInput;
