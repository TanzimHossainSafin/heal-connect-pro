import { Button } from "./button";

export default function Logout() {
    const handleLogout = () => {
        if (window.confirm("do you want to logout?")) {
            localStorage.removeItem("token");
            window.location.href = "/";
        }
    };
    return (
        <Button onClick={handleLogout} variant="destructive" className="bg-red-500 hover:bg-red-600">
            Logout
        </Button>
    );
}