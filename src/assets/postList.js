const posts = [
    {
      "createdAt": "2025-08-21T09:39:34.640Z",
      "title": "Ergonomic",
      "author": "Meghan Shanahan",
      "likes": "614.59",
      "comments": "114.89",
      "time": "2025-08-20T15:50:09.967Z",
      "body": "Ergonomic Shirt made with Gold for all-day rotten support",
      "id": "1"
    },
    {
      "createdAt": "2025-08-21T04:35:05.751Z",
      "title": "Licensed",
      "author": "Gregory Mohr",
      "likes": "592.82",
      "comments": "990.01",
      "time": "2025-08-21T07:37:55.923Z",
      "body": "Experience the olive brilliance of our Bike, perfect for standard environments",
      "id": "2"
    },
    {
      "createdAt": "2025-08-20T21:20:22.386Z",
      "title": "Generic",
      "author": "Nicole Block",
      "likes": "4.02",
      "comments": "986.13",
      "time": "2025-08-20T12:34:29.797Z",
      "body": "Featuring Chlorine-enhanced technology, our Mouse offers unparalleled soft performance",
      "id": "3"
    },
    {
      "createdAt": "2025-08-20T16:59:49.352Z",
      "title": "Elegant",
      "author": "Vivian Krajcik",
      "likes": "359.25",
      "comments": "25.72",
      "time": "2025-08-21T04:34:42.383Z",
      "body": "The Flossie Keyboard is the latest in a series of acceptable products from Schoen - McKenzie",
      "id": "4"
    },
    {
      "createdAt": "2025-08-20T17:40:36.537Z",
      "title": "Soft",
      "author": "Tracy Larkin",
      "likes": "399.80",
      "comments": "200.15",
      "time": "2025-08-20T23:01:51.481Z",
      "body": "Discover the turtle-like agility of our Keyboard, perfect for puzzled users",
      "id": "5"
    },
    {
      "createdAt": "2025-08-20T21:37:05.080Z",
      "title": "Ergonomic",
      "author": "Bruce Sipes",
      "likes": "687.58",
      "comments": "11.11",
      "time": "2025-08-21T09:25:57.460Z",
      "body": "Refined Tuna designed with Concrete for regular performance",
      "id": "6"
    },
    {
      "createdAt": "2025-08-20T12:46:32.743Z",
      "title": "Soft",
      "author": "Billie Langworth",
      "likes": "727.92",
      "comments": "517.84",
      "time": "2025-08-21T07:36:43.597Z",
      "body": "New Keyboard model with 60 GB RAM, 488 GB storage, and needy features",
      "id": "7"
    },
    {
      "createdAt": "2025-08-21T05:58:27.081Z",
      "title": "Soft",
      "author": "Jesus Rowe",
      "likes": "968.12",
      "comments": "603.99",
      "time": "2025-08-20T13:26:08.434Z",
      "body": "Ergonomic Fish made with Rubber for all-day delicious support",
      "id": "8"
    },
    {
      "createdAt": "2025-08-21T02:09:06.301Z",
      "title": "Ergonomic",
      "author": "Tim Casper",
      "likes": "943.02",
      "comments": "672.10",
      "time": "2025-08-21T06:16:04.247Z",
      "body": "The Synchronised demand-driven instruction set Pants offers reliable performance and oily design",
      "id": "9"
    },
    {
      "createdAt": "2025-08-20T14:14:16.471Z",
      "title": "Fresh",
      "author": "Don Hodkiewicz",
      "likes": "207.13",
      "comments": "94.50",
      "time": "2025-08-20T22:38:03.753Z",
      "body": "The Reilly Ball is the latest in a series of rapid products from Purdy, Cummings and Graham",
      "id": "10"
    },
    {
      "createdAt": "2025-08-21T00:45:34.174Z",
      "title": "Tasty",
      "author": "Mack Harber-Farrell",
      "likes": "394.38",
      "comments": "952.61",
      "time": "2025-08-20T14:14:23.837Z",
      "body": "Ergonomic Sausages made with Granite for all-day turbulent support",
      "id": "11"
    },
    {
      "createdAt": "2025-08-21T01:06:21.287Z",
      "title": "Generic",
      "author": "Gail Legros",
      "likes": "423.27",
      "comments": "674.72",
      "time": "2025-08-20T20:41:39.646Z",
      "body": "Introducing the Turks and Caicos Islands-inspired Chips, blending our style with local craftsmanship",
      "id": "12"
    },
    {
      "createdAt": "2025-08-20T12:31:22.366Z",
      "title": "Licensed",
      "author": "Gerard Bergnaum",
      "likes": "635.64",
      "comments": "749.33",
      "time": "2025-08-21T00:55:29.933Z",
      "body": "New Keyboard model with 77 GB RAM, 728 GB storage, and infamous features",
      "id": "13"
    },
    {
      "createdAt": "2025-08-21T11:23:58.516Z",
      "title": "Fresh",
      "author": "Bernice Auer",
      "likes": "363.41",
      "comments": "204.36",
      "time": "2025-08-20T13:18:49.860Z",
      "body": "The Albert Hat is the latest in a series of understated products from Moen, Bogan and Douglas",
      "id": "14"
    },
    {
      "createdAt": "2025-08-20T19:57:48.357Z",
      "title": "Practical",
      "author": "Leah McDermott",
      "likes": "251.53",
      "comments": "303.22",
      "time": "2025-08-21T01:15:27.974Z",
      "body": "Innovative Towels featuring boiling technology and Marble construction",
      "id": "15"
    },
    {
      "createdAt": "2025-08-20T14:20:50.380Z",
      "title": "Awesome",
      "author": "Lowell Ratke",
      "likes": "226.93",
      "comments": "307.93",
      "time": "2025-08-21T02:19:13.001Z",
      "body": "The sleek and foolish Tuna comes with purple LED lighting for smart functionality",
      "id": "16"
    },
    {
      "createdAt": "2025-08-20T19:48:41.942Z",
      "title": "Awesome",
      "author": "Carolyn Schinner",
      "likes": "53.54",
      "comments": "673.72",
      "time": "2025-08-20T19:28:51.764Z",
      "body": "Weissnat, Windler and Nader's most advanced Pants technology increases scratchy capabilities",
      "id": "17"
    },
    {
      "createdAt": "2025-08-20T15:09:02.091Z",
      "title": "Recycled",
      "author": "Dean Flatley",
      "likes": "68.42",
      "comments": "754.82",
      "time": "2025-08-20T21:20:18.050Z",
      "body": "The black Chicken combines Jamaica aesthetics with Astatine-based durability",
      "id": "18"
    },
    {
      "createdAt": "2025-08-20T17:51:15.027Z",
      "title": "Tasty",
      "author": "Mrs. Patsy Jast",
      "likes": "364.22",
      "comments": "592.56",
      "time": "2025-08-21T07:39:31.961Z",
      "body": "Professional-grade Soap perfect for stark training and recreational use",
      "id": "19"
    },
    {
      "createdAt": "2025-08-20T23:05:28.046Z",
      "title": "Practical",
      "author": "Angie Gutmann",
      "likes": "759.54",
      "comments": "652.36",
      "time": "2025-08-20T15:18:02.012Z",
      "body": "Introducing the Guinea-inspired Chips, blending faraway style with local craftsmanship",
      "id": "20"
    },
    {
      "createdAt": "2025-08-20T19:35:31.600Z",
      "title": "Soft",
      "author": "Ruth Spinka",
      "likes": "376.87",
      "comments": "531.41",
      "time": "2025-08-21T00:34:16.806Z",
      "body": "Experience the turquoise brilliance of our Fish, perfect for rare environments",
      "id": "21"
    },
    {
      "createdAt": "2025-08-20T21:08:25.079Z",
      "title": "Licensed",
      "author": "Allen DuBuque",
      "likes": "27.84",
      "comments": "163.16",
      "time": "2025-08-21T10:44:42.887Z",
      "body": "Ergonomic Pants made with Wooden for all-day deafening support",
      "id": "22"
    },
    {
      "createdAt": "2025-08-21T05:46:12.115Z",
      "title": "Ergonomic",
      "author": "Trevor Herzog",
      "likes": "334.79",
      "comments": "157.51",
      "time": "2025-08-21T09:24:07.961Z",
      "body": "Ergonomic Hat made with Silk for all-day yellowish support",
      "id": "23"
    },
    {
      "createdAt": "2025-08-20T21:21:25.423Z",
      "title": "Practical",
      "author": "Martha Pouros",
      "likes": "551.16",
      "comments": "21.46",
      "time": "2025-08-21T10:48:43.118Z",
      "body": "Experience the lime brilliance of our Keyboard, perfect for wry environments",
      "id": "24"
    },
    {
      "createdAt": "2025-08-20T22:39:17.321Z",
      "title": "Refined",
      "author": "Dianne Crona",
      "likes": "524.36",
      "comments": "363.62",
      "time": "2025-08-21T03:41:00.754Z",
      "body": "Franey, Franey and Bahringer's most advanced Chicken technology increases insecure capabilities",
      "id": "25"
    },
    {
      "createdAt": "2025-08-21T11:27:33.308Z",
      "title": "Elegant",
      "author": "Laurie Cartwright",
      "likes": "899.80",
      "comments": "585.03",
      "time": "2025-08-21T06:30:37.948Z",
      "body": "Stracke LLC's most advanced Chips technology increases wee capabilities",
      "id": "26"
    },
    {
      "createdAt": "2025-08-21T10:20:56.213Z",
      "title": "Recycled",
      "author": "Joann Swift",
      "likes": "822.89",
      "comments": "124.25",
      "time": "2025-08-20T12:23:57.288Z",
      "body": "Our savory-inspired Computer brings a taste of luxury to your gorgeous lifestyle",
      "id": "27"
    },
    {
      "createdAt": "2025-08-20T14:46:53.782Z",
      "title": "Fantastic",
      "author": "Sonja Walter",
      "likes": "945.15",
      "comments": "569.74",
      "time": "2025-08-20T18:49:02.140Z",
      "body": "New lavender Hat with ergonomic design for fantastic comfort",
      "id": "28"
    },
    {
      "createdAt": "2025-08-21T09:13:57.646Z",
      "title": "Fantastic",
      "author": "Leona Langosh DDS",
      "likes": "780.23",
      "comments": "887.69",
      "time": "2025-08-21T01:49:28.009Z",
      "body": "New Shirt model with 85 GB RAM, 701 GB storage, and darling features",
      "id": "29"
    },
    {
      "createdAt": "2025-08-20T18:44:17.314Z",
      "title": "Small",
      "author": "Charlie Weimann",
      "likes": "795.78",
      "comments": "111.07",
      "time": "2025-08-21T00:14:38.385Z",
      "body": "Experience the maroon brilliance of our Chips, perfect for milky environments",
      "id": "30"
    },
    {
      "createdAt": "2025-08-21T05:04:56.342Z",
      "title": "Electronic",
      "author": "Tara Boehm-Tillman",
      "likes": "408.56",
      "comments": "605.00",
      "time": "2025-08-21T04:30:22.477Z",
      "body": "Our sweet-inspired Ball brings a taste of luxury to your antique lifestyle",
      "id": "31"
    },
    {
      "createdAt": "2025-08-21T04:29:45.312Z",
      "title": "Practical",
      "author": "Mae Cummerata",
      "likes": "430.95",
      "comments": "572.27",
      "time": "2025-08-20T23:09:39.684Z",
      "body": "The lime Tuna combines Democratic People's Republic of Korea aesthetics with Lead-based durability",
      "id": "32"
    },
    {
      "createdAt": "2025-08-21T01:08:57.267Z",
      "title": "Recycled",
      "author": "Claudia Doyle",
      "likes": "677.62",
      "comments": "66.42",
      "time": "2025-08-21T03:10:31.789Z",
      "body": "The Marilie Pants is the latest in a series of tight products from Kozey Inc",
      "id": "33"
    },
    {
      "createdAt": "2025-08-20T12:57:01.930Z",
      "title": "Refined",
      "author": "Jasmine Koss",
      "likes": "9.86",
      "comments": "409.80",
      "time": "2025-08-21T08:11:15.525Z",
      "body": "New Salad model with 41 GB RAM, 238 GB storage, and alienated features",
      "id": "34"
    },
    {
      "createdAt": "2025-08-20T15:54:46.501Z",
      "title": "Frozen",
      "author": "Kayla Treutel-Hoeger",
      "likes": "353.06",
      "comments": "871.61",
      "time": "2025-08-21T10:24:31.297Z",
      "body": "Ergonomic Sausages made with Aluminum for all-day deadly support",
      "id": "35"
    },
    {
      "createdAt": "2025-08-20T19:07:13.707Z",
      "title": "Luxurious",
      "author": "Marilyn Parisian",
      "likes": "716.64",
      "comments": "451.88",
      "time": "2025-08-21T03:04:13.008Z",
      "body": "Frozen Chair designed with Granite for qualified performance",
      "id": "36"
    },
    {
      "createdAt": "2025-08-20T19:06:23.693Z",
      "title": "Tasty",
      "author": "Edmund Stoltenberg V",
      "likes": "532.86",
      "comments": "674.37",
      "time": "2025-08-21T02:33:05.819Z",
      "body": "Experience the orange brilliance of our Shirt, perfect for functional environments",
      "id": "37"
    },
    {
      "createdAt": "2025-08-20T12:02:55.516Z",
      "title": "Recycled",
      "author": "Kristy Williamson",
      "likes": "240.81",
      "comments": "355.09",
      "time": "2025-08-21T09:26:59.075Z",
      "body": "Stylish Cheese designed to make you stand out with naughty looks",
      "id": "38"
    },
    {
      "createdAt": "2025-08-20T19:55:08.209Z",
      "title": "Intelligent",
      "author": "Ms. Ella Cronin",
      "likes": "256.39",
      "comments": "800.40",
      "time": "2025-08-21T02:00:27.362Z",
      "body": "Savor the salty essence in our Car, designed for bleak culinary adventures",
      "id": "39"
    },
    {
      "createdAt": "2025-08-21T05:44:10.683Z",
      "title": "Ergonomic",
      "author": "Clifton Hartmann",
      "likes": "522.22",
      "comments": "293.15",
      "time": "2025-08-20T19:26:16.054Z",
      "body": "Introducing the Eswatini-inspired Bacon, blending babyish style with local craftsmanship",
      "id": "40"
    },
    {
      "createdAt": "2025-08-21T01:41:21.605Z",
      "title": "Generic",
      "author": "Jerry Gibson",
      "likes": "954.19",
      "comments": "690.27",
      "time": "2025-08-21T09:53:03.735Z",
      "body": "Stylish Salad designed to make you stand out with mealy looks",
      "id": "41"
    },
    {
      "createdAt": "2025-08-20T12:54:17.286Z",
      "title": "Oriental",
      "author": "Mr. Ronnie Rosenbaum",
      "likes": "424.44",
      "comments": "367.81",
      "time": "2025-08-21T06:56:08.034Z",
      "body": "Innovative Shoes featuring slow technology and Plastic construction",
      "id": "42"
    },
    {
      "createdAt": "2025-08-21T01:10:55.804Z",
      "title": "Electronic",
      "author": "Jordan Pouros",
      "likes": "989.34",
      "comments": "106.75",
      "time": "2025-08-21T11:30:00.627Z",
      "body": "Featuring Iodine-enhanced technology, our Car offers unparalleled mammoth performance",
      "id": "43"
    },
    {
      "createdAt": "2025-08-20T14:53:55.387Z",
      "title": "Fantastic",
      "author": "Carrie Murphy",
      "likes": "746.02",
      "comments": "4.24",
      "time": "2025-08-21T11:17:26.820Z",
      "body": "Savor the fresh essence in our Pants, designed for equatorial culinary adventures",
      "id": "44"
    },
    {
      "createdAt": "2025-08-21T11:26:57.827Z",
      "title": "Small",
      "author": "Mr. Ramon Prohaska",
      "likes": "695.26",
      "comments": "1.05",
      "time": "2025-08-21T02:04:28.831Z",
      "body": "Our crispy-inspired Pants brings a taste of luxury to your glum lifestyle",
      "id": "45"
    },
    {
      "createdAt": "2025-08-20T20:31:01.987Z",
      "title": "Licensed",
      "author": "Sara Toy",
      "likes": "953.46",
      "comments": "6.58",
      "time": "2025-08-20T18:05:52.761Z",
      "body": "Experience the olive brilliance of our Shirt, perfect for antique environments",
      "id": "46"
    },
    {
      "createdAt": "2025-08-21T07:15:54.391Z",
      "title": "Practical",
      "author": "Erma Luettgen-Dach",
      "likes": "962.60",
      "comments": "734.52",
      "time": "2025-08-21T08:01:23.134Z",
      "body": "Professional-grade Keyboard perfect for usable training and recreational use",
      "id": "47"
    },
    {
      "createdAt": "2025-08-21T09:37:18.695Z",
      "title": "Awesome",
      "author": "Curtis Stiedemann",
      "likes": "164.95",
      "comments": "875.09",
      "time": "2025-08-21T04:02:11.957Z",
      "body": "Stylish Soap designed to make you stand out with secondary looks",
      "id": "48"
    },
    {
      "createdAt": "2025-08-21T08:56:54.842Z",
      "title": "Fresh",
      "author": "Nicolas Windler",
      "likes": "912.99",
      "comments": "255.26",
      "time": "2025-08-20T12:42:14.861Z",
      "body": "The Yasmin Mouse is the latest in a series of pessimistic products from Quigley, Quitzon and Bins",
      "id": "49"
    },
    {
      "createdAt": "2025-08-20T22:13:45.970Z",
      "title": "Generic",
      "author": "Ann Bradtke",
      "likes": "312.49",
      "comments": "679.48",
      "time": "2025-08-20T17:16:33.852Z",
      "body": "The black Pizza combines Mali aesthetics with Radon-based durability",
      "id": "50"
    },
    {
      "createdAt": "2025-08-20T16:03:33.599Z",
      "title": "Electronic",
      "author": "Sue Leffler IV",
      "likes": "901.71",
      "comments": "444.99",
      "time": "2025-08-21T09:45:19.301Z",
      "body": "Experience the sky blue brilliance of our Cheese, perfect for sorrowful environments",
      "id": "51"
    },
    {
      "createdAt": "2025-08-20T12:19:53.083Z",
      "title": "Fantastic",
      "author": "Rachel Schamberger",
      "likes": "965.67",
      "comments": "119.33",
      "time": "2025-08-20T19:15:33.889Z",
      "body": "New Soap model with 72 GB RAM, 265 GB storage, and cheerful features",
      "id": "52"
    },
    {
      "createdAt": "2025-08-20T17:04:48.108Z",
      "title": "Tasty",
      "author": "Claire Cronin PhD",
      "likes": "110.30",
      "comments": "484.26",
      "time": "2025-08-20T16:36:59.779Z",
      "body": "Innovative Table featuring honored technology and Rubber construction",
      "id": "53"
    },
    {
      "createdAt": "2025-08-20T18:00:55.760Z",
      "title": "Electronic",
      "author": "Heather Wintheiser",
      "likes": "259.31",
      "comments": "702.65",
      "time": "2025-08-20T13:16:48.524Z",
      "body": "Introducing the Ecuador-inspired Mouse, blending official style with local craftsmanship",
      "id": "54"
    },
    {
      "createdAt": "2025-08-20T18:41:28.288Z",
      "title": "Elegant",
      "author": "Joan Hagenes",
      "likes": "79.37",
      "comments": "175.75",
      "time": "2025-08-21T00:58:58.463Z",
      "body": "Featuring Neptunium-enhanced technology, our Gloves offers unparalleled metallic performance",
      "id": "55"
    },
    {
      "createdAt": "2025-08-21T04:24:57.273Z",
      "title": "Bespoke",
      "author": "Teresa Weber",
      "likes": "875.72",
      "comments": "328.63",
      "time": "2025-08-20T13:50:47.968Z",
      "body": "Professional-grade Soap perfect for stunning training and recreational use",
      "id": "56"
    },
    {
      "createdAt": "2025-08-20T21:41:55.686Z",
      "title": "Incredible",
      "author": "Linda Aufderhar",
      "likes": "476.86",
      "comments": "264.94",
      "time": "2025-08-20T18:33:11.799Z",
      "body": "Experience the sky blue brilliance of our Bike, perfect for windy environments",
      "id": "57"
    },
    {
      "createdAt": "2025-08-20T20:52:32.182Z",
      "title": "Fantastic",
      "author": "Steve Wisozk",
      "likes": "319.34",
      "comments": "625.83",
      "time": "2025-08-21T05:38:37.296Z",
      "body": "The sleek and salty Tuna comes with green LED lighting for smart functionality",
      "id": "58"
    },
    {
      "createdAt": "2025-08-20T15:23:50.649Z",
      "title": "Awesome",
      "author": "Douglas Wyman",
      "likes": "470.58",
      "comments": "99.93",
      "time": "2025-08-21T00:21:35.030Z",
      "body": "Experience the teal brilliance of our Gloves, perfect for hidden environments",
      "id": "59"
    },
    {
      "createdAt": "2025-08-20T18:34:13.907Z",
      "title": "Small",
      "author": "Stella McCullough",
      "likes": "72.39",
      "comments": "576.34",
      "time": "2025-08-21T11:19:08.332Z",
      "body": "Featuring Palladium-enhanced technology, our Bacon offers unparalleled pale performance",
      "id": "60"
    },
    {
      "createdAt": "2025-08-20T19:24:34.780Z",
      "title": "Bespoke",
      "author": "Phillip Davis",
      "likes": "866.15",
      "comments": "43.61",
      "time": "2025-08-21T10:55:35.521Z",
      "body": "Introducing the Costa Rica-inspired Table, blending colorful style with local craftsmanship",
      "id": "61"
    },
    {
      "createdAt": "2025-08-21T01:48:27.880Z",
      "title": "Recycled",
      "author": "Jim Watsica",
      "likes": "442.79",
      "comments": "370.27",
      "time": "2025-08-21T09:13:45.168Z",
      "body": "Innovative Cheese featuring petty technology and Bamboo construction",
      "id": "62"
    },
    {
      "createdAt": "2025-08-20T18:23:28.290Z",
      "title": "Awesome",
      "author": "Arturo Konopelski-Kerluke",
      "likes": "814.66",
      "comments": "996.90",
      "time": "2025-08-20T21:51:24.446Z",
      "body": "Stylish Soap designed to make you stand out with uneven looks",
      "id": "63"
    },
    {
      "createdAt": "2025-08-20T17:49:36.181Z",
      "title": "Gorgeous",
      "author": "Kristin Treutel",
      "likes": "686.39",
      "comments": "286.49",
      "time": "2025-08-20T21:45:34.189Z",
      "body": "The Front-line asymmetric challenge Table offers reliable performance and possible design",
      "id": "64"
    },
    {
      "createdAt": "2025-08-20T16:02:43.770Z",
      "title": "Intelligent",
      "author": "Sandy Schneider",
      "likes": "77.74",
      "comments": "832.58",
      "time": "2025-08-21T03:32:12.776Z",
      "body": "Professional-grade Keyboard perfect for squeaky training and recreational use",
      "id": "65"
    },
    {
      "createdAt": "2025-08-20T21:21:16.731Z",
      "title": "Unbranded",
      "author": "Sophie Wolf",
      "likes": "761.90",
      "comments": "36.77",
      "time": "2025-08-21T05:29:17.454Z",
      "body": "Introducing the Yemen-inspired Soap, blending harmful style with local craftsmanship",
      "id": "66"
    },
    {
      "createdAt": "2025-08-20T13:31:52.683Z",
      "title": "Unbranded",
      "author": "Lee McLaughlin",
      "likes": "601.69",
      "comments": "306.22",
      "time": "2025-08-21T05:48:03.078Z",
      "body": "The Robust cohesive knowledge base Pants offers reliable performance and acceptable design",
      "id": "67"
    },
    {
      "createdAt": "2025-08-20T12:02:57.296Z",
      "title": "Rustic",
      "author": "Mae Erdman",
      "likes": "15.26",
      "comments": "418.53",
      "time": "2025-08-21T02:11:15.289Z",
      "body": "Experience the azure brilliance of our Gloves, perfect for lovable environments",
      "id": "68"
    },
    {
      "createdAt": "2025-08-20T13:48:38.980Z",
      "title": "Electronic",
      "author": "Mable Brown MD",
      "likes": "259.27",
      "comments": "250.56",
      "time": "2025-08-20T23:11:21.319Z",
      "body": "The Streamlined context-sensitive capacity Car offers reliable performance and dull design",
      "id": "69"
    },
    {
      "createdAt": "2025-08-21T02:56:11.248Z",
      "title": "Modern",
      "author": "Janie Wiegand",
      "likes": "692.30",
      "comments": "558.33",
      "time": "2025-08-21T02:12:21.922Z",
      "body": "Savor the tender essence in our Car, designed for heavy culinary adventures",
      "id": "70"
    },
    {
      "createdAt": "2025-08-21T08:04:46.381Z",
      "title": "Oriental",
      "author": "Valerie Stracke III",
      "likes": "301.85",
      "comments": "673.29",
      "time": "2025-08-20T16:25:03.194Z",
      "body": "Stylish Chair designed to make you stand out with pessimistic looks",
      "id": "71"
    },
    {
      "createdAt": "2025-08-21T03:28:22.561Z",
      "title": "Awesome",
      "author": "Evan Hudson",
      "likes": "210.28",
      "comments": "143.29",
      "time": "2025-08-21T08:38:31.013Z",
      "body": "Our whale-friendly Computer ensures functional comfort for your pets",
      "id": "72"
    },
    {
      "createdAt": "2025-08-21T05:33:26.282Z",
      "title": "Oriental",
      "author": "Marvin Wuckert I",
      "likes": "153.50",
      "comments": "616.92",
      "time": "2025-08-21T11:00:48.459Z",
      "body": "New maroon Cheese with ergonomic design for tense comfort",
      "id": "73"
    },
    {
      "createdAt": "2025-08-21T03:58:44.862Z",
      "title": "Incredible",
      "author": "Marvin Haley",
      "likes": "950.28",
      "comments": "919.21",
      "time": "2025-08-21T05:11:44.906Z",
      "body": "Kirlin - Bailey's most advanced Shoes technology increases naughty capabilities",
      "id": "74"
    },
    {
      "createdAt": "2025-08-20T19:24:32.629Z",
      "title": "Small",
      "author": "Gloria Gorczany IV",
      "likes": "203.78",
      "comments": "584.89",
      "time": "2025-08-20T13:46:05.124Z",
      "body": "Introducing the Latvia-inspired Chicken, blending dapper style with local craftsmanship",
      "id": "75"
    },
    {
      "createdAt": "2025-08-20T17:37:32.138Z",
      "title": "Small",
      "author": "Mr. Omar Fisher-Sauer",
      "likes": "439.27",
      "comments": "47.89",
      "time": "2025-08-20T21:52:11.849Z",
      "body": "Licensed Hat designed with Metal for messy performance",
      "id": "76"
    },
    {
      "createdAt": "2025-08-20T14:46:40.654Z",
      "title": "Generic",
      "author": "Patricia Brakus",
      "likes": "559.17",
      "comments": "923.61",
      "time": "2025-08-21T05:11:16.644Z",
      "body": "Discover the cat-like agility of our Shoes, perfect for sturdy users",
      "id": "77"
    },
    {
      "createdAt": "2025-08-21T08:52:50.792Z",
      "title": "Awesome",
      "author": "Mamie O'Keefe",
      "likes": "153.07",
      "comments": "815.36",
      "time": "2025-08-20T11:46:46.883Z",
      "body": "The Earline Towels is the latest in a series of important products from Schoen - Streich",
      "id": "78"
    },
    {
      "createdAt": "2025-08-20T13:56:25.659Z",
      "title": "Awesome",
      "author": "Bobbie Cormier",
      "likes": "705.98",
      "comments": "869.05",
      "time": "2025-08-21T06:08:08.118Z",
      "body": "Experience the magenta brilliance of our Gloves, perfect for memorable environments",
      "id": "79"
    },
    {
      "createdAt": "2025-08-21T00:20:11.764Z",
      "title": "Fantastic",
      "author": "Evan Reilly",
      "likes": "821.96",
      "comments": "755.36",
      "time": "2025-08-21T04:03:00.643Z",
      "body": "The Eric Shoes is the latest in a series of inferior products from Koch, Cartwright and Mitchell",
      "id": "80"
    },
    {
      "createdAt": "2025-08-20T11:55:36.554Z",
      "title": "Fantastic",
      "author": "Mr. Roger Stroman Sr.",
      "likes": "740.88",
      "comments": "8.41",
      "time": "2025-08-21T04:08:05.519Z",
      "body": "Professional-grade Pants perfect for brave training and recreational use",
      "id": "81"
    },
    {
      "createdAt": "2025-08-20T22:42:30.649Z",
      "title": "Unbranded",
      "author": "Andres Rippin",
      "likes": "308.18",
      "comments": "490.64",
      "time": "2025-08-20T13:59:51.196Z",
      "body": "Introducing the Barbados-inspired Pizza, blending mature style with local craftsmanship",
      "id": "82"
    },
    {
      "createdAt": "2025-08-21T05:36:24.719Z",
      "title": "Licensed",
      "author": "Lewis Bechtelar",
      "likes": "183.51",
      "comments": "765.97",
      "time": "2025-08-21T07:17:28.685Z",
      "body": "Discover the little new Car with an exciting mix of Ceramic ingredients",
      "id": "83"
    },
    {
      "createdAt": "2025-08-20T19:53:25.753Z",
      "title": "Licensed",
      "author": "Kathy Kris",
      "likes": "193.26",
      "comments": "64.45",
      "time": "2025-08-21T08:51:35.853Z",
      "body": "The sleek and vivid Salad comes with black LED lighting for smart functionality",
      "id": "84"
    },
    {
      "createdAt": "2025-08-20T13:24:17.038Z",
      "title": "Recycled",
      "author": "Sharon Kutch",
      "likes": "999.09",
      "comments": "942.76",
      "time": "2025-08-20T11:43:09.235Z",
      "body": "Featuring Rutherfordium-enhanced technology, our Chips offers unparalleled curly performance",
      "id": "85"
    },
    {
      "createdAt": "2025-08-20T19:19:54.071Z",
      "title": "Frozen",
      "author": "Carrie Ratke",
      "likes": "25.43",
      "comments": "718.15",
      "time": "2025-08-21T07:54:10.756Z",
      "body": "Experience the magenta brilliance of our Salad, perfect for aggravating environments",
      "id": "86"
    },
    {
      "createdAt": "2025-08-20T23:34:54.705Z",
      "title": "Ergonomic",
      "author": "Francis Beahan",
      "likes": "498.45",
      "comments": "717.76",
      "time": "2025-08-20T21:40:55.643Z",
      "body": "Stylish Salad designed to make you stand out with rotating looks",
      "id": "87"
    },
    {
      "createdAt": "2025-08-20T15:02:12.333Z",
      "title": "Handcrafted",
      "author": "Camille Bernier PhD",
      "likes": "148.07",
      "comments": "404.08",
      "time": "2025-08-21T08:08:15.161Z",
      "body": "The Jaeden Chair is the latest in a series of fixed products from Weimann Inc",
      "id": "88"
    },
    {
      "createdAt": "2025-08-20T19:42:06.501Z",
      "title": "Handmade",
      "author": "Mr. Lowell Sawayn",
      "likes": "29.42",
      "comments": "414.01",
      "time": "2025-08-21T09:17:00.428Z",
      "body": "Our bird-friendly Shirt ensures rough comfort for your pets",
      "id": "89"
    },
    {
      "createdAt": "2025-08-20T13:17:35.100Z",
      "title": "Ergonomic",
      "author": "Michele Breitenberg",
      "likes": "766.57",
      "comments": "808.58",
      "time": "2025-08-20T12:27:08.559Z",
      "body": "New Chair model with 100 GB RAM, 715 GB storage, and fluffy features",
      "id": "90"
    },
    {
      "createdAt": "2025-08-20T17:31:57.936Z",
      "title": "Fresh",
      "author": "Mr. Harold MacGyver",
      "likes": "247.16",
      "comments": "821.08",
      "time": "2025-08-20T12:44:41.026Z",
      "body": "Introducing the United Kingdom-inspired Shoes, blending proper style with local craftsmanship",
      "id": "91"
    },
    {
      "createdAt": "2025-08-20T12:58:44.851Z",
      "title": "Sleek",
      "author": "Rudy Witting PhD",
      "likes": "859.01",
      "comments": "124.29",
      "time": "2025-08-21T08:29:06.600Z",
      "body": "New yellow Keyboard with ergonomic design for subtle comfort",
      "id": "92"
    },
    {
      "createdAt": "2025-08-21T05:39:58.567Z",
      "title": "Rustic",
      "author": "Paulette Hartmann",
      "likes": "339.08",
      "comments": "771.52",
      "time": "2025-08-21T02:49:27.067Z",
      "body": "The Open-source fresh-thinking software Hat offers reliable performance and possible design",
      "id": "93"
    },
    {
      "createdAt": "2025-08-20T23:24:08.266Z",
      "title": "Fantastic",
      "author": "Debra Leffler II",
      "likes": "731.03",
      "comments": "357.28",
      "time": "2025-08-21T04:47:50.062Z",
      "body": "New Fish model with 82 GB RAM, 561 GB storage, and firm features",
      "id": "94"
    },
    {
      "createdAt": "2025-08-20T22:25:53.438Z",
      "title": "Awesome",
      "author": "Hector Strosin-Watsica",
      "likes": "30.53",
      "comments": "895.87",
      "time": "2025-08-21T05:35:04.975Z",
      "body": "Professional-grade Chair perfect for wordy training and recreational use",
      "id": "95"
    },
    {
      "createdAt": "2025-08-21T00:09:11.434Z",
      "title": "Handcrafted",
      "author": "Saul Franecki",
      "likes": "407.49",
      "comments": "777.68",
      "time": "2025-08-20T17:06:25.242Z",
      "body": "Our wolf-friendly Gloves ensures outgoing comfort for your pets",
      "id": "96"
    },
    {
      "createdAt": "2025-08-20T14:07:45.711Z",
      "title": "Incredible",
      "author": "Anna Nikolaus",
      "likes": "881.46",
      "comments": "855.20",
      "time": "2025-08-21T00:26:47.832Z",
      "body": "New Mouse model with 26 GB RAM, 139 GB storage, and shadowy features",
      "id": "97"
    }
  ]


  export default posts;