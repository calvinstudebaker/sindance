const filmsByYear = {};

filmsByYear[2025] = [
    {
        title: "Beans",
        author: "Caroline and Justin Desrosiers",
        url: "https://www.youtube.com/embed/Kl0cREOx7bg?si=wqCaKwGm7q86huG8",
        award: "Best Film"
    },
    {
        title: "Bad Will Hunting",
        author: "Dahkota Brown",
        url: "https://sindance-public.s3.us-west-1.amazonaws.com/films-2025/Bad+Will+Hunting.mp4",
        award: "Worst Film"
    },
    {
        title: "The Real Houseplants of Tahoe",
        author: "Annee Garton",
        url: "https://www.youtube.com/embed/bRi-DiOI-GA?si=ImWC8hDfqEXFyiwb",
        award: "Most Average Film"
    },
    {
        title: "23 and Pee",
        author: "Calvin Studebaker and Christine Chung",
        url: "https://sindance-public.s3.us-west-1.amazonaws.com/films-2025/23+and+Pee.mp4",
        award: "Most Irreverent"
    },
    {
        title: "30 for 30: Anaheim",
        author: "Grace Geller",
        url: "https://sindance-public.s3.us-west-1.amazonaws.com/films-2025/30+for+30_Anaheim.mp4",
        award: "Jimmy V ESPY Award for Perseverance"
    },
    {
        title: "A Doug Named Dog",
        author: "Leanna Castro, Pete Ross, Ari Sigal, Conner Nannini",
        url: "https://sindance-public.s3.us-west-1.amazonaws.com/films-2025/a+doug+named+dog.m4v",
        award: "Lowest Budget"
    },
    {
        title: "A Good Catch Up Between Friends",
        author: "Wyatt Bunce and Thomas Reidy",
        url: "https://sindance-public.s3.us-west-1.amazonaws.com/films-2025/A+Good+Catch+Up+Between+Friends.mov",
        award: "Best Acting"
    },
    {
        title: "about ewe",
        author: "Max Kohrman",
        url: "https://sindance-public.s3.us-west-1.amazonaws.com/films-2025/Thinking+about+ewe.mp4",
        award: "Best Crying Moment"
    },
    {
        title: "America in The Hole",
        author: "Matt Simon",
        url: "https://sindance-public.s3.us-west-1.amazonaws.com/films-2025/AmericaInTheHole.mp4",
        award: "Best Original Soundtrack"
    },
    {
        title: "Americans in The Netherlands",
        author: "Marley Studebaker and Sean Hammond",
        url: "https://sindance-public.s3.us-west-1.amazonaws.com/films-2025/Americans+in+The+Netherlands.mov",
        award: "Best Foreign Film"
    },
    {
        title: "Calvin Mullet Tree: The Sequel",
        author: "Matitti",
        url: "https://sindance-public.s3.us-west-1.amazonaws.com/films-2025/Calvin+Mullet+Tree+2+The+Sequel.mov",
        award: "Most Medium Film"
    },
    {
        title: "Canine first ascent",
        author: "Rosabella",
        url: "https://www.youtube.com/embed/_snWqdsNMYU?si=eMxO40FHqF0MAiYo",
        award: "Best Stunts"
    },
    {
        title: "Canon Infinito",
        author: "Raymond Kennedy, Sean McIntyre",
        url: "https://player.vimeo.com/video/1070517539?h=f45d6d5206&color=66cfcc",
        award: "Highest Budget"
    },
    {
        title: "COVID Files",
        author: "Lukas Raynaud",
        url: "https://drive.google.com/file/d/1ukSWLJb7vnAt1XlfKbwyQNazN9U5B0ii/preview",
        award: "Rookie of the Year"
    },
    {
        title: "Crotch Watcher's Day Off",
        author: "Josie Francis & Nicole Agner",
        url: "https://sindance-public.s3.us-west-1.amazonaws.com/films-2025/crotch+watchers_day+off.mov",
        award: "Best Sequel"
    },
    {
        title: "Deal or No Deal",
        author: "Mackenzie Crist, Peter Killory, Kevin Crain, Emily Kohrman, Max Korhman, Maddie Bachelder, Brooke Hanson, and Miles DeLong",
        url: "https://drive.google.com/file/d/1mPmS-9cXmXgD5nWIfZ7GUpQlQ2dLshJJ/preview",
        award: "Best Costume Design"
    },
    {
        title: "Disco Delusion",
        author: "Gaby DiChiro, Brett Bacharach & Mick Kassis",
        url: "https://drive.google.com/file/d/1O_9h4DU0nFvSYds24YCJay7z-FYzIopk/preview",
        award: "Best Product Placement"
    },
    {
        title: "dopaminemaxxing",
        author: "Jordan Zietz",
        url: "https://sindance-public.s3.us-west-1.amazonaws.com/films-2025/dopaminemaxxing.mp4",
        award: "Teen Choice Award"
    },
    {
        title: "No Matter What You Do, Do Not Play Fireflies",
        author: "Nick Azpiroz, Aileen Lerch, Malaika Murphy-Sierra",
        url: "https://sindance-public.s3.us-west-1.amazonaws.com/films-2025/No+Matter+What+You+Do%2C+Do+Not+Play+Fireflies.mp4",
        award: "Best Prequel"
    },
    {
        title: "Foot Stuff",
        author: "Delaney Hertlein and Carrington Taylor",
        url: "https://www.youtube.com/embed/UU6cg77FF-Q?si=fGf3ul1rMBS65fAY",
        award: "Best Adult Film"
    },
    {
        title: "Friends Hut",
        author: "Kevin Crain",
        url: "https://sindance-public.s3.us-west-1.amazonaws.com/films-2025/FriendsHut.mp4",
        award: "Most Straightforward, Regular Old Film"
    },
    {
        title: "From Below",
        author: "Jill Sanford",
        url: "https://sindance-public.s3.us-west-1.amazonaws.com/films-2025/From+Below.mp4",
        award: "Best Animated Film"
    },
    {
        title: "Fireflies Part 2: Owl City Comeback",
        author: "Malaika, Nick Azpiroz, Alec (Intimacy Coordinator)",
        url: "https://sindance-public.s3.us-west-1.amazonaws.com/films-2025/Fireflies+Part+2.mp4",
        award: "Best Quel"
    },
    {
        title: "Goatlamb's Big Night",
        author: "Adam Maggio, Andrew Baldwin, Nick, and Luke Hamilton",
        url: "https://drive.google.com/file/d/1BMDVkGTZ3x9oMsiUx5ye_gFyc9ILnOQ_/preview",
        award: "Best Regular Effects"
    },
    {
        title: "Here, Watch This",
        author: "Jeff Young, Rachel Rhodes, Elise Hsu",
        url: "https://www.youtube.com/embed/y190aGUwXpc?si=gan5X2yeiQSjRdi9",
        award: "Best Editing"
    },
    {
        title: "Hey Frank (pw: Frank)",
        author: "Claire & Ian",
        url: "https://player.vimeo.com/video/1070552677?h=f45d6d5206&color=66cfcc",
        award: "Best On Screen Chemistry"
    },
    {
        title: "How To Scan A Polyclam",
        author: "Wyatt Roy, Julia Mattis",
        url: "https://sindance-public.s3.us-west-1.amazonaws.com/films-2025/How+To+Scan+A+Polyclam.mp4",
        award: "Best Performance in the DVD Bonus Features"
    },
    {
        title: "ideas girl",
        author: "erika francks",
        url: "https://sindance-public.s3.us-west-1.amazonaws.com/films-2025/Ideas+girl.mp4",
        award: "Biggest Procrastination Payoff"
    },
    {
        title: "Kevin Nation Army",
        author: "Michael Stern, Kevin Crain, Malaika Murphy-Sierra, Alec Paget",
        url: "https://sindance-public.s3.us-west-1.amazonaws.com/films-2025/Kevin+Nation+Army.mp4",
        award: "Critics Quarterly Award for Most Creatively Bankrupt Film"
    },
    {
        title: "Let's Get Batarded",
        author: "Molly Marshall, Aidan Anderson",
        url: "https://sindance-public.s3.us-west-1.amazonaws.com/films-2025/Let_s+Get+Batarded.mp4",
        award: "Best Sound Design"
    },
    {
        title: "Long Shot",
        author: "JB, Alex, Rebs",
        url: "https://sindance-public.s3.us-west-1.amazonaws.com/films-2025/sofi+tukker.mov",
        award: "Longest Short Film"
    },
    {
        title: "Mishaps In The Mountains",
        author: "Dom Francks",
        url: "https://sindance-public.s3.us-west-1.amazonaws.com/films-2025/Mishaps+in+the+Mountains.mov",
        award: "Best Location Scouting"
    },
    {
        title: "LOONACY",
        author: "Jeff, JoJo, & Mika Studebaker",
        url: "https://sindance-public.s3.us-west-1.amazonaws.com/films-2025/Loonacy+Final.mov",
        award: "Best Bloopers"
    },
    {
        title: "MICROS",
        author: "Paul Martinez",
        url: "https://www.youtube.com/embed/n1DCmMF8ElM?si=h7dSfx1DYHRrg56n",
        award: "Best Twist Ending"
    },
    {
        title: "Mountains of Memory",
        author: "Hunter Dudley, Grace Johnson",
        url: "https://sindance-public.s3.us-west-1.amazonaws.com/films-2025/Mountains+of+Memory.mp4",
        award: "Best Documentary"
    },
    {
        title: "movement: a sindance palate cleanser",
        author: "Lea Eaton, Elliott Spelman",
        url: "https://sindance-public.s3.us-west-1.amazonaws.com/films-2025/movement+-+a+sindance+palate+cleanser.mp4",
        award: "Best Cinematography"
    },
    {
        title: "One Last Breath",
        author: "Megan Mondt, Gaby DiChrio, Daniel DiChiro",
        url: "https://sindance-public.s3.us-west-1.amazonaws.com/films-2025/One+Last+Breath.mp4",
        award: "Best Family Film"
    },
    {
        title: "PLASMR",
        author: "Kate & Pal",
        url: "https://sindance-public.s3.us-west-1.amazonaws.com/films-2025/PLASMR.mp4",
        award: "Best Casting"
    },
    {
        title: "Reflections",
        author: "Nisha Burton, Gigi Falk",
        url: "https://sindance-public.s3.us-west-1.amazonaws.com/films-2025/Reflections.m4v",
        award: "Boldest Artistic Leap"
    },
    {
        title: "self-conscious soup",
        author: "jamie, hirsh, annee, christine, jessica, neil, simone, scotty",
        url: "https://drive.google.com/file/d/1PHqRy6DegiTbvCZeLvD36TV1eNw1cub7/preview",
    },
    {
        title: "Strategy King: A Sindance Blokbuster",
        author: "Cougar & Aaron",
        url: "https://www.youtube.com/embed/TVlWxUwjqmU?si=lA6dLvzAp0I86yQ8",
        award: "Best Special Effects"
    },
    {
        title: "The Best Day of My Life",
        author: "Peter Doyle",
        url: "https://www.youtube.com/embed/HV8hKJviSco?si=Sp9IN735fkItM3gj",
        award: "Cult Classic"
    },
    {
        title: "The Cellar",
        author: "Samantha Bauer; Alex Cheney",
        url: "https://sindance-public.s3.us-west-1.amazonaws.com/films-2025/The+Cellar.mp4",
        award: "Smoking Loon Award for Integrity in Film"
    },
    {
        title: "The Home Office",
        author: "Deirdre, Sam, Thomas, Hannah, Erika, Tyler, Matty, Ben, Blaire",
        url: "https://sindance-public.s3.us-west-1.amazonaws.com/films-2025/The+Home+Office.mp4",
        award: "The Calvin Studebaker Lifetime Achievement Award for Excellence in Television"
    },
    {
        title: "The Making of THE PRIZE",
        author: "Sidney Durant, Becca Scott, Bronwyn Huddleson",
        url: "https://sindance-public.s3.us-west-1.amazonaws.com/films-2025/the-making-of-the-prize.mp4",
        award: 'Best "Design Thinking"'
    },
    {
        title: "The Roast",
        author: "Aidan Cullen & Evan DiMarco",
        url: "https://sindance-public.s3.us-west-1.amazonaws.com/films-2025/The+Roast.mp4",
        award: "Best Villian"
    },
    {
        title: "Toy Story II Most Wanted",
        author: "Rodney & Darien",
        url: "https://sindance-public.s3.us-west-1.amazonaws.com/films-2025/Toy+Story+II.MOV",
        award: "Best One-Shot Film"
    },
    {
        title: "Tube Man",
        author: "Cole Hatton",
        url: "https://www.youtube.com/embed/pLZqgMMIFlg?si=dUGBD72CD78hnR5N",
        award: "Best Horror Film"
    },
    {
        title: "Uncomfortable Shoes",
        author: "Matty",
        url: "https://sindance-public.s3.us-west-1.amazonaws.com/films-2025/Uncomfortable+Shoes.mov",
        award: "Best Set Design"
    },
    {
        title: "We're so fucking haunted",
        author: "Caroline McArthur",
        url: "https://sindance-public.s3.us-west-1.amazonaws.com/films-2025/We_re+so+fucking+haunted.mp4",
        award: "Shortest Long Film"
    },
    {
        title: "Moment of Zen",
        author: "Dan, Yeji, and Liam",
        url: "https://sindance-public.s3.us-west-1.amazonaws.com/films-2025/Moment+of+Zen.mov",
        award: "Best Blocking"
    },
    {
        title: "Sneak Peak - Severance Season 3",
        author: "Davis Johnson",
        url: "https://sindance-public.s3.us-west-1.amazonaws.com/films-2025/Severance+3.mp4",
        award: "Mattflix Award for Best Pirated Film"
    }
];

