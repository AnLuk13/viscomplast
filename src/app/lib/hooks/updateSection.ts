const { initializeApp } = require("firebase/app");
const { getFirestore, doc, setDoc, deleteDoc } = require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBhLkHzfJU7FcXVZTjjHR61i7uYJ1LaqNM",
  authDomain: "viscomplast-6d417.firebaseapp.com",
  projectId: "viscomplast-6d417",
  storageBucket: "viscomplast-6d417.firebasestorage.app",
  messagingSenderId: "483989952801",
  appId: "1:483989952801:web:9f4764659a2fbaaeb80660",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const slidingSystemsSection = {
  title: {
    en: "Types of Handles",
    ro: "Tipuri de mânere",
    ru: "Типы ручек",
  },
  types: [
    {
      id: 1,
      name: {
        en: "Saturn RAL7016",
        ro: "Saturn RAL7016",
        ru: "Saturn RAL7016",
      },
      src: "https://firebasestorage.googleapis.com/v0/b/viscomplast-6d417.firebasestorage.app/o/handlesSection%2Faluminiu8.jpg?alt=media&token=d926d471-a919-41dc-aeea-c47bc6d441b4",
    },
    {
      id: 2,
      name: {
        en: "Victory RAL8003",
        ro: "Victory RAL8003",
        ru: "Victory RAL8003",
      },
      src: "https://firebasestorage.googleapis.com/v0/b/viscomplast-6d417.firebasestorage.app/o/handlesSection%2Faluminiu6.jpg?alt=media&token=a5f746b0-e416-40ca-992d-b92463ff4566",
    },
    {
      id: 3,
      name: { en: "Dublin F9", ro: "Dublin F9", ru: "Dublin F9" },
      src: "https://firebasestorage.googleapis.com/v0/b/viscomplast-6d417.firebasestorage.app/o/handlesSection%2Faluminiu18.jpg?alt=media&token=8a27510b-4158-4d4c-bd21-a072847ec160",
    },
    {
      id: 4,
      name: {
        en: "Dublin RAL7016",
        ro: "Dublin RAL7016",
        ru: "Dublin RAL7016",
      },
      src: "https://firebasestorage.googleapis.com/v0/b/viscomplast-6d417.firebasestorage.app/o/handlesSection%2Faluminiu17.jpg?alt=media&token=fb65fd38-fa38-40d6-9418-7b4805d5c494",
    },
    {
      id: 5,
      name: {
        en: "Dublin RAL9005",
        ro: "Dublin RAL9005",
        ru: "Dublin RAL9005",
      },
      src: "https://firebasestorage.googleapis.com/v0/b/viscomplast-6d417.firebasestorage.app/o/handlesSection%2Faluminiu16.jpg?alt=media&token=8ee2535e-ffbf-4615-88e9-fa2718d103c8",
    },
    {
      id: 6,
      name: { en: "Dublin White", ro: "Dublin Alb", ru: "Dublin Белый" },
      src: "https://firebasestorage.googleapis.com/v0/b/viscomplast-6d417.firebasestorage.app/o/handlesSection%2Faluminiu14.jpg?alt=media&token=a9f65ac5-82b3-46cf-bf32-35780e856b9e",
    },
    {
      id: 7,
      name: {
        en: "Dublin RAL8077",
        ro: "Dublin RAL8077",
        ru: "Dublin RAL8077",
      },
      src: "https://firebasestorage.googleapis.com/v0/b/viscomplast-6d417.firebasestorage.app/o/handlesSection%2Faluminiu15.jpg?alt=media&token=b1e42b9f-7ee9-4c01-9350-af9f6b328fce",
    },
    {
      id: 8,
      name: { en: "Victory Gold", ro: "Victory Auriu", ru: "Victory Золотой" },
      src: "https://firebasestorage.googleapis.com/v0/b/viscomplast-6d417.firebasestorage.app/o/handlesSection%2Faluminiu1.jpg?alt=media&token=c004b17b-48d9-4ca4-b69a-0f57ac88ff47",
    },
    {
      id: 9,
      name: { en: "Saturn Gold", ro: "Saturn Auriu", ru: "Saturn Золотой" },
      src: "https://firebasestorage.googleapis.com/v0/b/viscomplast-6d417.firebasestorage.app/o/handlesSection%2Faluminiu3.jpg?alt=media&token=c28a5a3f-e662-4fa6-8c93-d9aee9c6b042",
    },
    {
      id: 10,
      name: {
        en: "Hoppe Liege White",
        ro: "Hoppe Liege Alb",
        ru: "Hoppe Liege Белый",
      },
    },
    {
      id: 11,
      name: {
        en: "Victory RAL9005",
        ro: "Victory RAL9005",
        ru: "Victory RAL9005",
      },
      src: "https://firebasestorage.googleapis.com/v0/b/viscomplast-6d417.firebasestorage.app/o/handlesSection%2Faluminiu9.jpg?alt=media&token=00a3a7cf-4f6c-4470-ae18-eb1d9d4549e8",
    },
    {
      id: 12,
      name: {
        en: "Victory RAL7016",
        ro: "Victory RAL7016",
        ru: "Victory RAL7016",
      },
      src: "https://firebasestorage.googleapis.com/v0/b/viscomplast-6d417.firebasestorage.app/o/handlesSection%2Faluminiu5.jpg?alt=media&token=a9409cb9-f183-4c1a-b4d6-f0929a251b43",
    },
    {
      id: 13,
      name: {
        en: "Saturn RAL9005",
        ro: "Saturn RAL9005",
        ru: "Saturn RAL9005",
      },
      src: "https://firebasestorage.googleapis.com/v0/b/viscomplast-6d417.firebasestorage.app/o/handlesSection%2Faluminiu12.jpg?alt=media&token=cbf14bea-e206-4032-b2ce-bf8f6a221d0a",
    },
    {
      id: 14,
      name: { en: "Victory White", ro: "Victory Alb", ru: "Victory Белый" },
      src: "https://firebasestorage.googleapis.com/v0/b/viscomplast-6d417.firebasestorage.app/o/handlesSection%2Faluminiu2.jpg?alt=media&token=2a311bb1-db16-4f57-8c11-c37cdd8d0bc7",
    },
    {
      id: 15,
      name: {
        en: "Hoppe Liege RAL8077",
        ro: "Hoppe Liege RAL8077",
        ru: "Hoppe Liege RAL8077",
      },
      src: "https://firebasestorage.googleapis.com/v0/b/viscomplast-6d417.firebasestorage.app/o/handlesSection%2Faluminiu4.jpg?alt=media&token=98c1bc29-2a15-4107-823a-602ca1b1a3bd",
    },
    {
      id: 16,
      name: {
        en: "Hoppe Liege F9",
        ro: "Hoppe Liege F9",
        ru: "Hoppe Liege F9",
      },
      src: "https://firebasestorage.googleapis.com/v0/b/viscomplast-6d417.firebasestorage.app/o/handlesSection%2Faluminiu10.jpg?alt=media&token=dcc2b088-e0dd-46b8-b7d6-a97a1d55e078",
    },
    {
      id: 17,
      name: {
        en: "Hoppe Liege RAL7016",
        ro: "Hoppe Liege RAL7016",
        ru: "Hoppe Liege RAL7016",
      },
      src: "https://firebasestorage.googleapis.com/v0/b/viscomplast-6d417.firebasestorage.app/o/handlesSection%2Faluminiu13.jpg?alt=media&token=37415682-f613-44bf-b4b4-e8a56e139d61",
    },
  ],
};
async function updateProfilesSection() {
  try {
    const docRef = doc(
      db,
      "handlesDoorsPvcAluminum",
      "handlesDoorsPvcAluminum",
    );
    await deleteDoc(docRef);

    await setDoc(docRef, slidingSystemsSection, { merge: true });
    console.log("✅ Updated successfully!");
  } catch (error) {
    console.error("❌ Error updating:", error);
  }
}

updateProfilesSection();
