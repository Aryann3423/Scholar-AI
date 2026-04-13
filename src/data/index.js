export const COLLEGES = [
  {
    id: 1, name: "MIT", full: "Massachusetts Institute of Technology",
    location: "Cambridge, USA", country: "USA", emoji: "🏛️",
    color: "linear-gradient(135deg,#1e3a5f,#2d6a9f)",
    fee: "$57,000/yr",
    feeDetails: { tuition: "$55,870", housing: "$11,000", other: "$2,500" },
    rating: 4.9, match: 96,
    tags: ["STEM", "Research", "Tech"],
    courses: ["Computer Science","Electrical Eng","Physics","Math","AI & ML","Robotics","Aerospace","Biotech","Economics","Architecture"],
    reviews: [
      { author: "Rahul M., CS 2023", text: "Incredible research opportunities and world-class faculty. Tough but rewarding." },
      { author: "Priya S., EE 2022", text: "Best network I ever built. The environment pushes you to your limits." }
    ],
    budget: "high", interest: ["Engineering", "Technology"], saved: false
  },
  {
    id: 2, name: "Oxford", full: "University of Oxford",
    location: "Oxford, UK", country: "UK", emoji: "🎓",
    color: "linear-gradient(135deg,#3b1f5e,#5e3699)",
    fee: "£35,000/yr",
    feeDetails: { tuition: "£33,050", housing: "£8,000", other: "£2,000" },
    rating: 4.8, match: 91,
    tags: ["Liberal Arts", "Research", "History"],
    courses: ["PPE","Law","Medicine","History","Literature","Philosophy","Economics","Politics","Biochemistry","Mathematics"],
    reviews: [
      { author: "Aisha K., PPE 2023", text: "The tutorial system is unmatched. You really learn to think critically." },
      { author: "Tom W., Law 2022", text: "Ancient traditions, modern thinking. Truly world class." }
    ],
    budget: "high", interest: ["Liberal Arts", "Business"], saved: false
  },
  {
    id: 3, name: "IIT Bombay", full: "IIT Bombay",
    location: "Mumbai, India", country: "India", emoji: "⚡",
    color: "linear-gradient(135deg,#1a3a1a,#2d6e2d)",
    fee: "₹2.5L/yr",
    feeDetails: { tuition: "₹2,00,000", housing: "₹30,000", other: "₹20,000" },
    rating: 4.7, match: 88,
    tags: ["STEM", "Engineering", "India"],
    courses: ["Computer Sci","Mechanical Eng","Electrical Eng","Chemical Eng","Civil Eng","Data Science","Aerospace","Metallurgy","Physics","Mathematics"],
    reviews: [
      { author: "Arjun T., CS 2023", text: "Best engineering college in India. The peer group here is exceptional." },
      { author: "Neha R., EE 2022", text: "Placements are great, research facilities top-notch." }
    ],
    budget: "low", interest: ["Engineering", "Technology"], saved: false
  },
  {
    id: 4, name: "Stanford", full: "Stanford University",
    location: "Palo Alto, USA", country: "USA", emoji: "🌴",
    color: "linear-gradient(135deg,#5e1f1f,#9e3333)",
    fee: "$58,000/yr",
    feeDetails: { tuition: "$56,169", housing: "$12,000", other: "$3,000" },
    rating: 4.9, match: 89,
    tags: ["Tech", "Business", "Innovation"],
    courses: ["CS","Business","Law","Medicine","Engineering","Psychology","Economics","Design","Art","Earth Sciences"],
    reviews: [
      { author: "Riya P., CS 2023", text: "Silicon Valley is your campus. The entrepreneurship culture is incredible." },
      { author: "Carlos M., MBA 2022", text: "Best network for tech entrepreneurship in the world." }
    ],
    budget: "high", interest: ["Technology", "Business"], saved: false
  },
  {
    id: 5, name: "NUS", full: "National University of Singapore",
    location: "Singapore", country: "Singapore", emoji: "🦁",
    color: "linear-gradient(135deg,#1a3040,#2a5068)",
    fee: "S$40,000/yr",
    feeDetails: { tuition: "S$38,000", housing: "S$8,000", other: "S$3,000" },
    rating: 4.6, match: 85,
    tags: ["Asia", "Research", "Diverse"],
    courses: ["Engineering","Business","Computing","Medicine","Law","Arts","Science","Music","Architecture","Social Sciences"],
    reviews: [
      { author: "Wei L., Computing 2023", text: "Global exposure in a safe, vibrant city. Great ROI for the fees." },
      { author: "Anjali S., Business 2022", text: "Best university in Asia. The alumni network across Asia is massive." }
    ],
    budget: "medium", interest: ["Engineering", "Business"], saved: false
  },
  {
    id: 6, name: "TU Munich", full: "Technical University of Munich",
    location: "Munich, Germany", country: "Germany", emoji: "🍺",
    color: "linear-gradient(135deg,#2a2a5e,#4040a0)",
    fee: "€300/sem",
    feeDetails: { tuition: "€300", housing: "€500/mo", other: "€200/mo" },
    rating: 4.7, match: 82,
    tags: ["STEM", "Research", "Europe"],
    courses: ["CS","Mechanical Eng","Physics","Math","Business","Architecture","Medicine","Chemistry","Electrical Eng","Aerospace"],
    reviews: [
      { author: "Klaus B., CS 2023", text: "Practically free and world-class quality. Germany is underrated for education." },
      { author: "Fatima A., Engineering 2022", text: "Research opportunities are incredible. Munich is a beautiful city to live in." }
    ],
    budget: "low", interest: ["Engineering", "Technology"], saved: false
  },
  {
    id: 7, name: "LBS", full: "London Business School",
    location: "London, UK", country: "UK", emoji: "💼",
    color: "linear-gradient(135deg,#1f1f1f,#3d3d3d)",
    fee: "£80,000/yr",
    feeDetails: { tuition: "£78,000", housing: "£15,000", other: "£5,000" },
    rating: 4.8, match: 78,
    tags: ["Business", "MBA", "Finance"],
    courses: ["MBA","Masters in Finance","Masters in Management","Executive MBA","Analytics","Sloan MSc","PhD","Executive Education"],
    reviews: [
      { author: "Preeti G., MBA 2023", text: "Best MBA in Europe. The diversity of the cohort is unmatched." },
      { author: "James L., Finance 2022", text: "Career outcomes are exceptional. The London network is priceless." }
    ],
    budget: "high", interest: ["Business", "Finance"], saved: false
  },
  {
    id: 8, name: "UIUC", full: "Univ. of Illinois Urbana-Champaign",
    location: "Illinois, USA", country: "USA", emoji: "🌽",
    color: "linear-gradient(135deg,#3b1a00,#6b3a10)",
    fee: "$32,000/yr",
    feeDetails: { tuition: "$31,000", housing: "$10,000", other: "$3,000" },
    rating: 4.5, match: 80,
    tags: ["STEM", "CS", "Value"],
    courses: ["CS","Electrical Eng","Business","Physics","Math","Aerospace","Nuclear Eng","Architecture","Fine Arts","Psychology"],
    reviews: [
      { author: "Varun K., CS 2023", text: "Top 3 CS program in the world at a fraction of the cost." },
      { author: "Lisa M., Business 2022", text: "Great value for a US education. Strong industry connections." }
    ],
    budget: "medium", interest: ["Engineering", "Technology"], saved: false
  },
];