filmsByYear[2026] = [
    {
        title: "Werthering Heights",
        author: "Caroline and Justin Desrosiers",
        url: "https://sindance-public.s3.us-west-1.amazonaws.com/films-2026/Werthering+Heights.mov",
        award: "Best Film"
    },
    {
        title: "Crying: The Movie: The Making of an Emotional Scene: The Scene",
        author: "Zach Morrisey, Charlie Zamanian, Greg Lund, Alaina Senear",
        url: "https://sindance-public.s3.us-west-1.amazonaws.com/films-2026/crying.mp4",
        award: "Worst Film"
    },
    {
        title: "oops ded",
        author: "Ramzi, Lindsay, Chery, Jason, Casey, Ben, Noops, Charlie",
        url: "https://sindance-public.s3.us-west-1.amazonaws.com/films-2026/oops+ded.mp4",
        award: "Most Average Film"
    },
    {
        title: "67N8",
        author: "Nate Lohn",
        url: "https://sindance-public.s3.us-west-1.amazonaws.com/films-2026/67N8.mp4",
        award: "Most Upsetting Camera Angle"
    },
    {
        title: "Are They Real? Or Are They Fake?",
        author: "Aidan Cullen & Evan DiMarco",
        url: "https://sindance-public.s3.us-west-1.amazonaws.com/films-2026/Are+They+Real.mov",
        award: "Best One-Shot Film"
    },
    {
        title: "AUDIO TEST REMASTERED",
        author: "Cole Hatton",
        url: "https://sindance-public.s3.us-west-1.amazonaws.com/films-2026/AUDIO+TEST+REMASTERED.mov",
        award: "Best Sound Design"
    },
    {
        title: "Baby Brezza",
        author: "Annee Garton",
        url: "https://sindance-public.s3.us-west-1.amazonaws.com/films-2026/Baby+Brezza.mp4",
        award: "Best Product Placement"
    },
    {
        title: "Barrel Quest",
        author: "Marwan, Hugo, Nahla",
        url: "https://sindance-public.s3.us-west-1.amazonaws.com/films-2026/Barrel+Quest.mp4",
        award: "Most Medium Film"
    },
    {
        title: "Big Tech",
        author: "Matty",
        url: "https://sindance-public.s3.us-west-1.amazonaws.com/films-2026/Big+Tech.mov",
        award: 'Best "Design Thinking"'
    },
    {
        title: "Biscuit Base",
        author: "Caroline Marks",
        url: "https://player.vimeo.com/video/1179970520?h=abfc6915d8",
        award: "Disqualified Award for AI Sloppiness"
    },
    {
        title: "Burners, man",
        author: "Erika Noble & Tyler Conklin",
        url: "https://sindance-public.s3.us-west-1.amazonaws.com/films-2026/Burners%2C+man.mov",
        award: "Smoking Loon Award for Integrity in Film"
    },
    {
        title: "Chomper",
        author: "Dice & Quiqueg",
        url: "https://sindance-public.s3.us-west-1.amazonaws.com/films-2026/Chomper.mp4",
        award: "Best Nature Documentary"
    },
    {
        title: "Choose Your POO",
        author: "Linnea & Leanna",
        url: "https://sindance-public.s3.us-west-1.amazonaws.com/films-2026/Choose+Your+POO.mp4",
        award: "Teen Choice Award"
    },
    {
        title: "DistanceHeartGrow",
        author: "Jeffrey Propp and Dani Lyle",
        url: "https://sindance-public.s3.us-west-1.amazonaws.com/films-2026/DistanceHeartGrow.mp4",
        award: "Best Screenplay"
    },
    {
        title: "Forever Young",
        author: "Aileen Lerch, Alex Walker, James Price, Nicoletta Heidegger, Will St Amant",
        url: "https://sindance-public.s3.us-west-1.amazonaws.com/films-2026/Forever+Young.mp4",
        award: "Boldest Artistic Leap"
    },
    {
        title: "In Memoriam",
        author: "Marley Studebaker, Joanne Studebaker, and Jeff Studebaker",
        url: "https://sindance-public.s3.us-west-1.amazonaws.com/films-2026/In+Memoriam.mov",
        award: "Best Crying Moment"
    },
    {
        title: "Jonny's Secret: A Pepperoni Prophecy",
        author: "Cougar, Aaron & Jonny",
        url: "https://www.youtube.com/embed/Qf3F_QsLdPQ?si=2W85XcxIhCixr4R3",
        award: "Best Editing"
    },
    {
        title: "kneewheeling",
        author: "Brian Broom-Peltz, Liz Neudeck, Sidney Durant, Grace Coady, Brody Kellish",
        url: "https://sindance-public.s3.us-west-1.amazonaws.com/films-2026/kneewheeling.mov",
        award: "Best All Female Reboot, Best Stunts"
    },
    
    {
        title: "Lunch Meat",
        author: "Clay Davis and Tim Daly",
        url: "https://sindance-public.s3.us-west-1.amazonaws.com/films-2026/LunchMeatFinalFinal.mp4",
        award: "Pulitzer Prize for Investigative Reporting"
    },
    {
        title: "OpenClaws",
        author: "Marwan, Nahla",
        url: "https://sindance-public.s3.us-west-1.amazonaws.com/films-2026/OpenClaws.mp4",
        award: "Best Costume Design"
    },
    {
        title: "Peace and Quiet",
        author: "Patrick Yun and Megatron",
        url: "https://sindance-public.s3.us-west-1.amazonaws.com/films-2026/Peace+and+Quiet.mp4",
        award: "Best Horror Film"
    },
    {
        title: "69th Annual Peanut Butter Mile World Championship",
        author: "Brooke Hess",
        url: "https://sindance-public.s3.us-west-1.amazonaws.com/films-2026/Peanut+Butter+Mile.mp4",
        award: "Best Sports Documentary"
    },
    {
        title: "SHITTY NEWS - Poopy Pawblem",
        author: "Holly Schwarz, Daisy, Cori, dsnack",
        url: "https://sindance-public.s3.us-west-1.amazonaws.com/films-2026/poopy+pawblem.mp4",
        award: "The Calvin Studebaker Lifetime Achievement Award for Excellence in Television"
    },
    {
        title: "raconte moi un voyage",
        author: "Fred and Delaney Hertlein",
        url: "https://sindance-public.s3.us-west-1.amazonaws.com/films-2026/raconte+moi+un+voyage.mov",
        award: "Best Family Film"
    },
    {
        title: "rcp 85-delusions of a dying season",
        author: "Jet Tan, Connor Bennet ",
        url: "https://sindance-public.s3.us-west-1.amazonaws.com/films-2026/rcp+85-delusions+of+a+dying+season.mp4",
        award: "JD Power and Associates Award for Most Dependable Midsize Crossover SUV"
    },
    {
        title: "RIP Granny",
        author: "Thomas Churchill & Hannah Young",
        url: "https://sindance-public.s3.us-west-1.amazonaws.com/films-2026/RIP+Granny.mov",
        award: "Best Regular Effects"
    },
    {
        title: "Running Up that Hill",
        author: "Michelle Ferris, Kevin Crain",
        url: "https://sindance-public.s3.us-west-1.amazonaws.com/films-2026/Running+Up+that+Hill.mp4",
        award: "Isadora Duncan Award for Excellence in Choreography"
    },
    {
        title: "Self-Conscious",
        author: "Paul Martinez",
        url: "https://sindance-public.s3.us-west-1.amazonaws.com/films-2026/Self-Conscious.mov",
        award: "Best Animated Film"
    },
    {
        title: "Siri NO",
        author: "Daisy - Osha",
        url: "https://sindance-public.s3.us-west-1.amazonaws.com/films-2026/Siri+NO.mp4",
        award: "Most Irreverent"
    },
    {
        title: "slices - a sindance palate cleanser",
        author: "Lea Eaton, Elliott Spelman",
        url: "https://sindance-public.s3.us-west-1.amazonaws.com/films-2026/Slices.mp4",
        award: "Best Cinematography, Best Prequel"
    },
    {
        title: "STFU: Sindance Filmmakers and Technicians Union: An Origin Story",
        author: "Matt Simon",
        url: "https://sindance-public.s3.us-west-1.amazonaws.com/films-2026/STFU_Sindance_Technicians_and_+Filmmakers_Union.mp4",
        award: "Best Villain"
    },
    {
        title: "Tantalus",
        author: "Jason Toups and Danny Roza",
        url: "https://sindance-public.s3.us-west-1.amazonaws.com/films-2026/Tantalus.mov",
        award: "Best Quel"
    },
    {
        title: "télétravail",
        author: "Tony Dykstra, Kyle Fopma",
        url: "https://www.youtube.com/embed/k8cAA-unfkE?si=mHElQw15IgRd1MGj",
        award: "Rookie of the Year"
    },
    {
        title: "The Life and Times of Fingerlina 2",
        author: "Ehrland Hollingsworth & Drew Barclay",
        url: "https://sindance-public.s3.us-west-1.amazonaws.com/films-2026/The+Life+and+Times+of+Fingerlina.mov",
        award: "Best Sequel"
    },
    {
        title: "Three People in A Hot Tub: A Snuff Film",
        author: "Lauren Barnes, Grace Kerfoot, Taylor Pecsok, Lea Bartlett, Tim Varner",
        url: "https://sindance-public.s3.us-west-1.amazonaws.com/films-2026/Three+People+in+a+Hot+Tub.mov",
        award: "Most Likely to Become a Cult Classic"
    },
    {
        title: "ThrowingAFit",
        author: "Quaid Garton",
        url: "https://sindance-public.s3.us-west-1.amazonaws.com/films-2026/ThrowingAFit.mov",
        award: "Biggest Procrastination Payoff"
    },
    {
        title: "Tight, Like these Jeanz",
        author: "Banana Dailey",
        url: "https://sindance-public.s3.us-west-1.amazonaws.com/films-2026/Tight%2C+Like+these+Jeanz.mov",
        award: "Most Straightforward, Regular Old Film"
    },
    {
        title: "TOAST",
        author: "Jimmy Guido, Charlotte Martin",
        url: "https://sindance-public.s3.us-west-1.amazonaws.com/films-2026/TOAST.mov",
        award: "Best Musical"
    },
    {
        title: "The Search For Lake Louise",
        author: "Deirdre, Sam & Thomas",
        url: "https://sindance-public.s3.us-west-1.amazonaws.com/films-2026/Lake+Louise.mp4",
        award: "Highest Budget"
    },
];

