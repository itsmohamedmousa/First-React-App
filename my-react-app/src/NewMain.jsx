import React, { memo } from "react";

function NewMain({ data, setData }) {

  const handleChange = (event) => {
    setData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div>
      <input
        name="username"
        placeholder="User name"
        value={data.userName}
        onChange={handleChange}
        type="text"
      />
      <br /><br />
      <input
        name="password"
        value={data.password}
        onChange={handleChange}
        placeholder="Password"
        type="password"
      />
    </div>
  );
}

export default memo(NewMain);
