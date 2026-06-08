import React, { useState } from "react";
import { Head, useForm, router } from "@inertiajs/react";

const logout = () => {
    router.post("/dashboard/logout");
};

export default function CalendarDashboard({ auth, rijlessen }) {
    const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
    const lessons = rijlessen || [];
    const [selectedLesson, setSelectedLesson] = useState(lessons[0] || {});
    const [isEditingLocation, setIsEditingLocation] = useState(false);
    const [showCancelModal, setShowCancelModal] = useState(false);
    const [tempLocation, setTempLocation] = useState(
        selectedLesson.location || "",
    );
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const { data, setData, patch, processing, reset } = useForm({
        lessonobjective: selectedLesson?.lesson_goal || "",
        note: selectedLesson?.note || "",
        status: "",
        cancel_reason: "",
    });

    const handleSelectLesson = (lesson) => {
        setSelectedLesson(lesson);
        setData("note", lesson.note || "");
        setTempLocation(lesson.location || "");
        setIsEditingLocation(false);
    };

    const saveNote = (e) => {
        e.preventDefault();
        alert(
            `Opmerking voor les op ${selectedLesson.date} opgeslagen: ${data.note}`,
        );
        patch(
            `/dashboard/kalender/${selectedLesson.id}/update-note`,
            setSelectedLesson({
                ...selectedLesson,
                note: data.note,
            }),
        );
    };

    // const cancelLesson = () => {
    //     if (
    //         confirm(
    //             `Weet je zeker dat je de les op ${selectedLesson.date} wilt annuleren?`,
    //         )
    //     ) {
    //         router.patch(
    //             `/dashboard/kalender/${selectedLesson.id}/update-status`,
    //             {
    //                 status: "geannuleerd",
    //             },
    //             {
    //                 onSuccess: () => {
    //                     alert(`Les op ${selectedLesson.date} geannuleerd.`);
    //                 },
    //                 onError: () => {
    //                     alert(
    //                         `Er is een fout opgetreden bij het annuleren van de les op ${selectedLesson.date}. Probeer het opnieuw.`,
    //                     );
    //                 },
    //             },
    //         );
    //     }
    // };

    const updateLocation = () => {
        router.patch(
            `/dashboard/kalender/${selectedLesson.id}/update-location`,
            {
                location: tempLocation,
            },
            {
                onSuccess: () => {
                    setIsEditingLocation(false);
                    setSelectedLesson({
                        ...selectedLesson,
                        location: tempLocation,
                    });
                    alert("Ophaaladres succesvol gewijzigd");
                },
                preserveScroll: true,
            },
        );
    };

    const today = new Date();
    const currentDay = today.getDate();
    const currentMonth = today.getMonth() + 1;
    const currentYear = today.getFullYear();

    const todayString = `${currentYear}-${String(currentMonth).padStart(2, "0")}-${String(currentDay).padStart(2, "0")}`;

    const handleOpenModal = () => {
        setShowCancelModal(true);
    };

    const handleCancelSubmit = (e) => {
        e.preventDefault();

        setData("status", "geannuleerd");

        patch(`/dashboard/kalender/${selectedLesson.id}/cancel`, {
            onSuccess: () => {
                setShowCancelModal(false);
                reset();
            },
        });
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
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
                    Easy Drive <span className="text-orange-500">4 </span>All
                </span>
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="p-2 outline-none"
                >
                    {isMenuOpen ? "✕" : "☰"}
                </button>
            </div>
            {/* Sidebar */}
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
                        className="flex items-center p-3 hover:bg-gray-800 rounded-lg transition text-gray-300"
                    >
                        <span className="mr-3">📊</span> Dashboard
                    </a>
                    <a
                        href="/dashboard/kalender"
                        className="flex items-center p-3 bg-gray-800 rounded-lg text-emerald-400"
                    >
                        <span className="mr-3">📅</span> Kalender
                    </a>
                    <button
                        className="text-gray-400 text-sm hover:text-red-500 transition"
                        onClick={logout}
                    >
                        Uitloggen
                    </button>
                </nav>
            </aside>

            <main className="flex-1">
                <Head title="Kalender" />

                {/* Desktop Header */}
                <header className="hidden md:flex bg-white p-4 justify-between items-center shadow-sm">
                    <div className="text-xl font-bold">Kalender</div>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <span
                                onClick={() => setIsProfileModalOpen(true)}
                                className="w-8 h-8 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center font-bold text-sm"
                            >
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
                                    const dayToMatch = `${currentYear}-${String(currentMonth).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

                                    const lesson = lessons.find(
                                        (l) => l.date === dayToMatch,
                                    );

                                    // Bepaal of deze specifieke dag 'vandaag' is
                                    const isToday = dayToMatch === todayString;

                                    return (
                                        <div
                                            key={i}
                                            onClick={() =>
                                                lesson &&
                                                handleSelectLesson(lesson)
                                            }
                                            className={`h-10 flex items-center justify-center rounded-lg text-sm font-bold cursor-pointer transition
            ${lesson ? "bg-emerald-50 text-emerald-600 border border-emerald-100 hover:bg-emerald-100" : "text-gray-400 hover:bg-gray-50"}
            ${selectedLesson?.date === dayToMatch ? "ring-2 ring-emerald-500 ring-offset-2" : ""}
            ${isToday ? "bg-orange-500 text-white shadow-md" : ""}
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
                                            id={`lesson-row-${lesson.id}`}
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
                                                    className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${lesson.status === "gepland" ? "bg-emerald-100 text-emerald-800" : lesson.status === "afgerond" ? "bg-blue-100 text-blue-800" : lesson.status === "geannuleerd" ? "bg-red-100 text-red-800" : "bg-gray-100 text-gray-800"}`}
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
                                {selectedLesson.status?.toLowerCase() ===
                                    "gepland" && (
                                    <button
                                        onClick={handleOpenModal}
                                        className="text-red-500 text-xs font-bold uppercase hover:underline"
                                    >
                                        Annuleer les
                                    </button>
                                )}
                                {/* Cancel Modal */}
                                {showCancelModal && (
                                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                                        <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl">
                                            <h3 className="text-xl font-bold mb-4">
                                                Les annuleren
                                            </h3>
                                            <p className="text-gray-600 mb-4 text-sm">
                                                Wat is de reden dat je de les op{" "}
                                                <strong>
                                                    {selectedLesson.datum}
                                                </strong>{" "}
                                                wilt annuleren?
                                            </p>

                                            <form onSubmit={handleCancelSubmit}>
                                                <textarea
                                                    className="w-full border border-gray-300 rounded-xl p-3 text-sm focus:ring-orange-500 focus:border-orange-500"
                                                    rows="3"
                                                    placeholder="Typ hier je reden..."
                                                    value={data.cancel_reason}
                                                    onChange={(e) =>
                                                        setData(
                                                            "cancel_reason",
                                                            e.target.value,
                                                        )
                                                    }
                                                    required
                                                ></textarea>

                                                <div className="flex justify-end gap-3 mt-6">
                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            setShowCancelModal(
                                                                false,
                                                            )
                                                        }
                                                        className="px-4 py-2 text-gray-500 font-medium hover:text-gray-700"
                                                    >
                                                        Terug
                                                    </button>
                                                    <button
                                                        type="submit"
                                                        disabled={processing}
                                                        className="bg-red-500 text-white px-6 py-2 rounded-xl font-bold hover:bg-red-600 transition disabled:opacity-50"
                                                    >
                                                        {processing
                                                            ? "Bezig..."
                                                            : "Bevestig annulering"}
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="grid grid-cols-1 gap-4 mt-6 mb-8">
                                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl text-sm">
                                    <span className="text-lg">📍</span>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-center mb-1">
                                            <p className="font-bold">
                                                Ophaaladres
                                            </p>
                                            {!isEditingLocation && (
                                                <button
                                                    onClick={() =>
                                                        setIsEditingLocation(
                                                            true,
                                                        )
                                                    }
                                                    className="text-emerald-500 text-xs font-bold uppercase hover:underline"
                                                >
                                                    Wijzig
                                                </button>
                                            )}
                                        </div>

                                        {isEditingLocation ? (
                                            <div className="flex gap-1">
                                                <input
                                                    type="text"
                                                    value={tempLocation}
                                                    onChange={(e) =>
                                                        setTempLocation(
                                                            e.target.value,
                                                        )
                                                    }
                                                    className="w-full border-gray-300 rounded-lg text-sm focus:ring-emerald-500"
                                                    placeholder="Voer nieuw ophaaladres in"
                                                />
                                                <div className="flex gap-2">
                                                    <button
                                                        onClick={updateLocation}
                                                        className="bg-emerald-500 text-white px-3 py-1 rounded-md text-xs font-bold hover:bg-emerald-600 transition"
                                                    >
                                                        Wijzigen
                                                    </button>
                                                    <button
                                                        onClick={() =>
                                                            setIsEditingLocation(
                                                                false,
                                                            )
                                                        }
                                                        className="bg-gray-200 text-gray-600 px-3 py-1 rounded-md text-xs font-bold"
                                                    >
                                                        Annuleren
                                                    </button>
                                                </div>
                                            </div>
                                        ) : (
                                            <p className="text-gray-600">
                                                {selectedLesson.location ||
                                                    "Geen ophaaladres opgegeven"}
                                            </p>
                                        )}
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl text-sm">
                                    <span className="text-lg">⏰</span>
                                    <div>
                                        <p className="font-bold">Tijdstip</p>
                                        <p className="text-gray-600">
                                            {selectedLesson.start_time} -{" "}
                                            {selectedLesson.end_time}
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
                                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-2xl text-sm">
                                    <span className="text-lg">📝</span>
                                    <div>
                                        <p className="font-bold">Opmerking</p>
                                        <p className="text-gray-600">
                                            {selectedLesson.note ||
                                                "Geen opmerking toegevoegd"}
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
