const { initializeApp } = require('firebase/app');
const { getFirestore, doc, setDoc, deleteDoc } = require('firebase/firestore');

const firebaseConfig = {
  apiKey: 'AIzaSyBhLkHzfJU7FcXVZTjjHR61i7uYJ1LaqNM',
  authDomain: 'viscomplast-6d417.firebaseapp.com',
  projectId: 'viscomplast-6d417',
  storageBucket: 'viscomplast-6d417.firebasestorage.app',
  messagingSenderId: '483989952801',
  appId: '1:483989952801:web:9f4764659a2fbaaeb80660',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const slidingSystemsSection = {
  sectionTitle: {
    en: 'Profiles',
    ro: 'Profiluri',
    ru: 'Профили',
  },
  togglers: {
    characteristics: {
      en: 'Characteristics',
      ro: 'Caracteristici',
      ru: 'Характеристики',
    },
    description: {
      en: 'Description',
      ro: 'Descriere',
      ru: 'Описание',
    },
  },
  profiles: [
    {
      id: 1,
      title: {
        en: 'VEKA 70',
        ro: 'VEKA 70',
        ru: 'VEKA 70',
      },
      image:
        'https://firebasestorage.googleapis.com/v0/b/viscomplast-6d417.firebasestorage.app/o/profiles%2FVEKA-705.png?alt=media&token=de506b22-dd7b-4b56-8bb5-d7f867dbfb62',
      description: {
        en: 'The VEKA 70 PVC profile provides superior thermal and sound insulation, contributing to energy efficiency. It is resistant to extreme weather conditions and UV radiation, offering long-lasting durability. Easy to maintain and featuring a modern design, it ensures long-term comfort and protection.',
        ro: 'Profilul PVC VEKA de 70mm asigură izolație termică și fonică superioară, contribuind la eficiența energetică. Este rezistent la condiții meteo extreme și UV, având o durabilitate excelentă. Ușor de întreținut și cu un design modern, oferă confort și protecție pe termen lung.',
        ru: 'Профиль PVC VEKA 70 мм обеспечивает превосходную тепло- и звукоизоляцию, способствуя энергоэффективности. Он устойчив к экстремальным погодным условиям и УФ-излучению, обладая высокой долговечностью. Легок в уходе и имеет современный дизайн, обеспечивая комфорт и защиту на долгие годы.',
      },
      characteristics: {
        en: [
          'Brand Germany',
          'Class A Profile',
          'Depth of 70 mm',
          '5 chambers',
          'Advanced sealing with double gaskets',
          'Compatible with double and triple glazing',
          'German Winkhaus hardware',
          '1.5-2mm galvanized steel reinforcement',
          'Thermal coefficient of 1.0-1.3 W/m²K',
        ],
        ro: [
          'Marcă Germania',
          'Profil Clasa A',
          'Adâncime de 70 mm',
          '5 camere',
          'Etanșare avansată cu garnituri duble',
          'Potrivit pentru geamuri duble și triple',
          'Feronerie germană Winkhaus',
          'Armătură de oțel zincat de 1,5-2mm',
          'Coeficient termic de 1,0-1,3 W/m²K',
        ],
        ru: [
          'Бренд Германия',
          'Профиль класса A',
          'Глубина 70 мм',
          '5 камер',
          'Продвинутая герметизация с двойными уплотнителями',
          'Совместимость с двойным и тройным остеклением',
          'Немецкая фурнитура Winkhaus',
          'Оцинкованное стальное армирование 1,5-2 мм',
          'Тепловой коэффициент 1,0-1,3 Вт/м²K',
        ],
      },
    },
    {
      id: 2,
      title: {
        en: 'VEKA 82',
        ro: 'VEKA 82',
        ru: 'VEKA 82',
      },
      image:
        'https://firebasestorage.googleapis.com/v0/b/viscomplast-6d417.firebasestorage.app/o/profiles%2FVEKA-825.png?alt=media&token=abb74890-730a-455f-a433-fa92d612d16f',
      description: {
        en: 'The VEKA 82 profile provides excellent thermal and sound insulation, significantly reducing heat loss. It is resistant to extreme weather conditions and UV radiation, ensuring high durability. Its modern design and advanced technology improve energy efficiency, offering enhanced comfort and long-term protection, making it ideal for energy-efficient homes.',
        ro: 'Profilul VEKA 82 asigură o izolație termică și fonică excelentă, reducând semnificativ pierderile de căldură. Este rezistent la intemperii și UV, având o durabilitate mare. Designul modern și tehnologia avansată îmbunătățesc eficiența energetică, oferind confort sporit și protecție pe termen lung, fiind ideal pentru locuințe eficiente energetic.',
        ru: 'Профиль VEKA 82 обеспечивает отличную тепло- и звукоизоляцию, значительно снижая потери тепла. Он устойчив к суровым погодным условиям и УФ-излучению, гарантируя высокую долговечность. Современный дизайн и передовые технологии повышают энергоэффективность, обеспечивая дополнительный комфорт и долгосрочную защиту, что делает его идеальным для энергоэффективных домов.',
      },
      characteristics: {
        en: [
          'Brand Germany',
          'Class A Profile',
          'Depth of 82 mm',
          '7 chambers',
          'Triple gasket sealing',
          'Triple glazing',
          'German Winkhaus hardware',
          '2mm galvanized steel reinforcement',
          'Thermal coefficient of 1.0-0.67 W/m²K',
        ],
        ro: [
          'Marcă Germania',
          'Profil Clasa A',
          'Adâncime de 82 mm',
          '7 camere',
          'Etanșare în trei rânduri de garnituri',
          'Vitrare în 3 rânduri de sticlă',
          'Feronerie germană Winkhaus',
          'Armătură de oțel zincat de 2mm',
          'Coeficient termic de 1,0-0,67 W/m²K',
        ],
        ru: [
          'Бренд Германия',
          'Профиль класса A',
          'Глубина 82 мм',
          '7 камер',
          'Уплотнение с тремя рядами уплотнителей',
          'Тройное остекление',
          'Немецкая фурнитура Winkhaus',
          'Оцинкованное стальное армирование 2 мм',
          'Тепловой коэффициент 1,0-0,67 Вт/м²K',
        ],
      },
    },
    {
      id: 3,
      title: {
        en: 'Alutech 75T (Aluminum)',
        ro: 'Alutech 75T (Aluminiu)',
        ru: 'Alutech 75T (Алюминий)',
      },
      image:
        'https://firebasestorage.googleapis.com/v0/b/viscomplast-6d417.firebasestorage.app/o/profiles%2FAlutech-755.jpg?alt=media&token=4191175d-07f3-449b-a8a1-cf950c669ebd',
      description: {
        en: 'The Alutech 75T profile provides exceptional thermal and acoustic insulation, making it perfect for modern construction and energy savings.',
        ro: 'Profilul Alutech 75T oferă performanțe excepționale de izolare termică și acustică, fiind perfect pentru construcții moderne și economii de energie.',
        ru: 'Профиль Alutech 75T обеспечивает исключительную тепло и звукоизоляцию, идеально подходя для современных построек и энергосбережения.',
      },
      characteristics: {
        en: [
          'Depth of 75 mm',
          'Thermal barrier of 34mm',
          'High energy efficiency',
          'Double or triple glazing',
          'High structural strength',
          'Sealing with two or three gasket rows',
          'Excellent for large windows',
        ],
        ro: [
          'Adâncime de 75 mm',
          'Barieră termică de 34mm',
          'Eficiență energetică ridicată',
          'Vitrare în 2 sau 3 rânduri de sticlă',
          'Rezistență structurală ridicată',
          'Etanșare în două sau trei rânduri de garnituri',
          'Excelent pentru ferestre mari',
        ],
        ru: [
          'Глубина 75 мм',
          'Термический барьер 34 мм',
          'Высокая энергоэффективность',
          'Двойное или тройное остекление',
          'Высокая структурная прочность',
          'Уплотнение с двумя или тремя рядами уплотнителей',
          'Отлично подходит для больших окон',
        ],
      },
    },
  ],
};

async function updateProfilesSection() {
  try {
    const docRef = doc(db, 'exportFrantaBelgia', 'profilesSection');
    await deleteDoc(docRef);

    await setDoc(docRef, slidingSystemsSection, { merge: true });
    console.log('✅ Updated successfully!');
  } catch (error) {
    console.error('❌ Error updating:', error);
  }
}

updateProfilesSection();
