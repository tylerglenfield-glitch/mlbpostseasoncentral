// Dedicated Team Database
const teamData = {
  dodgers: {
    name: "Los Angeles Dodgers",
    badge: "#2 Seed • NL West Champs",
    img: "dodgers.jpg",
    fallbackImg: "https://images.unsplash.com/photo-1562077772-3bd90403f7f0?auto=format&fit=crop&w=600&q=80",
    desc: "The Dodgers entered the 2026 postseason with a 100-62 record after winning the NL West. Led by Shohei Ohtani and Yoshinobu Yamamoto, the Dodgers defeated Atlanta in the NLDS and are currently battling Milwaukee in the NLCS.",
    record: "100 - 62",
    status: "NLCS vs Milwaukee",
    star: "Shohei Ohtani",
    url: "https://www.mlb.com/dodgers"
  },
  brewers: {
    name: "Milwaukee Brewers",
    badge: "#1 Seed • NL Central Champs",
    img: "brewers.jpg",
    fallbackImg: "https://images.unsplash.com/photo-1508802222057-4cabc15b825f?auto=format&fit=crop&w=600&q=80",
    desc: "Milwaukee claimed the #1 seed in the NL with an MLB-best 103-59 record. After defeating San Diego in the NLDS, the Brewers hold a 2-0 lead over the Dodgers in the NLCS heading into Game 3.",
    record: "103 - 59",
    status: "NLCS Lead 2-0 vs LAD",
    star: "Jackson Chourio",
    url: "https://www.mlb.com/brewers"
  },
  guardians: {
    name: "Cleveland Guardians",
    badge: "#2 Seed • AL Central Champs",
    img: "guardians.jpg",
    fallbackImg: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=600&q=80",
    desc: "Cleveland captured the AL Central title and advanced past the Chicago White Sox in a thrilling 5-game ALDS. The ALCS is currently tied 1-1 against Tampa Bay as the series moves to Progressive Field.",
    record: "85 - 77",
    status: "ALCS Tied 1-1 vs Rays",
    star: "José Ramírez",
    url: "https://www.mlb.com/guardians"
  },
  rays: {
    name: "Tampa Bay Rays",
    badge: "#1 Seed • AL East Champs",
    img: "rays.jpg",
    fallbackImg: "https://images.unsplash.com/photo-1508802222057-4cabc15b825f?auto=format&fit=crop&w=600&q=80",
    desc: "Tampa Bay posted an AL-best 98-64 record to win the AL East. After sweeping the Yankees in the ALDS, the Rays split the first two games of the ALCS against Cleveland.",
    record: "98 - 64",
    status: "ALCS Tied 1-1 vs CLE",
    star: "Junior Caminero",
    url: "https://www.mlb.com/rays"
  },
  yankees: {
    name: "New York Yankees",
    badge: "AL Wild Card Qualifier",
    img: "yankees.jpg",
    fallbackImg: "https://images.unsplash.com/photo-1562077772-3bd90403f7f0?auto=format&fit=crop&w=600&q=80",
    desc: "The Yankees won 93 games in 2026 and defeated Boston in the Wild Card round before being eliminated by the Rays in the ALDS. Looking ahead to the 2027 season build.",
    record: "93 - 69",
    status: "Eliminated in ALDS",
    star: "Aaron Judge",
    url: "https://www.mlb.com/yankees"
  },
  braves: {
    name: "Atlanta Braves",
    badge: "NL East Champions",
    img: "braves.jpg",
    fallbackImg: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=600&q=80",
    desc: "Atlanta captured the NL East title with 94 victories and defeated Philadelphia in the Wild Card round before taking the Dodgers to 4 games in the NLDS.",
    record: "94 - 68",
    status: "Eliminated in NLDS",
    star: "Ronald Acuña Jr.",
    url: "https://www.mlb.com/braves"
  }
};

let currentTeamKey = 'dodgers';

function selectTeam(teamKey) {
  currentTeamKey = teamKey;
  const t = teamData[teamKey];
  if (!t) return;

  // Update button active state
  document.querySelectorAll('.team-select-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.innerText.toLowerCase().includes(teamKey.slice(0, 4))) {
      btn.classList.add('active');
    }
  });

  // Update Spotlight UI
  document.getElementById('team-name-title').innerText = t.name;
  document.getElementById('team-seed-badge').innerText = t.badge;
  document.getElementById('team-description').innerText = t.desc;
  document.getElementById('team-stat-record').innerText = t.record;
  document.getElementById('team-stat-status').innerText = t.status;
  document.getElementById('team-stat-star').innerText = t.star;
  document.getElementById('team-official-link').href = t.url;

  const imgElem = document.getElementById('team-img');
  imgElem.src = t.img;
  imgElem.onerror = () => { imgElem.src = t.fallbackImg; };
}

