import React, { useEffect } from 'react';
import { Head } from '@inertiajs/react';
import { useForm } from '@inertiajs/react';
import axios from '@inertiajs/axios';

export default function Rijlessen() {
    const { data, setData } = useForm({
        date: '',
        start_time: '',
        end_time: '',
        location: '',
        lesson_goal: '',
        exam_info: '',
        lesson_funds: '',
        instructor_name: '',
        status: '',
        note: '',
    });

    useEffect(() => {
        axios.get('/dashboard/rijlessen/1')
            .then((response) => {
                // API returns english field names from the model/migration
                console.log('rijles response:', response.data);
                setData({
                    date: response.data.date || '',
                    start_time: response.data.start_time || '',
                    end_time: response.data.end_time || '',
                    location: response.data.location || '',
                    lesson_goal: response.data.lesson_goal || '',
                    exam_info: response.data.exam_info || '',
                    lesson_funds: response.data.lesson_funds || '',
                    instructor_name: response.data.instructor_name || '',
                    status: response.data.status || '',
                    note: response.data.note || '',
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <div>
            <Head title="Rijlessen" />
            <h1 className="font-bold text-xl text-gray-600">Rijlessen</h1>
            <p>Dit is de rijlessen pagina voor klanten.</p>
            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                <label htmlFor="date">Datum:</label>
                <input type="date"
                    value={data.date}
                    onChange={(e) => setData('date', e.target.value)} />

                <label htmlFor="start_time">Tijd:</label>
                <input type="time"
                    value={data.start_time}
                    onChange={(e) => setData('start_time', e.target.value)}
                    className="border border-gray-300 rounded px-2 py-1" />

                <label htmlFor="end_time">Eindtijd:</label>
                <input type="time"
                    value={data.end_time}
                    onChange={(e) => setData('end_time', e.target.value)}
                    className="border border-gray-300 rounded px-2 py-1" />

                <label htmlFor="location">Locatie:</label>
                <input
                    type="text"
                    value={data.location}
                    onChange={(e) => setData('location', e.target.value)}
                    className="border border-gray-300 rounded px-2 py-1"
                />

                <label htmlFor="lesson_goal">Lesdoel:</label>
                <input type="text"
                    value={data.lesson_goal}
                    onChange={(e) => setData('lesson_goal', e.target.value)}
                    className="border border-gray-300 rounded px-2 py-1"
                />

                <label htmlFor="exam_info">Examen informatie:</label>
                <input type="text"
                    value={data.exam_info}
                    onChange={(e) => setData('exam_info', e.target.value)}
                    className="border border-gray-300 rounded px-2 py-1"
                />

                <label htmlFor="lesson_funds">Lestegoed:</label>
                <input type="number"
                    value={data.lesson_funds}
                    onChange={(e) => setData('lesson_funds', e.target.value)}
                    className="border border-gray-300 rounded px-2 py-1"
                />

                <label htmlFor="instructor_name">Instructeur:</label>
                <input type="text"
                    value={data.instructor_name}
                    onChange={(e) => setData('instructor_name', e.target.value)}
                    className="border border-gray-300 rounded px-2 py-1"
                />

                <label htmlFor="status">Status:</label>
                <select id="status" name="status"
                    value={data.status}
                    onChange={(e) => setData('status', e.target.value)}
                    className="border border-gray-300 rounded px-2 py-1"
                >
                    <option value="gepland">Gepland</option>
                    <option value="afgerond">Afgerond</option>
                    <option value="geannuleerd">Geannuleerd</option>
                </select>

                <label htmlFor="note">Opmerkingen:</label>
                <textarea id="note" name="note"
                    value={data.note}
                    onChange={(e) => setData('note', e.target.value)}
                    className="border border-gray-300 rounded px-2 py-1"
                ></textarea>
                <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded mt-4">Les wijzigen</button>

            </form>
        </div>
    );
}