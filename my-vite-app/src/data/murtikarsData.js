// Real-shaped baseline fallback data matching Art-Finance-Management schema
// Used only if backend is not reachable

export const MURTIKARS_DATA = [
  {
    id: "murtikar-patankar",
    workshopName: "श्री गणेश कला केंद्र (Patankar Arts)",
    murtikarName: "आनंद रमेश पाटणकर (Anand R. Patankar)",
    phone: "+91 98220 14820",
    location: {
      area: "Kothrud",
      city: "Pune"
    },
    plan: "PRO",
    managers: [
      {
        id: "mgr-101",
        name: "संजय पाटणकर (Sanjay Patankar)",
        phone: "+91 98221 55670",
        role: "Manager"
      },
      {
        id: "mgr-102",
        name: "किशोर जोशी (Kishore Joshi)",
        phone: "+91 98902 44312",
        role: "Manager"
      }
    ],
    yearlyBookings: [
      {
        year: 2026,
        bookingsCount: 4,
        activeBookings: 4,
        completedBookings: 0,
        murtiSizes: ["8 feet", "12 feet", "14 feet"],
        mandals: [
          { ganpatiTitle: "नवसह्याद्री गणेशोत्सव मंडळ", mandalName: "Navsahyadri Utsav Trust", area: "Karve Nagar", city: "Pune", murtiSize: "12 feet" },
          { ganpatiTitle: "शिवसेना शाखा क्रमांक ४ मित्र मंडळ", mandalName: "", area: "Warje", city: "Pune", murtiSize: "8 feet" }
        ]
      },
      {
        year: 2025,
        bookingsCount: 14,
        activeBookings: 0,
        completedBookings: 14,
        murtiSizes: ["8 feet", "10 feet", "12 feet", "15 feet"],
        mandals: [
          { ganpatiTitle: "श्रीमंत दगडूशेठ मित्र मंडळ शाखा", mandalName: "Dagdusheth Mitra Trust", area: "Kothrud", city: "Pune", murtiSize: "14 feet" },
          { ganpatiTitle: "बाल गोपाळ तरुण मंडळ", mandalName: "", area: "Sadashiv Peth", city: "Pune", murtiSize: "10 feet" }
        ]
      },
      {
        year: 2024,
        bookingsCount: 12,
        activeBookings: 0,
        completedBookings: 12,
        murtiSizes: ["7 feet", "10 feet", "14 feet"],
        mandals: [
          { ganpatiTitle: "श्रीमंत दगडूशेठ मित्र मंडळ शाखा", mandalName: "", area: "Kothrud", city: "Pune", murtiSize: "14 feet" }
        ]
      }
    ],
    totalBookings: 30,
    pastMandals: [
      { ganpatiTitle: "श्रीमंत दगडूशेठ मित्र मंडळ शाखा", mandalName: "Dagdusheth Mitra Trust", area: "Kothrud", city: "Pune", years: [2025, 2024] },
      { ganpatiTitle: "नवसह्याद्री गणेशोत्सव मंडळ", mandalName: "Navsahyadri Utsav Trust", area: "Karve Nagar", city: "Pune", years: [2026] },
      { ganpatiTitle: "बाल गोपाळ तरुण मंडळ", mandalName: "", area: "Sadashiv Peth", city: "Pune", years: [2025] }
    ],
    murtiSizes: ["7 feet", "8 feet", "10 feet", "12 feet", "14 feet", "15 feet"]
  },
  {
    id: "murtikar-kamble",
    workshopName: "चिंचपोकळी आर्ट स्टुडिओ (Chinchpokli Arts)",
    murtikarName: "सचिन विजय कांबळे (Sachin V. Kamble)",
    phone: "+91 98190 88234",
    location: {
      area: "Parel / Chinchpokli",
      city: "Mumbai"
    },
    plan: "PRO",
    managers: [
      {
        id: "mgr-201",
        name: "प्रमोद सावंत (Pramod Sawant)",
        phone: "+91 98204 11982",
        role: "Manager"
      },
      {
        id: "mgr-202",
        name: "रोहन कांबळे (Rohan Kamble)",
        phone: "+91 98199 77210",
        role: "Manager"
      }
    ],
    yearlyBookings: [
      {
        year: 2026,
        bookingsCount: 6,
        activeBookings: 6,
        completedBookings: 0,
        murtiSizes: ["12 feet", "16 feet", "20 feet"],
        mandals: [
          { ganpatiTitle: "तेजुकया मॅन्शन सार्वजनिक गणेशोत्सव मंडळ", mandalName: "Tejukaya Trust", area: "Lalbaug", city: "Mumbai", murtiSize: "20 feet" },
          { ganpatiTitle: "वरळी नाका बाल मित्र मंडळ", mandalName: "", area: "Worli", city: "Mumbai", murtiSize: "16 feet" }
        ]
      },
      {
        year: 2025,
        bookingsCount: 18,
        activeBookings: 0,
        completedBookings: 18,
        murtiSizes: ["10 feet", "14 feet", "18 feet", "22 feet"],
        mandals: [
          { ganpatiTitle: "काळाचौकी सार्वजनिक उत्सव समिती", mandalName: "", area: "Kalachowki", city: "Mumbai", murtiSize: "18 feet" }
        ]
      },
      {
        year: 2024,
        bookingsCount: 15,
        activeBookings: 0,
        completedBookings: 15,
        murtiSizes: ["10 feet", "14 feet", "18 feet"],
        mandals: [
          { ganpatiTitle: "तेजुकया मॅन्शन सार्वजनिक गणेशोत्सव मंडळ", mandalName: "", area: "Lalbaug", city: "Mumbai", murtiSize: "18 feet" }
        ]
      }
    ],
    totalBookings: 39,
    pastMandals: [
      { ganpatiTitle: "तेजुकया मॅन्शन सार्वजनिक गणेशोत्सव मंडळ", mandalName: "Tejukaya Trust", area: "Lalbaug", city: "Mumbai", years: [2026, 2024] },
      { ganpatiTitle: "काळाचौकी सार्वजनिक उत्सव समिती", mandalName: "", area: "Kalachowki", city: "Mumbai", years: [2025] },
      { ganpatiTitle: "वरळी नाका बाल मित्र मंडळ", mandalName: "", area: "Worli", city: "Mumbai", years: [2026] }
    ],
    murtiSizes: ["10 feet", "12 feet", "14 feet", "16 feet", "18 feet", "20 feet", "22 feet"]
  },
  {
    id: "murtikar-kadu",
    workshopName: "ओम कला निकेतन (Kadu Bandhu Arts)",
    murtikarName: "राजेश दत्तात्रय कडू (Rajesh D. Kadu)",
    phone: "+91 98500 32190",
    location: {
      area: "Sadashiv Peth",
      city: "Pune"
    },
    plan: "FREE",
    managers: [
      {
        id: "mgr-401",
        name: "नितीन कडू (Nitin Kadu)",
        phone: "+91 98502 88410",
        role: "Manager"
      }
    ],
    yearlyBookings: [
      {
        year: 2026,
        bookingsCount: 3,
        activeBookings: 3,
        completedBookings: 0,
        murtiSizes: ["8 feet", "11 feet"],
        mandals: [
          { ganpatiTitle: "अखिल सदाशिव पेठ गणेश मंडळ", mandalName: "", area: "Sadashiv Peth", city: "Pune", murtiSize: "11 feet" }
        ]
      },
      {
        year: 2025,
        bookingsCount: 11,
        activeBookings: 0,
        completedBookings: 11,
        murtiSizes: ["6 feet", "8 feet", "12 feet"],
        mandals: [
          { ganpatiTitle: "बाजीराव रोड व्यापारी मित्र मंडळ", mandalName: "", area: "Bajirao Road", city: "Pune", murtiSize: "8 feet" }
        ]
      }
    ],
    totalBookings: 14,
    pastMandals: [
      { ganpatiTitle: "अखिल सदाशिव पेठ गणेश मंडळ", mandalName: "", area: "Sadashiv Peth", city: "Pune", years: [2026] },
      { ganpatiTitle: "बाजीराव रोड व्यापारी मित्र मंडळ", mandalName: "", area: "Bajirao Road", city: "Pune", years: [2025] }
    ],
    murtiSizes: ["6 feet", "8 feet", "11 feet", "12 feet"]
  }
];
