import React from 'react';
import './Student.css'

const Student = ({ func }) => {
    return (
        <>
            <button
                onClick={

                    // Arrow function syntax for passing function as a prop
                    () => func("Samiullah")
                }
            >
                Send Data</button>
        </>
    )
}

export default Student