import { getAllCharacters } from "@/services/charactes";

export async function GET() {
  const response = await getAllCharacters();

  return Response.json(response);
}
