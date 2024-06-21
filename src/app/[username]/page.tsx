import PasswordViewer from "./_components/PasswordViewer";

export default function User({
    params: { username },
}: {
    params: { username: string };
}) {
    return (
        <div>
            <h1 className="text-4xl text-center mt-10">
                Welcome <span className="font-semibold">{username}</span>
            </h1>
            <p className="text-lg text-center mt-10">Your password is:</p>
            <PasswordViewer />
            <p className="text-slate-500 italic text-center mt-10">
                account created at {new Date().toLocaleDateString()}
            </p>
        </div>
    );
}
