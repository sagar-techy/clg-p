const collegesData = [
  {
    id: "001",
    name: "Corporate Group of Institutions",
    location: "Bhopal, India",
    code: "C-502",
    photo:
      "https://tse1.mm.bing.net/th/id/OIP.4PY3UuP52w82Z9KwWlHOcwHaEo?rs=1&pid=ImgDetMain",
    chairman: "Er. Sunil Kumar Gupta",
    director: "Dr. Bharat K Gupta",
    establishment: "2008",
    courses: [
      "Computer Science",
      "Civil Engineering",
      "Mechanical Engineering",
      "Pharmacy",
      "Nursing",
      "ParaMedical",
      "MBA",
    ],
  },
  {
    id: "002",
    name: "Stanford University",
    location: "Stanford, CA",
    code: "SU002",
    photo:
      "https://wallpapers.com/images/hd/stanford-university-field-aerial-view-k8vuz27ytsiz56ed.jpg",
    chairman: "Jeffrey S. Raikes",
    director: "Richard Saller",
    establishment: "1885",
    courses: [
      "Engineering",
      "Artificial Intelligence",
      "Business",
      "Law",
      "Psychology",
    ],
  },
  {
    id: "003",
    name: "MIT",
    location: "Cambridge, MA",
    code: "MIT003",
    photo:
      "https://thumbs.dreamstime.com/b/massachusetts-institute-technology-cambridge-massachusetts-usa-mit-cambridge-ma-usa-243651181.jpg",
    chairman: "Diane B. Greene",
    director: "Sally Kornbluth",
    establishment: "1861",
    courses: [
      "Physics",
      "Engineering",
      "Computer Science",
      "Robotics",
      "Mathematics",
    ],
  },
  {
    id: "004",
    name: "University of California, Berkeley",
    location: "Berkeley, CA",
    code: "UCB004",
    photo:
      "https://th.bing.com/th/id/OIP.6bq2T2Qsu_9XcyeHvv4fmQHaEK?w=278&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    chairman: "Carol T. Christ",
    director: "David Ackerly",
    establishment: "1868",
    courses: [
      "Biology",
      "Data Science",
      "Business",
      "Public Policy",
      "Chemistry",
    ],
  },
  {
    id: "005",
    name: "California Institute of Technology",
    location: "Pasadena, CA",
    code: "CIT005",
    photo:
      "https://th.bing.com/th/id/OIP.H68A-m01uk11FwLkPOwXJQHaEv?w=256&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    chairman: "David L. Lee",
    director: "Thomas F. Rosenbaum",
    establishment: "1891",
    courses: [
      "Physics",
      "Astronomy",
      "Computer Science",
      "Engineering",
      "Mathematics",
    ],
  },
  {
    id: "006",
    name: "Princeton University",
    location: "Princeton, NJ",
    code: "PU006",
    photo:
      "https://th.bing.com/th/id/OIP.IQfC4ECMVjK-BCYU4NR0zwHaE7?w=263&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    chairman: "Christopher L. Eisgruber",
    director: "David S. Lee",
    establishment: "1746",
    courses: ["History", "Physics", "Mathematics", "Economics", "Law"],
  },
  {
    id: "007",
    name: "Yale University",
    location: "New Haven, CT",
    code: "YU007",
    photo:
      "https://th.bing.com/th/id/OIP.VEu9jJR-bARUdKDH6YtIsAHaFS?w=266&h=191&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    chairman: "Peter Salovey",
    director: "Dante A. Salazar",
    establishment: "1701",
    courses: ["Psychology", "Philosophy", "Economics", "Engineering", "Law"],
  },
  {
    id: "008",
    name: "Columbia University",
    location: "New York, NY",
    code: "CU008",
    photo:
      "https://th.bing.com/th/id/OIP.RMldgYqRW2kh62cu44rouwHaHa?w=190&h=191&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    chairman: "Lee C. Bollinger",
    director: "Herman E. Postma",
    establishment: "1754",
    courses: ["Business", "Physics", "Law", "Mathematics", "Medicine"],
  },
  {
    id: "009",
    name: "University of Chicago",
    location: "Chicago, IL",
    code: "UC009",
    photo: "https://wallpaperaccess.com/full/689462.jpg",
    chairman: "Robert J. Zimmer",
    director: "Donald Levy",
    establishment: "1890",
    courses: ["Economics", "Law", "Mathematics", "Sociology", "Public Policy"],
  },
  {
    id: "010",
    name: "University of Pennsylvania",
    location: "Philadelphia, PA",
    code: "UP010",
    photo: "https://example.com/photos/upenn.jpg",
    chairman: "Amy Gutmann",
    director: "Craig Carnaroli",
    establishment: "1740",
    courses: ["Business", "Engineering", "Law", "Psychology", "Public Health"],
  },
  {
    id: "011",
    name: "Cornell University",
    location: "Ithaca, NY",
    code: "CU011",
    photo: "https://example.com/photos/cornell.jpg",
    chairman: "Martha E. Pollack",
    director: "Ryan Lombardi",
    establishment: "1865",
    courses: [
      "Engineering",
      "Agriculture",
      "Humanities",
      "Biology",
      "Business",
    ],
  },
  {
    id: "012",
    name: "Duke University",
    location: "Durham, NC",
    code: "DU012",
    photo: "https://example.com/photos/duke.jpg",
    chairman: "Vincent E. Price",
    director: "Sally Kornbluth",
    establishment: "1838",
    courses: ["Engineering", "Law", "Public Policy", "Medicine", "Business"],
  },
  {
    id: "013",
    name: "University of Michigan",
    location: "Ann Arbor, MI",
    code: "UM013",
    photo: "https://example.com/photos/umich.jpg",
    chairman: "Mark S. Schlissel",
    director: "Kimberly M. Cameron",
    establishment: "1817",
    courses: ["Engineering", "Public Health", "Business", "Law", "Sociology"],
  },
  {
    id: "014",
    name: "Northwestern University",
    location: "Evanston, IL",
    code: "NU014",
    photo: "https://example.com/photos/northwestern.jpg",
    chairman: "Morton Schapiro",
    director: "Daniel Linzer",
    establishment: "1851",
    courses: ["Business", "Engineering", "Law", "Journalism", "Sociology"],
  },
  {
    id: "015",
    name: "University of Southern California",
    location: "Los Angeles, CA",
    code: "USC015",
    photo: "https://example.com/photos/usc.jpg",
    chairman: "Carol L. Folt",
    director: "C. L. Hurlburt",
    establishment: "1880",
    courses: ["Engineering", "Business", "Entertainment", "Law", "Psychology"],
  },
  {
    id: "016",
    name: "New York University",
    location: "New York, NY",
    code: "NYU016",
    photo: "https://example.com/photos/nyu.jpg",
    chairman: "Andrew Hamilton",
    director: "Michael L. Sweeney",
    establishment: "1831",
    courses: ["Law", "Business", "Arts", "Psychology", "Economics"],
  },
  {
    id: "017",
    name: "Brown University",
    location: "Providence, RI",
    code: "BU017",
    photo: "https://example.com/photos/brown.jpg",
    chairman: "Christina Paxson",
    director: "Richard M. Locke",
    establishment: "1764",
    courses: [
      "Humanities",
      "Engineering",
      "Public Health",
      "Economics",
      "Physics",
    ],
  },
  {
    id: "018",
    name: "Rice University",
    location: "Houston, TX",
    code: "RU018",
    photo: "https://example.com/photos/rice.jpg",
    chairman: "David W. Leebron",
    director: "Reginald DesRoches",
    establishment: "1912",
    courses: [
      "Engineering",
      "Business",
      "Computer Science",
      "Chemistry",
      "Physics",
    ],
  },
  {
    id: "019",
    name: "University of Washington",
    location: "Seattle, WA",
    code: "UW019",
    photo: "https://example.com/photos/uwashington.jpg",
    chairman: "Ana Mari Cauce",
    director: "M. Diane Martin",
    establishment: "1861",
    courses: ["Business", "Law", "Engineering", "Biology", "Sociology"],
  },
  {
    id: "020",
    name: "University of Texas at Austin",
    location: "Austin, TX",
    code: "UTA020",
    photo: "https://example.com/photos/utx.jpg",
    chairman: "Jay Hartzell",
    director: "William Powers Jr.",
    establishment: "1883",
    courses: ["Business", "Engineering", "Law", "Public Affairs", "Economics"],
  },
  {
    id: "021",
    name: "University of Wisconsin–Madison",
    location: "Madison, WI",
    code: "UWM021",
    photo: "https://example.com/photos/uwisconsin.jpg",
    chairman: "Rebecca Blank",
    director: "Eric Wilcots",
    establishment: "1848",
    courses: ["Engineering", "Business", "Law", "Biology", "Public Policy"],
  },
  {
    id: "022",
    name: "University of North Carolina at Chapel Hill",
    location: "Chapel Hill, NC",
    code: "UNC022",
    photo: "https://example.com/photos/unc.jpg",
    chairman: "Chancellor Kevin Guskiewicz",
    director: "Barrett R. Dorrow",
    establishment: "1789",
    courses: ["Business", "Law", "Public Health", "Education", "Sociology"],
  },
  {
    id: "023",
    name: "Boston University",
    location: "Boston, MA",
    code: "BU023",
    photo: "https://example.com/photos/bu.jpg",
    chairman: "Robert A. Brown",
    director: "Jean Morrison",
    establishment: "1839",
    courses: ["Business", "Engineering", "Law", "Public Health", "Arts"],
  },
  {
    id: "024",
    name: "University of Florida",
    location: "Gainesville, FL",
    code: "UF024",
    photo: "https://example.com/photos/uf.jpg",
    chairman: "Kent Fuchs",
    director: "David Norton",
    establishment: "1853",
    courses: ["Agriculture", "Engineering", "Law", "Business", "Public Health"],
  },
  {
    id: "025",
    name: "Georgia Institute of Technology",
    location: "Atlanta, GA",
    code: "GIT025",
    photo: "https://example.com/photos/ga-tech.jpg",
    chairman: "Angel Cabrera",
    director: "Steve McLaughlin",
    establishment: "1885",
    courses: [
      "Engineering",
      "Computer Science",
      "Business",
      "Robotics",
      "Public Policy",
    ],
  },
  {
    id: "026",
    name: "University of Illinois Urbana-Champaign",
    location: "Champaign, IL",
    code: "UIUC026",
    photo: "https://example.com/photos/uiuc.jpg",
    chairman: "Timothy L. Killeen",
    director: "Barbara J. Wilson",
    establishment: "1867",
    courses: ["Engineering", "Business", "Law", "Biology", "Psychology"],
  },
  {
    id: "027",
    name: "Carnegie Mellon University",
    location: "Pittsburgh, PA",
    code: "CMU027",
    photo: "https://example.com/photos/cmu.jpg",
    chairman: "Farnam Jahanian",
    director: "Rebecca Nugent",
    establishment: "1900",
    courses: [
      "Engineering",
      "Computer Science",
      "Business",
      "Artificial Intelligence",
      "Robotics",
    ],
  },
  {
    id: "028",
    name: "University of Maryland",
    location: "College Park, MD",
    code: "UMD028",
    photo: "https://example.com/photos/umd.jpg",
    chairman: "Darrell J. Baum",
    director: "Katherine M. Heller",
    establishment: "1856",
    courses: ["Engineering", "Business", "Law", "Public Health", "Psychology"],
  },
  {
    id: "029",
    name: "Penn State University",
    location: "University Park, PA",
    code: "PSU029",
    photo: "https://example.com/photos/psu.jpg",
    chairman: "Eric J. Barron",
    director: "David L. Gray",
    establishment: "1855",
    courses: ["Business", "Engineering", "Law", "Public Policy", "Agriculture"],
  },
  {
    id: "030",
    name: "Purdue University",
    location: "West Lafayette, IN",
    code: "PU030",
    photo: "https://example.com/photos/purdue.jpg",
    chairman: "Mitch Daniels",
    director: "Jay Akridge",
    establishment: "1869",
    courses: [
      "Engineering",
      "Agriculture",
      "Business",
      "Public Health",
      "Computer Science",
    ],
  },
  // More colleges can be added in the same format...
];

export default collegesData;
