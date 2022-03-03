import React from 'react'

const Error = ({ message }) => {
    return (
        <div className="bg-red-700 w-[220px] px-2 rounded-xl text-center">
            {message}
        </div>
    )
}

export default Error