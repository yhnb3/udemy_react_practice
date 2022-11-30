import { useState } from "react";

const Form = ({ handleData }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleNameInput = (e) => {
    const { value } = e.target;
    setName(value);
  };

  const handleAgeInput = (e) => {
    const { value } = e.target;
    setAge(value);
  };

  const onSubmitData = (e) => {
    e.preventDefault();
    handleData({ name, age });
  };

  return (
    <div>
      <form onSubmit={onSubmitData}>
        <input value={name} type="text" onChange={handleNameInput} />
        <input value={age} type="text" onChange={handleAgeInput} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Form;
