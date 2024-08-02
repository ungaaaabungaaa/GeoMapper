// Constants
const GOOGLE_MAPS_API_KEY = 'AIzaSyCfYd6qnguPKWut9p4I8PQbx8reuvFBD5Q';

// Define the Outlets class
class Outlets {
    constructor(name, address, longitude, latitude) {
        this.name = name;
        this.address = address;
        this.longitude = parseFloat(longitude);
        this.latitude = parseFloat(latitude);
    }
}

// Create an empty array named 'stores' to store outlet information
let stores = [];

// Parse the JSON data and create Outlets objects
const jsonData = JSON.parse(`[
	{
	  "name": "Jayanagar",
	  "latLong": "12.929563604010069, 77.58177861551717",
	  "storeId": "AP7",
	  "phone": "9606450122",
	  "address": "Police Station, 140, 6th C Main Road, near Jayanagar, 4th Block, Jayanagar, Bengaluru, Karnataka 560011",
	  "pincode": "560011",
	  "pincodeList": ["560011","415112","508206","509126","560004","560027","560041","560070","560073","560074","560075","560077","560079","560086","560087","560088","560089","562122","577528"],
	  "longitude": "77.58177861551717",
	  "latitude": "12.929563604010069",
	  "email":"asha@ammaspastries.in",
	  "ownership":"own",
	  "account":"acc_ORlusI88rFniDn",
	  "status":"Enabled"
	},
	{
	  "name": "Sultan Palya",
	  "latLong": "13.028015713518391, 77.60430744064853",
	  "storeId": "AP27",
	  "phone": "9606450122",
	  "address": "4, JA HEIGHTS, 2nd Main Rd, 1st R Block, RT Nagar, Manorayana Palya, Hebbal, Bengaluru, Karnataka 560032",
	  "pincode": "560032",
	  "pincodeList": ["560032","416501","560045","560090","560093","560094","560095","577526","577556","582112","582208","585312","586213","587122","591120","591221","761028"],
	  "longitude": "77.60430744064853",
	  "latitude": "13.028015713518391",
	  "email":"asha@ammaspastries.in",
	  "ownership":"own",
	  "account":"acc_ORlusI88rFniDn",
	  "status":"Enabled"
	},
	{
	  "name": "Basavanagudi",
	  "latLong": "12.943936499283398, 77.57172638219492",
	  "storeId": "F1",
	  "phone": "9606450122",
	  "address": "no:26/3-12 Ground floor DVG ROAD, Bugle Rock Rd, near Reliance Trends, Roti Ghar, Gandhi Bazaar, Basavanagudi, Bengaluru, Karnataka 560004",
	  "pincode": "560004",
	  "pincodeList": ["560004","205262","415112","508206","509126","516101","518501","560004","560027","560041","560070","560073","560074","560075","560077","560079","560085"],
	  "longitude": "77.57172638219492",
	  "latitude": "12.943936499283398",
	  "email":"ammasbasavangudi@gmail.com",
	  "ownership":"own",
	  "account":"acc_ORjHUxNSqUylrq",
	  "status":"Enabled"
	},
	{
	  "name": "Koramangala",
	  "latLong": "12.936585080354442, 77.61477913359721",
	  "storeId": "AP21",
	  "phone": "9606450122",
	  "address": "352, 1st B MAIN RD, 20th Main Rd, 7th Block, Koramangala, Bengaluru, Karnataka 560095",
	  "pincode": "560095",
	  "pincodeList": ["560095","560027","560030","560032","560033","560034","560035","560036","560037","560038","560039","560068","560083","560086","560087","560088","560089","562122","563130","577528"],
	  "longitude": "77.61477913359721",
	  "latitude": "12.936585080354442",
	  "email":"asha@ammaspastries.in",
	  "ownership":"own",
	  "account":"acc_ORlusI88rFniDn",
	  "status":"Enabled"
	},
	{
	  "name": "TC Palya Rammurthy Nagar",
	  "latLong": "13.020603888831447, 77.67554124930325",
	  "storeId": "AP13",
	  "phone": "9606450122",
	  "address": "Ground Floor, 8, Thambu Chetty Palya Main Rd, opp. Koshy's Hospital, Kowdenahalli, Ramamurthy Nagar, Bengaluru, Karnataka 560016",
	  "pincode": "560016",
	  "pincodeList": ["560016","560043","560083","572201","572221","577123"],
	  "longitude": "77.67554124930325",
	  "latitude": "13.020603888831447",
	  "email":"asha@ammaspastries.in",
	  "ownership":"own",
	  "account":"acc_ORlusI88rFniDn",
	  "status":"Enabled"
	},
	{
	  "name": "Indira Nagar",
	  "latLong": "12.974411050183269, 77.63607956517114",
	  "storeId": "F2",
	  "phone": "9606450122",
	  "address": "60, Link Rd 4, Appareddy Palya, Stage 3, Indiranagar, Bengaluru, Karnataka 560038",
	  "pincode": "560038",
	  "pincodeList": ["560038","506132","515201","515202","515311","560071","562119","562131","573125"],
	  "longitude": "77.63607956517114",
	  "latitude": "12.974411050183269",
	  "email":"ybbrazorpay2022@gmail.com",
	  "ownership":"own",
	  "account":"acc_ORjK21ijT0UBKP",
	  "status":"Enabled"
	},
	{
	  "name": "Chalakudy",
	  "latLong": "10.5497175915274, 76.1430688",
	  "storeId": "KL9",
	  "phone": "9606450122",
	  "address": "Maliakkal Aracade building, Tramway Ln, Anamala Junction, Thrissur, Chalakudy, Kerala 680307",
	  "pincode": "680307",
	  "pincodeList": ["680307"],
	  "longitude": "76.1430688",
	  "latitude": "10.54971759",
	  "email":"asha@ammaspastries.in",
	  "ownership":"own",
	  "account":"acc_ORikqyPQNubvnS",
	  "status":"Enabled"
	},
	{
	  "name": "BTM Layout",
	  "latLong": "12.913559844790145, 77.60993504248722",
	  "storeId": "AP2",
	  "phone": "9606450122",
	  "address": "773, 16th Main Rd, near Udupi Garden, Mahadeshwara Nagar, BTM 2nd Stage, BTM Layout, Bengaluru, Karnataka 560076",
	  "pincode": "560076",
	  "pincodeList": ["560076","385340","560032","560033","560034","560035","560036","560037","560038","560039","560041","560068","560076","560083","560086","560087","560088","560089","562122","563130","571123","571425","577004","577528","585213","586206","586214"],
	  "longitude": "77.60993504248722",
	  "latitude": "12.913559844790145",
	  "email":"asha@ammaspastries.in",
	  "ownership":"own",
	  "account":"acc_ORlusI88rFniDn",
	  "status":"Enabled"
	},
	{
	  "name": "Thriprayar",
	  "latLong": "10.5497175915274, 76.1430688",
	  "storeId": "KL10",
	  "phone": "9606450122",
	  "address": "No. 10/710/B, V one Plaza, Temple Rd, Triprayar, Kerala 680566",
	  "pincode": "680566",
	  "pincodeList": ["680566"],
	  "longitude": "76.1430688",
	  "latitude": "10.54971759",
	  "email":"asha@ammaspastries.in",
	  "ownership":"own",
	  "account":"acc_ORikqyPQNubvnS",
	  "status":"Enabled"
	},
	{
	  "name": "Aluva",
	  "latLong": "10.0826222, 76.3492569",
	  "storeId": "KL12",
	  "phone": "9606450122",
	  "address": "NH544, Thaikkattukara, Choornikkara, Aluva, Kerala 683106",
	  "pincode": "683106",
	  "pincodeList": ["683106","683501","683502","683503","683520","683521","683522","683550","683556","683561","683562","683563","683565","683594"],
	  "longitude": "76.3492569",
	  "latitude": "10.0826222",
	  "email":"asha@ammaspastries.in",
	  "ownership":"own",
	  "account":"acc_ORikqyPQNubvnS",
	  "status":"Enabled"
	},
	{
	  "name": "Thubrahalli",
	  "latLong": "12.956239872423284, 77.71885374831375",
	  "storeId": "F14",
	  "phone": "9606450122",
	  "address": "Thubrahalli 164/2, Srinivasa Plaza, n, Varthur Main Rd, Kumarapalli, Thubarahalli, Whitefield, Bengaluru, Karnataka 560066",
	  "pincode": "560066",
	  "pincodeList": ["560066","385340","515201","515202","515311","560048","560066","560071","560103","562119","562123","562125","562131","563130","571415","573125","577004"],
	  "longitude": "77.71885374831375",
	  "latitude": "12.956239872423284",
	  "email":"cakesncookies619@gmail.com",
	  "ownership":"own",
	  "account":"acc_ORj8afUqL7kuZN",
	  "status":"Enabled"
	},
	{
	  "name": "Arekere",
	  "latLong": "12.88155786541669, 77.61012953797744",
	  "storeId": "AP1",
	  "phone": "9606450122",
	  "address": "2nd Phase, No 7 , Above Amma's Pastries, 1st Floor, 80ft Road, Sir M. Visvesvaraya Rd, opp. Nano Hospitals, 2nd Block, Hanuman Nagar, Hulimavu, Bengaluru, Karnataka 560076",
	  "pincode": "560076",
	  "pincodeList": ["560076","560068","560076","560083","562122","571109","571216","572130","573134","577217","577550","581204"],
	  "longitude": "77.61012953797744",
	  "latitude": "12.88155786541669",
	  "email":"asha@ammaspastries.in",
	  "ownership":"own",
	  "account":"acc_ORlusI88rFniDn",
	  "status":"Enabled"
	},
	{
	  "name": "Kothanur",
	  "latLong": "13.063749775193925, 77.649366258791",
	  "storeId": "AP8",
	  "phone": "9606450122",
	  "address": "Ground floor, Amma.s pastries No7.69/67, 33/3, Bagalur main Road, Kothanur Post, hennur gardens, Bengaluru, Karnataka 560077",
	  "pincode": "560077",
	  "pincodeList": ["560077","560045"],
	  "longitude": "77.649366258791",
	  "latitude": "13.063749775193925",
	  "email":"asha@ammaspastries.in",
	  "ownership":"own",
	  "account":"acc_ORlusI88rFniDn",
	  "status":"Enabled"
	},
	{
	  "name": "Thippasandra",
	  "latLong": "12.972865812375115, 77.64805983801612",
	  "storeId": "AP19",
	  "phone": "9606450122",
	  "address": "Ground Floor, 80/1, New Thippasandra Main Rd, Hal, HAL 3rd Stage, New Tippasandra, Bengaluru, Karnataka 560075",
	  "pincode": "560075",
	  "pincodeList": ["560075","515201","515202","515311","560071","562119","562131","573125"],
	  "longitude": "77.64805983801612",
	  "latitude": "12.972865812375115",
	  "email":"asha@ammaspastries.in",
	  "ownership":"own",
	  "account":"acc_ORlusI88rFniDn",
	  "status":"Enabled"
	},
	{
	  "name": "Kakkanad",
	  "latLong": "10.047943, 76.3695166999999",
	  "storeId": "KL2",
	  "phone": "9606450122",
	  "address": "1 – 3 , Ground floor, Flair Business Floors, Seaport - Airport Rd, near Sunrise Hospital, Thrikkakara, Edappally, Kochi, Kerala 682030",
	  "pincode": "682021",
	  "pincodeList": ["682021","516268","585414","637018","641032","682010","682011","682012","682013","682015","682016","682017","682018","682019","682020","682022","682023","682024","682025","682026","682027","682028","682029","682030","682031","682032","682033","682034","682035","682036","682037","682038","682039","682040","682041","682042","683101","683102","683104","683105","683106","683108","683110","683111","683112","683514","683572"],
	  "longitude": "76.3695167",
	  "latitude": "10.047943",
	  "email":"asha@ammaspastries.in",
	  "ownership":"own",
	  "account":"acc_ORikqyPQNubvnS",
	  "status":"Enabled"
	},
	{
	  "name": "RR NAGAR",
	  "latLong": "12.904774081683573, 77.51262982452278",
	  "storeId": "F13",
	  "phone": "9606450122",
	  "address": "Narayan Arcade, No: 12, 10th Stage, BEML Layout Srinivaspura, cross, Channasandra, Rajarajeshwari Nagar, Bengaluru, Karnataka 560098",
	  "pincode": "560098",
	  "pincodeList": ["560098","577589"],
	  "longitude": "77.51262982452278",
	  "latitude": "12.904774081683573",
	  "email":"ammasrrngr@gmail.com",
	  "ownership":"own",
	  "account":"acc_ORix25vyH9ghh5",
	  "status":"Enabled"
	},
	{
	  "name": "Bagalagunte",
	  "latLong": "13.058143474819934, 77.50735618112405",
	  "storeId": "F18",
	  "phone": "9606450122",
	  "address": "circle, No.3&7, Yousuf plaza, Ground flr, Hessaraghatta main road Bagalagunte, post, Mallasandra, T. Dasarahalli, Bengaluru, Karnataka 560057",
	  "pincode": "560057",
	  "pincodeList": ["560057","560013","584116"],
	  "longitude": "77.50735618112405",
	  "latitude": "13.058143474819934",
	  "email":"jensie.joakim@gmail.com",
	  "ownership":"own",
	  "account":"acc_ORjDBYUjGDdNoW",
	  "status":"Enabled"
	},
	{
	  "name": "Thanisandra",
	  "latLong": "13.056314547641625, 77.63082963986805",
	  "storeId": "AP17",
	  "phone": "9606450122",
	  "address": "216, Rachenahalli Main Rd, P&T Layout, Thanisandra, Bengaluru, Karnataka 560077",
	  "pincode": "560077",
	  "pincodeList": ["560077","560045"],
	  "longitude": "77.63082963986805",
	  "latitude": "13.056314547641625",
	  "email":"asha@ammaspastries.in",
	  "ownership":"own",
	  "account":"acc_ORlusI88rFniDn",
	  "status":"Enabled"
	},
	{
	  "name": "Ulsoor",
	  "latLong": "12.974485760167816, 77.63604063575615",
	  "storeId": "AP14",
	  "phone": "9606450122",
	  "address": "2, No. 34, nLandmaer :, Salma Bizhouse GF, 1-2, Meanee Ave Rd, opposite to HDFC Bank) , Halasuru, Bengaluru, Karnataka 560042",
	  "pincode": "560042",
	  "pincodeList": ["560042","506132","520007","560001","560046","577181"],
	  "longitude": "77.63604063575615",
	  "latitude": "12.974485760167816",
	  "email":"asha@ammaspastries.in",
	  "ownership":"own",
	  "account":"acc_ORlusI88rFniDn",
	  "status":"Enabled"
	},
	{
	  "name": "Srinagar",
	  "latLong": "12.941760175683012, 77.5567680515082",
	  "storeId": "F7",
	  "phone": "9606450122",
	  "address": "50ft Road, 13th Main, Banashankari 1st Stage, 2nd Block, Srinagar, Bengaluru, Karnataka 560050",
	  "pincode": "560050",
	  "pincodeList": ["560050","515271","516101","518501","560004","560085"],
	  "longitude": "77.5567680515082",
	  "latitude": "12.941760175683012",
	  "email":"sriniric@gmail.com",
	  "ownership":"own",
	  "account":"acc_ORizhOfyluHcPx",
	  "status":"Enabled"
	},
	{
	  "name": "RT Nagar",
	  "latLong": "13.02666800296936, 77.59342186281285",
	  "storeId": "AP11",
	  "phone": "9606450122",
	  "address": "No 10 Ground floor , CBI Main Road, 80 Feet Rd, HMT Layout, Post, RT Nagar, Bengaluru, Karnataka 560032",
	  "pincode": "560032",
	  "pincodeList": ["560032","416501","508207","560080","560090","560093","560094","560095","574154","577526","577556","582112","582208","585312","586213","587122","591120","591221","761028"],
	  "longitude": "77.59342186281285",
	  "latitude": "13.02666800296936",
	  "email":"asha@ammaspastries.in",
	  "ownership":"own",
	  "account":"acc_ORlusI88rFniDn",
	  "status":"Enabled"
	},
	{
	  "name": "MATHIKERE",
	  "latLong": "13.030246233828334, 77.5596611380168",
	  "storeId": "F4",
	  "phone": "9606450122",
	  "address": "2nd phase, No.10, 30/1, 1st Cross Rd, opp. New Sagar Hotel, Gokula 1st Stage, Mathikere, Bengaluru, Karnataka 560054",
	  "pincode": "560054",
	  "pincodeList": ["560054","508207","509105","521324","524002","534330","534331","534338","560003","560013","560050","560051","560053","560054","560055","560056","560057","560058","560059","562120","574238","577526","584116"],
	  "longitude": "77.5596611380168",
	  "latitude": "13.030246233828334",
	  "email":"mgpbakes2022@gmail.com",
	  "ownership":"own",
	  "account":"acc_ORiv7mmEOTzBzf",
	  "status":"Enabled"
	},
	{
	  "name": "Sahakar Nagar",
	  "latLong": "13.062608706734386, 77.59289016685308",
	  "storeId": "F6",
	  "phone": "9606450122",
	  "address": "SHOBHA ARCADE, 26, NH-7, near BIG MARKET, G Block, Sahakar Nagar, Byatarayanapura, Bengaluru, Karnataka 560092",
	  "pincode": "560092",
	  "pincodeList": ["560092","416501","560085","560091","560092","561203","577526","577556","582112","582208","585312","586213","587122","591120","591221"],
	  "longitude": "77.59289016685308",
	  "latitude": "13.062608706734386",
	  "email":"Febibiju@gmail.com",
	  "ownership":"own",
	  "account":"acc_ORiyU0IFEXJyqv",
	  "status":"Enabled"
	},
	{
	  "name": "Vijaynagar",
	  "latLong": "12.968379092992215, 77.53929144249301",
	  "storeId": "AP15",
	  "phone": "9606450122",
	  "address": "Ground Floor, 29, 1st Main Rd, SBI Staff Colony, Hoshalli Extension, Stage 1, Vijayanagar, Bengaluru, Karnataka 560040",
	  "pincode": "560040",
	  "pincodeList": ["560040","383460","496118","515271","560010","560023","562117","577182","591222","600049"],
	  "longitude": "77.53929144249301",
	  "latitude": "12.968379092992215",
	  "email":"asha@ammaspastries.in",
	  "ownership":"own",
	  "account":"acc_ORlusI88rFniDn",
	  "status":"Enabled"
	},
	{
	  "name": "HBR Layout",
	  "latLong": "13.021441795829567, 77.62885401534336",
	  "storeId": "AP4",
	  "phone": "9606450122",
	  "address": "Tuscun Signature 111/B, 80 फीट मेन मार्ग, opposite Rama Temple Complex, HBR Layout 1st Block, 1st Stage, Kalyan Nagar, Bengaluru, Karnataka 560043",
	  "pincode": "560043",
	  "pincodeList": ["560043","560045","560084"],
	  "longitude": "77.62885401534336",
	  "latitude": "13.021441795829567",
	  "email":"asha@ammaspastries.in",
	  "ownership":"own",
	  "account":"acc_ORlusI88rFniDn",
	  "status":"Enabled"
	},
	{
	  "name": "Perumbavoor",
	  "latLong": "10.1069503, 76.4736602",
	  "storeId": "KL4",
	  "phone": "9606450122",
	  "address": "Ground floor, Koikkara Towers, Perumbavoor Puthencruz Rd, opp. to भारतीय स्टेट बैंक, Perumbavoor, Kerala 683542",
	  "pincode": "683542",
	  "pincodeList": ["683542","683574","683580","683581","683585","683589","686665","686666","686667","686668","686669","688555","688582"],
	  "longitude": "76.4736602",
	  "latitude": "10.1069503",
	  "email":"asha@ammaspastries.in",
	  "ownership":"own",
	  "account":"acc_ORikqyPQNubvnS",
	  "status":"Enabled"
	},
	{
	  "name": "Padmanabha Nagar",
	  "latLong": "12.91592311695375, 77.55919643801536",
	  "storeId": "F12",
	  "phone": "9606450122",
	  "address": "MVS ARCADE No 9, Kadarenahalli Main Rd, RK Layout, Banashankari Stage II, Padmanabhanagar, Bengaluru, Karnataka 560070",
	  "pincode": "560070",
	  "pincodeList": ["560070","516101","518501","560070","560073","560074","560075","560077","560078","560079","560085"],
	  "longitude": "77.55919643801536",
	  "latitude": "12.91592311695375",
	  "email":"puneethv.04@gmail.com",
	  "ownership":"own",
	  "account":"acc_ORjFNyTUGERbxs",
	  "status":"Enabled"
	},
	{
	  "name": "Jayanagar New",
	  "latLong": "12.928968891777776, 77.58650437132461",
	  "storeId": "AP22",
	  "phone": "9606450122",
	  "address": "mezzanine floor, bhagya Lakshmi mansion, 12th Main Rd, 4th T Block East, 4th Block, Jayanagar, Bengaluru, Karnataka 560011",
	  "pincode": "560011",
	  "pincodeList": ["560011","560004","560027","560041","560070","560073","560074","560075","560076","560077","560079","560086","560087","560088","560089","562122","577528"],
	  "longitude": "77.58650437132461",
	  "latitude": "12.928968891777776",
	  "email":"asha@ammaspastries.in",
	  "ownership":"own",
	  "account":"acc_ORlusI88rFniDn",
	  "status":"Enabled"
	},
	{
	  "name": "HOSKOTE",
	  "latLong": "13.078764392565736, 77.78700058219674",
	  "storeId": "F15",
	  "phone": "9606450122",
	  "address": "Bus Stand, Kammavari Pete, Hoskote, Bengaluru, Karnataka 562129",
	  "pincode": "562129",
	  "pincodeList": ["562129","562114"],
	  "longitude": "77.78700058219674",
	  "latitude": "13.078764392565736",
	  "email":"aju4lis@gmail.com",
	  "ownership":"own",
	  "account":"acc_ORjBcdGKjtIaOD",
	  "status":"Enabled"
	},
	{
	  "name": "HSR Layout",
	  "latLong": "12.916077539450871, 77.63521507904612",
	  "storeId": "AP5",
	  "phone": "9606450122",
	  "address": "218, 9th Main Rd, near Lawrence High School Icse, Sector 6, HSR Layout, Bengaluru, Karnataka 560102",
	  "pincode": "560102",
	  "pincodeList": ["560102","385340","560034","560068","560083","562122","562125","563130","571123","571425","577004","585213","586206","586214","671124"],
	  "longitude": "77.63521507904612",
	  "latitude": "12.916077539450871",
	  "email":"asha@ammaspastries.in",
	  "ownership":"own",
	  "account":"acc_ORlusI88rFniDn",
	  "status":"Enabled"
	},
	{
	  "name": "Tilaknagar",
	  "latLong": "12.928710005716702, 77.60016705968306",
	  "storeId": "AP23",
	  "phone": "9606450122",
	  "address": "4, 30th Cross Rd, 4th Block, Jayanagar, Bengaluru, Karnataka 560041",
	  "pincode": "560041",
	  "pincodeList": ["560041","415112","508206","509126","560027","560030","560032","560033","560034","560035","560036","560037","560038","560039","560041","560068","560070","560073","560074","560075","560076","560077","560079","560083","560086","560087","560088","560089","562122","563130","577528"],
	  "longitude": "77.60016705968306",
	  "latitude": "12.928710005716702",
	  "email":"asha@ammaspastries.in",
	  "ownership":"own",
	  "account":"acc_ORlusI88rFniDn",
	  "status":"Enabled"
	},
	{
	  "name": "Banaswadi",
	  "latLong": "13.010238169645918, 77.64337061103157",
	  "storeId": "AP3",
	  "phone": "9606450122",
	  "address": "11, 7th Main 80 Feet Road, Subbayanapalya Shanthinagara, Banaswadi Bangalore:, 1, 7th Main Rd, HRBR Layout 1st Block, Chowdeswari Layout, Subbannayapalya, Banaswadi, Bengaluru, Karnataka 560043",
	  "pincode": "560043",
	  "pincodeList": ["560043","560084"],
	  "longitude": "77.64337061103157",
	  "latitude": "13.010238169645918",
	  "email":"asha@ammaspastries.in",
	  "ownership":"own",
	  "account":"acc_ORlusI88rFniDn",
	  "status":"Enabled"
	},
	{
	  "name": "Mosque Road",
	  "latLong": "12.997489664140351, 77.61472291366023",
	  "storeId": "AP18",
	  "phone": "9606450122",
	  "address": "90, Ground floor, Mosque Rd, opp. to KFC, Pulikeshi Nagar, Bengaluru, Karnataka 560005",
	  "pincode": "560006",
	  "pincodeList": ["560006","506132","520007","560001","560046","560090","560093","560094","560095","577181"],
	  "longitude": "77.61472291366023",
	  "latitude": "12.997489664140351",
	  "email":"asha@ammaspastries.in",
	  "ownership":"own",
	  "account":"acc_ORlusI88rFniDn",
	  "status":"Enabled"
	},
	{
	  "name": "Malleshwaram",
	  "latLong": "12.999571318789695, 77.57259809568816",
	  "storeId": "AP25",
	  "phone": "9606450122",
	  "address": "86, 8th Cross Rd, near Coconut Avenue Road, Yalappa Garden, Malleshwaram, Bengaluru, Karnataka 560003",
	  "pincode": "560003",
	  "pincodeList": ["560003","313705","458220","504293","509105","518411","518412","520007","521324","522601","531127","533251","533296","534330","534331","534338","560001","560003","560020","560021","560080","560085","560090","560093","560094","560095","562117","572225","574154","574227","574238","635107"],
	  "longitude": "77.57259809568816",
	  "latitude": "12.999571318789695",
	  "email":"asha@ammaspastries.in",
	  "ownership":"own",
	  "account":"acc_ORlusI88rFniDn",
	  "status":"Enabled"
	},
	{
	  "name": "JP NAGAR",
	  "latLong": "12.896015178523662, 77.58592763801515",
	  "storeId": "AP16",
	  "phone": "9606450122",
	  "address": "",
	  "pincode": "560078",
	  "pincodeList": ["560078","560076","560083","573134","577217"],
	  "longitude": "77.58592763801515",
	  "latitude": "12.896015178523662",
	  "email":"asha@ammaspastries.in",
	  "ownership":"own",
	  "account":"acc_ORlusI88rFniDn",
	  "status":"Enabled"
	},
	{
	  "name": "Kothamangalam",
	  "latLong": "10.0470332, 76.6123883999999",
	  "storeId": "KL6",
	  "phone": "9606450122",
	  "address": "Moonikattil Towers, Ground Floor, Building No. KMC XXXI/452A KOTHAMANGALAM Taluk Government Hospital, WARD, Aluva - Munnar Rd, opp. to HP Petrol Station, Thankalam, Karur, Kerala 686691",
	  "pincode": "686691",
	  "pincodeList": ["686691","683501","683502","683503","683520","683521","683522","683550","683556","683561","683562","683563","683565","683594"],
	  "longitude": "76.616066",
	  "latitude": "10.067631391368035",
	  "email":"asha@ammaspastries.in",
	  "ownership":"own",
	  "account":"acc_ORikqyPQNubvnS",
	  "status":"Enabled"
	},
	{
	  "name": "Thrissur",
	  "latLong": "10.4924777, 76.1986594999999",
	  "storeId": "KL5",
	  "phone": "9606450122",
	  "address": "G646+36R, Door No. I/375/35&37, City Gate Commercial complex Near Old Sithara Theatre, Thrissur-Kodungallur, Main Road, P.O, Koorkenchery, Thrissur, Kerala 680007",
	  "pincode": "680007",
	  "pincodeList": ["680007","421302","517643","603204","638151","680001","680306","680562"],
	  "longitude": "76.1986595",
	  "latitude": "10.4924777",
	  "email":"asha@ammaspastries.in",
	  "ownership":"own",
	  "account":"acc_ORikqyPQNubvnS",
	  "status":"Enabled"
	},
	{
	  "name": "Yelahanka",
	  "latLong": "13.102380890580918, 77.59894751341749",
	  "storeId": "F9",
	  "phone": "9606450122",
	  "address": "D.P. Nagappa, 1006, BB Rd, behind Apoorva Hospital, Nehru Nagar, Bengaluru, Karnataka 560064",
	  "pincode": "560064",
	  "pincodeList": ["560064","560064","560098","572123","573216","577528"],
	  "longitude": "77.59894751341749",
	  "latitude": "13.102380890580918",
	  "email":"deepakmadavandm@gmail.com",
	  "ownership":"own",
	  "account":"acc_ORjA8fVh0EfTjt",
	  "status":"Enabled"
	},
	{
	  "name": "Irijalakuda",
	  "latLong": "10.3365485, 76.2073525",
	  "storeId": "KL7",
	  "phone": "9606450122",
	  "address": "86W7+VVV, Irinjalakuda Main Rd, Irinjalakuda, Kerala 680121",
	  "pincode": "680121",
	  "pincodeList": ["680121","680562"],
	  "longitude": "76.2073525",
	  "latitude": "10.3365485",
	  "email":"asha@ammaspastries.in",
	  "ownership":"own",
	  "account":"acc_ORikqyPQNubvnS",
	  "status":"Enabled"
	},
	{
	  "name": "Govindapura Nagawara",
	  "latLong": "13.032339427235376, 77.62120273986774",
	  "storeId": "AP20",
	  "phone": "9606450122",
	  "address": "Govindapura Main Rd, Rashad Nagar, Govindapura, Nagavara, Bengaluru, Karnataka 560045",
	  "pincode": "560045",
	  "pincodeList": ["560045","761028"],
	  "longitude": "77.62120273986774",
	  "latitude": "13.032339427235376",
	  "email":"asha@ammaspastries.in",
	  "ownership":"own",
	  "account":"acc_ORlusI88rFniDn",
	  "status":"Enabled"
	},
	{
	  "name": "KNarayana Pura",
	  "latLong": "13.067478527705155, 77.63599072901113",
	  "storeId": "AP28",
	  "phone": "9606450122",
	  "address": "48, K Narayanapura Main Rd, Kaveri Nagar, Thanisandra, Bengaluru, Karnataka 560077",
	  "pincode": "560077",
	  "pincodeList": ["560077","560045","560085","560092","761028"],
	  "longitude": "77.63599072901113",
	  "latitude": "13.067478527705155",
	  "email":"asha@ammaspastries.in",
	  "ownership":"own",
	  "account":"acc_ORlusI88rFniDn",
	  "status":"Enabled"
	},
	{
	  "name": "Hoodi",
	  "latLong": "13.003832600173258, 77.71287821534337",
	  "storeId": "AP6",
	  "phone": "9606450122",
	  "address": "Site No. 39, Ground Floor, MSM Towers, Hoodi Main Rd, Surya Layout, Ayyappa Nagar, Krishnarajapuram, Bengaluru, Karnataka 560036",
	  "pincode": "560036",
	  "pincodeList": ["560036","560048"],
	  "longitude": "77.71287821534337",
	  "latitude": "13.003832600173258",
	  "email":"asha@ammaspastries.in",
	  "ownership":"own",
	  "account":"acc_ORlusI88rFniDn",
	  "status":"Enabled"
	},
	{
	  "name": "Kodakara",
	  "latLong": "10.370749138034776, 76.30276950577475",
	  "storeId": "KL13",
	  "phone": "9606450122",
	  "address": "WARD NO-14 ROOM NO -504, KOMBARAKARAN VARGHESE BUILDING, 506, Irinjalakuda Rd, Kodakara, Kerala 680684",
	  "pincode": "680684",
	  "pincodeList": ["680684","679335","680307"],
	  "longitude": "76.30276950577475",
	  "latitude": "10.370749138034776",
	  "email":"asha@ammaspastries.in",
	  "ownership":"own",
	  "account":"acc_ORikqyPQNubvnS",
	  "status":"Enabled"
	},
	{
	  "name": "Kalkere",
	  "latLong": "13.032684456699261, 77.66946398166678",
	  "storeId": "AP29",
	  "phone": "9606450122",
	  "address": "Ground Floor, Shop No. 15, 16 and 17 ,( Property ID 354 Kalkere Main Road, Opp: BPCL Petrol Bunk, Post, Horamavu, Bengaluru, Karnataka 560113",
	  "pincode": "560013",
	  "pincodeList": ["560083","572201","572221","577123"],
	  "longitude": "13.032684456699261",
	  "latitude": "77.66946398166678",
	  "email":"asha@ammaspastries.in",
	  "ownership":"own",
	  "account":"acc_ORlusI88rFniDn",
	  "status":"Enabled"
	},
	{
	  "name": "Peenya",
	  "latLong": "13.012230274331536, 77.50829728465828",
	  "storeId": "F19",
	  "phone": "9606450122",
	  "address": "No:39 & 40, Rajagopalnagar Main Rd, 2nd Stage, Peenya, Bengaluru, Karnataka 560058",
	  "pincode": "560058",
	  "pincodeList": [],
	  "longitude": "13.012230274331536",
	  "latitude": "77.50829728465828",
	  "email":"asha@ammaspastries.in",
	  "ownership":"own",
	  "account":"acc_ORlusI88rFniDn",
	  "status":"Enabled"
	}
  ]`);

