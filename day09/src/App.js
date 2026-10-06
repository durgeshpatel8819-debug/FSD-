import React from 'react';
import ChildComponent from './ChildComponent';

const App = () => {
    const user = [
        {
            username: "gaurav",
            email: "gaurav@example.com",
            section: "cse-19"
        },
        {
            username: "xyz",
            email: "xyz@example.com",
            section: "cse-20"
        }
    ];

    return (
        <div style={{ textAlign: 'center' }}>
            <ChildComponent {...user[0]} isStudent={false} />
            <ChildComponent {...user[1]} section="cse-20" isStudent={true} />
        </div>
    );
};

export default App;