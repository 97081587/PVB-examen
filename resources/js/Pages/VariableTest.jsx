import { router } from '@inertiajs/react';

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

export default function VariableTest() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
            <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4 rounded bg-white p-6 shadow">
                <h1 className="text-3xl font-bold">Registration</h1>

                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="mt-1 w-full rounded border border-slate-300 px-3 py-2"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="mt-1 w-full rounded border border-slate-300 px-3 py-2"
                    />
                </div>

                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-slate-700">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        required
                        className="mt-1 w-full rounded border border-slate-300 px-3 py-2"
                    />
                </div>
                <div>
                    <label htmlFor="password_confirmation" className="block text-sm font-medium text-slate-700">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        id="password_confirmation"
                        placeholder="Confirm your password"
                        name="password_confirmation"
                        required
                        className="mt-1 w-full rounded border border-slate-300 px-3 py-2"
                    />
                </div>
                <button type="submit" className="rounded bg-slate-900 px-4 py-2 font-medium text-white">
                    Register
                </button>
            </form>
        </div>
    );
}