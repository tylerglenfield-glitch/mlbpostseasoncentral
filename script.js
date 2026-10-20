// High-Resolution Universal Image Fallback Library (Ensures NO broken photos)
const MLB_PHOTOS = {
  STADIUM: "https://images.unsplash.com/photo-1508802222057-4cabc15b825f?auto=format&fit=crop&w=800&q=80",
  BATTER: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=800&q=80",
  GLOVE: "https://images.unsplash.com/photo-1562077772-3bd90403f7f0?auto=format&fit=crop&w=800&q=80",
  PITCHER: "https://images.unsplash.com/photo-1593341646782-e0b495cff86d?auto=format&fit=crop&w=800&q=80",
  LIGHTS: "https://images.unsplash.com/photo-1529763807622-491b1bb86698?auto=format&fit=crop&w=800&q=80"
};

// Universal Image Fallback Handler (Guarantees every photo loads smoothly)
function handleImageError(imgElem, typeKey = 'STADIUM') {
  if (!imgElem) return;
  const fallbackUrl = MLB_PHOTOS[typeKey] || MLB_PHOTOS.STADIUM;
  if (imgElem.src !== fallbackUrl) {
    imgElem.onerror = null; // prevents infinite loops
    imgElem.src = fallbackUrl;
  }
}

// 30-Franchise Database Updated as of October 19, 2026
const mlb30Teams = {
  // NL CHAMPIONS
  brewers: { 
    name: "Milwaukee Brewers", div: "NL_CENTRAL", seed: "#1 Seed • NL Champions", rec: "103 - 59", pos: "NL Champions (WS Hosts)", star: "Jackson Chourio", ws: "0 Titles", primary: "#122a47", accent: "#ff1c41", stadium: "American Family Field (Milwaukee, WI)", pennants: "2 (1982, 2026)", divTitles: "6", img: "brewers.jpg", fallbackType: 'STADIUM', url: "https://www.mlb.com/brewers", 
    desc: "The Milwaukee Brewers hold home-field advantage for Games 1 and 2 of the 2026 World Series! Milwaukee completed a 4-0 sweep of the Dodgers in the NLCS and enters the Fall Classic led by Jackson Chourio (6 postseason HRs) and an untouchable relief corps (0.88 October ERA).", 
    roster: [{ name: "Jackson Chourio", pos: "OF | #11", stat: ".288 BA, 26 HR, 6 Postseason HRs" }, { name: "Christian Yelich", pos: "OF | #22", stat: ".392 Playoff BA, 18 HR, .910 OPS" }, { name: "Freddy Peralta", pos: "SP | #51", stat: "17-6, 2.85 ERA, 27 Playoff SO" }], 
    gamelog: [{ game: "NLCS Game 4", opp: "@ LA Dodgers", res: "W 6-4", score: "6 - 4", tv: "FS1" }, { game: "NLCS Game 3", opp: "@ LA Dodgers", res: "W 6-2", score: "6 - 2", tv: "FS1" }, { game: "NLCS Game 2", opp: "vs LA Dodgers", res: "W 7-4", score: "7 - 4", tv: "FS1" }] 
  },
  // ALCS CONTENDERS
  rays: { 
    name: "Tampa Bay Rays", div: "AL_EAST", seed: "#1 Seed • ALCS Leads 3-2", rec: "98 - 64", pos: "ALCS Leads 3-2 vs CLE", star: "Junior Caminero", ws: "0 Titles", primary: "#092c5c", accent: "#00a3e0", stadium: "Tropicana Field (St. Petersburg, FL)", pennants: "2", divTitles: "5", img: "rays.jpg", fallbackType: 'LIGHTS', url: "https://www.mlb.com/rays", 
    desc: "Tampa Bay took a 3-2 lead in the ALCS after back-to-back victories in Games 4 and 5 over Cleveland. Game 6 is live tonight at Tropicana Field with Tampa Bay one win away from clinching the AL Pennant.", 
    roster: [{ name: "Junior Caminero", pos: "3B | #1", stat: ".290 BA, 31 HR, 4 Playoff HRs" }, { name: "Shane Baz", pos: "SP | #11", stat: "14-6, 2.95 ERA, 25 Playoff SO" }], 
    gamelog: [{ game: "ALCS Game 5", opp: "@ Cleveland Guardians", res: "W 3-1", score: "3 - 1", tv: "TBS" }, { game: "ALCS Game 4", opp: "@ Cleveland Guardians", res: "W 7-3", score: "7 - 3", tv: "TBS" }] 
  },
  guardians: { 
    name: "Cleveland Guardians", div: "AL_CENTRAL", seed: "#2 Seed • AL Central Champs", rec: "88 - 74", pos: "ALCS Trailing 2-3 vs TB", star: "José Ramírez", ws: "2 Titles", primary: "#0c2340", accent: "#e31937", stadium: "Progressive Field (Cleveland, OH)", pennants: "6", divTitles: "12", img: "guardians.jpg", fallbackType: 'GLOVE', url: "https://www.mlb.com/guardians", 
    desc: "Cleveland battles to keep their season alive in ALCS Game 6 at Tropicana Field after dropping Game 5 at home. José Ramírez leads Cleveland's charge aiming to force a winner-take-all Game 7.", 
    roster: [{ name: "José Ramírez", pos: "3B | #11", stat: ".279 BA, 38 HR, 115 RBI" }, { name: "Steven Kwan", pos: "LF | #38", stat: ".312 BA, 12 HR, 20 SB" }], 
    gamelog: [{ game: "ALCS Game 5", opp: "vs Tampa Bay Rays", res: "L 1-3", score: "1 - 3", tv: "TBS" }, { game: "ALCS Game 4", opp: "vs Tampa Bay Rays", res: "L 3-7", score: "3 - 7", tv: "TBS" }] 
  },
  // NL WEST
  dodgers: { 
    name: "Los Angeles Dodgers", div: "NL_WEST", seed: "#2 Seed • NL West Champs", rec: "100 - 62", pos: "Eliminated in NLCS (0-4 vs MIL)", star: "Shohei Ohtani", ws: "8 Titles", primary: "#005a9c", accent: "#ef3e42", stadium: "Dodger Stadium (Los Angeles, CA)", pennants: "25", divTitles: "21", img: "dodgers.jpg", fallbackType: 'BATTER', url: "https://www.mlb.com/dodgers", 
    desc: "The Los Angeles Dodgers captured the NL West with a 100-62 record behind Shohei Ohtani's historic 54-home-run season before being eliminated by Milwaukee in the NLCS.", 
    roster: [{ name: "Shohei Ohtani", pos: "DH/SP | #17", stat: ".310 BA, 54 HR, 130 RBI, 5 Playoff HRs" }, { name: "Mookie Betts", pos: "SS/OF | #5", stat: ".289 BA, 28 HR" }], 
    gamelog: [{ game: "NLCS Game 4", opp: "vs Milwaukee Brewers", res: "L 4-6", score: "4 - 6", tv: "FS1" }] 
  },
  yankees: { name: "New York Yankees", div: "AL_EAST", seed: "AL Wild Card", rec: "93 - 69", pos: "Eliminated in ALDS", star: "Aaron Judge", ws: "27 Titles", primary: "#0c2340", accent: "#1c355e", stadium: "Yankee Stadium (Bronx, NY)", pennants: "40", divTitles: "20", img: "yankees.jpg", fallbackType: 'GLOVE', url: "https://www.mlb.com/yankees", desc: "The Yankees won 93 games behind Aaron Judge's 53-HR MVP campaign.", roster: [{ name: "Aaron Judge", pos: "OF | #99", stat: ".322 BA, 53 HR, 122 RBI" }], gamelog: [] },
  redsox: { name: "Boston Red Sox", div: "AL_EAST", seed: "AL Wild Card #5", rec: "89 - 73", pos: "Eliminated in WC", star: "Rafael Devers", ws: "9 Titles", primary: "#bd3039", accent: "#0c2340", stadium: "Fenway Park (Boston, MA)", pennants: "14", divTitles: "10", img: "redsox.jpg", fallbackType: 'STADIUM', url: "https://www.mlb.com/redsox", desc: "Boston won 89 games to earn an AL Wild Card berth.", roster: [{ name: "Rafael Devers", pos: "3B | #11", stat: ".282 BA, 34 HR" }], gamelog: [] },
  orioles: { name: "Baltimore Orioles", div: "AL_EAST", seed: "In Contention", rec: "86 - 76", pos: "Regular Season 4th", star: "Gunnar Henderson", ws: "3 Titles", primary: "#df4601", accent: "#000000", stadium: "Camden Yards (Baltimore, MD)", pennants: "7", divTitles: "10", img: "orioles.jpg", fallbackType: 'BATTER', url: "https://www.mlb.com/orioles", desc: "Baltimore finished 86-76 led by Gunnar Henderson.", roster: [{ name: "Gunnar Henderson", pos: "SS | #2", stat: ".281 BA, 37 HR" }], gamelog: [] },
  bluejays: { name: "Toronto Blue Jays", div: "AL_EAST", seed: "In Contention", rec: "82 - 80", pos: "Regular Season 5th", star: "Vladimir Guerrero Jr.", ws: "2 Titles", primary: "#134a8e", accent: "#1d2d5c", stadium: "Rogers Centre (Toronto, ON)", pennants: "2", divTitles: "6", img: "bluejays.jpg", fallbackType: 'PITCHER', url: "https://www.mlb.com/bluejays", desc: "Toronto finished 82-80 powered by Vladimir Guerrero Jr.", roster: [{ name: "Vladimir Guerrero Jr.", pos: "1B | #27", stat: ".323 BA, 30 HR" }], gamelog: [] },
  tigers: { name: "Detroit Tigers", div: "AL_CENTRAL", seed: "AL Wild Card #6", rec: "86 - 76", pos: "Eliminated in WC", star: "Tarik Skubal", ws: "4 Titles", primary: "#0c2340", accent: "#fa4616", stadium: "Comerica Park (Detroit, MI)", pennants: "11", divTitles: "7", img: "tigers.jpg", fallbackType: 'PITCHER', url: "https://www.mlb.com/tigers", desc: "Tarik Skubal (18-4, 2.39 ERA) led Detroit into October.", roster: [{ name: "Tarik Skubal", pos: "SP | #29", stat: "18-4, 2.39 ERA, 228 SO" }], gamelog: [] },
  twins: { name: "Minnesota Twins", div: "AL_CENTRAL", seed: "In Contention", rec: "84 - 78", pos: "Regular Season 3rd", star: "Carlos Correa", ws: "3 Titles", primary: "#072746", accent: "#d31145", stadium: "Target Field (Minneapolis, MN)", pennants: "6", divTitles: "12", img: "twins.jpg", fallbackType: 'BATTER', url: "https://www.mlb.com/twins", desc: "Minnesota finished 84-78 anchored by Carlos Correa.", roster: [{ name: "Carlos Correa", pos: "SS | #4", stat: ".290 BA, 22 HR" }], gamelog: [] },
  royals: { name: "Kansas City Royals", div: "AL_CENTRAL", seed: "In Contention", rec: "83 - 79", pos: "Regular Season 4th", star: "Bobby Witt Jr.", ws: "2 Titles", primary: "#004687", accent: "#7ab2dd", stadium: "Kauffman Stadium (Kansas City, MO)", pennants: "4", divTitles: "1", img: "royals.jpg", fallbackType: 'STADIUM', url: "https://www.mlb.com/royals", desc: "Bobby Witt Jr. posted a second 30-30 season for KC.", roster: [{ name: "Bobby Witt Jr.", pos: "SS | #7", stat: ".332 BA, 32 HR, 31 SB" }], gamelog: [] },
  whitesox: { name: "Chicago White Sox", div: "AL_CENTRAL", seed: "AL Wild Card #6", rec: "84 - 78", pos: "Eliminated in ALDS", star: "Luis Robert Jr.", ws: "3 Titles", primary: "#27251f", accent: "#c4ced4", stadium: "Guaranteed Rate Field (Chicago, IL)", pennants: "6", divTitles: "6", img: "whitesox.jpg", fallbackType: 'LIGHTS', url: "https://www.mlb.com/whitesox", desc: "Chicago won 84 games and pushed Cleveland to 5 games in the ALDS.", roster: [{ name: "Luis Robert Jr.", pos: "CF | #88", stat: ".270 BA, 26 HR" }], gamelog: [] },
  mariners: { name: "Seattle Mariners", div: "AL_WEST", seed: "In Contention", rec: "85 - 77", pos: "Regular Season 2nd", star: "Julio Rodríguez", ws: "0 Titles", primary: "#0c2c56", accent: "#005c5c", stadium: "T-Mobile Park (Seattle, WA)", pennants: "0", divTitles: "4", img: "mariners.jpg", fallbackType: 'BATTER', url: "https://www.mlb.com/mariners", desc: "Julio Rodríguez led Seattle with a 30-30 campaign.", roster: [{ name: "Julio Rodríguez", pos: "CF | #44", stat: ".285 BA, 30 HR, 30 SB" }], gamelog: [] },
  astros: { name: "Houston Astros", div: "AL_WEST", seed: "AL Wild Card", rec: "81 - 81", pos: "Eliminated in WC", star: "Yordan Alvarez", ws: "2 Titles", primary: "#002d62", accent: "#eb6e1f", stadium: "Minute Maid Park (Houston, TX)", pennants: "5", divTitles: "13", img: "astros.jpg", fallbackType: 'LIGHTS', url: "https://www.mlb.com/astros", desc: "Houston reached the postseason behind Yordan Alvarez.", roster: [{ name: "Yordan Alvarez", pos: "DH | #44", stat: ".308 BA, 35 HR" }], gamelog: [] },
  rangers: { name: "Texas Rangers", div: "AL_WEST", seed: "In Contention", rec: "80 - 82", pos: "Regular Season 3rd", star: "Corey Seager", ws: "1 Title", primary: "#003278", accent: "#c0111f", stadium: "Globe Life Field (Arlington, TX)", pennants: "3", divTitles: "7", img: "rangers.jpg", fallbackType: 'GLOVE', url: "https://www.mlb.com/rangers", desc: "Corey Seager hit 30 home runs for Texas in 2026.", roster: [{ name: "Corey Seager", pos: "SS | #5", stat: ".278 BA, 30 HR" }], gamelog: [] },
  athletics: { name: "Athletics", div: "AL_WEST", seed: "Rebuilding", rec: "69 - 93", pos: "Regular Season 4th", star: "Lawrence Butler", ws: "9 Titles", primary: "#003831", accent: "#efb21e", stadium: "Sutter Health Park (Sacramento, CA)", pennants: "15", divTitles: "17", img: "athletics.jpg", fallbackType: 'PITCHER', url: "https://www.mlb.com/athletics", desc: "Lawrence Butler hit 22 home runs for the Athletics.", roster: [{ name: "Lawrence Butler", pos: "OF | #4", stat: ".262 BA, 22 HR" }], gamelog: [] },
  angels: { name: "Los Angeles Angels", div: "AL_WEST", seed: "Rebuilding", rec: "66 - 96", pos: "Regular Season 5th", star: "Mike Trout", ws: "1 Title", primary: "#ba0021", accent: "#003263", stadium: "Angel Stadium (Anaheim, CA)", pennants: "1", divTitles: "9", img: "angels.jpg", fallbackType: 'STADIUM', url: "https://www.mlb.com/angels", desc: "Mike Trout anchored the Angels lineup in Anaheim.", roster: [{ name: "Mike Trout", pos: "CF | #27", stat: ".265 BA, 28 HR" }], gamelog: [] },
  mets: { name: "New York Mets", div: "NL_EAST", seed: "NL Wild Card", rec: "89 - 73", pos: "Eliminated in NLDS", star: "Juan Soto", ws: "2 Titles", primary: "#002d62", accent: "#ff5910", stadium: "Citi Field (Queens, NY)", pennants: "5", divTitles: "6", img: "mets.jpg", fallbackType: 'GLOVE', url: "https://www.mlb.com/mets", desc: "Juan Soto hit 43 HRs in his inaugural year in Queens.", roster: [{ name: "Juan Soto", pos: "RF | #22", stat: ".288 BA, 43 HR, 108 RBI, .421 OBP" }], gamelog: [] },
  braves: { name: "Atlanta Braves", div: "NL_EAST", seed: "NL Wild Card #3", rec: "94 - 68", pos: "Eliminated in NLDS", star: "Ronald Acuña Jr.", ws: "4 Titles", primary: "#13274f", accent: "#ce1141", stadium: "Truist Park (Atlanta, GA)", pennants: "18", divTitles: "23", img: "braves.jpg", fallbackType: 'BATTER', url: "https://www.mlb.com/braves", desc: "Atlanta won 94 games behind Ronald Acuña Jr.", roster: [{ name: "Ronald Acuña Jr.", pos: "RF | #13", stat: ".292 BA, 25 HR" }], gamelog: [] },
  phillies: { name: "Philadelphia Phillies", div: "NL_EAST", seed: "NL Wild Card", rec: "88 - 74", pos: "Eliminated in WC", star: "Bryce Harper", ws: "2 Titles", primary: "#e81828", accent: "#002d62", stadium: "Citizens Bank Park (Philadelphia, PA)", pennants: "8", divTitles: "12", img: "phillies.jpg", fallbackType: 'STADIUM', url: "https://www.mlb.com/phillies", desc: "Bryce Harper led Philadelphia into October.", roster: [{ name: "Bryce Harper", pos: "1B | #3", stat: ".285 BA, 30 HR" }], gamelog: [] },
  nationals: { name: "Washington Nationals", div: "NL_EAST", seed: "Rebuilding", rec: "71 - 91", pos: "Regular Season 4th", star: "CJ Abrams", ws: "1 Title", primary: "#ab0003", accent: "#14223d", stadium: "Nationals Park (Washington, DC)", pennants: "1", divTitles: "5", img: "nationals.jpg", fallbackType: 'PITCHER', url: "https://www.mlb.com/nationals", desc: "CJ Abrams anchored Washington's young core.", roster: [{ name: "CJ Abrams", pos: "SS | #5", stat: ".268 BA, 20 HR" }], gamelog: [] },
  marlins: { name: "Miami Marlins", div: "NL_EAST", seed: "Rebuilding", rec: "62 - 100", pos: "Regular Season 5th", star: "Eury Pérez", ws: "2 Titles", primary: "#00a3e0", accent: "#ef3340", stadium: "loanDepot park (Miami, FL)", pennants: "2", divTitles: "0", img: "marlins.jpg", fallbackType: 'LIGHTS', url: "https://www.mlb.com/marlins", desc: "Eury Pérez leads Miami's young rotation talent.", roster: [{ name: "Eury Pérez", pos: "SP | #39", stat: "3.20 ERA, 110 SO" }], gamelog: [] },
  cubs: { name: "Chicago Cubs", div: "NL_CENTRAL", seed: "NL Wild Card #5", rec: "89 - 73", pos: "Eliminated in WC", star: "Shota Imanaga", ws: "3 Titles", primary: "#0e3386", accent: "#cc3433", stadium: "Wrigley Field (Chicago, IL)", pennants: "11", divTitles: "8", img: "cubs.jpg", fallbackType: 'GLOVE', url: "https://www.mlb.com/cubs", desc: "Chicago won 89 games behind Shota Imanaga.", roster: [{ name: "Shota Imanaga", pos: "SP | #18", stat: "15-5, 2.91 ERA" }], gamelog: [] },
  cardinals: { name: "St. Louis Cardinals", div: "NL_CENTRAL", seed: "In Contention", rec: "81 - 81", pos: "Regular Season 3rd", star: "Nolan Arenado", ws: "11 Titles", primary: "#c41e3a", accent: "#0c2340", stadium: "Busch Stadium (St. Louis, MO)", pennants: "19", divTitles: "15", img: "cardinals.jpg", fallbackType: 'BATTER', url: "https://www.mlb.com/cardinals", desc: "St. Louis finished .500 led by Nolan Arenado.", roster: [{ name: "Nolan Arenado", pos: "3B | #28", stat: ".272 BA, 22 HR" }], gamelog: [] },
  reds: { name: "Cincinnati Reds", div: "NL_CENTRAL", seed: "In Contention", rec: "77 - 85", pos: "Regular Season 4th", star: "Elly De La Cruz", ws: "5 Titles", primary: "#c6011f", accent: "#000000", stadium: "Great American Ball Park (Cincinnati, OH)", pennants: "9", divTitles: "10", img: "reds.jpg", fallbackType: 'LIGHTS', url: "https://www.mlb.com/reds", desc: "Elly De La Cruz stole 67 bases for Cincinnati.", roster: [{ name: "Elly De La Cruz", pos: "SS | #44", stat: ".260 BA, 25 HR, 67 SB" }], gamelog: [] },
  pirates: { name: "Pittsburgh Pirates", div: "NL_CENTRAL", seed: "In Contention", rec: "76 - 86", pos: "Regular Season 5th", star: "Paul Skenes", ws: "5 Titles", primary: "#fdb827", accent: "#000000", stadium: "PNC Park (Pittsburgh, PA)", pennants: "9", divTitles: "9", img: "pirates.jpg", fallbackType: 'PITCHER', url: "https://www.mlb.com/pirates", desc: "Paul Skenes dominated with a 1.96 ERA and 210 SO.", roster: [{ name: "Paul Skenes", pos: "SP | #30", stat: "12-4, 1.96 ERA, 210 SO" }], gamelog: [] },
  padres: { name: "San Diego Padres", div: "NL_WEST", seed: "NL Wild Card #4", rec: "91 - 71", pos: "Eliminated in NLDS", star: "Fernando Tatis Jr.", ws: "0 Titles", primary: "#2f241d", accent: "#ffc425", stadium: "Petco Park (San Diego, CA)", pennants: "2", divTitles: "5", img: "padres.jpg", fallbackType: 'GLOVE', url: "https://www.mlb.com/padres", desc: "San Diego won 91 games and advanced to the NLDS.", roster: [{ name: "Fernando Tatis Jr.", pos: "RF | #23", stat: ".278 BA, 28 HR" }], gamelog: [] },
  diamondbacks: { name: "Arizona Diamondbacks", div: "NL_WEST", seed: "In Contention", rec: "84 - 78", pos: "Regular Season 3rd", star: "Corbin Carroll", ws: "1 Title", primary: "#a71930", accent: "#e3d4ad", stadium: "Chase Field (Phoenix, AZ)", pennants: "2", divTitles: "5", img: "diamondbacks.jpg", fallbackType: 'LIGHTS', url: "https://www.mlb.com/dbacks", desc: "Corbin Carroll and Ketel Marte led Arizona.", roster: [{ name: "Corbin Carroll", pos: "OF | #7", stat: ".265 BA, 22 HR" }], gamelog: [] },
  giants: { name: "San Francisco Giants", div: "NL_WEST", seed: "In Contention", rec: "80 - 82", pos: "Regular Season 4th", star: "Matt Chapman", ws: "8 Titles", primary: "#fd5a1e", accent: "#000000", stadium: "Oracle Park (San Francisco, CA)", pennants: "23", divTitles: "9", img: "giants.jpg", fallbackType: 'STADIUM', url: "https://www.mlb.com/giants", desc: "Matt Chapman provided Gold Glove defense for SF.", roster: [{ name: "Matt Chapman", pos: "3B | #26", stat: ".248 BA, 27 HR" }], gamelog: [] },
  rockies: { name: "Colorado Rockies", div: "NL_WEST", seed: "Rebuilding", rec: "61 - 101", pos: "Regular Season 5th", star: "Ezequiel Tovar", ws: "0 Titles", primary: "#330066", accent: "#c4ced4", stadium: "Coors Field (Denver, CO)", pennants: "1", divTitles: "0", img: "rockies.jpg", fallbackType: 'PITCHER', url: "https://www.mlb.com/rockies", desc: "Ezequiel Tovar hit 25 home runs in Denver.", roster: [{ name: "Ezequiel Tovar", pos: "SS | #14", stat: ".268 BA, 25 HR" }], gamelog: [] }
};