function saveFavoriteTeam() {
  localStorage.setItem('mlbFavTeam', currentTeamKey);
  alert(`❤️ Saved ${teamData[currentTeamKey].name} as your favorite team!`);
}

// Check stored favorite on load
window.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('mlbFavTeam');
  if (saved && teamData[saved]) {
    selectTeam(saved);
  }
});

// Multi-Language Dictionary
const translations = {
  en: {
    brand: "MLB Postseason 2026",
    newsNav: "Headlines",
    bracketNav: "Playoff Bracket",
    scheduleNav: "Games & TV",
    teamNav: "Team Hub",
    heroTitle: "2026 League Championship Series",
    heroSub: "Catch every pitch, live broadcast schedules, real-time news, and interactive playoff bracket updates.",
    viewBracket: "View Bracket",
    viewGames: "Game Schedule",
    newsHeading: "📰 Latest Postseason Headlines",
    bracketHeading: "🏆 2026 Postseason Playoff Bracket",
    scheduleHeading: "📺 Upcoming Schedule, Broadcast & Tickets",
    teamHeading: "⭐ Favorite Team Hub",
    thGame: "Game / Matchup",
    thDate: "Date & Time (ET)",
    thTv: "Broadcast TV / Stream",
    thVenue: "Venue & Location",
    thTickets: "Tickets"
  },
  es: {
    brand: "MLB Postemporada 2026",
    newsNav: "Noticias",
    bracketNav: "Cuadro de Playoffs",
    scheduleNav: "Juegos y TV",
    teamNav: "Mi Equipo",
    heroTitle: "Serie de Campeonato de Liga 2026",
    heroSub: "Sigue cada lanzamiento, horarios de transmisión en vivo, noticias e itinerario completo de los playoffs.",
    viewBracket: "Ver Cuadro",
    viewGames: "Calendario",
    newsHeading: "📰 Últimas Noticias de Posttemporada",
    bracketHeading: "🏆 Cuadro Oficial de Playoffs 2026",
    scheduleHeading: "📺 Calendario de Juegos, Transmisiones y Boletos",
    teamHeading: "⭐ Centro de Tu Equipo Favorito",
    thGame: "Partido / Encuentro",
    thDate: "Fecha y Hora (ET)",
    thTv: "Canal de TV / Streaming",
    thVenue: "Estadio y Lugar",
    thTickets: "Boletos"
  },
  zh: {
    brand: "2026 MLB 季后赛中心",
    newsNav: "最新新闻",
    bracketNav: "对阵图",
    scheduleNav: "赛程与直播",
    teamNav: "球队中心",
    heroTitle: "2026 MLB 联盟冠军赛",
    heroSub: "关注每一投球、实时转播日程、比分新闻和互动季后赛对阵图。",
    viewBracket: "查看对阵图",
    viewGames: "比赛日程",
    newsHeading: "📰 季后赛最新头条",
    bracketHeading: "🏆 2026 季后赛官方对阵图",
    scheduleHeading: "📺 比赛日程、电视转播与门票",
    teamHeading: "⭐ 球队专属中心",
    thGame: "对阵场次",
    thDate: "日期与时间 (美东)",
    thTv: "电视转播 / 平台",
    thVenue: "比赛场馆",
    thTickets: "购买门票"
  }
};

function changeLanguage(langKey) {
  const t = translations[langKey];
  if (!t) return;

  document.getElementById('nav-brand').innerText = t.brand;
  document.getElementById('nav-news').innerText = t.newsNav;
  document.getElementById('nav-bracket').innerText = t.bracketNav;
  document.getElementById('nav-schedule').innerText = t.scheduleNav;
  document.getElementById('nav-team').innerText = t.teamNav;
  document.getElementById('hero-title').innerText = t.heroTitle;
  document.getElementById('hero-subtitle').innerText = t.heroSub;
  document.getElementById('btn-view-bracket').innerText = t.viewBracket;
  document.getElementById('btn-view-games').innerText = t.viewGames;
  document.getElementById('news-heading').innerText = t.newsHeading;
  document.getElementById('bracket-heading').innerText = t.bracketHeading;
  document.getElementById('schedule-heading').innerText = t.scheduleHeading;
  document.getElementById('team-heading').innerText = t.teamHeading;

  document.getElementById('th-game').innerText = t.thGame;
  document.getElementById('th-date').innerText = t.thDate;
  document.getElementById('th-tv').innerText = t.thTv;
  document.getElementById('th-venue').innerText = t.thVenue;
  document.getElementById('th-tickets').innerText = t.thTickets;
}

// Dark / Light Theme Toggle
function toggleTheme() {
  const body = document.body;
  const themeBtn = document.getElementById('theme-btn');

  if (body.classList.contains('dark-mode')) {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
    themeBtn.innerText = '🌙 Dark';
  } else {
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
    themeBtn.innerText = '🌓 Light';
  }
}
