import React, { useState } from "react";
import AddBounty from "./AddBounty";

const Bounty = (props) => {
    const { firstName, lastName, reward, _id } = props;
    const [editToggle, setEditToggle] = useState(false);

    const handleToggle = (e) => {
        e.preventDefault();
        return setEditToggle((prevToggle) => !prevToggle);
    };

    return (
        <div className="bounty">
            {!editToggle ? (
                <>
                    <h1>
                        Name: {firstName} {lastName}
                    </h1>
                    <h3>Reward: {reward} Berries</h3>
                    <button onClick={() => props.handleDelete(_id)}>
                        Delete
                    </button>
                    <button onClick={handleToggle}>Edit</button>
                </>
            ) : (
                <>
                    <AddBounty
                        firstName={firstName}
                        lastName={lastName}
                        reward={reward}
                        _id={_id}
                        btnText="Submit Edit"
                        handleToggle={handleToggle}
                        submit={props.handleEdit}
                    />
                    <button onClick={handleToggle}>Close</button>
                </>
            )}
        </div>
    );
};

export default Bounty;
