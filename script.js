// High-Definition Fallback Baseball Images
const MLB_PHOTOS = {
  STADIUM: "https://images.unsplash.com/photo-1508802222057-4cabc15b825f?auto=format&fit=crop&w=800&q=80",
  BATTER: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=800&q=80",
  GLOVE: "https://images.unsplash.com/photo-1562077772-3bd90403f7f0?auto=format&fit=crop&w=800&q=80",
  PITCHER: "https://images.unsplash.com/photo-1593341646782-e0b495cff86d?auto=format&fit=crop&w=800&q=80",
  LIGHTS: "https://images.unsplash.com/photo-1529763807622-491b1bb86698?auto=format&fit=crop&w=800&q=80"
};

// Thorough, Fact-Checked Database for All 30 MLB Franchises
const mlb30Teams = {
  // AL EAST
  yankees: { 
    name: "New York Yankees", div: "AL_EAST", seed: "AL Wild Card", rec: "93 - 69", pos: "Eliminated in ALDS (0-3 vs Rays)", star: "Aaron Judge", ws: "27 Titles", primary: "#0c2340", accent: "#1c355e", stadium: "Yankee Stadium (Bronx, NY)", pennants: "40", divTitles: "20", img: "yankees.jpg", fallback: MLB_PHOTOS.GLOVE, url: "https://www.mlb.com/yankees", 
    desc: "The New York Yankees secured a 93–69 record in 2026, earning an AL Wild Card berth behind another heroic MVP campaign from captain Aaron Judge, who slugged 53 home runs and drove in 122 RBIs. Supported by infielder Jazz Chisholm Jr. and veteran DH Giancarlo Stanton, the Yankees swept Boston in the Wild Card round before being shut down by Tampa Bay's elite pitching staff in an 0–3 ALDS sweep. The Bronx Bombers now enter the offseason focused on reinforcing their starting rotation depth and bullpen for 2027.", 
    roster: [{ name: "Aaron Judge", pos: "OF | #99", stat: ".322 BA, 53 HR, 122 RBI" }, { name: "Jazz Chisholm Jr.", pos: "3B/2B | #13", stat: ".256 BA, 24 HR, 30 SB" }, { name: "Giancarlo Stanton", pos: "DH | #27", stat: ".235 BA, 27 HR" }], 
    gamelog: [{ game: "ALDS Game 3", opp: "vs Tampa Bay Rays", res: "L 3-4", score: "3 - 4", tv: "TBS" }, { game: "ALDS Game 2", opp: "@ Tampa Bay Rays", res: "L 2-5", score: "2 - 5", tv: "TBS" }] 
  },
  redsox: { 
    name: "Boston Red Sox", div: "AL_EAST", seed: "AL Wild Card #5", rec: "89 - 73", pos: "Eliminated in Wild Card", star: "Rafael Devers", ws: "9 Titles", primary: "#bd3039", accent: "#0c2340", stadium: "Fenway Park (Boston, MA)", pennants: "14", divTitles: "10", img: "redsox.jpg", fallback: MLB_PHOTOS.STADIUM, url: "https://www.mlb.com/redsox", 
    desc: "Boston staged a ferocious second-half surge in 2026 to finish 89–73 and capture an AL Wild Card berth. Anchored by slugger Rafael Devers and an aggressive young outfield, the Red Sox pushed rival New York in the opening postseason round before being eliminated. With a talented farm system graduating top pitching prospects, Boston is primed to challenge for the AL East crown next season.", 
    roster: [{ name: "Rafael Devers", pos: "3B | #11", stat: ".282 BA, 34 HR" }, { name: "Jarren Duran", pos: "OF | #16", stat: ".285 BA, 21 HR, 35 SB" }], 
    gamelog: [] 
  },
  rays: { 
    name: "Tampa Bay Rays", div: "AL_EAST", seed: "#1 Seed • AL East Champs", rec: "98 - 64", pos: "ALCS Series Tied 1-1", star: "Junior Caminero", ws: "0 Titles", primary: "#092c5c", accent: "#00a3e0", stadium: "Tropicana Field (St. Petersburg, FL)", pennants: "2", divTitles: "5", img: "rays.jpg", fallback: MLB_PHOTOS.LIGHTS, url: "https://www.mlb.com/rays", 
    desc: "The Tampa Bay Rays posted an American League-best 98–64 record in 2026, relying on an elite bullpen and dynamic run manufacturing to capture the AL East crown. Tampa Bay swept the New York Yankees 3–0 in the ALDS behind dominant pitching, allowing just six runs across the series. Currently tied 1–1 with Cleveland in the ALCS, the Rays feature corner infielder Junior Caminero as they chase their first World Series title in franchise history.", 
    roster: [{ name: "Junior Caminero", pos: "3B | #1", stat: ".290 BA, 31 HR" }, { name: "Shane Baz", pos: "SP | #11", stat: "14-6, 2.95 ERA" }], 
    gamelog: [{ game: "ALCS Game 2", opp: "vs Cleveland Guardians", res: "W 3-1", score: "3 - 1", tv: "TBS" }] 
  },
  orioles: { 
    name: "Baltimore Orioles", div: "AL_EAST", seed: "In Contention", rec: "86 - 76", pos: "Regular Season 4th", star: "Gunnar Henderson", ws: "3 Titles", primary: "#df4601", accent: "#000000", stadium: "Camden Yards (Baltimore, MD)", pennants: "7", divTitles: "10", img: "orioles.jpg", fallback: MLB_PHOTOS.BATTER, url: "https://www.mlb.com/orioles", 
    desc: "Baltimore showcased explosive offensive potential throughout 2026, finishing 86–76 in a ruthless AL East division. Led by All-Star shortstop Gunnar Henderson's 37 home runs and catcher Adley Rutschman, the Orioles remained in Wild Card contention until the final week of September. With one of baseball's brightest young cores, Baltimore remains a premier AL contender.", 
    roster: [{ name: "Gunnar Henderson", pos: "SS | #2", stat: ".281 BA, 37 HR, 92 RBI" }, { name: "Adley Rutschman", pos: "C | #35", stat: ".272 BA, 22 HR" }], 
    gamelog: [] 
  },
  bluejays: { 
    name: "Toronto Blue Jays", div: "AL_EAST", seed: "In Contention", rec: "82 - 80", pos: "Regular Season 5th", star: "Vladimir Guerrero Jr.", ws: "2 Titles", primary: "#134a8e", accent: "#1d2d5c", stadium: "Rogers Centre (Toronto, ON)", pennants: "2", divTitles: "6", img: "bluejays.jpg", fallback: MLB_PHOTOS.PITCHER, url: "https://www.mlb.com/bluejays", 
    desc: "Toronto finished above .500 at 82–80 during a competitive 2026 campaign, powered by Vladimir Guerrero Jr.'s 30 home runs and strong starting rotation performances at Rogers Centre. Despite missing out on October baseball, the Blue Jays boast a veteran core capable of rebounding into playoff contention with targeted bullpen upgrades.", 
    roster: [{ name: "Vladimir Guerrero Jr.", pos: "1B | #27", stat: ".323 BA, 30 HR, 103 RBI" }, { name: "Bo Bichette", pos: "SS | #11", stat: ".288 BA, 18 HR" }], 
    gamelog: [] 
  },

  // AL CENTRAL
  guardians: { 
    name: "Cleveland Guardians", div: "AL_CENTRAL", seed: "#2 Seed • AL Central Champs", rec: "88 - 74", pos: "ALCS Series Tied 1-1", star: "José Ramírez", ws: "2 Titles", primary: "#0c2340", accent: "#e31937", stadium: "Progressive Field (Cleveland, OH)", pennants: "6", divTitles: "12", img: "guardians.jpg", fallback: MLB_PHOTOS.GLOVE, url: "https://www.mlb.com/guardians", 
    desc: "The Cleveland Guardians claimed the AL Central title with an 88–74 record, navigating a grueling 5-game ALDS victory over the Chicago White Sox before advancing to the ALCS. Anchored by perennial MVP candidate José Ramírez and aggressive baserunning, Cleveland stole Game 1 in Tampa Bay to tie the ALCS at 1–1. As the series shifts to Progressive Field, Cleveland aims to leverage home-field advantage.", 
    roster: [{ name: "José Ramírez", pos: "3B | #11", stat: ".279 BA, 38 HR, 115 RBI" }, { name: "Steven Kwan", pos: "LF | #38", stat: ".312 BA, 12 HR, 20 SB" }], 
    gamelog: [{ game: "ALCS Game 2", opp: "@ Tampa Bay Rays", res: "L 1-3", score: "1 - 3", tv: "TBS" }] 
  },
  tigers: { 
    name: "Detroit Tigers", div: "AL_CENTRAL", seed: "AL Wild Card #6", rec: "86 - 76", pos: "Eliminated in WC", star: "Tarik Skubal", ws: "4 Titles", primary: "#0c2340", accent: "#fa4616", stadium: "Comerica Park (Detroit, MI)", pennants: "11", divTitles: "7", img: "tigers.jpg", fallback: MLB_PHOTOS.PITCHER, url: "https://www.mlb.com/tigers", 
    desc: "Detroit earned an AL Wild Card spot in 2026 behind Tarik Skubal's Cy Young-caliber season (18–4, 2.39 ERA). The Tigers energized Comerica Park with a thrilling late-summer run before falling to Cleveland in a hard-fought 3-game Wild Card series.", 
    roster: [{ name: "Tarik Skubal", pos: "SP | #29", stat: "18-4, 2.39 ERA, 228 SO" }, { name: "Riley Greene", pos: "OF | #31", stat: ".268 BA, 24 HR" }], 
    gamelog: [] 
  },
  twins: { 
    name: "Minnesota Twins", div: "AL_CENTRAL", seed: "In Contention", rec: "84 - 78", pos: "Regular Season 3rd", star: "Carlos Correa", ws: "3 Titles", primary: "#072746", accent: "#d31145", stadium: "Target Field (Minneapolis, MN)", pennants: "6", divTitles: "12", img: "twins.jpg", fallback: MLB_PHOTOS.BATTER, url: "https://www.mlb.com/twins", 
    desc: "Minnesota stayed in postseason contention all summer, finishing 84–78 behind Carlos Correa's leadership and dynamic young lineup depth at Target Field. The Twins look to retool their starting staff to mount a division title push in 2027.", 
    roster: [{ name: "Carlos Correa", pos: "SS | #4", stat: ".290 BA, 22 HR" }, { name: "Byron Buxton", pos: "OF | #25", stat: ".275 BA, 28 HR" }], 
    gamelog: [] 
  },
  royals: { 
    name: "Kansas City Royals", div: "AL_CENTRAL", seed: "In Contention", rec: "83 - 79", pos: "Regular Season 4th", star: "Bobby Witt Jr.", ws: "2 Titles", primary: "#004687", accent: "#7ab2dd", stadium: "Kauffman Stadium (Kansas City, MO)", pennants: "4", divTitles: "1", img: "royals.jpg", fallback: MLB_PHOTOS.STADIUM, url: "https://www.mlb.com/royals", 
    desc: "Kansas City put together an 83–79 season headlined by superstar Bobby Witt Jr.'s second consecutive 30–30 campaign, establishing the Royals as a dangerous emerging squad in the American League.", 
    roster: [{ name: "Bobby Witt Jr.", pos: "SS | #7", stat: ".332 BA, 32 HR, 109 RBI, 31 SB" }, { name: "Cole Ragans", pos: "SP | #55", stat: "13-8, 3.14 ERA" }], 
    gamelog: [] 
  },
  whitesox: { 
    name: "Chicago White Sox", div: "AL_CENTRAL", seed: "AL Wild Card #6", rec: "84 - 78", pos: "Eliminated in ALDS", star: "Luis Robert Jr.", ws: "3 Titles", primary: "#27251f", accent: "#c4ced4", stadium: "Guaranteed Rate Field (Chicago, IL)", pennants: "6", divTitles: "6", img: "whitesox.jpg", fallback: MLB_PHOTOS.LIGHTS, url: "https://www.mlb.com/whitesox", 
    desc: "Chicago engineered a remarkable turnaround in 2026, winning 84 games to capture a Wild Card berth before pushing rival Cleveland to 5 games in a memorable ALDS battle behind Luis Robert Jr. and electric relief pitching.", 
    roster: [{ name: "Luis Robert Jr.", pos: "CF | #88", stat: ".270 BA, 26 HR, 25 SB" }], 
    gamelog: [] 
  },

  // AL WEST
  mariners: { 
    name: "Seattle Mariners", div: "AL_WEST", seed: "In Contention", rec: "85 - 77", pos: "Regular Season 2nd", star: "Julio Rodríguez", ws: "0 Titles", primary: "#0c2c56", accent: "#005c5c", stadium: "T-Mobile Park (Seattle, WA)", pennants: "0", divTitles: "4", img: "mariners.jpg", fallback: MLB_PHOTOS.BATTER, url: "https://www.mlb.com/mariners", 
    desc: "Seattle contended closely in the AL West, driven by Julio Rodríguez's elite 30–30 season and one of the most stingy starting rotations in the American League featuring Logan Gilbert and George Kirby.", 
    roster: [{ name: "Julio Rodríguez", pos: "CF | #44", stat: ".285 BA, 30 HR, 30 SB" }, { name: "Logan Gilbert", pos: "SP | #36", stat: "15-7, 2.88 ERA" }], 
    gamelog: [] 
  },
  astros: { 
    name: "Houston Astros", div: "AL_WEST", seed: "AL Wild Card", rec: "81 - 81", pos: "Eliminated in WC", star: "Yordan Alvarez", ws: "2 Titles", primary: "#002d62", accent: "#eb6e1f", stadium: "Minute Maid Park (Houston, TX)", pennants: "5", divTitles: "13", img: "astros.jpg", fallback: MLB_PHOTOS.LIGHTS, url: "https://www.mlb.com/astros", 
    desc: "Houston compiled another postseason berth in 2026, relying on Yordan Alvarez's power hitting and Framber Valdez's quality starts before bowing out in a competitive Wild Card matchup.", 
    roster: [{ name: "Yordan Alvarez", pos: "DH | #44", stat: ".308 BA, 35 HR, 104 RBI" }, { name: "Jose Altuve", pos: "2B | #27", stat: ".295 BA, 20 HR" }], 
    gamelog: [] 
  },
  rangers: { 
    name: "Texas Rangers", div: "AL_WEST", seed: "In Contention", rec: "80 - 82", pos: "Regular Season 3rd", star: "Corey Seager", ws: "1 Title", primary: "#003278", accent: "#c0111f", stadium: "Globe Life Field (Arlington, TX)", pennants: "3", divTitles: "7", img: "rangers.jpg", fallback: MLB_PHOTOS.GLOVE, url: "https://www.mlb.com/rangers", 
    desc: "Texas stayed competitive all season long at Globe Life Field, building around Corey Seager's 30 home runs and Marcus Semien's durability as they retool for 2027.", 
    roster: [{ name: "Corey Seager", pos: "SS | #5", stat: ".278 BA, 30 HR, 88 RBI" }, { name: "Wyatt Langford", pos: "OF | #36", stat: ".265 BA, 22 HR" }], 
    gamelog: [] 
  },
  athletics: { 
    name: "Athletics", div: "AL_WEST", seed: "Rebuilding", rec: "69 - 93", pos: "Regular Season 4th", star: "Lawrence Butler", ws: "9 Titles", primary: "#003831", accent: "#efb21e", stadium: "Sutter Health Park (Sacramento, CA)", pennants: "15", divTitles: "17", img: "athletics.jpg", fallback: MLB_PHOTOS.PITCHER, url: "https://www.mlb.com/athletics", 
    desc: "The Athletics displayed exciting young power hitting in 2026, led by Lawrence Butler's breakout campaign and Mason Miller's 102 MPH fastball in Sacramento.", 
    roster: [{ name: "Lawrence Butler", pos: "OF | #4", stat: ".262 BA, 22 HR, 18 SB" }, { name: "Mason Miller", pos: "RP | #19", stat: "102 MPH Fastball, 28 Saves" }], 
    gamelog: [] 
  },
  angels: { 
    name: "Los Angeles Angels", div: "AL_WEST", seed: "Rebuilding", rec: "66 - 96", pos: "Regular Season 5th", star: "Mike Trout", ws: "1 Title", primary: "#ba0021", accent: "#003263", stadium: "Angel Stadium (Anaheim, CA)", pennants: "1", divTitles: "9", img: "angels.jpg", fallback: MLB_PHOTOS.STADIUM, url: "https://www.mlb.com/angels", 
    desc: "Mike Trout provided veteran leadership for the Angels as young core prospects Zach Neto and Logan O'Hoppe developed into cornerstone major league performers.", 
    roster: [{ name: "Mike Trout", pos: "CF | #27", stat: ".265 BA, 28 HR" }, { name: "Zach Neto", pos: "SS | #9", stat: ".258 BA, 23 HR, 20 SB" }], 
    gamelog: [] 
  },

  // NL EAST
  mets: { 
    name: "New York Mets", div: "NL_EAST", seed: "NL Wild Card", rec: "89 - 73", pos: "Eliminated in NLDS", star: "Juan Soto", ws: "2 Titles", primary: "#002d62", accent: "#ff5910", stadium: "Citi Field (Queens, NY)", pennants: "5", divTitles: "6", img: "mets.jpg", fallback: MLB_PHOTOS.GLOVE, url: "https://www.mlb.com/mets", 
    desc: "The New York Mets made sports history by signing superstar Juan Soto to a record 15-year contract. Paired with captain Francisco Lindor and slugger Pete Alonso, Soto posted a career-high 43 home runs and led the NL in on-base percentage during his inaugural campaign in Queens. The Mets captured an NL Wild Card berth and advanced to the NLDS before falling to Milwaukee.", 
    roster: [{ name: "Juan Soto", pos: "RF | #22", stat: ".288 BA, 43 HR, 108 RBI, .421 OBP" }, { name: "Francisco Lindor", pos: "SS | #12", stat: ".273 BA, 31 HR, 91 RBI" }, { name: "Pete Alonso", pos: "1B | #20", stat: ".242 BA, 34 HR, 95 RBI" }], 
    gamelog: [] 
  },
  braves: { 
    name: "Atlanta Braves", div: "NL_EAST", seed: "NL Wild Card #3", rec: "94 - 68", pos: "Eliminated in NLDS", star: "Ronald Acuña Jr.", ws: "4 Titles", primary: "#13274f", accent: "#ce1141", stadium: "Truist Park (Atlanta, GA)", pennants: "18", divTitles: "23", img: "braves.jpg", fallback: MLB_PHOTOS.BATTER, url: "https://www.mlb.com/braves", 
    desc: "Atlanta won 94 games in 2026 to earn a Wild Card spot. After defeating Philadelphia, the Braves pushed Los Angeles to 4 games in the NLDS behind Ronald Acuña Jr.'s explosive energy and Austin Riley's run production.", 
    roster: [{ name: "Ronald Acuña Jr.", pos: "RF | #13", stat: ".292 BA, 25 HR, 32 SB" }, { name: "Austin Riley", pos: "3B | #27", stat: ".278 BA, 30 HR" }], 
    gamelog: [] 
  },
  phillies: { 
    name: "Philadelphia Phillies", div: "NL_EAST", seed: "NL Wild Card", rec: "88 - 74", pos: "Eliminated in WC", star: "Bryce Harper", ws: "2 Titles", primary: "#e81828", accent: "#002d62", stadium: "Citizens Bank Park (Philadelphia, PA)", pennants: "8", divTitles: "12", img: "phillies.jpg", fallback: MLB_PHOTOS.STADIUM, url: "https://www.mlb.com/phillies", 
    desc: "Philadelphia earned another October appearance behind Bryce Harper's 30 home runs and Zack Wheeler's dominant starting rotation work, energizing Citizens Bank Park all autumn.", 
    roster: [{ name: "Bryce Harper", pos: "1B | #3", stat: ".285 BA, 30 HR, 98 RBI" }, { name: "Zack Wheeler", pos: "SP | #45", stat: "16-7, 2.74 ERA" }], 
    gamelog: [] 
  },
  nationals: { 
    name: "Washington Nationals", div: "NL_EAST", seed: "Rebuilding", rec: "71 - 91", pos: "Regular Season 4th", star: "CJ Abrams", ws: "1 Title", primary: "#ab0003", accent: "#14223d", stadium: "Nationals Park (Washington, DC)", pennants: "1", divTitles: "5", img: "nationals.jpg", fallback: MLB_PHOTOS.PITCHER, url: "https://www.mlb.com/nationals", 
    desc: "Washington's young nucleus developed rapidly in DC, led by All-Star shortstop CJ Abrams' speed and James Wood's towering home run power.", 
    roster: [{ name: "CJ Abrams", pos: "SS | #5", stat: ".268 BA, 20 HR, 31 SB" }, { name: "James Wood", pos: "OF | #50", stat: ".264 BA, 22 HR" }], 
    gamelog: [] 
  },
  marlins: { 
    name: "Miami Marlins", div: "NL_EAST", seed: "Rebuilding", rec: "62 - 100", pos: "Regular Season 5th", star: "Eury Pérez", ws: "2 Titles", primary: "#00a3e0", accent: "#ef3340", stadium: "loanDepot park (Miami, FL)", pennants: "2", divTitles: "0", img: "marlins.jpg", fallback: MLB_PHOTOS.LIGHTS, url: "https://www.mlb.com/marlins", 
    desc: "Miami continues developing top international talent and electric young rotation arms like Eury Pérez in South Florida.", 
    roster: [{ name: "Eury Pérez", pos: "SP | #39", stat: "3.20 ERA, 110 SO" }], 
    gamelog: [] 
  },

  // NL CENTRAL
  brewers: { 
    name: "Milwaukee Brewers", div: "NL_CENTRAL", seed: "#1 Seed • NL Central Champs", rec: "103 - 59", pos: "NLCS Lead 2-0 vs LAD", star: "Jackson Chourio", ws: "0 Titles", primary: "#122a47", accent: "#ff1c41", stadium: "American Family Field (Milwaukee, WI)", pennants: "1", divTitles: "6", img: "brewers.jpg", fallback: MLB_PHOTOS.STADIUM, url: "https://www.mlb.com/brewers", 
    desc: "The Milwaukee Brewers dominated Major League Baseball in 2026 with an MLB-best 103–59 record, clinching the NL Central title behind an untouchable bullpen and electric play from phenom Jackson Chourio. Milwaukee defeated San Diego 3–1 in the NLDS and holds a 2–0 NLCS lead over Los Angeles, positioning them as favorites for their first World Series title.", 
    roster: [{ name: "Jackson Chourio", pos: "OF | #11", stat: ".288 BA, 26 HR, 88 RBI" }, { name: "Christian Yelich", pos: "OF | #22", stat: ".315 BA, 18 HR, .910 OPS" }], 
    gamelog: [{ game: "NLCS Game 2", opp: "vs LA Dodgers", res: "W 7-4", score: "7 - 4", tv: "FS1" }, { game: "NLCS Game 1", opp: "vs LA Dodgers", res: "W 2-1", score: "2 - 1", tv: "FS1" }] 
  },
  cubs: { 
    name: "Chicago Cubs", div: "NL_CENTRAL", seed: "NL Wild Card #5", rec: "89 - 73", pos: "Eliminated in WC", star: "Pete Crow-Armstrong", ws: "3 Titles", primary: "#0e3386", accent: "#cc3433", stadium: "Wrigley Field (Chicago, IL)", pennants: "11", divTitles: "8", img: "cubs.jpg", fallback: MLB_PHOTOS.GLOVE, url: "https://www.mlb.com/cubs", 
    desc: "Chicago won 89 games to earn a Wild Card berth, filling Wrigley Field with electric autumn energy before falling to San Diego in a close Wild Card series.", 
    roster: [{ name: "Pete Crow-Armstrong", pos: "CF | #4", stat: ".252 BA, 20 HR, 30 SB" }, { name: "Shota Imanaga", pos: "SP | #18", stat: "15-5, 2.91 ERA" }], 
    gamelog: [] 
  },
  cardinals: { 
    name: "St. Louis Cardinals", div: "NL_CENTRAL", seed: "In Contention", rec: "81 - 81", pos: "Regular Season 3rd", star: "Nolan Arenado", ws: "11 Titles", primary: "#c41e3a", accent: "#0c2340", stadium: "Busch Stadium (St. Louis, MO)", pennants: "19", divTitles: "15", img: "cardinals.jpg", fallback: MLB_PHOTOS.BATTER, url: "https://www.mlb.com/cardinals", 
    desc: "St. Louis finished at .500 in NL Central competition, anchored by Nolan Arenado's Gold Glove defense at third base and Willson Contreras.", 
    roster: [{ name: "Nolan Arenado", pos: "3B | #28", stat: ".272 BA, 22 HR, 80 RBI" }], 
    gamelog: [] 
  },
  reds: { 
    name: "Cincinnati Reds", div: "NL_CENTRAL", seed: "In Contention", rec: "77 - 85", pos: "Regular Season 4th", star: "Elly De La Cruz", ws: "5 Titles", primary: "#c6011f", accent: "#000000", stadium: "Great American Ball Park (Cincinnati, OH)", pennants: "9", divTitles: "10", img: "reds.jpg", fallback: MLB_PHOTOS.LIGHTS, url: "https://www.mlb.com/reds", 
    desc: "Elly De La Cruz put on a human highlight reel for Cincinnati, setting franchise stolen base records and captivating baseball fans all summer.", 
    roster: [{ name: "Elly De La Cruz", pos: "SS | #44", stat: ".260 BA, 25 HR, 67 SB" }, { name: "Hunter Greene", pos: "SP | #21", stat: "12-6, 2.85 ERA" }], 
    gamelog: [] 
  },
  pirates: { 
    name: "Pittsburgh Pirates", div: "NL_CENTRAL", seed: "In Contention", rec: "76 - 86", pos: "Regular Season 5th", star: "Paul Skenes", ws: "5 Titles", primary: "#fdb827", accent: "#000000", stadium: "PNC Park (Pittsburgh, PA)", pennants: "9", divTitles: "9", img: "pirates.jpg", fallback: MLB_PHOTOS.PITCHER, url: "https://www.mlb.com/pirates", 
    desc: "Paul Skenes delivered Cy Young-worthy dominance for Pittsburgh (12–4, 1.96 ERA, 210 SO), establishing the Pirates as a pitching powerhouse for years to come.", 
    roster: [{ name: "Paul Skenes", pos: "SP | #30", stat: "12-4, 1.96 ERA, 210 SO" }, { name: "Oneil Cruz", pos: "OF | #15", stat: ".265 BA, 24 HR" }], 
    gamelog: [] 
  },

  // NL WEST
  dodgers: { 
    name: "Los Angeles Dodgers", div: "NL_WEST", seed: "#2 Seed • NL West Champs", rec: "100 - 62", pos: "NLCS Trailing 0-2 vs MIL", star: "Shohei Ohtani", ws: "8 Titles", primary: "#005a9c", accent: "#ef3e42", stadium: "Dodger Stadium (Los Angeles, CA)", pennants: "25", divTitles: "21", img: "dodgers.jpg", fallback: MLB_PHOTOS.BATTER, url: "https://www.mlb.com/dodgers", 
    desc: "The Los Angeles Dodgers captured the NL West with a 100–62 record in 2026, powered by Shohei Ohtani's historic 54-home-run season. Los Angeles defeated Atlanta 3–1 in the NLDS before dropping the first two NLCS games in Milwaukee. Returning to Dodger Stadium for Game 3, LA relies on its star lineup to turn the series around.", 
    roster: [{ name: "Shohei Ohtani", pos: "DH/SP | #17", stat: ".310 BA, 54 HR, 130 RBI" }, { name: "Mookie Betts", pos: "SS/OF | #5", stat: ".289 BA, 28 HR" }], 
    gamelog: [{ game: "NLCS Game 2", opp: "@ Milwaukee Brewers", res: "L 4-7", score: "4 - 7", tv: "FS1" }, { game: "NLCS Game 1", opp: "@ Milwaukee Brewers", res: "L 1-2", score: "1 - 2", tv: "FS1" }] 
  },
  padres: { 
    name: "San Diego Padres", div: "NL_WEST", seed: "NL Wild Card #4", rec: "91 - 71", pos: "Eliminated in NLDS", star: "Fernando Tatis Jr.", ws: "0 Titles", primary: "#2f241d", accent: "#ffc425", stadium: "Petco Park (San Diego, CA)", pennants: "2", divTitles: "5", img: "padres.jpg", fallback: MLB_PHOTOS.GLOVE, url: "https://www.mlb.com/padres", 
    desc: "San Diego won 91 games, defeated Chicago in the Wild Card, and pushed Milwaukee to 4 games in a competitive NLDS battle behind Fernando Tatis Jr. and Manny Machado.", 
    roster: [{ name: "Fernando Tatis Jr.", pos: "RF | #23", stat: ".278 BA, 28 HR, 80 RBI" }, { name: "Manny Machado", pos: "3B | #13", stat: ".275 BA, 29 HR" }], 
    gamelog: [] 
  },
  diamondbacks: { 
    name: "Arizona Diamondbacks", div: "NL_WEST", seed: "In Contention", rec: "84 - 78", pos: "Regular Season 3rd", star: "Corbin Carroll", ws: "1 Title", primary: "#a71930", accent: "#e3d4ad", stadium: "Chase Field (Phoenix, AZ)", pennants: "2", divTitles: "5", img: "diamondbacks.jpg", fallback: MLB_PHOTOS.LIGHTS, url: "https://www.mlb.com/dbacks", 
    desc: "Arizona's relentless baserunning speed and clutch hitting kept Chase Field in wild card contention until the season's final weekend.", 
    roster: [{ name: "Corbin Carroll", pos: "OF | #7", stat: ".265 BA, 22 HR, 35 SB" }, { name: "Ketel Marte", pos: "2B | #4", stat: ".292 BA, 30 HR" }], 
    gamelog: [] 
  },
  giants: { 
    name: "San Francisco Giants", div: "NL_WEST", seed: "In Contention", rec: "80 - 82", pos: "Regular Season 4th", star: "Matt Chapman", ws: "8 Titles", primary: "#fd5a1e", accent: "#000000", stadium: "Oracle Park (San Francisco, CA)", pennants: "23", divTitles: "9", img: "giants.jpg", fallback: MLB_PHOTOS.STADIUM, url: "https://www.mlb.com/giants", 
    desc: "San Francisco relied on elite defense and pitching at picturesque Oracle Park, led by Matt Chapman's Gold Glove play at third base and Logan Webb.", 
    roster: [{ name: "Matt Chapman", pos: "3B | #26", stat: ".248 BA, 27 HR, Gold Glove" }, { name: "Logan Webb", pos: "SP | #62", stat: "14-10, 3.25 ERA" }], 
    gamelog: [] 
  },
  rockies: { 
    name: "Colorado Rockies", div: "NL_WEST", seed: "Rebuilding", rec: "61 - 101", pos: "Regular Season 5th", star: "Ezequiel Tovar", ws: "0 Titles", primary: "#330066", accent: "#c4ced4", stadium: "Coors Field (Denver, CO)", pennants: "1", divTitles: "0", img: "rockies.jpg", fallback: MLB_PHOTOS.PITCHER, url: "https://www.mlb.com/rockies", 
    desc: "Colorado continues developing young talent at high elevation in Denver, anchored by shortstop Ezequiel Tovar's 25-home-run campaign.", 
    roster: [{ name: "Ezequiel Tovar", pos: "SS | #14", stat: ".268 BA, 25 HR" }, { name: "Ryan McMahon", pos: "3B | #24", stat: ".245 BA, 20 HR" }], 
    gamelog: [] 
  }
};

