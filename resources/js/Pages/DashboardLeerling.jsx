import React, { useState } from 'react';
import { Head, router } from '@inertiajs/react';

const logout = () => {
    router.post('/dashboard/logout');
}

export default function Dashboard({ auth, stats }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row">
            <Head title="Leerling Dashboard" />

            {/* Mobiele Header - Alleen zichtbaar op kleine schermen */}
            <div className="md:hidden bg-[#1a1a1a] text-white p-4 flex justify-between items-center">
                <span className="font-bold">Easy Drive 4 All</span>
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 outline-none">
                    {isMenuOpen ? '✕' : '☰'}
                </button>
            </div>

            {/* Sidebar - Verbergt op mobiel tenzij menu open is */}
            <aside className={`${isMenuOpen ? 'block' : 'hidden'} md:block w-full md:w-64 bg-[#1a1a1a] text-white flex flex-col transition-all duration-300`}>
                <div className="hidden md:block p-6 text-2xl font-bold border-b border-gray-800">
                    Easy Drive 4 All
                </div>
                <nav className="flex-1 p-4 space-y-2">
                    <div className="text-gray-500 text-xs font-bold uppercase mb-4 px-3">Mijn Omgeving</div>
                    <a href="#" className="flex items-center p-3 bg-gray-800 rounded-lg text-emerald-400">
                        <span className="mr-3">📊</span> Dashboard
                    </a>
                    <a href="#" className="flex items-center p-3 hover:bg-gray-800 rounded-lg transition text-gray-300">
                        <span className="mr-3">🚗</span> Mijn lessen
                    </a>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col min-w-0">
                {/* Desktop Header - Verbergt op mobiel */}
                <header className="hidden md:flex bg-white p-4 justify-between items-center shadow-sm">
                    <div className="text-xl font-bold">Dashboard</div>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <span className="w-8 h-8 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center font-bold text-sm">SB</span>
                            <span className="text-gray-600 font-medium">Sara Bakker</span>
                        </div>
                        <button className="text-gray-400 text-sm hover:text-red-500 transition" onClick={logout}>
                            Uitloggen
                        </button>
                    </div>
                </header>

                {/* Welkomstbalk - Tekst wordt kleiner op mobiel */}
                <div className="bg-[#10b981] text-white p-3 px-4 md:px-6 flex items-start md:items-center gap-2 text-sm md:text-base">
                    <span>📅</span> 
                    <span>Welkom terug, Sara — je volgende les is <strong>do 4 juni om 10:00</strong></span>
                </div>

                <div className="p-4 md:p-8 space-y-6 md:space-y-8">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-800">Mijn lessen</h2>

                    {/* Stats Grid - 1 kolom op mobiel, 3 op desktop */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                        <StatCard icon="📋" title="Geplande lessen" value="4" />
                        <StatCard icon="🚗" title="Gevolgde lessen" value="8" />
                        <StatCard icon="🏁" title="Examen" value="12 jul 2026" />
                    </div>

                    {/* Tabel Sectie - Wordt scrollbaar op mobiel */}
                    <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
                        <div className="bg-[#10b981] p-4 text-white font-bold">Aankomende lessen</div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse min-w-150">
                                <thead className="bg-gray-50 text-gray-400 text-xs uppercase font-bold">
                                    <tr>
                                        <th className="px-4 md:px-6 py-4 text-nowrap">Datum</th>
                                        <th className="px-4 md:px-6 py-4 text-nowrap">Tijd</th>
                                        <th className="px-4 md:px-6 py-4 text-nowrap">Ophaaladres</th>
                                        <th className="px-4 md:px-6 py-4 text-nowrap">Instructeur</th>
                                        <th className="px-4 md:px-6 py-4 text-nowrap">Actie</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    <TableRow date="Do 4 jun" time="10:00" address="Stationsweg 12" instructor="Jan de Vries" />
                                    <TableRow date="Ma 8 jun" time="14:00" address="Hoofdstraat 5" instructor="Jan de Vries" />
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

// Sub-componenten blijven hetzelfde, maar met flexibelere padding
function StatCard({ icon, title, value }) {
    return (
        <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition">
            <div className="text-emerald-500 bg-emerald-50 w-10 h-10 flex items-center justify-center rounded-lg mb-4">{icon}</div>
            <h3 className="text-gray-400 text-[10px] md:text-xs font-bold uppercase tracking-widest">{title}</h3>
            <p className="text-2xl md:text-4xl font-bold text-gray-900 mt-1">{value}</p>
        </div>
    );
}

function TableRow({ date, time, address, instructor }) {
    return (
        <tr className="hover:bg-gray-50 transition">
            <td className="px-4 md:px-6 py-4 font-bold text-sm md:text-base">{date}</td>
            <td className="px-4 md:px-6 py-4 text-gray-600 text-sm md:text-base">{time}</td>
            <td className="px-4 md:px-6 py-4 text-gray-600 text-sm md:text-base">{address}</td>
            <td className="px-4 md:px-6 py-4 text-gray-600 text-sm md:text-base">{instructor}</td>
            <td className="px-4 md:px-6 py-4">
                <button className="text-gray-300 text-xs italic border px-2 py-1 rounded">Wijzigen</button>
            </td>
        </tr>
    );
}