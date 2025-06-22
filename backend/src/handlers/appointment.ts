import { Request, Response } from "express";
import prisma from "../db";

const appointment = async (req: Request, res: Response) => {
    const { name, email, phone, date, time } = req.body;
    try {
        const newAppointment = await prisma.appointment.create({
            data: {
                name,
                email,
                phone,
                date,
                time
            }
        });
        res.status(200).json({ message: "Appointment created successfully", appointment: newAppointment });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong", error });
    }
};

export default appointment;