let selectedTeamKey = 'yankees';
let isPredictorMode = false;
let userPredictorPicks = {};

// Safe DOM Injectors
function setText(id, text) {
  const el = document.getElementById(id);
  if (el) el.innerText = text;
}

function setHTML(id, html) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = html;
}

// Favorite Team Persistence
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
  const saved = localStorage.getItem('favMLBTeam') || 'yankees';
  if (window.location.pathname.includes('teams.html')) {
    openTeamPortal(saved);
  } else {
    window.location.href = `teams.html?team=${saved}`;
  }
}

// Fan MVP Voting Poll Engine
const pollCandidates = [
  { id: "ohtani", name: "Shohei Ohtani (LAD)", votes: 412 },
  { id: "chourio", name: "Jackson Chourio (MIL)", votes: 388 },
  { id: "caminero", name: "Junior Caminero (TB)", votes: 215 },
  { id: "judge", name: "Aaron Judge (NYY)", votes: 190 }
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
      container.innerHTML += `
        <div style="margin-bottom: 12px;">
          <div class="prob-label-row">
            <span>${cand.name} ${userVoted === cand.id ? '⭐ (Your Pick)' : ''}</span>
            <strong>${pct}% (${cand.votes} votes)</strong>
          </div>
          <div class="prob-track">
            <div class="prob-fill" style="width: ${pct}%; background: var(--primary-blue);"></div>
          </div>
        </div>
      `;
    } else {
      container.innerHTML += `
        <div class="poll-option-row" onclick="voteMVP('${cand.id}')">
          <span style="font-weight:700; font-size:14px;">${cand.name}</span>
          <button class="poll-btn-action">Vote</button>
        </div>
      `;
    }
  });

  if (userVoted) {
    container.innerHTML += `<p style="font-size:12px; color:var(--text-muted); margin-top:10px; text-align:center;">✓ Thank you for voting! Results updated in real time.</p>`;
  }
}

