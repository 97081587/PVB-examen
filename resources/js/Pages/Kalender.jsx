import React, { useState } from "react";
import { Head, useForm, router } from "@inertiajs/react";

const logout = () => {
    router.post("/dashboard/logout");
};

export default function CalendarDashboard({ auth, rijlessen }) {
    const lessons = rijlessen || [];
    const [selectedLesson, setSelectedLesson] = useState(lessons[0] || null);

    const { data, setData, patch, processing } = useForm({
        lessonobjective: selectedLesson?.lesson_goal || "",
        note: selectedLesson?.note || "",
    });

    const handleSelectLesson = (lesson) => {
        setSelectedLesson(lesson);
        setData("lessonobjective", lesson.lesson_goal || "");
    };

    const saveNote = (e) => {
        e.preventDefault();
        alert(
            `Lesdoelstelling voor les op ${selectedLesson.date} opgeslagen: ${data.lessonobjective}`,
        );
        patch(`/dashboard/kalender/${selectedLesson.id}/update-note`);
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
                    Easy Drive <span className="text-orange-500">4 </span>All
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

            <main className="flex-1">
                <Head title="Kalender" />

                {/* Desktop Header */}
                <header className="hidden md:flex bg-white p-4 justify-between items-center shadow-sm">
                    <div className="text-xl font-bold">Kalender</div>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <span className="w-8 h-8 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center font-bold text-sm">
                                {auth?.user?.first_name[0]}
                                {auth?.user?.last_name[0]}
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

                {/* DE GRID STRUCTUUR START HIER */}
                <div className="p-4 md:p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* LINKERKOLOM: Kalender en Tabel */}
                    <div className="space-y-6">
                        {/* Kalender */}
                        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                            <div className="bg-[#10b981] p-4 text-center text-white font-bold">
                                Juni 2026
                            </div>
                            <div className="p-4 grid grid-cols-7 gap-1">
                                {["Ma", "Di", "Wo", "Do", "Vr", "Za", "Zo"].map(
                                    (d) => (
                                        <div
                                            key={d}
                                            className="text-center text-[10px] font-bold text-gray-300 uppercase"
                                        >
                                            {d}
                                        </div>
                                    ),
                                )}
                                {[...Array(30)].map((_, i) => {
                                    const day = i + 1;
                                    const lesson = lessons.find(
                                        (l) => l.dayNum === day,
                                    );
                                    return (
                                        <div
                                            key={i}
                                            onClick={() =>
                                                lesson &&
                                                handleSelectLesson(lesson)
                                            }
                                            className={`h-10 flex items-center justify-center rounded-lg text-sm font-bold cursor-pointer transition
                                            ${lesson ? "bg-emerald-50 text-emerald-600 border border-emerald-100 hover:bg-emerald-100" : "text-gray-400 hover:bg-gray-50"}
                                            ${selectedLesson?.dayNum === day ? "ring-2 ring-emerald-500 ring-offset-2" : ""}
                                            ${day === 2 ? "bg-orange-500 text-white shadow-md" : ""}
                                        `}
                                        >
                                            {day}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Tabel */}
                        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                            <table className="w-full text-left">
                                <thead className="bg-gray-50 text-gray-400 uppercase font-bold">
                                    <tr>
                                        <th className="px-4 py-3 text-xs">
                                            Datum
                                        </th>
                                        <th className="px-4 py-3 text-xs">
                                            Status
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {lessons.map((lesson) => (
                                        <tr
                                            key={lesson.id}
                                            onClick={() =>
                                                handleSelectLesson(lesson)
                                            }
                                            className={`cursor-pointer transition ${selectedLesson?.id === lesson.id ? "bg-emerald-50" : "hover:bg-gray-50"}`}
                                        >
                                            <td className="px-6 py-4">
                                                <div className="font-bold">
                                                    {lesson.date}
                                                </div>
                                                <div className="text-xs text-gray-500">
                                                    {lesson.start_time} -{" "}
                                                    {lesson.instructor_name}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span
                                                    className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${lesson.status === "gepland" ? "bg-emerald-100 text-emerald-800" : "bg-gray-100 text-gray-800"}`}
                                                >
                                                    {lesson.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* RECHTERKOLOM: Lesdetails & Opmerkingen */}
                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900">
                                        Les Details
                                    </h3>
                                    <p className="text-gray-600 mt-1">
                                        {selectedLesson.date} om{" "}
                                        {selectedLesson.start_time}
                                    </p>
                                </div>
                                {selectedLesson.status === "gepland" && (
                                    <button
                                        onClick={cancelLesson}
                                        className="text-red-500 text-xs font-bold uppercase hover:underline"
                                    >
                                        Annuleer les
                                    </button>
                                )}
                            </div>

                            <div className="grid grid-cols-1 gap-4 mt-6 mb-8">
                                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl text-sm">
                                    <span className="text-lg">📍</span>
                                    <div>
                                        <p className="font-bold">Ophaaladres</p>
                                        <p className="text-gray-600">
                                            {selectedLesson.location}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl text-sm">
                                    <span className="text-lg">👨‍🏫</span>
                                    <div>
                                        <p className="font-bold">Instructeur</p>
                                        <p className="text-gray-600">
                                            {selectedLesson.instructor_name}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl text-sm">
                                    <span className="text-lg">🎯</span>
                                    <div>
                                        <p className="font-bold">
                                            Lesdoelstelling
                                        </p>
                                        <p className="text-gray-600">
                                            {selectedLesson.lesson_goal}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <form onSubmit={saveNote} className="space-y-4">
                                <label className="block text-[10px] font-bold uppercase text-gray-400">
                                    Opmerking bij deze les
                                </label>
                                <textarea
                                    className="w-full bg-gray-900 text-white rounded-2xl p-4 text-sm min-h-37.5 focus:ring-2 focus:ring-emerald-500 border-none placeholder-gray-500"
                                    placeholder="Schrijf hier een bericht voor je instructeur..."
                                    value={data.note}
                                    required
                                    onChange={(e) =>
                                        setData("note", e.target.value)
                                    }
                                />
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="w-full bg-emerald-500 text-white py-3 rounded-xl text-sm font-bold hover:bg-emerald-600 transition shadow-lg shadow-emerald-100 disabled:opacity-50"
                                >
                                    Opmerking opslaan
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
