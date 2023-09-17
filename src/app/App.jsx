import React from 'react';
import Accordion from "../components/Accordion";
import {data} from '../data';

export default function App() {

    console.log(data)
    return (
        <main className="u-wrapper">
            <Accordion data={data} />
        </main>

    );
};