import { validateUser } from "./zodSchema";

export const typeCheck = (req, res, next) => {
    const { error } = validateUser().safeParse(req.body);
    if (error) {
        return res.status(400).json({ message: error.message });
    }
    next();
}