const yearMatch = window.location.pathname.match(/films(\d{4})/);
const currentYear = yearMatch ? parseInt(yearMatch[1]) : 2025;
const films = filmsByYear[currentYear] || [];

let currentFilmIndex = 0;

function addFilmRow() {
    const filmRow = document.createElement('div');
    filmRow.className = 'film-row';

    for (let i = 0; i < 2; i++) {
        if (currentFilmIndex + i < films.length) {
            const film = films[currentFilmIndex + i];
            const filmTile = document.createElement('div');
            filmTile.className = 'film-tile';

            filmTile.innerHTML = film.award ? `
                <div class="film-info">
                    <span class="film-title">${film.title}</span>
                    <br />
                    <span class="film-author">a film by ${film.author}</span>
                    <br />
                    <span class="film-award">Winner: ${film.award}</span>
                </div>
            ` : `
                <div class="film-info">
                    <span class="film-title">${film.title}</span>
                    <br />
                    <span class="film-author">a film by ${film.author}</span>
                </div>
            `;
            let videoHTML = `<iframe src="${film.url}" allow="autoplay"></iframe>`;
            if (film.url.includes('sindance-public.s3.us-west-1.amazonaws.com')) {
                videoHTML = `<video src="${film.url}" controls></video>`;
            }
            else if (film.url.includes("youtube")) {
                videoHTML = `<iframe width="560" height="315" src="${film.url}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
            }
            else if (film.url.includes("vimeo")) {
                videoHTML = `<iframe src="${film.url}" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`;
            }
            filmTile.innerHTML += videoHTML;
            filmRow.appendChild(filmTile);
        }
    }

    document.querySelector('.center').appendChild(filmRow);
    currentFilmIndex += 2;
}



document.addEventListener('DOMContentLoaded', function() {
    // Add first 3 rows (6 films)
    for (let row = 0; row < 3; row++) {
        addFilmRow();
    }
});


window.onscroll = function() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
        if (currentFilmIndex < films.length) {
            addFilmRow();
        }
    }
};

