import React, { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  const [data, setData] = useState([]);

  const handleData = ({ name, age }) => {
    const id = data.length + Math.random();
    setData((prev) => [...prev, { name, age, id }]);
  };

  return (
    <div>
      <Form handleData={handleData} />
      <List data={data} />
    </div>
  );
}

export default App;
