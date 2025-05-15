
interface CardImage {
  id: number;
  image: string;
}

interface ThemeData {
  name: string;
  background: string;
  cardBack: string;
  cardImages: CardImage[];
}

const natureTheme: ThemeData = {
  name: "Nature",
  background: "bg-gradient-to-br from-green-100 to-emerald-200",
  cardBack: "https://img.freepik.com/premium-photo/chital-hd-8k-wallpaper-stock-photographic-image_853645-38746.jpg",
  cardImages: [
    { id: 1, image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=200" },
    { id: 2, image: "https://demo-source.imgix.net/plant.jpg"},
    { id: 3, image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=200" },
    { id: 4, image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=200" },
    { id: 5, image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=200" },
    { id: 6, image: "https://images.unsplash.com/photo-1564389909917-35fcbc0917b3?q=80&w=200" },
    { id: 7, image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=200" },
    { id: 8, image: "https://images.unsplash.com/photo-1515511624704-b8916dcc30ea?q=80&w=200" },
    { id: 9, image: "https://images.unsplash.com/photo-1533450718592-29d45635f0a9?q=80&w=200" },
    { id: 10, image: "https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?q=80&w=200" },
    { id: 11, image: "https://images.unsplash.com/photo-1455218873509-8097305ee378?q=80&w=200" },
    { id: 12, image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=200" },
    { id: 13, image: "https://images.unsplash.com/photo-1545389336-cf090694435e?q=80&w=200" },
    { id: 14, image: "https://images.unsplash.com/photo-1510797215324-95aa89f43c33?q=80&w=200" },
    { id: 15, image: "https://images.unsplash.com/photo-1552083375-1447ce886485?q=80&w=200" },
    { id: 16, image: "https://images.unsplash.com/photo-1551361415-69c87624334f?q=80&w=200" },
    { id: 17, image: "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?q=80&w=200" },
    { id: 18, image: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?q=80&w=200" },
  ]
};


const spaceTheme: ThemeData = {
  name: "Space",
  background: "bg-gradient-to-br from-indigo-900 to-purple-900",
  cardBack: "https://i.etsystatic.com/41339991/r/il/68e882/4691134315/il_1080xN.4691134315_ba4g.jpg",
  cardImages: [
    { id: 1, image: "https://parispeaceforum.org/app/uploads/2023/09/net-zero-space-initiative-1.jpg" },
    { id: 2, image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=200" },
    { id: 3, image: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?q=80&w=200" },
    { id: 4, image: "https://images.unsplash.com/photo-1614314152721-5e4aa74814ed?q=80&w=200" },
    { id: 5, image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=200" },
    { id: 6, image: "https://images.unsplash.com/photo-1464802686167-b939a6910659?q=80&w=200" },
    { id: 7, image: "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?q=80&w=200" },
    { id: 8, image: "https://images.unsplash.com/photo-1543722530-d2c3201371e7?q=80&w=200" },
    { id: 9, image: "https://images.unsplash.com/photo-1481819613568-3701cbc70156?q=80&w=200" },
    { id: 10, image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=200" },
    { id: 11, image: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?q=80&w=200" },
    { id: 12, image: "https://images.unsplash.com/photo-1614314152721-5e4aa74814ed?q=80&w=200" },
    { id: 13, image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=200" },
    { id: 14, image: "https://images.unsplash.com/photo-1464802686167-b939a6910659?q=80&w=200" },
    { id: 15, image: "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?q=80&w=200" },
    { id: 16, image: "https://images.unsplash.com/photo-1543722530-d2c3201371e7?q=80&w=200" },
    { id: 17, image: "https://images.unsplash.com/photo-1614726365950-472352d1d31b?q=80&w=200" },
    { id: 18, image: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?q=80&w=200" },
  ]
};

const techTheme: ThemeData = {
  name: "Tech",
  background: "bg-gradient-to-br from-gray-800 to-gray-900",
  cardBack: "https://insuranceblog.accenture.com/wp-content/uploads/2019/06/Tech_Trends.jpg",
  cardImages: [
    { id: 1, image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=200" },
    { id: 2, image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=200" },
    { id: 3, image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=200" },
    { id: 4, image: "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?q=80&w=200" },
    { id: 5, image: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?q=80&w=200" },
    { id: 6, image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=200" },
    { id: 7, image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=200" },
    { id: 8, image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=200" },
    { id: 9, image: "https://futurumgroup.com/wp-content/uploads/2023/11/Microsofts-AI-Safety-Policies-Best-Practice-1536x864.jpg" },
    { id: 10, image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=200" },
    { id: 11, image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=200" },
    { id: 12, image: "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?q=80&w=200" },
    { id: 13, image: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?q=80&w=200" },
    { id: 14, image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=200" },
    { id: 15, image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=200" },
    { id: 16, image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=200" },
    { id: 17, image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=200" },
    { id: 18, image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=200" },
  ]
};

export const themes: Record<string, ThemeData> = {
  nature: natureTheme,
  space: spaceTheme,
  tech: techTheme
};

export type { ThemeData, CardImage };
