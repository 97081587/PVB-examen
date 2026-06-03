import React from "react";
import { useForm, Head } from "@inertiajs/react";

export default function Login() {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();
        // We sturen de login poging naar de 'login' route
        post("/login");
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <Head title="Inloggen - RijSchool" />

            <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-8 md:p-10">
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-bold text-gray-900">
                        Welkom terug
                    </h1>
                    <p className="text-gray-500 mt-2">Log in op je portaal</p>
                </div>

                <form onSubmit={submit} className="space-y-6">
                    {/* E-mailveld */}
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            E-mailadres
                        </label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            autoComplete="username"
                            onChange={(e) => setData("email", e.target.value)}
                            className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition
                                ${errors.email ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-orange-500"}`}
                            placeholder="naam@email.nl"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-xs mt-1 font-medium">
                                {errors.email}
                            </p>
                        )}
                    </div>

                    {/* Wachtwoordveld */}
                    <div>
                        <div className="flex justify-between mb-2">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Wachtwoord
                            </label>
                        </div>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            autoComplete="current-password"
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                            className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition
                                ${errors.password ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-orange-500"}`}
                            placeholder="••••••••"
                        />
                        {errors.password && (
                            <p className="text-red-500 text-xs mt-1 font-medium">
                                {errors.password}
                            </p>
                        )}
                    </div>

                    {/* Remember me check */}
                    <div className="flex items-center">
                        <input
                            id="remember"
                            type="checkbox"
                            className="rounded border-gray-300 text-orange-500 shadow-sm focus:ring-orange-500"
                            checked={data.remember}
                            onChange={(e) =>
                                setData("remember", e.target.checked)
                            }
                        />
                        <label
                            htmlFor="remember"
                            className="ml-2 text-sm text-gray-600"
                        >
                            Onthoud mij
                        </label>
                    </div>

                    {/* Login Knop */}
                    <button
                        type="submit"
                        disabled={processing}
                        className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold transition shadow-lg shadow-orange-200 disabled:opacity-50"
                    >
                        {processing ? "Bezig met inloggen..." : "Inloggen"}
                    </button>

                    <p className="text-center text-gray-500 text-sm">
                        Nog geen account?
                        <a
                            href="/klantregistratie"
                            className="ml-1 text-orange-500 font-medium hover:underline"
                        >
                            Schrijf je in
                        </a>
                    </p>
                </form>
            </div>
        </div>
    );
}
