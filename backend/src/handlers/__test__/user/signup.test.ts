import {expect, test} from "vitest";
import axios from "axios";
test("it should be sign up an user",async()=>{
    const response=await axios.post("http://localhost:3000/app/v1/api/user/signup",{
        username:"test",
        email:"test298327@gmail.com",
        password:"Hello123*"
    })
    expect(response.status).toBe(200);
    expect(response.data.message).toBe("User create Successfully");
})