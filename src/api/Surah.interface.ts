type ApiResponse<T> = {
  code: Number;
  message: String;
  data: T;
};

export interface ISurah {
  nomor: Number;
  nama: String;
  namaLatin: String;
  jumlahAyat: Number;
  tempatTurun?: String;
  arti?: String;
  deskripsi?: String;
  audioFull?: { [key: string]: string };
}

export interface IListSurahResponse extends ApiResponse<ISurah[]> {}

export interface IAyat {
  nomorAyat: Number;
  teksArab: String;
  teksLatin: String;
  teksIndonesia: String;
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