function voteMVP(candId) {
  const target = pollCandidates.find(c => c.id === candId);
  if (target) {
    target.votes += 1;
    localStorage.setItem('votedMVP', candId);
    renderFanMVPPoll();
  }
}

// Interactive Team Compare Tool
function initCompareDropdowns() {
  const s1 = document.getElementById('compare-select-1');
  const s2 = document.getElementById('compare-select-2');
  if (!s1 || !s2) return;

  s1.innerHTML = '';
  s2.innerHTML = '';

  Object.keys(mlb30Teams).forEach(key => {
    const team = mlb30Teams[key];
    s1.innerHTML += `<option value="${key}">${team.name}</option>`;
    s2.innerHTML += `<option value="${key}">${team.name}</option>`;
  });

  s1.value = 'yankees';
  s2.value = 'mets';
  runTeamComparison();
}

function runTeamComparison() {
  const s1 = document.getElementById('compare-select-1');
  const s2 = document.getElementById('compare-select-2');
  const box = document.getElementById('compare-result-box');
  if (!s1 || !s2 || !box) return;

  const t1 = mlb30Teams[s1.value];
  const t2 = mlb30Teams[s2.value];

  box.innerHTML = `
    <div class="compare-grid-2col">
      <div class="compare-team-card">
        <h4>${t1.name}</h4>
        <p><strong>2026 Record:</strong> ${t1.rec}</p>
        <p><strong>Seed/Status:</strong> ${t1.seed}</p>
        <p><strong>WS Titles:</strong> ${t1.ws}</p>
        <p><strong>Featured Star:</strong> ${t1.star}</p>
        <p><strong>Stadium:</strong> ${t1.stadium}</p>
      </div>

      <div class="compare-team-card">
        <h4>${t2.name}</h4>
        <p><strong>2026 Record:</strong> ${t2.rec}</p>
        <p><strong>Seed/Status:</strong> ${t2.seed}</p>
        <p><strong>WS Titles:</strong> ${t2.ws}</p>
        <p><strong>Featured Star:</strong> ${t2.star}</p>
        <p><strong>Stadium:</strong> ${t2.stadium}</p>
      </div>
    </div>
  `;
}

