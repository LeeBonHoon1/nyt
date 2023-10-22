import axios from "axios";
import { BASE_URL } from "./constants";
import { API_KEY } from "./constants";

const getNews = async (headline: string, date: string, tags: string) => {
  const response = await axios.get(`${BASE_URL}/articlesearch.json?
  fl=headline,byline,web_url,pub_date&fq=&api-key=${API_KEY}`)
  return response.data.response.docs;
}

const NewsAPIs = {
  getNews
}

export default NewsAPIs