export const SCENARIOS = [
  {
    q: "It's Friday evening. What's your ideal activity?",
    options: [
      { text: "Hackathon or coding project", tags: ["Tech", "Engineering"] },
      { text: "Museum or art gallery", tags: ["Arts", "Culture"] },
      { text: "Debate or business case", tags: ["Business", "Leadership"] },
      { text: "Nature hike or sports", tags: ["Health", "Outdoors"] }
    ]
  },
  {
    q: "You have ₹10 lakhs. What do you do?",
    options: [
      { text: "Invest in stocks & crypto", tags: ["Finance", "Business"] },
      { text: "Build a startup", tags: ["Entrepreneurship", "Tech"] },
      { text: "Travel and experience the world", tags: ["Culture", "Arts"] },
      { text: "Donate to a cause", tags: ["Social Work", "Leadership"] }
    ]
  },
  {
    q: "Your dream project is...",
    options: [
      { text: "Build an AI product", tags: ["Tech", "Engineering", "AI"] },
      { text: "Start a fashion brand", tags: ["Arts", "Business", "Design"] },
      { text: "Run for office", tags: ["Leadership", "Social Work"] },
      { text: "Write a bestseller", tags: ["Arts", "Culture", "Communication"] }
    ]
  },
  {
    q: "Which superpower would you choose?",
    options: [
      { text: "Solve any equation instantly", tags: ["Engineering", "Tech"] },
      { text: "Understand any language", tags: ["Culture", "Communication"] },
      { text: "Predict market trends", tags: ["Finance", "Business"] },
      { text: "Heal any disease", tags: ["Medicine", "Science"] }
    ]
  },
];