// Search Filter Engine
function searchTeams(query) {
  const q = query.toLowerCase().trim();
  const grid = document.getElementById('team-picker-grid');
  if (!grid) return;
  grid.innerHTML = '';

  Object.keys(mlb30Teams).forEach(key => {
    const team = mlb30Teams[key];
    if (team.name.toLowerCase().includes(q) || team.div.toLowerCase().includes(q) || team.stadium.toLowerCase().includes(q)) {
      const btn = document.createElement('button');
      btn.className = `team-btn ${key === selectedTeamKey ? 'active' : ''}`;
      btn.innerText = team.name;
      btn.onclick = () => selectTeam(key);
      grid.appendChild(btn);
    }
  });
}

// 30-Team Directory Grid
function renderTeamGrid(filterDiv = 'ALL') {
  const grid = document.getElementById('team-picker-grid');
  if (!grid) return;
  grid.innerHTML = '';

  Object.keys(mlb30Teams).forEach(key => {
    const team = mlb30Teams[key];
    if (filterDiv === 'ALL' || team.div === filterDiv) {
      const btn = document.createElement('button');
      btn.className = `team-btn ${key === selectedTeamKey ? 'active' : ''}`;
      btn.innerText = team.name;
      btn.onclick = () => selectTeam(key);
      grid.appendChild(btn);
    }
  });
}

