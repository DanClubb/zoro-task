export default function User({
    params: { username },
}: {
    params: { username: string };
}) {
    return <h1>{username}</h1>;
}
