export interface ProjectConfig {
  thumbnail: string;
  title: string;
  description: string;
  time: string;
  start: string;
  end?: string;
}

interface ProjectConfigs {
  [slug: string]: ProjectConfig;
}

export const projectConfigs: ProjectConfigs = {
  slicense2dye: {
    thumbnail:
      "https://maxrchung-rails.s3.amazonaws.com/uploads/IconYellowBg512.png",
    title: "SLicense 2 Dye",
    start: "2022-06-01T07:00:00.000Z",
    end: "2023-04-01T07:00:00.000Z",
    description: "Fruit ninja with color theory, SLicense to Dye 2.0",
    time: "2023-11-04T07:56:57.407Z",
  },
  skr: {
    thumbnail:
      "https://maxrchung-rails.s3.amazonaws.com/uploads/skr-thumbnail.png",
    title: "skr",
    start: "2023-07-01T07:00:00.000Z",
    end: undefined,
    description: "skribblio clone",
    time: "2024-01-27T09:56:38.044Z",
  },
  love: {
    thumbnail: "https://maxrchung-rails.s3.amazonaws.com/uploads/b2.png",
    title: "Love",
    start: "2023-10-01T07:00:00.000Z",
    end: "2024-01-01T08:00:00.000Z",
    description: "osu! 3D lyric storyboard",
    time: "2024-01-16T12:46:54.304Z",
  },
  tracker: {
    thumbnail: "",
    title: "tracker",
    start: "2022-12-01T08:00:00.000Z",
    end: "2023-06-01T07:00:00.000Z",
    description: "Simple web app to track things",
    time: "2023-11-04T07:57:37.203Z",
  },
  retro: {
    thumbnail:
      "https://maxrchung-rails.s3.amazonaws.com/uploads/mstile-144x144.png",
    title: "retro",
    start: "2021-05-01T07:00:00.000Z",
    end: undefined,
    description: "A simple retrospective tool.",
    time: "2022-06-20T08:36:54.604Z",
  },
  S2VX: {
    thumbnail:
      "https://maxrchung-rails.s3.amazonaws.com/uploads/s2vxlogo99.png",
    title: "S2VX",
    start: "2017-11-01T07:00:00.000Z",
    end: "2021-11-01T07:00:00.000Z",
    description:
      "yeah it's like osu! but with more squares and motion sickness",
    time: "2022-06-20T08:34:12.014Z",
  },
  functionalvote: {
    thumbnail:
      "https://maxrchung-rails.s3.amazonaws.com/uploads/functional_vote_thumbnail.png",
    title: "Functional Vote",
    start: "2020-02-01T08:00:00.000Z",
    end: undefined,
    description: "Website for creating ranked-choice polls",
    time: "2022-06-20T08:33:00.644Z",
  },
  ghettoboy: {
    thumbnail:
      "https://maxrchung-rails.s3.amazonaws.com/uploads/ghetto_usb_connection.jpg",
    title: "Ghettoboy",
    start: "2018-01-01T08:00:00.000Z",
    end: "2018-02-01T08:00:00.000Z",
    description: "Handwired keyboard",
    time: "2024-02-05T20:44:25.734Z",
  },
  necktoneck: {
    thumbnail: "https://maxrchung-rails.s3.amazonaws.com/uploads/NeckLogo.png",
    title: "Neck to Neck",
    start: "2022-09-01T07:00:00.000Z",
    end: "2022-09-01T07:00:00.000Z",
    description: "Networked platformer loosely based on Japanese folklore",
    time: "2022-09-07T11:01:30.561Z",
  },
  THRUSTIN: {
    thumbnail:
      "https://maxrchung-rails.s3.amazonaws.com/uploads/THRUSTIN_thumbnail.png",
    title: "THRUSTIN",
    start: "2019-02-01T08:00:00.000Z",
    end: undefined,
    description: "Online THRUST-in-the-blank game",
    time: "2022-01-09T21:11:36.455Z",
  },
  drain: {
    thumbnail:
      "https://maxrchung-rails.s3.amazonaws.com/uploads/drain_thumbnail.png",
    title: "Drain",
    start: "2018-06-01T07:00:00.000Z",
    end: "2018-12-01T08:00:00.000Z",
    description: "osu! storyboard",
    time: "2020-05-19T03:40:36.472Z",
  },
  dreamsolister: {
    thumbnail: "https://maxrchung-rails.s3.amazonaws.com/uploads/euphonium.png",
    title: "DREAM SOLISTER",
    start: "2018-02-01T08:00:00.000Z",
    end: "2020-06-01T07:00:00.000Z",
    description: "osu! storyboard",
    time: "2020-07-02T12:43:42.371Z",
  },
  clgretweet: {
    thumbnail: "https://maxrchung-rails.s3.amazonaws.com/uploads/clg.png",
    title: "CLG Retweet",
    start: "2016-05-01T07:00:00.000Z",
    end: "2017-07-01T07:00:00.000Z",
    description: "Twitter bot that retweets CLG tweets",
    time: "2024-02-05T20:59:49.461Z",
  },
  tatamigalaxies: {
    thumbnail: "https://maxrchung-rails.s3.amazonaws.com/uploads/thumbnail.png",
    title: "Tatami Galaxies",
    start: "2014-05-01T07:00:00.000Z",
    end: "2014-09-01T07:00:00.000Z",
    description: "Co-op exploration game based on the anime The Tatami Galaxy",
    time: "2024-02-05T20:57:42.537Z",
  },
  maccreeeeee: {
    thumbnail:
      "https://maxrchung-rails.s3.amazonaws.com/uploads/maccreeeeee_thumbnail.png",
    title: "MacCREEEEEE",
    start: "2017-07-01T07:00:00.000Z",
    end: "2017-07-01T07:00:00.000Z",
    description:
      "Top-down battle arena inspired by Bloodline Champions and Overwatch",
    time: "2024-02-05T20:48:46.337Z",
  },
  osuucifalllan: {
    thumbnail:
      "https://maxrchung-rails.s3.amazonaws.com/uploads/ofl_thumbnail.png",
    title: "osu! UCI Fall LAN",
    start: "2015-09-01T07:00:00.000Z",
    end: "2015-11-01T07:00:00.000Z",
    description: "Self organized and hosted osu! tournament",
    time: "2024-02-05T20:49:58.672Z",
  },
  slicensetodye: {
    thumbnail: "https://maxrchung-rails.s3.amazonaws.com/uploads/slicense.png",
    title: "SLicense to Dye",
    start: "2013-10-01T07:00:00.000Z",
    end: "2014-05-01T07:00:00.000Z",
    description:
      "Action-puzzle game best described as Fruit Ninja with color theory",
    time: "2022-06-19T15:11:38.055Z",
  },
  maxrchung: {
    thumbnail: "https://maxrchung-rails.s3.amazonaws.com/uploads/icon.png",
    title: "maxrchung",
    start: "2014-09-01T07:00:00.000Z",
    end: undefined,
    description: "Personal website",
    time: "2022-01-09T21:09:45.012Z",
  },
  tegami: {
    thumbnail:
      "https://maxrchung-rails.s3.amazonaws.com/uploads/tegami_thumbnail.png",
    title: "Tegami",
    start: "2017-06-01T07:00:00.000Z",
    end: "2017-10-01T07:00:00.000Z",
    description: "osu! rotoscope animation storyboard",
    time: "2020-05-19T03:43:49.612Z",
  },
  crusadersinvirtuality: {
    thumbnail: "",
    title: "Crusaders In Virtuality",
    start: "2016-11-01T07:00:00.000Z",
    end: "2017-06-01T07:00:00.000Z",
    description: "osu! storyboard game/visualization",
    time: "2017-10-25T06:10:28.832Z",
  },
  fuckboy: {
    thumbnail:
      "https://maxrchung-rails.s3.amazonaws.com/uploads/zealios_switch.png",
    title: "Fuckboy",
    start: "2016-07-01T07:00:00.000Z",
    end: "2016-12-01T08:00:00.000Z",
    description: "Planck keyboard",
    time: "2018-06-15T23:48:18.467Z",
  },
  dualive: {
    thumbnail:
      "https://maxrchung-rails.s3.amazonaws.com/uploads/dualive_thumbnail.png",
    title: "Dualive",
    start: "2016-06-01T07:00:00.000Z",
    end: "2016-11-01T07:00:00.000Z",
    description: "osu! beatmap storyboard",
    time: "2017-06-12T11:35:07.937Z",
  },
  flowertrip: {
    thumbnail:
      "https://maxrchung-rails.s3.amazonaws.com/uploads/flowertrip_thumbnail.png",
    title: "Flower Trip",
    start: "2016-04-01T07:00:00.000Z",
    end: "2016-06-01T07:00:00.000Z",
    description: "Originally produced osu! beatmap",
    time: "2016-11-19T15:06:56.812Z",
  },
  crybot: {
    thumbnail:
      "https://maxrchung-rails.s3.amazonaws.com/uploads/asian_wassup.jpg",
    title: "Cry Bot",
    start: "2016-04-01T07:00:00.000Z",
    end: "2017-07-01T07:00:00.000Z",
    description: "Keeps track of crying",
    time: "2017-07-10T08:03:19.624Z",
  },
  socialrejection: {
    thumbnail:
      "https://maxrchung-rails.s3.amazonaws.com/uploads/sore_thumbnail.png",
    title: "Social Rejection",
    start: "2016-04-01T07:00:00.000Z",
    end: "2016-04-01T07:00:00.000Z",
    description: "A story of betrayal, war, and romance",
    time: "2016-04-21T02:07:44.743Z",
  },
  agequodagis: {
    thumbnail:
      "https://maxrchung-rails.s3.amazonaws.com/uploads/aga_thumbnail.png",
    title: "Age quod agis",
    start: "2016-03-01T08:00:00.000Z",
    end: "2016-04-01T07:00:00.000Z",
    description: "osu! mania 4K beatmap",
    time: "2016-04-27T20:50:50.727Z",
  },
  networkingwhyisitblackkillerself: {
    thumbnail:
      "https://maxrchung-rails.s3.amazonaws.com/uploads/killerself_thumbnail.png",
    title: "networking_why is it black-killer-self",
    start: "2016-03-01T08:00:00.000Z",
    end: "2016-03-01T08:00:00.000Z",
    description: "2nd person shooter where the goal is to kill yourself",
    time: "2016-03-30T06:28:00.476Z",
  },
  barkleyno: {
    thumbnail:
      "https://maxrchung-rails.s3.amazonaws.com/uploads/barkleyno_thumbnail2.png",
    title: "BARKLEYNO",
    start: "2015-01-01T08:00:00.000Z",
    end: "2015-03-01T08:00:00.000Z",
    description: "Mapped song for osu!",
    time: "2016-02-10T04:53:25.817Z",
  },
  siliconheart: {
    thumbnail: "https://maxrchung-rails.s3.amazonaws.com/uploads/pinkHeart.png",
    title: "Silicon Heart",
    start: "2015-03-01T08:00:00.000Z",
    end: "2015-06-01T07:00:00.000Z",
    description: "Originally produced instrumental song made for osu!",
    time: "2016-03-02T22:36:48.539Z",
  },
  osuucisummerleague: {
    thumbnail: "https://maxrchung-rails.s3.amazonaws.com/uploads/osl_logo.png",
    title: "osu! UCI Summer League",
    start: "2015-06-01T07:00:00.000Z",
    end: "2015-09-01T07:00:00.000Z",
    description: "Online osu! league",
    time: "2016-02-27T03:42:57.362Z",
  },
  pressstartlan: {
    thumbnail:
      "https://maxrchung-rails.s3.amazonaws.com/uploads/ps_thumbnail.jpg",
    title: "Press Start LAN",
    start: "2015-04-01T07:00:00.000Z",
    end: "2015-05-01T07:00:00.000Z",
    description: "osu! tournament for a LAN",
    time: "2016-02-25T00:44:57.531Z",
  },
  imjustanaveragemagicalgirlsorry: {
    thumbnail:
      "https://maxrchung-rails.s3.amazonaws.com/uploads/mg_thumbnail.png",
    title: "I'm Just an Average Magical Girl, Sorry.",
    start: "2015-10-01T07:00:00.000Z",
    end: "2015-12-01T08:00:00.000Z",
    description: "Mapping project for osu!",
    time: "2016-03-10T03:08:43.658Z",
  },
  sweetregret: {
    thumbnail:
      "https://maxrchung-rails.s3.amazonaws.com/uploads/sr_thumbnail.png",
    title: "Sweet Regret",
    start: "2015-06-01T07:00:00.000Z",
    end: "2015-10-01T07:00:00.000Z",
    description: "Originally produced vocaloid song made for osu!",
    time: "2016-11-19T15:07:53.244Z",
  },
  lefttodie: {
    thumbnail:
      "https://maxrchung-rails.s3.amazonaws.com/uploads/lefttodie_thumbnail.png",
    title: "Left to Die",
    start: "2015-01-01T08:00:00.000Z",
    end: "2015-01-01T08:00:00.000Z",
    description:
      "Cat Mario inspired platformer where facing left inverses all colors and blocks",
    time: "2016-02-09T12:16:58.645Z",
  },
  blockbuddies: {
    thumbnail:
      "https://maxrchung-rails.s3.amazonaws.com/uploads/blockbuddies_thumbnail.png",
    title: "Block Buddies",
    start: "2014-10-01T07:00:00.000Z",
    end: "2015-03-01T08:00:00.000Z",
    description: "Multiplayer Tetris Attack",
    time: "2016-02-12T08:35:41.443Z",
  },
  minutestomidnight: {
    thumbnail:
      "https://maxrchung-rails.s3.amazonaws.com/uploads/minutestomidnight_thumbnail.png",
    title: "Minutes to Midnight",
    start: "2015-04-01T07:00:00.000Z",
    end: "2015-04-01T07:00:00.000Z",
    description:
      "Platformer about a hero rushing up a clocktower to save the princess",
    time: "2016-02-17T19:31:08.197Z",
  },
  pokemans: {
    thumbnail:
      "https://maxrchung-rails.s3.amazonaws.com/uploads/pokemans_thumbnail.png",
    title: "POKEMANS",
    start: "2015-03-01T08:00:00.000Z",
    end: "2015-03-01T08:00:00.000Z",
    description: "Basically Pokemon with naked people",
    time: "2016-02-15T05:14:26.074Z",
  },
  blueballs: {
    thumbnail:
      "https://maxrchung-rails.s3.amazonaws.com/uploads/blueballs_thumbnail.png",
    title: "Blue Balls",
    start: "2013-03-01T08:00:00.000Z",
    end: "2015-05-01T07:00:00.000Z",
    description: "Pong inspired jumping game about two blue balls",
    time: "2016-02-22T18:41:18.678Z",
  },
  autumn: {
    thumbnail: "https://maxrchung-rails.s3.amazonaws.com/uploads/autumn.png",
    title: "Autumn",
    start: "2014-10-01T07:00:00.000Z",
    end: "2015-03-01T08:00:00.000Z",
    description: "Roguelike game that involves hacking, tofu, and autumn",
    time: "2016-02-16T11:14:53.387Z",
  },
  ariathefootball: {
    thumbnail: "https://maxrchung-rails.s3.amazonaws.com/uploads/aria.png",
    title: "ARIA The FOOTBALL",
    start: "2015-09-01T07:00:00.000Z",
    end: "2015-09-01T07:00:00.000Z",
    description:
      "Game combining the anime/manga series Aria with Rocket League",
    time: "2016-03-01T13:36:29.795Z",
  },
  osuuci: {
    thumbnail: "https://maxrchung-rails.s3.amazonaws.com/uploads/osuuci.png",
    title: "osu! UCI",
    start: "2014-11-01T07:00:00.000Z",
    end: "2015-12-01T08:00:00.000Z",
    description: "Club at UCI dedicated to playing and discussing osu!",
    time: "2016-03-20T12:06:14.152Z",
  },
  goinghome: {
    thumbnail:
      "https://maxrchung-rails.s3.amazonaws.com/uploads/gonig_home_thumbnail.png",
    title: "Going Home",
    start: "2016-01-01T08:00:00.000Z",
    end: "2016-01-01T08:00:00.000Z",
    description: "Resource management game about guiding a ship home",
    time: "2016-03-23T17:54:36.905Z",
  },
  quaterniontoodrunk4atitlebasicallyatuple: {
    thumbnail: "https://maxrchung-rails.s3.amazonaws.com/uploads/beerTile.png",
    title: "Quaternion: Too Drunk 4 a Title (Basically a Tuple)",
    start: "2015-12-01T08:00:00.000Z",
    end: "2015-12-01T08:00:00.000Z",
    description: "Networked battle arena game with drunk fighters",
    time: "2016-03-21T21:26:45.831Z",
  },
  tetrisbuddies: {
    thumbnail:
      "https://maxrchung-rails.s3.amazonaws.com/uploads/tetrisbuddies_thumbnail.png",
    title: "Tetris Buddies",
    start: "2014-12-01T08:00:00.000Z",
    end: "2014-12-01T08:00:00.000Z",
    description: "Networked Tetris featuring ME!ME!ME!",
    time: "2016-02-09T03:52:48.984Z",
  },
  katanashoujo: {
    thumbnail:
      "https://maxrchung-rails.s3.amazonaws.com/uploads/katanashoujo.png",
    title: "Katana Shoujo",
    start: "2014-08-01T07:00:00.000Z",
    end: "2014-08-01T07:00:00.000Z",
    description: "Visual novel parody of Katawa Shoujo",
    time: "2016-02-08T09:15:53.962Z",
  },
  kidnapper: {
    thumbnail: "https://maxrchung-rails.s3.amazonaws.com/uploads/kidnapper.png",
    title: "Kidnapper",
    start: "2013-12-01T08:00:00.000Z",
    end: "2013-12-01T08:00:00.000Z",
    description: "Tower defense game where you put kids into naps...",
    time: "2016-02-08T09:02:35.673Z",
  },
  vervesofsteel: {
    thumbnail: "https://maxrchung-rails.s3.amazonaws.com/uploads/verves.png",
    title: "Verves of Steel",
    start: "2014-04-01T07:00:00.000Z",
    end: "2014-04-01T07:00:00.000Z",
    description:
      "Bullet hell game that uses modified VERVE sensors as controllers",
    time: "2016-02-08T09:02:02.840Z",
  },
  stringtheory: {
    thumbnail:
      "https://maxrchung-rails.s3.amazonaws.com/uploads/stringTheory200.png",
    title: "String Theory",
    start: "2014-01-01T08:00:00.000Z",
    end: "2014-01-01T08:00:00.000Z",
    description: "Teleporting cat platformer",
    time: "2016-02-08T09:01:44.118Z",
  },
  wingsofrage: {
    thumbnail:
      "https://maxrchung-rails.s3.amazonaws.com/uploads/wings_of_rage_thumb.png",
    title: "Wings of Rage",
    start: "2013-04-01T07:00:00.000Z",
    end: "2013-06-01T07:00:00.000Z",
    description: "Bullet hell game with switchable weapons",
    time: "2016-02-08T09:01:32.576Z",
  },
  apocalypseuniversity: {
    thumbnail:
      "https://maxrchung-rails.s3.amazonaws.com/uploads/apocalypseuniversity.png",
    title: "Apocalypse University",
    start: "2012-12-01T08:00:00.000Z",
    end: "2013-04-01T07:00:00.000Z",
    description: "Turn-based strategy game with rock-paper-scissors",
    time: "2016-02-01T05:04:27.905Z",
  },
  blockescape: {
    thumbnail:
      "https://maxrchung-rails.s3.amazonaws.com/uploads/blockescape.png",
    title: "Block Escape",
    start: "2012-10-01T07:00:00.000Z",
    end: "2012-12-01T08:00:00.000Z",
    description: "Reverse Angry Birds",
    time: "2016-02-08T09:00:58.926Z",
  },
  interntainment: {
    thumbnail:
      "https://maxrchung-rails.s3.amazonaws.com/uploads/interntainment.png",
    title: "Interntainment",
    start: "2012-10-01T07:00:00.000Z",
    end: "2012-10-01T07:00:00.000Z",
    description: "Platformer about abducting interns",
    time: "2016-02-08T08:59:09.812Z",
  },
  firstreality: {
    thumbnail:
      "https://maxrchung-rails.s3.amazonaws.com/uploads/firstreality.png",
    title: "First Reality",
    start: "2011-06-01T07:00:00.000Z",
    end: "2011-08-01T07:00:00.000Z",
    description: "Probably the worst game ever (not) made",
    time: "2016-03-24T09:57:24.806Z",
  },
};

export default projectConfigs;