export const NOTIFICATIONS = [
  { id: 1, icon: "📅", color: "rgba(99,102,241,.2)", title: "Application Deadline Approaching", desc: "MIT Early Action deadline is Nov 1st, 2025. Only 45 days left!", time: "2 hours ago" },
  { id: 2, icon: "🎓", color: "rgba(34,197,94,.15)", title: "New Scholarship Alert", desc: "Rhodes Scholarship applications open. Based on your profile, you're a strong candidate.", time: "5 hours ago" },
  { id: 3, icon: "✨", color: "rgba(245,158,11,.15)", title: "Profile Match Updated", desc: "Your match score for Stanford increased to 89% after profile update.", time: "Yesterday" },
  { id: 4, icon: "💬", color: "rgba(167,139,250,.15)", title: "Counselor Tip", desc: "Students who apply to 8-12 colleges have 3x better admission outcomes.", time: "2 days ago" },
];

export const MOCK_RESPONSES = {
  default: "Great question! Based on your profile, I can help you explore colleges, compare programs, and plan your application strategy. What would you like to know?",
  mit: "MIT is an excellent choice! With your STEM background, you'd thrive in their research environment. The acceptance rate is around 3.9%, so a strong application with research experience is key. Need help with essay tips?",
  stanford: "Stanford is exceptional for tech and entrepreneurship. Located in Silicon Valley, graduates get incredible startup and tech job opportunities. Their CS program is world-renowned. Would you like to compare it with MIT?",
  oxford: "Oxford's tutorial system is unique — you'll meet your tutor weekly for in-depth discussions. It's ideal if you love the liberal arts approach to education. Which program interests you?",
  compare: "Great comparison question! Here's a quick breakdown: MIT excels in pure STEM research, Stanford has better entrepreneurship culture, and Oxford offers a more traditional academic experience. Budget-wise, TU Munich is the best value at nearly free tuition.",
  budget: "For budget-conscious students, consider: TU Munich (€300/semester — essentially free!), IIT Bombay (₹2.5L/year), or UIUC (great value US education). Do you have a specific country preference?",
  scholarship: "Most top universities offer need-based and merit scholarships. MIT meets 100% of demonstrated financial need. Oxford has the Rhodes and Clarendon scholarships. Would you like tips on writing a strong scholarship application?",
  career: "Top recruiters at these universities include Google, McKinsey, Goldman Sachs, and top startups. CS graduates from MIT/Stanford average $180K starting salary in the US. What career path are you targeting?",
  iit: "IIT Bombay is India's premier engineering institution. With a very low fee structure (₹2.5L/year), it offers world-class STEM education. JEE Advanced is extremely competitive, but the ROI is exceptional.",
  germany: "Germany is fantastic for budget-conscious students! TU Munich charges just €300/semester in admin fees. German universities are globally ranked, and many programs are offered in English. Living costs are around €800-1000/month.",
  singapore: "NUS is Asia's top university and offers a truly global education. Singapore is safe, multicultural, and a hub for finance and tech companies. Great for students who want Asia exposure with global recognition.",
};

export function getAIResponse(msg) {
  const m = msg.toLowerCase();
  if (m.includes("mit") || m.includes("massachusetts")) return MOCK_RESPONSES.mit;
  if (m.includes("stanford")) return MOCK_RESPONSES.stanford;
  if (m.includes("oxford") || m.includes("cambridge")) return MOCK_RESPONSES.oxford;
  if (m.includes("iit") || m.includes("india") || m.includes("bombay")) return MOCK_RESPONSES.iit;
  if (m.includes("germany") || m.includes("munich") || m.includes("tum")) return MOCK_RESPONSES.germany;
  if (m.includes("singapore") || m.includes("nus")) return MOCK_RESPONSES.singapore;
  if (m.includes("compare") || m.includes(" vs ") || m.includes("difference") || m.includes("better")) return MOCK_RESPONSES.compare;
  if (m.includes("budget") || m.includes("cheap") || m.includes("affordable") || m.includes("cost") || m.includes("fee")) return MOCK_RESPONSES.budget;
  if (m.includes("scholarship") || m.includes("financial aid") || m.includes("funding") || m.includes("grant")) return MOCK_RESPONSES.scholarship;
  if (m.includes("career") || m.includes("job") || m.includes("salary") || m.includes("placement") || m.includes("hiring")) return MOCK_RESPONSES.career;
  return MOCK_RESPONSES.default;
}
