# landing-page
<!DOCTYPE html>
<html lang="he" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>להקת בשמחות - להקה חסידית מזרחית מהרכב</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    /* רקע גרדיאנט זורם בגוונים של הלוגו */
    @keyframes gradient {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    .gradient-bg {
      background: linear-gradient(-45deg, #4a90a4, #5ba0b5, #3a8394, #6bb0c5);
      background-size: 400% 400%;
      animation: gradient 15s ease infinite;
    }

    /* כוכבים בזהב */
    .star {
      position: absolute;
      width: 3px; height: 3px;
      background: #fbbf24;
      border-radius: 50%;
      opacity: 0.8;
      animation: twinkle 4s infinite;
      box-shadow: 0 0 6px #fbbf24;
    }
    @keyframes twinkle {
      0%, 100% { opacity: 0.4; transform: scale(0.8); }
      50% { opacity: 1; transform: scale(1.2); }
    }

    /* אפקט ציפה */
    @keyframes float { 0%,100% {transform:translateY(0);} 50% {transform:translateY(-10px);} }
    .float { animation: float 6s ease-in-out infinite; }

    /* אפקט פייד אין */
    @keyframes fadeInUp { from {opacity:0; transform:translateY(20px);} to {opacity:1; transform:translateY(0);} }
    .fadeInUp { animation: fadeInUp 1s ease-out; }

    /* גלאס מורפיזם בגוונים של הלוגו */
    .glass {
      background: rgba(75, 144, 164, 0.15);
      backdrop-filter: blur(10px);
      border: 2px solid rgba(251, 191, 36, 0.3);
      box-shadow: 0 8px 32px rgba(75, 144, 164, 0.2);
    }

    .pulse-glow { 
      animation: pulse 2s infinite; 
    }
    @keyframes pulse {
      0%,100% { box-shadow:0 0 15px rgba(251,191,36,0.6), 0 0 30px rgba(75,144,164,0.3);}
      50% { box-shadow:0 0 30px rgba(251,191,36,0.9), 0 0 50px rgba(75,144,164,0.5);}
    }
  </style>
</head>
<body class="gradient-bg text-white font-sans overflow-x-hidden min-h-screen">

  <!-- כוכבים -->
  <div class="fixed inset-0 pointer-events-none">
    <div class="star" style="top:10%; left:20%; animation-delay:0s;"></div>
    <div class="star" style="top:30%; left:70%; animation-delay:1s;"></div>
    <div class="star" style="top:60%; left:40%; animation-delay:2s;"></div>
    <div class="star" style="top:80%; left:80%; animation-delay:3s;"></div>
    <div class="star" style="top:15%; left:85%; animation-delay:0.5s;"></div>
    <div class="star" style="top:45%; left:15%; animation-delay:1.5s;"></div>
    <div class="star" style="top:75%; left:60%; animation-delay:2.5s;"></div>
    <div class="star" style="top:25%; left:45%; animation-delay:3.5s;"></div>
  </div>

  <!-- כותרת מרכזית עם לוגו -->
  <header class="py-12 text-center">
    <div class="max-w-2xl mx-auto fadeInUp">
      <h1 class="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
        להקת בשמחות
      </h1>
      <p class="text-xl text-yellow-200 mb-2">להקה חסידית מזרחית מהרכב</p>
      <p class="text-lg text-teal-200">🎵 מנגנים ומשמחים בכל חגיגה 🎵</p>
    </div>
  </header>

  <!-- סקשן וידאו מרכזי -->
  <section class="relative py-16 px-4 text-center">
    <div class="relative max-w-3xl mx-auto fadeInUp float">
      
      <div class="glass rounded-3xl p-4 shadow-xl mb-4">
        <div class="aspect-video rounded-2xl overflow-hidden border-4 border-yellow-400 shadow-lg">
          <iframe class="w-full h-full" 
            src="https://www.youtube.com/embed/vM_p-762o-M?mute=1&loop=1&playlist=vM_p-762o-M" 
            title="YouTube video" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>
          </iframe>
        </div>
      </div>

      <!-- כפתור ווטסאפ -->
      <div class="mt-6">
        <a href="https://wa.me/972549762244?text=שלום!%20רצינו%20לשמוע%20על%20להקת בשמחות%20לחתונה שלנו" 
           target="_blank"
           class="inline-block bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-teal-800 font-bold px-8 py-4 rounded-full shadow-2xl hover:from-yellow-300 hover:to-yellow-500 transition-all duration-300 transform hover:scale-105 pulse-glow border-2 border-yellow-300">
           💬 דברו איתנו בווטסאפ - 0549762244
        </a>
      </div>

    </div>
  </section>

  <!-- סקשן עלינו -->
  <section class="py-16 px-4 text-center">
    <div class="relative max-w-3xl mx-auto glass rounded-3xl p-8 shadow-xl">
      <h2 class="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
        למה לבחור בנו?
      </h2>
      <div class="grid md:grid-cols-2 gap-6 text-right">
        <div class="bg-gradient-to-br from-teal-600/20 to-teal-700/20 p-6 rounded-xl border border-yellow-400/30">
          <h3 class="text-xl font-bold text-yellow-300 mb-3">🎼 ניסיון עשיר</h3>
          <p class="text-gray-200">להקה מקצועית עם שנים של ניסיון בחתונות וחגיגות</p>
        </div>
        <div class="bg-gradient-to-br from-teal-600/20 to-teal-700/20 p-6 rounded-xl border border-yellow-400/30">
          <h3 class="text-xl font-bold text-yellow-300 mb-3">🕺 מוזיקה חסידית ומזרחית</h3>
          <p class="text-gray-200">רפרטואר עשיר המתאים לכל קהל ולכל חגיגה</p>
        </div>
        <div class="bg-gradient-to-br from-teal-600/20 to-teal-700/20 p-6 rounded-xl border border-yellow-400/30">
          <h3 class="text-xl font-bold text-yellow-300 mb-3">⚡ אנרגיה מדבקת</h3>
          <p class="text-gray-200">מבטיחים אווירה חמה ומשמחת לכל האורחים</p>
        </div>
        <div class="bg-gradient-to-br from-teal-600/20 to-teal-700/20 p-6 rounded-xl border border-yellow-400/30">
          <h3 class="text-xl font-bold text-yellow-300 mb-3">💫 זיכרונות בלתי נשכחים</h3>
          <p class="text-gray-200">הופכים כל אירוע לחוויה מיוחדת ובלתי נשכחת</p>
        </div>
      </div>
    </div>
  </section>

  <!-- פוטר -->
  <footer class="py-8 text-center">
    <div class="glass rounded-2xl p-6 max-w-md mx-auto">
      <p class="text-yellow-200 font-semibold mb-2">📞 צרו קשר: 0549762244</p>
      <p class="text-teal-200 text-sm">© 2025 להקת בשמחות | הופכים חתונות לחגיגות בלתי נשכחות</p>
      <p class="text-teal-300 text-xs mt-2">@besmachot_band</p>
    </div>
  </footer>

</body>
</html>
