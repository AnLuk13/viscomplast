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
    en: "Sliding Systems",
    ro: "Glisante",
    ru: "Раздвижные системы",
  },
  description: {
    en: "Sliding systems are ideal solutions for modern spaces, offering the perfect combination of comfort, functionality, and innovative design.",
    ro: "Sistemele glisante sunt soluții ideale pentru spații moderne, oferind o combinație perfectă între confort, funcționalitate și design inovator.",
    ru: "Раздвижные системы — это идеальные решения для современных помещений, обеспечивающие идеальное сочетание комфорта, функциональности и инновационного дизайна.",
  },
  typeGalleryCards: [
    {
      title: {
        en: "Tilt-and-Slide Systems on VEKA 70 or 82 Profiles",
        ro: "Glisante osciloculisante pe profil VEKA 70 sau 82",
        ru: "Поворотно-раздвижные системы на профиле VEKA 70 или 82",
      },
      description: {
        en: "These systems provide superior thermal insulation and easy handling. They are ideal for large windows and doors requiring controlled ventilation and an elegant design.",
        ro: "Aceste sisteme oferă izolație termică superioară și o manipulare ușoară. Sunt ideale pentru ferestre și uși mari care necesită ventilație controlată și un design elegant.",
        ru: "Эти системы обеспечивают превосходную теплоизоляцию и легкость управления. Они идеально подходят для больших окон и дверей, требующих контролируемой вентиляции и элегантного дизайна.",
      },
      gallery: [
        {
          id: 1,
          src: "/assets/images/slide1.png",
          alt: "Tilt-and-Slide System 1",
        },
        {
          id: 2,
          src: "/assets/images/slide2.png",
          alt: "Tilt-and-Slide System 2",
        },
        {
          id: 3,
          src: "/assets/images/slide3.png",
          alt: "Tilt-and-Slide System 3",
        },
      ],
    },
    {
      title: {
        en: "Lift-and-Slide Systems on Aluminum Profiles",
        ro: "Glisante cu ridicare pe profil de aluminiu",
        ru: "Подъемно-раздвижные системы на алюминиевом профиле",
      },
      description: {
        en: "Lift-and-slide systems on aluminum profiles are designed for wide openings, combining the durability of aluminum with energy efficiency and modern aesthetics.",
        ro: "Sistemele glisante cu ridicare pe profil de aluminiu sunt create pentru deschideri largi, combinând durabilitatea aluminiului cu eficiența energetică și estetica modernă.",
        ru: "Подъемно-раздвижные системы на алюминиевом профиле разработаны для широких проемов, сочетая долговечность алюминия с энергоэффективностью и современным дизайном.",
      },
      gallery: [
        {
          id: 1,
          src: "/assets/images/slide4.png",
          alt: "Lift-and-Slide System 1",
        },
        {
          id: 2,
          src: "/assets/images/slide5.png",
          alt: "Lift-and-Slide System 2",
        },
        {
          id: 3,
          src: "/assets/images/slide6.png",
          alt: "Lift-and-Slide System 3",
        },
      ],
    },
    {
      title: {
        en: "VEKA MOTION",
        ro: "VEKA MOTION",
        ru: "VEKA MOTION",
      },
      description: {
        en: "VEKA MOTION is a premium sliding system that combines advanced technology with modern design, offering excellent functionality and outstanding aesthetics.",
        ro: "VEKA MOTION este un sistem glisant premium care combină tehnologia avansată cu un design modern, oferind o funcționalitate excelentă și un aspect estetic deosebit.",
        ru: "VEKA MOTION — это премиальная раздвижная система, которая сочетает передовые технологии с современным дизайном, обеспечивая отличную функциональность и выдающуюся эстетику.",
      },
      gallery: [
        { id: 1, src: "/assets/images/slide7.png", alt: "VEKA MOTION 1" },
        { id: 2, src: "/assets/images/slide8.png", alt: "VEKA MOTION 2" },
        { id: 3, src: "/assets/images/slide9.png", alt: "VEKA MOTION 3" },
      ],
    },
  ],
};

// ✅ Firestore update function
async function updateProfilesSection() {
  // const cleanedProfilesSection = JSON.parse(JSON.stringify(profilesSection));

  try {
    const docRef = doc(db, "exportFrantaBelgia", "slidingSystemsSection"); // ✅ Reference to Firestore document
    await deleteDoc(docRef);

    // 🔹 Write the new data
    await setDoc(docRef, slidingSystemsSection, { merge: true });
    console.log("✅ profilesSection updated successfully!");
  } catch (error) {
    console.error("❌ Error updating profilesSection:", error);
  }
}

// ✅ Run the function
updateProfilesSection();
