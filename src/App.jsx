import { useState, useEffect } from "react";
import "./App.css";
import styled from "styled-components";
import ToDoInput from "./components/ToDoInput/ToDoInput";
import ToDoItem from "./components/ToDoItem/ToDoItem";
import { API_LINK, DYNAMIC_API_LINK } from "./config/API";
import axios from "axios";
import { AnimatePresence } from "framer-motion";
import AnimationItem from "./components/animations/AnimationItem";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [notValid, setNotValid] = useState(false);
  const [status, setStatus] = useState("");
  useEffect(() => {
    axios
      .get(API_LINK)
      .then((res) => {
        setData(res.data);
      })
      .catch(() => setError(true));
  }, []);
  const getData = () => {
    axios
      .get(API_LINK)
      .then((res) => {
        setLoading(true);
        if (res) {
          setData(res.data);
          setLoading(false);
        }
      })
      .catch(() => setError(true));
  };
  const PostData = () => {
    if (inputValue != "") {
      axios
        .post(API_LINK, {
          text: inputValue,
        })
        .then(() => getData())
        .catch(() => setError(true));
      setStatus("Request sent successfully");
    } else {
      setNotValid(true);
      setStatus("Please enter a valid value");
    }
  };
  const deleteItem = (id) => {
    axios
      .delete(DYNAMIC_API_LINK(id))
      .then(() => {
        getData();
        setStatus("Item deleted successfully");
      })
      .catch(() => {
        setError(true);
        setStatus("The item could not be deleted");
      });
  };
  const postGetReset = () => {
    PostData();
    getData();
    setInputValue("");
  };
  return (
    <AppCointainer>
      <InputBox>
        <AnimationItem>
          <ToDoInput
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onSubmit={() => {
              postGetReset();
            }}
            isValid={notValid}
            onKeyDown={(e) =>
              e.key === "Enter" ? console.log("Enter") : console.log("null")
            }
            status={status}
          />
        </AnimationItem>
      </InputBox>
      <AddedToDos>
        {loading && <p>Loading...</p>}
        {error && <p>Error</p>}
        <AnimatePresence>
          {data &&
            data.map((item) => (
              <AnimationItem key={item.id}>
                <ToDoItem
                  id={item.id}
                  text={item.text}
                  onDelete={() => deleteItem(item.id)}
                  onUpdate={() => null}
                />
              </AnimationItem>
            ))}
        </AnimatePresence>
      </AddedToDos>
    </AppCointainer>
  );
}

const AppCointainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #4158d0;
  background-image: linear-gradient(
    43deg,
    #4158d0 0%,
    #c850c0 46%,
    #ffcc70 100%
  );
`;
const InputBox = styled.div`
  height: 30vh;
  margin: 50px;
  width: 50%;
`;
const AddedToDos = styled.div`
  min-height: 40vh;
  width: 50%;
  display: flex;
  flex-direction: column;
`;

export default App;
