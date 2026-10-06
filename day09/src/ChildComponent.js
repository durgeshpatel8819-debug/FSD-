import React from 'react';

const ChildComponent = (props) => {
    console.log(props.username);

    return (
        <div style={{border:"2px solid black"}}>
            <h1>Name : {props.username}</h1>
            <h2>Email: {props.email}</h2>
            <h3>Section: {props.section}</h3>
            {props.isStudent ? <h2>Student</h2> : <h2>Not a Student</h2>}
        </div>
    );
};

export default ChildComponent;