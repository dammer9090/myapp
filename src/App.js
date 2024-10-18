import React, { useState } from "react";

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const changeHandler = (event) => {
    const { name, value } = event.target;

      setFormData({
        ...formData,
        [name]: value,
      });
  };

  function submitHandler(event) {
    event.preventDefault();
    console.log(formData);
    setFormData({
      name: "",
      email: "",
    });
  }
  

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={changeHandler} />
        </label>
<br/>

        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={changeHandler} />
        </label>
<br/>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default App;
