import React from "react";
// interface validate{
//   id:number,
//   name:string,
//   salary:number,
// }
interface Obj {
  emp: any;
  check: any;
}
const Child = ({ emp, check }: Obj) => {
  var data = emp;
  var check = check;
  console.log(data);

  return (
    <div>
      {data.map((value: any, i: number) => {
        return (
          <div key={i}>
            <h4>{value.id}</h4>
            <h2>{value.name}</h2>
            <p>{value.salary}</p>
            <button onClick={() => check(value)}>Check</button>
          </div>
        );
      })}
    </div>
  );
};

export default Child;
