import { Input } from "./input";
import { Button } from "./button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./card";
import { Label } from "./label";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export default function Appointment() {
    const navigate = useNavigate();
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const data = Object.fromEntries(formData);
        console.log(data);
        try {
            const response = await axios.post("http://localhost:3000/app/v1/services/appointment", 
                {
                    name:data.name,
                    email:data.email,
                    phone:data.phone,
                    date:data.date,
                    time:data.time
                }
            );
            console.log(response);
            if (response.status === 200) {
                toast.success(response.data.message);
                navigate("/");
            }
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                toast.error(error.response.data.message || "Failed to book appointment. Please try again.");
            } else {
                toast.error("An unexpected error occurred.");
            }
            console.error(error);
        }
    }
    return (
        <Card className="w-full max-w-lg mx-auto">
            <CardHeader>
                <CardTitle className="text-2xl">Book an Appointment</CardTitle>
                <CardDescription>Fill out the form below to schedule your appointment.</CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit}>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" name="name" type="text" placeholder="Your full name" required />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" name="email" type="email" placeholder="Your email address" required />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="phone">Phone</Label>
                            <Input id="phone" name="phone" type="tel" placeholder="Your phone number" required />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="date">Date</Label>
                                <Input id="date" name="date" type="date" required />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="time">Time</Label>
                                <Input id="time" name="time" type="time" required />
                            </div>
                        </div>
                        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold" size="lg">Book Appointment</Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
}
