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
  description: {
    en: "Sliding systems are ideal solutions for modern spaces, offering the perfect combination of comfort, functionality, and innovative design.",
    ro: "Sistemele glisante sunt soluții ideale pentru spații moderne, oferind o combinație perfectă între confort, funcționalitate și design inovator.",
    ru: "Раздвижные системы — это идеальные решения для современных помещений, обеспечивающие идеальное сочетание комфорта, функциональности и инновационного дизайна.",
  },
  title: {
    en: "Sliding Systems",
    ro: "Glisante",
    ru: "Раздвижные системы",
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
        "https://firebasestorage.googleapis.com/v0/b/viscomplast-6d417.firebasestorage.app/o/export%2Faaa.jpeg?alt=media&token=059f1f35-8b16-48da-98ff-79b8dcafff75",
        "https://firebasestorage.googleapis.com/v0/b/viscomplast-6d417.firebasestorage.app/o/export%2Fsss.jpeg?alt=media&token=844ec119-e6f8-4ad0-8636-95d4a7a1839d",
        "https://firebasestorage.googleapis.com/v0/b/viscomplast-6d417.firebasestorage.app/o/export%2Fddd.jpg?alt=media&token=aa5e8316-9c34-45ae-b8e9-edcf099c4ac9",
        "https://firebasestorage.googleapis.com/v0/b/viscomplast-6d417.firebasestorage.app/o/export%2Fffff.jpg?alt=media&token=cb88a17e-7ba9-4c24-841e-b458f50c33f5",
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
        "https://firebasestorage.googleapis.com/v0/b/viscomplast-6d417.firebasestorage.app/o/export%2Fg.jpeg?alt=media&token=447c425b-6e19-4a06-b5cd-67f96e4a0090",
        "https://firebasestorage.googleapis.com/v0/b/viscomplast-6d417.firebasestorage.app/o/export%2Fh.jpg?alt=media&token=e604a8a9-bd62-4801-8b0c-09930cc821e9",
        "https://firebasestorage.googleapis.com/v0/b/viscomplast-6d417.firebasestorage.app/o/export%2Fj.jpg?alt=media&token=fd311579-e580-4b12-8774-72e7f5bfff6e",
        "https://firebasestorage.googleapis.com/v0/b/viscomplast-6d417.firebasestorage.app/o/export%2Fk.jpg?alt=media&token=583478c0-1f22-470b-ba3e-daadc4badce5",
        "https://firebasestorage.googleapis.com/v0/b/viscomplast-6d417.firebasestorage.app/o/export%2Fl.jpg?alt=media&token=7020eb92-c319-4431-8df7-39e334bd4795",
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
        "https://firebasestorage.googleapis.com/v0/b/viscomplast-6d417.firebasestorage.app/o/export%2Fvvv.jpg?alt=media&token=11be3997-15ba-4df9-9b58-26edd11fe72e",
        "https://firebasestorage.googleapis.com/v0/b/viscomplast-6d417.firebasestorage.app/o/export%2Fbbb.png?alt=media&token=b52f2356-2952-4e9e-96f8-64f00eae6bc7",
        "https://firebasestorage.googleapis.com/v0/b/viscomplast-6d417.firebasestorage.app/o/export%2Fmmm.jpg?alt=media&token=071ae597-f22b-4b67-b38d-f838db23373b",
        "https://firebasestorage.googleapis.com/v0/b/viscomplast-6d417.firebasestorage.app/o/export%2Fnnn.jpg?alt=media&token=07010529-c0d9-4546-bb64-c97e278b06c0",
      ],
    },
  ],
};
async function updateProfilesSection() {
  try {
    const docRef = doc(db, "exportFrantaBelgia", "slidingSystemsSection"); // ✅ Reference to Firestore document
    await deleteDoc(docRef);

    await setDoc(docRef, slidingSystemsSection, { merge: true });
    console.log("✅ Updated successfully!");
  } catch (error) {
    console.error("❌ Error updating:", error);
  }
}

updateProfilesSection();
