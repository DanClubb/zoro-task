import { fetchUserDetails } from "../actions/fetchUserDetails";
import PasswordViewer from "./_components/PasswordViewer";

export default async function User({
    params: { username },
}: {
    params: { username: string };
}) {
    const userDetails = await fetchUserDetails(username);
    console.log(userDetails);
    return (
        <div className="flex flex-col justify-center items-center w-full max-w-[745px] shadow-md rounded-lg mx-auto p-4">
            <h1 className="text-4xl mt-10">
                Welcome{" "}
                <span className="font-semibold">{userDetails.username}</span>
            </h1>
            <p className="text-lg mt-10">Your password is:</p>
            <PasswordViewer password={userDetails.password} />
            <p className="text-slate-500 italic mt-10">
                account created at {userDetails.createdAt}
            </p>
        </div>
    );
}
