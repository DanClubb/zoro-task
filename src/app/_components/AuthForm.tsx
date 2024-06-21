export default function AuthForm() {
    return (
        <div>
            <form className="flex flex-col items-center justify-center gap-8 shadow-sm border-slate-200 border rounded-tl-none p-8 w-full max-w-[445px] rounded-lg">
                <header className="w-full">
                    <h1 className="text-3xl font-bold">Login</h1>
                    <p className="text-sm">
                        Enter your username and password to access your account.
                    </p>
                </header>
                <FormInput type="text" name="username" />
                <FormInput type="password" name="password" />
                <button
                    type="submit"
                    className="bg-slate-900 text-slate-50 w-full py-2 rounded border border-slate-900 hover:bg-white  hover:text-slate-900 focus-visible:bg-white focus-visible:text-slate-900 transition-all"
                >
                    Sign in
                </button>
            </form>
        </div>
    );
}

type FormInputProps = {
    type: "text" | "password";
    name: "username" | "password";
};

function FormInput({ type, name }: FormInputProps) {
    return (
        <div className="w-full">
            <label htmlFor={name} className="mr-auto font-semibold mb-2 block">
                {name}
            </label>
            <input
                type={type}
                name={name}
                id={name}
                placeholder={`Enter your ${name}`}
                className="border border-slate-300 py-2 px-4 placeholder:text-slate-500 rounded w-full"
            />
        </div>
    );
}
