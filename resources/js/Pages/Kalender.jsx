import React, { useState } from "react";
import { Head, router } from "@inertiajs/react";

const logout = () => {
    router.post('/dashboard/logout');
}

export default function CalendarDashboard({ auth }) {
    const daysInMonth = Array.from({ length: 30 }, (_, i) => i + 1);
    const today = 15;
    const plannedLessons = [5, 12, 19, 26];

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">

            {/* Sidebar (Zelfde stijl als screenshot) */}
             <aside className="md:block w-full md:w-64 bg-[#1a1a1a] text-white flex flex-col transition-all duration-300">
                <div className="hidden md:block p-6 text-2xl font-bold border-b border-gray-800">
                    Easy Drive 4 All
                </div>
                <nav className="flex-1 p-4 space-y-2">
                    <div className="text-gray-500 text-xs font-bold uppercase mb-4 px-3">Mijn Omgeving</div>
                    <a href="/dashboard" className="flex items-center p-3 hover:bg-gray-800 rounded-lg transition text-gray-300">
                        <span className="mr-3">📊</span> Dashboard
                    </a>
                    <a href="#" className="flex items-center p-3 hover:bg-gray-800 rounded-lg transition text-gray-300">
                        <span className="mr-3">🚗</span> Mijn lessen
                    </a>
                    <a href="/kalender" className="flex items-center p-3 bg-gray-800 rounded-lg text-emerald-400">
                        <span className="mr-3">📅</span> Kalender
                    </a>
                </nav>
            </aside>

            <main className="flex-1 ">
                <Head title="Kalender" />

                {/* Desktop Header - Verbergt op mobiel */}
                <header className="hidden md:flex bg-white p-4 justify-between items-center shadow-sm">
                    <div className="text-xl font-bold">Dashboard</div>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <span className="w-8 h-8 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center font-bold text-sm">SB</span>
                            <span className="text-gray-600 font-medium">{auth?.user?.first_name}</span>
                        </div>
                        <button className="text-gray-400 text-sm hover:text-red-500 transition" onClick={logout}>
                            Uitloggen
                        </button>
                    </div>
                </header>

                <div className="max-w-4xl mx-auto space-y-6">
                    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden max-w-md">
                        {/* 1. Groene Header */}
                        <div className="bg-[#10b981] p-4 flex justify-between items-center text-white font-bold">
                            <button className="hover:bg-white/20 w-8 h-8 rounded-lg transition">
                                ‹
                            </button>
                            <span className="text-lg">Juni 2026</span>
                            <button className="hover:bg-white/20 w-8 h-8 rounded-lg transition">
                                ›
                            </button>
                        </div>

                        <div className="p-6">
                            {/* 2. Dagen van de week */}
                            <div className="grid grid-cols-7 mb-4">
                                {["Ma", "Di", "Wo", "Do", "Vr", "Za", "Zo"].map(
                                    (day) => (
                                        <div
                                            key={day}
                                            className="text-center text-xs font-bold text-gray-400 py-2"
                                        >
                                            {day}
                                        </div>
                                    ),
                                )}
                            </div>

                            {/* 3. Het Grid met de dagen */}
                            <div className="grid grid-cols-7 gap-y-2">
                                {daysInMonth.map((day) => {
                                    const isToday = day === today;
                                    const isPlanned =
                                        plannedLessons.includes(day);

                                    return (
                                        <div
                                            key={day}
                                            className="flex justify-center items-center py-1"
                                        >
                                            <div
                                                className={`
                                    w-10 h-8 flex items-center justify-center rounded-lg font-bold text-sm transition
                                    ${isToday ? "bg-[#f97316] text-white shadow-md" : ""}
                                    ${isPlanned && !isToday ? "bg-[#ecfdf5] text-[#10b981]" : ""}
                                    ${!isToday && !isPlanned ? "text-gray-600 hover:bg-gray-50" : ""}
                                `}
                                            >
                                                {day}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* 4. Legenda (zoals in je screenshot) */}
                            <div className="mt-8 pt-4 border-t border-gray-50 flex items-center gap-6 text-xs font-medium text-gray-500">
                                <div className="flex items-center gap-2">
                                    <div className="w-4 h-4 bg-[#ecfdf5] rounded border border-emerald-100"></div>
                                    <span>Les gepland</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-4 h-4 bg-[#f97316] rounded shadow-sm"></div>
                                    <span>Vandaag</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
