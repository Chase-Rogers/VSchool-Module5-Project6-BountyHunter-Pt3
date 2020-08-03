import React, { useState } from "react";

const AddBounty = (props) => {
    const initInputs = {
        firstName: props.firstName || "",
        lastName: props.lastName || "",
        reward: props.reward || "",
    };
    const [inputs, setInputs] = useState(initInputs);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
    };

    // console.log(props)

    const handleSubmit = (e) => {
        e.preventDefault();
        props.submit(inputs, props._id);
        setInputs(initInputs);
    };
    return (
        <form
            className="form"
            onSubmit={(e) => {
                return props.handleToggle(e), handleSubmit(e);
            }}
        >
            <input
                type="text"
                name="firstName"
                value={inputs.firstName}
                onChange={handleChange}
                placeholder="First Name"
            />
            <input
                type="text"
                name="lastName"
                value={inputs.lastName}
                onChange={handleChange}
                placeholder="Last Name"
            />
            <input
                type="number"
                name="reward"
                value={inputs.reward}
                onChange={handleChange}
                placeholder="Reward"
            />
            <button>{props.btnText}</button>
        </form>
    );
};

export default AddBounty;
