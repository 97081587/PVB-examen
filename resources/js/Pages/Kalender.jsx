import React, { useState } from "react";
import { Head, useForm, router } from "@inertiajs/react";

const logout = () => {
    router.post("/dashboard/logout");
};

export default function CalendarDashboard({ auth }) {
    const lessons = [
        {
            id: 1,
            date: "2026-06-02",
            time: "10:00",
            instructor: "John Doe",
            location: "123 Main St",
            status: "gepland",
            dayNum: 2,
            note: "Focus op parkeren",
        },
        {
            id: 2,
            date: "2026-06-05",
            time: "14:00",
            instructor: "Jane Smith",
            location: "456 Elm St",
            status: "gepland",
            dayNum: 5,
            note: "",
        },
        {
            id: 3,
            date: "2026-06-10",
            time: "09:00",
            instructor: "Bob Johnson",
            location: "789 Oak St",
            status: "gepland",
            dayNum: 10,
            note: "",
        },
        {
            id: 4,
            date: "2026-06-15",
            time: "16:00",
            instructor: "Alice Brown",
            location: "321 Pine St ",
            status: "gepland",
            dayNum: 15,
            note: "",
        },
        {
            id: 5,
            date: "2026-06-20",
            time: "11:00",
            instructor: "Charlie Green",
            location: "654 Cedar St",
            status: "gepland",
            dayNum: 20,
            note: "",
        },
    ];

    const [selectedLesson, setSelectedLesson] = useState(lessons[0]);

    const { data, setData, patch, processing } = useForm({
        note: selectedLesson.note || "",
    });

    const handleSelectLesson = (lesson) => {
        setSelectedLesson(lesson);
        setData("note", lesson.note);
    };

    const saveNote = (e) => {
        e.preventDefault();
        alert(
            `Notitie voor les op ${selectedLesson.date} opgeslagen: ${data.note}`,
        );
    };

    const cancelLesson = () => {
        if (
            confirm(
                `Weet je zeker dat je de les op ${selectedLesson.date} wilt annuleren?`,
            )
        ) {
            alert(`Les op ${selectedLesson.date} geannuleerd.`);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
            {/* Sidebar */}
            <aside className="md:block w-full md:w-64 bg-[#1a1a1a] text-white flex flex-col transition-all duration-300">
                <div className="hidden md:block p-6 text-2xl font-bold border-b border-gray-800">
                    Easy Drive 4 All
                </div>
                <nav className="flex-1 p-4 space-y-2">
                    <div className="text-gray-500 text-xs font-bold uppercase mb-4 px-3">
                        Mijn Omgeving
                    </div>
                    <a
                        href="/dashboard"
                        className="flex items-center p-3 hover:bg-gray-800 rounded-lg transition text-gray-300"
                    >
                        <span className="mr-3">📊</span> Dashboard
                    </a>
                    <a
                        href="#"
                        className="flex items-center p-3 hover:bg-gray-800 rounded-lg transition text-gray-300"
                    >
                        <span className="mr-3">🚗</span> Mijn lessen
                    </a>
                    <a
                        href="/kalender"
                        className="flex items-center p-3 bg-gray-800 rounded-lg text-emerald-400"
                    >
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
                            <span className="w-8 h-8 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center font-bold text-sm">
                                SB
                            </span>
                            <span className="text-gray-600 font-medium">
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

                {/* LINKERKOLOM: Kalender & Tabel */}
                <div className="space-y-6 p-6">
                    {/* Kalender */}
                    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="bg-[#10b981] p-4 text-center text-white font-bold">Juni 2026</div>
                        <div className="p-4 grid grid-cols-7 gap-1">
                            {['Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za', 'Zo'].map(d => <div key={d} className="text-center text-[10px] font-bold text-gray-300 uppercase">{d}</div>)}
                            {[...Array(30)].map((_, i) => {
                                const day = i + 1;
                                const lesson = lessons.find(l => l.dayNum === day);
                                return (
                                    <div 
                                        key={i} 
                                        onClick={() => lesson && handleSelectLesson(lesson)}
                                        className={`h-10 flex items-center justify-center rounded-lg text-sm font-bold cursor-pointer transition
                                            ${lesson ? 'bg-emerald-50 text-emerald-600 border border-emerald-100 hover:bg-emerald-100' : 'text-gray-400 hover:bg-gray-50'}
                                            ${selectedLesson?.dayNum === day ? 'ring-2 ring-emerald-500 ring-offset-2' : ''}
                                            ${day === 2 ? 'bg-orange-500 text-white shadow-md' : ''}
                                        `}
                                    >
                                        {day}
                                    </div>
                                );
                            })}
                        </div>

                        {/* 4. Legenda (zoals in je screenshot) */}
                        <div className="mt-8 pt-4 border-t border-gray-50 flex items-center gap-6 text-xs font-medium text-gray-500 px-4 pb-4">
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
            </main>
        </div>
    );
}
