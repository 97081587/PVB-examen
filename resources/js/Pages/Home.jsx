import React from "react";
import { Head, Link } from "@inertiajs/react";
import Image from "../images/rijles-zwolle-auto.png";
import Image2 from "../images/rijinstructeur.jpg";

export default function Home({ auth }) {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Head title="Rijschool Zwolle - Start Je Avontuur" />

            {/* NAVBAR */}
            <nav className="bg-white py-4 px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-4 shadow-sm sticky top-0 z-50">
                <div className="text-2xl font-bold text-gray-800 text-center md:text-left">
                    Easy Drive <span className="text-orange-500">4</span> All
                </div>
                <div className="flex gap-2">
                    <Link
                        href="/login"
                        className="bg-orange-500 text-white px-4 py-2 rounded-md font-medium"
                    >
                        Log in
                    </Link>
                    <Link
                        href="/klantregistratie"
                        className="border border-orange-500 text-orange-500 px-4 py-2 rounded-md font-medium"
                    >
                        Inschrijven
                    </Link>
                </div>
            </nav>

            {/* 1. Hero Section */}
            <header className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                {/* Background Image met Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={Image}
                        className="w-full h-full object-cover"
                        alt="Rijles in Zwolle"
                    />
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>

                {/* Hero Content */}
                <div className="relative z-10 text-center text-white px-4">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
                        Rijles in Zwolle
                    </h1>
                    <p className="text-xl mb-8 max-w-2xl mx-auto drop-shadow-md">
                        Haal je rijbewijs op jouw tempo bij de gezelligste
                        rijschool van Overijssel.
                    </p>
                    <Link
                        href="/klantregistratie"
                        className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-xl"
                    >
                        Schrijf je nu in!
                    </Link>
                </div>
            </header>

            {/* About Us section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
                        {/* Foto Links */}
                        <div className="w-full md:w-1/2">
                            <div className="relative">
                                {/* Decoratief element achter de foto */}
                                <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-orange-500 rounded-lg -z-10"></div>
                                <img
                                    src={Image2}
                                    alt="Onze Rijschool"
                                    className="rounded-lg shadow-2xl w-full h-100 object-cover"
                                />
                            </div>
                        </div>

                        {/* De Verticale Lijn (Alleen zichtbaar op desktop) */}
                        <div className="hidden md:block w-px h-64 bg-gray-200 self-center"></div>

                        {/* Tekst Rechts */}
                        <div className="w-full md:w-1/2">
                            <h2 className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-2">
                                Over Easy Drive 4 All
                            </h2>
                            <h3 className="text-4xl font-bold text-gray-900 mb-6">
                                Passie voor veiligheid en plezier op de weg
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Wij bij Easy Drive 4 All bieden kwalitatieve
                                rijlessen aan in Zwolle en omgeving met de focus
                                op leerlingen met een beperking. Onze ervaren
                                instructeurs zorgen voor een veilige en
                                comfortabele leeromgeving, waarbij persoonlijke
                                aandacht en geduld centraal staan. We geloven
                                dat iedereen de kans verdient om zelfstandig te
                                kunnen rijden, ongeacht hun uitdagingen. Met
                                onze moderne lesauto's en flexibele lesroosters
                                maken we het mogelijk voor iedereen om hun
                                rijbewijs te behalen en vol vertrouwen de weg op
                                te gaan.
                            </p>

                            {/* Kleine USP lijst */}
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center text-gray-700">
                                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                                    Kwaliteit en persoonlijke aandacht
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                                    Moderne lesauto's
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                                    Vaste instructeur, wel zo vertrouwd
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Route beschrijving */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Tekstblok met info */}
                        <div className="lg:w-1/3">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                Kom langs op locatie
                            </h2>
                            <p className="text-gray-600 mb-8">
                                Je vindt ons kantoor vlakbij het station in
                                Zwolle. Ideaal als je na je les direct door moet
                                naar school of werk. Heb je vragen over onze
                                pakketten of wil je even kennismaken? De koffie
                                staat klaar!
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="bg-orange-500 p-3 rounded-lg mr-4 text-white">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">
                                            Adres
                                        </h4>
                                        <p className="text-gray-600 text-sm italic">
                                            Stationsweg 12, 8011 BZ Zwolle
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-cyan-600 p-3 rounded-lg mr-4 text-white">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">
                                            Telefoon
                                        </h4>
                                        <p className="text-gray-600 text-sm">
                                            038 - 123 45 67
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Google Maps Kaart */}
                        <div className="lg:w-2/3 h-112.5 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.766348612185!2d6.090623277026573!3d52.51052673733005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c7df209477e5d9%3A0x6e788c03975a5933!2sStationsweg%2012%2C%208011%20BZ%20Zwolle!5e0!3m2!1snl!2snl!4v1700000000000!5m2!1snl!2snl"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Locatie Rijschool Zwolle"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Informatie Balk */}
            <section className="bg-cyan-600 text-white py-12">
                <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
                    <div className="text-center">
                        <h3 className="font-bold text-xl mb-2 text-cyan-200">
                            Locatie
                        </h3>
                        <p className="font-medium">Stationsweg 12, Zwolle</p>
                        <p className="text-cyan-100 text-sm">
                            info@rijschooldeweg.nl
                        </p>
                    </div>
                    <div className="text-center border-x border-cyan-500/50 px-4">
                        <h3 className="font-bold text-xl mb-2 text-cyan-200">
                            Openingstijden
                        </h3>
                        <p className="font-medium text-sm">
                            Ma - Vr: 08:00 - 20:00
                        </p>
                        <p className="font-medium text-sm text-cyan-100 italic">
                            Zondag: gesloten
                        </p>
                    </div>
                    <div className="text-center">
                        <h3 className="font-bold text-xl mb-2 text-cyan-200">
                            Contact
                        </h3>
                        <p className="text-lg font-bold">038 - 123 45 67</p>
                        <p className="text-sm opacity-80 italic">
                            Altijd bereikbaar
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
