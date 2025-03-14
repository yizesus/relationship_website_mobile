const config = {
  /* 
  ████████████████████████████████████████
  🔧 BASIC SETTINGS (EDIT FREELY)
  ████████████████████████████████████████
  */

  // 🔐 Passcode Page
  correctPasscode: "1225", // Change this to any 4-digit code (the passcode for access)
  passcodeTitle: "Nhập mật khẩu", // Title displayed on the passcode entry page
  successMessage: "Chào vợ iuuu :)", // Message shown upon successful passcode entry
  redirectMessage: "Đợi xíuuu", // Message displayed while redirecting after success
  incorrectPasscodeMessage: "Sai mật khẩu, gợi ý: ngày chúng mình gặp nhau :3", // Message shown for incorrect passcode
  cancelButtonText: "Hủy", // Text for the cancel button

  // 🔍 Question Page
  searchPlaceholder: "Tìm trên Google hoặc nhập địa chỉ URL", // Placeholder text in the search input
  trendingTitle: "Các từ khóa trending", // Title for the trending searches section
  trendingSearches: [
    "Tại sao vợ anh lại siuu cutii tới zậy", // Example trending search query
    "Sinh nhật của của miaaa", // Another example query
    "Cách để giúp vợ zuiiii", // A personalized trending search
  ],
  proTip: 'Gợi ý: thử tìm "thời gian bên nhau" ;)', // Helpful tip for users

  // ⏳ Timer Page
  anniversaryDate: "2025-2-1", // 📅 Set your anniversary date here (used for the timer)
  timerTitle: "Chúng mình ở bên nhau được:", // Title displayed on the timer page
  timerMessage: "... vẫn đang đếm ngày <3", // Message shown alongside the timer
  timeUnits: {
    days: "Ngày", // Label for days in the timer
    hours: "Giờ", // Label for hours in the timer
    minutes: "Phút", // Label for minutes in the timer
    seconds: "Giây", // Label for seconds in the timer
  },

  // 📸 Recap Page
  recapTitle: "Hãy cùng xem lại những bức hình kỷ niệm", // Title for the recap page
  clickMeText: "^Ấn vào đây nè^", // Text prompting users to interact

  recapSections: [
    { label: "Tin Nhắn", path: "/recap/message", icon: "Message" }, // Section for messages
    { label: "Hình", path: "/recap/pictures", icon: "Image" }, // Section for pictures
    { label: "Nhạc", path: "/recap/music", icon: "Music" }, // Section for music
  ],

  // 🎵 Music Page
  musicTitle: "Nhạc mà anh luôn nghĩ về emmm", // Title for the music page
  musicGallery: [
    {
      title: "Coffee", // Title of the song
      artist: "a!ka", // Artist of the song
      left: "5%", // Positioning on the page
      top: "5%", // Positioning on the page
    },
    {
      title: "Wrong Times",
      artist: "Dangrangto, puppy",
      left: "40%",
      top: "15%",
    },
    {
      title: "Die With A Smile",
      artist: "Lady Gaga, Bruno Mars",
      left: "15%",
      top: "40%",
    },
    {
      title: "Đừng Làm Trái Tim Anh Đau",
      artist: "Sơn Tùng M-TP",
      left: "30%",
      top: "75%",
    },
    {
      title: "Nơi Này Có Anh",
      artist: "Sơn Tùng M-TP",
      left: "5%",
      top: "65%",
    },
    {
      title: "blue",
      artist: "yung kai",
      left: "25%",
      top: "90%",
    },
    {
      title: "Heat Waves",
      artist: "Glass Animals",
      left: "35%",
      top: "50%",
    },
  ],

    // 📝 Message Recap Page
    messageTitle: "Những dòng tin nhắn ký ức", // Title for the messages recap page
    messageGallery: [
      { title: "1 tháng 2, 2025", description: "Ngày chúng ta gặp nhau :333" }, // Message entry
      { title: "14 tháng 2, 2025", description: "Valentine cùng với nhauuu 💕" },
      { title: "8 tháng 3, 2025", description: "Ngày Quốc Tế Phụ Nữ 💐" },
    ],
  
    // 📸 Picture Recap Page
    pictureTitle: "Những bức hình anh thíc", // Title for the pictures recap page
    pictureGallery: [
      { title: "bộ đỏ lộng lẫyy", description: "đỏoo rạo rựccc" }, // Picture entry
      { title: "bộ trắng tinh khiết :)))))", description: "siuuu đẹp" },
      { title: "kiểu tóc anh ưngggg :333", description: "lun mún em để kiểu tóc nàyyy :33" },
    ],
  

  // 💌 Love Letter Page
  loveLetterMessage: "Chào vợ iuuuu, anh nhớ và yêu emm nhiều lắmmm óoooo :333", // Message displayed on the love letter page

  // 🎇 Closing Page
  closingMessage: "Cảm ơn em vì tất cả, vợ iu của anh! 💖 Mong rằng anh với em sẽ có thêm nhiều tháng ngày tuyệt vời bên nhau.", // Closing message displayed

  /* 
  ████████████████████████████████████████
  ⚠️ ADVANCED SETTINGS (DO NOT TOUCH UNLESS YOU KNOW WHAT YOU'RE DOING)
  ████████████████████████████████████████
  */

  // 📌 Paths (Only change if you are a developer or modifying routes)
  redirectPath: "/question", // Path to redirect after passcode entry
  timerRedirectPath: "/timer", // Path to redirect to the timer page
  questionRedirectPath: "/question", // Path to redirect to the question page
  recapRedirectPath: "/recap", // Path to redirect to the recap page
  recapPreviousPage: "/timer", // Path to the previous page in the recap
  recapNextPage: "/letter", // Path to the next page in the recap
  letterNextPage: "/closing", // Path to the next page after the letter
  letterPreviousPage: "/letter", // Path to the previous page before the letter
  previousPageText: "Previous page", // Text for the previous page button
  nextPageText: "Next page", // Text for the next page button

  // 🔍 Search Queries (Only change if modifying search functionality)
  correctSearchQueries: [
    "anh với em ở bên nhau đc bao lâu rùi", // Example of a correct search query
    "thời gian bên nhau", // Another example of a correct search query
    "thời gian", // Another example of a correct search query
  ],
};

export default config;
