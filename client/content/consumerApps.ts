// Facts behind the privacy and support pages for Evergoods' on-device
// apps. Every statement here must match the shipped app.

export type ConsumerAppId =
  | "digicam"
  | "verselock"
  | "detox"
  | "nocontact"
  | "goalgrid"
  | "quitsmoking"
  | "fieldbug";

export interface ConsumerApp {
  id: ConsumerAppId;
  name: string;
  storeName: string;
  summary: string;
  /** Omitted for free apps with no in-app purchases. */
  subscription?: string;
  plans?: string;
  permissions: { name: string; detail: string }[];
  onDevice: string[];
  help: { question: string; answer: string }[];
}

export const supportEmail = "admin@evergoodsholdings.com";
export const appleTermsUrl =
  "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/";
export const updatedAt = "October 9, 2026";

export const consumerApps: Record<ConsumerAppId, ConsumerApp> = {
  digicam: {
    id: "digicam",
    name: "Digicam",
    storeName: "Digicam: Y2K Digital Camera",
    summary:
      "A camera with 2000s pocket-camera looks (hard flash, grain and a date stamp), processed entirely on your iPhone.",
    subscription: "Digicam Pro",
    plans:
      "Weekly, or yearly with a 3-day free trial. Prices are shown in the app before you subscribe.",
    permissions: [
      {
        name: "Camera",
        detail: "Used only to take photos when you open the camera.",
      },
      {
        name: "Add to Photos",
        detail:
          "Optional. Lets Digicam save the photos you take. It cannot read your existing library.",
      },
    ],
    onDevice: [
      "Looks are applied with Apple's Core Image on your iPhone. Photos are never uploaded.",
      "Your chosen look and camera color are stored on your iPhone.",
    ],
    help: [
      {
        question: "The camera shows a black screen",
        answer:
          "Open Settings > Digicam and turn on Camera, then reopen the app.",
      },
      {
        question: "Photos are not saving",
        answer:
          "Open Settings > Digicam > Photos and choose Add Photos Only.",
      },
    ],
  },
  verselock: {
    id: "verselock",
    name: "Verse Lock",
    storeName: "Verse Lock: Bible Lock & Alarm",
    summary:
      "A morning alarm that keeps the apps you choose locked until you read the day's Bible verse.",
    subscription: "Verse Lock Plus",
    plans:
      "Weekly, or yearly with a 7-day free trial. Prices are shown in the app before you subscribe.",
    permissions: [
      {
        name: "Screen Time",
        detail:
          "Lets Verse Lock lock the apps you pick. Apple shows the app list; Verse Lock only receives private tokens, never app names or what you do in them.",
      },
      {
        name: "Alarms",
        detail: "Lets Verse Lock schedule the morning alarm you set.",
      },
      {
        name: "Microphone and Speech Recognition",
        detail:
          "Used only while you read the verse aloud. Recognition runs on your iPhone; audio is not recorded, stored or sent anywhere. You can type the verse instead.",
      },
    ],
    onDevice: [
      "Your answers, alarm time and chosen apps are stored on your iPhone.",
      "Scripture comes from public-domain translations bundled in the app: the King James Version in English and the 1961 Korean Revised Version in Korean.",
    ],
    help: [
      {
        question: "The alarm did not ring",
        answer:
          "Open Settings > Verse Lock and make sure Alarms are allowed, then set the alarm again in the app.",
      },
      {
        question: "Screen Time could not connect",
        answer:
          "Screen Time needs a passcode on your iPhone and an iCloud account. Check Settings > Screen Time, then try again from the app.",
      },
    ],
  },
  detox: {
    id: "detox",
    name: "Detox",
    storeName: "Detox: Short Video Blocker",
    summary:
      "Blocks the apps whose short-video feeds pull you in, so you can keep your messages without the endless scroll.",
    subscription: "Detox Pro",
    plans:
      "Weekly, or yearly with a 3-day free trial. Prices are shown in the app before you subscribe.",
    permissions: [
      {
        name: "Screen Time",
        detail:
          "Lets Detox block the apps you pick. Apple shows the app list; Detox only receives private tokens, never app names or what you do in them.",
      },
    ],
    onDevice: [
      "Your answers, daily goal and chosen apps are stored on your iPhone.",
    ],
    help: [
      {
        question: "Screen Time could not connect",
        answer:
          "Screen Time needs a passcode on your iPhone and an iCloud account. Check Settings > Screen Time, then try again from the app.",
      },
    ],
  },
  nocontact: {
    id: "nocontact",
    name: "Sendless",
    storeName: "Sendless: No Contact Tracker",
    summary:
      "A private no-contact tracker for after a breakup: count your days, and write the messages you want to send in a vault where they are kept and never sent.",
    subscription: "Sendless Pro",
    plans:
      "Weekly, or yearly with a 3-day free trial. Prices are shown in the app before you subscribe.",
    permissions: [
      {
        name: "Notifications",
        detail:
          "Optional. An evening mood check-in and a note at each milestone, scheduled on your iPhone. Discreet mode leaves the words “no contact” out of them.",
      },
      {
        name: "Face ID or passcode",
        detail:
          "Optional. Locks Sendless when you turn the lock on. Apple handles Face ID and tells the app only whether you unlocked it.",
      },
    ],
    onDevice: [
      "The messages you write are saved on your iPhone and never sent to anyone, including Evergoods.",
      "Your start date, answers, reasons and moods are stored on your iPhone.",
      "Sendless widgets read your day count from the app's storage on your iPhone.",
    ],
    help: [
      {
        question: "I broke no contact",
        answer:
          "On Home, choose I broke no contact. You can restart the count; your best run is kept.",
      },
      {
        question: "I don't want widgets or reminders to say “no contact”",
        answer:
          "In Sendless Settings, turn on Discreet widgets and reminders. They then show only the day count.",
      },
      {
        question: "Can I get my messages back after deleting the app?",
        answer:
          "No. Messages exist only on your iPhone, so deleting Sendless deletes them.",
      },
    ],
  },
  goalgrid: {
    id: "goalgrid",
    name: "Lotus Grid",
    storeName: "Lotus Grid: Goal Planner",
    summary:
      "A 9×9 goal chart (만다라트): one goal in the center, eight pillars around it and the small actions you check off each day.",
    subscription: "Lotus Grid Pro",
    plans:
      "Weekly, or yearly with a 3-day free trial. Prices are shown in the app before you subscribe.",
    permissions: [
      {
        name: "Notifications",
        detail:
          "Optional. A daily reminder for your actions, scheduled on your iPhone.",
      },
      {
        name: "Add to Photos",
        detail:
          "Optional. Lets Lotus Grid save the chart image you export. It cannot read your existing library.",
      },
    ],
    onDevice: [
      "Your charts, goals, actions and check-offs are stored on your iPhone.",
      "Lotus Grid widgets read your chart from the app's storage on your iPhone.",
      "Exported images are made on your iPhone and go only where you share or save them.",
    ],
    help: [
      {
        question: "How do I set the chart as my wallpaper?",
        answer:
          "Tap the share button on Home, choose Lock Screen and a theme, save the image, then set it as your wallpaper in the Photos app.",
      },
      {
        question: "The image did not save",
        answer:
          "Open Settings > Lotus Grid > Photos and choose Add Photos Only.",
      },
    ],
  },
  quitsmoking: {
    id: "quitsmoking",
    name: "Unlit",
    storeName: "Unlit: Quit Smoking & Vaping",
    summary:
      "A quit-smoking tracker: your smoke-free time, the money you keep, the WHO's health milestones, and a breathing exercise to ride out cravings.",
    subscription: "Unlit Pro",
    plans:
      "Weekly, or yearly with a 3-day free trial. Prices are shown in the app before you subscribe.",
    permissions: [
      {
        name: "Notifications",
        detail:
          "Optional. A note at each health milestone and smoke-free day, scheduled on your iPhone.",
      },
    ],
    onDevice: [
      "Your answers (what you use, how much, the price, your reasons and your quit day) are stored on your iPhone.",
      "Cravings, slips and your savings goal are stored on your iPhone.",
      "Unlit widgets read your progress from the app's storage on your iPhone.",
      "The health milestones restate the World Health Organization's published benefits of quitting. They are general information, not medical advice.",
    ],
    help: [
      {
        question: "I smoked. Do I have to start over?",
        answer:
          "No. In the menu on Home, choose I smoked (or I vaped), then either log it and keep your clock, or restart your clock from now.",
      },
      {
        question: "Where can I get help quitting?",
        answer:
          "Unlit links to national quitlines: 1544-9030 in Korea and 1-800-QUIT-NOW in the US. A doctor or pharmacist can also help.",
      },
      {
        question: "Which widgets are free?",
        answer:
          "The small Home Screen widget is free. Unlit Pro adds the medium and Lock Screen widgets.",
      },
    ],
  },
  fieldbug: {
    id: "fieldbug",
    name: "Fieldbug",
    storeName: "Fieldbug: Insects & Bugs Guide",
    summary:
      "A field guide and private collection for 40 recognizable insects across the United States. Photograph from a respectful distance, compare catalogue possibilities, and confirm each find yourself. Fieldbug is free with no purchases.",
    permissions: [
      {
        name: "Camera",
        detail: "Optional. Used only when you choose Take a photo.",
      },
      {
        name: "Photos",
        detail:
          "Optional. The system photo picker shows your library, and Fieldbug receives only the photo you choose.",
      },
      {
        name: "Location",
        detail:
          "Optional, only while you use the app. Pins a new camera find on your private map.",
      },
    ],
    onDevice: [
      "Matching runs on your iPhone with Apple's Vision framework. Photos are never uploaded.",
      "Your confirmed finds, the photo you chose for each and its optional map location are stored on your iPhone.",
      "If a photo you choose already includes a location, Fieldbug reads it on your iPhone to place that find on your private map.",
      "You can export your collection from Profile at any time.",
    ],
    help: [
      {
        question: "Why do I confirm every find?",
        answer:
          "Fieldbug suggests possibilities from its catalogue on your iPhone. Many insects look alike, so nothing is added to your collection until you confirm the match. Suggestions are not authoritative identification or safety advice.",
      },
      {
        question: "My insect is not in the catalogue",
        answer:
          "Fieldbug covers 40 recognizable US insects in six groups. Search by common or scientific name. If nothing matches, nothing is added.",
      },
      {
        question: "Can I move my collection to a new iPhone?",
        answer:
          "Fieldbug has no account or cloud sync. Your collection is included in your iPhone backup, and Export local collection in Profile saves a copy of your records.",
      },
      {
        question: "How do I remove a find?",
        answer:
          "Open the insect in your collection and tap Remove from my collection.",
      },
    ],
  },
};
