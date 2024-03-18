export interface URLResponse {
  urls: URL[];
}

export interface URL {
  id: number;
  url: string;
  shorten: string;
  title: string;
}