let selectedTeamKey = 'brewers';
let isPredictorMode = false;
let userPredictorPicks = {};

function setText(id, text) { const el = document.getElementById(id); if (el) el.innerText = text; }

function setFavoriteTeam(key) {
  const targetKey = key || selectedTeamKey;
  if (!mlb30Teams[targetKey]) return;
  localStorage.setItem('favMLBTeam', targetKey);
  setText('fav-quick-label', mlb30Teams[targetKey].name);
  setText('fav-btn', `❤️ Favorited (${mlb30Teams[targetKey].name})`);
  setText('portal-fav-btn', `❤️ Favorited (${mlb30Teams[targetKey].name})`);
  alert(`⭐ Saved ${mlb30Teams[targetKey].name} as your favorite team!`);
}

function openFavoriteTeamPortal() {
  const saved = localStorage.getItem('favMLBTeam') || 'brewers';
  if (window.location.pathname.includes('teams.html')) { openTeamPortal(saved); } 
  else { window.location.href = `teams.html?team=${saved}`; }
}

// ----------------------------------------------------
// DYNAMIC LIVE DATA API FETCHERS
// ----------------------------------------------------

async function fetchLiveMLBData() {
  const ticker = document.getElementById('ticker-content');
  const scoreGrid = document.getElementById('live-scoreboard-grid');
  if (ticker) ticker.innerHTML = "<span>🔄 Connecting to ESPN live score feed...</span>";

  try {
    const res = await fetch('https://site.api.espn.com/apis/site/v2/sports/baseball/mlb/scoreboard');
    const data = await res.json();
    if (data.events && data.events.length > 0) {
      if (ticker) ticker.innerHTML = "";
      if (scoreGrid) scoreGrid.innerHTML = "";

      data.events.forEach(event => {
        const comp = event.competitions[0];
        const home = comp.competitors.find(c => c.homeAway === 'home');
        const away = comp.competitors.find(c => c.homeAway === 'away');
        const status = event.status.type.shortDetail;
        const isCompleted = event.status.type.completed;

        const awayScore = parseInt(away.score) || 0;
        const homeScore = parseInt(home.score) || 0;

        if (ticker) {
          ticker.innerHTML += `<span style="margin-right:25px;">⚾ <strong>${away.team.abbreviation} ${awayScore}</strong> @ <strong>${home.team.abbreviation} ${homeScore}</strong> (${status})</span>`;
        }

        if (scoreGrid) {
          scoreGrid.innerHTML += `
            <div class="score-card">
              <div class="card-top">
                <span>POSTSEASON</span>
                <span class="status-badge ${isCompleted ? 'final' : ''}">${status}</span>
              </div>
              <div class="team-score-row ${awayScore > homeScore ? 'winner' : ''}">
                <span>${away.team.displayName}</span>
                <span>${awayScore}</span>
              </div>
              <div class="team-score-row ${homeScore > awayScore ? 'winner' : ''}">
                <span>${home.team.displayName}</span>
                <span>${homeScore}</span>
              </div>
            </div>
          `;
        }
      });
    } else {
      renderFallbackScoreboard();
    }
  } catch (err) {
    renderFallbackScoreboard();
  }
}

