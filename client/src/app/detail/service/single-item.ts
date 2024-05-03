const url = process.env.API_URL;
export const getSingle = async (id: string) => {
  try {
    const res = await fetch(url + `/all/${id}`);
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error(error as string);
  }
};
