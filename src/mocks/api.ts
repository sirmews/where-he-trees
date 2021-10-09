const api = {
  USER: {
    avatar: 'avatar.png',
    handle: 'perfectlyCromulent',
    colors: {
      backgroundColor: "rebeccapurple", 
      color: "palegoldenrod" 
    }
  },
  LINKS: [
    {
      type: 'CLASSIC',
      name: 'Perfectly Cromulent',
      url: 'https://perfectlycromulent.co',
    },
    {
      type: 'AUDIO',
      name: 'Music',
      list: [
        {
          provider: 'SPOTIFY',
          name: 'Spotify',
          url: 'https://open.spotify.com/artist/3mY9Ii0cL5SQxpOTAm8SHx',
        },
        {
          provider: 'APPLE_MUSIC',
          name: 'Apple Music',
          url: 'https://soundcloud.com/octobersveryown/drake-knife-talk-feat-21',
        },
        {
          provider: 'SOUNDCLOUD',
          name: 'Soundcloud',
          url: 'https://soundcloud.com/octobersveryown/drake-knife-talk-feat-21',
        },

      ]
    },
    {
      type: 'EVENTS',
      name: 'Shows',
      list: [
        {
          provider: 'SONGKICK',
          name: 'BTS Live Stream',
          url: 'https://www.songkick.com/live-stream-concerts/40018290-bts',
        },
        {
          provider: 'SONGKICK',
          name: 'Tinashe Live Stream',
          url: 'https://www.songkick.com/live-stream-concerts/39932230-tinashe',
        },
        {
          provider: 'SONGKICK',
          name: 'Spoon Live Stream',
          url: 'https://www.songkick.com/live-stream-concerts/40038087-spoon',
        }
      ]
    }
  ]
}

export default api;