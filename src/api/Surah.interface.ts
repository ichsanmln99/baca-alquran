type ApiResponse<T> = {
  code: number;
  message: string;
  data: T;
};

export interface ISurah {
  nomor: number;
  nama: string;
  namaLatin: string;
  jumlahAyat: number;
  tempatTurun?: string;
  arti?: string;
  deskripsi?: string;
  audioFull?: { [key: string]: string };
}

export interface IListSurahResponse extends ApiResponse<ISurah[]> {}

export interface IAyat {
  nomorAyat: number;
  teksArab: string;
  teksLatin: string;
  teksIndonesia: string;
  audio: { [key: string]: string };
}

interface ISurahNavigatorData {
  nomor: number;
  nama: string;
  namaLatin: string;
  jumlahAyat: number;
}

export interface ISurahNavigator {
  suratSelanjutnya: ISurahNavigatorData;
  suratSebelumnya: ISurahNavigatorData;
}

export interface IDetailSurah extends ISurah, ISurahNavigator {
  ayat: IAyat[];
}

export interface IDetailSurahResponse extends ApiResponse<IDetailSurah> {}

export interface IDetailInformation extends ISurah, ISurahNavigator {}
