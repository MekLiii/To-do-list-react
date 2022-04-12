import React, { useState, useRef } from "react";
import styled from "styled-components";
import { TrashOutline } from "react-ionicons";
import { Pencil } from "react-ionicons";
import axios from "axios";
  
function ToDoItem({ onDelete, id, text }) {
  const disabled = useRef(true);
  const [value, setValue] = useState(text);

  const upDate = (id) => {
    axios.put(`https://6250a93b977373573f408305.mockapi.io/todos/todos/${id}`, {
      text: value,
    });
  };
  const deleteItem = () => {
    onDelete();
  };
  return (
    <ToDoItemBox>
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        ref={disabled}
        autFocus
        disabled={true}
        onKeyUp={(e) => {
          e.key === "Enter" ? upDate(id) : null;
          e.key === "Enter"
            ? (disabled.current.disabled = !disabled.current.disabled)
            : null;
        }}
      />
      <Pencil
        color={"#00000"}
        title={"Update"}
        height="25px"
        width="25px"
        style={{ cursor: "pointer" }}
        onClick={() => {
          disabled.current.disabled = !disabled.current.disabled;
          disabled.current.focus();
        }}
      />
      <TrashOutline
        color={"#00000"}
        title={"Delete"}
        height="25px"
        width="25px"
        style={{ cursor: "pointer" }}
        onClick={deleteItem}
      />
    </ToDoItemBox>
  );
}
const ToDoItemBox = styled.div`
  width: 100%;
  height: 100px;
  background-image: linear-gradient(
    -43deg,
    #4158d0 0%,
    #c850c0 46%,
    #ffcc70 100%
  );
  border-radius: 5px;
  margin: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Input = styled.input`
  width: 80%;
  height: 50px;
  border: none;
  outline: none;
  &:disabled {
    background-color: none;
  }
  border-radius: 5px;
  text-align: center;
`;

export default ToDoItem;
