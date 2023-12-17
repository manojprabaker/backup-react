import React, { useState } from "react";
import Child from "../Child/Child";

const Parent = () => {
  let employees = [
    { id: 11, name: "Abhinav", salary: 75000 },
    { id: 2131, name: "Gaurav", salary: 62000 },
    { id: 3012, name: "Raj", salary: 32000 },
  ];
  interface Obj {
    id: number;
    name: string;
    salary: number;
  }
  
  const [updateObj, setUpdateObj] = useState<Obj[]>([]);
  let checkSalary = (a: Obj) => {
    console.log(a);
    var x = employees.filter((det) => {
      return det.salary < a.salary;
    });
    console.log(x);
    setUpdateObj(x);
  }
  return (
    <div>
      <Child emp={employees}check={checkSalary}/> 
      {updateObj?.map((value:any,i:number) => {
        return (
          <div key={i}>
            <h2>{value.name}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default Parent;
