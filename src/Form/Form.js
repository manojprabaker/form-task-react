// import React from "react";
// import { useState } from "react";
import React, { useState } from "react";
function Form() {
  //   const formTask = () => {
  //     const [name, setName] = useState("");
  //     const [age, setAge] = useState("");
  //     const [license, setLicense] = useState(false);
  //     const [task, setTask] = useState([]);

  //         const ChangeInput = (e) =>{
  //             console.log(e.target.value);
  //             if(e.target.name=="name")
  //             {
  //                 setName(e.target.value);
  //             }
  //             else if(e.target.age=="age")
  //             {
  //                 setAge(e.target.value);
  //             }
  //             else{
  //                 setLicense(e.target.checked);
  //             }
  //         }
  //         const handleSubmit =(e)=>{
  //             e.preventDefault();
  //             const newTask={
  //                 name:name,
  //                 age:age,
  //                 license:license,
  //             }
  //             setTask([...task,newTask])
  //         }
  //   };
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [license, setLicense] = useState(false);
  const [task, setTask] = useState([]);
  const handle = (e) => {
    if (e.target.name == "name") {
      setName(e.target.value);
    } else if (e.target.name == "age") {
      setAge(e.target.value);
    } else {
      setLicense(e.target.checked);
    }
    
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let newData = {
      name: name,
      age: age,
      license: license,
    };
    setTask([...task, newData]);
    console.log(newData);
    console.log(task);
  };
const deleteData= (name)=>{
  console.log(name);
  let dt = task.filter((d) => d.name != name);
  console.log(dt);
  setTask(dt);
 
}
  return (
    <div>
      Form
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Enter your Name"
            name="name"
            onChange={handle}
          ></input>
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter your Age"
            name="age"
            onChange={handle}
          ></input>
        </div>
        <div>
          <input type="checkbox" name="check" onChange={handle}></input >
          <label> I'm Having Driving License</label>
        </div>
        <div>
          <input type="submit" value="Submit"></input>
        </div>
      </form>
      <div>
        Data
        {task.map((e, i) => {
          return (
            <div key={i}>
              <h1>Name:{e.name}</h1>
              <h1>Age: {e.age}</h1>
              <h3>Having License : {e.license?"Yes":"No"}</h3>
              <h3><button onClick={() => deleteData(e.name)}>Delete</button></h3>
            </div>
          );
        })}
        {/* {task.map((item,index)=>{
            return(
                <div>
                 <div key={index}>
                <h1> {item.name}</h1>
                <h1> {item.age}</h1>
                <h3>Having License {item.status ? "Having Drivers License" :"Not Having Drivers License"}</h3>
                </div>
            ) 
                </div>
            })
            } */}
      </div>
    </div>
  );
}

export default Form;
