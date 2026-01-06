export interface Show {
  id: string;
  title: string;
  host: string;
  startTime: string; // HH:mm format
  endTime: string; // HH:mm format
  day: string;
  description: string;
  image: string;
  category: 'Music' | 'Talk' | 'News' | 'Religious' | 'Academic';
}

export interface DJ {
  id: string;
  name: string;
  handle: string;
  bio: string;
  image: string;
  shows: string[];
}

export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  date: string;
  category: string;
  image: string;
}

export interface SongRequest {
  name: string;
  song: string;
  artist: string;
  message: string;
}