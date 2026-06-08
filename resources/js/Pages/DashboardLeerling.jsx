import React, { useState } from "react";
import { Head, router } from "@inertiajs/react";

const logout = () => {
    router.post("/dashboard/logout");
};

// Het component ontvangt drie props van de server via Inertia:
// - auth: de ingelogde gebruiker
// - rijlessen: alle lessen van de leerling
// - stats: samenvattingscijfers (geplande lessen, afgerond, examen)
export default function Dashboard({ auth, rijlessen, stats }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

    // Filter alleen de geplande lessen uit de volledige lessenlijst.
    // We controleren op zowel "planned" (Engels) als "gepland" (Nederlands)
    // omdat de database beide waarden kan bevatten.
    // De || [] zorgt dat het altijd een array blijft als rijlessen undefined is
    const geplandeLessen =
        rijlessen?.filter(
            (les) =>
                les.status?.toLowerCase() === "planned" ||
                les.status?.toLowerCase() === "gepland",
        ) || [];

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row">
            <Head title="Leerling Dashboard" />
            {/* Profiel Modal Overlay */}
            {isProfileModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                    <div className="bg-white rounded-3xl shadow-xl w-full max-w-md overflow-hidden transform transition-all">
                        {/* Header van de modal */}
                        <div className="bg-[#10b981] p-6 text-white flex justify-between items-center">
                            <h3 className="text-xl font-bold">Mijn Gegevens</h3>
                            <button
                                onClick={() => setIsProfileModalOpen(false)}
                                className="text-2xl hover:text-emerald-200"
                            >
                                ✕
                            </button>
                        </div>

                        {/* Inhoud van de modal - Gegevens van inschrijving */}
                        <div className="p-6 space-y-4">
                            <div className="grid grid-cols-2 gap-4 border-b border-gray-50 pb-4">
                                <div>
                                    <p className="text-[10px] uppercase font-bold text-gray-400">
                                        Naam
                                    </p>
                                    <p className="text-gray-900 font-medium">
                                        {auth?.user?.first_name}{" "}
                                        {auth?.user?.last_name}
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <div>
                                    <p className="text-[10px] uppercase font-bold text-gray-400">
                                        Emailadres
                                    </p>
                                    <p className="text-gray-900 font-medium">
                                        {auth?.user?.email}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase font-bold text-gray-400">
                                        Adres
                                    </p>
                                    <p className="text-gray-900 font-medium">
                                        {auth?.user?.adress}
                                        <br />
                                        {auth?.user?.place_of_residence}
                                    </p>
                                </div>
                            </div>

                            <button
                                onClick={() => setIsProfileModalOpen(false)}
                                className="w-full mt-6 bg-gray-100 text-gray-600 py-3 rounded-xl font-bold hover:bg-gray-200 transition"
                            >
                                Sluiten
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Mobiele Header - Alleen zichtbaar op kleine schermen */}
            <div className="md:hidden bg-[#1a1a1a] text-white p-4 flex justify-between items-center">
                <span className="font-bold">
                    Easy Drive <span className="text-orange-500">4 </span> All
                </span>
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="p-2 outline-none"
                >
                    {isMenuOpen ? "✕" : "☰"}
                </button>
            </div>

            {/* Sidebar - Verbergt op mobiel tenzij menu open is */}
            <aside
                className={`${isMenuOpen ? "block" : "hidden"} md:block w-full md:w-64 bg-[#1a1a1a] text-white flex flex-col transition-all duration-300`}
            >
                <div className="hidden md:block p-6 text-2xl font-bold border-b border-gray-800">
                    Easy Drive <span className="text-orange-500">4 </span>All
                </div>
                <nav className="flex-1 p-4 space-y-2">
                    <div className="text-gray-500 text-xs font-bold uppercase mb-4 px-3">
                        Mijn Omgeving
                    </div>
                    <a
                        href="/dashboard"
                        className="flex items-center p-3 bg-gray-800 rounded-lg text-emerald-400"
                    >
                        <span className="mr-3">📊</span> Dashboard
                    </a>
                    <a
                        href="/dashboard/kalender"
                        className="flex items-center p-3 hover:bg-gray-800 rounded-lg transition text-gray-300"
                    >
                        <span className="mr-3">📅</span> Kalender
                    </a>
                </nav>
                <div className="p-6 border-t border-gray-800">
                    <button
                        className="flex items-center gap-2 text-gray-400 text-sm hover:text-red-500 transition outline-none"
                        onClick={logout}
                    >
                        Uitloggen
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col min-w-0">
                {/* Desktop Header - Verbergt op mobiel */}
                <header className="hidden md:flex bg-white p-4 justify-between items-center shadow-sm">
                    <div className="text-xl font-bold">Dashboard</div>
                    <div className="flex items-center gap-4">
                        <div
                            className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition"
                            onClick={() => setIsProfileModalOpen(true)}
                        >
                            <span className="w-8 h-8 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center font-bold text-sm">
                                {auth?.user?.first_name[0]}
                                {auth?.user?.last_name[0]}
                            </span>
                            <span className="text-gray-600 font-medium hidden sm:block">
                                {auth?.user?.first_name}
                            </span>
                        </div>
                        <button
                            className="text-gray-400 text-sm hover:text-red-500 transition"
                            onClick={logout}
                        >
                            Uitloggen
                        </button>
                    </div>
                </header>

                {/* Welkomstbalk - Tekst wordt kleiner op mobiel */}
                <div className="bg-[#10b981] text-white p-3 px-4 md:px-6 flex items-start md:items-center gap-2 text-sm md:text-base">
                    <span>📅</span>
                    <span>Welkom terug, {auth?.user?.first_name} {auth?.user?.last_name}!</span>
                </div>

                <div className="p-4 md:p-8 space-y-6 md:space-y-8">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                        Mijn lessen
                    </h2>

                    {/* Stats Grid - toont 3 statistieken naast elkaar.
                        De || "0" zorgt voor een fallback als de waarde nog niet beschikbaar is.
                        stats?.examen_datum gebruikt optional chaining zodat er geen fout ontstaat als stats leeg is. */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                        <StatCard
                            icon="📋"
                            title="Geplande lessen"
                            value={stats?.gepland || "0"}
                        />
                        <StatCard
                            icon="🚗"
                            title="Gevolgde lessen"
                            value={stats?.afgerond || "0"}
                        />
                        <StatCard
                            icon="🏁"
                            title="Examen"
                            value={stats?.examen_datum || "Nog niet gepland"}
                        />
                    </div>

                    {/* Tabel Sectie - Wordt scrollbaar op mobiel */}
                    <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
                        <div className="bg-[#10b981] p-4 text-white font-bold">
                            Aankomende lessen
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse min-w-150">
                                <thead className="bg-gray-50 text-gray-400 text-xs uppercase font-bold">
                                    <tr>
                                        <th className="px-4 md:px-6 py-4 text-nowrap">
                                            Datum
                                        </th>
                                        <th className="px-4 md:px-6 py-4 text-nowrap">
                                            Tijd
                                        </th>
                                        <th className="px-4 md:px-6 py-4 text-nowrap">
                                            Ophaaladres
                                        </th>
                                        <th className="px-4 md:px-6 py-4 text-nowrap">
                                            Instructeur
                                        </th>
                                        <th className="px-4 md:px-6 py-4 text-nowrap">
                                            Actie
                                        </th>
                                    </tr>
                                </thead>

                                <tbody className="divide-y divide-gray-100">
                                    {/* Conditional rendering: als er geplande lessen zijn, render een rij per les.
                                        Anders toon één rij met een melding over lege staat */}
                                    {geplandeLessen.length > 0 ? (
                                        geplandeLessen.map((les) => (
                                            <TableRow
                                                key={les.id}
                                                id={les.id}
                                                date={les.date}
                                                time={les.start_time}
                                                address={les.location}
                                                instructor={les.instructor_name}
                                            />
                                        ))
                                    ) : (
                                        <tr>
                                            <td
                                                colSpan="5"
                                                className="px-6 py-10 text-center text-gray-400 italic"
                                            >
                                                Je hebt momenteel geen lessen
                                                gepland staan.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
// ─────────────────────────────────────────────
// StatCard: herbruikbaar kaartje voor één statistiek.
// Ontvangt icon, title en value als props van het Dashboard.
// ─────────────────────────────────────────────
function StatCard({ icon, title, value }) {
    return (
        <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition">
            <div className="text-emerald-500 bg-emerald-50 w-10 h-10 flex items-center justify-center rounded-lg mb-4">
                {icon}
            </div>
            <h3 className="text-gray-400 text-[10px] md:text-xs font-bold uppercase tracking-widest">
                {title}
            </h3>
            <p className="text-2xl md:text-4xl font-bold text-gray-900 mt-1">
                {value}
            </p>
        </div>
    );
}

// ─────────────────────────────────────────────
// TableRow: één rij in de lessen-tabel.
// De "Bekijken"-knop navigeert naar de kalender en geeft via een query parameter (?selectedLesson=id)
// door welke les direct geselecteerd moet worden op de kalenderpagina.
// ─────────────────────────────────────────────
function TableRow({ id, date, time, address, instructor }) {
    return (
        <tr className="hover:bg-gray-50 transition">
            <td className="px-4 md:px-6 py-4 font-bold text-sm md:text-base">
                {date}
            </td>
            <td className="px-4 md:px-6 py-4 text-gray-600 text-sm md:text-base">
                {time}
            </td>
            <td className="px-4 md:px-6 py-4 text-gray-600 text-sm md:text-base">
                {address}
            </td>
            <td className="px-4 md:px-6 py-4 text-gray-600 text-sm md:text-base">
                {instructor}
            </td>
            <td className="px-4 md:px-6 py-4">
                <button
                    type="button"
                    onClick={() =>
                        router.visit(`/dashboard/kalender?selectedLesson=${id}`)
                    }
                    className="text-gray-300 text-xs italic border px-2 py-1 rounded hover:bg-orange-500 transition"
                >
                    Bekijken
                </button>
            </td>
        </tr>
    );
}
