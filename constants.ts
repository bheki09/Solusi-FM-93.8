import { Show, DJ, NewsItem } from './types';

export const MOCK_DJS: DJ[] = [
  {
    id: 'dj-simba',
    name: 'Simba Moyo',
    handle: '@DJSimba',
    bio: 'Bringing you the best Afro-beats and campus vibes every morning.',
    image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=400&q=80',
    shows: ['The Morning Drive'],
  },
  {
    id: 'dj-sarah',
    name: 'Sarah Ndlovu',
    handle: '@SarahTalks',
    bio: 'Passionate about student affairs and deep conversations.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    shows: ['Campus Conversations', 'Lunchtime Mix'],
  },
  {
    id: 'dj-mike',
    name: 'Mike T',
    handle: '@MikeOnTheMic',
    bio: 'Your go-to guy for sports updates and weekend hype.',
    image: 'https://images.unsplash.com/photo-1590086782957-93c06ef51604?auto=format&fit=crop&w=400&q=80',
    shows: ['Sports Hour', 'Weekend Warmup'],
  },
  {
    id: 'dj-grace',
    name: 'Grace Chi',
    handle: '@GraceNotes',
    bio: 'Sharing inspirational tunes and spiritual reflection.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    shows: ['Gospel Hour', 'Sunset Serenity'],
  },
];

export const MOCK_SHOWS: Show[] = [
  {
    id: '1',
    title: 'The Morning Drive',
    host: 'Simba Moyo',
    startTime: '06:00',
    endTime: '09:00',
    day: 'Monday',
    description: 'Wake up with energy! News, weather, and the best hits to start your day.',
    image: 'https://images.unsplash.com/photo-1478737270239-2f02b77ac6b5?auto=format&fit=crop&w=800&q=80',
    category: 'Music',
  },
  {
    id: '2',
    title: 'Campus Conversations',
    host: 'Sarah Ndlovu',
    startTime: '09:00',
    endTime: '11:00',
    day: 'Monday',
    description: 'Discussing issues that matter to Solusi students. Academic tips, mental health, and more.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
    category: 'Talk',
  },
  {
    id: '3',
    title: 'Chapel Broadcast',
    host: 'University Chaplaincy',
    startTime: '11:00',
    endTime: '12:00',
    day: 'Monday',
    description: 'Live broadcast of the daily chapel service.',
    image: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&w=800&q=80',
    category: 'Religious',
  },
  {
    id: '4',
    title: 'Lunchtime Mix',
    host: 'Sarah Ndlovu',
    startTime: '12:00',
    endTime: '14:00',
    day: 'Monday',
    description: 'The perfect soundtrack for your lunch break.',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
    category: 'Music',
  },
  {
    id: '5',
    title: 'Sports Hour',
    host: 'Mike T',
    startTime: '16:00',
    endTime: '17:00',
    day: 'Wednesday',
    description: 'All things sports. University league updates and international scores.',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80',
    category: 'Talk',
  },
  {
    id: '6',
    title: 'Gospel Hour',
    host: 'Grace Chi',
    startTime: '18:00',
    endTime: '20:00',
    day: 'Friday',
    description: 'Ushering in the Sabbath with uplifting gospel music.',
    image: 'https://images.unsplash.com/photo-1507643179173-617d67462fea?auto=format&fit=crop&w=800&q=80',
    category: 'Religious',
  }
];

export const MOCK_NEWS: NewsItem[] = [
  {
    id: '1',
    title: 'Solusi Week of Prayer Begins',
    summary: 'Join us for a week of spiritual renewal starting this Sunday at the main auditorium.',
    date: 'Oct 24, 2023',
    category: 'Campus Life',
    image: 'https://images.unsplash.com/photo-1491396122992-2374185a8509?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: '2',
    title: 'New Library Wing Opens',
    summary: 'The state-of-the-art research facility is now open to all final year students.',
    date: 'Oct 22, 2023',
    category: 'Academic',
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: '3',
    title: 'Varsity Basketball Team Wins Regionals',
    summary: 'Our team secured a thrilling victory against NUST yesterday.',
    date: 'Oct 20, 2023',
    category: 'Sports',
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ee2?auto=format&fit=crop&w=600&q=80',
  },
];

// Helper to check if a show is currently on air
export const getOnAirShow = (): Show | undefined => {
  // For demo purposes, just return a random show or the first one
  return MOCK_SHOWS[0]; 
};