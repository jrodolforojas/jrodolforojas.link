export interface URL {
  id: number;
  url: string;
  shorten: string;
  title: string;
}

export interface URLResponse {
  urls: URL[];
}
