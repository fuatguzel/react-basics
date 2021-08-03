import { useState } from "react";

const SearchParams = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("0");

  function updateName(e) {
    setName(e.target.value);
  }

  function updateAge(e) {
    setAge(e.target.value);
  }

  return (
    <div className="search-params">
      <form>
        <label htmlFor="name">
          Name
          <input
            id="name"
            onChange={updateName}
            value={name}
            placeholder="Name"
          />
          Age
          <input id="age" onChange={updateAge} value={age} placeholder="Age" />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
