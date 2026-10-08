// Facts behind the privacy and support pages for Evergoods' on-device
// subscription apps. Every statement here must match the shipped app.

export type ConsumerAppId = "digicam" | "verselock" | "detox";

export interface ConsumerApp {
  id: ConsumerAppId;
  name: string;
  storeName: string;
  summary: string;
  subscription: string;
  plans: string;
  permissions: { name: string; detail: string }[];
  onDevice: string[];
  help: { question: string; answer: string }[];
}

export const supportEmail = "admin@evergoodsholdings.com";
export const appleTermsUrl =
  "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/";
export const updatedAt = "October 8, 2026";

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
      "Scripture comes from the public-domain King James Version bundled in the app.",
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
};
