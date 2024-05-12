import axios, { AxiosError, AxiosResponse } from "axios";

export async function apiGet<T>(endpoint: string): Promise<T> {
  const response = await axios
    .get<T>(`${endpoint}`)
    .catch((error: AxiosError) => {
      console.error(error);
    });

  return (response as AxiosResponse<T>).data;
}
