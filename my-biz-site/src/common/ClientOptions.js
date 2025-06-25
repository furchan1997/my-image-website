// סוג האתר
export const websiteTypesMap = {
  protolioSite: "אתר תדמית",
  landingPage: "דף נחיתה",
  onlineStore: "חנות מקוונת",
  mobileApp: "אפליקציה לנייד",
  bookingSystem: "מערכת הזמנות",
  complexSystem: "מערכת מורכבת",
  other: "אחר",
};

// מטרת פרויקט
export const goalOfProject = {
  arketingAndBranding: " שיווק ומיתוג",
  increasingSales: "הגדלת מכירות",
  customerService: "שירות לקוחות",
  creatingCommunity: " יצירת קהילה",
};

// קהל היעד
export const targetAudience = {
  "18-30": "18-30",
  "31-51": "31-51",
  businessesAndOrganizations: "עסקים וארגונים",
  general: "כללי",
};

export const features = {
  cms: "מערכת לניהול תוכן",
  paymentSystem: "מערכת תשלום",
  socialIntegration: "אינטרגרציה עם רשתות חברתיות",
  forum: "פורום או קהילה",
  blog: " בלוג או חדשות",
};

// מחיר משוער
export const budget = {
  "800-1,500": "800-1,500",
  "1,500-3,500": "1,500-3,500",
  "5,000-10,000": "5,000-10,000",
  "10,000-15,000": "10,000-15,000",
  "15,000-30,000": "15,000-30,000",
  "+30,000": "+30,000",
};

export const entriesOpt = (issues) => {
  return Object.entries(issues).map(([value, label]) => ({ value, label }));
};

export const electionissues = {
  websiteTypesMap,
  goalOfProject,
  budget,
  features,
  targetAudience,
  entriesOpt,
};
