import { RegisterFormData } from "./pages/Register";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const register=async(formData: RegisterFormData)=>{
    try{
const response = await fetch(`${API_BASE_URL}/api/users/register`,{
    method:'POST',
    credentials:"include",
    headers:{
        'Content-Type':'application/json',
    },
    body:JSON.stringify(formData)
});
const responseBody = await response.json();
console.log(responseBody)
    }catch (error: unknown) {
        console.log(error)
        const errorMessage = typeof error === 'string' ? error : 'An unknown error occurred';
        throw new Error(errorMessage);
    }
}