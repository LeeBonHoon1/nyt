import axios from "axios";
import { BASE_URL } from "./constants";
import { API_KEY } from "./constants";
import { NewsItem } from "@/types";

const getNews = async (headline: string, date: string, tags: string, page: number) => {
  const response = await axios.get<NewsItem>(`${BASE_URL}/articlesearch.json?page=${page}&fl=headline,byline,web_url,pub_date
  ${headline ? `&fq=headline:(${headline})` : ""}
  ${tags ? `&q=${tags}` : ""}
  ${date ? `&begin_date=${date}` : ""}
  &api-key=${API_KEY}`)
  return response.data.response;
}

const NewsAPIs = {
  getNews
}

export default NewsAPIs