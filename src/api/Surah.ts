import Axios from "axios";
import { setupCache, buildWebStorage } from "axios-cache-interceptor";
import { IListSurahResponse, IDetailSurahResponse } from "./Surah.interface";

const baseUrl = "https://equran.id";
const axios = setupCache(Axios, {
  cacheTakeover: false,
  storage: buildWebStorage(localStorage, "axios-cache:"),
});

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
