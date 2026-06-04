import React from 'react';
import { Head } from '@inertiajs/react';
import { useForm } from '@inertiajs/react';
import axios from '@inertiajs/axios';

export default function Rijlessen() {
    const { data, setData } = useForm({
        datum: '',
        tijd: '',
        eindtijd: '',
        locatie: '',
        lesdoel: '',
        examen_informatie: '',
        lestegoed: '',
        instructeur: '',
        status: '',
        opmerkingen: '',
    });

        useEffect(() => {
        axios.get('/rijles/1')
            .then((response) => {
                setData({
                    datum: response.data.datum,
                    tijd: response.data.tijd,
                    eindtijd: response.data.eindtijd,
                    locatie: response.data.locatie,
                    lesdoel: response.data.lesdoel,
                    examen_informatie: response.data.examen_informatie,
                    lestegoed: response.data.lestegoed,
                    instructeur: response.data.instructeur,
                    status: response.data.status,
                    opmerkingen: response.data.opmerkingen,
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <div>
            <Head title="Rijlessen" />
            <h1 className="font-bold text-xl text-gray-600">Rijlessen</h1>
            <p>Dit is de rijlessen pagina voor klanten.</p>
            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                <label htmlFor="datum">Datum:</label>
                <input  type="date"
                value={data.datum}
                onChange={(e) => setData('datum', e.target.value)} />
                <label htmlFor="tijd">Tijd:</label>
                <input type="time" 
                value={data.tijd}
                onChange={(e) => setData('tijd', e.target.value)} 
                className="border border-gray-300 rounded px-2 py-1" />
                <label htmlFor="eindtijd">Eindtijd:</label>
                <input type="time" 
                value={data.eindtijd}
                onChange={(e) => setData('eindtijd', e.target.value)} 
                 className="border border-gray-300 rounded px-2 py-1" />
                <label htmlFor="locatie">Locatie:</label>
                <input 
                    type="text"
                    value={data.locatie}
                    onChange={(e) => setData('locatie', e.target.value)}
                    className="border border-gray-300 rounded px-2 py-1"
                />
                <label htmlFor="lesdoel">Lesdoel:</label>
                <input type="text" 
                    value={data.lesdoel}
                    onChange={(e) => setData('lesdoel', e.target.value)}
                    className="border border-gray-300 rounded px-2 py-1"
                />
                <label htmlFor="examen_informatie">Examen informatie:</label>
                <input type="text" 
                    value={data.examen_informatie}
                    onChange={(e) => setData('examen_informatie', e.target.value)}
                    className="border border-gray-300 rounded px-2 py-1"
                />
                <label htmlFor="lestegoed">Lestegoed:</label>
                <input type="number" 
                    value={data.lestegoed}
                    onChange={(e) => setData('lestegoed', e.target.value)}
                    className="border border-gray-300 rounded px-2 py-1"
                />
                <label htmlFor="instructeur">Instructeur:</label>
                <input type="text" 
                    value={data.instructeur}
                    onChange={(e) => setData('instructeur', e.target.value)}
                    className="border border-gray-300 rounded px-2 py-1"
                />
                <label htmlFor="status">Status:</label>
                <select id="status" name="status" 
                    value={data.status}
                    onChange={(e) => setData('status', e.target.value)}
                    className="border border-gray-300 rounded px-2 py-1"
                >
                    <option value="gepland">Gepland</option>
                    <option value="voltooid">Voltooid</option>
                    <option value="geannuleerd">Geannuleerd</option>
                </select>
                <label htmlFor="opmerkingen">Opmerkingen:</label>
                <textarea id="opmerkingen" name="opmerkingen" 
                    value={data.opmerkingen}
                    onChange={(e) => setData('opmerkingen', e.target.value)}
                    className="border border-gray-300 rounded px-2 py-1"
                ></textarea>
                <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded mt-4">Les wijzigen</button>

            </form>
        </div>
    );
}