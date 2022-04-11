import "./App.css";
import Header from "./Mycomponents/header";
import Footer from "./Mycomponents/footer";
import { Todos } from "./Mycomponents/todos";
import React, { useState } from "react";
import { Addtodo } from "./Mycomponents/addtodo";

//parent component
function App() {
  const onDelete = (todo) => {
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };

  const addtodo = (title, desc) => {
    console.log("kar reya huu bhai");
    let sno;
    if (todos.lenght == 0) {
      sno = 1;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const mytodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    console.log(mytodo);
    setTodos([...todos, mytodo]);
  };

  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Going to market",
      desc: "Want to buy some chips and chocolates",
    },
    {
      sno: 2,
      title: "Visiting doctor",
      desc: "Visit doctor for dental checkup",
    },
    {
      sno: 3,
      title: "Hitting gym",
      desc: "Hit back and biceps today in the gym",
    },
  ]);
  return (
    <>
      <Header title="𝐒" />
      <Addtodo addtodo={addtodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
