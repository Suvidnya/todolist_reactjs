import React, { useState } from "react";

export const Addtodo = ({addtodo}) => {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) =>{
        e.preventDefault();
        if(!title || !desc){
            alert("Your title or description is empty");
        }
        addtodo(title,desc);

    }
  return (
    <div className='container my-3'>
    <form onSubmit={submit}>
    <div className="mb-3">
    <h3>Add a Todo</h3>
      <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
      <input type="text" className="form-control" value={title} onChange={(e)=> {setTitle(e.target.value)}} id="title" aria-describedby="emailHelp"/>
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
      <input type="text" className="form-control" value={desc} onChange={(e)=> {setDesc(e.target.value)}} id="desc"/>
    </div>
   
    <button type="submit" className="btn btn-sm btn-success">Add</button>
  </form>
  </div>
  );
};
