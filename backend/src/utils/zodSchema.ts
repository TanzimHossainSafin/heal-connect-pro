import zod from "zod";
export const validateUser=()=>{
    const schema=zod.object({
        username: zod.string().min(3).max(20, "username must be at least 3 characters").optional(),
        email:zod.string().email("invalid email"),
        password:zod.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, "password must be at least 8 characters and contain at least one uppercase letter, one lowercase letter, one number and one special character"),
    })
    return schema;
}
