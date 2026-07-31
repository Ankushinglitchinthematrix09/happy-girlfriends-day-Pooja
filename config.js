/* ============================================================
   GIRLFRIEND'S DAY — CONFIG
   This is the only file you *need* to touch to personalize
   the site. Everything below is plain text / lists — edit
   freely, save, and refresh the page.
   ============================================================ */

const CONFIG = {

  // ---- Names ----
  herName: "Pooja",                // shown throughout the site
  yourSignOff: "Your Person",      // how the closing letter is signed

  // ---- Her pet name (shown as a little highlighted line under the hero) ----
  // Leave petNameLine empty ("") to hide this line entirely.
  petNameLine: "i love you my rasmalai 🍮💗",

  // ---- Decorative accents ----
  // Shown in the seal, floating background, and little dividers.
  sealEmoji: "🧸",                  // the icon on the wax seal (try 🧸 💕 🐻 💗)
  heartEmoji: "💗",

  // ---- Landing envelope ----
  envelopeTag: "FOR MY RASMALAI, POOJA",
  tapToOpenText: "tap to open",

  // ---- Hero letter (first section after the envelope opens) ----
  heroTag: "FOR MY FAVOURITE PERSON",
  heroTitle: "Happy Girlfriend's Day, Pooja",
  heroSubtitle: "for you, always",
  heroBody:
    "Today is all about you. I built this tiny corner of the internet " +
    "to say what I don't say often enough — that you make ordinary days " +
    "feel like the good kind of story. Stay a while, my love. 🧸💕",

  // ---- "Our Song" player ----
  // Drop an mp3 into /assets/song.mp3 and it will play here.
  // Leave songTitle empty ("") to hide this card entirely.
  songTitle: "Our Song",
  songSubtitle: "a track that's just us",
  songFile: "assets/song.mp3",
  // A tiny lyric or line from the song — shown under the player.
  // Leave empty ("") to hide it.
  songQuote: "\"…and every line of it sounds like you.\"",

  // Text on the little button under the song card that jumps down
  // to the photo album / moments section.
  heroJumpText: "SEE YOUR LITTLE ALBUM",

  // ---- Moments / photo gallery section ----
  momentsTag: "ALL ABOUT YOU",
  momentsTitle: "you, in a few frames",
  momentsSubtitle: "a handful of your moments I can't stop looking at",
  // Starter caption shown before any real photos are uploaded.
  defaultCaption: "I'd choose this — you, exactly like this — every time.",

  // Photos that ship with the site (visible to HER on any device,
  // no upload needed). Add files to /assets/photos/ and list them here.
  // Anything a visitor uploads through the "add photos" box is saved
  // only in that browser, on top of this list — so for a gift you send
  // her, put your real photos here.
  photos: [
    // { src: "assets/photos/photo1.jpg", caption: "our first date 🍮" },
    // { src: "assets/photos/photo2.jpg", caption: "that trip we took" },
  ],

  // Text on the button at the end of the moments section that jumps
  // down to the "why I adore you" bouquet section.
  momentsJumpText: "WHY I ADORE YOU",

  // ---- Little details section (new) ----
  detailsTag: "LITTLE DETAILS",
  detailsTitle: "the little things I notice",
  detailsSubtitle: "small stuff, big feelings",
  details: [
    { icon: "🧸", label: "favourite hug", value: "the too-long ones after a bad day" },
    { icon: "☕", label: "your order", value: "you know exactly what I mean" },
    { icon: "🎧", label: "our song", value: "the one that comes on at the best moments" },
    { icon: "💌", label: "inside joke", value: "the one only we laugh at" },
    { icon: "🌙", label: "best time of day", value: "late-night talks about nothing" },
    { icon: "📅", label: "us, so far", value: "a little over a month together, and it already feels like something real" },
    { icon: "💗", label: "why", value: "because it's you, every time" }
  ],

  // Text on the button at the end of the details section that jumps
  // down to the bouquet section.
  detailsJumpText: "A LITTLE BOUQUET",

  // ---- Reasons / bouquet section ----
  bouquetTag: "A LITTLE BOUQUET",
  bouquetTitle: "a bloom for every reason I adore you",
  bouquetSubtitle: "picked just for you",
  reasons: [
    { icon: "🌸", text: "you feel like home" },
    { icon: "🌷", text: "your laugh is my favourite sound" },
    { icon: "🌼", text: "you make ordinary days magic" },
    { icon: "💠", text: "you're my calm and my spark" },
    { icon: "🌺", text: "you make me want to be better" },
    { icon: "🌻", text: "it's you. it's always you." }
  ],

  // ---- Closing letter ----
  letterTag: "ONE LAST THING",
  letterParagraphs: [
    "Thank you for being the calm in my chaos and the spark in my ordinary. " +
      "For the late-night talks, the terrible puns, and the way you always " +
      "know when I need a hug before I do. 🧸",
    "It's only been a little over a month since we found each other, but " +
      "it already feels like so much more. And I hope this relationship goes " +
      "a long, long way — further than either of us can even see from here. 💗",
    "I hope today feels soft and warm and completely yours. I hope you feel " +
      "even a fraction of how much you're adored. And I hope you always know " +
      "— even on the days I forget to say it — I choose you, every single time. 💗",
    "i love you my rasmalai, Pooja. Always have, always will. 🍮💗"
  ]
};