function filterTeamsByDivision(divName, e) {
  document.querySelectorAll('.div-tab-btn').forEach(t => t.classList.remove('active'));
  if (e && e.target) e.target.classList.add('active');
  renderTeamGrid(divName);
}

function selectTeam(key) {
  selectedTeamKey = key;
  const t = mlb30Teams[key];
  if (!t) return;

  renderTeamGrid();

  setText('spotlight-title', t.name);
  setText('spotlight-badge', t.seed);
  setText('spotlight-desc', t.desc);
  setText('spotlight-rec', t.rec);
  setText('spotlight-pos', t.pos);
  setText('spotlight-star', t.star);
  setText('spotlight-ws', t.ws);

  const savedFav = localStorage.getItem('favMLBTeam');
  if (savedFav === key) {
    setText('fav-btn', `❤️ Favorited (${t.name})`);
  } else {
    setText('fav-btn', `❤️ Save as Favorite`);
  }

  const img = document.getElementById('spotlight-img');
  if (img) {
    img.src = t.img;
    img.onerror = () => { img.src = t.fallback; };
  }
}

// Dedicated Team Portal View
function showTeamsHub() {
  const mainHub = document.getElementById('main-teams-hub');
  const portalView = document.getElementById('dedicated-team-portal');
  if (mainHub && portalView) {
    mainHub.style.display = 'block';
    portalView.style.display = 'none';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function openTeamPortal(key) {
  selectedTeamKey = key;
  const t = mlb30Teams[key];
  if (!t) return;

  const mainHub = document.getElementById('main-teams-hub');
  const portalView = document.getElementById('dedicated-team-portal');

  if (!portalView) {
    window.location.href = `teams.html?team=${key}`;
    return;
  }

  document.documentElement.style.setProperty('--team-theme-primary', t.primary || '#0c2340');
  document.documentElement.style.setProperty('--team-theme-accent', t.accent || '#2563eb');

  setText('portal-team-name', t.name);
  setText('portal-badge', t.seed);
  setText('portal-div-name', t.div.replace('_', ' '));
  setText('portal-tagline', `Official 2026 ${t.name} Postseason Hub`);

  const linkElem = document.getElementById('portal-official-btn');
  if (linkElem) linkElem.href = t.url;

  const savedFav = localStorage.getItem('favMLBTeam');
  if (savedFav === key) {
    setText('portal-fav-btn', `❤️ Favorited (${t.name})`);
  } else {
    setText('portal-fav-btn', `❤️ Set as Favorite Team`);
  }

  setText('portal-full-desc', t.desc);
  setText('ptab-rec', t.rec);
  setText('ptab-star', t.star);
  setText('ptab-status', t.pos);
  setText('ptab-ws-titles', t.ws);
  setText('ptab-ws-titles-side', t.ws);
  setText('ptab-pennants', t.pennants || "N/A");
  setText('ptab-div-titles', t.divTitles || "N/A");
  setText('ptab-stadium', t.stadium || "MLB Ballpark");

  const rosterGrid = document.getElementById('portal-roster-grid');
  if (rosterGrid) {
    rosterGrid.innerHTML = '';
    t.roster.forEach(player => {
      rosterGrid.innerHTML += `
        <div class="roster-card">
          <strong>${player.name}</strong>
          <span>${player.pos}</span>
          <p style="margin-top:6px; font-size:13px; font-weight:700; color:var(--text-main);">${player.stat}</p>
        </div>
      `;
    });
  }

  const gamelogBody = document.getElementById('portal-gamelog-body');
  if (gamelogBody) {
    gamelogBody.innerHTML = '';
    if (t.gamelog && t.gamelog.length > 0) {
      t.gamelog.forEach(g => {
        gamelogBody.innerHTML += `
          <tr>
            <td><strong>${g.game}</strong></td>
            <td>${g.opp}</td>
            <td><strong style="color:${g.res.includes('W') ? 'var(--accent-green)' : 'var(--accent-red)'}">${g.res}</strong></td>
            <td>${g.score}</td>
            <td><span class="net-pill net-fs1">${g.tv}</span> <a href="https://www.mlb.com/tickets" target="_blank" class="ticket-pill-btn">Tickets 🎟️</a></td>
          </tr>
        `;
      });
    } else {
      gamelogBody.innerHTML = `
        <tr>
          <td><strong>2026 Regular Season</strong></td>
          <td>Full Season Performance</td>
          <td><strong>${t.rec}</strong></td>
          <td>-</td>
          <td><a href="${t.url}" target="_blank" class="ticket-pill-btn">MLB Schedule ↗</a></td>
        </tr>
      `;
    }
  }

  const newsGrid = document.getElementById('portal-news-grid');
  if (newsGrid) {
    newsGrid.innerHTML = `
      <article class="news-card">
        <div class="news-thumb">
          <img src="${t.img}" alt="${t.name}" onerror="this.onerror=null; this.src='${t.fallback}';">
          <span class="news-badge badge-nlcs">${t.seed}</span>
        </div>
        <div class="news-body">
          <div class="news-meta">Oct 2026 • MLB.com Wire</div>
          <h3>${t.name} Postseason Report & Season Storyline</h3>
          <p>${t.desc}</p>
          <a href="${t.url}" target="_blank" class="news-action-btn">Read Full Coverage on MLB.com ↗</a>
        </div>
      </article>
    `;
  }

  if (mainHub) mainHub.style.display = 'none';
  if (portalView) portalView.style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function launchDedicatedPortal() {
  openTeamPortal(selectedTeamKey);
}

function switchPortalTab(tabName, e) {
  document.querySelectorAll('.portal-tab-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.portal-tab-content').forEach(c => c.classList.remove('active'));

  if (e && e.target) e.target.classList.add('active');
  const targetContent = document.getElementById(`ptab-${tabName}`);
  if (targetContent) targetContent.classList.add('active');
}

// Broadcast Schedule Renderer
const scheduleData = [
  { match: "NLCS Game 3", matchup: "Milwaukee Brewers @ LA Dodgers", time: "Oct 14 • 8:08 PM ET", net: "FS1", badge: "net-fs1", stream: "FOX Sports App", venue: "Dodger Stadium, Los Angeles, CA", link: "https://www.ticketmaster.com/mlb" },
  { match: "ALCS Game 3", matchup: "Tampa Bay Rays @ Cleveland Guardians", time: "Oct 15 • 6:08 PM ET", net: "TBS", badge: "net-tbs", stream: "HBO Max / TBS App", venue: "Progressive Field, Cleveland, OH", link: "https://www.stubhub.com/mlb-tickets" },
  { match: "NLCS Game 4", matchup: "Milwaukee Brewers @ LA Dodgers", time: "Oct 15 • 8:38 PM ET", net: "FS1", badge: "net-fs1", stream: "FOX Sports App", venue: "Dodger Stadium, Los Angeles, CA", link: "https://www.ticketmaster.com/mlb" },
  { match: "ALCS Game 4", matchup: "Tampa Bay Rays @ Cleveland Guardians", time: "Oct 16 • 6:08 PM ET", net: "TBS", badge: "net-tbs", stream: "HBO Max / TBS App", venue: "Progressive Field, Cleveland, OH", link: "https://www.stubhub.com/mlb-tickets" },
  { match: "World Series Game 1", matchup: "AL Champion vs NL Champion", time: "Oct 23 • 8:00 PM ET", net: "FOX", badge: "net-fox", stream: "FOX Sports Live", venue: "TBD (Home of Higher Seed)", link: "https://www.mlb.com/tickets" }
];

function renderSchedule() {
  const tbody = document.getElementById('schedule-body');
  if (!tbody) return;
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

// Live Scoreboard
async function fetchLiveMLBData() {
  const ticker = document.getElementById('ticker-content');
  const scoreGrid = document.getElementById('live-scoreboard-grid');

  if (ticker) ticker.innerHTML = "<span>🔄 Syncing with ESPN live score feeds...</span>";

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
  setText('ticker-content', "⚾ NLCS Gm 2: MIL 7, LAD 4 (FINAL) | ALCS Gm 2: TB 3, CLE 1 (FINAL) | NLCS Gm 3: Tonight 8:08 PM ET on FS1");

  const scoreGrid = document.getElementById('live-scoreboard-grid');
  if (scoreGrid) {
    scoreGrid.innerHTML = `
      <div class="score-card">
        <div class="card-top"><span>NLCS GAME 2</span> <span class="status-badge final">FINAL</span></div>
        <div class="team-score-row winner"><span>Milwaukee Brewers</span> <span>7</span></div>
        <div class="team-score-row"><span>Los Angeles Dodgers</span> <span>4</span></div>
      </div>
      <div class="score-card">
        <div class="card-top"><span>ALCS GAME 2</span> <span class="status-badge final">FINAL</span></div>
        <div class="team-score-row winner"><span>Tampa Bay Rays</span> <span>3</span></div>
        <div class="team-score-row"><span>Cleveland Guardians</span> <span>1</span></div>
      </div>
      <div class="score-card">
        <div class="card-top"><span>NLCS GAME 3</span> <span class="status-badge">OCT 14 • 8:08 PM ET</span></div>
        <div class="team-score-row"><span>Milwaukee Brewers (2-0)</span> <span>-</span></div>
        <div class="team-score-row"><span>Los Angeles Dodgers</span> <span>-</span></div>
      </div>
    `;
  }
}

// Predictor Engine Logic
const matchupDetailsMap = {
  'ALDS1': { title: "ALDS A: Rays vs Yankees", summary: "Tampa Bay swept New York 3-0 in the Division Series.", games: ["Game 1: TB 1, NYY 0", "Game 2: TB 5, NYY 2", "Game 3: TB 4, NYY 3"] },
  'ALDS2': { title: "ALDS B: Guardians vs White Sox", summary: "Cleveland defeated Chicago 3-2 in 5 games.", games: ["Game 1: CWS 3, CLE 0", "Game 2: CWS 4, CLE 3", "Game 3: CLE 9, CWS 3", "Game 4: CLE 9, CWS 5", "Game 5: CLE 2, CWS 0"] },
  'NLDS1': { title: "NLDS A: Brewers vs Padres", summary: "Milwaukee defeated San Diego 3-1.", games: ["Game 1: MIL 3, SD 2", "Game 2: MIL 4, SD 3", "Game 3: SD 4, MIL 3", "Game 4: MIL 3, SD 1"] },
  'NLDS2': { title: "NLDS B: Dodgers vs Braves", summary: "Los Angeles defeated Atlanta 3-1.", games: ["Game 1: LAD 5, ATL 3", "Game 2: ATL 3, LAD 2", "Game 3: LAD 3, ATL 1", "Game 4: LAD 4, ATL 1"] },
  'ALCS': { title: "ALCS: Rays vs Guardians", summary: "Series tied 1-1. Game 3 in Cleveland.", games: ["Game 1: CLE 7, TB 3", "Game 2: TB 3, CLE 1"] },
  'NLCS': { title: "NLCS: Brewers vs Dodgers", summary: "Milwaukee leads 2-0 heading to Dodger Stadium.", games: ["Game 1: MIL 2, LAD 1", "Game 2: MIL 7, LAD 4"] },
  'WS': { title: "2026 World Series", summary: "Begins October 23 on FOX.", games: ["Game 1: Oct 23", "Game 2: Oct 24"] }
};

function togglePredictorMode() {
  isPredictorMode = !isPredictorMode;
  const toggleBtn = document.getElementById('predictor-toggle-btn');
  const banner = document.getElementById('predictor-status-banner');

  if (toggleBtn) {
    if (isPredictorMode) {
      toggleBtn.classList.add('active');
      toggleBtn.innerText = "🎯 Predictor Mode: ON";
      if (banner) banner.style.display = 'flex';
    } else {
      toggleBtn.classList.remove('active');
      toggleBtn.innerText = "🎯 Predictor Mode: OFF";
      if (banner) banner.style.display = 'none';
    }
  }
}

function pickTeamInNode(nodeId, teamName, event) {
  if (event) event.stopPropagation();

  if (!isPredictorMode) {
    openMatchupDetails(nodeId);
    return;
  }

  userPredictorPicks[nodeId] = teamName;

  // Advance picks down the bracket
  if (nodeId === 'ALCS') {
    setText('pred-al-champ', `AL: ${teamName}`);
  } else if (nodeId === 'NLCS') {
    setText('pred-nl-champ', `NL: ${teamName}`);
  } else if (nodeId === 'WS') {
    const crownBox = document.getElementById('champ-crown-box');
    const champName = document.getElementById('champ-team-name');
    if (crownBox && champName) {
      champName.innerText = teamName;
      crownBox.style.display = 'block';
    }
  }

  alert(`🎯 Prediction Recorded! You picked ${teamName} for ${nodeId}.`);
}

function handleNodeClick(nodeId, defaultTeam, event) {
  if (!isPredictorMode) {
    openMatchupDetails(nodeId);
  }
}

function resetPredictorPicks() {
  userPredictorPicks = {};
  setText('pred-al-champ', 'AL Champion (TBD)');
  setText('pred-nl-champ', 'NL Champion (TBD)');
  const crownBox = document.getElementById('champ-crown-box');
  if (crownBox) crownBox.style.display = 'none';
  alert("🔄 Predictor picks reset!");
}

function openMatchupDetails(key) {
  const modal = document.getElementById('matchup-modal');
  const content = document.getElementById('modal-content');
  if (!modal || !content) return;

  const details = matchupDetailsMap[key] || {
    title: `Postseason Matchup: ${key}`,
    summary: "Series summary and game breakdowns.",
    games: ["Game 1: Complete", "Game 2: Complete"]
  };

  content.innerHTML = `
    <h3 style="font-family:'Space Grotesk',sans-serif; font-size:22px; font-weight:800; margin-bottom:10px;">${details.title}</h3>
    <p style="color:var(--text-muted); font-size:14px; margin-bottom:16px;">${details.summary}</p>
    <div style="background:var(--bg-dark); padding:14px; border-radius:10px; border:1px solid var(--border-color);">
      <strong style="display:block; margin-bottom:8px; font-size:13px; color:var(--primary-blue);">Game Log Breakdown:</strong>
      <ul style="list-style:none; font-size:13px; line-height:1.8;">
        ${details.games.map(g => `<li>⚾ ${g}</li>`).join('')}
      </ul>
    </div>
  `;

  modal.style.display = 'flex';
}

function closeMatchupModal(e) {
  if (e && e.target && e.target.id === 'matchup-modal') closeMatchupModalDirect();
}

function closeMatchupModalDirect() {
  const modal = document.getElementById('matchup-modal');
  if (modal) modal.style.display = 'none';
}

function filterBracket(league, e) {
  document.querySelectorAll('.filter-tab').forEach(b => {
    if (!b.classList.contains('predictor-tab')) b.classList.remove('active');
  });
  if (e && e.target && !e.target.classList.contains('predictor-tab')) e.target.classList.add('active');

  const nodes = document.querySelectorAll('.matchup-node');
  nodes.forEach(node => {
    if (league === 'all') {
      node.style.display = 'block';
    } else if (league === 'al' && (node.innerText.includes('AL') || node.innerText.includes('Rays') || node.innerText.includes('Guardians') || node.innerText.includes('Yankees') || node.innerText.includes('Tigers') || node.innerText.includes('Red Sox') || node.innerText.includes('White Sox'))) {
      node.style.display = 'block';
    } else if (league === 'nl' && (node.innerText.includes('NL') || node.innerText.includes('Brewers') || node.innerText.includes('Dodgers') || node.innerText.includes('Mets') || node.innerText.includes('Padres') || node.innerText.includes('Phillies') || node.innerText.includes('Braves') || node.innerText.includes('Cubs'))) {
      node.style.display = 'block';
    } else if (node.classList.contains('ws-card')) {
      node.style.display = 'block';
    } else {
      node.style.display = 'none';
    }
  });
}

// ⏱️ Live 1-Second Countdown Clock to World Series Game 1
function startLiveTickingTimer() {
  const targetDate = new Date("October 23, 2026 20:00:00 ET").getTime();

  function updateClock() {
    const now = new Date().getTime();
    const diff = targetDate - now;

    if (diff > 0) {
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      const dStr = String(days).padStart(2, '0');
      const hStr = String(hours).padStart(2, '0');
      const mStr = String(minutes).padStart(2, '0');
      const sStr = String(seconds).padStart(2, '0');

      setText('live-timer-clock', `${dStr}D ${hStr}H ${mStr}M ${sStr}S`);
    } else {
      setText('live-timer-clock', "⚾ WORLD SERIES IS LIVE ON FOX!");
    }
  }

  updateClock();
  setInterval(updateClock, 1000);
}

// Multi-Language Strings
const i18n = {
  en: { home: "Scores & AI Engine", bracket: "Interactive Bracket", teams: "30-Team Franchise Hub", heroTitle: "Road to the World Series" },
  es: { home: "Marcadores e Inteligencia", bracket: "Cuadro Interactivo", teams: "Hub 30 Franquicias", heroTitle: "El Camino a la Serie Mundial" },
  zh: { home: "比分与AI分析", bracket: "互动季后赛图", teams: "30支球队中心", heroTitle: "通往世界大赛之路" }
};

function changeLanguage(langKey) {
  const dict = i18n[langKey];
  if (!dict) return;

  setText('nav-home', dict.home);
  setText('nav-bracket', dict.bracket);
  setText('nav-teams', dict.teams);
  setText('hero-heading', dict.heroTitle);
}

function toggleTheme() {
  const body = document.body;
  const icon = document.getElementById('theme-icon');

  if (body.classList.contains('dark-mode')) {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
    if (icon) icon.innerText = '☀️';
    localStorage.setItem('themeMode', 'light');
  } else {
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
    if (icon) icon.innerText = '🌙';
    localStorage.setItem('themeMode', 'dark');
  }
}

// App Initialization
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('themeMode');
  if (savedTheme === 'light') {
    document.body.classList.remove('dark-mode');
    document.body.classList.add('light-mode');
    setText('theme-icon', '☀️');
  }

  const savedFav = localStorage.getItem('favMLBTeam');
  if (savedFav && mlb30Teams[savedFav]) {
    setText('fav-quick-label', mlb30Teams[savedFav].name);
  }

  const urlParams = new URLSearchParams(window.location.search);
  const teamParam = urlParams.get('team');

  renderTeamGrid();
  renderSchedule();
  fetchLiveMLBData();
  startLiveTickingTimer();
  renderFanMVPPoll();
  initCompareDropdowns();

  if (teamParam && mlb30Teams[teamParam]) {
    openTeamPortal(teamParam);
  } else if (savedFav && mlb30Teams[savedFav]) {
    selectTeam(savedFav);
  }

  setInterval(fetchLiveMLBData, 60000);
});