// Push the outlet objects into the 'stores' array
stores = jsonData.map(data => new Outlets(data.name, data.address, data.longitude, data.latitude));

function createCard(store, index, distance = null) {
    return `
        <div class="card" id="card-${index}">
            <div class="div1">
                <h3>${store.name}</h3>
            </div>
            <div class="div2 flex_center">
                <h4>${store.address}</h4>
            </div>
            <div class="div3">
                <img src="Icon_Pack/copy-outline.svg" class="copy-icon" data-index="${index}">
            </div>
            <div class="div4">
                <h4>${distance ? `Distance: ${distance.toFixed(2)} km` : 'Distance: Calculate Distance Here'}</h4>
            </div>
        </div>
    `;
}

function showNotification(message, isError = false) {
    const snackbar = document.getElementById('snackbar');
    snackbar.textContent = message;
    snackbar.className = 'show' + (isError ? ' error' : '');
    if (isError) {
        snackbar.style.backgroundColor = '#ff0000';
        snackbar.style.color = 'white';
    } else {
        snackbar.style.backgroundColor = '#2dba4e';
        snackbar.style.color = 'white';
    }
    setTimeout(() => {
        snackbar.className = snackbar.className.replace('show', '');
    }, 3000);
}

function copyAddress(index) {
    const store = stores[index];
    const address = store.address;
    navigator.clipboard.writeText(address)
        .then(() => {
            showNotification('Copied: ' + address);
        })
        .catch(err => {
            console.error('Could not copy text: ' + err.message);
            showNotification('Could not copy text: ' + err.message, true);
        });
}

