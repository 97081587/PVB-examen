import React from 'react';
import { Head } from '@inertiajs/react';

export default function Rijlessen() {
    return (
        <div>
            <Head title="Rijlessen" />
            <h1 className="font-bold text-xl text-gray-600">Rijlessen</h1>
            <p>Dit is de rijlessen pagina voor klanten.</p>
            <form>
                
                <label htmlFor="datum">Datum:</label>
                <input type="date" id="datum" name="datum" className="border border-gray-300 rounded px-2 py-1" />
                <label htmlFor="tijd">Tijd:</label>
                <input type="time" id="tijd" name="tijd" className="border border-gray-300 rounded px-2 py-1" />
                <label htmlFor="doel">Doel van de les:</label>
                <input type="text" id="doel" name="doel" className="border border-gray-300 rounded px-2 py-1" />
                <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded mt-4">Les plannen</button>

            </form>
        </div>
    );
}