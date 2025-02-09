import { env } from "@/config/env";

export const getAllCharacters = async () =>{
  try {
    const response = await fetch(`${env.BASE_URL}/character`);

    return response.json();
  } catch (error) {
    return error;
  }
}
