import { useState } from "react";

const JOBS = ["Doctor", "Engineer", "Nurse", "Pilot", "Singer"];

const SearchParams = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("0");
  const [jobs, setJobs] = useState("");

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
        </label>
        <label htmlFor="age">
          Age
          <input
            type="number"
            id="age"
            onChange={updateAge}
            value={age}
            placeholder="Age"
          />
        </label>
        <label htmlFor="job">
          Jobs
          <select
            id="jobs"
            onChange={(e) => setJobs(e.target.value)}
            onBlur={(e) => setJobs(e.target.value)}
            value={jobs}
          >
            <option />
            {JOBS.map((job) => (
              <option value={job} key={job}>
                {job}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
