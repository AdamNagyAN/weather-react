import React, { useState } from "react";

export function Form({ submit }) {
    const [loc, setLoc] = useState('');
    const handleChange = (e) => {
        setLoc(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!loc || loc === '') {
            return;
        }
        submit(loc);
    }
    return <form className="flex flex-col">
        <input type="text" onChange={(e) => handleChange(e)} value={loc} name="" id="" placeholder="City name" className="rounded-3xl py-2 my-10 px-5 text-black" />
        <button type="submit" onClick={handleSubmit} className="rounded-3xl bg-indigo-900 py-2 hover:bg-cyan-900 transition-all duration-200 uppercase font-bold">Search</button>
    </form>;
}
