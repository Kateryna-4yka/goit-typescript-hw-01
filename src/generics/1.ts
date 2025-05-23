import axios from 'axios';

export default async function fetchData <T extends object> (url:string): Promise <T> {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}


