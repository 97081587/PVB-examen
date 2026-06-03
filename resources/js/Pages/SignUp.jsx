import react from "react";
import { useForm } from "@inertiajs/react";
import image3 from "../images/lesauto.jpg";

export default function SignUp() {
    const { data, setData, post, processing, errors, setError, clearErrors } =
        useForm({
            first_name: "",
            last_name: "",
            email: "",
            adress: "",
            place_of_residence: "",
            password: "",
            password_confirmation: "",
        });

    const submit = (e) => {
        e.preventDefault();

        clearErrors();

        let hasFrontendErrors = false;

        if (data.password.length < 8) {
            setError("password", "Wachtwoord moet minimaal 8 tekens bevatten.");
            hasFrontendErrors = true;
        }

        if (data.password !== data.password_confirmation) {
            setError(
                "password_confirmation",
                "Wachtwoorden komen niet overeen.",
            );
            hasFrontendErrors = true;
        }

        if (hasFrontendErrors) {
            return;
        }

        post("/klantregistratie", {
            onSuccess: () => alert("Account succesvol aangevraagd!"),
        });
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <form onSubmit={submit}>
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
                                    Schrijf je eenvoudig in en zet de eerste
                                    stap naar jouw rijbewijs.
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

                        <div className="space-y-5">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label
                                        htmlFor="first_name"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                    >
                                        Voornaam
                                    </label>

                                    <input
                                        id="first_name"
                                        name="first_name"
                                        required
                                        type="text"
                                        value={data.first_name}
                                        onChange={(e) =>
                                            setData(
                                                e.target.name,
                                                e.target.value,
                                            )
                                        }
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
                                        placeholder="Jan"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="last_name"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                    >
                                        Achternaam
                                    </label>

                                    <input
                                        id="last_name"
                                        name="last_name"
                                        required
                                        type="text"
                                        value={data.last_name}
                                        onChange={(e) =>
                                            setData(
                                                e.target.name,
                                                e.target.value,
                                            )
                                        }
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
                                        placeholder="Jansen"
                                    />
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="adress"
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                >
                                    Adres
                                </label>

                                <input
                                    id="adress"
                                    name="adress"
                                    required
                                    type="text"
                                    value={data.adress}
                                    onChange={(e) =>
                                        setData(e.target.name, e.target.value)
                                    }
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    placeholder="Straatnaam 12"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="place_of_residence"
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                >
                                    Woonplaats
                                </label>

                                <input
                                    id="place_of_residence"
                                    name="place_of_residence"
                                    required
                                    type="text"
                                    value={data.place_of_residence}
                                    onChange={(e) =>
                                        setData(e.target.name, e.target.value)
                                    }
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    placeholder="Amsterdam"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                >
                                    E-mailadres
                                </label>

                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={data.email}
                                    onChange={(e) =>
                                        setData(e.target.name, e.target.value)
                                    }
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    placeholder="naam@email.nl"
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-xs mt-1 font-medium">
                                        {errors.email}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                >
                                    Wachtwoord
                                </label>

                                <input
                                    id="password"
                                    name="password"
                                    required
                                    type="password"
                                    value={data.password}
                                    onChange={(e) =>
                                        setData(e.target.name, e.target.value)
                                    }
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    placeholder="••••••••"
                                />
                                {errors.password && (
                                    <p className="text-red-500 text-xs mt-1 font-medium">
                                        {errors.password}
                                    </p>
                                )}
                                <p className="text-sm text-gray-500 mt-1">
                                    Minimaal 8 tekens.
                                </p>
                            </div>

                            <div>
                                <label
                                    htmlFor="password_confirmation"
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                >
                                    Bevestig Wachtwoord
                                </label>

                                <input
                                    id="password_confirmation"
                                    name="password_confirmation"
                                    required
                                    type="password"
                                    value={data.password_confirmation}
                                    onChange={(e) =>
                                        setData(e.target.name, e.target.value)
                                    }
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    placeholder="••••••••"
                                />
                                {errors.password_confirmation && (
                                    <p className="text-red-500 text-xs mt-1 font-medium">
                                        {errors.password_confirmation}
                                    </p>
                                )}
                            </div>

                            <button
                                type="submit"
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
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}
