import {expect, test} from "vitest";
import axios from "axios";
test("it should be login an user",async()=>{
    const response=await axios.post("http://localhost:3000/app/v1/api/user/login",{

        email:"test298327@gmail.com",
        password:"Hello123*"
    })
    expect(response.status).toBe(200);
    expect(response.data.message).toBe("User signin successfully");
    expect(response.data.token).toBeDefined();
})
