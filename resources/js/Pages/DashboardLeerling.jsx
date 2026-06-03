import React from 'react';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth, stats, lessons }) {
    return (
        <>
            <Head title="Leerling Dashboard" />

            <div className="py-12 bg-gray-50 min-h-screen">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    
                    {/* Welkomstbalk */}
                    <div className="bg-emerald-500 text-white p-4 rounded-lg flex items-center shadow-sm">
                        <span className="mr-2">📅</span>
                        <p>Welkom terug, {auth.user.first_name} — je volgende les is donderdag 4 juni om 10:00</p>
                    </div>

                    {/* Statistieken Tiles */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                            <div className="text-emerald-500 mb-2">📋</div>
                            <h3 className="text-gray-500 uppercase text-xs font-bold tracking-wider">Geplande lessen</h3>
                            <p className="text-4xl font-bold text-gray-900">4</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                            <div className="text-orange-400 mb-2">🚗</div>
                            <h3 className="text-gray-500 uppercase text-xs font-bold tracking-wider">Gevolgde lessen</h3>
                            <p className="text-4xl font-bold text-gray-900">8</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                            <div className="text-gray-400 mb-2">🏁</div>
                            <h3 className="text-gray-500 uppercase text-xs font-bold tracking-wider">Examen</h3>
                            <p className="text-2xl font-bold text-gray-900">12 jul 2026</p>
                        </div>
                    </div>

                    {/* Kalender & Aanstaande lessen sectie */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        
                        {/* Linker kolom: Aanstaande lessen tabel */}
                        <div className="lg:col-span-2 space-y-6">
                            <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
                                <div className="bg-emerald-500 p-4 text-white font-bold">
                                    Aankomende lessen
                                </div>
                                <table className="w-full text-left">
                                    <thead className="bg-gray-50 text-gray-500 text-sm uppercase">
                                        <tr>
                                            <th className="px-6 py-3">Datum</th>
                                            <th className="px-6 py-3">Tijd</th>
                                            <th className="px-6 py-3">Instructeur</th>
                                            <th className="px-6 py-3 text-right">Actie</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {/* Dit kun je later mappen met je 'lessons' data */}
                                        <tr>
                                            <td className="px-6 py-4 font-bold">Do 4 jun</td>
                                            <td className="px-6 py-4 text-gray-600">10:00</td>
                                            <td className="px-6 py-4 text-gray-600">Jan de Vries</td>
                                            <td className="px-6 py-4 text-right">
                                                <button className="text-gray-300 cursor-not-allowed text-sm">Wijzigen</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            {/* Opmerking sectie */}
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                                <h3 className="font-bold text-gray-800 mb-4 flex items-center">
                                    <span className="mr-2">💬</span> Opmerking bij les 4 jun
                                </h3>
                                <textarea 
                                    className="w-full border-gray-200 rounded-xl bg-gray-50 h-32 p-4 focus:ring-emerald-500 focus:border-emerald-500"
                                    placeholder="Schrijf hier een bericht voor je instructeur..."
                                ></textarea>
                                <button className="mt-4 bg-gray-100 text-gray-400 px-6 py-2 rounded-lg font-bold">Opslaan</button>
                            </div>
                        </div>

                        {/* Rechter kolom: Juni 2026 Kalender */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                             <div className="bg-emerald-500 p-4 text-white flex justify-between items-center">
                                <button>&lt;</button>
                                <span className="font-bold">Juni 2026</span>
                                <button>&gt;</button>
                             </div>
                             <div className="p-4">
                                {/* Hier komt je kalender grid (7 kolommen) */}
                                <div className="grid grid-cols-7 gap-1 text-center text-xs font-bold text-gray-400 mb-2">
                                    <span>Ma</span><span>Di</span><span>Wo</span><span>Do</span><span>Vr</span><span>Za</span><span>Zo</span>
                                </div>
                                <div className="grid grid-cols-7 gap-1 text-center">
                                    {/* Voorbeeld van dagen uit je foto */}
                                    <div className="p-2">1</div>
                                    <div className="p-2 bg-orange-500 text-white rounded-lg">2</div>
                                    <div className="p-2">3</div>
                                    <div className="p-2 bg-emerald-100 text-emerald-700 rounded-lg font-bold">4</div>
                                    {/* ... rest van de dagen */}
                                </div>
                                <div className="mt-6 flex gap-4 text-xs">
                                    <div className="flex items-center"><span className="w-3 h-3 bg-emerald-100 rounded mr-1"></span> Les gepland</div>
                                    <div className="flex items-center"><span className="w-3 h-3 bg-orange-500 rounded mr-1"></span> Vandaag</div>
                                </div>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}