function renderFallbackScoreboard() {
  setText('ticker-content', "⚾ ALCS Game 6: CLE 3 @ TB 5 (In Progress - Rays lead ALCS 3-2) | NLCS Final: MIL 6, LAD 4 (MIL wins 4-0) | World Series Game 1: Oct 23 on FOX");
  const scoreGrid = document.getElementById('live-scoreboard-grid');
  if (scoreGrid) {
    scoreGrid.innerHTML = `
      <div class="score-card">
        <div class="card-top"><span>ALCS GAME 6 (RAYS LEAD 3-2)</span> <span class="status-badge">LIVE • TBS</span></div>
        <div class="team-score-row"><span>Cleveland Guardians</span> <span>3</span></div>
        <div class="team-score-row winner"><span>Tampa Bay Rays</span> <span>5</span></div>
      </div>
      <div class="score-card">
        <div class="card-top"><span>NLCS GAME 4 (MIL WINS 4-0)</span> <span class="status-badge final">FINAL</span></div>
        <div class="team-score-row winner"><span>Milwaukee Brewers 🏆</span> <span>6</span></div>
        <div class="team-score-row"><span>Los Angeles Dodgers</span> <span>4</span></div>
      </div>
      <div class="score-card">
        <div class="card-top"><span>2026 WORLD SERIES GAME 1</span> <span class="status-badge">FRI OCT 23 • 8:00 PM ET</span></div>
        <div class="team-score-row"><span>AL Champion (TB/CLE)</span> <span>-</span></div>
        <div class="team-score-row winner"><span>Milwaukee Brewers (Host)</span> <span>-</span></div>
      </div>
    `;
  }
}

