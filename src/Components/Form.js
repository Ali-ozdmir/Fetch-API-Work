import React from "react";

function Form() {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");

  const handleOnChangeFirst = (e) => {
    setFirstName(e.target.value);
  };

  const handleOnChangeLast = (e) => {
    setLastName(e.target.value);
  };

  return (
    <div className="Form">
      <form>
        <label>
          First Name:
          <input
            className="input-box1"
            type="text"
            name="firstName"
            placeholder="Your Name"
            onChange={handleOnChangeFirst}
          />
        </label>

        <label>
          Lastname:
          <input
            className="input-box2"
            type="text"
            name="Your lastName"
            placeholder="your lastName"
            onChange={handleOnChangeLast}
          />
        </label>
      </form>

      <span>
        {firstName} {lastName}
      </span>
    </div>
  );
}

export default Form;