const cachedGeocoding = {};
let isGeocodingInProgress = false;

function handleEmptyField() {
    console.log('Search field is empty. Perform specific action here.');
}

async function geocodeAddress(address) {
    const geocodingUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${GOOGLE_MAPS_API_KEY}`;

    try {
        if (cachedGeocoding[address]) {
            fillCards(cachedGeocoding[address].latitude, cachedGeocoding[address].longitude);
            return;
        }

        const response = await fetch(geocodingUrl);
        const data = await response.json();

        if (data.status === 'OK' && data.results.length > 0) {
            const location = data.results[0].geometry.location;
            const latitude = location.lat;
            const longitude = location.lng;
            cachedGeocoding[address] = { latitude, longitude };
            fillCards(latitude, longitude);
            console.log('Latitude:', latitude, 'Longitude:', longitude);
        } else {
            console.error('No results found for the provided address. Status:', data.status);
            showNotification('No results found for the provided address.', true);
        }
    } catch (error) {
        console.error('Error fetching geocoding data:', error);
        showNotification(`Error fetching geocoding data: ${error.message}`, true);
    }
}

function fillCards(latitude, longitude) {
    const h2Element = document.getElementById('Lat_long_disp');
    h2Element.innerText = 'Latitude & Longitude: ' + latitude + ' , ' + longitude;
    const listSection = document.querySelector('.List_section');
    listSection.innerHTML = '';
    stores.forEach(store => {
        const distance = calculateDistance(latitude, longitude, store.latitude, store.longitude);
        store.distance = distance;
    });

    stores.sort((a, b) => a.distance - b.distance);

    stores.forEach((store, index) => {
        const cardHTML = createCard(store, index, store.distance);
        listSection.innerHTML += cardHTML;
    });

    const copyIcons = document.querySelectorAll('.copy-icon');
    copyIcons.forEach(icon => {
        icon.addEventListener('click', function () {
            const index = this.getAttribute('data-index');
            copyAddress(index);
        });
    });
}

function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the earth in km
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return distance;
}

const copySearchIcon = document.getElementById('copySearchIcon');
if (copySearchIcon) {
    copySearchIcon.addEventListener('click', copyTextFromSearchBar);
}

function copyTextFromSearchBar() {
    const addressInput = document.getElementById('addressInput');
    const textToCopy = addressInput.value;
    if (textToCopy) {
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                showNotification('Copied: ' + textToCopy);
            })
            .catch(err => {
                showNotification('Could not copy text: ' + err.message, true);
            });
    }
}

const githubIcon = document.getElementById('githubIcon');
if (githubIcon) {
    githubIcon.onclick = function () {
        window.location.href = 'https://github.com/theheld';
    };
}

function disableGeoMapButton() {
    const geoMapButton = document.getElementById('geoMapButton');
    geoMapButton.disabled = true;
}

function enableGeoMapButton() {
    const geoMapButton = document.getElementById('geoMapButton');
    geoMapButton.disabled = false;
}

document.getElementById('geoMapButton').addEventListener('click', async function () {
    const address = document.getElementById('addressInput').value.trim();

    if (!address) {
        handleEmptyField();
        return;
    }

    if (isGeocodingInProgress) {
        return;
    }

    isGeocodingInProgress = true;
    disableGeoMapButton();

    try {
        await geocodeAddress(address);
        showNotification('Geocoding successful!');
    } catch (error) {
        console.error('Error during geocoding:', error);
        showNotification('Geocoding failed. Please try again.', true);
    } finally {
        isGeocodingInProgress = false;
        enableGeoMapButton();
    }
});

document.addEventListener("DOMContentLoaded", function () {
    var settingIcon = document.getElementById('Setting_Icon');
    settingIcon.addEventListener('click', function () {
        window.location.href = 'setting.html';
    });
});
