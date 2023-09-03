import axios from "axios";
import { IListSurahResponse, IDetailSurahResponse } from "./Surah.interface";

const baseUrl = "https://equran.id";

function getAll(): Promise<IListSurahResponse> {
  return axios.get(baseUrl + "/api/v2/surat").then(({ data }) => data);
}

function get(id: string): Promise<IDetailSurahResponse> {
  return axios.get(baseUrl + "/api/v2/surat/" + id).then(({ data }) => data);
}

const Surah = {
  getAll,
  get,
};

export default Surah;
