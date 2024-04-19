import s3 from "@/s3";

export interface ProjectConfig {
  thumbnail: string;
  title: string;
  description: string;
  start: string;
  end?: string;
}

interface ProjectConfigs {
  [slug: string]: ProjectConfig;
}

export const projectConfigs: ProjectConfigs = {
  slicense2dye: {
    thumbnail: s3("uploads/IconYellowBg512.png"),
    title: "SLicense 2 Dye",
    start: "2022-06-01T07:00:00.000Z",
    end: "2023-04-01T07:00:00.000Z",
    description: "Fruit ninja with color theory, SLicense to Dye 2.0",
  },
  skr: {
    thumbnail: s3("uploads/skr-thumbnail.png"),
    title: "skr",
    start: "2023-07-01T07:00:00.000Z",
    end: "1 Sep 2023",
    description: "skribblio clone",
  },
  love: {
    thumbnail: s3("uploads/b2.png"),
    title: "Love",
    start: "2023-10-01T07:00:00.000Z",
    end: "2024-01-01T08:00:00.000Z",
    description: "osu! 3D lyric storyboard",
  },
  tracker: {
    thumbnail: "",
    title: "tracker",
    start: "2022-12-01T08:00:00.000Z",
    end: "2023-06-01T07:00:00.000Z",
    description: "Simple web app to track things",
  },
  retro: {
    thumbnail: s3("uploads/mstile-144x144.png"),
    title: "retro",
    start: "2021-05-01T07:00:00.000Z",
    end: "Jun 26, 2022",
    description: "A simple retrospective tool.",
  },
  S2VX: {
    thumbnail: s3("uploads/s2vxlogo99.png"),
    title: "S2VX",
    start: "2017-11-01T07:00:00.000Z",
    end: "2021-11-01T07:00:00.000Z",
    description:
      "yeah it's like osu! but with more squares and motion sickness",
  },
  functionalvote: {
    thumbnail: s3("uploads/functional_vote_thumbnail.png"),
    title: "Functional Vote",
    start: "2020-02-01T08:00:00.000Z",
    end: "Jun 19, 2022",
    description: "Website for creating ranked-choice polls",
  },
  ghettoboy: {
    thumbnail: s3("uploads/ghetto_usb_connection.jpg"),
    title: "Ghettoboy",
    start: "2018-01-01T08:00:00.000Z",
    end: "2018-02-01T08:00:00.000Z",
    description: "Handwired keyboard",
  },
  necktoneck: {
    thumbnail: s3("uploads/NeckLogo.png"),
    title: "Neck to Neck",
    start: "2022-09-01T07:00:00.000Z",
    end: "2022-09-01T07:00:00.000Z",
    description: "Networked platformer loosely based on Japanese folklore",
  },
  THRUSTIN: {
    thumbnail: s3("uploads/THRUSTIN_thumbnail.png"),
    title: "THRUSTIN",
    start: "2019-02-01T08:00:00.000Z",
    end: "Jun 19, 2022",
    description: "Online THRUST-in-the-blank game",
  },
  drain: {
    thumbnail: s3("uploads/drain_thumbnail.png"),
    title: "Drain",
    start: "2018-06-01T07:00:00.000Z",
    end: "2018-12-01T08:00:00.000Z",
    description: "osu! storyboard",
  },
  dreamsolister: {
    thumbnail: s3("uploads/euphonium.png"),
    title: "DREAM SOLISTER",
    start: "2018-02-01T08:00:00.000Z",
    end: "2020-06-01T07:00:00.000Z",
    description: "osu! storyboard",
  },
  clgretweet: {
    thumbnail: s3("uploads/clg.png"),
    title: "CLG Retweet",
    start: "2016-05-01T07:00:00.000Z",
    end: "2017-07-01T07:00:00.000Z",
    description: "Twitter bot that retweets CLG tweets",
  },
  tatamigalaxies: {
    thumbnail: s3("uploads/thumbnail.png"),
    title: "Tatami Galaxies",
    start: "2014-05-01T07:00:00.000Z",
    end: "2014-09-01T07:00:00.000Z",
    description: "Co-op exploration game based on the anime The Tatami Galaxy",
  },
  maccreeeeee: {
    thumbnail: s3("uploads/maccreeeeee_thumbnail.png"),
    title: "MacCREEEEEE",
    start: "2017-07-01T07:00:00.000Z",
    end: "2017-07-01T07:00:00.000Z",
    description:
      "Top-down battle arena inspired by Bloodline Champions and Overwatch",
  },
  osuucifalllan: {
    thumbnail: s3("uploads/ofl_thumbnail.png"),
    title: "osu! UCI Fall LAN",
    start: "2015-09-01T07:00:00.000Z",
    end: "2015-11-01T07:00:00.000Z",
    description: "Self organized and hosted osu! tournament",
  },
  slicensetodye: {
    thumbnail: s3("uploads/slicense.png"),
    title: "SLicense to Dye",
    start: "2013-10-01T07:00:00.000Z",
    end: "2014-05-01T07:00:00.000Z",
    description:
      "Action-puzzle game best described as Fruit Ninja with color theory",
  },
  maxrchung: {
    thumbnail: s3("uploads/icon.png"),
    title: "maxrchung (Rails)",
    start: "2014-09-01T07:00:00.000Z",
    end: "Feb 2024",
    description: "Personal website rebuilt with Ruby on Rails",
  },
  tegami: {
    thumbnail: s3("uploads/tegami_thumbnail.png"),
    title: "Tegami",
    start: "2017-06-01T07:00:00.000Z",
    end: "2017-10-01T07:00:00.000Z",
    description: "osu! rotoscope animation storyboard",
  },
  crusadersinvirtuality: {
    thumbnail: "",
    title: "Crusaders In Virtuality",
    start: "2016-11-01T07:00:00.000Z",
    end: "2017-06-01T07:00:00.000Z",
    description: "osu! storyboard game/visualization",
  },
  fuckboy: {
    thumbnail: s3("uploads/zealios_switch.png"),
    title: "Fuckboy",
    start: "2016-07-01T07:00:00.000Z",
    end: "2016-12-01T08:00:00.000Z",
    description: "Planck keyboard",
  },
  dualive: {
    thumbnail: s3("uploads/dualive_thumbnail.png"),
    title: "Dualive",
    start: "2016-06-01T07:00:00.000Z",
    end: "2016-11-01T07:00:00.000Z",
    description: "osu! beatmap storyboard",
  },
  flowertrip: {
    thumbnail: s3("uploads/flowertrip_thumbnail.png"),
    title: "Flower Trip",
    start: "2016-04-01T07:00:00.000Z",
    end: "2016-06-01T07:00:00.000Z",
    description: "Originally produced osu! beatmap",
  },
  crybot: {
    thumbnail: s3("uploads/asian_wassup.jpg"),
    title: "Cry Bot",
    start: "2016-04-01T07:00:00.000Z",
    end: "2017-07-01T07:00:00.000Z",
    description: "Keeps track of crying",
  },
  socialrejection: {
    thumbnail: s3("uploads/sore_thumbnail.png"),
    title: "Social Rejection",
    start: "2016-04-01T07:00:00.000Z",
    end: "2016-04-01T07:00:00.000Z",
    description: "A story of betrayal, war, and romance",
  },
  agequodagis: {
    thumbnail: s3("uploads/aga_thumbnail.png"),
    title: "Age quod agis",
    start: "2016-03-01T08:00:00.000Z",
    end: "2016-04-01T07:00:00.000Z",
    description: "osu! mania 4K beatmap",
  },
  networkingwhyisitblackkillerself: {
    thumbnail: s3("uploads/killerself_thumbnail.png"),
    title: "networking_why is it black-killer-self",
    start: "2016-03-01T08:00:00.000Z",
    end: "2016-03-01T08:00:00.000Z",
    description: "2nd person shooter where the goal is to kill yourself",
  },
  barkleyno: {
    thumbnail: s3("uploads/barkleyno_thumbnail2.png"),
    title: "BARKLEYNO",
    start: "2015-01-01T08:00:00.000Z",
    end: "2015-03-01T08:00:00.000Z",
    description: "Mapped song for osu!",
  },
  siliconheart: {
    thumbnail: s3("uploads/pinkHeart.png"),
    title: "Silicon Heart",
    start: "2015-03-01T08:00:00.000Z",
    end: "2015-06-01T07:00:00.000Z",
    description: "Originally produced instrumental song made for osu!",
  },
  osuucisummerleague: {
    thumbnail: s3("uploads/osl_logo.png"),
    title: "osu! UCI Summer League",
    start: "2015-06-01T07:00:00.000Z",
    end: "2015-09-01T07:00:00.000Z",
    description: "Online osu! league",
  },
  pressstartlan: {
    thumbnail: s3("uploads/ps_thumbnail.jpg"),
    title: "Press Start LAN",
    start: "2015-04-01T07:00:00.000Z",
    end: "2015-05-01T07:00:00.000Z",
    description: "osu! tournament for a LAN",
  },
  imjustanaveragemagicalgirlsorry: {
    thumbnail: s3("uploads/mg_thumbnail.png"),
    title: "I'm Just an Average Magical Girl, Sorry.",
    start: "2015-10-01T07:00:00.000Z",
    end: "2015-12-01T08:00:00.000Z",
    description: "Mapping project for osu!",
  },
  sweetregret: {
    thumbnail: s3("uploads/sr_thumbnail.png"),
    title: "Sweet Regret",
    start: "2015-06-01T07:00:00.000Z",
    end: "2015-10-01T07:00:00.000Z",
    description: "Originally produced vocaloid song made for osu!",
  },
  lefttodie: {
    thumbnail: s3("uploads/lefttodie_thumbnail.png"),
    title: "Left to Die",
    start: "2015-01-01T08:00:00.000Z",
    end: "2015-01-01T08:00:00.000Z",
    description:
      "Cat Mario inspired platformer where facing left inverses all colors and blocks",
  },
  blockbuddies: {
    thumbnail: s3("uploads/blockbuddies_thumbnail.png"),
    title: "Block Buddies",
    start: "2014-10-01T07:00:00.000Z",
    end: "2015-03-01T08:00:00.000Z",
    description: "Multiplayer Tetris Attack",
  },
  minutestomidnight: {
    thumbnail: s3("uploads/minutestomidnight_thumbnail.png"),
    title: "Minutes to Midnight",
    start: "2015-04-01T07:00:00.000Z",
    end: "2015-04-01T07:00:00.000Z",
    description:
      "Platformer about a hero rushing up a clocktower to save the princess",
  },
  pokemans: {
    thumbnail: s3("uploads/pokemans_thumbnail.png"),
    title: "POKEMANS",
    start: "2015-03-01T08:00:00.000Z",
    end: "2015-03-01T08:00:00.000Z",
    description: "Basically Pokemon with naked people",
  },
  blueballs: {
    thumbnail: s3("uploads/blueballs_thumbnail.png"),
    title: "Blue Balls",
    start: "2013-03-01T08:00:00.000Z",
    end: "2015-05-01T07:00:00.000Z",
    description: "Pong inspired jumping game about two blue balls",
  },
  autumn: {
    thumbnail: s3("uploads/autumn.png"),
    title: "Autumn",
    start: "2014-10-01T07:00:00.000Z",
    end: "2015-03-01T08:00:00.000Z",
    description: "Roguelike game that involves hacking, tofu, and autumn",
  },
  ariathefootball: {
    thumbnail: s3("uploads/aria.png"),
    title: "ARIA The FOOTBALL",
    start: "2015-09-01T07:00:00.000Z",
    end: "2015-09-01T07:00:00.000Z",
    description:
      "Game combining the anime/manga series Aria with Rocket League",
  },
  osuuci: {
    thumbnail: s3("uploads/osuuci.png"),
    title: "osu! UCI",
    start: "2014-11-01T07:00:00.000Z",
    end: "2015-12-01T08:00:00.000Z",
    description: "Club at UCI dedicated to playing and discussing osu!",
  },
  goinghome: {
    thumbnail: s3("uploads/gonig_home_thumbnail.png"),
    title: "Going Home",
    start: "2016-01-01T08:00:00.000Z",
    end: "2016-01-01T08:00:00.000Z",
    description: "Resource management game about guiding a ship home",
  },
  quaterniontoodrunk4atitlebasicallyatuple: {
    thumbnail: s3("uploads/beerTile.png"),
    title: "Quaternion: Too Drunk 4 a Title (Basically a Tuple)",
    start: "2015-12-01T08:00:00.000Z",
    end: "2015-12-01T08:00:00.000Z",
    description: "Networked battle arena game with drunk fighters",
  },
  tetrisbuddies: {
    thumbnail: s3("uploads/tetrisbuddies_thumbnail.png"),
    title: "Tetris Buddies",
    start: "2014-12-01T08:00:00.000Z",
    end: "2014-12-01T08:00:00.000Z",
    description: "Networked Tetris featuring ME!ME!ME!",
  },
  katanashoujo: {
    thumbnail: s3("uploads/katanashoujo.png"),
    title: "Katana Shoujo",
    start: "2014-08-01T07:00:00.000Z",
    end: "2014-08-01T07:00:00.000Z",
    description: "Visual novel parody of Katawa Shoujo",
  },
  kidnapper: {
    thumbnail: s3("uploads/kidnapper.png"),
    title: "Kidnapper",
    start: "2013-12-01T08:00:00.000Z",
    end: "2013-12-01T08:00:00.000Z",
    description: "Tower defense game where you put kids into naps...",
  },
  vervesofsteel: {
    thumbnail: s3("uploads/verves.png"),
    title: "Verves of Steel",
    start: "2014-04-01T07:00:00.000Z",
    end: "2014-04-01T07:00:00.000Z",
    description:
      "Bullet hell game that uses modified VERVE sensors as controllers",
  },
  stringtheory: {
    thumbnail: s3("uploads/stringTheory200.png"),
    title: "String Theory",
    start: "2014-01-01T08:00:00.000Z",
    end: "2014-01-01T08:00:00.000Z",
    description: "Teleporting cat platformer",
  },
  wingsofrage: {
    thumbnail: s3("uploads/wings_of_rage_thumb.png"),
    title: "Wings of Rage",
    start: "2013-04-01T07:00:00.000Z",
    end: "2013-06-01T07:00:00.000Z",
    description: "Bullet hell game with switchable weapons",
  },
  apocalypseuniversity: {
    thumbnail: s3("uploads/apocalypseuniversity.png"),
    title: "Apocalypse University",
    start: "2012-12-01T08:00:00.000Z",
    end: "2013-04-01T07:00:00.000Z",
    description: "Turn-based strategy game with rock-paper-scissors",
  },
  blockescape: {
    thumbnail: s3("uploads/blockescape.png"),
    title: "Block Escape",
    start: "2012-10-01T07:00:00.000Z",
    end: "2012-12-01T08:00:00.000Z",
    description: "Reverse Angry Birds",
  },
  interntainment: {
    thumbnail: s3("uploads/interntainment.png"),
    title: "Interntainment",
    start: "2012-10-01T07:00:00.000Z",
    end: "2012-10-01T07:00:00.000Z",
    description: "Platformer about abducting interns",
  },
  firstreality: {
    thumbnail: s3("uploads/firstreality.png"),
    title: "First Reality",
    start: "2011-06-01T07:00:00.000Z",
    end: "2011-08-01T07:00:00.000Z",
    description: "Probably the worst game ever (not) made",
  },
  maxrchungnext: {
    thumbnail: s3("the-boy/the-boy-circle.png"),
    title: "maxrchung (Next)",
    start: "1 Jan 2024",
    end: undefined,
    description: "Personal website rebuilt with Next.js and Evergreen UI",
  },
  theboy: {
    thumbnail: "/the-boy.jpg",
    title: "The Boy",
    // Note my preference is something like Aug 2011, but this doesn't seem to
    // work for Firefox/iOS. Also the day is required because if you omit it, it
    // will become the previous month due to time zone differences.
    start: "8 Aug 2011",
    end: undefined,
    description: "The Boy",
  },
  rideintherain: {
    thumbnail: s3("ride-in-the-rain/thumbnail.png"),
    title: "Ride in the Rain",
    start: "17 Feb 2024",
    end: "19 Feb 2024",
    description: "3D networked racing game",
  },
  step: {
    thumbnail: s3("step/ddr-up.png"),
    title: "Step",
    start: "01 Mar 2024",
    description: "A web tool to create step patterns",
  },
};

export default projectConfigs;
