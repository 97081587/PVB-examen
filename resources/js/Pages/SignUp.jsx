import react from 'react';
import image3 from "../images/lesauto.jpg";

function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    router.post('/klantregistratie', {
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password'),
        password_confirmation: formData.get('password_confirmation'),
    });
}

export default function SignUp() {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="max-w-6xl w-full bg-white rounded-3xl shadow-xl overflow-hidden grid md:grid-cols-2">
                
                {/* Afbeelding */}
                <div className="hidden md:block relative">
                    <img
                        src={image3}
                        alt="Rijles"
                        className="w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-black/40 flex items-end">
                        <div className="p-10 text-white">
                            <h2 className="text-4xl font-bold mb-4">
                                Start vandaag nog met rijlessen
                            </h2>

                            <p className="text-lg text-gray-200">
                                Schrijf je eenvoudig in en zet de eerste stap
                                naar jouw rijbewijs.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Formulier */}
                <div className="p-8 md:p-12">
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-900">
                            Inschrijven
                        </h1>

                        <p className="text-gray-500 mt-2">
                            Maak een account aan om te starten.
                        </p>
                    </div>

                    <form className="space-y-5">

                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Voornaam
                                </label>

                                <input
                                    type="text"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    placeholder="Jan"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Achternaam
                                </label>

                                <input
                                    type="text"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    placeholder="Jansen"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Adres
                            </label>

                            <input
                                type="text"
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
                                placeholder="Straatnaam 12"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Woonplaats
                            </label>

                            <input
                                type="text"
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
                                placeholder="Amsterdam"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                E-mailadres
                            </label>

                            <input
                                type="email"
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
                                placeholder="naam@email.nl"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Wachtwoord
                            </label>

                            <input
                                type="password"
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
                                placeholder="••••••••"
                            />
                        </div>

                        <button
                            type="submit"
                            onClick={handleSubmit}
                            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold transition"
                        >
                            Account aanmaken
                        </button>

                        <p className="text-center text-gray-500 text-sm">
                            Heb je al een account?
                            <a
                                href="/login"
                                className="ml-1 text-orange-500 font-medium hover:underline"
                            >
                                Log in
                            </a>
                        </p>

                    </form>
                </div>
            </div>
        </div>
    );
}