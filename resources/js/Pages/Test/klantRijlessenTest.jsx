import React from 'react';
import { Head } from '@inertiajs/react';
import { useForm } from '@inertiajs/react';
import axios from 'axios';

export default function Rijlessen() {
    const fetchLes = (id) => {
    axios.post('/rijles/fetch', { id })
        .then((response) => {
            console.log(response.data);
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logica om de rijlesgegevens te verzenden naar de server
        rijlessen.post('/dashboard', rijlessen);
    }

    return (
        <div>
            <Head title="Rijlessen" />
            <h1 className="font-bold text-xl text-gray-600">Rijlessen</h1>
            <p>Dit is de rijlessen pagina voor klanten.</p>
            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                <label htmlFor="datum">Datum:</label>
                <input type="date" placeholder="Datum" id="datum" name="datum" className="border border-gray-300 rounded px-2 py-1" />
                <label htmlFor="tijd">Tijd:</label>
                <input type="time" placeholder="Tijd" id="tijd" name="tijd" className="border border-gray-300 rounded px-2 py-1" />
                <label htmlFor="eindtijd">Eindtijd:</label>
                <input type="time" placeholder="Eindtijd" id="eindtijd" name="eindtijd" className="border border-gray-300 rounded px-2 py-1" />
                <label htmlFor="locatie">Locatie:</label>
                <input type="text" placeholder="Locatie" id="locatie"  name="locatie" className="border border-gray-300 rounded px-2 py-1" />
                <label htmlFor="lesdoel">Lesdoel:</label>
                <input type="text" placeholder="Lesdoel" id="lesdoel" name="lesdoel" className="border border-gray-300 rounded px-2 py-1" />
                <label htmlFor="examen_informatie">Examen informatie:</label>
                <input type="text" placeholder="Examen informatie" id="examen_informatie" name="examen_informatie" className="border border-gray-300 rounded px-2 py-1" />
                <label htmlFor="lestegoed">Lestegoed:</label>
                <input type="number" placeholder="Lestegoed" id="lestegoed" name="lestegoed" className="border border-gray-300 rounded px-2 py-1" />
                <label htmlFor="instructeur">Instructeur:</label>
                <input type="text" placeholder="Instructeur" id="instructeur" name="instructeur" className="border border-gray-300 rounded px-2 py-1" />
                <label htmlFor="status">Status:</label>
                <select id="status" name="status" className="border border-gray-300 rounded px-2 py-1">
                    <option value="gepland">Gepland</option>
                    <option value="voltooid">Voltooid</option>
                    <option value="geannuleerd">Geannuleerd</option>
                </select>
                <label htmlFor="opmerkingen">Opmerkingen:</label>
                <textarea id="opmerkingen" name="opmerkingen" className="border border-gray-300 rounded px-2 py-1"></textarea>
                <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded mt-4">Les wijzigen</button>

            </form>
        </div>
    );
}