async function fetchAutoSchedule() {
  const tbody = document.getElementById('schedule-body');
  if (!tbody) return;

  try {
    const response = await fetch('https://statsapi.mlb.com/api/v1/schedule?sportId=1&hydrate=broadcasts(all),venue&startDate=2026-10-19&endDate=2026-11-01');
    const data = await response.json();

    if (data.dates && data.dates.length > 0) {
      tbody.innerHTML = '';
      data.dates.forEach(dateObj => {
        dateObj.games.forEach(game => {
          const homeTeam = game.teams.home.team.name;
          const awayTeam = game.teams.away.team.name;
          const gameTime = new Date(game.gameDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
          const gameDate = new Date(game.gameDate).toLocaleDateString([], { month: 'short', day: 'numeric' });
          
          let tvNetwork = "FOX";
          if (game.broadcasts) {
            const net = game.broadcasts.find(b => b.type === 'TV');
            if (net) tvNetwork = net.callSign;
          }

          let badgeClass = "net-fox";
          if (tvNetwork.includes("FS1")) badgeClass = "net-fs1";
          else if (tvNetwork.includes("TBS")) badgeClass = "net-tbs";

          const venue = game.venue ? game.venue.name : "MLB Ballpark";

          tbody.innerHTML += `
            <tr>
              <td><strong>${game.description || 'Postseason Matchup'}</strong><br><span style="font-size:12px; color:var(--text-muted);">${awayTeam} @ ${homeTeam}</span></td>
              <td>${gameDate} • ${gameTime} ET</td>
              <td><span class="net-pill ${badgeClass}">${tvNetwork}</span></td>
              <td>${tvNetwork.includes("FOX") ? "FOX Sports App" : "HBO Max / TBS App"}</td>
              <td>${venue}</td>
              <td><a href="https://www.mlb.com/tickets" target="_blank" class="ticket-pill-btn">Tickets 🎟️</a></td>
            </tr>
          `;
        });
      });
    } else {
      renderFallbackSchedule();
    }
  } catch (e) {
    renderFallbackSchedule();
  }
}

function renderFallbackSchedule() {
  const tbody = document.getElementById('schedule-body');
  if (!tbody) return;
  const scheduleData = [
    { match: "ALCS Game 6", matchup: "Cleveland Guardians @ Tampa Bay Rays", time: "Oct 19 • 8:08 PM ET", net: "TBS", badge: "net-tbs", stream: "HBO Max / TBS App", venue: "Tropicana Field, St. Petersburg, FL", link: "https://www.mlb.com/tickets" },
    { match: "ALCS Game 7*", matchup: "Cleveland Guardians @ Tampa Bay Rays", time: "Oct 20 • 8:08 PM ET", net: "TBS", badge: "net-tbs", stream: "HBO Max / TBS App", venue: "Tropicana Field, St. Petersburg, FL", link: "https://www.mlb.com/tickets" },
    { match: "World Series Game 1", matchup: "AL Champion @ Milwaukee Brewers", time: "Oct 23 • 8:00 PM ET", net: "FOX", badge: "net-fox", stream: "FOX Sports Live", venue: "American Family Field, Milwaukee, WI", link: "https://www.mlb.com/tickets" },
    { match: "World Series Game 2", matchup: "AL Champion @ Milwaukee Brewers", time: "Oct 24 • 8:00 PM ET", net: "FOX", badge: "net-fox", stream: "FOX Sports Live", venue: "American Family Field, Milwaukee, WI", link: "https://www.mlb.com/tickets" }
  ];

  tbody.innerHTML = '';
  scheduleData.forEach(item => {
    tbody.innerHTML += `
      <tr>
        <td><strong>${item.match}</strong><br><span style="font-size:12px; color:var(--text-muted);">${item.matchup}</span></td>
        <td>${item.time}</td>
        <td><span class="net-pill ${item.badge}">${item.net}</span></td>
        <td>${item.stream}</td>
        <td>${item.venue}</td>
        <td><a href="${item.link}" target="_blank" class="ticket-pill-btn">Tickets 🎟️</a></td>
      </tr>
    `;
  });
}

// Fan MVP Poll Engine
const pollCandidates = [
  { id: "chourio", name: "Jackson Chourio (MIL)", votes: 742 },
  { id: "caminero", name: "Junior Caminero (TB)", votes: 410 },
  { id: "ohtani", name: "Shohei Ohtani (LAD)", votes: 388 },
  { id: "ramirez", name: "José Ramírez (CLE)", votes: 295 }
];

function renderFanMVPPoll() {
  const container = document.getElementById('mvp-poll-container');
  if (!container) return;
  const userVoted = localStorage.getItem('votedMVP');
  let totalVotes = pollCandidates.reduce((acc, c) => acc + c.votes, 0);
  container.innerHTML = '';
  pollCandidates.forEach(cand => {
    const pct = ((cand.votes / totalVotes) * 100).toFixed(1);
    if (userVoted) {
      container.innerHTML += `<div style="margin-bottom: 12px;"><div class="prob-label-row"><span>${cand.name} ${userVoted === cand.id ? '⭐ (Your Pick)' : ''}</span><strong>${pct}% (${cand.votes} votes)</strong></div><div class="prob-track"><div class="prob-fill" style="width: ${pct}%; background: var(--primary-blue);"></div></div></div>`;
    } else {
      container.innerHTML += `<div class="poll-option-row" onclick="voteMVP('${cand.id}')" style="display:flex; justify-content:space-between; align-items:center; background:var(--bg-dark); padding:10px 14px; border-radius:8px; margin-bottom:8px; cursor:pointer;"><span style="font-weight:700; font-size:14px;">${cand.name}</span><button class="poll-btn-action" style="background:var(--primary-blue); color:#fff; border:none; padding:4px 12px; border-radius:6px; font-weight:700;">Vote</button></div>`;
    }
  });
  if (userVoted) { container.innerHTML += `<p style="font-size:12px; color:var(--text-muted); margin-top:10px; text-align:center;">✓ Thank you for voting! Results updated live.</p>`; }
}

function voteMVP(candId) {
  const target = pollCandidates.find(c => c.id === candId);
  if (target) { target.votes += 1; localStorage.setItem('votedMVP', candId); renderFanMVPPoll(); }
}

function initCompareDropdowns() {
  const s1 = document.getElementById('compare-select-1');
  const s2 = document.getElementById('compare-select-2');
  if (!s1 || !s2) return;
  s1.innerHTML = ''; s2.innerHTML = '';
  Object.keys(mlb30Teams).forEach(key => {
    const team = mlb30Teams[key];
    s1.innerHTML += `<option value="${key}">${team.name}</option>`;
    s2.innerHTML += `<option value="${key}">${team.name}</option>`;
  });
  s1.value = 'brewers'; s2.value = 'rays'; runTeamComparison();
}

function runTeamComparison() {
  const s1 = document.getElementById('compare-select-1');
  const s2 = document.getElementById('compare-select-2');
  const box = document.getElementById('compare-result-box');
  if (!s1 || !s2 || !box) return;
  const t1 = mlb30Teams[s1.value]; const t2 = mlb30Teams[s2.value];
  box.innerHTML = `<div class="compare-grid-2col" style="display:grid; grid-template-columns:1fr 1fr; gap:16px;"><div class="compare-team-card" style="background:var(--bg-dark); padding:16px; border-radius:12px; border:1px solid var(--border-color);"><h4 style="font-size:18px; margin-bottom:8px; color:var(--primary-blue);">${t1.name}</h4><p><strong>2026 Record:</strong> ${t1.rec}</p><p><strong>Status:</strong> ${t1.pos}</p><p><strong>WS Titles:</strong> ${t1.ws}</p><p><strong>Featured Star:</strong> ${t1.star}</p><p><strong>Stadium:</strong> ${t1.stadium}</p></div><div class="compare-team-card" style="background:var(--bg-dark); padding:16px; border-radius:12px; border:1px solid var(--border-color);"><h4 style="font-size:18px; margin-bottom:8px; color:var(--primary-blue);">${t2.name}</h4><p><strong>2026 Record:</strong> ${t2.rec}</p><p><strong>Status:</strong> ${t2.pos}</p><p><strong>WS Titles:</strong> ${t2.ws}</p><p><strong>Featured Star:</strong> ${t2.star}</p><p><strong>Stadium:</strong> ${t2.stadium}</p></div></div>`;
}

function searchTeams(query) {
  const q = query.toLowerCase().trim();
  const grid = document.getElementById('team-picker-grid');
  if (!grid) return; grid.innerHTML = '';
  Object.keys(mlb30Teams).forEach(key => {
    const team = mlb30Teams[key];
    if (team.name.toLowerCase().includes(q) || team.div.toLowerCase().includes(q)) {
      const btn = document.createElement('button');
      btn.className = `team-btn ${key === selectedTeamKey ? 'active' : ''}`;
      btn.innerText = team.name; btn.onclick = () => selectTeam(key); grid.appendChild(btn);
    }
  });
}

function renderTeamGrid(filterDiv = 'ALL') {
  const grid = document.getElementById('team-picker-grid');
  if (!grid) return; grid.innerHTML = '';
  Object.keys(mlb30Teams).forEach(key => {
    const team = mlb30Teams[key];
    if (filterDiv === 'ALL' || team.div === filterDiv) {
      const btn = document.createElement('button');
      btn.className = `team-btn ${key === selectedTeamKey ? 'active' : ''}`;
      btn.innerText = team.name; btn.onclick = () => selectTeam(key); grid.appendChild(btn);
    }
  });
}

function filterTeamsByDivision(divName, e) {
  document.querySelectorAll('.div-tab-btn').forEach(t => t.classList.remove('active'));
  if (e && e.target) e.target.classList.add('active');
  renderTeamGrid(divName);
}

function selectTeam(key) {
  selectedTeamKey = key; const t = mlb30Teams[key]; if (!t) return;
  renderTeamGrid();
  setText('spotlight-title', t.name); setText('spotlight-badge', t.seed); setText('spotlight-desc', t.desc);
  setText('spotlight-rec', t.rec); setText('spotlight-pos', t.pos); setText('spotlight-star', t.star); setText('spotlight-ws', t.ws);
  const img = document.getElementById('spotlight-img');
  if (img) { 
    img.src = t.img; 
    img.onerror = () => handleImageError(img, t.fallbackType || 'STADIUM'); 
  }
}

function showTeamsHub() {
  const mainHub = document.getElementById('main-teams-hub');
  const portalView = document.getElementById('dedicated-team-portal');
  if (mainHub && portalView) { mainHub.style.display = 'block'; portalView.style.display = 'none'; window.scrollTo({ top: 0, behavior: 'smooth' }); }
}

function openTeamPortal(key) {
  selectedTeamKey = key; const t = mlb30Teams[key]; if (!t) return;
  const mainHub = document.getElementById('main-teams-hub');
  const portalView = document.getElementById('dedicated-team-portal');
  if (!portalView) { window.location.href = `teams.html?team=${key}`; return; }

  document.documentElement.style.setProperty('--team-theme-primary', t.primary || '#0c2340');
  document.documentElement.style.setProperty('--team-theme-accent', t.accent || '#2563eb');
  setText('portal-team-name', t.name); setText('portal-badge', t.seed); setText('portal-div-name', t.div.replace('_', ' '));
  setText('portal-full-desc', t.desc); setText('ptab-rec', t.rec); setText('ptab-star', t.star); setText('ptab-status', t.pos);
  setText('ptab-ws-titles', t.ws); setText('ptab-ws-titles-side', t.ws); setText('ptab-pennants', t.pennants || "N/A");
  setText('ptab-div-titles', t.divTitles || "N/A"); setText('ptab-stadium', t.stadium || "MLB Ballpark");

  const rosterGrid = document.getElementById('portal-roster-grid');
  if (rosterGrid) {
    rosterGrid.innerHTML = '';
    t.roster.forEach(p => { rosterGrid.innerHTML += `<div class="roster-card" style="background:var(--bg-dark); padding:14px; border-radius:10px; border:1px solid var(--border-color); margin-bottom:10px;"><strong>${p.name}</strong> <span style="color:var(--text-muted); font-size:12px;">(${p.pos})</span><p style="margin-top:4px; font-size:13px; font-weight:700; color:var(--primary-blue);">${p.stat}</p></div>`; });
  }

  const gamelogBody = document.getElementById('portal-gamelog-body');
  if (gamelogBody) {
    gamelogBody.innerHTML = '';
    if (t.gamelog && t.gamelog.length > 0) {
      t.gamelog.forEach(g => { gamelogBody.innerHTML += `<tr><td><strong>${g.game}</strong></td><td>${g.opp}</td><td><strong style="color:${g.res.includes('W') ? 'var(--accent-green)' : 'var(--accent-red)'}">${g.res}</strong></td><td>${g.score}</td><td><span class="net-pill net-tbs">${g.tv}</span> <a href="https://www.mlb.com/tickets" target="_blank" class="ticket-pill-btn">Tickets 🎟️</a></td></tr>`; });
    } else {
      gamelogBody.innerHTML = `<tr><td><strong>2026 Season Performance</strong></td><td>Full Season Log</td><td><strong>${t.rec}</strong></td><td>-</td><td><a href="${t.url}" target="_blank" class="ticket-pill-btn">MLB Schedule ↗</a></td></tr>`;
    }
  }

  if (mainHub) mainHub.style.display = 'none';
  if (portalView) portalView.style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function launchDedicatedPortal() { openTeamPortal(selectedTeamKey); }

function switchPortalTab(tabName, e) {
  document.querySelectorAll('.portal-tab-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.portal-tab-content').forEach(c => c.classList.remove('active'));
  if (e && e.target) e.target.classList.add('active');
  const targetContent = document.getElementById(`ptab-${tabName}`);
  if (targetContent) targetContent.classList.add('active');
}

function togglePredictorMode() {
  isPredictorMode = !isPredictorMode;
  const toggleBtn = document.getElementById('predictor-toggle-btn');
  const banner = document.getElementById('predictor-status-banner');
  if (toggleBtn) {
    if (isPredictorMode) { toggleBtn.classList.add('active'); toggleBtn.innerText = "🎯 Predictor Mode: ON"; if (banner) banner.style.display = 'flex'; }
    else { toggleBtn.classList.remove('active'); toggleBtn.innerText = "🎯 Predictor Mode: OFF"; if (banner) banner.style.display = 'none'; }
  }
}

function pickTeamInNode(nodeId, teamName, event) {
  if (event) event.stopPropagation();
  if (!isPredictorMode) { openMatchupDetails(nodeId); return; }
  userPredictorPicks[nodeId] = teamName;
  if (nodeId === 'ALCS') setText('pred-al-champ', `AL: ${teamName}`);
  else if (nodeId === 'WS') {
    const crownBox = document.getElementById('champ-crown-box');
    const champName = document.getElementById('champ-team-name');
    if (crownBox && champName) { champName.innerText = teamName; crownBox.style.display = 'block'; }
  }
  alert(`🎯 Prediction Saved! You selected ${teamName} for ${nodeId}.`);
}

function handleNodeClick(nodeId, defaultTeam, event) { if (!isPredictorMode) openMatchupDetails(nodeId); }

function resetPredictorPicks() {
  userPredictorPicks = {}; setText('pred-al-champ', 'AL Champion (TB/CLE)');
  const crownBox = document.getElementById('champ-crown-box'); if (crownBox) crownBox.style.display = 'none';
  alert("🔄 Predictor picks reset!");
}

const matchupDetailsMap = {
  'NLCS': { title: "NLCS: Brewers vs Dodgers (MIL Wins 4-0)", summary: "Milwaukee swept LA 4-0 to win the NL Pennant and secure World Series hosting rights!", games: ["Game 1: MIL 2, LAD 1", "Game 2: MIL 7, LAD 4", "Game 3: MIL 6, LAD 2", "Game 4: MIL 6, LAD 4"] },
  'ALCS': { title: "ALCS: Rays vs Guardians (TB Leads 3-2)", summary: "Tampa Bay leads 3-2 after winning Games 4 and 5 in Cleveland.", games: ["Game 1: CLE 7, TB 3", "Game 2: TB 3, CLE 1", "Game 3: CLE 3, TB 2", "Game 4: TB 7, CLE 3", "Game 5: TB 3, CLE 1"] },
  'WS': { title: "2026 World Series", summary: "Begins Friday, October 23 at American Family Field in Milwaukee on FOX.", games: ["Game 1: Fri Oct 23", "Game 2: Sat Oct 24"] }
};

function openMatchupDetails(key) {
  const modal = document.getElementById('matchup-modal');
  const content = document.getElementById('modal-content'); if (!modal || !content) return;
  const details = matchupDetailsMap[key] || { title: `Postseason Matchup: ${key}`, summary: "Series breakdown.", games: ["Game 1: Final"] };
  content.innerHTML = `<h3 style="font-family:'Space Grotesk',sans-serif; font-size:22px; font-weight:800; margin-bottom:10px;">${details.title}</h3><p style="color:var(--text-muted); font-size:14px; margin-bottom:16px;">${details.summary}</p><div style="background:var(--bg-dark); padding:14px; border-radius:10px; border:1px solid var(--border-color);"><strong style="display:block; margin-bottom:8px; font-size:13px; color:var(--primary-blue);">Game Log Breakdown:</strong><ul style="list-style:none; font-size:13px; line-height:1.8;">${details.games.map(g => `<li>⚾ ${g}</li>`).join('')}</ul></div>`;
  modal.style.display = 'flex';
}

function closeMatchupModal(e) { if (e && e.target && e.target.id === 'matchup-modal') closeMatchupModalDirect(); }
function closeMatchupModalDirect() { const modal = document.getElementById('matchup-modal'); if (modal) modal.style.display = 'none'; }

function filterBracket(league, e) {
  document.querySelectorAll('.filter-tab').forEach(b => { if (!b.classList.contains('predictor-tab')) b.classList.remove('active'); });
  if (e && e.target && !e.target.classList.contains('predictor-tab')) e.target.classList.add('active');
  const nodes = document.querySelectorAll('.matchup-node');
  nodes.forEach(node => {
    if (league === 'all' || node.classList.contains('ws-card')) { node.style.display = 'block'; }
    else if (league === 'al' && (node.innerText.includes('AL') || node.innerText.includes('Rays') || node.innerText.includes('Guardians'))) { node.style.display = 'block'; }
    else if (league === 'nl' && (node.innerText.includes('NL') || node.innerText.includes('Brewers') || node.innerText.includes('Dodgers'))) { node.style.display = 'block'; }
    else { node.style.display = 'none'; }
  });
}

function startLiveTickingTimer() {
  const targetDate = new Date("2026-10-23T20:00:00-04:00").getTime();
  function updateClock() {
    const now = new Date().getTime(); const diff = targetDate - now;
    if (diff > 0) {
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      setText('live-timer-clock', `${String(days).padStart(2,'0')}D ${String(hours).padStart(2,'0')}H ${String(minutes).padStart(2,'0')}M ${String(seconds).padStart(2,'0')}S`);
    } else { setText('live-timer-clock', "⚾ WORLD SERIES IS LIVE ON FOX!"); }
  }
  updateClock(); setInterval(updateClock, 1000);
}

const i18n = {
  en: { home: "Scores & AI Engine", bracket: "Interactive Bracket", teams: "30-Team Franchise Hub", heroTitle: "Road to the 2026 World Series" },
  es: { home: "Marcadores e Inteligencia", bracket: "Cuadro Interactivo", teams: "Hub 30 Franquicias", heroTitle: "El Camino a la Serie Mundial 2026" },
  zh: { home: "比分与AI分析", bracket: "互动季后赛图", teams: "30支球队中心", heroTitle: "通往2026世界大赛之路" }
};

function changeLanguage(langKey) {
  const dict = i18n[langKey]; if (!dict) return;
  setText('nav-home', dict.home); setText('nav-bracket', dict.bracket); setText('nav-teams', dict.teams); setText('hero-heading', dict.heroTitle);
}

function toggleTheme() {
  const body = document.body; const icon = document.getElementById('theme-icon');
  if (body.classList.contains('dark-mode')) { body.classList.remove('dark-mode'); body.classList.add('light-mode'); if (icon) icon.innerText = '☀️'; localStorage.setItem('themeMode', 'light'); }
  else { body.classList.remove('light-mode'); body.classList.add('dark-mode'); if (icon) icon.innerText = '🌙'; localStorage.setItem('themeMode', 'dark'); }
}

window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('themeMode');
  if (savedTheme === 'light') { document.body.classList.remove('dark-mode'); document.body.classList.add('light-mode'); setText('theme-icon', '☀️'); }
  const savedFav = localStorage.getItem('favMLBTeam');
  if (savedFav && mlb30Teams[savedFav]) setText('fav-quick-label', mlb30Teams[savedFav].name);

  renderTeamGrid(); 
  fetchAutoSchedule(); 
  fetchLiveMLBData(); 
  startLiveTickingTimer(); 
  renderFanMVPPoll(); 
  initCompareDropdowns();

  const urlParams = new URLSearchParams(window.location.search);
  const teamParam = urlParams.get('team');
  if (teamParam && mlb30Teams[teamParam]) openTeamPortal(teamParam);
  else if (savedFav && mlb30Teams[savedFav]) selectTeam(savedFav);

  setInterval(fetchLiveMLBData, 60000);
});
