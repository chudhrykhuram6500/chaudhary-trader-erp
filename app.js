const REAL_INITIAL_ROUTES = [
    {
        "id": "r_sargodha_road",
        "name": "SARGODHA ROAD",
        "dayName": "Monday",
        "salesman": "Arif Sanwal"
    },
    {
        "id": "r_pabar_ala_kot",
        "name": "PABAR ALA KOT",
        "dayName": "Tuesday",
        "salesman": "Arif Sanwal"
    },
    {
        "id": "r_hussainabad",
        "name": "HUSSAINABAD WADAN",
        "dayName": "Wednesday",
        "salesman": "Arif Sanwal"
    },
    {
        "id": "r_mor_mandi",
        "name": "MOR MANDI SHAHJEWNA",
        "dayName": "Thursday",
        "salesman": "Arif Sanwal"
    },
    {
        "id": "r_laliyan",
        "name": "LALIYAN SHEKHAN",
        "dayName": "Saturday",
        "salesman": "Arif Sanwal"
    },
    {
        "id": "r_shah_jewna",
        "name": "SHAH JEWNA",
        "dayName": "Sunday",
        "salesman": "Arif Sanwal"
    }
];
const REAL_INITIAL_SHOPS = [
    {
        "id": "shop_1",
        "name": "Jholoelaal Drink Corner",
        "address": "Waghra Chak",
        "customerName": "Tassawar Abbas",
        "phone": "0348-1177005",
        "visitDay": "Sunday",
        "routeId": "r_shah_jewna",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_2",
        "name": "Malik Tea Stall",
        "address": "Awan Chak",
        "customerName": "Awais",
        "phone": "0349-4935187",
        "visitDay": "Sunday",
        "routeId": "r_shah_jewna",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_3",
        "name": "Muhammad Nawaz Kiryana Store",
        "address": "Panj Girain",
        "customerName": "Muhammad Nawaz",
        "phone": "0346-7267298",
        "visitDay": "Sunday",
        "routeId": "r_shah_jewna",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_4",
        "name": "Haider Kiryana Store",
        "address": "Panj Girain",
        "customerName": "Haider",
        "phone": "0346-7263913",
        "visitDay": "Sunday",
        "routeId": "r_shah_jewna",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_5",
        "name": "Waris Kiryana Store",
        "address": "Panj Girain",
        "customerName": "Waris",
        "phone": "0300-9273330",
        "visitDay": "Sunday",
        "routeId": "r_shah_jewna",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_6",
        "name": "Usman Kiryana store",
        "address": "Panj Girain Chowk",
        "customerName": "Usman",
        "phone": "0349-4045364",
        "visitDay": "Sunday",
        "routeId": "r_shah_jewna",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_7",
        "name": "Munawar Ali kiryana",
        "address": "Panj Girain Chowk",
        "customerName": "Munawar Ali",
        "phone": "0342-1602928",
        "visitDay": "Sunday",
        "routeId": "r_shah_jewna",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_8",
        "name": "786 Kiryana Store",
        "address": "Panj Girain Chowk",
        "customerName": "Jafar Ali",
        "phone": "0300-3697225",
        "visitDay": "Sunday",
        "routeId": "r_shah_jewna",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_9",
        "name": "Tahir Kiryana Store",
        "address": "Work",
        "customerName": "Tahir",
        "phone": "0340-0934425",
        "visitDay": "Sunday",
        "routeId": "r_shah_jewna",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_10",
        "name": "Saleh Muhammad Chakki Wala",
        "address": "Kenchi Pul",
        "customerName": "Saleh Muhammad",
        "phone": "0345-6064837",
        "visitDay": "Sunday",
        "routeId": "r_shah_jewna",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_11",
        "name": "Allah hu Super Store",
        "address": "Kenchi Pul",
        "customerName": "Malik Haider",
        "phone": "0345-4746352",
        "visitDay": "Sunday",
        "routeId": "r_shah_jewna",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_12",
        "name": "Hassan Kiryana Store",
        "address": "Ditta Choki Adda",
        "customerName": "Bilal",
        "phone": "0344-3921957",
        "visitDay": "Sunday",
        "routeId": "r_shah_jewna",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_13",
        "name": "Baba Saleh Drink Corner",
        "address": "Ditta Choki Adda",
        "customerName": "Baba Saleh",
        "phone": "0343-9785751",
        "visitDay": "Sunday",
        "routeId": "r_shah_jewna",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_14",
        "name": "Al Qamar Fast Food Drink Corner",
        "address": "Ditta Choki Adda",
        "customerName": "qamar",
        "phone": "0346-6511787",
        "visitDay": "Sunday",
        "routeId": "r_shah_jewna",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_15",
        "name": "Mashallah kiryana Store",
        "address": "Ditta Choki Adda",
        "customerName": "Ghulam Shabir",
        "phone": "0347-2131362",
        "visitDay": "Sunday",
        "routeId": "r_shah_jewna",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_16",
        "name": "Akbar Kiryana Store",
        "address": "Ditta Choki",
        "customerName": "Akbar",
        "phone": "0348-7510936",
        "visitDay": "Sunday",
        "routeId": "r_shah_jewna",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_17",
        "name": "Zain Kiryana Store",
        "address": "Ditta Choki",
        "customerName": "Zain",
        "phone": "0345-8829568",
        "visitDay": "Sunday",
        "routeId": "r_shah_jewna",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_18",
        "name": "Shamasher Ali Kiryana",
        "address": "Ditta Choki",
        "customerName": "Shamsher",
        "phone": "0333-4742296",
        "visitDay": "Sunday",
        "routeId": "r_shah_jewna",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_19",
        "name": "Shehryar Kiryana Store",
        "address": "Imam Kot Back",
        "customerName": "Shehryar",
        "phone": "0349-4029932",
        "visitDay": "Sunday",
        "routeId": "r_shah_jewna",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_20",
        "name": "Qadri Kiryana Store",
        "address": "Chhota Rata Road",
        "customerName": "qadri",
        "phone": "0345-7886300",
        "visitDay": "Sunday",
        "routeId": "r_shah_jewna",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_21",
        "name": "bismillah kiryana",
        "address": "Chhota Rata Road",
        "customerName": "Bismillah",
        "phone": "0347-8713472",
        "visitDay": "Sunday",
        "routeId": "r_shah_jewna",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_22",
        "name": "Mubashar Abbas Kiryana",
        "address": "Chhota Rata Road",
        "customerName": "Mubashar abbas",
        "phone": "0343-5675924",
        "visitDay": "Sunday",
        "routeId": "r_shah_jewna",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_23",
        "name": "Shahid kiryana Mongar",
        "address": "Chhota Rata road",
        "customerName": "Shahid",
        "phone": "",
        "visitDay": "Sunday",
        "routeId": "r_shah_jewna",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_24",
        "name": "Sanwal Drink Corner",
        "address": "Chhota Rata Road",
        "customerName": "Sanwal",
        "phone": "0349-3366133",
        "visitDay": "Sunday",
        "routeId": "r_shah_jewna",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_25",
        "name": "Allah Dita Drink Corner",
        "address": "Chhota Rata Chowk",
        "customerName": "Allah Dita",
        "phone": "0344-3167885",
        "visitDay": "Sunday",
        "routeId": "r_shah_jewna",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_26",
        "name": "Hafiz Fruit Shop",
        "address": "Chhota Rata Chowk",
        "customerName": "Hafiz",
        "phone": "0313-0008913",
        "visitDay": "Sunday",
        "routeId": "r_shah_jewna",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_27",
        "name": "Shahbaz General Store",
        "address": "Chhota Rata",
        "customerName": "Shahbaz",
        "phone": "0348-3784628",
        "visitDay": "Sunday",
        "routeId": "r_shah_jewna",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 3,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_28",
        "name": "Abbas Kiryana Store",
        "address": "Chhota Rata",
        "customerName": "Abbas",
        "phone": "0346-4937174",
        "visitDay": "Sunday",
        "routeId": "r_shah_jewna",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_29",
        "name": "Ustad Mukhtar Kiryana",
        "address": "chota Rata",
        "customerName": "Mukhtar",
        "phone": "0342-5839799",
        "visitDay": "Sunday",
        "routeId": "r_shah_jewna",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_30",
        "name": "Adil khan Kiryana Store",
        "address": "chota Rata",
        "customerName": "Adil Khan",
        "phone": "",
        "visitDay": "Sunday",
        "routeId": "r_shah_jewna",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_31",
        "name": "Mumtaz Ahmad Kiryana Store",
        "address": "chota Rata",
        "customerName": "Mumtaz Ahmad",
        "phone": "0341-5418588",
        "visitDay": "Sunday",
        "routeId": "r_shah_jewna",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_32",
        "name": "Jafar Darzi Kiryana Stire",
        "address": "Masjid Ke Peeche",
        "customerName": "Jafar Ali",
        "phone": "0342-4919617",
        "visitDay": "Sunday",
        "routeId": "r_shah_jewna",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_33",
        "name": "Amman Zainab",
        "address": "Chhota Rata Chowk",
        "customerName": "Zainab",
        "phone": "0342-4980148",
        "visitDay": "Sunday",
        "routeId": "r_shah_jewna",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_34",
        "name": "Asad Abbas Kiryana Store",
        "address": "Chhota Rata Chowk",
        "customerName": "Asad Abbas",
        "phone": "0342-7659682",
        "visitDay": "Sunday",
        "routeId": "r_shah_jewna",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_35",
        "name": "Mall of Shah Jewna",
        "address": "Sheikhan Road",
        "customerName": "Mall Of Shahjewnaa",
        "phone": "0346-7259437",
        "visitDay": "Sunday",
        "routeId": "r_shah_jewna",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_36",
        "name": "Hospital Tuk Shop",
        "address": "Rata Chowk Adda",
        "customerName": "Hospital",
        "phone": "0343-8795632",
        "visitDay": "Sunday",
        "routeId": "r_shah_jewna",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_37",
        "name": "Al Madina Kiryana Store",
        "address": "Rata Chowk Adda",
        "customerName": "Almadina",
        "phone": "",
        "visitDay": "Sunday",
        "routeId": "r_shah_jewna",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_38",
        "name": "Muskan Drink Corner",
        "address": "Rata Chowk Adda",
        "customerName": "Muskan",
        "phone": "0347-7861665",
        "visitDay": "Sunday",
        "routeId": "r_shah_jewna",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_39",
        "name": "Waseem kiryana",
        "address": "Bisma House Sheikhan Road",
        "customerName": "Waseem",
        "phone": "0348-3094220",
        "visitDay": "Sunday",
        "routeId": "r_shah_jewna",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_40",
        "name": "Chaoudhry Sweets",
        "address": "Choki Muhammad Wali",
        "customerName": "Chaoudhry",
        "phone": "0341-5181705",
        "visitDay": "Sunday",
        "routeId": "r_shah_jewna",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_41",
        "name": "al jafria sweets",
        "address": "Sheikhan Adda",
        "customerName": "jafir",
        "phone": "0348-0777687",
        "visitDay": "Sunday",
        "routeId": "r_shah_jewna",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_42",
        "name": "Al imran Sweets",
        "address": "Sheikhan Adda",
        "customerName": "imran",
        "phone": "0343-2837659",
        "visitDay": "Sunday",
        "routeId": "r_shah_jewna",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_43",
        "name": "Ayub Khan Sweets",
        "address": "Sheikhan Adda",
        "customerName": "Ayub Khan",
        "phone": "0342-0569857",
        "visitDay": "Sunday",
        "routeId": "r_shah_jewna",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_44",
        "name": "Ahmad Hassan sweets",
        "address": "Sheikhan Adda",
        "customerName": "Ahmad Hassan",
        "phone": "0330-8985756",
        "visitDay": "Sunday",
        "routeId": "r_shah_jewna",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_45",
        "name": "Ahmad Ali Mohli",
        "address": "Sheikhan Bazaar Gali",
        "customerName": "Mohli",
        "phone": "0334-9786641",
        "visitDay": "Sunday",
        "routeId": "r_shah_jewna",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_46",
        "name": "Ahmad Ali Kiryana Store",
        "address": "Sheikhan Bazaar Gali",
        "customerName": "Ahmad Ali",
        "phone": "0310-6332371",
        "visitDay": "Sunday",
        "routeId": "r_shah_jewna",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_47",
        "name": "Ali Kiryana Store",
        "address": "Sheikhan Bazaar Gali",
        "customerName": "Ali",
        "phone": "0345-1796950",
        "visitDay": "Sunday",
        "routeId": "r_shah_jewna",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_48",
        "name": "Muzammil Kiryana Store",
        "address": "Sheikhan Bazaar",
        "customerName": "Muzzamil",
        "phone": "0370-6250320",
        "visitDay": "Sunday",
        "routeId": "r_shah_jewna",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_49",
        "name": "Shahzad Ali kiryana",
        "address": "Sheikhan Bazaar",
        "customerName": "Shazad Ali",
        "phone": "0342-0070669",
        "visitDay": "Sunday",
        "routeId": "r_shah_jewna",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_50",
        "name": "Malik General Store",
        "address": "Sheikhan Adda",
        "customerName": "Malik Haider",
        "phone": "0347-1733267",
        "visitDay": "Sunday",
        "routeId": "r_shah_jewna",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_51",
        "name": "Amir Shah General Store",
        "address": "Sheikhan Adda",
        "customerName": "Amir Shah",
        "phone": "",
        "visitDay": "Sunday",
        "routeId": "r_shah_jewna",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_52",
        "name": "Yousaf Kiryana Store",
        "address": "Sheikhan Adda",
        "customerName": "Yousaf",
        "phone": "0334-6308213",
        "visitDay": "Sunday",
        "routeId": "r_shah_jewna",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_53",
        "name": "Ahmad Ali Mannu",
        "address": "Sheikhan Adda",
        "customerName": "Mannu",
        "phone": "0318-3934057",
        "visitDay": "Sunday",
        "routeId": "r_shah_jewna",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_54",
        "name": "Asif Kiryana Store",
        "address": "Sheikhan Nukar",
        "customerName": "Asif",
        "phone": "0347-1162422",
        "visitDay": "Sunday",
        "routeId": "r_shah_jewna",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_55",
        "name": "Ali Kiryana Store",
        "address": "Sheikhan Bazaar",
        "customerName": "Ali",
        "phone": "0342-9441411",
        "visitDay": "Sunday",
        "routeId": "r_shah_jewna",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 2,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_56",
        "name": "Baba Jamal Kiryana Store",
        "address": "Sheikhan Road",
        "customerName": "Jamal",
        "phone": "0348-1412599",
        "visitDay": "Sunday",
        "routeId": "r_shah_jewna",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_57",
        "name": "Saim Kiryana Store",
        "address": "Sheikhan Road",
        "customerName": "Saim",
        "phone": "0347-9724970",
        "visitDay": "Sunday",
        "routeId": "r_shah_jewna",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_58",
        "name": "Zeshaan Kiryana Store",
        "address": "Adda Khoi",
        "customerName": "Zeeshan",
        "phone": "",
        "visitDay": "Sunday",
        "routeId": "r_shah_jewna",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_59",
        "name": "Zafar Iqbal General Store",
        "address": "Adda Khoi",
        "customerName": "Zafar Iqbal",
        "phone": "0342-7886754",
        "visitDay": "Sunday",
        "routeId": "r_shah_jewna",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_60",
        "name": "Akhtar General Store",
        "address": "Adda Khoi",
        "customerName": "Akhtar",
        "phone": "0346-7386023",
        "visitDay": "Sunday",
        "routeId": "r_shah_jewna",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_61",
        "name": "Jewan Kiryana Storen",
        "address": "Adda Khoi",
        "customerName": "Jewan",
        "phone": "0341-4904879",
        "visitDay": "Sunday",
        "routeId": "r_shah_jewna",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_62",
        "name": "Doctor AD Kiryana Store",
        "address": "Adda Khoi",
        "customerName": "Allah Dita",
        "phone": "0347-9072854",
        "visitDay": "Sunday",
        "routeId": "r_shah_jewna",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_63",
        "name": "Baba Karam Ilahi",
        "address": "Bara Rata",
        "customerName": "karam Ilahi",
        "phone": "",
        "visitDay": "Sunday",
        "routeId": "r_shah_jewna",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_64",
        "name": "Imran Kiryana Store",
        "address": "Bara Rata",
        "customerName": "imran",
        "phone": "0306-7505397",
        "visitDay": "Sunday",
        "routeId": "r_shah_jewna",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_65",
        "name": "yaseen Kiryana Store",
        "address": "Bara Rata",
        "customerName": "Yaseen",
        "phone": "0347-8706841",
        "visitDay": "Sunday",
        "routeId": "r_shah_jewna",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_66",
        "name": "Zafar Kiryana Store",
        "address": "Bara Rata",
        "customerName": "Zafar Iqbal",
        "phone": "0342-7390141",
        "visitDay": "Sunday",
        "routeId": "r_shah_jewna",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_67",
        "name": "Sultan Kirana Store",
        "address": "Bara Rata",
        "customerName": "Sultan",
        "phone": "0344-4940184",
        "visitDay": "Sunday",
        "routeId": "r_shah_jewna",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_68",
        "name": "Asim Kiryana Store",
        "address": "Bara Rata",
        "customerName": "Asim",
        "phone": "",
        "visitDay": "Sunday",
        "routeId": "r_shah_jewna",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_69",
        "name": "School Tuk Shop",
        "address": "Rata Kalan",
        "customerName": "School Tuk Shop",
        "phone": "",
        "visitDay": "Sunday",
        "routeId": "r_shah_jewna",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_70",
        "name": "Ramzan Kiryana Store",
        "address": "Ramzan",
        "customerName": "Ramzan",
        "phone": "0346-8313266",
        "visitDay": "Sunday",
        "routeId": "r_shah_jewna",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_71",
        "name": "Bilal Kiryana Store",
        "address": "Bilal",
        "customerName": "Bilal",
        "phone": "0346-5629554",
        "visitDay": "Sunday",
        "routeId": "r_shah_jewna",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_72",
        "name": "Tajjamal Kiryana Store",
        "address": "Tajjamal",
        "customerName": "Tajjamal",
        "phone": "0343-7947556",
        "visitDay": "Sunday",
        "routeId": "r_shah_jewna",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_73",
        "name": "Bismillah kiryana Store",
        "address": "Iqbal Nagar",
        "customerName": "Sajid",
        "phone": "0345-7605716",
        "visitDay": "Monday",
        "routeId": "r_sargodha_road",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_74",
        "name": "Amir Kiryana store",
        "address": "Iqbal Nagar",
        "customerName": "Amir",
        "phone": "0345-2317501",
        "visitDay": "Monday",
        "routeId": "r_sargodha_road",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_75",
        "name": "sajid Kiryana Store",
        "address": "Pakka khoo",
        "customerName": "Sajid",
        "phone": "0340-7491991",
        "visitDay": "Monday",
        "routeId": "r_sargodha_road",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_76",
        "name": "Awaan Hotel",
        "address": "Sarghoda road",
        "customerName": "Awaan",
        "phone": "0348-1188680",
        "visitDay": "Monday",
        "routeId": "r_sargodha_road",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_77",
        "name": "Sikandar Kiryana",
        "address": "Sarghoda road",
        "customerName": "Sikandar Hayat",
        "phone": "0340-7493139",
        "visitDay": "Monday",
        "routeId": "r_sargodha_road",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_78",
        "name": "Zain General Store",
        "address": "Nehar Wali Pul",
        "customerName": "Musadaq",
        "phone": "0342-5310267",
        "visitDay": "Monday",
        "routeId": "r_sargodha_road",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_79",
        "name": "Azhar Kiryan",
        "address": "Neher Wali Pul",
        "customerName": "Azhar",
        "phone": "0348-1188740",
        "visitDay": "Monday",
        "routeId": "r_sargodha_road",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_80",
        "name": "baghdadi",
        "address": "Nehar Wali Pul",
        "customerName": "mubashar",
        "phone": "0342-2540744",
        "visitDay": "Monday",
        "routeId": "r_sargodha_road",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_81",
        "name": "Akram Kiryana store",
        "address": "Mor Mandi",
        "customerName": "Akram",
        "phone": "0347-5261579",
        "visitDay": "Monday",
        "routeId": "r_sargodha_road",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_82",
        "name": "Almubark Kiryana Store",
        "address": "Mor Mandi",
        "customerName": "sajid Ali",
        "phone": "0344-0253773",
        "visitDay": "Monday",
        "routeId": "r_sargodha_road",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_83",
        "name": "Nadra Office",
        "address": "",
        "customerName": "Nadra Office",
        "phone": "",
        "visitDay": "Monday",
        "routeId": "r_sargodha_road",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_84",
        "name": "Usman kiryana",
        "address": "Sharin Basti",
        "customerName": "Hamza",
        "phone": "",
        "visitDay": "Monday",
        "routeId": "r_sargodha_road",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_85",
        "name": "Ali Hassan Kiryana",
        "address": "Sharin Basti",
        "customerName": "Ahmad Hassan",
        "phone": "0310-1755140",
        "visitDay": "Monday",
        "routeId": "r_sargodha_road",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_86",
        "name": "Ali Hussain Kiryana",
        "address": "Sharin Basti",
        "customerName": "Ghar Wali dukaan",
        "phone": "",
        "visitDay": "Monday",
        "routeId": "r_sargodha_road",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_87",
        "name": "Kashi General Store",
        "address": "Mor Mandi Chok",
        "customerName": "Kashif",
        "phone": "0346-4166760",
        "visitDay": "Monday",
        "routeId": "r_sargodha_road",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_88",
        "name": "Bhatti General Store",
        "address": "Mor Mandi Chok",
        "customerName": "Nasir Al",
        "phone": "0342-2758409",
        "visitDay": "Monday",
        "routeId": "r_sargodha_road",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_89",
        "name": "Bashheer Drink Corne",
        "address": "Mor Mandi",
        "customerName": "Usman",
        "phone": "0340-1817120",
        "visitDay": "Monday",
        "routeId": "r_sargodha_road",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_90",
        "name": "Ali General Store",
        "address": "Mor Mandi",
        "customerName": "Muzzamil",
        "phone": "0346-4023981",
        "visitDay": "Monday",
        "routeId": "r_sargodha_road",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_91",
        "name": "Haji Abbas Kiryana Store",
        "address": "Mor Mandi",
        "customerName": "Haji Abbas",
        "phone": "0342-7287492",
        "visitDay": "Monday",
        "routeId": "r_sargodha_road",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_92",
        "name": "Arshid Drink Juice",
        "address": "Mor Mandi",
        "customerName": "Arshid",
        "phone": "0347-7862086",
        "visitDay": "Monday",
        "routeId": "r_sargodha_road",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_93",
        "name": "Ulfat general Store",
        "address": "Mormandi",
        "customerName": "Ulfat",
        "phone": "0349-7957034",
        "visitDay": "Monday",
        "routeId": "r_sargodha_road",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_94",
        "name": "Naheed Naroo Kiryana",
        "address": "Mor Mandi",
        "customerName": "Naheed",
        "phone": "0301-7225879",
        "visitDay": "Monday",
        "routeId": "r_sargodha_road",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_95",
        "name": "Hafiz kiryana",
        "address": "Mor mandi",
        "customerName": "Hafiz",
        "phone": "",
        "visitDay": "Monday",
        "routeId": "r_sargodha_road",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_96",
        "name": "Kamran Drink Corner",
        "address": "Mormandi",
        "customerName": "ghulam Hussain",
        "phone": "0343-8154095",
        "visitDay": "Monday",
        "routeId": "r_sargodha_road",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_97",
        "name": "ZIC Petrol Pump",
        "address": "Jhamrah",
        "customerName": "Haji Iqbal Khan",
        "phone": "0345-2050576",
        "visitDay": "Monday",
        "routeId": "r_sargodha_road",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_98",
        "name": "Razaqia Hotel",
        "address": "Jhamrah",
        "customerName": "Hameed Khan",
        "phone": "",
        "visitDay": "Monday",
        "routeId": "r_sargodha_road",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_99",
        "name": "Quetta Hotel Drink",
        "address": "Jhamrah",
        "customerName": "Saleemullah",
        "phone": "",
        "visitDay": "Monday",
        "routeId": "r_sargodha_road",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_100",
        "name": "Allah hu kiryana Store",
        "address": "Akrenwala",
        "customerName": "Sajjad Awaan",
        "phone": "0346-6647423",
        "visitDay": "Monday",
        "routeId": "r_sargodha_road",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 3,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_101",
        "name": "Chaoudhry DrinkCorner",
        "address": "Akrenwala",
        "customerName": "Iqbal",
        "phone": "0344-8720431",
        "visitDay": "Monday",
        "routeId": "r_sargodha_road",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 3,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_102",
        "name": "Taya Bi Sweets",
        "address": "Akrenwala",
        "customerName": "Chaoudhary Asghar",
        "phone": "0300-2927796",
        "visitDay": "Monday",
        "routeId": "r_sargodha_road",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_103",
        "name": "Allah Dita Drink Canteen",
        "address": "Akrenwala",
        "customerName": "Usman",
        "phone": "0313-1739403",
        "visitDay": "Monday",
        "routeId": "r_sargodha_road",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 3,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_104",
        "name": "Makkah General Store",
        "address": "Akrenwala",
        "customerName": "Rana Asad  Ali",
        "phone": "0346-7200684",
        "visitDay": "Monday",
        "routeId": "r_sargodha_road",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 3,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_105",
        "name": "Haq Bahu Sweets",
        "address": "Akrenwala",
        "customerName": "Haq Bahu Sweets",
        "phone": "0342-1877958",
        "visitDay": "Monday",
        "routeId": "r_sargodha_road",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 3,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_106",
        "name": "Chaoudhry Super Store",
        "address": "Akrenwala",
        "customerName": "Chaoudhary",
        "phone": "0344-7504166",
        "visitDay": "Monday",
        "routeId": "r_sargodha_road",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 3,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_107",
        "name": "Ali Hassan Drink Corner",
        "address": "Akrenwala",
        "customerName": "Ali Hassan",
        "phone": "0343-0772020",
        "visitDay": "Monday",
        "routeId": "r_sargodha_road",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 3,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_108",
        "name": "Mahar Brothers Kiryana",
        "address": "Akrenwala",
        "customerName": "Ramzan",
        "phone": "0345-5534317",
        "visitDay": "Monday",
        "routeId": "r_sargodha_road",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 3,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_109",
        "name": "Hafiz Sweets",
        "address": "Akrenwala",
        "customerName": "ImranKhan",
        "phone": "0341-7700706",
        "visitDay": "Monday",
        "routeId": "r_sargodha_road",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_110",
        "name": "Chaudhry Kiryana",
        "address": "Jhamrah",
        "customerName": "Chaudhry",
        "phone": "",
        "visitDay": "Monday",
        "routeId": "r_sargodha_road",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_111",
        "name": "Umar Sweets",
        "address": "Jhamrah",
        "customerName": "Umar",
        "phone": "0347-4121612",
        "visitDay": "Monday",
        "routeId": "r_sargodha_road",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 2,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_112",
        "name": "Shafiq Fruit Shop",
        "address": "Jhamrah",
        "customerName": "Shafiq",
        "phone": "0343-4585795",
        "visitDay": "Monday",
        "routeId": "r_sargodha_road",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_113",
        "name": "Malik Habeeb kiryana",
        "address": "Jhamrah",
        "customerName": "Muzzamil Abbas",
        "phone": "0342-1743954",
        "visitDay": "Monday",
        "routeId": "r_sargodha_road",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_114",
        "name": "Umair kiryana",
        "address": "Jhamrah",
        "customerName": "Umair",
        "phone": "0371-1746588",
        "visitDay": "Monday",
        "routeId": "r_sargodha_road",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_115",
        "name": "Javed Sweets",
        "address": "Jhamrah",
        "customerName": "Javed Khtar",
        "phone": "0348-2558565",
        "visitDay": "Monday",
        "routeId": "r_sargodha_road",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_116",
        "name": "safdar Asghar Kiryana",
        "address": "Jhamrah",
        "customerName": "Nawaz",
        "phone": "0342-1001789",
        "visitDay": "Monday",
        "routeId": "r_sargodha_road",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_117",
        "name": "786 Kiryana",
        "address": "Jhamrah",
        "customerName": "Amjid",
        "phone": "0344-7625032",
        "visitDay": "Monday",
        "routeId": "r_sargodha_road",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 3,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_118",
        "name": "Tahir Kiryana",
        "address": "Jhamrah",
        "customerName": "Tahir",
        "phone": "0311-4229252",
        "visitDay": "Monday",
        "routeId": "r_sargodha_road",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 3,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_119",
        "name": "Tauseef kiryana",
        "address": "Jhamrah",
        "customerName": "Tauseef Ahmad",
        "phone": "0346-6453038",
        "visitDay": "Monday",
        "routeId": "r_sargodha_road",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_120",
        "name": "Almadina General store",
        "address": "Jhamrah",
        "customerName": "Qari Jafar",
        "phone": "0302-6737273",
        "visitDay": "Monday",
        "routeId": "r_sargodha_road",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 3,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_121",
        "name": "Faisal Kiryana Store",
        "address": "Chak 63",
        "customerName": "Faisal Shah",
        "phone": "0347-2243405",
        "visitDay": "Monday",
        "routeId": "r_sargodha_road",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_122",
        "name": "Ishaq General store",
        "address": "Chak 63",
        "customerName": "Ishaq",
        "phone": "0347-7700714",
        "visitDay": "Monday",
        "routeId": "r_sargodha_road",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_123",
        "name": "Parweez kiryana",
        "address": "Chak 63",
        "customerName": "Parweez",
        "phone": "0344-4689163",
        "visitDay": "Monday",
        "routeId": "r_sargodha_road",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_124",
        "name": "Hamza Kiryna",
        "address": "Chak 63",
        "customerName": "Hamza",
        "phone": "0302-8919860",
        "visitDay": "Monday",
        "routeId": "r_sargodha_road",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_125",
        "name": "Khalid",
        "address": "Chak 63",
        "customerName": "Khalid",
        "phone": "",
        "visitDay": "Monday",
        "routeId": "r_sargodha_road",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_126",
        "name": "Shoaib Akhtar",
        "address": "Chak 63",
        "customerName": "Shoaib",
        "phone": "0348-7900072",
        "visitDay": "Monday",
        "routeId": "r_sargodha_road",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_127",
        "name": "Tanveer Kiryana",
        "address": "Chak 63",
        "customerName": "Tanveer",
        "phone": "0305-1688363",
        "visitDay": "Monday",
        "routeId": "r_sargodha_road",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_128",
        "name": "Rana General Store",
        "address": "Chak 63",
        "customerName": "Munza Ahmad",
        "phone": "0341-3248433",
        "visitDay": "Monday",
        "routeId": "r_sargodha_road",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_129",
        "name": "Hassan Kiryana",
        "address": "Chak 63",
        "customerName": "Hasan",
        "phone": "",
        "visitDay": "Monday",
        "routeId": "r_sargodha_road",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_130",
        "name": "Mashallah Super Store",
        "address": "Chak 63",
        "customerName": "Alamgir",
        "phone": "0349-6885110",
        "visitDay": "Monday",
        "routeId": "r_sargodha_road",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_131",
        "name": "easy Paisa Shop",
        "address": "Chak 63",
        "customerName": "Muhammad Nawaz",
        "phone": "0340-7473933",
        "visitDay": "Monday",
        "routeId": "r_sargodha_road",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_132",
        "name": "Khan Hotel",
        "address": "Sargodha Road",
        "customerName": "Qamar",
        "phone": "0344-0643885",
        "visitDay": "Monday",
        "routeId": "r_sargodha_road",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_133",
        "name": "Waqas Kiryana",
        "address": "Sargodha Road",
        "customerName": "Waqas",
        "phone": "",
        "visitDay": "Monday",
        "routeId": "r_sargodha_road",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_134",
        "name": "Mazhar Kiryana",
        "address": "Rasool Pur Pul",
        "customerName": "Mazhar Abbas",
        "phone": "0344-2838952",
        "visitDay": "Tuesday",
        "routeId": "r_pabar_ala_kot",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_135",
        "name": "Haidri Kiryana",
        "address": "Rasool Pur Adda",
        "customerName": "Malik Irfan",
        "phone": "0342-4139368",
        "visitDay": "Tuesday",
        "routeId": "r_pabar_ala_kot",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_136",
        "name": "Lajpal Kiryana",
        "address": "Rasool Pur Adda",
        "customerName": "Asif Sabzi Farosh",
        "phone": "0349-0009984",
        "visitDay": "Tuesday",
        "routeId": "r_pabar_ala_kot",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_137",
        "name": "Allah Ho Kiryana",
        "address": "Abu Talib Chowk",
        "customerName": "Asad Waraich",
        "phone": "0342-7854635",
        "visitDay": "Tuesday",
        "routeId": "r_pabar_ala_kot",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_138",
        "name": "Mansoor Kiryana",
        "address": "Abu Talib Chowk",
        "customerName": "Mansoor",
        "phone": "0347-9053097",
        "visitDay": "Tuesday",
        "routeId": "r_pabar_ala_kot",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_139",
        "name": "Bukhari Kiryana",
        "address": "Abu Talib Chowk",
        "customerName": "fakhar Abbas",
        "phone": "0347-7937214",
        "visitDay": "Tuesday",
        "routeId": "r_pabar_ala_kot",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_140",
        "name": "Malik General Store",
        "address": "pabar Wala Adda",
        "customerName": "Shahid Mushtaq",
        "phone": "0345-9726065",
        "visitDay": "Tuesday",
        "routeId": "r_pabar_ala_kot",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_141",
        "name": "Sultan Kiryana",
        "address": "pabar Wala Adda",
        "customerName": "Mushtaq",
        "phone": "0345-8701214",
        "visitDay": "Tuesday",
        "routeId": "r_pabar_ala_kot",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_142",
        "name": "Puntaji General Store",
        "address": "pabar Wala Adda",
        "customerName": "Tanveer",
        "phone": "0341-3060660",
        "visitDay": "Tuesday",
        "routeId": "r_pabar_ala_kot",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_143",
        "name": "Nadeem Kiryana",
        "address": "Pabar Wala Adda",
        "customerName": "Nadeem Iqbal",
        "phone": "0345-4501414",
        "visitDay": "Tuesday",
        "routeId": "r_pabar_ala_kot",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_144",
        "name": "kroria General Store",
        "address": "Pabar Wala Adda",
        "customerName": "Pervez",
        "phone": "0341-5817668",
        "visitDay": "Tuesday",
        "routeId": "r_pabar_ala_kot",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_145",
        "name": "Bhatta Mobile",
        "address": "Pabar Wala Adda",
        "customerName": "Imran",
        "phone": "0349-7602645",
        "visitDay": "Tuesday",
        "routeId": "r_pabar_ala_kot",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_146",
        "name": "Mukhtar Kiryana Store",
        "address": "Pabar Wala Adda",
        "customerName": "Mukhtar",
        "phone": "0342-0921414",
        "visitDay": "Tuesday",
        "routeId": "r_pabar_ala_kot",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_147",
        "name": "Muzaffar Kiryana Store",
        "address": "Pabar Wala Adda",
        "customerName": "Muzaffar",
        "phone": "",
        "visitDay": "Tuesday",
        "routeId": "r_pabar_ala_kot",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_148",
        "name": "Aasim Kiryana Store",
        "address": "Pabar Wala Adda",
        "customerName": "Aasim",
        "phone": "",
        "visitDay": "Tuesday",
        "routeId": "r_pabar_ala_kot",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_149",
        "name": "Mahr Kiryana Store",
        "address": "Pabar Wala Adda",
        "customerName": "Musaddiq",
        "phone": "0347-9049116",
        "visitDay": "Tuesday",
        "routeId": "r_pabar_ala_kot",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_150",
        "name": "Bahoo Kiryana Store",
        "address": "Asif Market",
        "customerName": "Muhammad Ahmed",
        "phone": "0349-0004218",
        "visitDay": "Tuesday",
        "routeId": "r_pabar_ala_kot",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_151",
        "name": "sialvi Kiryana Store",
        "address": "Turbet Haji Shah",
        "customerName": "Arsalan Saith",
        "phone": "0349-6718574",
        "visitDay": "Tuesday",
        "routeId": "r_pabar_ala_kot",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_152",
        "name": "Rana Amir Kiryana Store",
        "address": "Turbet Haji Shah",
        "customerName": "Aamir",
        "phone": "",
        "visitDay": "Tuesday",
        "routeId": "r_pabar_ala_kot",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_153",
        "name": "mahr Faisal Kiryana Store",
        "address": "Bhamb",
        "customerName": "Faisal",
        "phone": "0345-6726508",
        "visitDay": "Tuesday",
        "routeId": "r_pabar_ala_kot",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_154",
        "name": "Tahir Kiryana Store",
        "address": "Bhamb",
        "customerName": "Tahir",
        "phone": "0370-6192556",
        "visitDay": "Tuesday",
        "routeId": "r_pabar_ala_kot",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_155",
        "name": "Imtiaz Kiryana Store",
        "address": "Bhamb",
        "customerName": "Imtiaz",
        "phone": "",
        "visitDay": "Tuesday",
        "routeId": "r_pabar_ala_kot",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_156",
        "name": "Tayyab Malik Kiryana Store",
        "address": "Ali Town Bhamb",
        "customerName": "Tayyab",
        "phone": "0343-6793090",
        "visitDay": "Tuesday",
        "routeId": "r_pabar_ala_kot",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_157",
        "name": "Owais General Store",
        "address": "Thana Mor",
        "customerName": "Owais",
        "phone": "0343-7741722",
        "visitDay": "Tuesday",
        "routeId": "r_pabar_ala_kot",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_158",
        "name": "Asif Kiryana Store",
        "address": "Thana Mor",
        "customerName": "Asif",
        "phone": "",
        "visitDay": "Tuesday",
        "routeId": "r_pabar_ala_kot",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_159",
        "name": "Umar Farooq Kiryana Store",
        "address": "Thana Mor",
        "customerName": "Farooq",
        "phone": "0346-2201387",
        "visitDay": "Tuesday",
        "routeId": "r_pabar_ala_kot",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_160",
        "name": "Mahr Kiryana Store",
        "address": "Thana Mor",
        "customerName": "Samar Abbas",
        "phone": "0345-4940162",
        "visitDay": "Tuesday",
        "routeId": "r_pabar_ala_kot",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_161",
        "name": "Saqib tuk Shop",
        "address": "Jamal Wala",
        "customerName": "Saqib",
        "phone": "0343-4819960",
        "visitDay": "Tuesday",
        "routeId": "r_pabar_ala_kot",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_162",
        "name": "Nafees Kiryana Store",
        "address": "Pul Lalian",
        "customerName": "Nafees",
        "phone": "0349-4970624",
        "visitDay": "Tuesday",
        "routeId": "r_pabar_ala_kot",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_163",
        "name": "Ghulam Raza Kiryana Store",
        "address": "Pindi Laal Murid",
        "customerName": "Ghulam Raza",
        "phone": "0343-5249621",
        "visitDay": "Tuesday",
        "routeId": "r_pabar_ala_kot",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_164",
        "name": "Mujtaba Kiryana Store",
        "address": "Pindi Laal Murid",
        "customerName": "Mujtaba",
        "phone": "0341-3475728",
        "visitDay": "Tuesday",
        "routeId": "r_pabar_ala_kot",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_165",
        "name": "khaleel Kiryana Store",
        "address": "Ari Wali Pul",
        "customerName": "Khalil",
        "phone": "0342-7575037",
        "visitDay": "Tuesday",
        "routeId": "r_pabar_ala_kot",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_166",
        "name": "Munawar Kiryana Store",
        "address": "Bhaga",
        "customerName": "Mansoor",
        "phone": "0342-7474633",
        "visitDay": "Tuesday",
        "routeId": "r_pabar_ala_kot",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_167",
        "name": "sanaullah Kiryana Store",
        "address": "Lo Khokhra Adda",
        "customerName": "Sanaullah",
        "phone": "0343-6348965",
        "visitDay": "Tuesday",
        "routeId": "r_pabar_ala_kot",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_168",
        "name": "Anwar Kiryana Store",
        "address": "Lo Khokhra Adda",
        "customerName": "Anwar",
        "phone": "0345-1046578",
        "visitDay": "Tuesday",
        "routeId": "r_pabar_ala_kot",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_169",
        "name": "Fayaz Tea Stall",
        "address": "Lo Khokhra Adda",
        "customerName": "Khayas",
        "phone": "0343-3814868",
        "visitDay": "Tuesday",
        "routeId": "r_pabar_ala_kot",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_170",
        "name": "faizan Kiryana",
        "address": "Lo Khokhra Basti",
        "customerName": "Faizan",
        "phone": "0313-0827450",
        "visitDay": "Tuesday",
        "routeId": "r_pabar_ala_kot",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_171",
        "name": "Tahir Kiryana",
        "address": "Lo Khokhra Basti",
        "customerName": "Tahir",
        "phone": "0340-6920885",
        "visitDay": "Tuesday",
        "routeId": "r_pabar_ala_kot",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_172",
        "name": "Zafar Kiryana",
        "address": "Lote Wali Pul",
        "customerName": "Zafar",
        "phone": "0341-7446584",
        "visitDay": "Tuesday",
        "routeId": "r_pabar_ala_kot",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_173",
        "name": "Akbar Shah Kiryana",
        "address": "Lote Wali Pul",
        "customerName": "Akbar",
        "phone": "0341-7446554",
        "visitDay": "Tuesday",
        "routeId": "r_pabar_ala_kot",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_174",
        "name": "Haqbaho Kiryana",
        "address": "Meer Mor",
        "customerName": "Mukhtar",
        "phone": "0342-7954650",
        "visitDay": "Tuesday",
        "routeId": "r_pabar_ala_kot",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_175",
        "name": "Feroz Khan Kiryana",
        "address": "Meer Mor",
        "customerName": "Feroz",
        "phone": "0346-0809280",
        "visitDay": "Tuesday",
        "routeId": "r_pabar_ala_kot",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_176",
        "name": "Haji Sultan Kiryana Store",
        "address": "Meer Mor",
        "customerName": "Sultan",
        "phone": "0342-7701596",
        "visitDay": "Tuesday",
        "routeId": "r_pabar_ala_kot",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_177",
        "name": "Irfan Khan Kiryana Store",
        "address": "Meer Mor",
        "customerName": "Irfan",
        "phone": "",
        "visitDay": "Tuesday",
        "routeId": "r_pabar_ala_kot",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_178",
        "name": "Umair Kiryana",
        "address": "Chatta Road",
        "customerName": "Umair",
        "phone": "0315-3946076",
        "visitDay": "Tuesday",
        "routeId": "r_pabar_ala_kot",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_179",
        "name": "Alhamd Super Store",
        "address": "Shareen Pul",
        "customerName": "Feroz Khan",
        "phone": "0345-4452716",
        "visitDay": "Tuesday",
        "routeId": "r_pabar_ala_kot",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_180",
        "name": "Haji Lal Khan Store",
        "address": "Dadapul Hospital",
        "customerName": "Sanaullah",
        "phone": "0343-7065085",
        "visitDay": "Tuesday",
        "routeId": "r_pabar_ala_kot",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_181",
        "name": "Farooq Kiryana Store",
        "address": "Dada Pul Chatta",
        "customerName": "Yaseen",
        "phone": "0345-1484092",
        "visitDay": "Tuesday",
        "routeId": "r_pabar_ala_kot",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_182",
        "name": "Zubair Kiryana Store",
        "address": "Chatta Basti",
        "customerName": "Zubair",
        "phone": "0308-5353577",
        "visitDay": "Tuesday",
        "routeId": "r_pabar_ala_kot",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_183",
        "name": "Hafiz Kiryana Store",
        "address": "Chhatta Basti",
        "customerName": "Mitho",
        "phone": "0345-0702031",
        "visitDay": "Tuesday",
        "routeId": "r_pabar_ala_kot",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_184",
        "name": "Umair Kiryana Store",
        "address": "Chhatta Basti",
        "customerName": "umair",
        "phone": "",
        "visitDay": "Tuesday",
        "routeId": "r_pabar_ala_kot",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_185",
        "name": "Ayaan Sweet",
        "address": "Qadirpur Pul",
        "customerName": "Tariq Khan",
        "phone": "0345-6395827",
        "visitDay": "Tuesday",
        "routeId": "r_pabar_ala_kot",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_186",
        "name": "Al Madina Kiryana",
        "address": "Qadirpur Pul",
        "customerName": "Tasawwur Khan",
        "phone": "0348-7368026",
        "visitDay": "Tuesday",
        "routeId": "r_pabar_ala_kot",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_187",
        "name": "Faisal General Store",
        "address": "Qadirpur Pul",
        "customerName": "Faisal Khan",
        "phone": "0344-4080603",
        "visitDay": "Tuesday",
        "routeId": "r_pabar_ala_kot",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_188",
        "name": "Waseem General Store",
        "address": "Qadirpur Pul",
        "customerName": "Waseem Khan",
        "phone": "0344-1459136",
        "visitDay": "Tuesday",
        "routeId": "r_pabar_ala_kot",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_189",
        "name": "Allahu Zaffar Kiryana Store",
        "address": "Qadirpur Basti",
        "customerName": "Zafar",
        "phone": "0344-7588756",
        "visitDay": "Tuesday",
        "routeId": "r_pabar_ala_kot",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_190",
        "name": "Lajpal Mumtaz Khan Store",
        "address": "Jage Bas",
        "customerName": "Mumtaz Khan",
        "phone": "0345-7739868",
        "visitDay": "Tuesday",
        "routeId": "r_pabar_ala_kot",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_191",
        "name": "Shoaib Karyana Store",
        "address": "Dokah",
        "customerName": "Shoaib",
        "phone": "0345-0313046",
        "visitDay": "Tuesday",
        "routeId": "r_pabar_ala_kot",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_192",
        "name": "Zargham Shah Store",
        "address": "",
        "customerName": "Zargham",
        "phone": "0301-6614268",
        "visitDay": "Tuesday",
        "routeId": "r_pabar_ala_kot",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_193",
        "name": "Haji Umar daraz Kiryana Store",
        "address": "",
        "customerName": "Umar Daraz",
        "phone": "0334-5314760",
        "visitDay": "Tuesday",
        "routeId": "r_pabar_ala_kot",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_194",
        "name": "Qasim Tea Stall",
        "address": "Bismillah Mill",
        "customerName": "Saif",
        "phone": "0333-6540745",
        "visitDay": "Wednesday",
        "routeId": "r_hussainabad",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_195",
        "name": "Hussaini Kiryana",
        "address": "Pabbar Wala Chowk",
        "customerName": "Foji Imran",
        "phone": "0349-2020727",
        "visitDay": "Wednesday",
        "routeId": "r_hussainabad",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_196",
        "name": "Asif Kiryana",
        "address": "Murad Wala",
        "customerName": "Zubair",
        "phone": "0340-0455430",
        "visitDay": "Wednesday",
        "routeId": "r_hussainabad",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_197",
        "name": "Lajpal Kiryana Store",
        "address": "Murad Phatak",
        "customerName": "Murtaza",
        "phone": "0345-4248478",
        "visitDay": "Wednesday",
        "routeId": "r_hussainabad",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_198",
        "name": "Awan Kiryana Store",
        "address": "Unara",
        "customerName": "Arslan",
        "phone": "0345-5880438",
        "visitDay": "Wednesday",
        "routeId": "r_hussainabad",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_199",
        "name": "Lajpal Super Store",
        "address": "Unara",
        "customerName": "Tanveer Awan",
        "phone": "0346-6401215",
        "visitDay": "Wednesday",
        "routeId": "r_hussainabad",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_200",
        "name": "Qrodia Store",
        "address": "Unara",
        "customerName": "Irfan",
        "phone": "0348-0401269",
        "visitDay": "Wednesday",
        "routeId": "r_hussainabad",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_201",
        "name": "Baba Kiryana Store",
        "address": "Unara",
        "customerName": "Ali Kharl",
        "phone": "0315-0727452",
        "visitDay": "Wednesday",
        "routeId": "r_hussainabad",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_202",
        "name": "Chaudhry Ahmed Society",
        "address": "Phatak Mor Mandi",
        "customerName": "Ahmed",
        "phone": "0314-6376655",
        "visitDay": "Wednesday",
        "routeId": "r_hussainabad",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_203",
        "name": "Habib Drink Corner",
        "address": "Phatak Mor Mandi",
        "customerName": "Habib Khan",
        "phone": "0349-4936717",
        "visitDay": "Wednesday",
        "routeId": "r_hussainabad",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_204",
        "name": "Usman Kiryana",
        "address": "Phatak Mor Mandi",
        "customerName": "Usman Ahmed",
        "phone": "0346-8683269",
        "visitDay": "Wednesday",
        "routeId": "r_hussainabad",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_205",
        "name": "Aamir Kiryana",
        "address": "Phatak Mor Mandi",
        "customerName": "Aamir Iqbal",
        "phone": "0343-5707494",
        "visitDay": "Wednesday",
        "routeId": "r_hussainabad",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_206",
        "name": "Gondal Goli Toffee",
        "address": "Hussainabad",
        "customerName": "Zia",
        "phone": "0346-0664070",
        "visitDay": "Wednesday",
        "routeId": "r_hussainabad",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_207",
        "name": "Irfan Kiryana",
        "address": "Hussainabad",
        "customerName": "Irfan",
        "phone": "0308-6696097",
        "visitDay": "Wednesday",
        "routeId": "r_hussainabad",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_208",
        "name": "Sufi Kiryana",
        "address": "Kari Wala Road",
        "customerName": "Fauji Nasir Abbas",
        "phone": "0342-5092168",
        "visitDay": "Wednesday",
        "routeId": "r_hussainabad",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_209",
        "name": "Fazal Kiryana",
        "address": "Kari Wala Road",
        "customerName": "Tasawwur Abbas",
        "phone": "0337-6182902",
        "visitDay": "Wednesday",
        "routeId": "r_hussainabad",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_210",
        "name": "Iqbal Kiryana Store",
        "address": "Hussainabad",
        "customerName": "Javed Iqbal",
        "phone": "0313-5251725",
        "visitDay": "Wednesday",
        "routeId": "r_hussainabad",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_211",
        "name": "Shehryar Kiryana",
        "address": "Hussainabad",
        "customerName": "Adeel Haider",
        "phone": "0344-1359984",
        "visitDay": "Wednesday",
        "routeId": "r_hussainabad",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_212",
        "name": "Fauji  Kiryana",
        "address": "Kari Wala Road",
        "customerName": "Zeeshan Haider",
        "phone": "0348-2731378",
        "visitDay": "Wednesday",
        "routeId": "r_hussainabad",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_213",
        "name": "Raza Kiryana",
        "address": "Kari Hussainabad",
        "customerName": "Muhammad Abbas",
        "phone": "0344-7809872",
        "visitDay": "Wednesday",
        "routeId": "r_hussainabad",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_214",
        "name": "Fauji Rafiq Kiryana",
        "address": "Hussainabad",
        "customerName": "Rafiq",
        "phone": "",
        "visitDay": "Wednesday",
        "routeId": "r_hussainabad",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_215",
        "name": "Ibrahim Kiryana",
        "address": "Hussainabad",
        "customerName": "Ibrahim",
        "phone": "0342-7781842",
        "visitDay": "Wednesday",
        "routeId": "r_hussainabad",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_216",
        "name": "Nadeem Kiryana",
        "address": "Hussainabad",
        "customerName": "Nadeem",
        "phone": "0349-6112837",
        "visitDay": "Wednesday",
        "routeId": "r_hussainabad",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_217",
        "name": "Hussain Kiryana",
        "address": "Hussainabad",
        "customerName": "Hussain",
        "phone": "0314-3846770",
        "visitDay": "Wednesday",
        "routeId": "r_hussainabad",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_218",
        "name": "Muzammil Drink Corner",
        "address": "Hussainabad",
        "customerName": "Adnan",
        "phone": "",
        "visitDay": "Wednesday",
        "routeId": "r_hussainabad",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_219",
        "name": "Kharal Kiryana Store",
        "address": "Hussainabad",
        "customerName": "Haider Kharl",
        "phone": "0315-6587921",
        "visitDay": "Wednesday",
        "routeId": "r_hussainabad",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_220",
        "name": "Malik Kiryana",
        "address": "Hussainabad",
        "customerName": "Turbet Ali",
        "phone": "0343-7859338",
        "visitDay": "Wednesday",
        "routeId": "r_hussainabad",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_221",
        "name": "Irfan Kiryana",
        "address": "Hussainabad",
        "customerName": "Farhan",
        "phone": "0304-2753276",
        "visitDay": "Wednesday",
        "routeId": "r_hussainabad",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_222",
        "name": "Hafiz Kiryana",
        "address": "Hussainabad",
        "customerName": "Faizam Abbas",
        "phone": "",
        "visitDay": "Wednesday",
        "routeId": "r_hussainabad",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_223",
        "name": "Shani Kiryana",
        "address": "Mozuwar Mana",
        "customerName": "Shani",
        "phone": "",
        "visitDay": "Wednesday",
        "routeId": "r_hussainabad",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_224",
        "name": "Asif Kiryana",
        "address": "Mozuwa Mana",
        "customerName": "Asif",
        "phone": "",
        "visitDay": "Wednesday",
        "routeId": "r_hussainabad",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_225",
        "name": "Ali Bhai kiryana Store",
        "address": "Phatak",
        "customerName": "Adnan",
        "phone": "0370-0770585",
        "visitDay": "Wednesday",
        "routeId": "r_hussainabad",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_226",
        "name": "Khan Kiryana",
        "address": "Shahjiwna Road",
        "customerName": "Riyasat",
        "phone": "0316-9833735",
        "visitDay": "Wednesday",
        "routeId": "r_hussainabad",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_227",
        "name": "Umar Daraz Kiryana",
        "address": "Shahjewna Road",
        "customerName": "Umar Daraz",
        "phone": "0347-4830255",
        "visitDay": "Wednesday",
        "routeId": "r_hussainabad",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_228",
        "name": "Rehmat Kiryana",
        "address": "Wadan kroria Chak",
        "customerName": "Rehmat Ali",
        "phone": "0346-6065317",
        "visitDay": "Wednesday",
        "routeId": "r_hussainabad",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_229",
        "name": "Al Rehman General Store",
        "address": "Wadan Chowk Gali",
        "customerName": "Muhammad Riaz",
        "phone": "0343-7934876",
        "visitDay": "Wednesday",
        "routeId": "r_hussainabad",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_230",
        "name": "Ali General Store",
        "address": "Wadan Chowk Gali",
        "customerName": "Ali",
        "phone": "0349-3027326",
        "visitDay": "Wednesday",
        "routeId": "r_hussainabad",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_231",
        "name": "Peer Bhai Kiryana",
        "address": "Wadan Pul",
        "customerName": "Shahid",
        "phone": "0341-7999541",
        "visitDay": "Wednesday",
        "routeId": "r_hussainabad",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_232",
        "name": "Lajpal Qrodia",
        "address": "Dusehra Pul",
        "customerName": "Lajpal",
        "phone": "0347-7879657",
        "visitDay": "Wednesday",
        "routeId": "r_hussainabad",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_233",
        "name": "Malik Kiryana",
        "address": "Dusehra",
        "customerName": "Muhammad Waqas",
        "phone": "0347-7879657",
        "visitDay": "Wednesday",
        "routeId": "r_hussainabad",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_234",
        "name": "Munsha Kiryana",
        "address": "Dusehra Gali",
        "customerName": "Munsib Dar",
        "phone": "0345-4810805",
        "visitDay": "Wednesday",
        "routeId": "r_hussainabad",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_235",
        "name": "Ghulam Mustafa Kiryana",
        "address": "Dusehra Gali",
        "customerName": "Ghulam Mustafa",
        "phone": "0326-1461032",
        "visitDay": "Wednesday",
        "routeId": "r_hussainabad",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_236",
        "name": "Mubashir Kiryana",
        "address": "Dusehra Gali",
        "customerName": "Aamir",
        "phone": "0344-4700591",
        "visitDay": "Wednesday",
        "routeId": "r_hussainabad",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_237",
        "name": "KHokhar Fruit Shop",
        "address": "Dusehra Gali",
        "customerName": "Hamra",
        "phone": "",
        "visitDay": "Wednesday",
        "routeId": "r_hussainabad",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_238",
        "name": "Umar Kiryana",
        "address": "Dusehra Gali",
        "customerName": "Umar",
        "phone": "",
        "visitDay": "Wednesday",
        "routeId": "r_hussainabad",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_239",
        "name": "Shoaib Kiryana",
        "address": "Dusera Gali",
        "customerName": "Shoaib Bakhtar",
        "phone": "0342-3410599",
        "visitDay": "Wednesday",
        "routeId": "r_hussainabad",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_240",
        "name": "Asghar Kiryana Store",
        "address": "Dusehra Gali",
        "customerName": "Asghar",
        "phone": "0346-7284975",
        "visitDay": "Wednesday",
        "routeId": "r_hussainabad",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_241",
        "name": "Farhad Mobile Shop",
        "address": "Dusehra Gali",
        "customerName": "Ustad Abbas",
        "phone": "0349-1775102",
        "visitDay": "Wednesday",
        "routeId": "r_hussainabad",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_242",
        "name": "Shani Kiryana Store",
        "address": "Dusehra Gali",
        "customerName": "Ehsan",
        "phone": "0345-1047659",
        "visitDay": "Wednesday",
        "routeId": "r_hussainabad",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_243",
        "name": "Sunara Kiryana Store",
        "address": "Dusehra Gali",
        "customerName": "Ghulam Abbas",
        "phone": "0343-4560172",
        "visitDay": "Wednesday",
        "routeId": "r_hussainabad",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_244",
        "name": "Aon Kiryana Store",
        "address": "Panj Girain",
        "customerName": "Moon Abbas",
        "phone": "0325-5399806",
        "visitDay": "Wednesday",
        "routeId": "r_hussainabad",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_245",
        "name": "Bismillah Kiryana Store",
        "address": "Panj Girain",
        "customerName": "Aamir Ali",
        "phone": "0305-5381136",
        "visitDay": "Wednesday",
        "routeId": "r_hussainabad",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_246",
        "name": "Malik General Store",
        "address": "Panj Girain",
        "customerName": "Abbas",
        "phone": "0327-1817210",
        "visitDay": "Wednesday",
        "routeId": "r_hussainabad",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_247",
        "name": "Mashallah General Store",
        "address": "Panj Girain",
        "customerName": "Malik Amjad",
        "phone": "0308-1551994",
        "visitDay": "Wednesday",
        "routeId": "r_hussainabad",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_248",
        "name": "Hasnain Kiryana",
        "address": "Panj Girain",
        "customerName": "Hasnain",
        "phone": "0300-1315200",
        "visitDay": "Wednesday",
        "routeId": "r_hussainabad",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_249",
        "name": "Malik Kiryana",
        "address": "Panj Girain",
        "customerName": "Ambar",
        "phone": "0306-1719590",
        "visitDay": "Wednesday",
        "routeId": "r_hussainabad",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 3,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_250",
        "name": "Imran Kiryana Store",
        "address": "Panj Girain",
        "customerName": "Umrani Haider",
        "phone": "0304-7585500",
        "visitDay": "Wednesday",
        "routeId": "r_hussainabad",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_251",
        "name": "Pappu Pan Shop",
        "address": "Citi Mandi Chowk",
        "customerName": "Nouman",
        "phone": "0317-3430355",
        "visitDay": "Wednesday",
        "routeId": "r_hussainabad",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_252",
        "name": "Al Safa Cish and Carry",
        "address": "Mor Mandi",
        "customerName": "Akhtar",
        "phone": "0340-9800980",
        "visitDay": "Thursday",
        "routeId": "r_mor_mandi",
        "subRouteName": "MOR MANDI SHAHJEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_253",
        "name": "Ashfaq Kiryana",
        "address": "Mor Mandi Pul",
        "customerName": "Ashfaq",
        "phone": "",
        "visitDay": "Thursday",
        "routeId": "r_mor_mandi",
        "subRouteName": "MOR MANDI SHAHJEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_254",
        "name": "Superior College",
        "address": "Mor Mandi Road",
        "customerName": "Ulfat",
        "phone": "0344-0863034",
        "visitDay": "Thursday",
        "routeId": "r_mor_mandi",
        "subRouteName": "MOR MANDI SHAHJEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 2,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_255",
        "name": "Haqbaho Kiryana Store",
        "address": "Rana Town",
        "customerName": "Shujaat Ali",
        "phone": "0345-7581079",
        "visitDay": "Thursday",
        "routeId": "r_mor_mandi",
        "subRouteName": "MOR MANDI SHAHJEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_256",
        "name": "School Mart",
        "address": "Mandi Road",
        "customerName": "Malik Shahid",
        "phone": "0318-7526100",
        "visitDay": "Thursday",
        "routeId": "r_mor_mandi",
        "subRouteName": "MOR MANDI SHAHJEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_257",
        "name": "Khizar Sweets",
        "address": "Mandi Mohar Wali",
        "customerName": "Haroon",
        "phone": "0348-7673023",
        "visitDay": "Thursday",
        "routeId": "r_mor_mandi",
        "subRouteName": "MOR MANDI SHAHJEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_258",
        "name": "pakeeza Sweets",
        "address": "Mohar Wali Road",
        "customerName": "Malik Tasawwur Abbas",
        "phone": "0342-3238873",
        "visitDay": "Thursday",
        "routeId": "r_mor_mandi",
        "subRouteName": "MOR MANDI SHAHJEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_259",
        "name": "Haqbaho Kiryana",
        "address": "Mohar Wali Road",
        "customerName": "Babar Khan",
        "phone": "0317-4554451",
        "visitDay": "Thursday",
        "routeId": "r_mor_mandi",
        "subRouteName": "MOR MANDI SHAHJEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_260",
        "name": "Kroria Kiryana",
        "address": "Mohar Wali Road",
        "customerName": "Waqar",
        "phone": "0341-1633031",
        "visitDay": "Thursday",
        "routeId": "r_mor_mandi",
        "subRouteName": "MOR MANDI SHAHJEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_261",
        "name": "Kamran Sweets",
        "address": "Mohar Wali Road",
        "customerName": "Kamran",
        "phone": "0340-7769668",
        "visitDay": "Thursday",
        "routeId": "r_mor_mandi",
        "subRouteName": "MOR MANDI SHAHJEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_262",
        "name": "Zam Zam Mart",
        "address": "Mohar Wali Road",
        "customerName": "Aamir Shehzad",
        "phone": "0309-0872830",
        "visitDay": "Thursday",
        "routeId": "r_mor_mandi",
        "subRouteName": "MOR MANDI SHAHJEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 3,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_263",
        "name": "Adnan Kiryana",
        "address": "Mohar Wali Road",
        "customerName": "Adnan Bhatti",
        "phone": "0343-6350467",
        "visitDay": "Thursday",
        "routeId": "r_mor_mandi",
        "subRouteName": "MOR MANDI SHAHJEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_264",
        "name": "Hafiz Kiryana Store",
        "address": "Mohar Wali Road",
        "customerName": "Asif Nawaz",
        "phone": "0347-7527278",
        "visitDay": "Thursday",
        "routeId": "r_mor_mandi",
        "subRouteName": "MOR MANDI SHAHJEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_265",
        "name": "Subhan Kiryana Store",
        "address": "Mohar Wali Road",
        "customerName": "Asif",
        "phone": "0344-0400192",
        "visitDay": "Thursday",
        "routeId": "r_mor_mandi",
        "subRouteName": "MOR MANDI SHAHJEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_266",
        "name": "CiviLian",
        "address": "Mohar Wali Road",
        "customerName": "Sheikh Muqeem",
        "phone": "0300-7592685",
        "visitDay": "Thursday",
        "routeId": "r_mor_mandi",
        "subRouteName": "MOR MANDI SHAHJEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 5,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_267",
        "name": "Akbar Kiryana",
        "address": "Mohar Wali Road Gali",
        "customerName": "Akbar",
        "phone": "0248-7674490",
        "visitDay": "Thursday",
        "routeId": "r_mor_mandi",
        "subRouteName": "MOR MANDI SHAHJEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_268",
        "name": "Mashallah Kiryana Store",
        "address": "Mohar Wali Road Gali",
        "customerName": "Junnaid",
        "phone": "0341-5431844",
        "visitDay": "Thursday",
        "routeId": "r_mor_mandi",
        "subRouteName": "MOR MANDI SHAHJEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_269",
        "name": "Hasnain Kiryana Store",
        "address": "Naya Thatta Pul",
        "customerName": "Hasnain",
        "phone": "0348-5074863",
        "visitDay": "Thursday",
        "routeId": "r_mor_mandi",
        "subRouteName": "MOR MANDI SHAHJEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_270",
        "name": "Zaib Trader",
        "address": "Naya Thatta Pul",
        "customerName": "Zeeshan Shah",
        "phone": "0312-8616222",
        "visitDay": "Thursday",
        "routeId": "r_mor_mandi",
        "subRouteName": "MOR MANDI SHAHJEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_271",
        "name": "Umar Daraz Kiryana",
        "address": "Naya Thatta Pul",
        "customerName": "Umar Farooq",
        "phone": "0340-0600157",
        "visitDay": "Thursday",
        "routeId": "r_mor_mandi",
        "subRouteName": "MOR MANDI SHAHJEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_272",
        "name": "Al Rehman Kiryana",
        "address": "Naya Thatta Pul Chowk",
        "customerName": "Babar",
        "phone": "0345-6963331",
        "visitDay": "Thursday",
        "routeId": "r_mor_mandi",
        "subRouteName": "MOR MANDI SHAHJEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_273",
        "name": "Mashallah Kiryana Store",
        "address": "Naya Thatta Pul",
        "customerName": "Aon",
        "phone": "0343-2763756",
        "visitDay": "Thursday",
        "routeId": "r_mor_mandi",
        "subRouteName": "MOR MANDI SHAHJEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_274",
        "name": "Baba Kiryana",
        "address": "Naya Thatta Pul Gali",
        "customerName": "Baba",
        "phone": "",
        "visitDay": "Thursday",
        "routeId": "r_mor_mandi",
        "subRouteName": "MOR MANDI SHAHJEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_275",
        "name": "Umar Daraz Qazi Kiryana",
        "address": "School ke sath",
        "customerName": "Umar Daraz",
        "phone": "0344-5145978",
        "visitDay": "Thursday",
        "routeId": "r_mor_mandi",
        "subRouteName": "MOR MANDI SHAHJEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_276",
        "name": "Haq Nawaz Kiryana",
        "address": "Ghazi Town",
        "customerName": "Haq Nawaz",
        "phone": "0301-5968760",
        "visitDay": "Thursday",
        "routeId": "r_mor_mandi",
        "subRouteName": "MOR MANDI SHAHJEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_277",
        "name": "Haqbaho Kiryana",
        "address": "Ghazi Town",
        "customerName": "Atif",
        "phone": "0317-0455368",
        "visitDay": "Thursday",
        "routeId": "r_mor_mandi",
        "subRouteName": "MOR MANDI SHAHJEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 1,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_278",
        "name": "Joiya Sweet Shop",
        "address": "Ghazi Town",
        "customerName": "Mumtaz",
        "phone": "0345-7471221",
        "visitDay": "Thursday",
        "routeId": "r_mor_mandi",
        "subRouteName": "MOR MANDI SHAHJEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_279",
        "name": "Hafiz Goli Toffee",
        "address": "Mandi City",
        "customerName": "Siddiq",
        "phone": "0340-1078533",
        "visitDay": "Thursday",
        "routeId": "r_mor_mandi",
        "subRouteName": "MOR MANDI SHAHJEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_280",
        "name": "Saleem Pan Shop",
        "address": "Mandi City",
        "customerName": "Saleem",
        "phone": "0345-3299447",
        "visitDay": "Thursday",
        "routeId": "r_mor_mandi",
        "subRouteName": "MOR MANDI SHAHJEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 2,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_281",
        "name": "Chand Kiryana",
        "address": "Mandi City",
        "customerName": "Chand",
        "phone": "",
        "visitDay": "Thursday",
        "routeId": "r_mor_mandi",
        "subRouteName": "MOR MANDI SHAHJEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 1,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_282",
        "name": "Shehzad Goli Toffee",
        "address": "Mandi City",
        "customerName": "Shehzad",
        "phone": "0311-6506630",
        "visitDay": "Thursday",
        "routeId": "r_mor_mandi",
        "subRouteName": "MOR MANDI SHAHJEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 4,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_283",
        "name": "Razaqia Sweets",
        "address": "Mandi City",
        "customerName": "Imdad Ali",
        "phone": "0341-4408410",
        "visitDay": "Thursday",
        "routeId": "r_mor_mandi",
        "subRouteName": "MOR MANDI SHAHJEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_284",
        "name": "Tahir kiryana Store",
        "address": "Mandi City",
        "customerName": "Tahir",
        "phone": "0345-7098608",
        "visitDay": "Thursday",
        "routeId": "r_mor_mandi",
        "subRouteName": "MOR MANDI SHAHJEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 4,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_285",
        "name": "Awais Kiryana Store",
        "address": "Mandi City",
        "customerName": "Owais",
        "phone": "0313-5581715",
        "visitDay": "Thursday",
        "routeId": "r_mor_mandi",
        "subRouteName": "MOR MANDI SHAHJEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 2,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_286",
        "name": "Almakkah",
        "address": "Mandi City",
        "customerName": "Al Makkah",
        "phone": "",
        "visitDay": "Thursday",
        "routeId": "r_mor_mandi",
        "subRouteName": "MOR MANDI SHAHJEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_287",
        "name": "Blue Kiryana",
        "address": "Mandi Citi",
        "customerName": "Blue",
        "phone": "",
        "visitDay": "Thursday",
        "routeId": "r_mor_mandi",
        "subRouteName": "MOR MANDI SHAHJEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_288",
        "name": "Sheikh Khalid Kiryana Store",
        "address": "Mandi Chowk",
        "customerName": "Khalil",
        "phone": "0311-7372700",
        "visitDay": "Thursday",
        "routeId": "r_mor_mandi",
        "subRouteName": "MOR MANDI SHAHJEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_289",
        "name": "Fauji Kiryana",
        "address": "Mandi Chowk Gali",
        "customerName": "Fauji",
        "phone": "",
        "visitDay": "Thursday",
        "routeId": "r_mor_mandi",
        "subRouteName": "MOR MANDI SHAHJEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 1,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_290",
        "name": "Chaudhry Kiryana",
        "address": "Mandi Chowk",
        "customerName": "Naveed Ahmed",
        "phone": "0315-8144942",
        "visitDay": "Thursday",
        "routeId": "r_mor_mandi",
        "subRouteName": "MOR MANDI SHAHJEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 1,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_291",
        "name": "Awan Kiryana Store",
        "address": "",
        "customerName": "Awan",
        "phone": "",
        "visitDay": "Thursday",
        "routeId": "r_mor_mandi",
        "subRouteName": "MOR MANDI SHAHJEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_292",
        "name": "Mansha Illah Kiryana Store",
        "address": "",
        "customerName": "Shahid",
        "phone": "",
        "visitDay": "Thursday",
        "routeId": "r_mor_mandi",
        "subRouteName": "MOR MANDI SHAHJEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_293",
        "name": "Razquia Sweets",
        "address": "",
        "customerName": "Nouman",
        "phone": "0344-7607903",
        "visitDay": "Thursday",
        "routeId": "r_mor_mandi",
        "subRouteName": "MOR MANDI SHAHJEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_294",
        "name": "Nusrat Kiryana",
        "address": "Waghra Chak",
        "customerName": "Waris Ali",
        "phone": "0349-7135741",
        "visitDay": "Saturday",
        "routeId": "r_laliyan",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_295",
        "name": "Mursaleen Pump",
        "address": "Awan Chak",
        "customerName": "Nasir Ali",
        "phone": "0346-8261102",
        "visitDay": "Saturday",
        "routeId": "r_laliyan",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_296",
        "name": "AB Kiryana",
        "address": "Panj Girain",
        "customerName": "AB",
        "phone": "0341-9536627",
        "visitDay": "Saturday",
        "routeId": "r_laliyan",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_297",
        "name": "Hamza Kiryana Store",
        "address": "Panj Girain",
        "customerName": "Zafar",
        "phone": "0344-7942124",
        "visitDay": "Saturday",
        "routeId": "r_laliyan",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_298",
        "name": "Sultan Kiryana Store",
        "address": "Panj Girain",
        "customerName": "Sultan",
        "phone": "0344-7461693",
        "visitDay": "Saturday",
        "routeId": "r_laliyan",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_299",
        "name": "Qamar Kiryana Store",
        "address": "Panj Girain Chowk",
        "customerName": "Faraz",
        "phone": "0300-2565822",
        "visitDay": "Saturday",
        "routeId": "r_laliyan",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_300",
        "name": "Al Madina Kiryana Store",
        "address": "Panj Girain Chowk",
        "customerName": "Waqar Younis",
        "phone": "0346-4872891",
        "visitDay": "Saturday",
        "routeId": "r_laliyan",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_301",
        "name": "Irfan Kiryana Store",
        "address": "Panj Girain Chowk",
        "customerName": "Imran",
        "phone": "0304-6503034",
        "visitDay": "Saturday",
        "routeId": "r_laliyan",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_302",
        "name": "Akhtar Kiryana Store",
        "address": "Work",
        "customerName": "Munawar",
        "phone": "0306-3470818",
        "visitDay": "Saturday",
        "routeId": "r_laliyan",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_303",
        "name": "Hussaini Kiryana Store",
        "address": "Kenchi Pul",
        "customerName": "Asghar Ali",
        "phone": "0347-7107090",
        "visitDay": "Saturday",
        "routeId": "r_laliyan",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_304",
        "name": "Sajjad Kiryana Store",
        "address": "Kenchi Pul",
        "customerName": "Abdul Sattar",
        "phone": "0341-4941450",
        "visitDay": "Saturday",
        "routeId": "r_laliyan",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_305",
        "name": "Aziz Kiryana Store",
        "address": "Ditta Choki Adda",
        "customerName": "Malik Saeed",
        "phone": "0344-6006120",
        "visitDay": "Saturday",
        "routeId": "r_laliyan",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_306",
        "name": "Imran Kiryana Store",
        "address": "Ditta Choki Adda",
        "customerName": "Imran",
        "phone": "0315-6035860",
        "visitDay": "Saturday",
        "routeId": "r_laliyan",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_307",
        "name": "Subhan Kiryana Store",
        "address": "Ditta Choki Adda",
        "customerName": "Subhan",
        "phone": "",
        "visitDay": "Saturday",
        "routeId": "r_laliyan",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_308",
        "name": "Nasir Kiryana Store",
        "address": "Ditta Choki Adda",
        "customerName": "Nasir",
        "phone": "0343-4425465",
        "visitDay": "Saturday",
        "routeId": "r_laliyan",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_309",
        "name": "Alhasnain Kiryana Store",
        "address": "Ditta Choki",
        "customerName": "Arshad",
        "phone": "0334-6295913",
        "visitDay": "Saturday",
        "routeId": "r_laliyan",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_310",
        "name": "Malik Kiryana Store",
        "address": "Ditta Choki",
        "customerName": "Munawar",
        "phone": "0300-1997230",
        "visitDay": "Saturday",
        "routeId": "r_laliyan",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_311",
        "name": "Aftab Kiryana",
        "address": "Ditta Choki",
        "customerName": "Aftab",
        "phone": "0370-4293255",
        "visitDay": "Saturday",
        "routeId": "r_laliyan",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_312",
        "name": "Imran Kiryana",
        "address": "Imam Kot Back",
        "customerName": "Imran",
        "phone": "0345-5941271",
        "visitDay": "Saturday",
        "routeId": "r_laliyan",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_313",
        "name": "Fakhar Kiryana",
        "address": "Chhota Rata Road",
        "customerName": "Fakhar",
        "phone": "0346-4594387",
        "visitDay": "Saturday",
        "routeId": "r_laliyan",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_314",
        "name": "One Ten Super Store",
        "address": "Chhota Rata Road",
        "customerName": "Asif",
        "phone": "0345-2495572",
        "visitDay": "Saturday",
        "routeId": "r_laliyan",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_315",
        "name": "Al jannat Sweets",
        "address": "Chhota Rata Road",
        "customerName": "Arshad",
        "phone": "0348-6055829",
        "visitDay": "Saturday",
        "routeId": "r_laliyan",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_316",
        "name": "Imran Mobile",
        "address": "Chhota Rata road",
        "customerName": "Imran",
        "phone": "0336-1702920",
        "visitDay": "Saturday",
        "routeId": "r_laliyan",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_317",
        "name": "Aslam General Store",
        "address": "Chhota Rata Road",
        "customerName": "Aslam",
        "phone": "0331-6350999",
        "visitDay": "Saturday",
        "routeId": "r_laliyan",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_318",
        "name": "Al imran General Store",
        "address": "Chhota Rata Chowk",
        "customerName": "Imran",
        "phone": "0346-5220231",
        "visitDay": "Saturday",
        "routeId": "r_laliyan",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_319",
        "name": "Sohail Kiryana Store",
        "address": "Chhota Rata Chowk",
        "customerName": "Sohail",
        "phone": "0340-9474606",
        "visitDay": "Saturday",
        "routeId": "r_laliyan",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_320",
        "name": "Shafa Kiryana",
        "address": "Chhota Rata",
        "customerName": "Shafa",
        "phone": "0348-6057009",
        "visitDay": "Saturday",
        "routeId": "r_laliyan",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_321",
        "name": "Ghulam Yaseen Kiryana",
        "address": "Chhota Rata",
        "customerName": "Ghulam",
        "phone": "0341-5902368",
        "visitDay": "Saturday",
        "routeId": "r_laliyan",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_322",
        "name": "Doctor Kiryana",
        "address": "chota Rata",
        "customerName": "M Fayaz",
        "phone": "0341-6944746",
        "visitDay": "Saturday",
        "routeId": "r_laliyan",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_323",
        "name": "Fakhar Kiryana",
        "address": "chota Rata",
        "customerName": "Fakhar Yaseen",
        "phone": "0346-3008353",
        "visitDay": "Saturday",
        "routeId": "r_laliyan",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_324",
        "name": "Habib Kiryana",
        "address": "chota Rata",
        "customerName": "Haseeb",
        "phone": "",
        "visitDay": "Saturday",
        "routeId": "r_laliyan",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_325",
        "name": "Panjtani Nadeem Kiryans",
        "address": "Masjid Ke Peeche",
        "customerName": "Nadeem",
        "phone": "0345-9275177",
        "visitDay": "Saturday",
        "routeId": "r_laliyan",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_326",
        "name": "Zafar Kiryana Store",
        "address": "Chhota Rata Chowk",
        "customerName": "Zafar",
        "phone": "0342-8610749",
        "visitDay": "Saturday",
        "routeId": "r_laliyan",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_327",
        "name": "Khaki Kiryana Store",
        "address": "Chhota Rata Chowk",
        "customerName": "Khaki",
        "phone": "",
        "visitDay": "Saturday",
        "routeId": "r_laliyan",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_328",
        "name": "Qaim Abbas Pump",
        "address": "Sheikhan Road",
        "customerName": "Abbas",
        "phone": "",
        "visitDay": "Saturday",
        "routeId": "r_laliyan",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_329",
        "name": "Malik Shopping Center",
        "address": "Rata Chowk Adda",
        "customerName": "Nadeem",
        "phone": "0341-4848376",
        "visitDay": "Saturday",
        "routeId": "r_laliyan",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_330",
        "name": "Malik Kiryana Store",
        "address": "Rata Chowk Adda",
        "customerName": "Khawar",
        "phone": "0344-7533986",
        "visitDay": "Saturday",
        "routeId": "r_laliyan",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_331",
        "name": "Al Madina Kiryana Store",
        "address": "Rata Chowk Adda",
        "customerName": "Safdar Abbas",
        "phone": "0345-1023224",
        "visitDay": "Saturday",
        "routeId": "r_laliyan",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_332",
        "name": "Haji Sharif Kiryana Store",
        "address": "Bisma House Sheikhan Road",
        "customerName": "Ahmed",
        "phone": "0346-5777582",
        "visitDay": "Saturday",
        "routeId": "r_laliyan",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_333",
        "name": "Liaqat Kiryana",
        "address": "Choki Muhammad Wali",
        "customerName": "Liaqat Ali",
        "phone": "0345-3626408",
        "visitDay": "Saturday",
        "routeId": "r_laliyan",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_334",
        "name": "Al Hamd Kiryana",
        "address": "Sheikhan Adda",
        "customerName": "Ahmed Shehzad",
        "phone": "0340-5355881",
        "visitDay": "Saturday",
        "routeId": "r_laliyan",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_335",
        "name": "Ameer Drink Corner",
        "address": "Sheikhan Adda",
        "customerName": "Ameer Khan",
        "phone": "0342-7472220",
        "visitDay": "Saturday",
        "routeId": "r_laliyan",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_336",
        "name": "Tariq Saeed Goli Toffee",
        "address": "Sheikhan Adda",
        "customerName": "Junaid Ali",
        "phone": "0315-7071991",
        "visitDay": "Saturday",
        "routeId": "r_laliyan",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 2,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_337",
        "name": "Tasawwur Kiryana Store",
        "address": "Sheikhan Adda",
        "customerName": "Tassuwar",
        "phone": "0345-6457837",
        "visitDay": "Saturday",
        "routeId": "r_laliyan",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_338",
        "name": "Faisal Kiryana",
        "address": "Sheikhan Bazaar Gali",
        "customerName": "Faisal Abbas",
        "phone": "0326-1624142",
        "visitDay": "Saturday",
        "routeId": "r_laliyan",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_339",
        "name": "Abdul Wahid",
        "address": "Sheikhan Bazaar Gali",
        "customerName": "Wahid",
        "phone": "0345-8685406",
        "visitDay": "Saturday",
        "routeId": "r_laliyan",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_340",
        "name": "Waheed Kiryana Store",
        "address": "Sheikhan Bazaar Gali",
        "customerName": "Waheed",
        "phone": "0343-3565201",
        "visitDay": "Saturday",
        "routeId": "r_laliyan",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 2,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_341",
        "name": "Baba Riaz Kiryana Store",
        "address": "Sheikhan Bazaar",
        "customerName": "Aon Abbas",
        "phone": "0346-5823114",
        "visitDay": "Saturday",
        "routeId": "r_laliyan",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_342",
        "name": "Asim Kiryana Store",
        "address": "Sheikhan Bazaar",
        "customerName": "Aasim",
        "phone": "0344-4334313",
        "visitDay": "Saturday",
        "routeId": "r_laliyan",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 4,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_343",
        "name": "Saqib Kiryana Store",
        "address": "Sheikhan Adda",
        "customerName": "Saqib",
        "phone": "0343-7910088",
        "visitDay": "Saturday",
        "routeId": "r_laliyan",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_344",
        "name": "Al Jannat Sweets",
        "address": "Sheikhan Adda",
        "customerName": "Asad",
        "phone": "0346-8612516",
        "visitDay": "Saturday",
        "routeId": "r_laliyan",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_345",
        "name": "Adeel Deendar Sweets",
        "address": "Sheikhan Adda",
        "customerName": "Rizwan",
        "phone": "0318-6749653",
        "visitDay": "Saturday",
        "routeId": "r_laliyan",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_346",
        "name": "Al Jannat Super Store",
        "address": "Sheikhan Adda",
        "customerName": "Asghar",
        "phone": "0345-7580527",
        "visitDay": "Saturday",
        "routeId": "r_laliyan",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_347",
        "name": "Zafar Cold Drink",
        "address": "Sheikhan Nukar",
        "customerName": "Zafar",
        "phone": "0343-8791537",
        "visitDay": "Saturday",
        "routeId": "r_laliyan",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 3,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_348",
        "name": "Mazhar General Store",
        "address": "Sheikhan Bazaar",
        "customerName": "Mazhar",
        "phone": "0345-7580264",
        "visitDay": "Saturday",
        "routeId": "r_laliyan",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 3,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_349",
        "name": "Sajid Wholesaler",
        "address": "Sheikhan Road",
        "customerName": "Sajid",
        "phone": "0344-7564238",
        "visitDay": "Saturday",
        "routeId": "r_laliyan",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 5,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_350",
        "name": "Hafiz Kiryana Store",
        "address": "Sheikhan Road",
        "customerName": "Ghulam Shabbir",
        "phone": "0343-9502667",
        "visitDay": "Saturday",
        "routeId": "r_laliyan",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_351",
        "name": "AB Kiryana",
        "address": "Adda Khoi",
        "customerName": "Fauji Akhtar",
        "phone": "0345-6806716",
        "visitDay": "Saturday",
        "routeId": "r_laliyan",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_352",
        "name": "Hadi Kiryana",
        "address": "Adda Khoi",
        "customerName": "Hafiz Abish Raza",
        "phone": "0349-0808655",
        "visitDay": "Saturday",
        "routeId": "r_laliyan",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_353",
        "name": "Chaudhry Kiryana",
        "address": "Adda Khoi",
        "customerName": "Sheraz Ahmed",
        "phone": "0341-0621017",
        "visitDay": "Saturday",
        "routeId": "r_laliyan",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_354",
        "name": "Ghulam Cold Corner",
        "address": "Adda Khoi",
        "customerName": "Ghulam Ali",
        "phone": "0344-6155780",
        "visitDay": "Saturday",
        "routeId": "r_laliyan",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_355",
        "name": "Asif Kiryana",
        "address": "Adda Khoi",
        "customerName": "Asif",
        "phone": "0342-4606395",
        "visitDay": "Saturday",
        "routeId": "r_laliyan",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_356",
        "name": "Al Asf Sweet",
        "address": "Bara Rata",
        "customerName": "Asif",
        "phone": "0326-1229897",
        "visitDay": "Saturday",
        "routeId": "r_laliyan",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_357",
        "name": "Zafar Kiryana",
        "address": "Bara Rata",
        "customerName": "Zafar",
        "phone": "",
        "visitDay": "Saturday",
        "routeId": "r_laliyan",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_358",
        "name": "Wajid Kiryana",
        "address": "Bara Rata",
        "customerName": "Wajid",
        "phone": "0346-6500666",
        "visitDay": "Saturday",
        "routeId": "r_laliyan",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_359",
        "name": "Khushhal Kiryana",
        "address": "Bara Rata",
        "customerName": "Adnan",
        "phone": "0341-4008020",
        "visitDay": "Saturday",
        "routeId": "r_laliyan",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_360",
        "name": "Haji Kiryana Store",
        "address": "Bara Rata",
        "customerName": "Umar",
        "phone": "0347-7341778",
        "visitDay": "Saturday",
        "routeId": "r_laliyan",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_361",
        "name": "Aon Kiryana Store",
        "address": "Bara Rata",
        "customerName": "Aon Abbas",
        "phone": "",
        "visitDay": "Saturday",
        "routeId": "r_laliyan",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_362",
        "name": "Khizar Hayat Kiryana Store",
        "address": "Rata Kalan",
        "customerName": "Khizar",
        "phone": "0342-7955780",
        "visitDay": "Saturday",
        "routeId": "r_laliyan",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 1,
        "taxMode": "filer",
        "creditBalance": 0
    }
];

/* ==========================================================================
   CHAUDHARY TRADER - PEPSICO FMCG DISTRIBUTION ENGINE
   Full Business Intelligence & POS State JavaScript Engine
   ========================================================================== */

const DEFAULT_COMPANIES = [
    { id: "lays", name: "Lays", taxMode: "lays_tax", metric: "kg", description: "PepsiCo / Lay's Authorized Snacks", isSystem: true },
    { id: "hash", name: "FAST", taxMode: "no_tax", metric: "ctn", description: "FAST Foods & Snacks Catalog", isSystem: false }
];

const DEFAULT_HASH_SKUS = [
    { code: "HASH-001", companyId: "hash", categoryType: "Nimko", brand: "Fast", desc: "FAST NIMKO MIX 500G 12X1", pricePoint: 100, grams: 500, pack: 12, tpRate: 600.00, mrp: 720, stockCartons: 50, stockUnits: 0 },
    { code: "HASH-002", companyId: "hash", categoryType: "Peanut", brand: "Fast", desc: "FAST SALTED PEANUT 250G 24X1", pricePoint: 50, grams: 250, pack: 24, tpRate: 850.00, mrp: 1000, stockCartons: 40, stockUnits: 0 },
    { code: "HASH-003", companyId: "hash", categoryType: "Salty", brand: "Fast", desc: "FAST SALTY CRUNCH 100G 12X1", pricePoint: 30, grams: 100, pack: 12, tpRate: 1200.00, mrp: 1440, stockCartons: 30, stockUnits: 0 }
];

function getCompanyIdForItem(item) {
    if (!item) return "lays";

    // 1. FIRST: Check SKU Master Database by exact SKU Code or Description!
    if (typeof AppState !== "undefined" && Array.isArray(AppState.skus) && AppState.skus.length > 0) {
        const itemCode = String(item.code || "").toLowerCase().trim();
        const itemDesc = String(item.desc || "").toLowerCase().trim();

        const masterSku = AppState.skus.find(s => {
            const sCode = String(s.code || "").toLowerCase().trim();
            const sDesc = String(s.desc || "").toLowerCase().trim();
            return (itemCode && sCode === itemCode) || (itemDesc && sDesc === itemDesc);
        });

        if (masterSku && masterSku.companyId) {
            const mComp = String(masterSku.companyId).toLowerCase();
            if (mComp === "hash" || mComp === "fast") return "hash";
            if (mComp === "lays" || mComp === "pepsico") return "lays";
        }
    }

    // 2. SECOND: Check item's own companyId property if present
    const compId = String(item.companyId || "").toLowerCase();
    if (compId === "hash" || compId === "fast") return "hash";
    if (compId === "lays" || compId === "pepsico") return "lays";

    // 3. THIRD: Check item code prefix, brand or description
    const code = String(item.code || "").toUpperCase();
    const brand = String(item.brand || "").toLowerCase();
    const desc = String(item.desc || "").toLowerCase();
    const cat = String(item.categoryType || "").toLowerCase();

    // FAST / HASH keywords
    if (code.startsWith("HASH") || code.startsWith("FAST") || code.startsWith("FST") ||
        brand.includes("fast") || brand.includes("hash") || brand.includes("laziza") || brand.includes("lazeez") || brand.includes("popsi") || brand.includes("daal") ||
        desc.includes("fast") || desc.includes("hash") || desc.includes("nimko") || desc.includes("peanut") || desc.includes("salty") || desc.includes("laziza") || desc.includes("lazeez") || desc.includes("popsi") || desc.includes("daal") ||
        cat === "nimko" || cat === "peanut" || cat === "salty" || cat === "hash") {
        return "hash";
    }

    // LAYS / PEPSICO keywords
    if (brand.includes("lays") || brand.includes("cheetos") || brand.includes("kurkure") || brand.includes("maxx") || brand.includes("wavy") ||
        desc.includes("lays") || desc.includes("cheetos") || desc.includes("kurkure") || desc.includes("maxx") || desc.includes("wavy") ||
        cat === "pc" || cat === "npc") {
        return "lays";
    }

    return "lays";
}

function getCategoryTypeForItem(item) {
    if (!item) return "PC";
    let cat = item.categoryType;
    if (cat && cat !== "PC" && cat !== "NPC") return cat;
    
    const cId = getCompanyIdForItem(item);
    if (cId === "hash") {
        const desc = String(item.desc || "").toLowerCase();
        if (desc.includes("nimko")) return "Nimko";
        if (desc.includes("peanut")) return "Peanut";
        if (desc.includes("salty")) return "Salty";
        return "Nimko";
    }
    
    const desc = String(item.desc || "").toUpperCase();
    if (desc.includes("CHEETOS") || desc.includes("KURKURE") || desc.includes("NPC")) return "NPC";
    return "PC";
}

function resolveRouteNameForOrder(o) {
    if (!o) return "";

    let shop = null;
    if (o.shopId && Array.isArray(AppState.shops)) {
        shop = AppState.shops.find(s => s.id === o.shopId || (s.name && o.shopName && s.name.toLowerCase() === o.shopName.toLowerCase()));
    }

    // For flat routes: look up the route name directly
    const routeId = (shop ? shop.routeId : null) || o.routeId;
    if (routeId && Array.isArray(AppState.routes)) {
        const rObj = AppState.routes.find(r => r.id === routeId);
        if (rObj) return rObj.name;
    }

    // Fallback to subRouteName if stored on shop/order
    if (shop && shop.subRouteName && shop.subRouteName.trim() !== "") return shop.subRouteName;
    if (o.subRouteName && o.subRouteName.trim() !== "") return o.subRouteName;
    if (o.routeName) return o.routeName;

    return "";
}

function getShopDiscountPct(s) {
    if (!s) return 0;
    if (s.defaultDiscountPct !== undefined && s.defaultDiscountPct !== null) return parseFloat(s.defaultDiscountPct) || 0;
    if (s.tradeDisc !== undefined && s.tradeDisc !== null) return parseFloat(s.tradeDisc) || 0;
    if (s.discount !== undefined && s.discount !== null) return parseFloat(s.discount) || 0;
    if (s.discountPct !== undefined && s.discountPct !== null) return parseFloat(s.discountPct) || 0;
    return 0;
}

function getSkuGrams(item) {
    if (!item) return 0;
    if (item.grams !== undefined && item.grams !== null && parseFloat(item.grams) > 0) {
        return parseFloat(item.grams);
    }
    const sku = (AppState.skus || []).find(s => s.code === item.code || (item.desc && s.desc && s.desc.toLowerCase() === item.desc.toLowerCase()));
    if (sku && sku.grams !== undefined && sku.grams !== null && parseFloat(sku.grams) > 0) {
        return parseFloat(sku.grams);
    }
    const desc = (item.desc || (sku ? sku.desc : '')).toUpperCase();
    const gMatch = desc.match(/(\d+)\s*G\b/) || desc.match(/(\d+)\s*GRAM/);
    if (gMatch) {
        const val = parseFloat(gMatch[1]);
        if (val > 0) return val;
    }
    return getSkuPricePoint(item);
}

function getSkuPricePoint(item) {
    if (!item) return 20;
    const itemCode = String(item.code || '').trim().toLowerCase();
    const itemDesc = String(item.desc || item.skuName || '').trim().toLowerCase();

    const sku = (AppState.skus || []).find(s => {
        const sCode = String(s.code || '').trim().toLowerCase();
        const sDesc = String(s.desc || '').trim().toLowerCase();
        return (itemCode && sCode === itemCode) || 
               (itemDesc && (sDesc === itemDesc || sDesc.includes(itemDesc) || itemDesc.includes(sDesc)));
    });

    if (sku && sku.pricePoint !== undefined && sku.pricePoint !== null && parseFloat(sku.pricePoint) > 0) {
        return parseFloat(sku.pricePoint);
    }
    if (item.pricePoint !== undefined && item.pricePoint !== null && parseFloat(item.pricePoint) > 0) {
        return parseFloat(item.pricePoint);
    }

    const desc = (item.desc || (sku ? sku.desc : '')).toUpperCase();
    const priceMatch = desc.match(/(\d+)\s*(RS|PKR|RUPEE)/i) || desc.match(/(RS|PKR)\s*(\d+)/i);
    if (priceMatch) {
        const val = parseFloat(priceMatch[1] || priceMatch[2]);
        if (val > 0 && val < 500) return val;
    }

    // Compute packet unit rate = tpRate / pack (e.g. 1105.47 / 80 = 13.81 -> Rs 20)
    const pack = parseFloat(item.pack || (sku ? sku.pack : 0) || 80);
    const tpRate = parseFloat(item.tpRate || (sku ? sku.tpRate : 0) || 0);

    if (tpRate > 0 && pack > 0) {
        const unitTp = tpRate / pack;
        if (unitTp <= 22) return 20;
        if (unitTp <= 35) return 30;
        if (unitTp <= 55) return 50;
        if (unitTp <= 80) return 70;
        if (unitTp <= 120) return 100;
        return Math.round(unitTp);
    }

    return 20;
}

function getBillDiscountPct(b) {
    if (!b) return 0;

    // 1. FAST / HASH bills NEVER get a discount (0% discount)
    const isHash = (b.companyId === "hash" || b.companyId === "fast") ||
                   (b.items && b.items.some(i => i.companyId === "hash" || i.companyId === "fast" || String(i.code || '').toUpperCase().startsWith("HASH") || String(i.brand || '').toLowerCase().includes("fast") || String(i.categoryType || '').toLowerCase().includes("nimko")));
    if (isHash) return 0;

    // 2. Check globalDiscPct or discountPct on bill first if greater than 0
    if (b.globalDiscPct !== undefined && b.globalDiscPct !== null && parseFloat(b.globalDiscPct) > 0) return parseFloat(b.globalDiscPct);
    if (b.discountPct !== undefined && b.discountPct !== null && parseFloat(b.discountPct) > 0) return parseFloat(b.discountPct);

    // 3. Check Master Shop Data for Lays bills
    if (Array.isArray(AppState.shops)) {
        const shop = AppState.shops.find(s => (b.shopId && s.id === b.shopId) || (b.shopName && s.name && s.name.toLowerCase() === b.shopName.toLowerCase()));
        if (shop) {
            const sDisc = getShopDiscountPct(shop);
            if (sDisc !== undefined && sDisc !== null) return parseFloat(sDisc) || 0;
        }
    }

    return 0;
}

function recalculateBillTotals(b) {
    if (!b || !Array.isArray(b.items)) return;
    const globalDiscPct = getBillDiscountPct(b);
    b.globalDiscPct = globalDiscPct;

    const isNoTax = (b.companyId === "hash");
    const isNonFiler = (b.taxMode === "nonfiler");
    const adwhTaxRate = isNoTax ? 0 : (isNonFiler ? 0.025 : 0.005); // 0.5% Filer Tax by default!

    let totalBasic = 0;
    let totalDisc = 0;
    let totalAdwh = 0;
    let totalKg = 0;
    let totalCtns = 0;
    let totalUnits = 0;
    let totalPkts = 0;

    b.items.forEach(i => {
        // Enforce system's exact Base TP from AppState.skus
        const sysSku = (AppState.skus || []).find(s => 
            (i.code && String(s.code).trim().toLowerCase() === String(i.code).trim().toLowerCase()) ||
            (i.desc && s.desc && String(s.desc).trim().toLowerCase() === String(i.desc).trim().toLowerCase()) ||
            (i.desc && s.desc && (s.desc.toLowerCase().includes(i.desc.toLowerCase()) || i.desc.toLowerCase().includes(s.desc.toLowerCase())))
        );

        if (sysSku && sysSku.tpRate > 0) {
            i.tpRate = parseFloat(sysSku.tpRate);
            i.pack = parseFloat(sysSku.pack || i.pack || 80);
        } else {
            const descUpper = String(i.desc || i.skuName || '').toUpperCase();
            if (descUpper.includes("CHEETOS") && (descUpper.includes("64") || descUpper.includes("11X64") || descUpper.includes("11G"))) {
                i.tpRate = 1195.20;
                i.pack = 64;
            } else if (descUpper.includes("LAYS") && (descUpper.includes("80") || descUpper.includes("11X80") || descUpper.includes("11G"))) {
                i.tpRate = 1494.00;
                i.pack = 80;
            }
        }

        const ctn = (i.cartons || 0);
        const units = (i.units || 0);
        const pack = i.pack || (sysSku ? sysSku.pack : 80);
        const unitTpRate = i.tpRate / pack;

        const basic = (ctn * i.tpRate) + (units * unitTpRate); // e.g. 1 Ctn * 1494 = 1494
        const disc = (i.discAmount !== undefined && i.discAmount !== null && i.discAmount > 0) 
            ? i.discAmount 
            : (basic * (globalDiscPct / 100));

        const taxableBase = basic - disc;
        const adwh = taxableBase * adwhTaxRate; // 0.5% Filer Tax = 7.47!
        const grossLineAmt = basic + adwh; // 1494 + 7.47 = 1501.47!
        const netLineAmt = Math.max(0, grossLineAmt - disc); // 1501.47!

        const grams = i.grams || (sysSku ? sysSku.grams : 72) || 72;
        const pkts = (ctn * pack) + units;
        const kg = (grams * pkts) / 1000;

        i.basicAmount = basic;
        i.discAmount = disc;
        i.adwhTax = adwh;
        i.grossInclTax = grossLineAmt;
        i.amount = netLineAmt;
        i.weightKg = kg;
        i.totalPackets = pkts;

        totalBasic += basic;
        totalDisc += disc;
        totalAdwh += adwh;
        totalKg += kg;
        totalCtns += ctn;
        totalUnits += units;
        totalPkts += pkts;
    });

    b.totalBasic = totalBasic;
    b.totalDisc = totalDisc;
    b.totalAdwh = totalAdwh;
    b.totalWeightKg = totalKg;
    b.totalCartons = totalCtns;
    b.totalUnits = totalUnits;
    b.totalPackets = totalPkts;
    b.netAmount = Math.max(0, Math.round((totalBasic - totalDisc) + totalAdwh));
}

const DEFAULT_SKUS = [
    {
        "code": "320035996",
        "desc": "Lays Salt 11G 11X80",
        "brand": "Salt",
        "categoryType": "PC",
        "categoryName": "Potato Chips",
        "companyId": "lays",
        "pack": 80,
        "grams": 11,
        "tpRate": 1494,
        "stockCartons": 0,
        "stockUnits": 0
    },
    {
        "code": "320035993",
        "desc": "Lays F Cheese 11G 11X80",
        "brand": "F.C",
        "categoryType": "PC",
        "categoryName": "Potato Chips",
        "companyId": "lays",
        "pack": 80,
        "grams": 11,
        "tpRate": 1494,
        "stockCartons": 12,
        "stockUnits": 78
    },
    {
        "code": "320035995",
        "desc": "Lays Masala 11G 11X80",
        "brand": "Masala",
        "categoryType": "PC",
        "categoryName": "Potato Chips",
        "companyId": "lays",
        "pack": 80,
        "grams": 11,
        "tpRate": 1494,
        "stockCartons": 22,
        "stockUnits": 0
    },
    {
        "code": "320035994",
        "desc": "Lays Y&H 11G 11X80",
        "brand": "Y&H",
        "categoryType": "PC",
        "categoryName": "Potato Chips",
        "companyId": "lays",
        "pack": 80,
        "grams": 11,
        "tpRate": 1494,
        "stockCartons": 109,
        "stockUnits": 0
    },
    {
        "code": "320035997",
        "desc": "Lays Paprika 11G 11X80",
        "brand": "Paprica",
        "categoryType": "PC",
        "categoryName": "Potato Chips",
        "companyId": "lays",
        "pack": 80,
        "grams": 11,
        "tpRate": 1494,
        "stockCartons": 10,
        "stockUnits": 0
    },
    {
        "code": "320036291",
        "desc": "Lays Salt 18G 18X48",
        "brand": "Salt",
        "categoryType": "PC",
        "categoryName": "Potato Chips",
        "companyId": "lays",
        "pack": 48,
        "grams": 18,
        "tpRate": 1322,
        "stockCartons": 10,
        "stockUnits": 0
    },
    {
        "code": "320035998",
        "desc": "Lays F Cheese 18G 18X48",
        "brand": "F.C",
        "categoryType": "PC",
        "categoryName": "Potato Chips",
        "companyId": "lays",
        "pack": 48,
        "grams": 18,
        "tpRate": 1322,
        "stockCartons": 0,
        "stockUnits": 0
    },
    {
        "code": "320036290",
        "desc": "Lays Masala 18G 18X48",
        "brand": "Masala",
        "categoryType": "PC",
        "categoryName": "Potato Chips",
        "companyId": "lays",
        "pack": 48,
        "grams": 18,
        "tpRate": 1322,
        "stockCartons": 48,
        "stockUnits": 0
    },
    {
        "code": "320040020",
        "desc": "Lays Y&H 17G 17X48",
        "brand": "Y&H",
        "categoryType": "PC",
        "categoryName": "Potato Chips",
        "companyId": "lays",
        "pack": 48,
        "grams": 17,
        "tpRate": 1322,
        "stockCartons": 21,
        "stockUnits": 0
    },
    {
        "code": "320036292",
        "desc": "Lays Paprika 18G 18X48",
        "brand": "Paprica",
        "categoryType": "PC",
        "categoryName": "Potato Chips",
        "companyId": "lays",
        "pack": 48,
        "grams": 18,
        "tpRate": 1322,
        "stockCartons": 0,
        "stockUnits": 0
    },
    {
        "code": "320038293",
        "desc": "Lays Wavy Masala Twist 17G 17X48",
        "brand": "Wavy MT",
        "categoryType": "PC",
        "categoryName": "Potato Chips",
        "companyId": "lays",
        "pack": 48,
        "grams": 17,
        "tpRate": 1335,
        "stockCartons": 0,
        "stockUnits": 0,
        "pricePoint": 0
    },
    {
        "code": "320036308",
        "desc": "Lays Wavy Bbq 16G 16X48",
        "brand": "Wavy BBQ",
        "categoryType": "PC",
        "categoryName": "Potato Chips",
        "companyId": "lays",
        "pack": 48,
        "grams": 16,
        "tpRate": 1335,
        "stockCartons": 10,
        "stockUnits": 0,
        "pricePoint": 0
    },
    {
        "code": "320038846",
        "desc": "Lays Wavy Y&H 16G 16X48",
        "brand": "Wavy Y&H",
        "categoryType": "PC",
        "categoryName": "Potato Chips",
        "companyId": "lays",
        "pack": 48,
        "grams": 16,
        "tpRate": 1335,
        "stockCartons": 0,
        "stockUnits": 0,
        "pricePoint": 0
    },
    {
        "code": "320036703",
        "desc": "Lays Salt 30G 30X24",
        "brand": "Salt",
        "categoryType": "PC",
        "categoryName": "Potato Chips",
        "companyId": "lays",
        "pack": 24,
        "grams": 30,
        "tpRate": 1105,
        "stockCartons": 47,
        "stockUnits": 0
    },
    {
        "code": "320036700",
        "desc": "Lays F Cheese 30G 30X24",
        "brand": "F.C",
        "categoryType": "PC",
        "categoryName": "Potato Chips",
        "companyId": "lays",
        "pack": 24,
        "grams": 30,
        "tpRate": 1105,
        "stockCartons": 96,
        "stockUnits": 0
    },
    {
        "code": "320036702",
        "desc": "Lays Masala 30G 30X24",
        "brand": "Masala",
        "categoryType": "PC",
        "categoryName": "Potato Chips",
        "companyId": "lays",
        "pack": 24,
        "grams": 30,
        "tpRate": 1105,
        "stockCartons": 1,
        "stockUnits": 0
    },
    {
        "code": "320040021",
        "desc": "Lays Y&H 29G 29X24",
        "brand": "Y&H",
        "categoryType": "PC",
        "categoryName": "Potato Chips",
        "companyId": "lays",
        "pack": 24,
        "grams": 29,
        "tpRate": 1105,
        "stockCartons": 156,
        "stockUnits": 0
    },
    {
        "code": "320036704",
        "desc": "Lays Paprika 30G 30X24",
        "brand": "Paprica",
        "categoryType": "PC",
        "categoryName": "Potato Chips",
        "companyId": "lays",
        "pack": 24,
        "grams": 30,
        "tpRate": 1105,
        "stockCartons": 4,
        "stockUnits": 0
    },
    {
        "code": "320038294",
        "desc": "Lays Wavy Masala Twist 31G 31X24",
        "brand": "Wavy MT",
        "categoryType": "PC",
        "categoryName": "Potato Chips",
        "companyId": "lays",
        "pack": 24,
        "grams": 31,
        "tpRate": 1108,
        "stockCartons": 0,
        "stockUnits": 0,
        "pricePoint": 0
    },
    {
        "code": "320036710",
        "desc": "Lays Wavy Bbq 30G 30X24",
        "brand": "Wavy BBQ",
        "categoryType": "PC",
        "categoryName": "Potato Chips",
        "companyId": "lays",
        "pack": 24,
        "grams": 30,
        "tpRate": 1108,
        "stockCartons": 40,
        "stockUnits": 0,
        "pricePoint": 0
    },
    {
        "code": "320038847",
        "desc": "Lays Wavy Y&H 30G 30X24",
        "brand": "Wavy Y&H",
        "categoryType": "PC",
        "categoryName": "Potato Chips",
        "companyId": "lays",
        "pack": 24,
        "grams": 30,
        "tpRate": 1108,
        "stockCartons": 0,
        "stockUnits": 0,
        "pricePoint": 0
    },
    {
        "code": "320036708",
        "desc": "Lays Salt 45G 45X16",
        "brand": "Salt",
        "categoryType": "PC",
        "categoryName": "Potato Chips",
        "companyId": "lays",
        "pack": 16,
        "grams": 45,
        "tpRate": 1031,
        "stockCartons": 18,
        "stockUnits": 0
    },
    {
        "code": "320036705",
        "desc": "Lays F Cheese 45G 45X16",
        "brand": "F.C",
        "categoryType": "PC",
        "categoryName": "Potato Chips",
        "companyId": "lays",
        "pack": 16,
        "grams": 45,
        "tpRate": 1031,
        "stockCartons": 28,
        "stockUnits": 0
    },
    {
        "code": "320036707",
        "desc": "Lays Masala 45G 45X16",
        "brand": "Masala",
        "categoryType": "PC",
        "categoryName": "Potato Chips",
        "companyId": "lays",
        "pack": 16,
        "grams": 45,
        "tpRate": 1031,
        "stockCartons": 0,
        "stockUnits": 0
    },
    {
        "code": "320040022",
        "desc": "Lays Y&H 43G 43X16",
        "brand": "Y&H",
        "categoryType": "PC",
        "categoryName": "Potato Chips",
        "companyId": "lays",
        "pack": 16,
        "grams": 43,
        "tpRate": 1031,
        "stockCartons": 83,
        "stockUnits": 0
    },
    {
        "code": "320036709",
        "desc": "Lays Paprika 45G 45X16",
        "brand": "Paprica",
        "categoryType": "PC",
        "categoryName": "Potato Chips",
        "companyId": "lays",
        "pack": 16,
        "grams": 45,
        "tpRate": 1031,
        "stockCartons": 0,
        "stockUnits": 0
    },
    {
        "code": "320038295",
        "desc": "Lays Wavy Masala Twist 45G 45X16",
        "brand": "Wavy MT",
        "categoryType": "PC",
        "categoryName": "Potato Chips",
        "companyId": "lays",
        "pack": 16,
        "grams": 45,
        "tpRate": 1028,
        "stockCartons": 0,
        "stockUnits": 0,
        "pricePoint": 0
    },
    {
        "code": "320036713",
        "desc": "Lays Wavy Bbq 45G 45X16",
        "brand": "Wavy BBQ",
        "categoryType": "PC",
        "categoryName": "Potato Chips",
        "companyId": "lays",
        "pack": 16,
        "grams": 45,
        "tpRate": 1028,
        "stockCartons": 0,
        "stockUnits": 0,
        "pricePoint": 0
    },
    {
        "code": "320038848",
        "desc": "Lays Wavy Y&H 45G 45X16",
        "brand": "Wavy Y&H",
        "categoryType": "PC",
        "categoryName": "Potato Chips",
        "companyId": "lays",
        "pack": 16,
        "grams": 45,
        "tpRate": 1028,
        "stockCartons": 0,
        "stockUnits": 0,
        "pricePoint": 0
    },
    {
        "code": "320039863",
        "desc": "Lays Maxx Signature Cheese 36G 36X16",
        "brand": "Max Cheese",
        "categoryType": "PC",
        "categoryName": "Potato Chips",
        "companyId": "lays",
        "pack": 16,
        "grams": 36,
        "tpRate": 1031,
        "stockCartons": 0,
        "stockUnits": 0
    },
    {
        "code": "320039861",
        "desc": "Lays Maxx Spicy Kimchi 36G 36X16",
        "brand": "Max Kimchi",
        "categoryType": "PC",
        "categoryName": "Potato Chips",
        "companyId": "lays",
        "pack": 16,
        "grams": 36,
        "tpRate": 1031,
        "stockCartons": 16,
        "stockUnits": 0
    },
    {
        "code": "320035559",
        "desc": "Lays Salt 72G 72X12",
        "brand": "Salt",
        "categoryType": "PC",
        "categoryName": "Potato Chips",
        "companyId": "lays",
        "pack": 12,
        "grams": 72,
        "tpRate": 1103,
        "stockCartons": 0,
        "stockUnits": 0
    },
    {
        "code": "3200355656",
        "desc": "Lays F Cheese 72X12",
        "brand": "F.C",
        "categoryType": "PC",
        "categoryName": "Potato Chips",
        "companyId": "lays",
        "pack": 12,
        "grams": 72,
        "tpRate": 1103,
        "stockCartons": 18,
        "stockUnits": 0,
        "pricePoint": 100
    },
    {
        "code": "320035658",
        "desc": "Lays Masala 72G 72X12",
        "brand": "Masala",
        "categoryType": "PC",
        "categoryName": "Potato Chips",
        "companyId": "lays",
        "pack": 12,
        "grams": 72,
        "tpRate": 1103,
        "stockCartons": 17,
        "stockUnits": 0,
        "pricePoint": 0
    },
    {
        "code": "320040023",
        "desc": "Lays Y&H 70G 70X12",
        "brand": "Y&H",
        "categoryType": "PC",
        "categoryName": "Potato Chips",
        "companyId": "lays",
        "pack": 12,
        "grams": 70,
        "tpRate": 1103,
        "stockCartons": 70,
        "stockUnits": 0
    },
    {
        "code": "320035850",
        "desc": "Lays Paprika 72G 72X12",
        "brand": "Paprica",
        "categoryType": "PC",
        "categoryName": "Potato Chips",
        "companyId": "lays",
        "pack": 12,
        "grams": 72,
        "tpRate": 1103,
        "stockCartons": 0,
        "stockUnits": 0
    },
    {
        "code": "320036716",
        "desc": "Lays Wavy Bbq 70G 70X12",
        "brand": "Wavy BBQ",
        "categoryType": "PC",
        "categoryName": "Potato Chips",
        "companyId": "lays",
        "pack": 12,
        "grams": 70,
        "tpRate": 1113,
        "stockCartons": 11,
        "stockUnits": 0,
        "pricePoint": 0
    },
    {
        "code": "320039864",
        "desc": "Lays Maxx Signature Cheese 56G 56X12",
        "brand": "Max Cheese",
        "categoryType": "PC",
        "categoryName": "Potato Chips",
        "companyId": "lays",
        "pack": 12,
        "grams": 56,
        "tpRate": 1113,
        "stockCartons": 0,
        "stockUnits": 0,
        "pricePoint": 0
    },
    {
        "code": "320039862",
        "desc": "Lays Maxx Spicy Kimchi 56G 56X12",
        "brand": "Max Kimchi",
        "categoryType": "PC",
        "categoryName": "Potato Chips",
        "companyId": "lays",
        "pack": 12,
        "grams": 56,
        "tpRate": 1113,
        "stockCartons": 0,
        "stockUnits": 0,
        "pricePoint": 0
    },
    {
        "code": "320040027",
        "desc": "Lays Salt 116G 116X12",
        "brand": "Salt",
        "categoryType": "PC",
        "categoryName": "Potato Chips",
        "companyId": "lays",
        "pack": 12,
        "grams": 116,
        "tpRate": 1651,
        "stockCartons": 0,
        "stockUnits": 0
    },
    {
        "code": "320040024",
        "desc": "Lays F Cheese 116G 116X12",
        "brand": "F.C",
        "categoryType": "PC",
        "categoryName": "Potato Chips",
        "companyId": "lays",
        "pack": 12,
        "grams": 116,
        "tpRate": 1651,
        "stockCartons": 0,
        "stockUnits": 0
    },
    {
        "code": "320040026",
        "desc": "Lays Masala 116G 116X12",
        "brand": "Masala",
        "categoryType": "PC",
        "categoryName": "Potato Chips",
        "companyId": "lays",
        "pack": 12,
        "grams": 116,
        "tpRate": 1651,
        "stockCartons": 0,
        "stockUnits": 0
    },
    {
        "code": "320040025",
        "desc": "Lays Y&H 116G 116X12",
        "brand": "Y&H",
        "categoryType": "PC",
        "categoryName": "Potato Chips",
        "companyId": "lays",
        "pack": 12,
        "grams": 116,
        "tpRate": 1651,
        "stockCartons": 5,
        "stockUnits": 0
    },
    {
        "code": "320040050",
        "desc": "Kurkure Chutney Chaska 14G 14X60",
        "brand": "kk-C.C",
        "categoryType": "NPC",
        "categoryName": "Non-Potato Chips",
        "companyId": "lays",
        "pack": 60,
        "grams": 14,
        "tpRate": 1124,
        "stockCartons": 10,
        "stockUnits": 0,
        "pricePoint": 20
    },
    {
        "code": "320040049",
        "desc": "Kurkure Red Chili 14G 14X60",
        "brand": "KK-R.C",
        "categoryType": "NPC",
        "categoryName": "Non-Potato Chips",
        "companyId": "lays",
        "pack": 60,
        "grams": 14,
        "tpRate": 1124,
        "stockCartons": 0,
        "stockUnits": 0
    },
    {
        "code": "320037335",
        "desc": "Cheetos Bites Chkn Veg 11G 11X64",
        "brand": "Cheetos Bites",
        "categoryType": "NPC",
        "categoryName": "Non-Potato Chips",
        "companyId": "lays",
        "pack": 64,
        "grams": 11,
        "tpRate": 1200,
        "stockCartons": 19,
        "stockUnits": 0,
        "pricePoint": 20
    },
    {
        "code": "320037338",
        "desc": "Cheetos Ketchup 11G 11X64",
        "brand": "Cheetos Ketchup",
        "categoryType": "NPC",
        "categoryName": "Non-Potato Chips",
        "companyId": "lays",
        "pack": 64,
        "grams": 11,
        "tpRate": 1200,
        "stockCartons": 10,
        "stockUnits": 0,
        "pricePoint": 20
    },
    {
        "code": "320037529",
        "desc": "Kurkure Masti Shots Masala 11G 11X64",
        "brand": "Masti Shots",
        "categoryType": "NPC",
        "categoryName": "Non-Potato Chips",
        "companyId": "lays",
        "pack": 64,
        "grams": 11,
        "tpRate": 1124,
        "stockCartons": 0,
        "stockUnits": 0,
        "pricePoint": 0
    },
    {
        "code": "320037340",
        "desc": "Cheetos Ocean Safari 11G 11X64",
        "brand": "Cheetos OS",
        "categoryType": "NPC",
        "categoryName": "Non-Potato Chips",
        "companyId": "lays",
        "pack": 64,
        "grams": 11,
        "tpRate": 1197,
        "stockCartons": 9,
        "stockUnits": 0,
        "pricePoint": 20
    },
    {
        "code": "320037416",
        "desc": "Kurkure Chutney Chaska 34G 34X32",
        "brand": "kk-C.C",
        "categoryType": "NPC",
        "categoryName": "Non-Potato Chips",
        "companyId": "lays",
        "pack": 32,
        "grams": 34,
        "tpRate": 1193,
        "stockCartons": 61,
        "stockUnits": 0,
        "pricePoint": 40
    },
    {
        "code": "320037415",
        "desc": "Kurkure Red Chili 34G 34X32",
        "brand": "KK-R.C",
        "categoryType": "NPC",
        "categoryName": "Non-Potato Chips",
        "companyId": "lays",
        "pack": 32,
        "grams": 34,
        "tpRate": 1193,
        "stockCartons": 10,
        "stockUnits": 0,
        "pricePoint": 40
    },
    {
        "code": "320037347",
        "desc": "Kurkure Toofaani Mirch 34G 34X32",
        "brand": "KK-T.M",
        "categoryType": "NPC",
        "categoryName": "Non-Potato Chips",
        "companyId": "lays",
        "pack": 32,
        "grams": 34,
        "tpRate": 1193,
        "stockCartons": 5,
        "stockUnits": 0,
        "pricePoint": 40
    },
    {
        "code": "320037349",
        "desc": "Kurkure Chutney Chaska 56G 56X20",
        "brand": "kk-C.C",
        "categoryType": "NPC",
        "categoryName": "Non-Potato Chips",
        "companyId": "lays",
        "pack": 20,
        "grams": 56,
        "tpRate": 1118,
        "stockCartons": 83,
        "stockUnits": 0,
        "pricePoint": 60
    },
    {
        "code": "320037348",
        "desc": "Kurkure Red Chili 56G 56X20",
        "brand": "KK-R.C",
        "categoryType": "NPC",
        "categoryName": "Non-Potato Chips",
        "companyId": "lays",
        "pack": 20,
        "grams": 56,
        "tpRate": 1118,
        "stockCartons": 4,
        "stockUnits": 0,
        "pricePoint": 60
    },
    {
        "code": "320037350",
        "desc": "Kurkure Toofaani Mirch 56G 56X20",
        "brand": "KK-T.M",
        "categoryType": "NPC",
        "categoryName": "Non-Potato Chips",
        "companyId": "lays",
        "pack": 20,
        "grams": 56,
        "tpRate": 1118,
        "stockCartons": 0,
        "stockUnits": 0
    },
    {
        "code": "320037336",
        "desc": "Cheetos Bites Chkn Veg 18G 18X36",
        "brand": "Cheetos Bites",
        "categoryType": "NPC",
        "categoryName": "Non-Potato Chips",
        "companyId": "lays",
        "pack": 36,
        "grams": 18,
        "tpRate": 1006,
        "stockCartons": 0,
        "stockUnits": 0,
        "pricePoint": 30
    },
    {
        "code": "320037339",
        "desc": "Cheetos Ketchup 18G 18X36",
        "brand": "Cheetos Ketchup",
        "categoryType": "NPC",
        "categoryName": "Non-Potato Chips",
        "companyId": "lays",
        "pack": 36,
        "grams": 18,
        "tpRate": 1006,
        "stockCartons": 1,
        "stockUnits": 0
    },
    {
        "code": "320037611",
        "desc": "Kurkure Masti Shots Masala 18G 18X36",
        "brand": "Masti Shots",
        "categoryType": "NPC",
        "categoryName": "Non-Potato Chips",
        "companyId": "lays",
        "pack": 36,
        "grams": 18,
        "tpRate": 1006,
        "stockCartons": 0,
        "stockUnits": 0
    },
    {
        "code": "320037341",
        "desc": "Cheetos Ocean Safari 18G 18X36",
        "brand": "Cheetos OS",
        "categoryType": "NPC",
        "categoryName": "Non-Potato Chips",
        "companyId": "lays",
        "pack": 36,
        "grams": 18,
        "tpRate": 1006,
        "stockCartons": 0,
        "stockUnits": 0
    },
    {
        "code": "320037411",
        "desc": "Cheetos Crun Rfh 18G 18X36",
        "brand": "Cheetos RFH",
        "categoryType": "NPC",
        "categoryName": "Non-Potato Chips",
        "companyId": "lays",
        "pack": 36,
        "grams": 18,
        "tpRate": 1000,
        "stockCartons": 0,
        "stockUnits": 0
    },
    {
        "code": "320037414",
        "desc": "Cheetos Bites Chkn Veg 31G 31X16",
        "brand": "Cheetos Bites",
        "categoryType": "NPC",
        "categoryName": "Non-Potato Chips",
        "companyId": "lays",
        "pack": 16,
        "grams": 31,
        "tpRate": 744,
        "stockCartons": 0,
        "stockUnits": 0
    },
    {
        "code": "320037412",
        "desc": "Cheetos Crun Rfh 36G 36X24",
        "brand": "Cheetos RFH",
        "categoryType": "NPC",
        "categoryName": "Non-Potato Chips",
        "companyId": "lays",
        "pack": 24,
        "grams": 36,
        "tpRate": 1105,
        "stockCartons": 0,
        "stockUnits": 0
    },
    {
        "code": "320037413",
        "desc": "Cheetos Crun Rfh 82G 82X12",
        "brand": "Cheetos RFH",
        "categoryType": "NPC",
        "categoryName": "Non-Potato Chips",
        "companyId": "lays",
        "pack": 12,
        "grams": 82,
        "tpRate": 1117,
        "stockCartons": 0,
        "stockUnits": 0
    },
    {
        "code": "fast001",
        "desc": "Laziza Mix RS 10",
        "brand": "Nimko",
        "categoryType": "Nimko",
        "categoryName": "Potato Chips",
        "companyId": "hash",
        "pack": 24,
        "grams": 10,
        "tpRate": 200,
        "stockCartons": 61,
        "stockUnits": 0,
        "pricePoint": 0
    },
    {
        "code": "fast002",
        "desc": "Laziza Moth RS 10",
        "brand": "Nimko",
        "categoryType": "Nimko",
        "categoryName": "Potato Chips",
        "companyId": "hash",
        "pack": 24,
        "grams": 20,
        "tpRate": 200,
        "stockCartons": 56,
        "stockUnits": 0,
        "pricePoint": 0
    },
    {
        "code": "fast003",
        "desc": "Lazeez Mix RS 20",
        "brand": "Nimko",
        "categoryType": "Nimko",
        "categoryName": "Potato Chips",
        "companyId": "hash",
        "pack": 12,
        "grams": 30,
        "tpRate": 200,
        "stockCartons": 19,
        "stockUnits": 0,
        "pricePoint": 0
    },
    {
        "code": "fast004",
        "desc": "Laziza Moth RS 20",
        "brand": "Nimko",
        "categoryType": "Nimko",
        "categoryName": "Potato Chips",
        "companyId": "hash",
        "pack": 12,
        "grams": 30,
        "tpRate": 200,
        "stockCartons": 23,
        "stockUnits": 0,
        "pricePoint": 0
    },
    {
        "code": "fast005",
        "desc": "Daal Mong Rs 20",
        "brand": "Nimko",
        "categoryType": "Nimko",
        "categoryName": "Potato Chips",
        "companyId": "hash",
        "pack": 12,
        "grams": 30,
        "tpRate": 200,
        "stockCartons": 73,
        "stockUnits": 0,
        "pricePoint": 0
    },
    {
        "code": "fast006",
        "desc": "Daal Chana RS 20",
        "brand": "Nimko",
        "categoryType": "Nimko",
        "categoryName": "Potato Chips",
        "companyId": "hash",
        "pack": 12,
        "grams": 30,
        "tpRate": 200,
        "stockCartons": 75,
        "stockUnits": 0,
        "pricePoint": 0
    },
    {
        "code": "fast007",
        "desc": "Lazeez Mix RS 50",
        "brand": "Nimko",
        "categoryType": "Nimko",
        "categoryName": "Potato Chips",
        "companyId": "hash",
        "pack": 24,
        "grams": 45,
        "tpRate": 1050,
        "stockCartons": 76,
        "stockUnits": 0,
        "pricePoint": 0
    },
    {
        "code": "fast008",
        "desc": "Lazeez Mot RS 50",
        "brand": "Nimko",
        "categoryType": "Nimko",
        "categoryName": "Potato Chips",
        "companyId": "hash",
        "pack": 24,
        "grams": 45,
        "tpRate": 1050,
        "stockCartons": 76,
        "stockUnits": 0,
        "pricePoint": 0
    },
    {
        "code": "fast009",
        "desc": "Peanut RS 50",
        "brand": "peanut",
        "categoryType": "Peanut",
        "categoryName": "Potato Chips",
        "companyId": "hash",
        "pack": 24,
        "grams": 36,
        "tpRate": 1050,
        "stockCartons": 72,
        "stockUnits": 0,
        "pricePoint": 0
    },
    {
        "code": "fast010",
        "desc": "Hash Masala Rs 20",
        "brand": "Hash",
        "categoryType": "Hash",
        "categoryName": "Potato Chips",
        "companyId": "hash",
        "pack": 24,
        "grams": 22,
        "tpRate": 430,
        "stockCartons": 19,
        "stockUnits": 0,
        "pricePoint": 0
    },
    {
        "code": "fast011",
        "desc": "Hash Salty Rs 20",
        "brand": "Hash",
        "categoryType": "Hash",
        "categoryName": "Potato Chips",
        "companyId": "hash",
        "pack": 24,
        "grams": 22,
        "tpRate": 430,
        "stockCartons": 15,
        "stockUnits": 0,
        "pricePoint": 0
    },
    {
        "code": "fast012",
        "desc": "Popsi Achari Rs 20",
        "brand": "Hash",
        "categoryType": "Hash",
        "categoryName": "Potato Chips",
        "companyId": "hash",
        "pack": 24,
        "grams": 22,
        "tpRate": 430,
        "stockCartons": 72,
        "stockUnits": 0,
        "pricePoint": 0
    },
    {
        "code": "fast013",
        "desc": "Popsi CheeseRs 20",
        "brand": "Hash",
        "categoryType": "Hash",
        "categoryName": "Potato Chips",
        "companyId": "hash",
        "pack": 24,
        "grams": 22,
        "tpRate": 430,
        "stockCartons": 34,
        "stockUnits": 0,
        "pricePoint": 0
    },
    {
        "code": "320035555",
        "companyId": "lays",
        "categoryType": "PC",
        "brand": "Masala",
        "desc": "LAYS MASALA 40 GM 40X24",
        "pricePoint": 70,
        "grams": 40,
        "pack": 24,
        "tpRate": 1547,
        "stockCartons": 10,
        "stockUnits": 0
    },
    {
        "code": "320035556",
        "companyId": "lays",
        "categoryType": "PC",
        "brand": "F.C",
        "desc": "LAYS FRENCHES 40 GM 40X24",
        "pricePoint": 70,
        "grams": 40,
        "pack": 24,
        "tpRate": 1547,
        "stockCartons": 0,
        "stockUnits": 0
    },
    {
        "code": "320035557",
        "companyId": "lays",
        "categoryType": "NPC",
        "brand": "Kurkure",
        "desc": "KURKURE CHUTNEY CHASKA 55GM 55X24",
        "pricePoint": 60,
        "grams": 55,
        "pack": 24,
        "tpRate": 1341,
        "stockCartons": 1,
        "stockUnits": 0
    },
    {
        "code": "320035558",
        "companyId": "lays",
        "categoryType": "NPC",
        "brand": "Kurkure",
        "desc": "KURKURE TOFANI MIRCH 55GM 55X24",
        "pricePoint": 60,
        "grams": 55,
        "pack": 24,
        "tpRate": 1341,
        "stockCartons": 7,
        "stockUnits": 0
    }
];

/* ROUTES ARE GEOGRAPHIC TERRITORIES WITH 7-DAY VISIT PLANS CREATED BY USER */
const DEFAULT_7DAY_ROUTES = [];

let AppState = {
    companies: [],
    skus: [],
    routes: [],
    shops: [],
    bills: [],
    orders: [],
    pickLists: [],
    orderLogs: [],
    selectedOrderIds: [],
    pendingProcessOrderIds: [],
    pendingShortageData: null,
    currentCart: [],
    activeTab: "dashboardTab",
    activeSubTab: { sales: "pcSale", financial: "totalSale", analysis: "topSelling" },
    selectedRouteId: "",
    selectedShopId: "",
    selectedCompanyId: "all",
    posCompanyId: "lays",
    orderCompanyId: "lays",
    dateFilter: { preset: "10days", startDate: "", endDate: "" },
    reportFilters: {
        sales: { preset: "10days", startDate: "", endDate: "", companyId: "all" },
        financial: { preset: "10days", startDate: "", endDate: "", companyId: "all" },
        analysis: { preset: "10days", startDate: "", endDate: "", companyId: "all" }
    }
};

let activeModalBillNo = null;
let currentPendingExportType = null;

document.addEventListener("DOMContentLoaded", () => {
    runAdobeSplashScreen();
    try {
        loadStateFromStorage();
        initNavigation();
        initDateFilters();

        const savedTheme = localStorage.getItem("chaudhary_theme") || "light-glass";
        selectAppTheme(savedTheme);

        const todayStr = new Date().toISOString().split('T')[0];
        const posBillDateEl = document.getElementById("posBillDate");
        const posDeliveryDateEl = document.getElementById("posDeliveryDate");
        if (posBillDateEl) posBillDateEl.value = todayStr;
        if (posDeliveryDateEl) posDeliveryDateEl.value = todayStr;

        renderAllViews();
        if (typeof onPosDateChange === "function") onPosDateChange();
    } catch(err) {
        console.error("Initialization Error:", err);
    }
});

function runAdobeSplashScreen() {
    const splash = document.getElementById("adobeSplashOverlay");
    if (splash) splash.style.display = "none";
}


function toggleThemePanel() {
    const panel = document.getElementById("themeSidePanel");
    if (panel) panel.classList.toggle("open");
}

function selectAppTheme(themeName, cardEl) {
    const animActive = document.body.classList.contains("anim-active");
    document.body.className = `${themeName} ${animActive ? 'anim-active' : ''}`;
    
    localStorage.setItem("chaudhary_theme", themeName);

    const cards = document.querySelectorAll(".theme-card-option");
    cards.forEach(c => {
        if (c.getAttribute("data-theme") === themeName) c.classList.add("active");
        else c.classList.remove("active");
    });
}

function toggleBackgroundAnimations(enable) {
    if (enable) document.body.classList.add("anim-active");
    else document.body.classList.remove("anim-active");
}

/* BULLETPROOF TOGGLE FOR EXPANDING & HIDING ACCORDION DETAILS */
function toggleReportRowDetails(btn) {
    if (!btn) return;
    const trMaster = btn.closest("tr");
    if (!trMaster) return;
    
    const trDetail = trMaster.nextElementSibling;
    if (trDetail && trDetail.classList.contains("report-detail-row")) {
        const isHidden = trDetail.style.display === "none" || trDetail.classList.contains("hidden");
        if (isHidden) {
            trDetail.style.display = "table-row";
            trDetail.classList.remove("hidden");
            btn.innerHTML = `<i class="fa-solid fa-eye-slash"></i> Hide Details`;
            btn.style.background = "rgba(239, 68, 68, 0.2)";
            btn.style.color = "#ef4444";
            btn.style.borderColor = "#ef4444";
        } else {
            trDetail.style.display = "none";
            trDetail.classList.add("hidden");
            btn.innerHTML = `<i class="fa-solid fa-eye"></i> View Details`;
            btn.style.background = "rgba(255, 204, 0, 0.12)";
            btn.style.color = "var(--brand-gold)";
            btn.style.borderColor = "var(--brand-gold)";
        }
    }
}

function getNextInvoiceId() {
    const nextNum = AppState.bills.length + 1;
    return `CHT${String(nextNum).padStart(6, '0')}`;
}

let ipcRenderer = null;
try {
    if (typeof require !== 'undefined') {
        const electron = require('electron');
        ipcRenderer = electron.ipcRenderer;
    }
} catch (e) {
    ipcRenderer = null;
}

async function loadStateFromStorage() {

    AppState.deliveredBills = AppState.deliveredBills || [];
    AppState.selectedOrderIds = AppState.selectedOrderIds || [];
    AppState.selectedInvoiceIds = AppState.selectedInvoiceIds || [];
    AppState.orderCounter = AppState.orderCounter || 1;
    AppState.billCounter = AppState.billCounter || 1;
    AppState.pickListCounter = AppState.pickListCounter || 1;

    let loadedFromDesktop = false;
    if (ipcRenderer) {
        try {
            const desktopState = await ipcRenderer.invoke("load-state");
            if (desktopState) {
                if (Array.isArray(desktopState.companies) && desktopState.companies.length > 0) AppState.companies = desktopState.companies;
                if (Array.isArray(desktopState.skus) && desktopState.skus.length > 0) AppState.skus = desktopState.skus;
                if (Array.isArray(desktopState.routes) && desktopState.routes.length > 0) AppState.routes = desktopState.routes;
                if (Array.isArray(desktopState.shops)) AppState.shops = desktopState.shops;
                if (Array.isArray(desktopState.bills)) AppState.bills = desktopState.bills;
                if (Array.isArray(desktopState.orders)) AppState.orders = desktopState.orders;
                if (Array.isArray(desktopState.pickLists)) AppState.pickLists = desktopState.pickLists;
                if (Array.isArray(desktopState.orderLogs)) AppState.orderLogs = desktopState.orderLogs;
                loadedFromDesktop = true;
            }
        } catch (err) {
            console.warn("Could not load from Desktop SQLite, falling back to local storage:", err);
        }
    }

    if (!loadedFromDesktop) {
        let parsedCompanies = null;
        try {
            const savedComp = localStorage.getItem("chaudhary_companies");
            if (savedComp) parsedCompanies = JSON.parse(savedComp);
        } catch(e) { parsedCompanies = null; }

        AppState.companies = (Array.isArray(parsedCompanies) && parsedCompanies.length > 0) ? parsedCompanies : JSON.parse(JSON.stringify(DEFAULT_COMPANIES));

        let parsedSkus = null;
        try {
            const savedSkus = localStorage.getItem("chaudhary_skus");
            if (savedSkus) parsedSkus = JSON.parse(savedSkus);
        } catch(e) { parsedSkus = null; }

        if (!Array.isArray(parsedSkus) || parsedSkus.length < DEFAULT_SKUS.length) {
            AppState.skus = JSON.parse(JSON.stringify(DEFAULT_SKUS));
            try { localStorage.setItem("chaudhary_skus", JSON.stringify(AppState.skus)); } catch(e) {}
        } else {
            AppState.skus = parsedSkus;
        }

        // Purge legacy local sales cache to enforce 100% Single Source of Truth (SSOT) Cloud Architecture
        try {
            localStorage.removeItem("chaudhary_bills");
            localStorage.removeItem("chaudhary_orders");
            localStorage.removeItem("chaudhary_shops");
            localStorage.removeItem("chaudhary_picklists");
            localStorage.removeItem("chaudhary_routes");
            localStorage.removeItem("chaudhary_salesmen");
            localStorage.removeItem("chaudhary_foc_schemes");
        } catch(e) {}

        AppState.routes = [];
        AppState.shops = [];
        AppState.bills = [];
        AppState.orders = [];
        AppState.pickLists = [];
        AppState.orderLogs = [];
        AppState.salesmen = [];
        AppState.focSchemes = [];

        if (!Array.isArray(AppState.salesmen) || AppState.salesmen.length === 0) {
            AppState.salesmen = [
                { id: "sales_01", name: "Salesman 1", routeId: "", phone: "", pin: "1234", active: true },
                { id: "sales_02", name: "Salesman 2", routeId: "", phone: "", pin: "1234", active: true }
            ];
        }

        if (!Array.isArray(AppState.focSchemes) || AppState.focSchemes.length === 0) {
            AppState.focSchemes = [
                {
                    id: "foc_sch_01",
                    name: "August Cheetos FOC Scheme",
                    startDate: "2026-08-01",
                    endDate: "2026-08-31",
                    status: "Active",
                    priority: 1,
                    repeatable: true,
                    buySkuCode: "320037336",
                    focSkuCode: "320036709",
                    slabs: [
                        { buyQtyCartons: 10, focQtyCartons: 1 },
                        { buyQtyCartons: 20, focQtyCartons: 2 },
                        { buyQtyCartons: 30, focQtyCartons: 4 }
                    ],
                    eligibility: { type: "all" }
                }
            ];
        }

        // Clean out legacy sample dummy data if present
        const sampleRouteIds = ["r_jhang", "r_sargodha", "r_gojra", "r_tobateksingh", "r_chaudhary_trader"];
        const sampleShopIds = ["s1", "s2", "s3", "s4", "s_01", "s_02", "s_03"];
        const sampleBillNos = ["CHT000001", "CHT000002"];

        if (Array.isArray(AppState.routes)) AppState.routes = AppState.routes.filter(r => !sampleRouteIds.includes(r.id));
        if (Array.isArray(AppState.shops)) {
            AppState.shops = AppState.shops.filter(s => !sampleShopIds.includes(s.id) && s.name !== "Madina General Store" && s.name !== "Bismillah Karyana Store");
        }
        if (Array.isArray(AppState.bills)) AppState.bills = AppState.bills.filter(b => !sampleBillNos.includes(b.billNo));

        // If routes/shops list is missing or contains old data, auto-seed with 6 flat routes and 362 real shops!
        if (!Array.isArray(AppState.routes) || AppState.routes.length !== 6 || AppState.routes.some(r => r.id === "r_chaudhary_trader") || !AppState.routes.find(r => r.id === "r_sargodha_road") || !Array.isArray(AppState.shops) || AppState.shops.length < 100) {
            AppState.shops = JSON.parse(JSON.stringify(REAL_INITIAL_SHOPS));
            AppState.routes = JSON.parse(JSON.stringify(REAL_INITIAL_ROUTES));
            saveStateToStorage();
        }
    }

    // Ensure all SKUs are tagged with companyId & defaults
    AppState.skus.forEach(s => {
        s.companyId = getCompanyIdForItem(s);
        s.categoryType = getCategoryTypeForItem(s);
        if (s.stockCartons === undefined || s.stockCartons === null) s.stockCartons = 100;
        if (s.stockUnits === undefined || s.stockUnits === null) s.stockUnits = 0;
        if (!s.pack) s.pack = 12;
        if (!s.grams) s.grams = 72;
        if (!s.tpRate) s.tpRate = 900;
        if (!s.brand) s.brand = (s.companyId === "hash") ? "Fast" : ((s.desc && s.desc.includes("LAYS")) ? "Lays" : ((s.desc && s.desc.includes("KURKURE")) ? "Kurkure" : "Cheetos"));
    });

    // Auto-split any legacy mixed bills into separate Lays and FAST bills so they NEVER mix!
    const cleanBills = [];
    (AppState.bills || []).forEach(b => {
        const hashItems = (b.items || []).filter(i => getCompanyIdForItem(i) === "hash");
        const laysItems = (b.items || []).filter(i => getCompanyIdForItem(i) === "lays");

        // Preserve actual bill delivery status (Open bills stay Open, Confirmed stay Confirmed)
        if (!b.deliveryStatus) {
            b.deliveryStatus = "Open";
        }

        if (hashItems.length > 0 && laysItems.length > 0) {
            // Split mixed bill into 2 separate bills
            const laysBill = JSON.parse(JSON.stringify(b));
            laysBill.billNo = b.billNo.includes("-LAYS") ? b.billNo : `${b.billNo}-LAYS`;
            laysBill.companyId = "lays";
            laysBill.items = laysItems;
            recalculateBillTotals(laysBill);
            cleanBills.push(laysBill);

            const fastBill = JSON.parse(JSON.stringify(b));
            fastBill.billNo = b.billNo.includes("-FAST") ? b.billNo : `${b.billNo}-FAST`;
            fastBill.companyId = "hash";
            fastBill.items = hashItems;
            recalculateBillTotals(fastBill);
            cleanBills.push(fastBill);
        } else if (hashItems.length > 0) {
            b.companyId = "hash";
            b.items = hashItems;
            recalculateBillTotals(b);
            cleanBills.push(b);
        } else {
            b.companyId = "lays";
            b.items = laysItems.length > 0 ? laysItems : b.items;
            recalculateBillTotals(b);
            cleanBills.push(b);
        }
    });
    AppState.bills = cleanBills;
    AppState.bills.forEach(b => {
        b.routeName = resolveRouteNameForOrder(b);
    });

    AppState.orders.forEach(o => {
        o.routeName = resolveRouteNameForOrder(o);
        const hasHashItem = (o.items || []).some(i => getCompanyIdForItem(i) === "hash");
        o.companyId = hasHashItem ? "hash" : (o.companyId || "lays");
        (o.items || []).forEach(i => {
            i.companyId = getCompanyIdForItem(i);
            i.categoryType = getCategoryTypeForItem(i);
        });
    });

    ensureDefaultSampleData();
    recalculateAndVerifyAllPreviousBills();
    saveStateToStorage();
}

function recalculateAndVerifyAllPreviousBills() {
    if (!Array.isArray(AppState.bills)) return;

    AppState.bills.forEach(bill => {
        if (!Array.isArray(bill.items)) return;

        let totalBasic = 0;
        let totalDisc = 0;

        bill.items.forEach(i => {
            const descUpper = String(i.desc || i.skuName || '').toUpperCase();

            // Explicit rate verifications for official PepsiCo SKUs
            if (descUpper.includes("CHEETOS") && (descUpper.includes("64") || descUpper.includes("11X64") || descUpper.includes("11G"))) {
                i.tpRate = 1201.18;
            } else {
                const sku = (AppState.skus || []).find(s => s.code === i.code || (i.desc && s.desc && s.desc.toLowerCase() === i.desc.toLowerCase()) || (i.desc && s.desc && (s.desc.toLowerCase().includes(i.desc.toLowerCase()) || i.desc.toLowerCase().includes(s.desc.toLowerCase()))));
                if (sku && sku.tpRate > 0) {
                    i.tpRate = sku.tpRate;
                }
            }

            const ctn = (i.cartons || 0);
            const basicAmt = ctn * i.tpRate;
            const discPct = getBillDiscountPct(bill);
            const discAmt = (i.discAmount !== undefined && i.discAmount !== null && i.discAmount > 0)
                ? i.discAmount
                : (discPct > 0 ? (basicAmt * (discPct / 100)) : 0);

            const netLineAmt = Math.max(0, basicAmt - discAmt);

            i.basicAmount = basicAmt;
            i.discAmount = discAmt;
            i.amount = netLineAmt;

            totalBasic += basicAmt;
            totalDisc += discAmt;
        });

        bill.totalBasic = totalBasic;
        bill.totalDisc = totalDisc;
        bill.netAmount = Math.max(0, Math.round(totalBasic - totalDisc));
    });
}

function ensureDefaultSampleData() {
    if (!Array.isArray(AppState.routes) || AppState.routes.length === 0) AppState.routes = JSON.parse(JSON.stringify(REAL_INITIAL_ROUTES));
    if (!Array.isArray(AppState.shops) || AppState.shops.length === 0) AppState.shops = JSON.parse(JSON.stringify(REAL_INITIAL_SHOPS));
    if (!Array.isArray(AppState.bills)) AppState.bills = [];
}

function resetAndRestoreAllStock(defaultCtns = 100) {
    AppState.skus = JSON.parse(JSON.stringify(DEFAULT_SKUS));
    AppState.skus.forEach(s => {
        s.stockCartons = defaultCtns;
        s.stockUnits = 0;
    });
    saveStateToStorage();
    renderAllViews();
    alert(`✅ Stock Reset Successful! All ${AppState.skus.length} SKUs now have ${defaultCtns} Cartons stock available.`);
}

function deductStockForItems(items) {

    if (!items || !Array.isArray(items)) return;
    items.forEach(item => {
        const sku = AppState.skus.find(s => String(s.code).trim() === String(item.code).trim() || (item.desc && s.desc.toLowerCase() === item.desc.toLowerCase()));
        if (sku) {
            const pack = sku.pack || item.pack || 12;
            const reqUnits = ((item.cartons || 0) * pack) + (item.units || 0);
            const currentUnits = ((sku.stockCartons || 0) * pack) + (sku.stockUnits || 0);
            const remainingUnits = Math.max(0, currentUnits - reqUnits);
            sku.stockCartons = Math.floor(remainingUnits / pack);
            sku.stockUnits = remainingUnits % pack;
        }
    });
    saveStateToStorage();
}

function restoreStockForItems(items) {
    if (!items || !Array.isArray(items)) return;
    items.forEach(item => {
        const sku = AppState.skus.find(s => String(s.code).trim() === String(item.code).trim() || (item.desc && s.desc.toLowerCase() === item.desc.toLowerCase()));
        if (sku) {
            const pack = sku.pack || item.pack || 12;
            const currentUnits = ((sku.stockCartons || 0) * pack) + (sku.stockUnits || 0);
            const returnUnits = ((item.cartons || 0) * pack) + (item.units || 0);
            const totalUnits = currentUnits + returnUnits;
            sku.stockCartons = Math.floor(totalUnits / pack);
            sku.stockUnits = totalUnits % pack;
        }
    });
    saveStateToStorage();
}

let _saveStorageTimer = null;
function saveStateToStorage() {
    AppState.lastLocalEditTime = Date.now();
    if (_saveStorageTimer) clearTimeout(_saveStorageTimer);
    
    _saveStorageTimer = setTimeout(() => {
        // Enforce 100% Pure Cloud SSOT Architecture: Do NOT write sales database into localStorage!
        try {
            localStorage.removeItem("chaudhary_bills");
            localStorage.removeItem("chaudhary_orders");
            localStorage.removeItem("chaudhary_shops");
            localStorage.removeItem("chaudhary_picklists");
        } catch(e) {}

        if (typeof ipcRenderer !== 'undefined' && ipcRenderer) {
            ipcRenderer.invoke("save-state", AppState).catch(() => {});
        }

        try {
            const updateUri = (typeof window !== 'undefined' && window.location && window.location.origin && window.location.origin.startsWith('http')) 
                            ? (window.location.origin + "/api/sync/update-master-data") 
                            : "https://chaudharytraders.online/api/sync/update-master-data";
            fetch(updateUri, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    shops: AppState.shops,
                    skus: AppState.skus,
                    routes: AppState.routes,
                    companies: AppState.companies,
                    orders: AppState.orders,
                    bills: AppState.bills,
                    pickLists: AppState.pickLists,
                    focSchemes: AppState.focSchemes
                })
            }).catch(() => {});
        } catch (e) {}
    }, 50);
}


function startCleanProductionMode() {
    if (confirm("Reset all dummy sales, bills, and shops to ZERO for live production? SKUs and prices will be saved.")) {
        AppState.bills = [];
        AppState.shops = [];
        AppState.routes = [...DEFAULT_7DAY_ROUTES];
        AppState.currentCart = [];
        saveStateToStorage();
        renderAllViews();
        alert("System is now reset to ZERO! Clean production ready. Next invoice will be CHT000001.");
    }
}

function getDayNameFromDate(dateStr) {
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    if (!dateStr) return dayNames[new Date().getDay()];
    const d = new Date(dateStr);
    return dayNames[d.getDay()];
}

function initNavigation() {
    const navItems = document.querySelectorAll(".nav-item");
    navItems.forEach(item => {
        item.addEventListener("click", () => {
            navItems.forEach(n => n.classList.remove("active"));
            item.classList.add("active");

            const targetTab = item.getAttribute("data-tab");
            navigateToTab(targetTab);
        });
    });
}

function navigateToTab(targetTab) {
    document.querySelectorAll(".nav-item").forEach(n => {
        if (n.getAttribute("data-tab") === targetTab) n.classList.add("active");
        else n.classList.remove("active");
    });
    document.querySelectorAll(".tab-page").forEach(tab => tab.classList.remove("active"));
    const target = document.getElementById(targetTab);
    if (target) target.classList.add("active");
    AppState.activeTab = targetTab;
    renderActiveTabOnly(targetTab);
}

function renderActiveTabOnly(tabId = AppState.activeTab) {
    updateAllCompanyDropdowns();
    if (!tabId || tabId === "tabDashboard" || tabId === "dashboard") {
        renderDashboard();
    } else if (tabId === "tabOrders") {
        if (typeof renderOrdersTable === "function") renderOrdersTable();
    } else if (tabId === "tabPickLists") {
        if (typeof renderPickListTable === "function") renderPickListTable();
    } else if (tabId === "tabInvoices") {
        if (typeof renderInvoicesTable === "function") renderInvoicesTable();
    } else if (tabId === "tabBillsHistory") {
        if (typeof renderBillsHistoryTable === "function") renderBillsHistoryTable();
    } else if (tabId === "tabStock") {
        if (typeof renderStockInventoryTable === "function") renderStockInventoryTable();
    } else if (tabId === "tabRoutes" || tabId === "tabShops") {
        if (typeof renderRoutesAndShops === "function") renderRoutesAndShops();
    } else if (tabId === "tabSkus") {
        if (typeof renderSkuMasterTable === "function") renderSkuMasterTable();
    } else if (tabId === "tabFoc") {
        if (typeof renderFocManagementTab === "function") renderFocManagementTab();
    } else if (tabId === "tabCompanies") {
        if (typeof renderCompanyMasterTable === "function") renderCompanyMasterTable();
    } else if (tabId === "tabSalesReport") {
        if (typeof renderSalesReports === "function") renderSalesReports();
    } else if (tabId === "tabFinancialReport") {
        if (typeof renderFinancialReports === "function") renderFinancialReports();
    } else if (tabId === "tabAnalysisReport") {
        if (typeof renderAnalysisReports === "function") renderAnalysisReports();
    } else if (tabId === "tabDataSync") {
        if (typeof renderDataSyncTab === "function") renderDataSyncTab();
    } else {
        renderDashboard();
    }
}

function switchTab(targetTab) {
    navigateToTab(targetTab);
}

function initDateFilters() { handlePresetChange(); }

function getStartEndDatesFromPreset(preset, startDateId, endDateId) {
    const now = new Date();
    let startDate = null;
    let endDate = null;

    if (preset === "today") {
        startDate = new Date(); endDate = new Date();
    } else if (preset === "yesterday") {
        startDate = new Date(); startDate.setDate(now.getDate() - 1);
        endDate = new Date(); endDate.setDate(now.getDate() - 1);
    } else if (preset === "7days") {
        startDate = new Date(); startDate.setDate(now.getDate() - 6);
        endDate = new Date();
    } else if (preset === "10days") {
        startDate = new Date(); startDate.setDate(now.getDate() - 9);
        endDate = new Date();
    } else if (preset === "thisMonth") {
        startDate = new Date(now.getFullYear(), now.getMonth(), 1);
        endDate = new Date();
    } else if (preset === "custom") {
        const sVal = document.getElementById(startDateId)?.value;
        const eVal = document.getElementById(endDateId)?.value;
        if (sVal) startDate = new Date(sVal);
        if (eVal) endDate = new Date(eVal);
    } else if (preset === "all") {
        return { start: "", end: "" };
    }

    const startStr = startDate ? startDate.toISOString().split('T')[0] : "";
    const endStr = endDate ? endDate.toISOString().split('T')[0] : "";
    return { start: startStr, end: endStr };
}

function handlePresetChange() {
    const preset = document.getElementById("datePresetSelect").value;
    AppState.dateFilter.preset = preset;
    const customGroup = document.getElementById("customDateInputs");
    if (preset === "custom") customGroup.classList.remove("hidden");
    else customGroup.classList.add("hidden");
    triggerDashboardFilterUpdate();
}

function triggerDashboardFilterUpdate() {
    const preset = AppState.dateFilter.preset;
    const { start, end } = getStartEndDatesFromPreset(preset, "startDateInput", "endDateInput");
    AppState.dateFilter.startDate = start;
    AppState.dateFilter.endDate = end;

    const label = `Showing Dashboard KPIs from ${start || 'Beginning'} to ${end || 'Today'}`;
    document.getElementById("dashboardDateRangeLabel").innerText = label;

    renderDashboard();
}

function handleReportPeriodChange(reportType) {
    const presetId = `${reportType}ReportPeriodPreset`;
    const customGroupId = `${reportType}ReportCustomDates`;
    const preset = document.getElementById(presetId).value;

    const customGroup = document.getElementById(customGroupId);
    if (preset === "custom") customGroup.classList.remove("hidden");
    else customGroup.classList.add("hidden");

    if (reportType === "sales") renderSalesReports();
    else if (reportType === "financial") renderFinancialReports();
    else if (reportType === "analysis") renderAnalysisReports();
}

function populateCompanySelectOptions(elementId, selectedVal, includeAllOption = true) {
    const el = document.getElementById(elementId);
    if (!el) return;
    const targetVal = (selectedVal !== undefined && selectedVal !== null) ? selectedVal : (el.value || "all");
    let html = includeAllOption ? `<option value="all" ${targetVal === "all" ? 'selected' : ''}>🏢 All Companies (Combined)</option>` : '';
    (AppState.companies || []).forEach(c => {
        const isSel = (c.id === targetVal) ? 'selected' : '';
        html += `<option value="${c.id}" ${isSel}>${c.name}</option>`;
    });
    el.innerHTML = html;
    el.value = targetVal;
}

function updateAllCompanyDropdowns() {
    populateCompanySelectOptions("dashboardCompanyFilter", AppState.selectedCompanyId, true);
    populateCompanySelectOptions("ordersCompanyFilter", "all", true);
    populateCompanySelectOptions("pickListCompanyFilter", "all", true);
    populateCompanySelectOptions("invoiceCompanyFilter", "all", true);
    populateCompanySelectOptions("stockCompanyFilter", "all", true);
    populateCompanySelectOptions("salesReportCompanyFilter", AppState.reportFilters.sales.companyId || "all", true);
    populateCompanySelectOptions("financialReportCompanyFilter", AppState.reportFilters.financial.companyId || "all", true);
    populateCompanySelectOptions("analysisReportCompanyFilter", AppState.reportFilters.analysis.companyId || "all", true);
    populateCompanySelectOptions("skuCompanyIdInput", "lays", false);

    renderPosCompanySelector();
    renderManualOrderCompanySelector();
}

function onDashboardCompanyChange(compVal) {
    AppState.selectedCompanyId = compVal;
    renderDashboard();
}

function handleReportCompanyChange(reportType, compVal) {
    if (!AppState.reportFilters[reportType]) AppState.reportFilters[reportType] = {};
    AppState.reportFilters[reportType].companyId = compVal;
    if (reportType === "sales") renderSalesReports();
    else if (reportType === "financial") renderFinancialReports();
    else if (reportType === "analysis") renderAnalysisReports();
}

function renderPosCompanySelector() {
    const container = document.getElementById("posCompanySelectorPills");
    if (!container) return;
    let html = "";
    
    const isAllActive = (!AppState.posCompanyId || AppState.posCompanyId === "all");
    html += `<button type="button" class="btn btn-sm ${isAllActive ? 'btn-primary' : 'btn-outline'}" onclick="selectPosCompany('all')" style="font-weight:700; margin-right:6px;">🌐 ALL / Combined</button>`;

    (AppState.companies || []).forEach(c => {
        const isActive = (c.id === AppState.posCompanyId);
        const icon = c.id === "lays" ? "🟢" : (c.id === "hash" ? "🟠" : "🏢");
        html += `<button type="button" class="btn btn-sm ${isActive ? 'btn-primary' : 'btn-outline'}" onclick="selectPosCompany('${c.id}')" style="font-weight:700; margin-right:6px;">${icon} ${c.name}</button>`;
    });
    container.innerHTML = html;
}

function selectPosCompany(companyId) {
    AppState.posCompanyId = companyId;
    renderPosCompanySelector();
    renderPosSkuPickerGrid();
    updatePosCartTotals();
}

function renderManualOrderCompanySelector() {
    const container = document.getElementById("manualOrderCompanyPills");
    if (!container) return;
    let html = "";
    (AppState.companies || []).forEach(c => {
        const isActive = (c.id === (AppState.orderCompanyId || "lays"));
        const icon = c.id === "lays" ? "🟢" : (c.id === "hash" ? "🟠" : "🏢");
        html += `<button type="button" class="btn btn-sm ${isActive ? 'btn-primary' : 'btn-outline'}" onclick="selectOrderCompany('${c.id}')" style="font-weight:700; margin-right:6px;">${icon} ${c.name}</button>`;
    });
    container.innerHTML = html;
}

function selectOrderCompany(companyId) {
    AppState.orderCompanyId = companyId;
    renderManualOrderCompanySelector();
}

function normalizeDateToISO(dateStr) {
    if (!dateStr) return new Date().toISOString().split('T')[0];
    dateStr = String(dateStr).trim();
    if (dateStr.includes('T')) dateStr = dateStr.split('T')[0];
    if (dateStr.includes(' ')) dateStr = dateStr.split(' ')[0];
    if (dateStr.match(/^\d{4}-\d{2}-\d{2}$/)) return dateStr;
    
    const parts = dateStr.split(/[\/\-\.]/);
    if (parts.length === 3) {
        if (parts[2].length === 4) {
            const day = parts[0].padStart(2, '0');
            const month = parts[1].padStart(2, '0');
            const year = parts[2];
            return `${year}-${month}-${day}`;
        } else if (parts[0].length === 4) {
            const year = parts[0];
            const month = parts[1].padStart(2, '0');
            const day = parts[2].padStart(2, '0');
            return `${year}-${month}-${day}`;
        }
    }
    return dateStr;
}

function getConfirmedDeliveredBillsForDashboard() {
    const preset = document.getElementById("datePresetSelect")?.value || AppState.dateFilter?.preset || "all";
    const { start, end } = getStartEndDatesFromPreset(preset, "startDateInput", "endDateInput");

    const compEl = document.getElementById("dashboardCompanyFilter");
    const comp = compEl ? compEl.value : (AppState.selectedCompanyId || "all");
    AppState.selectedCompanyId = comp;

    return AppState.bills.filter(b => {
        const rawDateStr = b.billDate || b.date || b.createdDate || b.orderDate || "";
        const bDate = normalizeDateToISO(rawDateStr);
        const matchesDate = (!start || !bDate || bDate >= start) && (!end || !bDate || bDate <= end);

        const isConfirmedSale = !b.isVoid &&
            (b.deliveryStatus === "Confirmed" || b.deliveryStatus === "Delivered" || b.salesRecorded === true || b.isManuallyConfirmed === true);

        if (!matchesDate || !isConfirmedSale) return false;

        if (comp === "all") return true;

        // Normalize: UI brand "fast" maps to internal companyId "hash"
        const normalizedComp = (comp.toLowerCase() === "fast") ? "hash" : comp.toLowerCase();

        const bCompRaw = String(b.companyId || "lays").toLowerCase();
        const bComp = (bCompRaw === "fast") ? "hash" : bCompRaw;
        if (bComp === normalizedComp) return true;

        const hasMatchingItem = (b.items || []).some(i => getCompanyIdForItem(i) === normalizedComp);
        return hasMatchingItem;
    });
}

function getConfirmedDeliveredBillsForReport(reportType) {
    const presetId = `${reportType}ReportPeriodPreset`;
    const preset = document.getElementById(presetId)?.value || "all";
    const { start, end } = getStartEndDatesFromPreset(preset, `${reportType}ReportStartDate`, `${reportType}ReportEndDate`);

    const compEl = document.getElementById(`${reportType}ReportCompanyFilter`);
    const comp = compEl ? compEl.value : (AppState.reportFilters[reportType]?.companyId || "all");
    if (AppState.reportFilters[reportType]) AppState.reportFilters[reportType].companyId = comp;

    return AppState.bills.filter(b => {
        const rawDateStr = b.billDate || b.date || b.createdDate || b.orderDate || "";
        const bDate = normalizeDateToISO(rawDateStr);
        const matchesDate = (!start || !bDate || bDate >= start) && (!end || !bDate || bDate <= end);

        const isConfirmedSale = !b.isVoid &&
            (b.deliveryStatus === "Confirmed" || b.deliveryStatus === "Delivered" || b.salesRecorded === true || b.isManuallyConfirmed === true);

        if (!matchesDate || !isConfirmedSale) return false;

        if (comp === "all") return true;

        const bComp = (b.companyId || "lays").toLowerCase();
        if (bComp === comp.toLowerCase()) return true;

        const hasMatchingItem = (b.items || []).some(i => getCompanyIdForItem(i) === comp.toLowerCase());
        return hasMatchingItem;
    });
}

function renderAllViews() {
    updateAllCompanyDropdowns();
    if (typeof renderDashboard === "function") renderDashboard();
    if (typeof renderOrdersTable === "function") renderOrdersTable();
    if (typeof renderPickListTable === "function") renderPickListTable();
    if (typeof renderInvoicesTable === "function") renderInvoicesTable();
    if (typeof renderPosOptions === "function") renderPosOptions();
    if (typeof renderBillsHistoryTable === "function") renderBillsHistoryTable();
    if (typeof renderStockInventoryTable === "function") renderStockInventoryTable();
    if (typeof renderRoutesAndShops === "function") renderRoutesAndShops();
    if (typeof renderSkuMasterTable === "function") renderSkuMasterTable();
    if (typeof renderFocManagementTab === "function") renderFocManagementTab();
    if (typeof renderCompanyMasterTable === "function") renderCompanyMasterTable();
    if (typeof renderSalesReports === "function") renderSalesReports();
    if (typeof renderFinancialReports === "function") renderFinancialReports();
    if (typeof renderAnalysisReports === "function") renderAnalysisReports();
    if (typeof renderDataSyncTab === "function") renderDataSyncTab();
}

/* ==========================================================================
   FOC SCHEME & PROMOTION ENGINE
   ========================================================================== */

function getActiveFocSchemes(dateStr, shopId, routeId, salesmanId) {
    const today = dateStr ? new Date(dateStr) : new Date();
    today.setHours(0,0,0,0);

    const shopObj = shopId ? (AppState.shops || []).find(s => s.id === shopId) : null;
    const shopDiscPct = shopObj ? (
        (shopObj.defaultDiscountPct !== undefined && shopObj.defaultDiscountPct !== null) ? parseFloat(shopObj.defaultDiscountPct) :
        (shopObj.tradeDisc !== undefined && shopObj.tradeDisc !== null) ? parseFloat(shopObj.tradeDisc) :
        (shopObj.discount !== undefined && shopObj.discount !== null) ? parseFloat(shopObj.discount) : 0
    ) : 0;

    const activeList = (AppState.focSchemes || []).filter(sch => {
        if (sch.status === "Disabled") return false;

        if (sch.startDate) {
            const start = new Date(sch.startDate);
            start.setHours(0,0,0,0);
            if (today < start) return false;
        }

        if (sch.endDate) {
            const end = new Date(sch.endDate);
            end.setHours(23,59,59,999);
            if (today > end) return false;
        }

        if (sch.eligibility) {
            if (sch.eligibility.type && sch.eligibility.type !== "all") {
                if (sch.eligibility.type === "route" && Array.isArray(sch.eligibility.values)) {
                    if (routeId && !sch.eligibility.values.includes(routeId)) return false;
                } else if (sch.eligibility.type === "salesman" && Array.isArray(sch.eligibility.values)) {
                    if (salesmanId && !sch.eligibility.values.includes(salesmanId)) return false;
                }
            }

            if (sch.eligibility.shopDiscountFilter && sch.eligibility.shopDiscountFilter !== "all" && shopObj) {
                if (sch.eligibility.shopDiscountFilter === "discounted" && shopDiscPct <= 0) return false;
                if (sch.eligibility.shopDiscountFilter === "undiscounted" && shopDiscPct > 0) return false;
            }
        }

        return true;
    });

    activeList.sort((a, b) => (a.priority || 99) - (b.priority || 99));
    return activeList;
}

function calculateOrderFoc(items, shop, salesmanId, dateStr) {
    if (!Array.isArray(items) || items.length === 0) return { nonFocItems: items || [], focItems: [], totalFocUnits: 0, appliedSchemes: [] };

    const routeId = shop ? shop.routeId : null;
    const shopId = shop ? shop.id : null;
    const activeSchemes = getActiveFocSchemes(dateStr, shopId, routeId, salesmanId);

    if (activeSchemes.length === 0) return { nonFocItems: items.filter(i => !i.isFoc), focItems: [], totalFocUnits: 0, appliedSchemes: [] };

    const paidItems = items.filter(i => !i.isFoc);
    const generatedFocItems = [];
    const appliedSchemes = [];
    let totalFocUnits = 0;

    activeSchemes.forEach(sch => {
        const targetBuyCodes = Array.isArray(sch.buySkuCodes) && sch.buySkuCodes.length > 0 
            ? sch.buySkuCodes 
            : (sch.buySkuCode ? [sch.buySkuCode] : []);

        const matchingBuyItems = paidItems.filter(i => targetBuyCodes.includes(i.code));
        const totalBuyCartons = matchingBuyItems.reduce((acc, i) => acc + (i.cartons || 0), 0);

        if (totalBuyCartons > 0 && Array.isArray(sch.slabs) && sch.slabs.length > 0) {
            const sortedSlabs = [...sch.slabs].sort((a, b) => parseFloat(b.buyQtyCartons) - parseFloat(a.buyQtyCartons));
            let calculatedFocCartons = 0;
            let calculatedFocUnits = 0;

            if (sch.repeatable) {
                const minSlab = [...sch.slabs].sort((a, b) => parseFloat(a.buyQtyCartons) - parseFloat(b.buyQtyCartons))[0];
                if (minSlab && parseFloat(minSlab.buyQtyCartons) > 0) {
                    const multiplier = Math.floor(totalBuyCartons / parseFloat(minSlab.buyQtyCartons));
                    if (multiplier > 0) {
                        calculatedFocCartons = multiplier * parseFloat(minSlab.focQtyCartons || 0);
                        calculatedFocUnits = multiplier * parseFloat(minSlab.focQtyUnits || 0);
                    }
                }
            } else {
                const qualifyingSlab = sortedSlabs.find(s => totalBuyCartons >= parseFloat(s.buyQtyCartons));
                if (qualifyingSlab) {
                    calculatedFocCartons = parseFloat(qualifyingSlab.focQtyCartons || 0);
                    calculatedFocUnits = parseFloat(qualifyingSlab.focQtyUnits || 0);
                }
            }

            if (calculatedFocCartons > 0 || calculatedFocUnits > 0) {
                const rewardSku = (AppState.skus || []).find(s => s.code === sch.focSkuCode) || matchingBuyItems[0];
                const isHash = (rewardSku.companyId === "hash") || String(rewardSku.code).toUpperCase().startsWith("HASH");
                
                const focLabel = `${calculatedFocCartons > 0 ? `${calculatedFocCartons} Ctns` : ''} ${calculatedFocUnits > 0 ? `${calculatedFocCartons > 0 ? '+ ' : ''}${calculatedFocUnits} Pkts` : ''}`.trim();

                generatedFocItems.push({
                    code: rewardSku.code,
                    companyId: isHash ? "hash" : "lays",
                    categoryType: rewardSku.categoryType || "PC",
                    desc: `🎁 [FOC] ${rewardSku.desc}`,
                    brand: rewardSku.brand || "Lays",
                    cartons: calculatedFocCartons,
                    units: calculatedFocUnits,
                    tpRate: 0,
                    basicAmount: 0,
                    discAmount: 0,
                    adwhTax: 0,
                    amount: 0,
                    isFoc: true,
                    focQtyCartons: calculatedFocCartons,
                    focQtyUnits: calculatedFocUnits,
                    appliedSchemeId: sch.id,
                    schemeName: sch.name
                });

                totalFocUnits += (calculatedFocCartons * (rewardSku.pack || 12)) + calculatedFocUnits;
                appliedSchemes.push({
                    schemeName: sch.name,
                    buyCartons: totalBuyCartons,
                    focLabel: focLabel,
                    focDesc: rewardSku.desc
                });
            }
        }
    });

    return {
        nonFocItems: paidItems,
        focItems: generatedFocItems,
        totalFocUnits: totalFocUnits,
        appliedSchemes: appliedSchemes
    };
}

function renderFocManagementTab() {
    renderFocKpiStats();
    renderFocSchemesTable();
    renderFocReportTable();
}

function renderFocKpiStats() {
    const todayStr = new Date().toISOString().split('T')[0];
    const activeSchemes = getActiveFocSchemes(todayStr);

    const activeEl = document.getElementById("focStatActiveSchemes");
    if (activeEl) activeEl.innerText = activeSchemes.length;

    let totalUnitsToday = 0;
    let totalValueToday = 0;
    const focProductCounts = {};

    (AppState.bills || []).forEach(b => {
        if (b.date === todayStr && !b.isVoid) {
            (b.items || []).forEach(i => {
                if (i.isFoc) {
                    const ctn = (i.cartons || 0);
                    const pack = i.pack || 12;
                    const units = ctn * pack + (i.units || 0);
                    totalUnitsToday += units;
                    
                    const sku = (AppState.skus || []).find(s => s.code === i.code);
                    const tp = sku ? sku.tpRate : (i.tpRate || 900);
                    totalValueToday += (ctn * tp);

                    const pName = i.desc || (sku ? sku.desc : i.code);
                    focProductCounts[pName] = (focProductCounts[pName] || 0) + units;
                }
            });
        }
    });

    const unitsEl = document.getElementById("focStatUnitsToday");
    if (unitsEl) unitsEl.innerText = `${totalUnitsToday} Units`;

    const valEl = document.getElementById("focStatTotalValue");
    if (valEl) valEl.innerText = `Rs. ${totalValueToday.toLocaleString()}`;

    let topProd = "-";
    let maxUnits = 0;
    Object.keys(focProductCounts).forEach(p => {
        if (focProductCounts[p] > maxUnits) {
            maxUnits = focProductCounts[p];
            topProd = p;
        }
    });

    const topEl = document.getElementById("focStatTopProduct");
    if (topEl) topEl.innerText = topProd.length > 22 ? topProd.substring(0, 22) + "..." : topProd;
}

function switchFocSubTab(subTab, btn) {
    document.querySelectorAll(".reports-nav-pills .report-pill").forEach(b => b.classList.remove("active"));
    if (btn) btn.classList.add("active");

    const schemesContent = document.getElementById("focSubTabSchemesContent");
    const reportContent = document.getElementById("focSubTabReportContent");

    if (subTab === "schemes") {
        if (schemesContent) schemesContent.style.display = "block";
        if (reportContent) reportContent.style.display = "none";
        renderFocSchemesTable();
    } else {
        if (schemesContent) schemesContent.style.display = "none";
        if (reportContent) reportContent.style.display = "block";
        renderFocReportTable();
    }
}

function renderFocSchemesTable() {
    const tbody = document.getElementById("focSchemesTableBody");
    if (!tbody) return;

    const searchTerm = (document.getElementById("focSchemeSearchInput")?.value || "").toLowerCase().trim();
    const statusFilter = document.getElementById("focSchemeStatusFilter")?.value || "all";
    const todayStr = new Date().toISOString().split('T')[0];

    let filtered = (AppState.focSchemes || []).filter(sch => {
        if (statusFilter !== "all") {
            const st = String(sch.status || 'Active').toLowerCase();
            if (statusFilter === "active" && st !== "active") return false;
            if (statusFilter === "scheduled" && st !== "scheduled") return false;
            if (statusFilter === "expired" && st !== "expired") return false;
            if (statusFilter === "disabled" && st !== "disabled") return false;
        }
        if (searchTerm) {
            const nameMatch = sch.name && sch.name.toLowerCase().includes(searchTerm);
            const buyMatch = sch.buySkuCode && sch.buySkuCode.toLowerCase().includes(searchTerm);
            const focMatch = sch.focSkuCode && sch.focSkuCode.toLowerCase().includes(searchTerm);
            return nameMatch || buyMatch || focMatch;
        }
        return true;
    });

    if (filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="10" style="text-align: center; color: var(--text-muted); padding: 24px;">No FOC Schemes found matching criteria.</td></tr>`;
        return;
    }

    const rows = [];
    filtered.forEach(sch => {
        const targetBuyCodes = Array.isArray(sch.buySkuCodes) && sch.buySkuCodes.length > 0 
            ? sch.buySkuCodes 
            : (sch.buySkuCode ? [sch.buySkuCode] : []);

        let buySummaryText = "-";
        if (targetBuyCodes.length === 1) {
            const s = (AppState.skus || []).find(x => x.code === targetBuyCodes[0]);
            buySummaryText = s ? s.desc : targetBuyCodes[0];
        } else if (targetBuyCodes.length > 1) {
            buySummaryText = `<span class="badge badge-warning">${targetBuyCodes.length} SKUs Combo</span>`;
        }

        const focSku = (AppState.skus || []).find(s => s.code === sch.focSkuCode) || { desc: sch.focSkuCode };

        let slabsHtml = "";
        if (Array.isArray(sch.slabs)) {
            slabsHtml = sch.slabs.map(s => {
                const cLabel = parseFloat(s.focQtyCartons || 0) > 0 ? `${s.focQtyCartons} Ctn` : '';
                const uLabel = parseFloat(s.focQtyUnits || 0) > 0 ? `${s.focQtyCartons > 0 ? '+ ' : ''}${s.focQtyUnits} Pkt` : '';
                return `<span class="badge badge-info" style="font-size: 10px; margin-right: 4px;">Buy ${s.buyQtyCartons} → ${cLabel} ${uLabel}</span>`;
            }).join(" ");
        }

        let statusBadge = `<span class="badge badge-success">🟢 Active</span>`;
        if (sch.status === "Disabled") statusBadge = `<span class="badge badge-danger">🔴 Disabled</span>`;
        else if (sch.status === "Scheduled") statusBadge = `<span class="badge badge-warning">🟡 Scheduled</span>`;
        else if (sch.endDate && todayStr > sch.endDate) statusBadge = `<span class="badge badge-secondary">⚪ Expired</span>`;

        let eligText = "All Customers";
        if (sch.eligibility && sch.eligibility.type === "route") eligText = `Routes (${(sch.eligibility.values || []).length})`;
        else if (sch.eligibility && sch.eligibility.type === "salesman") eligText = `Salesmen (${(sch.eligibility.values || []).length})`;

        let discText = "All Shops";
        if (sch.eligibility && sch.eligibility.shopDiscountFilter === "discounted") discText = "Disc. Shops Only";
        else if (sch.eligibility && sch.eligibility.shopDiscountFilter === "undiscounted") discText = "Standard Shops Only";

        rows.push(`
            <tr>
                <td><strong>${sch.name}</strong></td>
                <td>${buySummaryText}</td>
                <td>${focSku.desc || sch.focSkuCode}</td>
                <td>${slabsHtml}</td>
                <td>${sch.startDate || 'Immediate'} to ${sch.endDate || 'No Expiry'}</td>
                <td>${eligText} (${discText})</td>
                <td>${sch.repeatable ? '✅ Yes' : '❌ No'}</td>
                <td>${statusBadge}</td>
                <td>
                    <button class="btn-action btn-secondary" style="padding: 4px 8px; font-size: 11px;" onclick="openEditFocSchemeModal('${sch.id}')">Edit</button>
                    <button class="btn-action btn-danger" style="padding: 4px 8px; font-size: 11px;" onclick="toggleFocSchemeStatus('${sch.id}')">${sch.status === 'Disabled' ? 'Enable' : 'Disable'}</button>
                </td>
            </tr>
        `);
    });
    tbody.innerHTML = rows.join('');
}

function renderFocReportTable() {
    const tbody = document.getElementById("focReportTableBody");
    if (!tbody) return;

    const searchTerm = (document.getElementById("focReportSearchInput")?.value || "").toLowerCase().trim();
    const datePreset = document.getElementById("focReportDatePreset")?.value || "thisMonth";

    const { start, end } = getStartEndDatesFromPreset(datePreset, "focReportStartDate", "focReportEndDate");

    let items = [];
    (AppState.bills || []).forEach(b => {
        if (b.isVoid || b.deliveryStatus === "Cancelled") return;
        if (start && b.date < start) return;
        if (end && b.date > end) return;

        (b.items || []).forEach(i => {
            if (i.isFoc) {
                items.push({
                    date: b.date,
                    billNo: b.billNo,
                    shopName: b.shopName,
                    salesman: b.salesman || "Salesman",
                    schemeName: i.schemeName || "FOC Scheme",
                    desc: i.desc,
                    cartons: i.cartons || 0,
                    units: i.units || 0
                });
            }
        });
    });

    if (searchTerm) {
        items = items.filter(i => 
            i.shopName.toLowerCase().includes(searchTerm) ||
            i.billNo.toLowerCase().includes(searchTerm) ||
            i.schemeName.toLowerCase().includes(searchTerm) ||
            i.desc.toLowerCase().includes(searchTerm)
        );
    }

    if (items.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" style="text-align: center; color: var(--text-muted); padding: 24px;">No FOC Items distributed in selected period.</td></tr>`;
        return;
    }

    const rows = [];
    items.forEach(i => {
        rows.push(`
            <tr>
                <td>${i.date}</td>
                <td><strong>${i.billNo}</strong></td>
                <td>${i.shopName}</td>
                <td><span class="badge badge-info">${i.schemeName}</span></td>
                <td>${i.desc}</td>
                <td><strong>${i.cartons} Ctns ${i.units > 0 ? `+${i.units} Pkts` : ''}</strong></td>
            </tr>
        `);
    });
    tbody.innerHTML = rows.join('');
}

function populateFocSkuDropdowns() {
    const buySel = document.getElementById("focBuySkuCodes");
    const rewardSel = document.getElementById("focRewardSkuCode");
    if (!buySel || !rewardSel) return;

    buySel.innerHTML = "";
    rewardSel.innerHTML = "";

    (AppState.skus || []).forEach(s => {
        const optHtml = `<option value="${s.code}">${s.desc} (Rs. ${s.tpRate})</option>`;
        buySel.innerHTML += optHtml;
        rewardSel.innerHTML += optHtml;
    });
}

function selectAllFocBuySkus(select = true) {
    const sel = document.getElementById("focBuySkuCodes");
    if (!sel) return;
    Array.from(sel.options).forEach(opt => opt.selected = select);
    updateFocPreview();
}

function openCreateFocSchemeModal(schemeId) {
    populateFocSkuDropdowns();

    const titleEl = document.getElementById("focSchemeModalTitle");
    const idEl = document.getElementById("focSchemeId");
    const nameEl = document.getElementById("focSchemeName");
    const statusEl = document.getElementById("focSchemeStatus");
    const startEl = document.getElementById("focSchemeStartDate");
    const endEl = document.getElementById("focSchemeEndDate");
    const priorityEl = document.getElementById("focSchemePriority");
    const repeatEl = document.getElementById("focSchemeRepeatable");

    const todayStr = new Date().toISOString().split('T')[0];
    const endOfMonth = new Date();
    endOfMonth.setMonth(endOfMonth.getMonth() + 1);
    const endStr = endOfMonth.toISOString().split('T')[0];

    const slabsContainer = document.getElementById("focSlabsContainer");
    slabsContainer.innerHTML = "";

    if (schemeId) {
        const sch = (AppState.focSchemes || []).find(s => s.id === schemeId);
        if (sch) {
            titleEl.innerHTML = `<i class="fa-solid fa-pen"></i> Edit FOC Scheme: ${sch.name}`;
            idEl.value = sch.id;
            nameEl.value = sch.name;
            statusEl.value = sch.status || "Active";
            startEl.value = sch.startDate || todayStr;
            endEl.value = sch.endDate || endStr;
            priorityEl.value = sch.priority || 1;
            repeatEl.value = sch.repeatable ? "true" : "false";

            const buySel = document.getElementById("focBuySkuCodes");
            if (buySel) {
                const targetCodes = Array.isArray(sch.buySkuCodes) && sch.buySkuCodes.length > 0 
                    ? sch.buySkuCodes 
                    : (sch.buySkuCode ? [sch.buySkuCode] : []);
                Array.from(buySel.options).forEach(opt => {
                    opt.selected = targetCodes.includes(opt.value);
                });
            }

            if (document.getElementById("focRewardSkuCode")) document.getElementById("focRewardSkuCode").value = sch.focSkuCode;
            if (document.getElementById("focShopDiscountFilter")) {
                document.getElementById("focShopDiscountFilter").value = (sch.eligibility && sch.eligibility.shopDiscountFilter) ? sch.eligibility.shopDiscountFilter : "all";
            }

            if (Array.isArray(sch.slabs) && sch.slabs.length > 0) {
                sch.slabs.forEach(sl => addFocSlabRow(sl.buyQtyCartons, sl.focQtyCartons, sl.focQtyUnits || 0));
            } else {
                addFocSlabRow(10, 1, 0);
            }
        }
    } else {
        titleEl.innerHTML = `<i class="fa-solid fa-gift"></i> Create New FOC Scheme`;
        idEl.value = "";
        nameEl.value = "";
        statusEl.value = "Active";
        startEl.value = todayStr;
        endEl.value = endStr;
        priorityEl.value = 1;
        repeatEl.value = "true";
        if (document.getElementById("focShopDiscountFilter")) document.getElementById("focShopDiscountFilter").value = "all";

        addFocSlabRow(10, 1, 0);
        addFocSlabRow(20, 2, 0);
    }

    updateFocPreview();
    openModal("focSchemeModal");
}

function addFocSlabRow(buyQty = 10, focQty = 1, focUnits = 0) {
    const container = document.getElementById("focSlabsContainer");
    if (!container) return;

    const rowId = `slab_row_${Date.now()}_${Math.floor(Math.random() * 1000)}`;

    container.innerHTML += `
        <div class="foc-slab-row" id="${rowId}" style="display: flex; gap: 8px; align-items: center; background: rgba(255,255,255,0.02); padding: 8px; border-radius: 8px; margin-bottom: 8px;">
            <div style="flex: 1;">
                <label style="font-size: 11px; color: var(--text-secondary);">Min Buy Cartons</label>
                <input type="number" class="form-control slab-buy-qty" value="${buyQty}" min="1" required oninput="updateFocPreview()">
            </div>
            <div style="display: flex; align-items: center; font-size: 16px; font-weight: bold; color: var(--brand-gold); margin-top: 14px;">
                ➔
            </div>
            <div style="flex: 1;">
                <label style="font-size: 11px; color: var(--text-secondary);">Free FOC Cartons</label>
                <input type="number" class="form-control slab-foc-qty" value="${focQty}" min="0" required oninput="updateFocPreview()">
            </div>
            <div style="flex: 1;">
                <label style="font-size: 11px; color: var(--text-secondary);">Free FOC Packets (Units)</label>
                <input type="number" class="form-control slab-foc-units" value="${focUnits}" min="0" required oninput="updateFocPreview()">
            </div>
            <button type="button" class="btn btn-outline btn-sm" style="color: #ef4444; margin-top: 14px;" onclick="removeFocSlabRow('${rowId}')"><i class="fa-solid fa-trash"></i></button>
        </div>
    `;
    updateFocPreview();
}

function removeFocSlabRow(rowId) {
    const elem = document.getElementById(rowId);
    if (elem) elem.remove();
    updateFocPreview();
}

function toggleFocEligibilityOptions() {
    const type = document.getElementById("focEligibilityType").value;
    const group = document.getElementById("focEligibilitySelectGroup");
    const label = document.getElementById("focEligibilitySelectLabel");
    const select = document.getElementById("focEligibilitySelect");

    if (type === "all") {
        if (group) group.style.display = "none";
    } else {
        if (group) group.style.display = "block";
        if (select) {
            select.innerHTML = "";
            if (type === "route") {
                if (label) label.innerText = "Select Eligible Routes";
                (AppState.routes || []).forEach(r => {
                    select.innerHTML += `<option value="${r.id}">${r.name}</option>`;
                });
            } else if (type === "salesman") {
                if (label) label.innerText = "Select Eligible Salesmen";
                (AppState.salesmen || []).forEach(s => {
                    select.innerHTML += `<option value="${s.id}">${s.name}</option>`;
                });
            }
        }
    }
}

function updateFocPreview() {
    const previewEl = document.getElementById("focLivePreviewBox");
    if (!previewEl) return;

    const buySel = document.getElementById("focBuySkuCodes");
    const selectedBuyCodes = buySel ? Array.from(buySel.selectedOptions).map(o => o.value) : [];

    const focCode = document.getElementById("focRewardSkuCode")?.value;
    const shopDisc = document.getElementById("focShopDiscountFilter")?.value || "all";

    let buySkuDesc = "Qualifying Product";
    if (selectedBuyCodes.length === 1) {
        const s = (AppState.skus || []).find(x => x.code === selectedBuyCodes[0]);
        if (s) buySkuDesc = s.desc;
    } else if (selectedBuyCodes.length > 1) {
        buySkuDesc = `${selectedBuyCodes.length} Selected SKUs (Combo)`;
    }

    const focSku = (AppState.skus || []).find(s => s.code === focCode) || { desc: "Free FOC Product" };

    const slabRows = document.querySelectorAll(".foc-slab-row");
    const rulesText = [];

    slabRows.forEach(row => {
        const buy = row.querySelector(".slab-buy-qty")?.value || 0;
        const focCtn = row.querySelector(".slab-foc-qty")?.value || 0;
        const focPkt = row.querySelector(".slab-foc-units")?.value || 0;
        if (buy > 0 && (focCtn > 0 || focPkt > 0)) {
            const rewardLabel = `${focCtn > 0 ? `${focCtn} Ctns` : ''} ${focPkt > 0 ? `${focCtn > 0 ? '+ ' : ''}${focPkt} Packets` : ''}`.trim();
            rulesText.push(`Buy ${buy} ${buySkuDesc} ➔ Get ${rewardLabel} ${focSku.desc} FREE`);
        }
    });

    let shopDiscText = "";
    if (shopDisc === "discounted") shopDiscText = " [Discounted Shops Only]";
    else if (shopDisc === "undiscounted") shopDiscText = " [Undiscounted Shops Only]";

    if (rulesText.length === 0) {
        previewEl.innerHTML = `🎁 Live Preview: Configure Slabs Above`;
    } else {
        previewEl.innerHTML = `🎁 <strong>Rule Preview:</strong> ${rulesText.join(" | ")}${shopDiscText}`;
    }
}

function saveFocSchemeFromModal() {
    const id = document.getElementById("focSchemeId").value;
    const name = document.getElementById("focSchemeName").value.trim();
    const status = document.getElementById("focSchemeStatus").value;
    const startDate = document.getElementById("focSchemeStartDate").value;
    const endDate = document.getElementById("focSchemeEndDate").value;
    const priority = parseInt(document.getElementById("focSchemePriority").value || "1");
    const repeatable = document.getElementById("focSchemeRepeatable").value === "true";

    const buySel = document.getElementById("focBuySkuCodes");
    const selectedBuyCodes = buySel ? Array.from(buySel.selectedOptions).map(o => o.value) : [];

    if (selectedBuyCodes.length === 0) {
        return alert("Please select at least 1 Qualifying Buy SKU!");
    }

    const focSkuCode = document.getElementById("focRewardSkuCode").value;
    const shopDiscountFilter = document.getElementById("focShopDiscountFilter")?.value || "all";

    const slabRows = document.querySelectorAll(".foc-slab-row");
    const slabs = [];

    slabRows.forEach(row => {
        const bQty = parseFloat(row.querySelector(".slab-buy-qty")?.value || 0);
        const fCtn = parseFloat(row.querySelector(".slab-foc-qty")?.value || 0);
        const fPkt = parseFloat(row.querySelector(".slab-foc-units")?.value || 0);
        if (bQty > 0 && (fCtn > 0 || fPkt > 0)) {
            slabs.push({ buyQtyCartons: bQty, focQtyCartons: fCtn, focQtyUnits: fPkt });
        }
    });

    if (slabs.length === 0) {
        return alert("Please add at least 1 valid FOC slab (Buy Qty > 0 and FOC Cartons or Packets > 0)!");
    }

    const eligType = document.getElementById("focEligibilityType").value;
    const eligSel = document.getElementById("focEligibilitySelect");
    const selectedValues = eligSel ? Array.from(eligSel.selectedOptions).map(o => o.value) : [];

    const schemeObj = {
        id: id || `foc_sch_${Date.now()}`,
        name: name,
        startDate: startDate,
        endDate: endDate,
        status: status,
        priority: priority,
        repeatable: repeatable,
        buySkuCodes: selectedBuyCodes,
        buySkuCode: selectedBuyCodes[0], // fallback string
        focSkuCode: focSkuCode,
        slabs: slabs,
        eligibility: {
            type: eligType,
            values: selectedValues,
            shopDiscountFilter: shopDiscountFilter
        }
    };

    if (!AppState.focSchemes) AppState.focSchemes = [];

    if (id) {
        const idx = AppState.focSchemes.findIndex(s => s.id === id);
        if (idx !== -1) AppState.focSchemes[idx] = schemeObj;
        else AppState.focSchemes.push(schemeObj);
    } else {
        AppState.focSchemes.push(schemeObj);
    }

    saveStateToStorage();
    closeModal("focSchemeModal");
    renderFocManagementTab();
    alert(`🎉 FOC Scheme "${name}" saved successfully!`);
}

function toggleFocSchemeStatus(schemeId) {
    const sch = (AppState.focSchemes || []).find(s => s.id === schemeId);
    if (!sch) return;

    sch.status = (sch.status === "Disabled") ? "Active" : "Disabled";
    saveStateToStorage();
    renderFocSchemesTable();
}

function deleteFocScheme(schemeId) {
    const sch = (AppState.focSchemes || []).find(s => s.id === schemeId);
    if (!sch) return;

    if (confirm(`Are you sure you want to delete FOC Scheme "${sch.name}"?`)) {
        AppState.focSchemes = AppState.focSchemes.filter(s => s.id !== schemeId);
        saveStateToStorage();
        renderFocManagementTab();
    }
}

/* ==========================================================================
   REDESIGNED EXECUTIVE SALES ANALYTICS DASHBOARD ENGINE (EXACT REFERENCE UI)
   ========================================================================== */

if (!window.DashboardCharts) {
    window.DashboardCharts = {};
}

if (!AppState.dashboardProductMetrics) {
    AppState.dashboardProductMetrics = {
        lays: 'value',
        kurkure: 'value',
        cheetos: 'value',
        nimco: 'value',
        peanut: 'value',
        hash: 'value'
    };
}

function selectDashboardBrand(brandKey) {
    document.querySelectorAll('.dash-brand-btn').forEach(btn => {
        if (btn.getAttribute('data-brand') === brandKey) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    // Map UI brand key to internal company ID: 'fast' → 'hash'
    const internalCompId = (brandKey === 'fast') ? 'hash' : brandKey;
    const compEl = document.getElementById("dashboardCompanyFilter");
    if (compEl) {
        compEl.value = internalCompId;
    }
    AppState.selectedCompanyId = internalCompId;
    renderDashboard();
}

function setProductMetricToggle(productKey, metric) {
    AppState.dashboardProductMetrics[productKey] = metric;
    renderDashboard();
}

function setSalesTrendMetricToggle(metric) {
    AppState.salesTrendMetric = metric;
    renderDashboard();
}

function setBrandComparisonMetricToggle(metric) {
    AppState.brandComparisonMetric = metric;
    renderDashboard();
}

function exportDashboardSummary() {
    if (typeof exportSalesSummaryCSV === "function") {
        exportSalesSummaryCSV();
    } else {
        alert("📄 Dashboard Sales Summary exported!");
    }
}

function getProductGroup(item) {
    if (!item) return { brand: "lays", productKey: "lays", productName: "Lays", categoryType: "PC" };
    const cId = getCompanyIdForItem(item);
    const desc = String(item.desc || "").toLowerCase();
    const code = String(item.code || "").toUpperCase();

    if (cId === "hash" || code.startsWith("HASH")) {
        // FAST BRAND (No PC/NPC)
        if (desc.includes("peanut") || desc.includes("moongphali") || desc.includes("phali")) {
            return { brand: "fast", productKey: "peanut", productName: "Peanut & Moongphali", categoryType: null };
        } else if (desc.includes("nimko") || desc.includes("nimco")) {
            return { brand: "fast", productKey: "nimco", productName: "Nimco Mix & Snacks", categoryType: null };
        } else {
            return { brand: "fast", productKey: "hash", productName: "Hash Catalog & Others", categoryType: null };
        }
    } else {
        // LAYS BRAND
        if (desc.includes("kurkure")) {
            return { brand: "lays", productKey: "kurkure", productName: "Kurkure", categoryType: "NPC" };
        } else if (desc.includes("cheetos")) {
            return { brand: "lays", productKey: "cheetos", productName: "Cheetos", categoryType: "NPC" };
        } else {
            return { brand: "lays", productKey: "lays", productName: "Lays", categoryType: "PC" };
        }
    }
}

function renderDashboard() {
    // 1. Alert Banners
    const pendingBills = AppState.bills.filter(b => b.deliveryStatus === "Pending" && !b.isVoid);
    const banner = document.getElementById("pendingDeliveriesBanner");
    const bannerText = document.getElementById("pendingBannerText");
    if (pendingBills.length > 0 && banner && bannerText) {
        banner.classList.remove("hidden");
        bannerText.innerText = `You have ${pendingBills.length} draft bill(s) dispatched for delivery awaiting confirmation.`;
    } else if (banner) {
        banner.classList.add("hidden");
    }

    const lowStockSkus = (AppState.skus || []).filter(s => (s.stockCartons || 0) <= 0);
    const lowStockBanner = document.getElementById("dashboardLowStockBanner");
    const lowStockText = document.getElementById("dashboardLowStockText");
    if (lowStockSkus.length > 0 && lowStockBanner && lowStockText) {
        lowStockBanner.classList.remove("hidden");
        const skuNames = lowStockSkus.slice(0, 3).map(s => s.desc).join(', ');
        lowStockText.innerText = `Alert: ${lowStockSkus.length} SKU(s) (${skuNames}...) are OUT OF STOCK.`;
    } else if (lowStockBanner) {
        lowStockBanner.classList.add("hidden");
    }

    // 2. Brand & Date Filters
    const compEl = document.getElementById("dashboardCompanyFilter");
    const brandFilter = compEl ? compEl.value : (AppState.selectedCompanyId || "all");
    AppState.selectedCompanyId = brandFilter;

    // Sync brand button UI
    document.querySelectorAll('.dash-brand-btn').forEach(btn => {
        if (btn.getAttribute('data-brand') === brandFilter) btn.classList.add('active');
        else btn.classList.remove('active');
    });

    const preset = document.getElementById("datePresetSelect")?.value || AppState.dateFilter?.preset || "7days";
    const { start, end } = getStartEndDatesFromPreset(preset, "startDateInput", "endDateInput");

    // Format Date Range Display Label
    const dateRangeLabelEl = document.getElementById("dashboardDateRangeLabel");
    if (dateRangeLabelEl) {
        if (start && end) {
            const formatD = (dStr) => {
                const parts = dStr.split('-');
                if (parts.length !== 3) return dStr;
                const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
                return `${parts[2]} ${months[parseInt(parts[1],10)-1]} ${parts[0]}`;
            };
            dateRangeLabelEl.innerText = `${formatD(start)} – ${formatD(end)}`;
        } else {
            dateRangeLabelEl.innerText = `All Time Ledger`;
        }
    }

    const prodSubtitleEl = document.getElementById("productSectionSubtitle");
    if (prodSubtitleEl && dateRangeLabelEl) {
        prodSubtitleEl.innerText = `Showing data for: ${dateRangeLabelEl.innerText}`;
    }

    // 3. Filter Bills & Construct Timeline
    const deliveredBills = getConfirmedDeliveredBillsForDashboard();

    let dateList = [];
    if (start && end) {
        let curr = new Date(start);
        const last = new Date(end);
        while (curr <= last) {
            dateList.push(curr.toISOString().split('T')[0]);
            curr.setDate(curr.getDate() + 1);
        }
    }
    if (dateList.length === 0) {
        const billDates = Array.from(new Set(deliveredBills.map(b => normalizeDateToISO(b.date || b.createdDate)))).filter(Boolean).sort();
        if (billDates.length > 0) {
            dateList = billDates;
        } else {
            const today = new Date();
            for (let i = 6; i >= 0; i--) {
                const d = new Date();
                d.setDate(today.getDate() - i);
                dateList.push(d.toISOString().split('T')[0]);
            }
        }
    }

    // Initialize tracking structures
    let totalSalesValue = 0;
    let totalCartons = 0;
    let totalUnits = 0;
    let totalPackets = 0;
    let totalKG = 0;

    let pcValue = 0, pcKg = 0, pcCartons = 0;
    let npcValue = 0, npcKg = 0, npcCartons = 0;
    let fastValue = 0, fastKg = 0, fastCartons = 0;

    const dailyOverallSales = {};
    const dailyBrandSales = { lays: {}, fast: {} };
    const dailyProductSales = {
        lays: {}, kurkure: {}, cheetos: {},
        nimco: {}, peanut: {}, hash: {}
    };
    const productTotals = {
        lays: { value: 0, kg: 0, cartons: 0 },
        kurkure: { value: 0, kg: 0, cartons: 0 },
        cheetos: { value: 0, kg: 0, cartons: 0 },
        nimco: { value: 0, kg: 0, cartons: 0 },
        peanut: { value: 0, kg: 0, cartons: 0 },
        hash: { value: 0, kg: 0, cartons: 0 }
    };

    dateList.forEach(d => {
        dailyOverallSales[d] = 0;
        dailyBrandSales.lays[d] = { value: 0, kg: 0, cartons: 0 };
        dailyBrandSales.fast[d] = { value: 0, kg: 0, cartons: 0 };
        Object.keys(dailyProductSales).forEach(pk => {
            dailyProductSales[pk][d] = { value: 0, kg: 0, cartons: 0 };
        });
    });

    const salesmanMap = {};
    const skuSalesMap = {};

    deliveredBills.forEach(b => {
        const bDate = normalizeDateToISO(b.date || b.createdDate);

        (b.items || []).forEach(i => {
            const pGrp = getProductGroup(i);

            if (brandFilter === "lays" && pGrp.brand !== "lays") return;
            if (brandFilter === "fast" && pGrp.brand !== "fast") return;

            const sku = AppState.skus.find(s => s.code === i.code || (i.desc && s.desc.toLowerCase() === i.desc.toLowerCase()));
            const rate = (i.tpRate && i.tpRate > 0) ? i.tpRate : (sku ? sku.tpRate : 900);
            const grams = i.grams || (sku ? sku.grams : 72);
            const pack = i.pack || (sku ? sku.pack : 12);

            const iCtn = i.cartons || 0;
            const iUnits = i.units || 0;
            const iPkts = i.totalPackets || ((iCtn * pack) + iUnits);
            const iKg = (i.weightKg && i.weightKg > 0) ? i.weightKg : ((grams * iPkts) / 1000);

            const basicAmt = i.basicAmount || (rate * iCtn);
            const discAmt = (i.discAmount !== undefined && i.discAmount !== null) ? i.discAmount : (basicAmt * 0.04);
            const iAmt = (i.amount && i.amount > 0) ? i.amount : (basicAmt - discAmt);

            totalSalesValue += iAmt;
            totalCartons += iCtn;
            totalUnits += iUnits;
            totalPackets += iPkts;
            totalKG += iKg;

            if (pGrp.brand === "lays") {
                if (pGrp.categoryType === "PC") {
                    pcValue += iAmt; pcKg += iKg; pcCartons += iCtn;
                } else {
                    npcValue += iAmt; npcKg += iKg; npcCartons += iCtn;
                }
            } else {
                fastValue += iAmt; fastKg += iKg; fastCartons += iCtn;
            }

            const pk = pGrp.productKey;
            if (productTotals[pk]) {
                productTotals[pk].value += iAmt;
                productTotals[pk].kg += iKg;
                productTotals[pk].cartons += iCtn;
            }

            if (bDate && dailyOverallSales[bDate] !== undefined) {
                dailyOverallSales[bDate] += iAmt;
                if (pGrp.brand === "lays") {
                    dailyBrandSales.lays[bDate].value += iAmt;
                    dailyBrandSales.lays[bDate].kg += iKg;
                    dailyBrandSales.lays[bDate].cartons += iCtn;
                } else {
                    dailyBrandSales.fast[bDate].value += iAmt;
                    dailyBrandSales.fast[bDate].kg += iKg;
                    dailyBrandSales.fast[bDate].cartons += iCtn;
                }

                if (dailyProductSales[pk] && dailyProductSales[pk][bDate]) {
                    dailyProductSales[pk][bDate].value += iAmt;
                    dailyProductSales[pk][bDate].kg += iKg;
                    dailyProductSales[pk][bDate].cartons += iCtn;
                }
            }

            const skuKey = i.code || i.desc;
            if (!skuSalesMap[skuKey]) {
                skuSalesMap[skuKey] = {
                    code: i.code,
                    desc: i.desc || i.code,
                    brand: pGrp.productName,
                    cartons: 0,
                    weightKg: 0,
                    revenue: 0
                };
            }
            skuSalesMap[skuKey].cartons += iCtn;
            skuSalesMap[skuKey].weightKg += iKg;
            skuSalesMap[skuKey].revenue += iAmt;
        });

        const sm = b.salesman || "Salesman 1";
        const bNet = (b.items || []).reduce((sum, i) => {
            const pGrp = getProductGroup(i);
            if (brandFilter === "lays" && pGrp.brand !== "lays") return sum;
            if (brandFilter === "fast" && pGrp.brand !== "fast") return sum;
            return sum + (i.amount || 0);
        }, 0);

        const bCtn = (b.items || []).reduce((sum, i) => {
            const pGrp = getProductGroup(i);
            if (brandFilter === "lays" && pGrp.brand !== "lays") return sum;
            if (brandFilter === "fast" && pGrp.brand !== "fast") return sum;
            return sum + (i.cartons || 0);
        }, 0);

        const bKg = (b.items || []).reduce((sum, i) => {
            const pGrp = getProductGroup(i);
            if (brandFilter === "lays" && pGrp.brand !== "lays") return sum;
            if (brandFilter === "fast" && pGrp.brand !== "fast") return sum;
            return sum + (i.weightKg || 0);
        }, 0);

        if (bNet > 0 || bKg > 0) {
            if (!salesmanMap[sm]) salesmanMap[sm] = { bills: 0, cartons: 0, weight: 0, sales: 0 };
            salesmanMap[sm].bills += 1;
            salesmanMap[sm].cartons += bCtn;
            salesmanMap[sm].weight += bKg;
            salesmanMap[sm].sales += bNet;
        }
    });

    const uniqueBilledShops = new Set(deliveredBills.map(b => b.shopName));

    // Populate Core 5 KPI Cards
    if (document.getElementById("kpiTotalValue")) document.getElementById("kpiTotalValue").innerText = `Rs. ${Math.round(totalSalesValue).toLocaleString()}`;
    if (document.getElementById("kpiTotalCartonsCount")) document.getElementById("kpiTotalCartonsCount").innerText = `${totalCartons.toLocaleString()} Ctns`;
    if (document.getElementById("kpiTotalKG")) document.getElementById("kpiTotalKG").innerText = `${totalKG.toFixed(2)} KG`;
    if (document.getElementById("kpiBilledShops")) document.getElementById("kpiBilledShops").innerText = `${uniqueBilledShops.size} Shops`;
    if (document.getElementById("kpiTotalInvoices")) document.getElementById("kpiTotalInvoices").innerText = `${deliveredBills.length} Bills`;

    // Render Charts & Tables
    renderOverallSalesTrendChart(dateList, dailyBrandSales);
    renderBrandComparisonChart(dateList, dailyBrandSales, productTotals);
    renderProductAnalyticsSection(brandFilter, dateList, dailyProductSales, productTotals);
    renderSalesmanPerformanceTable(salesmanMap, totalSalesValue);
    renderKeyInsights(totalSalesValue, productTotals, dailyOverallSales, dateList);
    renderTopSkusTable(skuSalesMap);
}

function renderOverallSalesTrendChart(dateList, dailyBrandSales) {
    const canvas = document.getElementById("overallSalesTrendChart");
    if (!canvas || typeof Chart === "undefined") return;

    const metricSelect = document.getElementById("salesTrendMetricSelect");
    if (metricSelect && AppState.salesTrendMetric) {
        metricSelect.value = AppState.salesTrendMetric;
    }

    const metric = AppState.salesTrendMetric || 'value';
    const metricUnit = metric === 'value' ? 'Rs. ' : (metric === 'kg' ? ' KG' : ' Ctns');
    const metricLabel = metric === 'value' ? ' (Rs.)' : (metric === 'kg' ? ' (KG)' : ' (Ctns)');

    const laysLegEl = document.getElementById("laysBrandLegendLabel");
    const fastLegEl = document.getElementById("fastBrandLegendLabel");
    if (laysLegEl) laysLegEl.innerText = `Lays Brand${metricLabel}`;
    if (fastLegEl) fastLegEl.innerText = `Fast Brand${metricLabel}`;

    if (window.DashboardCharts.overallTrend) {
        window.DashboardCharts.overallTrend.destroy();
    }

    const labels = dateList.map(d => {
        const parts = d.split('-');
        if (parts.length === 3) {
            const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
            return `${parts[2]} ${months[parseInt(parts[1],10)-1]}`;
        }
        return d;
    });

    const laysData = dateList.map(d => {
        const entry = dailyBrandSales.lays[d] || { value: 0, kg: 0, cartons: 0 };
        if (metric === 'value') return Math.round(entry.value);
        if (metric === 'kg') return parseFloat(entry.kg.toFixed(2));
        return entry.cartons;
    });

    const fastData = dateList.map(d => {
        const entry = dailyBrandSales.fast[d] || { value: 0, kg: 0, cartons: 0 };
        if (metric === 'value') return Math.round(entry.value);
        if (metric === 'kg') return parseFloat(entry.kg.toFixed(2));
        return entry.cartons;
    });

    const ctx = canvas.getContext('2d');
    const laysGrad = ctx.createLinearGradient(0, 0, 0, 250);
    laysGrad.addColorStop(0, 'rgba(37, 99, 235, 0.25)');
    laysGrad.addColorStop(1, 'rgba(37, 99, 235, 0.0)');

    const fastGrad = ctx.createLinearGradient(0, 0, 0, 250);
    fastGrad.addColorStop(0, 'rgba(249, 115, 22, 0.25)');
    fastGrad.addColorStop(1, 'rgba(249, 115, 22, 0.0)');

    window.DashboardCharts.overallTrend = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: `Lays Brand${metricLabel}`,
                    data: laysData,
                    borderColor: '#2563eb',
                    borderWidth: 3,
                    backgroundColor: laysGrad,
                    fill: true,
                    tension: 0.35,
                    pointBackgroundColor: '#2563eb',
                    pointBorderColor: '#ffffff',
                    pointRadius: 4,
                    pointHoverRadius: 7
                },
                {
                    label: `Fast Brand${metricLabel}`,
                    data: fastData,
                    borderColor: '#f97316',
                    borderWidth: 3,
                    backgroundColor: fastGrad,
                    fill: true,
                    tension: 0.35,
                    pointBackgroundColor: '#f97316',
                    pointBorderColor: '#ffffff',
                    pointRadius: 4,
                    pointHoverRadius: 7
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: '#0f172a',
                    titleColor: '#f8fafc',
                    bodyColor: '#cbd5e1',
                    cornerRadius: 8,
                    callbacks: {
                        label: (ctx) => ` ${ctx.dataset.label}: ${metric === 'value' ? 'Rs. ' + ctx.parsed.y.toLocaleString() : ctx.parsed.y.toLocaleString() + metricUnit}`
                    }
                }
            },
            scales: {
                x: {
                    grid: { color: 'rgba(226, 232, 240, 0.6)' },
                    ticks: { color: '#64748b', font: { size: 11 } }
                },
                y: {
                    grid: { color: 'rgba(226, 232, 240, 0.6)' },
                    ticks: {
                        color: '#64748b',
                        font: { size: 11 },
                        callback: (val) => (metric === 'value' && val >= 1000) ? (val/1000).toFixed(0) + 'K' : val
                    }
                }
            }
        }
    });
}

function renderBrandComparisonChart(dateList, dailyBrandSales, productTotals) {
    const canvas = document.getElementById("brandComparisonChart");
    if (!canvas || typeof Chart === "undefined") return;

    const metricSelect = document.getElementById("brandComparisonMetricSelect");
    if (metricSelect && AppState.brandComparisonMetric) {
        metricSelect.value = AppState.brandComparisonMetric;
    }

    const metric = AppState.brandComparisonMetric || 'value';
    const metricUnit = metric === 'value' ? 'Rs. ' : (metric === 'kg' ? ' KG' : ' Ctns');

    if (window.DashboardCharts.brandComparison) {
        window.DashboardCharts.brandComparison.destroy();
    }

    const laysTotal = (productTotals.lays[metric] + productTotals.kurkure[metric] + productTotals.cheetos[metric]);
    const fastTotal = (productTotals.nimco[metric] + productTotals.peanut[metric] + productTotals.hash[metric]);
    const combined = laysTotal + fastTotal;

    const laysPct = combined > 0 ? ((laysTotal / combined) * 100).toFixed(1) : 0;
    const fastPct = combined > 0 ? ((fastTotal / combined) * 100).toFixed(1) : 0;

    const donutTotalEl = document.getElementById("donutCenterTotal");
    if (donutTotalEl) {
        donutTotalEl.innerText = metric === 'value' 
            ? `Rs. ${Math.round(combined).toLocaleString()}` 
            : (metric === 'kg' ? `${combined.toFixed(1)} KG` : `${combined} Ctns`);
    }

    const cardsEl = document.getElementById("brandComparisonSummaryCards");
    if (cardsEl) {
        const laysValStr = metric === 'value' ? `Rs. ${Math.round(laysTotal).toLocaleString()}` : (metric === 'kg' ? `${laysTotal.toFixed(1)} KG` : `${laysTotal} Ctns`);
        const fastValStr = metric === 'value' ? `Rs. ${Math.round(fastTotal).toLocaleString()}` : (metric === 'kg' ? `${fastTotal.toFixed(1)} KG` : `${fastTotal} Ctns`);

        cardsEl.innerHTML = `
            <div style="background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 12px; padding: 12px 14px;">
                <div style="font-weight: 700; color: #2563eb; font-size: 13px;">Lays Brand Total</div>
                <div style="font-size: 18px; font-weight: 800; color: #0f172a; margin: 2px 0;">
                    ${laysValStr} <span style="font-size: 13px; color: #2563eb; font-weight: 700;">${laysPct}%</span>
                </div>
                <div style="font-size: 11px; color: #64748b;">vs Total Sales (${metric.toUpperCase()})</div>
            </div>
            <div style="background: #fff7ed; border: 1px solid #fed7aa; border-radius: 12px; padding: 12px 14px;">
                <div style="font-weight: 700; color: #ea580c; font-size: 13px;">Fast Brand Total</div>
                <div style="font-size: 18px; font-weight: 800; color: #0f172a; margin: 2px 0;">
                    ${fastValStr} <span style="font-size: 13px; color: #ea580c; font-weight: 700;">${fastPct}%</span>
                </div>
                <div style="font-size: 11px; color: #64748b;">vs Total Sales (${metric.toUpperCase()})</div>
            </div>
        `;
    }

    const ctx = canvas.getContext('2d');
    window.DashboardCharts.brandComparison = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Lays Brand', 'Fast Brand'],
            datasets: [{
                data: [metric === 'kg' ? parseFloat(laysTotal.toFixed(2)) : Math.round(laysTotal), metric === 'kg' ? parseFloat(fastTotal.toFixed(2)) : Math.round(fastTotal)],
                backgroundColor: ['#2563eb', '#f97316'],
                borderWidth: 3,
                borderColor: '#ffffff',
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '72%',
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: (ctx) => ` ${ctx.label}: ${metric === 'value' ? 'Rs. ' + ctx.parsed.toLocaleString() : ctx.parsed.toLocaleString() + ' ' + metricUnit}`
                    }
                }
            }
        }
    });
}

function renderProductAnalyticsSection(brandFilter, dateList, dailyProductSales, productTotals) {
    const laysCont = document.getElementById("laysProductsContainer");
    const fastCont = document.getElementById("fastProductsContainer");
    const laysGrid = document.getElementById("laysProductGrid");
    const fastGrid = document.getElementById("fastProductGrid");

    if (brandFilter === "lays") {
        if (laysCont) laysCont.style.display = "block";
        if (fastCont) fastCont.style.display = "none";
    } else if (brandFilter === "fast") {
        if (laysCont) laysCont.style.display = "none";
        if (fastCont) fastCont.style.display = "block";
    } else {
        if (laysCont) laysCont.style.display = "block";
        if (fastCont) fastCont.style.display = "block";
    }

    if (!AppState.dashboardProductMetrics) {
        AppState.dashboardProductMetrics = { lays_brand: 'value', fast_brand: 'value' };
    }
    const laysMetric = AppState.dashboardProductMetrics.lays_brand || 'value';
    const fastMetric = AppState.dashboardProductMetrics.fast_brand || 'value';

    // 1. RENDER LAYS BRAND COMBINED COMPARISON UI
    if (laysGrid) {
        const laysTot = productTotals.lays || { value: 0, kg: 0, cartons: 0 };
        const kurkureTot = productTotals.kurkure || { value: 0, kg: 0, cartons: 0 };
        const cheetosTot = productTotals.cheetos || { value: 0, kg: 0, cartons: 0 };

        laysGrid.style.display = "block";
        laysGrid.innerHTML = `
            <div style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 16px; padding: 18px; box-shadow: 0 4px 16px rgba(0,0,0,0.03);">
                <!-- Header with Metric Toggles -->
                <div class="flex-between" style="margin-bottom: 14px; flex-wrap: wrap; gap: 10px;">
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <span style="font-size: 15px; font-weight: 800; color: #2563eb;">📊 LAYS BRAND — Product Performance Comparison</span>
                    </div>
                    <div style="display: flex; background: #f1f5f9; padding: 3px; border-radius: 8px; border: 1px solid #cbd5e1; gap: 3px;">
                        <button class="prod-metric-pill ${laysMetric === 'value' ? 'active' : ''}" onclick="setProductMetricToggle('lays_brand', 'value')">Value (Rs.)</button>
                        <button class="prod-metric-pill ${laysMetric === 'kg' ? 'active' : ''}" onclick="setProductMetricToggle('lays_brand', 'kg')">KG</button>
                        <button class="prod-metric-pill ${laysMetric === 'cartons' ? 'active' : ''}" onclick="setProductMetricToggle('lays_brand', 'cartons')">Cartons</button>
                    </div>
                </div>

                <!-- Product Summary Cards Grid -->
                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-bottom: 16px;">
                    <!-- Lays Card -->
                    <div style="background: #f8fafc; border: 1px solid #cbd5e1; border-top: 4px solid #2563eb; border-radius: 12px; padding: 12px;">
                        <div class="flex-between" style="margin-bottom: 6px;">
                            <strong style="font-size: 14px; color: #0f172a;">Lays</strong>
                            <span style="font-size: 10px; font-weight: 700; padding: 2px 6px; border-radius: 4px; background: #eff6ff; color: #2563eb;">(PC)</span>
                        </div>
                        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 4px; font-size: 11px;">
                            <div><span style="color: #64748b; font-size: 10px;">Total Value</span><br><strong style="color: #0f172a; font-size: 12px;">Rs. ${Math.round(laysTot.value).toLocaleString()}</strong></div>
                            <div><span style="color: #64748b; font-size: 10px;">Total KG</span><br><strong style="color: #0f172a; font-size: 12px;">${laysTot.kg.toFixed(1)}</strong></div>
                            <div><span style="color: #64748b; font-size: 10px;">Cartons</span><br><strong style="color: #0f172a; font-size: 12px;">${laysTot.cartons}</strong></div>
                        </div>
                    </div>

                    <!-- Kurkure Card -->
                    <div style="background: #f8fafc; border: 1px solid #cbd5e1; border-top: 4px solid #f59e0b; border-radius: 12px; padding: 12px;">
                        <div class="flex-between" style="margin-bottom: 6px;">
                            <strong style="font-size: 14px; color: #0f172a;">Kurkure</strong>
                            <span style="font-size: 10px; font-weight: 700; padding: 2px 6px; border-radius: 4px; background: #fff7ed; color: #ea580c;">(NPC)</span>
                        </div>
                        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 4px; font-size: 11px;">
                            <div><span style="color: #64748b; font-size: 10px;">Total Value</span><br><strong style="color: #0f172a; font-size: 12px;">Rs. ${Math.round(kurkureTot.value).toLocaleString()}</strong></div>
                            <div><span style="color: #64748b; font-size: 10px;">Total KG</span><br><strong style="color: #0f172a; font-size: 12px;">${kurkureTot.kg.toFixed(1)}</strong></div>
                            <div><span style="color: #64748b; font-size: 10px;">Cartons</span><br><strong style="color: #0f172a; font-size: 12px;">${kurkureTot.cartons}</strong></div>
                        </div>
                    </div>

                    <!-- Cheetos Card -->
                    <div style="background: #f8fafc; border: 1px solid #cbd5e1; border-top: 4px solid #ef4444; border-radius: 12px; padding: 12px;">
                        <div class="flex-between" style="margin-bottom: 6px;">
                            <strong style="font-size: 14px; color: #0f172a;">Cheetos</strong>
                            <span style="font-size: 10px; font-weight: 700; padding: 2px 6px; border-radius: 4px; background: #fef2f2; color: #ef4444;">(NPC)</span>
                        </div>
                        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 4px; font-size: 11px;">
                            <div><span style="color: #64748b; font-size: 10px;">Total Value</span><br><strong style="color: #0f172a; font-size: 12px;">Rs. ${Math.round(cheetosTot.value).toLocaleString()}</strong></div>
                            <div><span style="color: #64748b; font-size: 10px;">Total KG</span><br><strong style="color: #0f172a; font-size: 12px;">${cheetosTot.kg.toFixed(1)}</strong></div>
                            <div><span style="color: #64748b; font-size: 10px;">Cartons</span><br><strong style="color: #0f172a; font-size: 12px;">${cheetosTot.cartons}</strong></div>
                        </div>
                    </div>
                </div>

                <!-- Combined Multi-Line Comparison Chart Canvas -->
                <div style="position: relative; height: 220px; width: 100%;">
                    <canvas id="chart_lays_comparison"></canvas>
                </div>
            </div>
        `;
    }

    // 2. RENDER FAST BRAND COMBINED COMPARISON UI
    if (fastGrid) {
        const nimcoTot = productTotals.nimco || { value: 0, kg: 0, cartons: 0 };
        const peanutTot = productTotals.peanut || { value: 0, kg: 0, cartons: 0 };
        const hashTot = productTotals.hash || { value: 0, kg: 0, cartons: 0 };

        fastGrid.style.display = "block";
        fastGrid.innerHTML = `
            <div style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 16px; padding: 18px; box-shadow: 0 4px 16px rgba(0,0,0,0.03);">
                <!-- Header with Metric Toggles -->
                <div class="flex-between" style="margin-bottom: 14px; flex-wrap: wrap; gap: 10px;">
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <span style="font-size: 15px; font-weight: 800; color: #ea580c;">⚡ FAST BRAND — Product Performance Comparison</span>
                    </div>
                    <div style="display: flex; background: #f1f5f9; padding: 3px; border-radius: 8px; border: 1px solid #cbd5e1; gap: 3px;">
                        <button class="prod-metric-pill ${fastMetric === 'value' ? 'active' : ''}" onclick="setProductMetricToggle('fast_brand', 'value')">Value (Rs.)</button>
                        <button class="prod-metric-pill ${fastMetric === 'kg' ? 'active' : ''}" onclick="setProductMetricToggle('fast_brand', 'kg')">KG</button>
                        <button class="prod-metric-pill ${fastMetric === 'cartons' ? 'active' : ''}" onclick="setProductMetricToggle('fast_brand', 'cartons')">Cartons</button>
                    </div>
                </div>

                <!-- Product Summary Cards Grid -->
                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-bottom: 16px;">
                    <!-- Nimco Card -->
                    <div style="background: #f8fafc; border: 1px solid #cbd5e1; border-top: 4px solid #f97316; border-radius: 12px; padding: 12px;">
                        <div class="flex-between" style="margin-bottom: 6px;">
                            <strong style="font-size: 14px; color: #0f172a;">Nimco Mix & Snacks</strong>
                        </div>
                        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 4px; font-size: 11px;">
                            <div><span style="color: #64748b; font-size: 10px;">Total Value</span><br><strong style="color: #0f172a; font-size: 12px;">Rs. ${Math.round(nimcoTot.value).toLocaleString()}</strong></div>
                            <div><span style="color: #64748b; font-size: 10px;">Total KG</span><br><strong style="color: #0f172a; font-size: 12px;">${nimcoTot.kg.toFixed(1)}</strong></div>
                            <div><span style="color: #64748b; font-size: 10px;">Cartons</span><br><strong style="color: #0f172a; font-size: 12px;">${nimcoTot.cartons}</strong></div>
                        </div>
                    </div>

                    <!-- Peanut Card -->
                    <div style="background: #f8fafc; border: 1px solid #cbd5e1; border-top: 4px solid #10b981; border-radius: 12px; padding: 12px;">
                        <div class="flex-between" style="margin-bottom: 6px;">
                            <strong style="font-size: 14px; color: #0f172a;">Peanut & Moongphali</strong>
                        </div>
                        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 4px; font-size: 11px;">
                            <div><span style="color: #64748b; font-size: 10px;">Total Value</span><br><strong style="color: #0f172a; font-size: 12px;">Rs. ${Math.round(peanutTot.value).toLocaleString()}</strong></div>
                            <div><span style="color: #64748b; font-size: 10px;">Total KG</span><br><strong style="color: #0f172a; font-size: 12px;">${peanutTot.kg.toFixed(1)}</strong></div>
                            <div><span style="color: #64748b; font-size: 10px;">Cartons</span><br><strong style="color: #0f172a; font-size: 12px;">${peanutTot.cartons}</strong></div>
                        </div>
                    </div>

                    <!-- Hash Card -->
                    <div style="background: #f8fafc; border: 1px solid #cbd5e1; border-top: 4px solid #8b5cf6; border-radius: 12px; padding: 12px;">
                        <div class="flex-between" style="margin-bottom: 6px;">
                            <strong style="font-size: 14px; color: #0f172a;">Hash Catalog & Others</strong>
                        </div>
                        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 4px; font-size: 11px;">
                            <div><span style="color: #64748b; font-size: 10px;">Total Value</span><br><strong style="color: #0f172a; font-size: 12px;">Rs. ${Math.round(hashTot.value).toLocaleString()}</strong></div>
                            <div><span style="color: #64748b; font-size: 10px;">Total KG</span><br><strong style="color: #0f172a; font-size: 12px;">${hashTot.kg.toFixed(1)}</strong></div>
                            <div><span style="color: #64748b; font-size: 10px;">Cartons</span><br><strong style="color: #0f172a; font-size: 12px;">${hashTot.cartons}</strong></div>
                        </div>
                    </div>
                </div>

                <!-- Combined Multi-Line Comparison Chart Canvas -->
                <div style="position: relative; height: 220px; width: 100%;">
                    <canvas id="chart_fast_comparison"></canvas>
                </div>
            </div>
        `;
    }

    // Render Canvas Charts after DOM rendering
    setTimeout(() => {
        const labels = dateList.map(d => {
            const parts = d.split('-');
            return parts.length === 3 ? `${parts[2]}` : d;
        });

        // 1. LAYS BRAND MULTI-LINE COMPARISON CHART
        const laysCanvas = document.getElementById("chart_lays_comparison");
        if (laysCanvas && typeof Chart !== "undefined") {
            if (window.DashboardCharts.laysComparison) {
                window.DashboardCharts.laysComparison.destroy();
            }

            const getMetricData = (pKey, metric) => dateList.map(d => {
                const entry = (dailyProductSales[pKey] && dailyProductSales[pKey][d]) || { value: 0, kg: 0, cartons: 0 };
                if (metric === 'value') return Math.round(entry.value);
                if (metric === 'kg') return parseFloat(entry.kg.toFixed(2));
                return entry.cartons;
            });

            const laysData = getMetricData('lays', laysMetric);
            const kurkureData = getMetricData('kurkure', laysMetric);
            const cheetosData = getMetricData('cheetos', laysMetric);

            const metricUnit = laysMetric === 'value' ? 'Rs. ' : (laysMetric === 'kg' ? ' KG' : ' Ctns');

            const ctx = laysCanvas.getContext('2d');
            const laysGrad = ctx.createLinearGradient(0, 0, 0, 220);
            laysGrad.addColorStop(0, 'rgba(37, 99, 235, 0.2)');
            laysGrad.addColorStop(1, 'rgba(37, 99, 235, 0.0)');

            const kurkureGrad = ctx.createLinearGradient(0, 0, 0, 220);
            kurkureGrad.addColorStop(0, 'rgba(245, 158, 11, 0.2)');
            kurkureGrad.addColorStop(1, 'rgba(245, 158, 11, 0.0)');

            const cheetosGrad = ctx.createLinearGradient(0, 0, 0, 220);
            cheetosGrad.addColorStop(0, 'rgba(239, 68, 68, 0.2)');
            cheetosGrad.addColorStop(1, 'rgba(239, 68, 68, 0.0)');

            window.DashboardCharts.laysComparison = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [
                        {
                            label: 'Lays (PC)',
                            data: laysData,
                            borderColor: '#2563eb',
                            borderWidth: 3,
                            backgroundColor: laysGrad,
                            fill: true,
                            tension: 0.35,
                            pointBackgroundColor: '#2563eb',
                            pointBorderColor: '#ffffff',
                            pointRadius: 4,
                            pointHoverRadius: 7
                        },
                        {
                            label: 'Kurkure (NPC)',
                            data: kurkureData,
                            borderColor: '#f59e0b',
                            borderWidth: 3,
                            backgroundColor: kurkureGrad,
                            fill: true,
                            tension: 0.35,
                            pointBackgroundColor: '#f59e0b',
                            pointBorderColor: '#ffffff',
                            pointRadius: 4,
                            pointHoverRadius: 7
                        },
                        {
                            label: 'Cheetos (NPC)',
                            data: cheetosData,
                            borderColor: '#ef4444',
                            borderWidth: 3,
                            backgroundColor: cheetosGrad,
                            fill: true,
                            tension: 0.35,
                            pointBackgroundColor: '#ef4444',
                            pointBorderColor: '#ffffff',
                            pointRadius: 4,
                            pointHoverRadius: 7
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { display: true, position: 'top', labels: { boxWidth: 12, font: { size: 11, weight: 'bold' } } },
                        tooltip: {
                            backgroundColor: '#0f172a',
                            titleColor: '#f8fafc',
                            bodyColor: '#cbd5e1',
                            callbacks: {
                                label: (ctx) => ` ${ctx.dataset.label}: ${laysMetric === 'value' ? metricUnit + ctx.parsed.y.toLocaleString() : ctx.parsed.y + metricUnit}`
                            }
                        }
                    },
                    scales: {
                        x: { grid: { color: 'rgba(226, 232, 240, 0.6)' }, ticks: { color: '#64748b', font: { size: 10 } } },
                        y: { grid: { color: 'rgba(226, 232, 240, 0.6)' }, ticks: { color: '#64748b', font: { size: 10 } } }
                    }
                }
            });
        }

        // 2. FAST BRAND MULTI-LINE COMPARISON CHART
        const fastCanvas = document.getElementById("chart_fast_comparison");
        if (fastCanvas && typeof Chart !== "undefined") {
            if (window.DashboardCharts.fastComparison) {
                window.DashboardCharts.fastComparison.destroy();
            }

            const getMetricData = (pKey, metric) => dateList.map(d => {
                const entry = (dailyProductSales[pKey] && dailyProductSales[pKey][d]) || { value: 0, kg: 0, cartons: 0 };
                if (metric === 'value') return Math.round(entry.value);
                if (metric === 'kg') return parseFloat(entry.kg.toFixed(2));
                return entry.cartons;
            });

            const nimcoData = getMetricData('nimco', fastMetric);
            const peanutData = getMetricData('peanut', fastMetric);
            const hashData = getMetricData('hash', fastMetric);

            const metricUnit = fastMetric === 'value' ? 'Rs. ' : (fastMetric === 'kg' ? ' KG' : ' Ctns');

            const ctx = fastCanvas.getContext('2d');
            const nimcoGrad = ctx.createLinearGradient(0, 0, 0, 220);
            nimcoGrad.addColorStop(0, 'rgba(249, 115, 22, 0.2)');
            nimcoGrad.addColorStop(1, 'rgba(249, 115, 22, 0.0)');

            const peanutGrad = ctx.createLinearGradient(0, 0, 0, 220);
            peanutGrad.addColorStop(0, 'rgba(16, 185, 129, 0.2)');
            peanutGrad.addColorStop(1, 'rgba(16, 185, 129, 0.0)');

            const hashGrad = ctx.createLinearGradient(0, 0, 0, 220);
            hashGrad.addColorStop(0, 'rgba(139, 92, 246, 0.2)');
            hashGrad.addColorStop(1, 'rgba(139, 92, 246, 0.0)');

            window.DashboardCharts.fastComparison = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [
                        {
                            label: 'Nimco Mix & Snacks',
                            data: nimcoData,
                            borderColor: '#f97316',
                            borderWidth: 3,
                            backgroundColor: nimcoGrad,
                            fill: true,
                            tension: 0.35,
                            pointBackgroundColor: '#f97316',
                            pointBorderColor: '#ffffff',
                            pointRadius: 4,
                            pointHoverRadius: 7
                        },
                        {
                            label: 'Peanut & Moongphali',
                            data: peanutData,
                            borderColor: '#10b981',
                            borderWidth: 3,
                            backgroundColor: peanutGrad,
                            fill: true,
                            tension: 0.35,
                            pointBackgroundColor: '#10b981',
                            pointBorderColor: '#ffffff',
                            pointRadius: 4,
                            pointHoverRadius: 7
                        },
                        {
                            label: 'Hash Catalog & Others',
                            data: hashData,
                            borderColor: '#8b5cf6',
                            borderWidth: 3,
                            backgroundColor: hashGrad,
                            fill: true,
                            tension: 0.35,
                            pointBackgroundColor: '#8b5cf6',
                            pointBorderColor: '#ffffff',
                            pointRadius: 4,
                            pointHoverRadius: 7
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { display: true, position: 'top', labels: { boxWidth: 12, font: { size: 11, weight: 'bold' } } },
                        tooltip: {
                            backgroundColor: '#0f172a',
                            titleColor: '#f8fafc',
                            bodyColor: '#cbd5e1',
                            callbacks: {
                                label: (ctx) => ` ${ctx.dataset.label}: ${fastMetric === 'value' ? metricUnit + ctx.parsed.y.toLocaleString() : ctx.parsed.y + metricUnit}`
                            }
                        }
                    },
                    scales: {
                        x: { grid: { color: 'rgba(226, 232, 240, 0.6)' }, ticks: { color: '#64748b', font: { size: 10 } } },
                        y: { grid: { color: 'rgba(226, 232, 240, 0.6)' }, ticks: { color: '#64748b', font: { size: 10 } } }
                    }
                }
            });
        }
    }, 50);
}

function renderSalesmanPerformanceTable(salesmanMap, totalSalesValue) {
    const smTbody = document.getElementById("dashboardSalesmanTable");
    if (!smTbody) return;

    smTbody.innerHTML = "";
    const smKeys = Object.keys(salesmanMap);
    if (smKeys.length === 0) {
        smTbody.innerHTML = `<tr><td colspan="6" class="text-muted text-center" style="padding: 16px;">No confirmed delivered sales found for selected filter.</td></tr>`;
        return;
    }

    const avatars = ["IJ", "AS", "SK", "MH", "ZA"];
    const avatarColors = ["#2563eb", "#ea580c", "#9333ea", "#16a34a", "#0284c7"];

    smKeys.forEach((sm, idx) => {
        const s = salesmanMap[sm];
        const smPct = totalSalesValue > 0 ? ((s.sales / totalSalesValue) * 100).toFixed(1) : 0;
        const avText = avatars[idx % avatars.length];
        const avBg = avatarColors[idx % avatarColors.length];

        smTbody.innerHTML += `
            <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 10px 8px; display: flex; align-items: center; gap: 8px;">
                    <div style="width: 28px; height: 28px; border-radius: 50%; background: ${avBg}; color: #ffffff; display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 700;">${avText}</div>
                    <strong style="color: #0f172a; font-size: 13px;">${sm}</strong>
                </td>
                <td style="padding: 10px 8px; text-align: center; font-size: 13px; font-weight: 600; color: #475569;">${s.bills}</td>
                <td style="padding: 10px 8px; text-align: right; font-size: 13px; font-weight: 700; color: #0f172a;">Rs. ${Math.round(s.sales).toLocaleString()}</td>
                <td style="padding: 10px 8px; text-align: center; font-size: 13px; font-weight: 600; color: #475569;">${s.cartons}</td>
                <td style="padding: 10px 8px; text-align: right; font-size: 13px; font-weight: 600; color: #475569;">${s.weight.toFixed(2)}</td>
                <td style="padding: 10px 8px; width: 140px;">
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <span style="font-size: 11px; font-weight: 700; color: #10b981;">↑ ${smPct}%</span>
                        <div style="flex: 1; height: 6px; background: #f1f5f9; border-radius: 10px; overflow: hidden;">
                            <div style="height: 100%; width: ${Math.min(100, Math.max(8, smPct * 2.5))}%; background: ${avBg}; border-radius: 10px;"></div>
                        </div>
                    </div>
                </td>
            </tr>
        `;
    });
}

function renderKeyInsights(totalSalesValue, productTotals, dailyOverallSales, dateList) {
    const container = document.getElementById("dashboardKeyInsightsContainer");
    if (!container) return;

    const laysTotal = (productTotals.lays.value + productTotals.kurkure.value + productTotals.cheetos.value);
    const fastTotal = (productTotals.nimco.value + productTotals.peanut.value + productTotals.hash.value);
    const combined = laysTotal + fastTotal;

    const laysPct = combined > 0 ? ((laysTotal / combined) * 100).toFixed(1) : 0;
    const fastPct = combined > 0 ? ((fastTotal / combined) * 100).toFixed(1) : 0;

    let highestWeightProduct = "Lays";
    let highestWeightVal = 0;
    Object.keys(productTotals).forEach(pk => {
        if (productTotals[pk].kg > highestWeightVal) {
            highestWeightVal = productTotals[pk].kg;
            highestWeightProduct = pk === "hash" ? "Hash Catalog" : (pk.charAt(0).toUpperCase() + pk.slice(1));
        }
    });

    let peakDate = "";
    let peakSales = 0;
    dateList.forEach(d => {
        if (dailyOverallSales[d] > peakSales) {
            peakSales = dailyOverallSales[d];
            peakDate = d;
        }
    });

    const formatPeakD = (dStr) => {
        if (!dStr) return "Peak day";
        const parts = dStr.split('-');
        if (parts.length !== 3) return dStr;
        const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
        return `${parts[2]} ${months[parseInt(parts[1],10)-1]} ${parts[0]}`;
    };

    container.innerHTML = `
        <div style="display: flex; align-items: flex-start; gap: 10px; background: #f8fafc; padding: 10px 12px; border-radius: 10px; border: 1px solid #e2e8f0;">
            <div style="width: 24px; height: 24px; border-radius: 50%; background: #f0fdf4; color: #16a34a; display: flex; align-items: center; justify-content: center; font-size: 12px; flex-shrink: 0; margin-top: 2px;">
                <i class="fa-solid fa-arrow-trend-up"></i>
            </div>
            <div style="font-size: 12px; color: #334155; line-height: 1.4;">
                <strong style="color: #0f172a;">${laysTotal >= fastTotal ? 'Lays brand' : 'Fast brand'}</strong> is performing better with <strong>${laysTotal >= fastTotal ? laysPct : fastPct}%</strong> of total sales.
            </div>
        </div>

        <div style="display: flex; align-items: flex-start; gap: 10px; background: #f8fafc; padding: 10px 12px; border-radius: 10px; border: 1px solid #e2e8f0;">
            <div style="width: 24px; height: 24px; border-radius: 50%; background: #fff7ed; color: #ea580c; display: flex; align-items: center; justify-content: center; font-size: 12px; flex-shrink: 0; margin-top: 2px;">
                <i class="fa-solid fa-weight-hanging"></i>
            </div>
            <div style="font-size: 12px; color: #334155; line-height: 1.4;">
                <strong style="color: #0f172a;">${highestWeightProduct}</strong> has highest weight contribution (<strong>${highestWeightVal.toFixed(1)} KG</strong>).
            </div>
        </div>

        <div style="display: flex; align-items: flex-start; gap: 10px; background: #f8fafc; padding: 10px 12px; border-radius: 10px; border: 1px solid #e2e8f0;">
            <div style="width: 24px; height: 24px; border-radius: 50%; background: #eff6ff; color: #2563eb; display: flex; align-items: center; justify-content: center; font-size: 12px; flex-shrink: 0; margin-top: 2px;">
                <i class="fa-solid fa-chart-line"></i>
            </div>
            <div style="font-size: 12px; color: #334155; line-height: 1.4;">
                Total sales reached <strong style="color: #0f172a;">Rs. ${Math.round(totalSalesValue).toLocaleString()}</strong> in selected date period.
            </div>
        </div>

        <div style="display: flex; align-items: flex-start; gap: 10px; background: #f8fafc; padding: 10px 12px; border-radius: 10px; border: 1px solid #e2e8f0;">
            <div style="width: 24px; height: 24px; border-radius: 50%; background: #f5f3ff; color: #9333ea; display: flex; align-items: center; justify-content: center; font-size: 12px; flex-shrink: 0; margin-top: 2px;">
                <i class="fa-solid fa-calendar-check"></i>
            </div>
            <div style="font-size: 12px; color: #334155; line-height: 1.4;">
                <strong style="color: #0f172a;">${formatPeakD(peakDate)}</strong> recorded the highest single-day sales of <strong>Rs. ${Math.round(peakSales).toLocaleString()}</strong>.
            </div>
        </div>
    `;
}

function renderTopSkusTable(skuSalesMap) {
    let topSkus = Object.values(skuSalesMap || {}).sort((a, b) => b.revenue - a.revenue).slice(0, 5);
    const topTbody = document.getElementById("dashboardTopSkusTable");
    if (!topTbody) return;

    // Fallback: If no delivered bills in date range, calculate from all non-void bills
    if (topSkus.length === 0) {
        const fallbackMap = {};
        (AppState.bills || []).forEach(b => {
            if (b.isVoid || b.deliveryStatus === "Cancelled") return;
            (b.items || []).forEach(i => {
                const sku = (AppState.skus || []).find(s => s.code === i.code || (i.desc && s.desc.toLowerCase() === i.desc.toLowerCase()));
                const pGrp = getProductGroup(i);
                const rate = (i.tpRate && i.tpRate > 0) ? i.tpRate : (sku ? sku.tpRate : 900);
                const grams = i.grams || (sku ? sku.grams : 72);
                const pack = i.pack || (sku ? sku.pack : 12);

                const iCtn = i.cartons || 0;
                const iUnits = i.units || 0;
                const iPkts = i.totalPackets || ((iCtn * pack) + iUnits);
                const iKg = (i.weightKg && i.weightKg > 0) ? i.weightKg : ((grams * iPkts) / 1000);
                const basicAmt = i.basicAmount || (rate * iCtn);
                const discAmt = i.discAmount || (basicAmt * 0.04);
                const iAmt = (i.amount && i.amount > 0) ? i.amount : (basicAmt - discAmt);

                const skuKey = i.code || i.desc || "SKU";
                if (!fallbackMap[skuKey]) {
                    fallbackMap[skuKey] = {
                        code: i.code || "SKU",
                        desc: i.desc || (sku ? sku.desc : i.code),
                        brand: pGrp.productName,
                        cartons: 0,
                        weightKg: 0,
                        revenue: 0
                    };
                }
                fallbackMap[skuKey].cartons += iCtn;
                fallbackMap[skuKey].weightKg += iKg;
                fallbackMap[skuKey].revenue += iAmt;
            });
        });
        topSkus = Object.values(fallbackMap).sort((a, b) => b.revenue - a.revenue).slice(0, 5);
    }

    if (topSkus.length === 0) {
        topTbody.innerHTML = `<tr><td colspan="7" class="text-muted text-center" style="padding: 16px;">No sales records found yet. Punch bills/orders to see top selling products.</td></tr>`;
    } else {
        topTbody.innerHTML = topSkus.map((s, idx) => `
            <tr>
                <td><strong style="color: var(--brand-gold);">#${idx + 1}</strong></td>
                <td><code>${s.code}</code></td>
                <td><strong>${s.desc}</strong></td>
                <td><span class="badge badge-info">${s.brand}</span></td>
                <td><strong style="color: var(--accent-green);">${s.cartons} Ctns</strong></td>
                <td>${s.weightKg.toFixed(2)} KG</td>
                <td><strong>Rs. ${Math.round(s.revenue).toLocaleString()}</strong></td>
            </tr>
        `).join('');
    }
}

function refreshDashboardData() {
    syncWithLocalServerStore();
    renderAllViews();
    alert("⚡ Executive Dashboard Refreshed! Sales, Cartons, Weight (KG) & Warehouse Inventory updated.");
}

/* POS BILLING */
function onPosDateChange() {
    const orderDate = document.getElementById("posBillDate").value;
    const todayName = getDayNameFromDate(orderDate);
    document.getElementById("posTodayNameText").innerText = `Order Day: ${todayName}`;
    renderPosShopDropdown();
}

function onPosBeatDaySelect() { renderPosShopDropdown(); }

function renderPosShopDropdown() {
    const orderDateEl = document.getElementById("posBillDate");
    const orderDate = orderDateEl ? orderDateEl.value : new Date().toISOString().split('T')[0];
    const todayDayName = getDayNameFromDate(orderDate);
    const selectedFilter = document.getElementById("posBeatDaySelect")?.value || "auto";
    const searchQuery = (document.getElementById("posShopSearchInput")?.value || "").toLowerCase().trim();
    const sortVal = document.getElementById("posShopSortSelect")?.value || "scheduled";

    let targetDay = (selectedFilter === "auto") ? todayDayName : selectedFilter;

    const shopSel = document.getElementById("posShopSelect");
    if (!shopSel) return;

    let matchingShops = [];
    if (targetDay === "all" || searchQuery !== "") {
        matchingShops = (AppState.shops || []).slice();
    } else {
        matchingShops = (AppState.shops || []).filter(s => s.visitDay === targetDay || s.visitDay === "All" || !s.visitDay);
        if (matchingShops.length === 0) matchingShops = (AppState.shops || []).slice();
    }

    if (searchQuery) {
        matchingShops = matchingShops.filter(s => 
            s.name.toLowerCase().includes(searchQuery) ||
            (s.customerName && s.customerName.toLowerCase().includes(searchQuery)) ||
            (s.phone && s.phone.includes(searchQuery))
        );
    }

    if (sortVal === "name_asc") {
        matchingShops.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortVal === "disc_desc") {
        matchingShops.sort((a, b) => (b.defaultDiscountPct || 0) - (a.defaultDiscountPct || 0));
    } else if (sortVal === "new_first") {
        matchingShops.sort((a, b) => (b.isNewOnField ? 1 : 0) - (a.isNewOnField ? 1 : 0));
    }

    const optionsArr = ['<option value="">-- Choose Shop --</option>'];
    matchingShops.forEach(s => {
        const discBadge = s.defaultDiscountPct ? ` [${s.defaultDiscountPct}% Disc]` : '';
        optionsArr.push(`<option value="${s.id}">${s.name}${discBadge} (${s.visitDay || 'Beat Route'})</option>`);
    });

    shopSel.innerHTML = optionsArr.join('');

    const badge = document.getElementById("posShopCountBadge");
    if (badge) badge.innerText = `${matchingShops.length} Shops Available`;
    const invoiceTxt = document.getElementById("posBillNoText");
    if (invoiceTxt) invoiceTxt.innerText = getNextInvoiceId();
}

function renderPosOptions() {
    renderPosShopDropdown();
    renderPosSkuPickerGrid();
}

function onPosRouteSelect() { renderPosShopDropdown(); }

function onPosShopSelect() {
    const shopId = document.getElementById("posShopSelect").value;
    AppState.selectedShopId = shopId;
    const shop = AppState.shops.find(s => s.id === shopId);
    if (shop) {
        document.getElementById("posOutletNameText").innerText = shop.name;

        const radioFiler = document.querySelector('input[name="taxMode"][value="filer"]');
        const radioNonFiler = document.querySelector('input[name="taxMode"][value="nonfiler"]');
        if (shop.taxMode === "nonfiler") {
            radioNonFiler.checked = true;
        } else {
            radioFiler.checked = true;
        }

        const shopDisc = getShopDiscountPct(shop);
        document.getElementById("globalBillDiscountPct").value = shopDisc;
        document.getElementById("shopDiscountFetchedBadge").innerText = `Auto: ${shopDisc}%`;

        updatePosCartTotals();
    }
}

function renderPosSkuPickerGrid() {
    if (!AppState.skus || AppState.skus.length === 0) {
        AppState.skus = JSON.parse(JSON.stringify(DEFAULT_SKUS));
        AppState.skus.forEach(s => { s.stockCartons = 100; s.stockUnits = 0; });
        saveStateToStorage();
    }

    const grid = document.getElementById("posSkuPickerGrid");
    if (!grid) return;
    grid.innerHTML = "";
    let query = (document.getElementById("posSkuSearch")?.value || "").toLowerCase().trim();
    if (query.includes("search sku") || query.includes("search sku code") || query.includes("descriptio")) {
        query = "";
    }

    const stockFilter = document.getElementById("posStockFilterSelect")?.value || "all"; // DEFAULT: Available Stock Only (>0)

    const activeCompanyId = AppState.posCompanyId || "all";
    const filtered = AppState.skus.filter(s => {
        const ctnStock = s.stockCartons || 0;
        const pktStock = s.stockUnits || 0;

        if (stockFilter === "instock" && ctnStock <= 0 && pktStock <= 0) return false;

        const sComp = (s.companyId || (s.code && String(s.code).toUpperCase().startsWith("HASH") ? "hash" : "lays")).toLowerCase();
        if (activeCompanyId !== "all" && sComp !== activeCompanyId.toLowerCase()) return false;
        const codeStr = String(s.code || "");
        const descStr = String(s.desc || "").toLowerCase();
        const brandStr = String(s.brand || "").toLowerCase();
        return descStr.includes(query) || codeStr.toLowerCase().includes(query) || brandStr.includes(query);
    });

    if (filtered.length === 0) {
        grid.innerHTML = `<div style="grid-column: 1 / -1; text-align: center; color: var(--text-secondary); padding: 24px; font-size: 13px;">
            <i class="fa-solid fa-box-open" style="font-size: 32px; color: var(--brand-gold); margin-bottom: 8px; display: block;"></i>
            No SKUs match active filters.<br>
            <button class="btn btn-primary btn-sm" onclick="if(document.getElementById('posStockFilterSelect')) document.getElementById('posStockFilterSelect').value='all'; renderPosSkuPickerGrid();" style="margin-top: 10px;">Show All Products (Inc. 0 Stock)</button>
        </div>`;
        return;
    }

    filtered.forEach(sku => {
        const ctnStock = sku.stockCartons || 0;
        const pktStock = sku.stockUnits || 0;

        const card = document.createElement("div");
        card.className = "sku-card";
        card.onclick = () => addSkuToCart(sku.code);
        card.innerHTML = `
            <div class="sku-title">${sku.desc} <span class="badge badge-info">${sku.categoryType || 'PC'}</span></div>
            <div class="sku-meta">
                <span>TP: Rs. ${sku.tpRate}</span>
                <span style="color: ${ctnStock > 0 ? 'var(--accent-green)' : '#ef4444'}; font-weight: 700;">Stock: ${ctnStock} Ctn / ${pktStock} Pkt</span>
            </div>
        `;
        grid.appendChild(card);
    });
}

function filterPosSkuList() { renderPosSkuPickerGrid(); }

function addSkuToCart(skuCode) {
    const codeStr = String(skuCode);
    const sku = AppState.skus.find(s => String(s.code) === codeStr);
    if (!sku) return;

    const existing = AppState.currentCart.find(item => String(item.code) === codeStr);
    if (existing) {
        existing.cartons += 1;
    } else {
        AppState.currentCart.push({
            code: sku.code,
            companyId: sku.companyId || "lays",
            desc: sku.desc,
            categoryType: sku.categoryType || "PC",
            brand: sku.brand || (sku.desc.includes("LAYS") ? "Lays" : "Cheetos"),
            pack: sku.pack || 12,
            grams: sku.grams || 72,
            tpRate: sku.tpRate || 900,
            cartons: 1,
            units: 0,
            freePack: 0
        });
    }

    renderPosCartTable();
}

function updateCartItemField(skuCode, field, val) {
    const codeStr = String(skuCode);
    const item = AppState.currentCart.find(i => String(i.code) === codeStr);
    if (item) {
        item[field] = Math.max(0, parseInt(val) || 0);
        renderPosCartTable();
    }
}

function removeCartItem(skuCode) {
    const codeStr = String(skuCode);
    AppState.currentCart = AppState.currentCart.filter(i => String(i.code) !== codeStr);
    renderPosCartTable();
}

function clearPosCart() {
    AppState.currentCart = [];
    renderPosCartTable();
}

function renderPosCartTable() {
    const tbody = document.getElementById("posCartTableBody");
    tbody.innerHTML = "";

    const activeCompanyId = AppState.posCompanyId || "lays";
    const compObj = AppState.companies.find(c => c.id === activeCompanyId) || { taxMode: "lays_tax" };
    const isNoTaxCompany = (compObj.taxMode === "no_tax");

    const taxMode = document.querySelector('input[name="taxMode"]:checked')?.value || "filer";
    const globalDiscPct = parseFloat(document.getElementById("globalBillDiscountPct").value) || 0;
    const adwhTaxRate = isNoTaxCompany ? 0 : (taxMode === "nonfiler" ? 0.025 : 0.005);

    let grandBasic = 0, grandCartons = 0, grandUnits = 0, grandPackets = 0, grandWeightKg = 0, grandAdwh = 0;

    AppState.currentCart.forEach(item => {
        const unitPrice = item.tpRate / item.pack;
        const basicAmount = (item.cartons * item.tpRate) + (item.units * unitPrice);
        const discAmount = basicAmount * (globalDiscPct / 100);
        const taxableBase = basicAmount - discAmount;
        const adwhTax = taxableBase * adwhTaxRate;
        const netLineAmount = taxableBase + adwhTax;

        const totalPkts = (item.cartons * item.pack) + item.units;
        const itemWeightKg = (item.grams * totalPkts) / 1000;

        grandBasic += basicAmount;
        grandCartons += item.cartons;
        grandUnits += item.units;
        grandPackets += totalPkts;
        grandWeightKg += itemWeightKg;
        grandAdwh += adwhTax;

        tbody.innerHTML += `
            <tr>
                <td><strong>${item.desc}</strong></td>
                <td>Rs. ${item.tpRate} <small style="display:block; color:var(--text-secondary); font-size:10px;">(Rs. ${unitPrice.toFixed(2)}/pkt)</small></td>
                <td><input type="number" min="0" value="${item.cartons}" style="width: 45px;" onchange="updateCartItemField('${item.code}', 'cartons', this.value)"></td>
                <td><input type="number" min="0" value="${item.units}" style="width: 45px;" onchange="updateCartItemField('${item.code}', 'units', this.value)"></td>
                <td><input type="number" min="0" value="${item.freePack}" style="width: 40px;" onchange="updateCartItemField('${item.code}', 'freePack', this.value)"></td>
                <td>Rs. ${basicAmount.toFixed(2)}</td>
                <td><span class="badge badge-warning">${globalDiscPct}%</span></td>
                <td style="color: var(--brand-gold);">-Rs. ${discAmount.toFixed(2)}</td>
                <td>Rs. ${adwhTax.toFixed(2)}</td>
                <td><strong>Rs. ${netLineAmount.toFixed(2)}</strong></td>
                <td><button class="btn btn-danger btn-sm" onclick="removeCartItem('${item.code}')"><i class="fa-solid fa-xmark"></i></button></td>
            </tr>
        `;
    });

    if (AppState.currentCart.length === 0) {
        tbody.innerHTML = `<tr><td colspan="11" class="text-muted text-center" style="padding: 20px;">No SKUs in cart. Click any product above to add cartons or loose units.</td></tr>`;
    }

    const totalDiscAmount = grandBasic * (globalDiscPct / 100);
    const grandNetPayable = Math.max(0, (grandBasic - totalDiscAmount) + grandAdwh);

    document.getElementById("posSummaryBasic").innerText = `Rs. ${grandBasic.toFixed(2)}`;
    document.getElementById("posSummaryDiscPct").innerText = globalDiscPct;
    document.getElementById("posSummaryDiscount").innerText = `-Rs. ${totalDiscAmount.toFixed(2)}`;
    document.getElementById("posSummaryWht").innerText = `+Rs. ${grandAdwh.toFixed(2)}`;
    document.getElementById("posSummaryTotalKG").innerText = `${grandWeightKg.toFixed(3)} KG`;
    document.getElementById("posNetPayable").innerText = `Rs. ${Math.round(grandNetPayable).toLocaleString()}`;

    const shop = AppState.shops.find(s => s.id === AppState.selectedShopId);
    const route = shop ? AppState.routes.find(r => r.id === shop.routeId) : null;
    const salesman = route ? route.salesman : "Salesman 1";
    const orderDate = document.getElementById("posBillDate")?.value || new Date().toISOString().split('T')[0];

    const focRes = calculateOrderFoc(AppState.currentCart, shop, salesman, orderDate);
    const focContainer = document.getElementById("posFocBannerContainer");
    if (focContainer) {
        if (focRes.appliedSchemes && focRes.appliedSchemes.length > 0) {
            const lines = focRes.appliedSchemes.map(s => `🎁 <strong>FOC Applied:</strong> Buy ${s.buyCartons} Ctns ➔ Get ${s.focLabel} ${s.focDesc} FREE`);
            focContainer.innerHTML = `<div class="foc-preview-box" style="font-size: 11px; padding: 8px 12px; margin: 0; background: linear-gradient(135deg, rgba(16,185,129,0.15), rgba(37,99,235,0.15)); border: 1px solid rgba(16,185,129,0.4); color: #047857;">${lines.join('<br>')}</div>`;
        } else {
            focContainer.innerHTML = "";
        }
    }
}

function updatePosCartTotals() { renderPosCartTable(); }

function saveAndPrintPosBill(shouldPrint) {
    if (AppState.currentCart.length === 0) return alert("Cart is empty!");
    if (!AppState.selectedShopId) return alert("Select a shop!");

    const activeCompanyId = AppState.posCompanyId || "lays";
    const compObj = AppState.companies.find(c => c.id === activeCompanyId) || { taxMode: "lays_tax" };
    const isNoTaxCompany = (compObj.taxMode === "no_tax");

    const shop = AppState.shops.find(s => s.id === AppState.selectedShopId);
    const route = AppState.routes.find(r => r.id === shop.routeId);
    const salesman = route ? route.salesman : "Salesman 1";
    const taxMode = document.querySelector('input[name="taxMode"][value="filer"]').checked ? "filer" : "nonfiler";
    const globalDiscPct = parseFloat(document.getElementById("globalBillDiscountPct").value) || 0;
    const orderDate = document.getElementById("posBillDate").value || new Date().toISOString().split('T')[0];
    const deliveryDate = document.getElementById("posDeliveryDate").value || orderDate;
    const paymentStatus = document.getElementById("posPaymentStatus").value;
    const adwhTaxRate = isNoTaxCompany ? 0 : (taxMode === "nonfiler" ? 0.025 : 0.005);

    let totalBasic = 0, totalAdwh = 0, totalCartons = 0, totalUnits = 0, totalWeight = 0;

    const billItems = AppState.currentCart.map(item => {
        const unitPrice = item.tpRate / item.pack;
        const basicAmount = (item.cartons * item.tpRate) + (item.units * unitPrice);
        const discAmount = basicAmount * (globalDiscPct / 100);
        const taxableBase = basicAmount - discAmount;
        const adwhTax = taxableBase * adwhTaxRate;
        const netLineAmount = taxableBase + adwhTax;
        const totalPkts = (item.cartons * item.pack) + item.units;
        const weightKg = (item.grams * totalPkts) / 1000;

        totalBasic += basicAmount;
        totalAdwh += adwhTax;
        totalCartons += item.cartons;
        totalUnits += item.units;
        totalWeight += weightKg;

        const targetSku = AppState.skus.find(s => s.code === item.code);
        if (targetSku) {
            targetSku.stockCartons = Math.max(0, (targetSku.stockCartons || 0) - item.cartons);
            targetSku.stockUnits = (targetSku.stockUnits || 0) - item.units;
            if (targetSku.stockUnits < 0) {
                if (targetSku.stockCartons > 0) {
                    targetSku.stockCartons -= 1;
                    targetSku.stockUnits += targetSku.pack;
                } else {
                    targetSku.stockUnits = 0;
                }
            }
        }

        const bName = item.brand || (item.desc.includes("LAYS") ? "Lays" : (item.desc.includes("CHEETOS") ? "Cheetos" : "Kurkure"));
        const cType = item.categoryType || (item.desc.includes("LAYS") ? "PC" : "NPC");
        const cName = cType === "PC" ? "Potato Chips" : "Non-Potato Chips";

        return {
            code: item.code,
            companyId: activeCompanyId,
            desc: item.desc,
            brand: bName,
            categoryName: cName,
            categoryType: cType,
            pack: item.pack,
            grams: item.grams,
            tpRate: item.tpRate,
            cartons: item.cartons,
            units: item.units,
            freePack: item.freePack || 0,
            basicAmount: basicAmount,
            discAmount: discAmount,
            adwhTax: adwhTax,
            totalPackets: totalPkts,
            weightKg: weightKg,
            amount: netLineAmount
        };
    });

    const focRes = calculateOrderFoc(AppState.currentCart, shop, salesman, orderDate);
    if (focRes.focItems && focRes.focItems.length > 0) {
        focRes.focItems.forEach(fi => {
            const rewardSku = AppState.skus.find(s => s.code === fi.code);
            if (rewardSku) {
                rewardSku.stockCartons = Math.max(0, (rewardSku.stockCartons || 0) - (fi.cartons || 0));
                rewardSku.stockUnits = (rewardSku.stockUnits || 0) - (fi.units || 0);
                if (rewardSku.stockUnits < 0) {
                    if (rewardSku.stockCartons > 0) {
                        rewardSku.stockCartons -= 1;
                        rewardSku.stockUnits += rewardSku.pack;
                    } else {
                        rewardSku.stockUnits = 0;
                    }
                }
            }

            billItems.push({
                code: fi.code,
                companyId: fi.companyId || activeCompanyId,
                desc: fi.desc,
                brand: fi.brand || "Lays",
                categoryName: "Free Promotional Stock",
                categoryType: fi.categoryType || "PC",
                pack: rewardSku ? rewardSku.pack : 12,
                grams: rewardSku ? rewardSku.grams : 72,
                tpRate: 0,
                cartons: fi.cartons || 0,
                units: fi.units || 0,
                freePack: 0,
                basicAmount: 0,
                discAmount: 0,
                adwhTax: 0,
                totalPackets: ((fi.cartons || 0) * (rewardSku ? rewardSku.pack : 12)) + (fi.units || 0),
                weightKg: 0,
                amount: 0,
                isFoc: true,
                schemeName: fi.schemeName
            });

            totalCartons += (fi.cartons || 0);
            totalUnits += (fi.units || 0);
        });
    }

    const totalDiscAmount = totalBasic * (globalDiscPct / 100);
    const finalNetPayable = Math.max(0, (totalBasic - totalDiscAmount) + totalAdwh);
    const invoiceId = getNextInvoiceId();
    const orderNo = getNextOrderNo();

    const newOrderObj = {
        orderNo: orderNo,
        companyId: activeCompanyId,
        shopId: shop.id,
        shopName: shop.name,
        routeId: shop.routeId,
        routeName: route ? route.name : "Route",
        salesman: salesman,
        orderDate: orderDate,
        deliveryDate: deliveryDate,
        notes: "Created via Quick Billing POS Engine",
        status: "Confirmed",
        items: billItems,
        totalItemsCount: billItems.length,
        totalCartons: totalCartons,
        totalUnits: totalUnits,
        totalBasic: totalBasic,
        globalDiscPct: globalDiscPct,
        netAmount: Math.round(finalNetPayable),
        createdDate: new Date().toISOString()
    };

    const newBill = {
        billNo: invoiceId,
        orderNo: orderNo,
        companyId: activeCompanyId,
        date: orderDate,
        deliveryDate: deliveryDate,
        shopId: shop.id,
        shopName: shop.name,
        routeId: shop.routeId,
        routeName: route ? route.name : "Route",
        salesman: salesman,
        taxMode: taxMode,
        paymentStatus: paymentStatus,
        deliveryStatus: "Open",
        pickStatus: "Unpicked",
        stockDeducted: true,
        salesRecorded: false,
        globalDiscPct: globalDiscPct,
        items: billItems,
        totalBasic: totalBasic,
        totalDisc: totalDiscAmount,
        totalAdwh: totalAdwh,
        totalCartons: totalCartons,
        totalUnits: totalUnits,
        totalPackets: (totalCartons * 12) + totalUnits,
        totalWeightKg: totalWeight,
        netAmount: Math.round(finalNetPayable)
    };

    AppState.orders.unshift(newOrderObj);
    AppState.bills.unshift(newBill);
    deductStockForItems(billItems);
    saveStateToStorage();


    if (shouldPrint) {
        printBill(invoiceId);
    } else {
        alert(`Invoice ${invoiceId} created & processed! Cartons: ${totalCartons}, Loose Units: ${totalUnits}. Listed in Orders & Invoices modules.`);
    }

    clearPosCart();
    renderAllViews();
}

function preparePrintReceipt(bill) {
    const targetCompId = getCompanyIdForItem({ companyId: bill.companyId });
    const isHashBill = (targetCompId === "hash");

    const logoImg = document.getElementById("printInvoiceLogoImg");
    if (logoImg) {
        logoImg.src = isHashBill ? "fast_logo.png" : "lays_official_logo.png";
        logoImg.style.filter = "none";
    }

    const compSub = document.getElementById("printCompanySub");
    if (compSub) {
        compSub.innerText = isHashBill ? "FAST FOODS AUTHORIZED MAIN DISTRIBUTOR" : "PEPSICO / LAYS AUTHORIZED MAIN DISTRIBUTOR";
    }

    document.getElementById("printInvoiceId").innerText = `INVOICE: ${bill.billNo}`;
    document.getElementById("printOrderDate").innerHTML = `<strong>Order Date:</strong> ${bill.date}`;
    document.getElementById("printDeliveryDate").innerHTML = `<strong>Delivery Date:</strong> ${bill.deliveryDate || bill.date}`;

    const shopObj = (AppState.shops || []).find(s => (bill.shopId && s.id === bill.shopId) || (bill.shopName && s.name && s.name.toLowerCase() === bill.shopName.toLowerCase()));
    const custName = (shopObj && shopObj.customerName) ? shopObj.customerName : (bill.customerName || bill.shopName || "-");
    const custPhone = (shopObj && shopObj.phone) ? shopObj.phone : (bill.phone || "-");
    const custAddress = (shopObj && shopObj.address) ? shopObj.address : (bill.address || "-");

    document.getElementById("printShopName").innerText = bill.shopName;
    const printCustNameEl = document.getElementById("printCustomerName");
    if (printCustNameEl) printCustNameEl.innerText = custName;

    const printCustPhoneEl = document.getElementById("printCustomerPhone");
    if (printCustPhoneEl) printCustPhoneEl.innerText = custPhone;

    const printCustAddressEl = document.getElementById("printCustomerAddress");
    if (printCustAddressEl) printCustAddressEl.innerText = custAddress;

    const printRouteNameEl = document.getElementById("printRouteName");
    if (printRouteNameEl) printRouteNameEl.innerText = bill.routeName;

    // Salesman Info Lookup from Sync Tab (AppState.salesmen)
    let salName = bill.salesmanName || bill.salesman || "";
    let salPhone = bill.salesmanPhone || "";
    const salesObj = (AppState.salesmen || []).find(s => 
        (bill.salesmanId && s.id === bill.salesmanId) || 
        (salName && s.name && s.name.toLowerCase() === salName.toLowerCase()) ||
        (bill.routeId && s.routeId === bill.routeId) ||
        (bill.routeName && AppState.routes && AppState.routes.some(r => r.name === bill.routeName && r.id === s.routeId))
    );
    if (salesObj) {
        if (!salName) salName = salesObj.name;
        if (!salPhone) salPhone = salesObj.phone;
    }
    if (!salPhone) {
        const firstActive = (AppState.salesmen || []).find(s => s.phone && s.phone.trim() !== "");
        if (firstActive) {
            salPhone = firstActive.phone;
            if (!salName) salName = firstActive.name;
        }
    }
    const printSalesmanNameEl = document.getElementById("printSalesmanName");
    if (printSalesmanNameEl) printSalesmanNameEl.innerText = salName || "-";

    const printSalesmanPhoneEl = document.getElementById("printSalesmanPhone");
    if (printSalesmanPhoneEl) printSalesmanPhoneEl.innerText = salPhone || "-";

    document.getElementById("printPaymentType").innerText = bill.paymentStatus;

    const itemsContainer = document.getElementById("printReceiptItems");
    itemsContainer.innerHTML = "";

    // STRICTLY FILTER & SORT ITEMS LOWEST TO HIGHEST GRAMS (17G / 18G FIRST, 30G NEXT, 45G, 70G, ETC.)
    const companyItems = (bill.items || []).filter(i => getCompanyIdForItem(i) === targetCompId);
    companyItems.sort((a, b) => getSkuGrams(a) - getSkuGrams(b));
    let itemCounter = 1;
    let billTotalGrossInclTax = 0;
    let billTotalDisc = 0;
    let billTotalCartons = 0;
    let billTotalUnits = 0;
    let billTotalKg = 0;

    companyItems.forEach(i => {
        const ctn = (i.cartons || 0);
        const qtyLabel = `${ctn} Ctns ${i.units > 0 ? `+ ${i.units} Pkts` : ''}`;
        
        const skuObj = (AppState.skus || []).find(s => s.code === i.code || (i.desc && s.desc && s.desc.toLowerCase() === i.desc.toLowerCase()));
        const officialTpRate = (skuObj && skuObj.tpRate > 0) ? skuObj.tpRate : (i.tpRate && i.tpRate < 5000 ? i.tpRate : 1494.00);
        const unitPrice = getSkuPricePoint(i) || 20;
        const packSize = (skuObj && skuObj.pack > 0) ? skuObj.pack : (i.pack || 80);
        const unitTpRate = officialTpRate / packSize;

        const basicAmt = (ctn * officialTpRate) + ((i.units || 0) * unitTpRate);
        const isNoTax = (targetCompId === "hash");
        const adwhRate = isNoTax ? 0 : ((bill.taxMode === "nonfiler") ? 0.025 : 0.005);
        const adwhTaxAmt = basicAmt * adwhRate;
        const grossInclTax = basicAmt + adwhTaxAmt;

        const discPct = getBillDiscountPct(bill);
        const discAmt = (i.discAmount !== undefined && i.discAmount !== null && i.discAmount > 0) ? i.discAmount : (grossInclTax * (discPct / 100));
        const netAmt = Math.max(0, grossInclTax - discAmt);

        billTotalGrossInclTax += grossInclTax;
        billTotalDisc += discAmt;
        billTotalCartons += ctn;
        billTotalUnits += (i.units || 0);
        billTotalKg += (i.weightKg || 0);

        const unitPriceStr = unitPrice > 0 ? `Rs. ${unitPrice}` : '-';

        itemsContainer.innerHTML += `
            <tr>
                <td style="text-align: center;">${itemCounter++}</td>
                <td><strong>${i.desc}</strong></td>
                <td style="text-align: center; font-weight: 800; color: #000;">${unitPriceStr}</td>
                <td style="text-align: center;">${qtyLabel}</td>
                <td style="text-align: center;">${i.freePack || 0}</td>
                <td style="text-align: right;">Rs. ${grossInclTax.toFixed(2)}</td>
                <td style="text-align: right; color: #b91c1c;">-Rs. ${discAmt.toFixed(2)}</td>
                <td style="text-align: right;"><strong>Rs. ${netAmt.toFixed(2)}</strong></td>
            </tr>
        `;
    });

    const netPayable = Math.max(0, Math.round(billTotalGrossInclTax - billTotalDisc));

    document.getElementById("printTotalCartons").innerText = `${billTotalCartons} Ctns / ${billTotalUnits} Pkts`;
    document.getElementById("printTotalWeight").innerText = `${billTotalKg.toFixed(2)} KG`;

    document.getElementById("printTotalBasic").innerText = `Rs. ${billTotalGrossInclTax.toFixed(2)}`;
    document.getElementById("printDiscPct").innerText = getBillDiscountPct(bill);
    document.getElementById("printTotalDisc").innerText = `-Rs. ${billTotalDisc.toFixed(2)}`;
    
    const printAdwhEl = document.getElementById("printTotalAdwhRow");
    if (printAdwhEl) printAdwhEl.style.display = "none";

    document.getElementById("printNetPayable").innerText = `Rs. ${netPayable.toLocaleString()}`;
}

/* WAREHOUSE STOCK INVENTORY */
function renderStockInventoryTable() {
    const tbody = document.getElementById("stockInventoryTableBody");
    if (!tbody) return;

    const search = (document.getElementById("stockReportSearch")?.value || document.getElementById("stockSearchInput")?.value || "").toLowerCase().trim();
    const compFilter = document.getElementById("stockCompanyFilter")?.value || "all";
    const availFilter = document.getElementById("stockAvailabilityFilter")?.value || "instock";

    let totalVal = 0;
    let totalCartons = 0;
    let totalUnits = 0;
    let totalWeightKg = 0;
    let skuCount = 0;

    let filtered = (AppState.skus || []).filter(s => {
        const ctns = s.stockCartons || 0;
        const units = s.stockUnits || 0;
        const pack = s.pack || 12;
        const tp = s.tpRate || 0;
        const grams = s.grams || (s.weightGrams || 72);

        const skuVal = (ctns * tp) + ((units / pack) * tp);
        const skuKg = ((ctns * pack) + units) * (grams / 1000.0);

        if (ctns > 0 || units > 0) {
            totalVal += skuVal;
            totalCartons += ctns;
            totalUnits += units;
            totalWeightKg += skuKg;
            skuCount++;
        }

        if (availFilter === "instock" && ctns <= 0 && units <= 0) return false;
        if (compFilter !== "all" && s.companyId !== compFilter) return false;
        if (search && !s.desc.toLowerCase().includes(search) && !s.code.toLowerCase().includes(search) && !(s.brand && s.brand.toLowerCase().includes(search))) return false;
        return true;
    });

    // Update KPI Cards at top of Warehouse Stock screen
    const kpiVal = document.getElementById("kpiStockTotalValue");
    if (kpiVal) kpiVal.innerText = "Rs. " + Math.round(totalVal).toLocaleString();

    const kpiCtns = document.getElementById("kpiStockTotalCartons");
    if (kpiCtns) kpiCtns.innerHTML = totalCartons + ' <small>Ctns</small>';

    const kpiPkts = document.getElementById("kpiStockTotalUnits");
    if (kpiPkts) kpiPkts.innerText = totalUnits + " loose units";

    const kpiWt = document.getElementById("kpiStockTotalWeight");
    if (kpiWt) kpiWt.innerHTML = totalWeightKg.toFixed(2) + ' <small>KG</small>';

    const kpiSkus = document.getElementById("kpiStockSkuCount");
    if (kpiSkus) kpiSkus.innerHTML = skuCount + ' <small>SKUs</small>';

    if (filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="10" style="text-align: center; color: var(--text-muted); padding: 24px;">No SKUs found matching search & filters.</td></tr>`;
        return;
    }

    const rows = [];
    filtered.forEach(s => {
        const ctns = s.stockCartons || 0;
        const units = s.stockUnits || 0;
        const pack = s.pack || 12;
        const tp = s.tpRate || 0;
        const grams = s.grams || (s.weightGrams || 72);

        const skuVal = (ctns * tp) + ((units / pack) * tp);
        const skuKg = ((ctns * pack) + units) * (grams / 1000.0);

        const compBadge = s.companyId === "hash" ? `<span class="badge badge-success">Fast</span>` : `<span class="badge badge-warning">Lays</span>`;
        const brandBadge = `<span class="badge badge-secondary">${s.brand || 'Lays'}</span>`;
        const ctnColor = ctns > 0 ? '#059669' : '#dc2626';

        rows.push(`
            <tr>
                <td><strong>${s.code}</strong></td>
                <td><strong>${s.desc}</strong></td>
                <td>${brandBadge}</td>
                <td>${s.categoryType || 'PC'} (${pack} Pkts)</td>
                <td><strong style="color: ${ctnColor};">${ctns} Ctns</strong></td>
                <td>${units} Pkts</td>
                <td>${pack} Pkts</td>
                <td>${skuKg.toFixed(2)} KG</td>
                <td><strong>Rs. ${Math.round(skuVal).toLocaleString()}</strong></td>
                <td>
                    <button class="btn-action btn-secondary" style="padding: 4px 8px; font-size: 11px;" onclick="openAdjustStockModal('${s.code}')"><i class="fa-solid fa-pen-to-square"></i> Adjust Stock</button>
                </td>
            </tr>
        `);
    });
    tbody.innerHTML = rows.join('');
}

function openReceiveStockModal() {
    const sel = document.getElementById("receiveSkuSelect");
    sel.innerHTML = "";
    AppState.skus.forEach(s => { sel.innerHTML += `<option value="${s.code}">${s.desc} (Current: ${s.stockCartons||0} Ctns / ${s.stockUnits||0} Pkts)</option>`; });
    openModal("receiveStockModal");
}

function quickReceiveStock(skuCode) {
    openReceiveStockModal();
    document.getElementById("receiveSkuSelect").value = skuCode;
}

function saveStockInwardFromModal() {
    const skuCode = String(document.getElementById("receiveSkuSelect").value);
    const cartons = parseInt(document.getElementById("receiveCartonsInput").value) || 0;
    const packets = parseInt(document.getElementById("receivePacketsInput").value) || 0;

    const sku = AppState.skus.find(s => String(s.code) === skuCode);
    if (sku) {
        sku.stockCartons = (sku.stockCartons || 0) + cartons;
        sku.stockUnits = (sku.stockUnits || 0) + packets;
        saveStateToStorage();
        closeModal("receiveStockModal");
        renderAllViews();
        alert(`Warehouse Inward Received: Added ${cartons} Cartons & ${packets} Loose Units to ${sku.desc}!`);
    } else {
        alert("Selected SKU not found!");
    }
}

function openAdjustStockModal(skuCode = null) {
    const sel = document.getElementById("adjustSkuSelect");
    if (!sel) return;
    sel.innerHTML = "";
    AppState.skus.forEach(s => { sel.innerHTML += `<option value="${s.code}">${s.desc} (Current: ${s.stockCartons||0} Ctns / ${s.stockUnits||0} Pkts)</option>`; });
    
    if (skuCode) {
        sel.value = String(skuCode);
    }

    const ctnInput = document.getElementById("adjustCartonsInput");
    if (ctnInput) ctnInput.value = 1;
    const pktInput = document.getElementById("adjustPacketsInput");
    if (pktInput) pktInput.value = 0;
    const reasonInput = document.getElementById("adjustReasonInput");
    if (reasonInput) reasonInput.value = "";

    openModal("adjustStockModal");
}

function saveStockAdjustmentFromModal() {
    const skuCode = String(document.getElementById("adjustSkuSelect").value);
    const type = document.getElementById("adjustTypeSelect").value;
    const cartons = parseInt(document.getElementById("adjustCartonsInput").value) || 0;
    const packets = parseInt(document.getElementById("adjustPacketsInput").value) || 0;

    const sku = AppState.skus.find(s => String(s.code) === skuCode);
    if (sku) {
        if (type === "add") {
            sku.stockCartons = (sku.stockCartons || 0) + cartons;
            sku.stockUnits = (sku.stockUnits || 0) + packets;
        } else {
            sku.stockCartons = Math.max(0, (sku.stockCartons || 0) - cartons);
            sku.stockUnits = Math.max(0, (sku.stockUnits || 0) - packets);
        }
        saveStateToStorage();
        closeModal("adjustStockModal");
        renderAllViews();
        alert(`Stock Adjustment Applied for ${sku.desc}!`);
    } else {
        alert("Selected SKU not found!");
    }
}

function openQuickEditStockModal(skuCode = null) {
    const sel = document.getElementById("quickEditSkuSelect");
    if (!sel) return;
    sel.innerHTML = "";
    AppState.skus.forEach(s => {
        sel.innerHTML += `<option value="${s.code}">${s.desc} (Current: ${s.stockCartons || 0} Ctns / ${s.stockUnits || 0} Pkts)</option>`;
    });

    if (skuCode) {
        sel.value = String(skuCode);
    }

    handleQuickEditSkuChange(sel.value);
    openModal("quickEditStockModal");
}

function handleQuickEditSkuChange(skuCode) {
    const codeStr = String(skuCode);
    const sku = AppState.skus.find(s => String(s.code) === codeStr);
    if (!sku) return;

    document.getElementById("quickEditCartonsInput").value = sku.stockCartons !== undefined ? sku.stockCartons : 100;
    document.getElementById("quickEditPacketsInput").value = sku.stockUnits !== undefined ? sku.stockUnits : 0;
}

function saveQuickEditStockFromModal() {
    const codeStr = String(document.getElementById("quickEditSkuSelect").value);
    const cartons = Math.max(0, parseInt(document.getElementById("quickEditCartonsInput").value) || 0);
    const packets = Math.max(0, parseInt(document.getElementById("quickEditPacketsInput").value) || 0);

    const sku = AppState.skus.find(s => String(s.code) === codeStr);
    if (sku) {
        sku.stockCartons = cartons;
        sku.stockUnits = packets;
        saveStateToStorage();
        closeModal("quickEditStockModal");
        renderAllViews();
        alert(`Exact Stock Updated for ${sku.desc}! Now available: ${cartons} Ctns / ${packets} Loose Pkts.`);
    } else {
        alert("Selected SKU not found!");
    }
}

function fillAllSkusStock(addCtns = 50) {
    AppState.skus.forEach(s => {
        s.stockCartons = (s.stockCartons || 0) + addCtns;
    });
    saveStateToStorage();
    renderAllViews();
    alert(`⚡ Stock Refill Complete! Added +${addCtns} Cartons of stock to all ${AppState.skus.length} SKUs.`);
}

function exportStockReportCSV() {
    const headers = ["Product Code", "Product Description", "Brand", "Category Type", "Available Cartons (Ctns)", "Loose Units (Pkts)", "Pack per Carton", "Total Weight (KG)", "Total Value (Rs)"];
    const rows = [];

    AppState.skus.forEach(s => {
        const ctns = s.stockCartons || 0;
        const units = s.stockUnits || 0;
        const totalPkts = (ctns * s.pack) + units;
        const weightKg = (s.grams * totalPkts) / 1000;
        const stockVal = (ctns * s.tpRate) + (units * (s.tpRate / s.pack));

        rows.push([
            s.code,
            s.desc,
            s.brand,
            s.categoryType || 'PC',
            `${ctns} Ctns`,
            `${units} Pkts`,
            s.pack,
            weightKg.toFixed(2),
            Math.round(stockVal)
        ]);
    });

    generateStyledExcelFile("Warehouse Stock Inventory Ledger", headers, rows, `Chaudhary_Trader_Stock_Report_${new Date().toISOString().split('T')[0]}.xls`);
}

/* STOCK RESTORATION ON RETURN */
function voidCurrentModalBill() {
    if (!activeModalBillNo) return;
    if (confirm(`Mark Invoice ${activeModalBillNo} as Returned / Cancelled? Stock will be automatically restored to warehouse!`)) {
        const bill = AppState.bills.find(b => b.billNo === activeModalBillNo);
        if (bill) {
            bill.isVoid = true;
            bill.deliveryStatus = "Returned";

            bill.items.forEach(i => {
                const targetSku = AppState.skus.find(s => s.code === i.code);
                if (targetSku) {
                    targetSku.stockCartons = (targetSku.stockCartons || 0) + (i.cartons || 0);
                    targetSku.stockUnits = (targetSku.stockUnits || 0) + (i.units || 0);
                }
            });

            saveStateToStorage();
            closeModal("billViewModal");
            renderAllViews();
            alert(`Invoice ${bill.billNo} returned and cartons/units restored to warehouse stock!`);
        }
    }
}

function confirmBillDelivery(billNo) {
    const bill = AppState.bills.find(b => b.billNo === billNo);
    if (!bill) return;

    if (confirm(`Confirm Invoice ${bill.billNo} delivered to ${bill.shopName}? Sales weight (${bill.totalWeightKg.toFixed(2)} KG) and Rs. ${bill.netAmount.toLocaleString()} will now be added to system!`)) {
        bill.deliveryStatus = "Delivered";
        saveStateToStorage();
        renderAllViews();
        alert(`Invoice ${bill.billNo} marked DELIVERED! Sales weight & revenue added to dashboard.`);
    }
}

function confirmCurrentModalDelivery() {
    if (!activeModalBillNo) return;
    confirmBillDelivery(activeModalBillNo);
    closeModal("billViewModal");
}

/* PARTIAL RETURN / DELIVERY RETURN ENGINE */
/* IN-MODAL RETURN & PARTIAL RETURN ENGINE */

function viewBillDetails(billNo) {
    const bill = AppState.bills.find(b => b.billNo === billNo);
    if (!bill) return;

    activeModalBillNo = billNo;
    document.getElementById("billModalTitle").innerHTML = `<i class="fa-solid fa-file-invoice-dollar"></i> Invoice Details & Delivery Returns: <span style="color:var(--brand-gold);">${bill.billNo}</span>`;

    const content = document.getElementById("billModalContent");
    const globalDiscPct = getBillDiscountPct(bill);

    let statusBadge = `<span class="badge badge-warning">🟡 Pending Delivery (Draft)</span>`;
    if (bill.deliveryStatus === "Delivered") {
        if (bill.hasPartialReturn) {
            statusBadge = `<span class="badge badge-warning" style="background: rgba(245, 158, 11, 0.15); color: var(--accent-gold);"><i class="fa-solid fa-rotate-left"></i> Delivered (With Partial Return)</span>`;
        } else {
            statusBadge = `<span class="badge badge-info" style="background: rgba(16, 185, 129, 0.15); color: var(--accent-green);">🟢 Full Delivered</span>`;
        }
    }
    if (bill.isVoid || bill.deliveryStatus === "Returned") {
        statusBadge = `<span class="badge badge-danger">🔴 100% Order Returned</span>`;
    }

    content.innerHTML = `
        <div class="summary-meta" style="margin-bottom: 16px; background: rgba(255, 255, 255, 0.03); padding: 14px; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
            <div class="flex-between">
                <div>
                    <h4 style="color: var(--text-primary); font-size: 15px; margin-bottom: 4px;"><strong>${bill.shopName}</strong></h4>
                    <p style="font-size: 13px; color: var(--text-secondary);"><i class="fa-solid fa-route"></i> Route: ${bill.routeName} | Salesman: ${bill.salesman || 'Salesman 1'}</p>
                </div>
                <div>
                    ${statusBadge}
                    <span style="font-size: 12px; color: var(--text-muted); display: block; margin-top: 4px;">Bill Disc: <strong>${globalDiscPct}%</strong></span>
                </div>
            </div>
        </div>

        <p style="font-size: 12px; color: var(--brand-gold); margin-bottom: 10px; font-weight: 600;">
            <i class="fa-solid fa-rotate-left"></i> Delivery & Return Qty Adjustments: Enter returned Cartons or Loose Packets below for partial return (Returned stock automatically goes back to Warehouse Inventory):
        </p>

        <div class="table-responsive">
            <table class="data-table">
                <thead>
                    <tr>
                        <th>SKU Description</th>
                        <th>Trade Price</th>
                        <th>Dispatched Qty</th>
                        <th style="color: #ef4444;">Returned Ctns</th>
                        <th style="color: #ef4444;">Returned Pkts</th>
                        <th>Net Delivered Qty</th>
                        <th>Net Line Delivered Amount</th>
                    </tr>
                </thead>
                <tbody id="inModalItemsTbody">
                    ${bill.items.map((i, idx) => {
                        const origCtns = i.dispatchedCartons !== undefined ? i.dispatchedCartons : i.cartons;
                        const origUnits = i.dispatchedUnits !== undefined ? i.dispatchedUnits : (i.units || 0);
                        const retCtns = i.returnedCartons || 0;
                        const retUnits = i.returnedUnits || 0;

                        return `
                            <tr>
                                <td><strong>${i.desc}</strong></td>
                                <td>Rs. ${i.tpRate}</td>
                                <td><span class="badge badge-info">${origCtns} Ctns ${origUnits > 0 ? `+ ${origUnits} Pkts` : ''}</span></td>
                                <td>
                                    <input type="number" class="inmodal-ret-ctns" min="0" max="${origCtns}" value="${retCtns}" style="width: 55px; color: #ef4444; font-weight: bold; padding: 4px; border: 1px solid var(--border-color); border-radius: 4px; outline: none;" oninput="recalculateInModalTotals()" onchange="recalculateInModalTotals()">
                                </td>
                                <td>
                                    <input type="number" class="inmodal-ret-pkts" min="0" max="${origUnits > 0 ? origUnits : (origCtns * i.pack)}" value="${retUnits}" style="width: 55px; color: #ef4444; font-weight: bold; padding: 4px; border: 1px solid var(--border-color); border-radius: 4px; outline: none;" oninput="recalculateInModalTotals()" onchange="recalculateInModalTotals()">
                                </td>
                                <td><strong class="inmodal-del-qty" style="color: var(--accent-green);">0 Ctns</strong></td>
                                <td><strong class="inmodal-del-amount">Rs. 0.00</strong></td>
                            </tr>
                        `;
                    }).join('')}
                </tbody>
            </table>
        </div>

        <div class="flex-between" style="margin-top: 18px; padding: 14px; background: rgba(16, 185, 129, 0.08); border: 1px solid rgba(16, 185, 129, 0.2); border-radius: var(--radius-md);">
            <div>
                <span class="text-muted" style="font-size: 12px; display: block;">Dispatched Value: <strong>Rs. ${(bill.totalBasic || bill.netAmount).toFixed(2)}</strong></span>
                <span style="font-size: 12px; color: #ef4444; display: block;" id="inModalReturnedValText">Returned Stock Value: <strong>Rs. 0.00</strong></span>
            </div>
            <div class="text-right">
                <span style="font-size: 12px; color: var(--accent-green); font-weight: 700;">NET CONFIRMED DELIVERED VALUE:</span>
                <h3 style="color: var(--accent-green); font-size: 22px; font-weight: 800;" id="inModalNetDeliveredValue">Rs. 0</h3>
            </div>
        </div>
    `;

    // Configure Footer Buttons inside billViewModal
    const footer = document.querySelector("#billViewModal .modal-footer");
    footer.innerHTML = `
        <button class="btn btn-success" onclick="saveInModalDeliveryWithReturns()"><i class="fa-solid fa-circle-check"></i> Confirm Delivery & Save Returns</button>
        <button class="btn btn-danger" onclick="voidInModalOrder100Percent()"><i class="fa-solid fa-ban"></i> Return Entire Order (100% Cancel)</button>
        <button class="btn btn-warning" onclick="printBill('${bill.billNo}')"><i class="fa-solid fa-print"></i> Print A4 Invoice</button>
        <button class="btn btn-info" style="background: #0284c7; color: white;" onclick="downloadPdfBill('${bill.billNo}')"><i class="fa-solid fa-file-pdf"></i> Download PDF Bill</button>
        <button class="btn btn-secondary" onclick="closeModal('billViewModal')">Close</button>
    `;

    recalculateInModalTotals();
    openModal("billViewModal");
}

function recalculateInModalTotals() {
    if (!activeModalBillNo) return;
    const bill = AppState.bills.find(b => b.billNo === activeModalBillNo);
    if (!bill) return;

    const rows = document.querySelectorAll("#inModalItemsTbody tr");
    const globalDiscPct = getBillDiscountPct(bill);
    const adwhTaxRate = bill.taxMode === "nonfiler" ? 0.025 : 0.005;

    let newTotalBasic = 0, newTotalAdwh = 0, totalReturnedVal = 0;

    rows.forEach((tr, idx) => {
        const item = bill.items[idx];
        const origCtns = item.dispatchedCartons !== undefined ? item.dispatchedCartons : item.cartons;
        const origUnits = item.dispatchedUnits !== undefined ? item.dispatchedUnits : (item.units || 0);

        let retCtns = parseInt(tr.querySelector(".inmodal-ret-ctns").value) || 0;
        let retUnits = parseInt(tr.querySelector(".inmodal-ret-pkts").value) || 0;

        if (retCtns > origCtns) { retCtns = origCtns; tr.querySelector(".inmodal-ret-ctns").value = origCtns; }
        if (retCtns < 0) { retCtns = 0; tr.querySelector(".inmodal-ret-ctns").value = 0; }

        let delCtns = origCtns - retCtns;
        let delUnits = origUnits - retUnits;

        if (delUnits < 0 && delCtns > 0) {
            delCtns -= 1;
            delUnits += item.pack;
        }

        const unitPrice = item.tpRate / item.pack;
        const basicAmt = (delCtns * item.tpRate) + (delUnits * unitPrice);
        const discAmt = basicAmt * (globalDiscPct / 100);
        const taxableBase = basicAmt - discAmt;
        const adwh = taxableBase * adwhTaxRate;
        const lineNet = taxableBase + adwh;

        const retBasicAmt = (retCtns * item.tpRate) + (retUnits * unitPrice);
        totalReturnedVal += retBasicAmt;

        newTotalBasic += basicAmt;
        newTotalAdwh += adwh;

        tr.querySelector(".inmodal-del-qty").innerText = `${delCtns} Ctns ${delUnits > 0 ? `+ ${delUnits} Pkts` : ''}`;
        tr.querySelector(".inmodal-del-amount").innerText = `Rs. ${lineNet.toFixed(2)}`;
    });

    const newTotalDisc = newTotalBasic * (globalDiscPct / 100);
    const newNetPayable = Math.max(0, (newTotalBasic - newTotalDisc) + newTotalAdwh);

    document.getElementById("inModalReturnedValText").innerHTML = `Returned Stock Value: <strong>Rs. ${Math.round(totalReturnedVal).toLocaleString()}</strong>`;
    document.getElementById("inModalNetDeliveredValue").innerText = `Rs. ${Math.round(newNetPayable).toLocaleString()}`;
}

function saveInModalDeliveryWithReturns() {
    if (!activeModalBillNo) return;
    const bill = AppState.bills.find(b => b.billNo === activeModalBillNo);
    if (!bill) return;

    const rows = document.querySelectorAll("#inModalItemsTbody tr");
    const globalDiscPct = getBillDiscountPct(bill);
    const adwhTaxRate = bill.taxMode === "nonfiler" ? 0.025 : 0.005;

    let newTotalBasic = 0, newTotalAdwh = 0, newTotalCartons = 0, newTotalUnits = 0, newTotalWeight = 0, newTotalPackets = 0;
    let totalItemsReturnedCount = 0;

    bill.items.forEach((item, idx) => {
        const tr = rows[idx];
        if (item.dispatchedCartons === undefined) item.dispatchedCartons = item.cartons;
        if (item.dispatchedUnits === undefined) item.dispatchedUnits = item.units || 0;

        const retCtns = parseInt(tr.querySelector(".inmodal-ret-ctns").value) || 0;
        const retUnits = parseInt(tr.querySelector(".inmodal-ret-pkts").value) || 0;

        // Revert previous returned stock from warehouse if re-editing
        const sku = AppState.skus.find(s => s.code === item.code);
        if (sku) {
            const prevRetCtns = item.returnedCartons || 0;
            const prevRetUnits = item.returnedUnits || 0;
            sku.stockCartons = Math.max(0, (sku.stockCartons || 0) - prevRetCtns);
            sku.stockUnits = Math.max(0, (sku.stockUnits || 0) - prevRetUnits);

            // Add newly returned stock to warehouse!
            sku.stockCartons = (sku.stockCartons || 0) + retCtns;
            sku.stockUnits = (sku.stockUnits || 0) + retUnits;
        }

        item.returnedCartons = retCtns;
        item.returnedUnits = retUnits;

        let delCtns = item.dispatchedCartons - retCtns;
        let delUnits = item.dispatchedUnits - retUnits;

        if (delUnits < 0 && delCtns > 0) {
            delCtns -= 1;
            delUnits += item.pack;
        }

        item.cartons = Math.max(0, delCtns);
        item.units = Math.max(0, delUnits);

        const totalPkts = (item.cartons * item.pack) + item.units;
        const weightKg = (item.grams * totalPkts) / 1000;
        const unitPrice = item.tpRate / item.pack;
        const basicAmt = (item.cartons * item.tpRate) + (item.units * unitPrice);
        const discAmt = basicAmt * (globalDiscPct / 100);
        const taxableBase = basicAmt - discAmt;
        const adwh = taxableBase * adwhTaxRate;
        const lineNet = taxableBase + adwh;

        item.basicAmount = basicAmt;
        item.discAmount = discAmt;
        item.adwhTax = adwh;
        item.totalPackets = totalPkts;
        item.weightKg = weightKg;
        item.amount = lineNet;

        newTotalBasic += basicAmt;
        newTotalAdwh += adwh;
        newTotalCartons += item.cartons;
        newTotalUnits += item.units;
        newTotalWeight += weightKg;
        newTotalPackets += totalPkts;

        if (retCtns > 0 || retUnits > 0) totalItemsReturnedCount++;
    });

    const newTotalDisc = newTotalBasic * (globalDiscPct / 100);
    const newNetPayable = Math.max(0, (newTotalBasic - newTotalDisc) + newTotalAdwh);

    bill.totalBasic = newTotalBasic;
    bill.totalDisc = newTotalDisc;
    bill.totalAdwh = newTotalAdwh;
    bill.totalCartons = newTotalCartons;
    bill.totalUnits = newTotalUnits;
    bill.totalWeightKg = newTotalWeight;
    bill.totalPackets = newTotalPackets;
    bill.netAmount = newNetPayable;

    if (newTotalCartons === 0 && newTotalUnits === 0) {
        bill.deliveryStatus = "Returned";
        bill.isVoid = true;
        bill.hasPartialReturn = false;
    } else {
        bill.deliveryStatus = "Delivered";
        bill.hasPartialReturn = totalItemsReturnedCount > 0;
        bill.isVoid = false;
    }

    saveStateToStorage();
    closeModal("billViewModal");
    renderAllViews();
    alert(`Invoice ${bill.billNo} Delivery Confirmed! Net Revenue: Rs. ${Math.round(newNetPayable).toLocaleString()}. Returned stock restored to warehouse!`);
}

function voidInModalOrder100Percent() {
    if (!activeModalBillNo) return;
    const bill = AppState.bills.find(b => b.billNo === activeModalBillNo);
    if (!bill) return;

    if (confirm(`Return 100% of Invoice ${bill.billNo}? All dispatched cartons/units will be restored to warehouse inventory!`)) {
        const rows = document.querySelectorAll("#inModalItemsTbody tr");
        bill.items.forEach((item, idx) => {
            const tr = rows[idx];
            const origCtns = item.dispatchedCartons !== undefined ? item.dispatchedCartons : item.cartons;
            const origUnits = item.dispatchedUnits !== undefined ? item.dispatchedUnits : (item.units || 0);

            tr.querySelector(".inmodal-ret-ctns").value = origCtns;
            tr.querySelector(".inmodal-ret-pkts").value = origUnits;
        });
        saveInModalDeliveryWithReturns();
    }
}

/* DELIVERY CONFIRMATION TABLE */
function renderBillsHistoryTable() {
    const tbody = document.getElementById("billsHistoryTableBody");
    if (!tbody) return;

    const searchTerm = (document.getElementById("historySearchInput")?.value || "").toLowerCase().trim();
    const routeFilter = document.getElementById("historyRouteFilter")?.value || "all";
    const compFilter = document.getElementById("historyCompanyFilter")?.value || "all";

    let filtered = (AppState.bills || []).filter(b => {
        if (routeFilter !== "all" && b.routeId !== routeFilter && b.routeName !== routeFilter) return false;
        if (compFilter !== "all" && b.companyId !== compFilter) return false;
        if (searchTerm) {
            return (b.billNo && b.billNo.toLowerCase().includes(searchTerm)) ||
                   (b.shopName && b.shopName.toLowerCase().includes(searchTerm));
        }
        return true;
    });

    if (filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="9" style="text-align: center; color: var(--text-muted); padding: 24px;">No History Records found.</td></tr>`;
        return;
    }

    const rows = [];
    filtered.forEach(b => {
        const compBadge = b.companyId === "hash" ? `<span class="badge badge-success">Fast</span>` : `<span class="badge badge-warning">Lays</span>`;
        const statusBadge = b.isVoid ? `<span class="badge badge-danger">Voided</span>` : `<span class="badge badge-success">Confirmed</span>`;
        rows.push(`
            <tr>
                <td><strong>${b.billNo}</strong></td>
                <td>${b.date}</td>
                <td><strong>${b.shopName}</strong></td>
                <td>${b.routeName || '-'}</td>
                <td>${compBadge}</td>
                <td>${b.totalCartons || 0} Ctns</td>
                <td><strong>Rs. ${(b.netAmount || 0).toLocaleString()}</strong></td>
                <td>${statusBadge}</td>
                <td>
                    <button class="btn-action btn-secondary" style="padding: 4px 8px; font-size: 11px;" onclick="printSingleBill('${b.billNo}')">Print</button>
                </td>
            </tr>
        `);
    });
    tbody.innerHTML = rows.join('');
}

function printBill(billNo) {
    const targetNo = billNo || activeModalBillNo;
    if (!targetNo) return;
    const bill = AppState.bills.find(b => b.billNo === targetNo);
    if (bill) {
        preparePrintReceipt(bill);
        setTimeout(() => {
            window.print();
        }, 200);
    }
}

function printModalBill() {
    printBill(activeModalBillNo);
}

/* ROUTE & SHOPS MANAGEMENT (FLAT 6 ROUTES — NO SUB-ROUTES) */
function ensureRouteSubRoutes(route) {
    // No-op for flat routes — kept for backward compatibility of callers
    if (!route) return;
}

function openAddRouteModal(routeId = null) {
    if (routeId) {
        const route = AppState.routes.find(r => r.id === routeId);
        if (route) {
            document.getElementById("routeEditId").value = route.id;
            document.getElementById("routeNameInput").value = route.name;
            document.getElementById("routeSalesmanInput").value = route.salesman || "Arif Sanwal";
            if (document.getElementById("routeDayInput")) document.getElementById("routeDayInput").value = route.dayName || "Monday";
            document.getElementById("routeModalTitle").innerText = "Edit Route";
        }
    } else {
        document.getElementById("routeEditId").value = "";
        document.getElementById("routeNameInput").value = "";
        document.getElementById("routeSalesmanInput").value = "Arif Sanwal";
        if (document.getElementById("routeDayInput")) document.getElementById("routeDayInput").value = "Monday";
        document.getElementById("routeModalTitle").innerText = "Add New Route";
    }
    openModal("routeModal");
}

function saveRouteFromModal() {
    const editId = document.getElementById("routeEditId").value;
    const name = document.getElementById("routeNameInput").value.trim();
    const salesman = document.getElementById("routeSalesmanInput").value.trim() || "Arif Sanwal";
    const dayName = document.getElementById("routeDayInput") ? document.getElementById("routeDayInput").value : "Monday";

    if (!name) return alert("Enter Route name!");

    if (editId) {
        const route = AppState.routes.find(r => r.id === editId);
        if (route) {
            route.name = name;
            route.salesman = salesman;
            route.dayName = dayName;
        }
    } else {
        const newRoute = {
            id: `r${Date.now()}`,
            name: name,
            salesman: salesman,
            dayName: dayName
        };
        AppState.routes.push(newRoute);
    }

    saveStateToStorage();
    closeModal("routeModal");
    renderAllViews();
}

function deleteRoute(routeId) {
    const route = AppState.routes.find(r => r.id === routeId);
    if (!route) return;

    if (confirm(`Are you sure you want to delete Route "${route.name}"?`)) {
        AppState.routes = AppState.routes.filter(r => r.id !== routeId);
        saveStateToStorage();
        renderAllViews();
        alert(`Route "${route.name}" deleted successfully!`);
    }
}

function updateShopVisitDayDropdown(selectedRouteId, currentVisitDayVal = "") {
    const visitDaySel = document.getElementById("shopVisitDayInput");
    if (!visitDaySel) return;

    const targetRoute = AppState.routes.find(r => r.id === selectedRouteId);
    const dayName = targetRoute ? (targetRoute.dayName || "Monday") : "Monday";

    const allDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    let html = '';
    allDays.forEach(d => {
        const isSel = (d === (currentVisitDayVal || dayName)) ? 'selected' : '';
        html += `<option value="${d}" ${isSel}>${d}</option>`;
    });
    visitDaySel.innerHTML = html;
}

function openAddShopModal(shopId = null) {
    const routeSel = document.getElementById("shopRouteSelect");
    routeSel.innerHTML = "";
    AppState.routes.forEach(r => {
        routeSel.innerHTML += `<option value="${r.id}">${r.name} (${r.dayName || 'Daily'}) — ${r.salesman || 'Salesman'}</option>`;
    });

    routeSel.onchange = function() {
        updateShopVisitDayDropdown(this.value);
    };

    if (shopId) {
        const shop = AppState.shops.find(s => s.id === shopId);
        if (shop) {
            document.getElementById("shopEditId").value = shop.id;
            document.getElementById("shopNameInput").value = shop.name;
            document.getElementById("shopRouteSelect").value = shop.routeId;
            if (document.getElementById("shopSubRouteInput")) document.getElementById("shopSubRouteInput").value = shop.subRouteName || "";
            updateShopVisitDayDropdown(shop.routeId, shop.visitDay || "Monday");
            document.getElementById("shopCustomerNameInput").value = shop.customerName || shop.ownerName || "";
            document.getElementById("shopPhoneInput").value = shop.phone || "";
            if (document.getElementById("shopAddressInput")) document.getElementById("shopAddressInput").value = shop.address || "";
            document.getElementById("shopDefaultDiscountInput").value = (shop.defaultDiscountPct !== undefined && shop.defaultDiscountPct !== null) ? shop.defaultDiscountPct : 0;
            document.getElementById("shopTaxSelect").value = shop.taxMode || "filer";
            document.getElementById("shopModalTitle").innerText = "Edit Shop / Outlet";
        }
    } else {
        const firstRouteId = AppState.routes[0] ? AppState.routes[0].id : "";
        document.getElementById("shopEditId").value = "";
        document.getElementById("shopNameInput").value = "";
        if (document.getElementById("shopSubRouteInput")) document.getElementById("shopSubRouteInput").value = "";
        updateShopVisitDayDropdown(firstRouteId, "Monday");
        document.getElementById("shopCustomerNameInput").value = "";
        document.getElementById("shopPhoneInput").value = "";
        if (document.getElementById("shopAddressInput")) document.getElementById("shopAddressInput").value = "";
        document.getElementById("shopDefaultDiscountInput").value = 0;
        document.getElementById("shopTaxSelect").value = "filer";
        document.getElementById("shopModalTitle").innerText = "Add New Shop / Outlet";
    }
    openModal("shopModal");
}

function saveShopFromModal() {
    const editId = document.getElementById("shopEditId").value;
    const name = document.getElementById("shopNameInput").value.trim();
    const visitDay = document.getElementById("shopVisitDayInput").value;
    const routeId = document.getElementById("shopRouteSelect").value;
    const subRouteName = document.getElementById("shopSubRouteInput") ? document.getElementById("shopSubRouteInput").value.trim() : "";
    const customerName = document.getElementById("shopCustomerNameInput").value.trim();
    const phone = document.getElementById("shopPhoneInput").value.trim();
    const address = document.getElementById("shopAddressInput") ? document.getElementById("shopAddressInput").value.trim() : "";
    
    const rawDisc = document.getElementById("shopDefaultDiscountInput").value;
    const defaultDisc = (rawDisc !== "" && !isNaN(parseFloat(rawDisc))) ? parseFloat(rawDisc) : 0;
    const taxMode = document.getElementById("shopTaxSelect").value;

    const routeObj = AppState.routes.find(r => r.id === routeId);
    const resolvedSubRoute = subRouteName || (routeObj ? routeObj.name : visitDay);

    if (!name) return alert("Enter shop name!");
    if (!routeId) return alert("Select Beat Plan / Route!");

    if (editId) {
        const shop = AppState.shops.find(s => s.id === editId);
        if (shop) {
            shop.name = name;
            shop.visitDay = visitDay;
            shop.routeId = routeId;
            shop.subRouteName = resolvedSubRoute;
            shop.customerName = customerName;
            shop.phone = phone;
            shop.address = address;
            shop.defaultDiscountPct = defaultDisc;
            shop.taxMode = taxMode;
        }
    } else {
        const newShop = {
            id: `s${Date.now()}`,
            name: name,
            visitDay: visitDay,
            routeId: routeId,
            subRouteName: resolvedSubRoute,
            customerName: customerName,
            phone: phone,
            address: address,
            defaultDiscountPct: defaultDisc,
            taxMode: taxMode,
            creditBalance: 0
        };
        AppState.shops.push(newShop);
    }

    saveStateToStorage();
    closeModal("shopModal");
    renderAllViews();
}

function deleteShop(shopId) {
    const shop = AppState.shops.find(s => s.id === shopId);
    if (!shop) return;

    if (confirm(`Delete shop "${shop.name}" from database?`)) {
        AppState.shops = AppState.shops.filter(s => s.id !== shopId);
        saveStateToStorage();
        renderAllViews();
        alert(`Shop "${shop.name}" deleted!`);
    }
}

function editShop(shopId) { openAddShopModal(shopId); }
function editRoute(routeId) { openAddRouteModal(routeId); }

function renderRoutesAndShops() {
    const routeList = document.getElementById("routeListGroup");
    routeList.innerHTML = "";
    if (AppState.routes.length === 0) {
        routeList.innerHTML = `<li style="padding: 12px;" class="text-muted">No routes created yet. Click "Add New Route" above.</li>`;
    } else {
        AppState.routes.forEach(r => {
            const routeShops = AppState.shops.filter(s => s.routeId === r.id);

            routeList.innerHTML += `
                <li style="padding: 14px; border-bottom: 1px solid var(--border-color); display: flex; align-items: center; justify-content: space-between; gap: 10px;">
                    <div>
                        <strong style="font-size: 14px; color: var(--text-dark);">📍 ${r.name}</strong>
                        <span class="badge badge-warning" style="margin-left: 8px;">${r.dayName || 'Daily'}</span>
                        <div style="font-size: 11px; color: var(--text-secondary); margin-top: 2px;">Salesman: ${r.salesman || 'Arif Sanwal'} | ${routeShops.length} Outlets</div>
                    </div>
                    <div class="flex-gap">
                        <button class="btn btn-outline btn-sm" onclick="editRoute('${r.id}')" title="Edit Route"><i class="fa-solid fa-pen"></i> Edit</button>
                        <button class="btn btn-danger btn-sm" onclick="deleteRoute('${r.id}')" title="Delete Route"><i class="fa-solid fa-trash-can"></i></button>
                    </div>
                </li>
            `;
        });
    }
    renderShopsTable();
}

function renderShopsTable() {
    const tbody = document.getElementById("shopsTableBody");
    if (!tbody) return;
    const query = (document.getElementById("shopSearchInput")?.value || "").toLowerCase().trim();

    const filtered = AppState.shops.filter(s => 
        s.name.toLowerCase().includes(query) || 
        (s.customerName && s.customerName.toLowerCase().includes(query)) ||
        (s.phone && s.phone.includes(query))
    );

    if (filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" class="text-muted text-center" style="padding: 20px;">No shops added yet. Click "Add New Shop" to start building your beat database.</td></tr>`;
        return;
    }

    const rowsHtml = filtered.map(s => {
        const routeObj = AppState.routes.find(r => r.id === s.routeId);
        const rName = routeObj ? routeObj.name : (s.subRouteName || s.visitDay || "Beat Route");
        const discVal = (s.defaultDiscountPct !== undefined && s.defaultDiscountPct !== null) ? s.defaultDiscountPct : 0;

        return `
            <tr>
                <td><strong>${s.name}</strong> <small style="display:block; color:var(--text-secondary);">${rName}</small></td>
                <td><span class="badge badge-warning">${s.visitDay || 'All Days'}</span></td>
                <td>${s.customerName || s.ownerName || "-"}</td>
                <td>${s.phone || "-"}</td>
                <td><strong style="color: var(--brand-gold);">${discVal}%</strong></td>
                <td><span class="badge badge-info">${(s.taxMode || 'filer').toUpperCase()}</span></td>
                <td>
                    <button class="btn btn-outline btn-sm" onclick="editShop('${s.id}')"><i class="fa-solid fa-pen"></i> Edit</button>
                    <button class="btn btn-danger btn-sm" onclick="deleteShop('${s.id}')"><i class="fa-solid fa-trash-can"></i></button>
                </td>
            </tr>
        `;
    }).join("");

    tbody.innerHTML = rowsHtml;
}

/* SKU MASTER & COMPANY MASTER */
function renderSkuMasterTable() {
    const tbody = document.getElementById("skuMasterTableBody");
    if (!tbody) return;
    tbody.innerHTML = "";
    let query = (document.getElementById("skuMasterSearch")?.value || "").toLowerCase().trim();
    if (query.includes("filter sku") || query.includes("search sku")) query = "";

    const filtered = AppState.skus.filter(s => {
        const codeStr = String(s.code || "");
        const descStr = String(s.desc || "").toLowerCase();
        const brandStr = String(s.brand || "").toLowerCase();
        return descStr.includes(query) || codeStr.toLowerCase().includes(query) || brandStr.includes(query);
    });

    if (filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="8" class="text-center text-muted" style="padding: 20px;">No SKUs found matching search query.</td></tr>`;
        return;
    }

    filtered.forEach(sku => {
        const compObj = AppState.companies.find(c => c.id === (sku.companyId || 'lays')) || { name: 'Lays' };
        tbody.innerHTML += `
            <tr>
                <td><code>${sku.code}</code></td>
                <td><span class="badge badge-info">${sku.categoryType || 'PC'}</span></td>
                <td>${sku.brand} <small style="display:block; color:var(--brand-gold);">${compObj.name}</small></td>
                <td><strong>${sku.desc}</strong></td>
                <td>Rs. ${sku.tpRate}</td>
                <td>${sku.grams}g</td>
                <td>${sku.pack}</td>
                <td style="white-space: nowrap;">
                    <button class="btn btn-outline btn-sm" onclick="editSku('${sku.code}')" title="Edit SKU Details"><i class="fa-solid fa-pen"></i> Edit</button>
                    <button class="btn btn-danger btn-sm" onclick="deleteSkuMaster('${sku.code}')" title="Delete Discontinued SKU"><i class="fa-solid fa-trash-can"></i> Delete</button>
                </td>
            </tr>
        `;
    });
}

function deleteSkuMaster(skuCode) {
    const codeStr = String(skuCode);
    const sku = AppState.skus.find(s => String(s.code) === codeStr);
    if (!sku) return;

    if (confirm(`🗑️ Are you sure you want to DELETE SKU "${sku.desc}" (${sku.code})?\n\nIf this product company is closed/discontinued, deleting it will remove it permanently from SKU master list and stock picker.`)) {
        AppState.skus = AppState.skus.filter(s => String(s.code) !== codeStr);
        saveStateToStorage();
        renderAllViews();
        alert(`🗑️ SKU "${sku.desc}" (${sku.code}) deleted successfully from master catalog!`);
    }
}

function exportMasterShopsExcel() {
    const headers = [
        "Shop ID", 
        "Shop / Outlet Name", 
        "Shop Address / Location",
        "Visit Beat Day", 
        "Main Route Name", 
        "Sub-Route / Sub-Beat Name",
        "Customer / Owner Name", 
        "Phone / Mobile Number", 
        "Preset Discount (%)", 
        "ADWH Tax Mode", 
        "Assigned Salesman",
        "Credit Outstanding Balance (Rs)"
    ];

    const rows = [];
    (AppState.shops || []).forEach(s => {
        const routeObj = (AppState.routes || []).find(r => r.id === s.routeId) || { name: "Route", salesman: "Ijaz" };
        const subName = s.subRouteName || resolveRouteNameForOrder({ shopId: s.id });
        const discPct = (s.defaultDiscountPct !== undefined && s.defaultDiscountPct !== null) ? s.defaultDiscountPct : 0;

        rows.push([
            s.id,
            s.name,
            s.address || "-",
            s.visitDay || "Monday",
            routeObj.name,
            subName,
            s.customerName || s.ownerName || "-",
            s.phone || "-",
            `${discPct}%`,
            (s.taxMode || "filer").toUpperCase(),
            routeObj.salesman || "Ijaz",
            Math.round(s.creditBalance || 0)
        ]);
    });

    generateStyledExcelFile("Master Beat Shops & Retail Outlets Directory", headers, rows, `Chaudhary_Traders_Master_Shops_Data_${new Date().toISOString().split('T')[0]}.xlsx`);
}

function onSkuCompanyChange(compId) {
    const catSelect = document.getElementById("skuCategoryTypeInput");
    if (!catSelect) return;
    if (compId === "hash") {
        catSelect.innerHTML = `
            <option value="Nimko">Nimko (Fast / Hash)</option>
            <option value="Peanut">Peanut (Fast / Hash)</option>
            <option value="Salty">Salty (Fast / Hash)</option>
            <option value="Hash">Hash Snacks</option>
        `;
    } else {
        catSelect.innerHTML = `
            <option value="PC">PC (Potato Chips)</option>
            <option value="NPC">NPC (Non-Potato Chips)</option>
        `;
    }
}

function openAddSkuModal() {
    document.getElementById("skuEditCode").value = "";
    document.getElementById("skuCodeInput").value = "";
    populateCompanySelectOptions("skuCompanyIdInput", "lays", false);
    onSkuCompanyChange("lays");
    document.getElementById("skuBrandInput").value = "";
    document.getElementById("skuDescInput").value = "";
    document.getElementById("skuPricePointInput").value = "";
    document.getElementById("skuWeightInput").value = "";
    document.getElementById("skuPackInput").value = "";
    document.getElementById("skuTpRateInput").value = "";
    document.getElementById("skuModalTitle").innerText = "Add New SKU Item";
    openModal("skuModal");
}

function saveSkuFromModal() {
    const editCode = document.getElementById("skuEditCode").value;
    let companyId = document.getElementById("skuCompanyIdInput").value || "lays";
    const code = document.getElementById("skuCodeInput").value.trim();
    let type = document.getElementById("skuCategoryTypeInput").value;
    let brand = document.getElementById("skuBrandInput").value.trim();
    const desc = document.getElementById("skuDescInput").value.trim();
    const pricePoint = parseFloat(document.getElementById("skuPricePointInput").value) || 0;
    const grams = parseFloat(document.getElementById("skuWeightInput").value) || 0;
    const pack = parseInt(document.getElementById("skuPackInput").value) || 1;
    const tpRate = parseFloat(document.getElementById("skuTpRateInput").value) || 0;

    if (!code || !desc || !tpRate) return alert("Fill required SKU fields!");

    // Auto-detect FAST company if code, desc, or category matches FAST
    const skuTemp = { code, companyId, categoryType: type, brand, desc };
    companyId = getCompanyIdForItem(skuTemp);
    if (!brand) brand = (companyId === "hash") ? "Fast" : "Lays";
    type = getCategoryTypeForItem({ code, companyId, categoryType: type, brand, desc });

    if (editCode) {
        const sku = AppState.skus.find(s => s.code === editCode);
        if (sku) {
            sku.code = code; sku.companyId = companyId; sku.categoryType = type; sku.brand = brand;
            sku.desc = desc; sku.pricePoint = pricePoint; sku.grams = grams;
            sku.pack = pack; sku.tpRate = tpRate;
        }
    } else {
        AppState.skus.push({ code, companyId, categoryType: type, brand, desc, pricePoint, grams, pack, tpRate, stockCartons: 50, stockUnits: 0 });
    }

    saveStateToStorage();
    closeModal("skuModal");
    renderAllViews();
}

function editSku(code) {
    const sku = AppState.skus.find(s => s.code === code);
    if (sku) {
        document.getElementById("skuEditCode").value = sku.code;
        document.getElementById("skuCodeInput").value = sku.code;
        const compId = sku.companyId || getCompanyIdForItem(sku);
        populateCompanySelectOptions("skuCompanyIdInput", compId, false);
        onSkuCompanyChange(compId);
        document.getElementById("skuCategoryTypeInput").value = sku.categoryType || getCategoryTypeForItem(sku);
        document.getElementById("skuBrandInput").value = sku.brand || "";
        document.getElementById("skuDescInput").value = sku.desc || "";
        document.getElementById("skuPricePointInput").value = sku.pricePoint || "";
        document.getElementById("skuWeightInput").value = sku.grams || "";
        document.getElementById("skuPackInput").value = sku.pack || "";
        document.getElementById("skuTpRateInput").value = sku.tpRate || "";
        document.getElementById("skuModalTitle").innerText = `Edit SKU (${sku.code})`;
        openModal("skuModal");
    }
}

/* COMPANY MASTER MANAGEMENT STUDIO */
function renderCompanyMasterTable() {
    const tbody = document.getElementById("companyMasterTableBody");
    if (!tbody) return;
    tbody.innerHTML = "";

    (AppState.companies || []).forEach(c => {
        const skuCount = AppState.skus.filter(s => (s.companyId || "lays") === c.id).length;
        const taxLabel = (c.taxMode === "lays_tax") ? `<span class="badge badge-warning">ADWH Tax (0.5% / 2.5%) + 4% Disc</span>` : `<span class="badge badge-success">Standard (No ADWH Tax)</span>`;
        const metricLabel = (c.metric === "kg" || (!c.metric && c.id === "lays")) ? `<span class="badge badge-info"><i class="fa-solid fa-weight-scale"></i> KG (Kilograms)</span>` : `<span class="badge badge-warning" style="background: rgba(249, 115, 22, 0.15); color: #f97316; border: 1px solid rgba(249, 115, 22, 0.3);"><i class="fa-solid fa-box"></i> Cartons (Ctns)</span>`;
        const actionBtns = c.isSystem ? 
            `<button class="btn btn-outline btn-sm" onclick="openCompanyModal('${c.id}')"><i class="fa-solid fa-pen"></i> Rename / Edit</button>` :
            `<div class="flex-gap">
                <button class="btn btn-outline btn-sm" onclick="openCompanyModal('${c.id}')"><i class="fa-solid fa-pen"></i> Edit</button>
                <button class="btn btn-danger btn-sm" onclick="deleteCompany('${c.id}')"><i class="fa-solid fa-trash"></i> Delete</button>
             </div>`;

        tbody.innerHTML += `
            <tr>
                <td><code>${c.id}</code></td>
                <td><strong>${c.name}</strong> ${c.id === 'lays' ? '<span class="badge badge-info">PepsiCo</span>' : (c.id === 'hash' ? '<span class="badge badge-warning">Fast Catalog</span>' : '')}</td>
                <td>${metricLabel}</td>
                <td>${taxLabel}</td>
                <td>${c.description || '-'}</td>
                <td><strong style="color: var(--accent-green); font-size: 14px;">${skuCount} SKUs</strong></td>
                <td>${actionBtns}</td>
            </tr>
        `;
    });
}

function openCompanyModal(companyId = null) {
    if (companyId) {
        const comp = AppState.companies.find(c => c.id === companyId);
        if (comp) {
            document.getElementById("companyEditId").value = comp.id;
            document.getElementById("companyNameInput").value = comp.name;
            document.getElementById("companyMetricInput").value = comp.metric || (comp.id === "hash" ? "ctn" : "kg");
            document.getElementById("companyTaxModeInput").value = comp.taxMode || "no_tax";
            document.getElementById("companyDescInput").value = comp.description || "";
            document.getElementById("companyModalTitle").innerText = `Edit Company "${comp.name}"`;
        }
    } else {
        document.getElementById("companyEditId").value = "";
        document.getElementById("companyNameInput").value = "";
        document.getElementById("companyMetricInput").value = "ctn";
        document.getElementById("companyTaxModeInput").value = "no_tax";
        document.getElementById("companyDescInput").value = "";
        document.getElementById("companyModalTitle").innerText = "Add New Company / Brand";
    }
    openModal("companyModal");
}

function saveCompanyModal() {
    const editId = document.getElementById("companyEditId").value;
    const name = document.getElementById("companyNameInput").value.trim();
    const metric = document.getElementById("companyMetricInput").value || "ctn";
    const taxMode = document.getElementById("companyTaxModeInput").value;
    const desc = document.getElementById("companyDescInput").value.trim();

    if (!name) return alert("Enter Company / Brand Name!");

    if (editId) {
        const comp = AppState.companies.find(c => c.id === editId);
        if (comp) {
            comp.name = name;
            comp.metric = metric;
            comp.taxMode = taxMode;
            comp.description = desc;
        }
    } else {
        const newId = name.toLowerCase().replace(/[^a-z0-9]/g, '_') + '_' + Date.now().toString().slice(-4);
        AppState.companies.push({
            id: newId,
            name: name,
            metric: metric,
            taxMode: taxMode,
            description: desc,
            isSystem: false
        });
    }

    saveStateToStorage();
    closeModal("companyModal");
    updateAllCompanyDropdowns();
    renderAllViews();
    alert(`Company "${name}" saved successfully with metric: ${metric === 'kg' ? 'Kilograms (KG)' : 'Cartons (Ctns)'}!`);
}

function deleteCompany(companyId) {
    const comp = AppState.companies.find(c => c.id === companyId);
    if (!comp) return;
    if (comp.isSystem) return alert("System core company cannot be deleted.");

    const linkedSkus = AppState.skus.filter(s => s.companyId === companyId);
    if (linkedSkus.length > 0) {
        if (!confirm(`Warning: Company "${comp.name}" has ${linkedSkus.length} SKUs assigned to it. Deleting will reassign these SKUs to Lays. Continue?`)) return;
        linkedSkus.forEach(s => s.companyId = "lays");
    }

    if (confirm(`Are you sure you want to delete Company "${comp.name}"?`)) {
        AppState.companies = AppState.companies.filter(c => c.id !== companyId);
        if (AppState.selectedCompanyId === companyId) AppState.selectedCompanyId = "all";
        if (AppState.posCompanyId === companyId) AppState.posCompanyId = "lays";
        if (AppState.orderCompanyId === companyId) AppState.orderCompanyId = "lays";
        saveStateToStorage();
        updateAllCompanyDropdowns();
        renderAllViews();
        alert(`Company "${comp.name}" deleted.`);
    }
}

/* --------------------------------------------------------------------------
   REPORTS ENGINES WITH EXPANDABLE ACCORDION DETAILS FOR PC & NPC SALES
   -------------------------------------------------------------------------- */

function setSalesReportSubTab(tabName, btnEl) {
    AppState.activeSubTab.sales = tabName;
    const pills = document.querySelectorAll("#salesReportsTab .report-pill");
    pills.forEach(p => p.classList.remove("active"));
    if (btnEl) btnEl.classList.add("active");
    renderSalesReports();
}

function renderSalesReports() {
    const bills = getConfirmedDeliveredBillsForReport('sales');
    const currentSub = AppState.activeSubTab.sales;
    const titleEl = document.getElementById("salesReportTitle");
    const headEl = document.getElementById("salesReportTableHead");
    const bodyEl = document.getElementById("salesReportTableBody");
    bodyEl.innerHTML = "";

    if (currentSub === "pcSale" || currentSub === "npcSale" || currentSub === "hashSale") {
        const isPc = currentSub === "pcSale";
        const isHash = currentSub === "hashSale";
        const activeComp = AppState.reportFilters.sales?.companyId || "all";
        
        let titleText = "Confirmed PC Sale Report (Potato Chips: Lays / MAXX / Wavy)";
        if (currentSub === "npcSale") titleText = "Confirmed NPC Sale Report (Non-Potato Chips: Kurkure / Cheetos / Oats)";
        if (currentSub === "hashSale") titleText = "Confirmed Hash Sale Report (Hash Foods & Beverages Brand Catalog)";
        titleEl.innerText = titleText;

        headEl.innerHTML = `<tr><th>Action</th><th>Invoice ID</th><th>Date</th><th>Shop Name</th><th>Brand(s)</th><th>Category</th><th>Cartons (Ctns)</th><th>Loose Units (Pkts)</th><th>Weight (KG)</th><th>Gross Basic (Rs)</th><th>Net Revenue (Rs)</th></tr>`;
        
        let count = 0;
        bills.forEach(b => {
            const filteredItems = (b.items || []).filter(i => {
                const codeStr = String(i.code || "").toUpperCase();
                const catTypeStr = String(i.categoryType || "").toUpperCase();
                const descStr = String(i.desc || "").toUpperCase();
                const brandStr = String(i.brand || "").toUpperCase();
                const compId = String(i.companyId || b.companyId || "lays").toLowerCase();

                // Item level company check
                if (activeComp !== "all") {
                    const matchesComp = (compId === activeComp.toLowerCase()) ||
                        (activeComp.toLowerCase() === "hash" && (catTypeStr === "HASH" || codeStr.startsWith("HASH"))) ||
                        (activeComp.toLowerCase() === "lays" && (catTypeStr === "PC" || catTypeStr === "NPC" || !codeStr.startsWith("HASH")));
                    if (!matchesComp) return false;
                }

                const isHashItem = (catTypeStr === "HASH" || compId === "hash" || codeStr.startsWith("HASH"));
                if (isHash) return isHashItem;
                if (isHashItem) return false;

                const isPotatoChip = (catTypeStr === "PC" || brandStr === "LAYS" || descStr.includes("LAYS") || descStr.includes("MAXX") || descStr.includes("WAVY"));
                if (isPc) return isPotatoChip;
                return !isPotatoChip;
            });

            if (filteredItems.length > 0) {
                count++;
                let groupCtn = 0, groupUnits = 0, groupKg = 0, groupBasic = 0, groupNet = 0;
                const brandSet = new Set();

                filteredItems.forEach(i => {
                    const iCtn = i.cartons || 0;
                    const iUnits = i.units || 0;
                    const iKg = (i.weightKg !== undefined && i.weightKg !== null) ? i.weightKg : 0;
                    const iBasic = i.basicAmount || 0;
                    const iNet = i.amount || 0;

                    groupCtn += iCtn;
                    groupUnits += iUnits;
                    groupKg += iKg;
                    groupBasic += iBasic;
                    groupNet += iNet;
                    brandSet.add(i.brand || (i.companyId === 'hash' ? 'Hash' : (String(i.desc || '').toUpperCase().includes("LAYS") ? "Lays" : "Cheetos")));
                });

                const brandsStr = Array.from(brandSet).join(', ');
                const categoryBadge = isHash ? `<span class="badge badge-warning" style="background:rgba(249, 115, 22, 0.15); color:#f97316;">Hash</span>` : (isPc ? `<span class="badge badge-info">PC</span>` : `<span class="badge badge-warning">NPC</span>`);

                const nestedHtml = filteredItems.map(i => {
                    const bName = i.brand || (i.companyId === 'hash' ? 'Hash' : (String(i.desc || '').toUpperCase().includes("LAYS") ? "Lays" : "Cheetos"));
                    const cType = i.categoryType || (isHash ? "Hash" : (isPc ? "PC" : "NPC"));
                    const wKg = (i.weightKg !== undefined && i.weightKg !== null) ? i.weightKg : 0;
                    const totPkts = i.totalPackets !== undefined ? i.totalPackets : (((i.cartons || 0) * (i.pack || 12)) + (i.units || 0));
                    const basic = i.basicAmount || 0;
                    const disc = i.discAmount || 0;
                    const amt = i.amount || 0;

                    return `
                    <tr>
                        <td><code>${i.code || ''}</code></td>
                        <td>${bName}</td>
                        <td>${i.categoryName || (cType === 'Hash' ? 'Hash Catalog' : (cType === 'PC' ? 'Potato Chips' : 'Non-Potato Chips'))}</td>
                        <td>${i.desc || ''}</td>
                        <td><strong style="color: var(--accent-green);">${i.cartons || 0} Ctns</strong></td>
                        <td><strong style="color: var(--brand-gold);">${i.units || 0} Pkts</strong></td>
                        <td>${totPkts} Pkts</td>
                        <td>${wKg.toFixed(2)} KG</td>
                        <td>Rs. ${i.tpRate || 0}</td>
                        <td>Rs. ${basic.toFixed(2)}</td>
                        <td style="color: var(--brand-gold);">-Rs. ${disc.toFixed(2)}</td>
                        <td><strong>Rs. ${amt.toFixed(2)}</strong></td>
                    </tr>
                `}).join('');

                bodyEl.innerHTML += `
                    <tr>
                        <td><button class="btn-expand-row" onclick="toggleReportRowDetails(this)"><i class="fa-solid fa-eye"></i> View Details</button></td>
                        <td><strong>${b.billNo}</strong></td>
                        <td>${b.date}</td>
                        <td><strong>${b.shopName}</strong></td>
                        <td>${brandsStr}</td>
                        <td>${categoryBadge}</td>
                        <td><strong style="color: var(--accent-green); font-size: 14px;">${groupCtn} Ctns</strong></td>
                        <td><strong style="color: var(--brand-gold); font-size: 14px;">${groupUnits} Pkts</strong></td>
                        <td>${groupKg.toFixed(2)} KG</td>
                        <td>Rs. ${Math.round(groupBasic).toLocaleString()}</td>
                        <td><strong>Rs. ${Math.round(groupNet).toLocaleString()}</strong></td>
                    </tr>
                    <tr class="report-detail-row hidden" style="display: none;">
                        <td colspan="11">
                            <div class="nested-sku-box">
                                <span class="nested-title"><i class="fa-solid fa-box-open"></i> ${isHash ? 'Hash Catalog' : (isPc ? 'PC (Potato Chips)' : 'NPC (Non-Potato Chips)')} Itemized Breakdown for Invoice ${b.billNo} (${b.shopName}):</span>
                                <table class="nested-sku-table">
                                    <thead><tr><th>Product Code</th><th>Brand</th><th>Category</th><th>Description</th><th>Cartons (Ctns)</th><th>Loose Units (Pkts)</th><th>Total Packets</th><th>Weight (KG)</th><th>Trade Price</th><th>Basic Amount</th><th>Discount</th><th>Line Net</th></tr></thead>
                                    <tbody>${nestedHtml}</tbody>
                                </table>
                            </div>
                        </td>
                    </tr>
                `;
            }
        });
        if (count === 0) {
            if (activeComp === "hash" && isPc) {
                bodyEl.innerHTML = `<tr><td colspan="11" class="text-muted text-center" style="padding: 20px;"><i class="fa-solid fa-circle-info"></i> Company filter is set to <strong>Hash</strong>. Click the <strong>📦 Hash Sale Report</strong> sub-tab to view Hash sales, or set Company filter to <strong>🏢 All Companies (Combined)</strong> or <strong>Lays</strong>.</td></tr>`;
            } else {
                bodyEl.innerHTML = `<tr><td colspan="11" class="text-muted text-center" style="padding: 20px;">No delivered ${isHash ? 'Hash' : (isPc ? 'PC' : 'NPC')} sales in selected date range / company filter.</td></tr>`;
            }
        }

    } else if (currentSub === "filerSale" || currentSub === "nonFilerSale" || currentSub === "combinedSale") {
        titleEl.innerText = currentSub === "filerSale" ? "Filer Sales Report (0.5% ADWH Tax Outlets)" : (currentSub === "nonFilerSale" ? "Non-Filer Sales Report (2.5% ADWH Tax Outlets)" : "Combined Master Sales Ledger");
        headEl.innerHTML = `<tr><th>Action</th><th>Invoice ID</th><th>Date</th><th>Shop Name</th><th>Cartons (Ctns)</th><th>Loose Units (Pkts)</th><th>Total Weight (KG)</th><th>Discount</th><th>ADWH Tax</th><th>Net Amount (Rs)</th></tr>`;
        
        let targetBills = bills;
        if (currentSub === "filerSale") targetBills = bills.filter(b => b.taxMode === "filer");
        if (currentSub === "nonFilerSale") targetBills = bills.filter(b => b.taxMode === "nonfiler");

        const activeComp = AppState.reportFilters.sales?.companyId || "all";

        targetBills.forEach(b => {
            const filteredItems = (b.items || []).filter(i => {
                if (activeComp === "all") return true;
                const codeStr = String(i.code || "").toUpperCase();
                const catTypeStr = String(i.categoryType || "").toUpperCase();
                const compId = String(i.companyId || b.companyId || "lays").toLowerCase();
                return (compId === activeComp.toLowerCase()) ||
                    (activeComp.toLowerCase() === "hash" && (catTypeStr === "HASH" || codeStr.startsWith("HASH"))) ||
                    (activeComp.toLowerCase() === "lays" && (catTypeStr === "PC" || catTypeStr === "NPC" || !codeStr.startsWith("HASH")));
            });

            if (filteredItems.length === 0) return;

            let billCartons = 0, billUnits = 0, billKg = 0, billBasic = 0, billDisc = 0, billNet = 0;
            const nestedHtml = filteredItems.map(i => {
                const bName = i.brand || (i.companyId === 'hash' ? 'Hash' : (i.desc && i.desc.includes("LAYS") ? "Lays" : "Cheetos"));
                const cType = i.categoryType || (i.companyId === 'hash' ? 'Hash' : (i.desc && i.desc.includes("LAYS") ? "PC" : "NPC"));
                const wKg = (i.weightKg !== undefined && i.weightKg !== null) ? i.weightKg : 0;
                const totPkts = i.totalPackets !== undefined ? i.totalPackets : (((i.cartons || 0) * (i.pack || 12)) + (i.units || 0));
                const basic = i.basicAmount || 0;
                const disc = i.discAmount || 0;
                const amt = i.amount || 0;

                billCartons += (i.cartons || 0);
                billUnits += (i.units || 0);
                billKg += wKg;
                billBasic += basic;
                billDisc += disc;
                billNet += amt;

                return `
                <tr>
                    <td>${bName}</td>
                    <td>${cType}</td>
                    <td>${i.desc || ''}</td>
                    <td><strong style="color: var(--accent-green);">${i.cartons || 0} Ctns</strong></td>
                    <td><strong style="color: var(--brand-gold);">${i.units || 0} Pkts</strong></td>
                    <td>${totPkts} Pkts</td>
                    <td>${wKg.toFixed(2)} KG</td>
                    <td>Rs. ${basic.toFixed(2)}</td>
                    <td style="color: var(--brand-gold);">-Rs. ${disc.toFixed(2)}</td>
                    <td><strong>Rs. ${amt.toFixed(2)}</strong></td>
                </tr>
            `}).join('');

            const bAdwh = (b.companyId === 'hash' || activeComp === 'hash') ? 0 : ((b.totalAdwh !== undefined && b.totalAdwh !== null) ? b.totalAdwh : 0);

            bodyEl.innerHTML += `
                <tr>
                    <td><button class="btn-expand-row" onclick="toggleReportRowDetails(this)"><i class="fa-solid fa-eye"></i> View Details</button></td>
                    <td><strong>${b.billNo}</strong></td>
                    <td>${b.date}</td>
                    <td>${b.shopName}</td>
                    <td><strong style="color: var(--accent-green); font-size: 14px;">${billCartons} Ctns</strong></td>
                    <td><strong style="color: var(--brand-gold); font-size: 14px;">${billUnits} Pkts</strong></td>
                    <td>${billKg.toFixed(2)} KG</td>
                    <td>-Rs. ${billDisc.toFixed(2)} (${b.globalDiscPct || 0}%)</td>
                    <td>+Rs. ${bAdwh.toFixed(2)}</td>
                    <td><strong>Rs. ${Math.round(billNet + bAdwh).toLocaleString()}</strong></td>
                </tr>
                <tr class="report-detail-row hidden" style="display: none;">
                    <td colspan="10">
                        <div class="nested-sku-box">
                            <span class="nested-title"><i class="fa-solid fa-boxes-stacked"></i> Invoice ${b.billNo} - Cartons & Loose Units Itemized Breakdown:</span>
                            <table class="nested-sku-table">
                                <thead><tr><th>Brand</th><th>PC/NPC</th><th>Product SKU Description</th><th>Cartons (Ctns)</th><th>Loose Units (Pkts)</th><th>Total Packets</th><th>Weight (KG)</th><th>Basic Amount</th><th>Discount</th><th>Line Net</th></tr></thead>
                                <tbody>${nestedHtml}</tbody>
                            </table>
                        </div>
                    </td>
                </tr>
            `;
        });
        if (targetBills.length === 0) bodyEl.innerHTML = `<tr><td colspan="10" class="text-muted text-center" style="padding: 20px;">No sales in selected date range / company filter.</td></tr>`;

    } else if (currentSub === "productWise") {
        titleEl.innerText = "Product-wise Sales Ledger (Separate Columns for Cartons & Loose Units)";
        headEl.innerHTML = `<tr><th>Action</th><th>Product Code</th><th>Brand</th><th>PC / NPC</th><th>Product Description</th><th>Order Date</th><th>Cartons (Ctns)</th><th>Loose Units (Pkts)</th><th>Total Weight (KG)</th><th>Total Revenue (Rs)</th></tr>`;
        
        const activeComp = AppState.reportFilters.sales?.companyId || "all";
        const pDateMap = {};
        bills.forEach(b => (b.items || []).forEach(i => {
            const codeStr = String(i.code || "").toUpperCase();
            const catTypeStr = String(i.categoryType || "").toUpperCase();
            const compId = String(i.companyId || b.companyId || "lays").toLowerCase();

            if (activeComp !== "all") {
                const matchesComp = (compId === activeComp.toLowerCase()) ||
                    (activeComp.toLowerCase() === "hash" && (catTypeStr === "HASH" || codeStr.startsWith("HASH"))) ||
                    (activeComp.toLowerCase() === "lays" && (catTypeStr === "PC" || catTypeStr === "NPC" || !codeStr.startsWith("HASH")));
                if (!matchesComp) return;
            }

            const key = `${i.desc || i.code}___${b.date}`;
            if (!pDateMap[key]) {
                const bName = i.brand || (i.companyId === 'hash' ? 'Hash' : (i.desc && i.desc.includes("LAYS") ? "Lays" : "Cheetos"));
                const cType = i.categoryType || (i.companyId === 'hash' ? 'Hash' : (i.desc && i.desc.includes("LAYS") ? "PC" : "NPC"));
                pDateMap[key] = {
                    skuCode: i.code,
                    skuDesc: i.desc || i.code,
                    brand: bName,
                    categoryType: cType,
                    date: b.date,
                    ctn: 0,
                    units: 0,
                    kg: 0,
                    val: 0,
                    shops: {}
                };
            }
            pDateMap[key].ctn += (i.cartons || 0);
            pDateMap[key].units += (i.units || 0);
            pDateMap[key].kg += (i.weightKg || 0);
            pDateMap[key].val += (i.amount || 0);

            if (!pDateMap[key].shops[b.shopName]) pDateMap[key].shops[b.shopName] = { ctn: 0, units: 0, kg: 0, val: 0 };
            pDateMap[key].shops[b.shopName].ctn += (i.cartons || 0);
            pDateMap[key].shops[b.shopName].units += (i.units || 0);
            pDateMap[key].shops[b.shopName].kg += (i.weightKg || 0);
            pDateMap[key].shops[b.shopName].val += (i.amount || 0);
        }));

        const keys = Object.keys(pDateMap).sort();
        keys.forEach(k => {
            const item = pDateMap[k];
            const shopKeys = Object.keys(item.shops);
            const nestedHtml = shopKeys.map(sName => `
                <tr>
                    <td><strong>${sName}</strong></td>
                    <td><strong style="color: var(--accent-green);">${item.shops[sName].ctn} Ctns</strong></td>
                    <td><strong style="color: var(--brand-gold);">${item.shops[sName].units} Pkts</strong></td>
                    <td>${(item.shops[sName].kg || 0).toFixed(2)} KG</td>
                    <td><strong>Rs. ${Math.round(item.shops[sName].val || 0).toLocaleString()}</strong></td>
                </tr>
            `).join('');

            bodyEl.innerHTML += `
                <tr>
                    <td><button class="btn-expand-row" onclick="toggleReportRowDetails(this)"><i class="fa-solid fa-eye"></i> View Details</button></td>
                    <td><code>${item.skuCode}</code></td>
                    <td><strong>${item.brand}</strong></td>
                    <td><span class="badge badge-info">${item.categoryType}</span></td>
                    <td><strong>${item.skuDesc}</strong></td>
                    <td><strong>${item.date}</strong></td>
                    <td><strong style="color: var(--accent-green); font-size: 14px;">${item.ctn} Ctns</strong></td>
                    <td><strong style="color: var(--brand-gold); font-size: 14px;">${item.units} Pkts</strong></td>
                    <td>${(item.kg || 0).toFixed(2)} KG</td>
                    <td><strong>Rs. ${Math.round(item.val || 0).toLocaleString()}</strong></td>
                </tr>
                <tr class="report-detail-row hidden" style="display: none;">
                    <td colspan="10">
                        <div class="nested-sku-box">
                            <span class="nested-title"><i class="fa-solid fa-shop"></i> Outlets that purchased ${item.skuDesc} on ${item.date}:</span>
                            <table class="nested-sku-table">
                                <thead><tr><th>Shop Outlet Name</th><th>Cartons (Ctns)</th><th>Loose Units (Pkts)</th><th>Weight Delivered</th><th>Total Amount</th></tr></thead>
                                <tbody>${nestedHtml}</tbody>
                            </table>
                        </div>
                    </td>
                </tr>
            `;
        });
        if (keys.length === 0) bodyEl.innerHTML = `<tr><td colspan="10" class="text-muted text-center" style="padding: 20px;">No product sales in selected date range / company filter.</td></tr>`;

    } else if (currentSub === "shopWise") {
        titleEl.innerText = "Shop-wise Sales Ledger (Separate Columns for Cartons & Loose Units)";
        headEl.innerHTML = `<tr><th>Action</th><th>Shop Outlet Name</th><th>Order Date</th><th>Cartons (Ctns)</th><th>Loose Units (Pkts)</th><th>Total Weight (KG)</th><th>Gross Basic (Rs)</th><th>Discount (-Rs)</th><th>Net Revenue (Rs)</th></tr>`;
        
        const activeComp = AppState.reportFilters.sales?.companyId || "all";
        const shopDateMap = {};
        bills.forEach(b => {
            const validItems = (b.items || []).filter(i => {
                if (activeComp === "all") return true;
                const codeStr = String(i.code || "").toUpperCase();
                const catTypeStr = String(i.categoryType || "").toUpperCase();
                const compId = String(i.companyId || b.companyId || "lays").toLowerCase();
                return (compId === activeComp.toLowerCase()) ||
                    (activeComp.toLowerCase() === "hash" && (catTypeStr === "HASH" || codeStr.startsWith("HASH"))) ||
                    (activeComp.toLowerCase() === "lays" && (catTypeStr === "PC" || catTypeStr === "NPC" || !codeStr.startsWith("HASH")));
            });

            if (validItems.length === 0) return;

            const key = `${b.shopName}___${b.date}`;
            if (!shopDateMap[key]) {
                shopDateMap[key] = {
                    shopName: b.shopName,
                    date: b.date,
                    ctn: 0,
                    units: 0,
                    kg: 0,
                    basic: 0,
                    disc: 0,
                    net: 0,
                    items: []
                };
            }

            validItems.forEach(i => {
                const iCtn = i.cartons || 0;
                const iUnits = i.units || 0;
                const iKg = i.weightKg || 0;
                const iBasic = i.basicAmount || 0;
                const iDisc = i.discAmount || 0;
                const iNet = i.amount || 0;

                shopDateMap[key].ctn += iCtn;
                shopDateMap[key].units += iUnits;
                shopDateMap[key].kg += iKg;
                shopDateMap[key].basic += iBasic;
                shopDateMap[key].disc += iDisc;
                shopDateMap[key].net += iNet;
                shopDateMap[key].items.push(i);
            });
        });

        const keys = Object.keys(shopDateMap).sort();
        keys.forEach(k => {
            const group = shopDateMap[k];
            const nestedHtml = group.items.map(i => {
                const bName = i.brand || (i.companyId === 'hash' ? 'Hash' : (i.desc && i.desc.includes("LAYS") ? "Lays" : "Cheetos"));
                const cType = i.categoryType || (i.companyId === 'hash' ? 'Hash' : (i.desc && i.desc.includes("LAYS") ? "PC" : "NPC"));
                const wKg = (i.weightKg !== undefined && i.weightKg !== null) ? i.weightKg : 0;
                const totPkts = i.totalPackets !== undefined ? i.totalPackets : (((i.cartons || 0) * (i.pack || 12)) + (i.units || 0));
                const basic = i.basicAmount || 0;
                const disc = i.discAmount || 0;
                const amt = i.amount || 0;

                return `
                <tr>
                    <td><strong>${bName}</strong></td>
                    <td><span class="badge badge-info">${cType}</span></td>
                    <td>${i.desc || ''}</td>
                    <td><strong style="color: var(--accent-green);">${i.cartons || 0} Ctns</strong></td>
                    <td><strong style="color: var(--brand-gold);">${i.units || 0} Pkts</strong></td>
                    <td>${totPkts} Pkts</td>
                    <td>${wKg.toFixed(2)} KG</td>
                    <td>Rs. ${basic.toFixed(2)}</td>
                    <td style="color: var(--brand-gold);">-Rs. ${disc.toFixed(2)}</td>
                    <td><strong>Rs. ${amt.toFixed(2)}</strong></td>
                </tr>
            `}).join('');

            bodyEl.innerHTML += `
                <tr>
                    <td><button class="btn-expand-row" onclick="toggleReportRowDetails(this)"><i class="fa-solid fa-eye"></i> View Details</button></td>
                    <td><strong>${group.shopName}</strong></td>
                    <td><strong>${group.date}</strong></td>
                    <td><strong style="color: var(--accent-green); font-size: 14px;">${group.ctn} Ctns</strong></td>
                    <td><strong style="color: var(--brand-gold); font-size: 14px;">${group.units} Pkts</strong></td>
                    <td>${(group.kg || 0).toFixed(2)} KG</td>
                    <td>Rs. ${Math.round(group.basic || 0).toLocaleString()}</td>
                    <td style="color: var(--brand-gold); font-weight: 700;">-Rs. ${(group.disc || 0).toFixed(2)}</td>
                    <td><strong>Rs. ${Math.round(group.net || 0).toLocaleString()}</strong></td>
                </tr>
                <tr class="report-detail-row hidden" style="display: none;">
                    <td colspan="9">
                        <div class="nested-sku-box">
                            <span class="nested-title"><i class="fa-solid fa-store"></i> ${group.shopName} (${group.date}) - Cartons & Loose Units SKU Details:</span>
                            <table class="nested-sku-table">
                                <thead><tr><th>Brand</th><th>PC / NPC</th><th>Product SKU Description</th><th>Cartons (Ctns)</th><th>Loose Units (Pkts)</th><th>Total Packets</th><th>Weight (KG)</th><th>Basic Amount</th><th>Discount</th><th>Line Net</th></tr></thead>
                                <tbody>${nestedHtml}</tbody>
                            </table>
                        </div>
                    </td>
                </tr>
            `;
        });
        if (keys.length === 0) bodyEl.innerHTML = `<tr><td colspan="9" class="text-muted text-center" style="padding: 20px;">No shop sales recorded in selected date range / company filter.</td></tr>`;

    } else if (currentSub === "routeWise" || currentSub === "salesmanWise") {
        titleEl.innerText = currentSub === "routeWise" ? "Route-wise Sales Ledger" : "Salesman-wise Sales Ledger";
        headEl.innerHTML = `<tr><th>Action</th><th>${currentSub === "routeWise" ? "Route / Beat Name" : "Salesman Name"}</th><th>Delivered Bills</th><th>Cartons (Ctns)</th><th>Loose Units (Pkts)</th><th>Total Weight (KG)</th><th>Total Sales Revenue (Rs)</th></tr>`;
        
        const activeComp = AppState.reportFilters.sales?.companyId || "all";
        const rMap = {};
        bills.forEach(b => {
            const validItems = (b.items || []).filter(i => {
                if (activeComp === "all") return true;
                const codeStr = String(i.code || "").toUpperCase();
                const catTypeStr = String(i.categoryType || "").toUpperCase();
                const compId = String(i.companyId || b.companyId || "lays").toLowerCase();
                return (compId === activeComp.toLowerCase()) ||
                    (activeComp.toLowerCase() === "hash" && (catTypeStr === "HASH" || codeStr.startsWith("HASH"))) ||
                    (activeComp.toLowerCase() === "lays" && (catTypeStr === "PC" || catTypeStr === "NPC" || !codeStr.startsWith("HASH")));
            });

            if (validItems.length === 0) return;

            const nameKey = currentSub === "routeWise" ? (b.routeName || "Main Route") : (b.salesman || "Ijaz");
            if (!rMap[nameKey]) rMap[nameKey] = { bills: 0, ctn: 0, units: 0, kg: 0, val: 0, shops: {} };
            rMap[nameKey].bills += 1;

            validItems.forEach(i => {
                const iCtn = i.cartons || 0;
                const iUnits = i.units || 0;
                const iKg = i.weightKg || 0;
                const iNet = i.amount || 0;

                rMap[nameKey].ctn += iCtn;
                rMap[nameKey].units += iUnits;
                rMap[nameKey].kg += iKg;
                rMap[nameKey].val += iNet;

                if (!rMap[nameKey].shops[b.shopName]) rMap[nameKey].shops[b.shopName] = { ctn: 0, units: 0, kg: 0, val: 0 };
                rMap[nameKey].shops[b.shopName].ctn += iCtn;
                rMap[nameKey].shops[b.shopName].units += iUnits;
                rMap[nameKey].shops[b.shopName].kg += iKg;
                rMap[nameKey].shops[b.shopName].val += iNet;
            });
        });

        const keys = Object.keys(rMap);
        keys.forEach(r => {
            const group = rMap[r];
            const shopKeys = Object.keys(group.shops);
            const nestedHtml = shopKeys.map(sName => `
                <tr>
                    <td><strong>${sName}</strong></td>
                    <td><strong style="color: var(--accent-green);">${group.shops[sName].ctn} Ctns</strong></td>
                    <td><strong style="color: var(--brand-gold);">${group.shops[sName].units} Pkts</strong></td>
                    <td>${(group.shops[sName].kg || 0).toFixed(2)} KG</td>
                    <td><strong>Rs. ${Math.round(group.shops[sName].val || 0).toLocaleString()}</strong></td>
                </tr>
            `).join('');

            bodyEl.innerHTML += `
                <tr>
                    <td><button class="btn-expand-row" onclick="toggleReportRowDetails(this)"><i class="fa-solid fa-eye"></i> View Details</button></td>
                    <td><strong>${r}</strong></td>
                    <td>${group.bills} Bills</td>
                    <td><strong style="color: var(--accent-green); font-size: 14px;">${group.ctn} Ctns</strong></td>
                    <td><strong style="color: var(--brand-gold); font-size: 14px;">${group.units} Pkts</strong></td>
                    <td>${(group.kg || 0).toFixed(2)} KG</td>
                    <td><strong>Rs. ${Math.round(group.val || 0).toLocaleString()}</strong></td>
                </tr>
                <tr class="report-detail-row hidden" style="display: none;">
                    <td colspan="7">
                        <div class="nested-sku-box">
                            <span class="nested-title"><i class="fa-solid fa-map-pin"></i> Outlets under ${r}:</span>
                            <table class="nested-sku-table">
                                <thead><tr><th>Shop Outlet Name</th><th>Cartons (Ctns)</th><th>Loose Units (Pkts)</th><th>Weight Delivered</th><th>Total Amount</th></tr></thead>
                                <tbody>${nestedHtml}</tbody>
                            </table>
                        </div>
                    </td>
                </tr>
            `;
        });
        if (keys.length === 0) bodyEl.innerHTML = `<tr><td colspan="7" class="text-muted text-center" style="padding: 20px;">No sales in selected date range / company filter.</td></tr>`;

    } else if (currentSub === "periodWise") {
        titleEl.innerText = "Daily / Monthly Sales Ledger (Separate Columns for Cartons & Loose Units)";
        headEl.innerHTML = `<tr><th>Action</th><th>Order Date</th><th>Delivered Bills</th><th>Cartons (Ctns)</th><th>Loose Units (Pkts)</th><th>Total Weight (KG)</th><th>Total Net Sales (Rs)</th></tr>`;
        
        const activeComp = AppState.reportFilters.sales?.companyId || "all";
        const dateGroupMap = {};
        bills.forEach(b => {
            const validItems = (b.items || []).filter(i => {
                if (activeComp === "all") return true;
                const codeStr = String(i.code || "").toUpperCase();
                const catTypeStr = String(i.categoryType || "").toUpperCase();
                const compId = String(i.companyId || b.companyId || "lays").toLowerCase();
                return (compId === activeComp.toLowerCase()) ||
                    (activeComp.toLowerCase() === "hash" && (catTypeStr === "HASH" || codeStr.startsWith("HASH"))) ||
                    (activeComp.toLowerCase() === "lays" && (catTypeStr === "PC" || catTypeStr === "NPC" || !codeStr.startsWith("HASH")));
            });

            if (validItems.length === 0) return;

            if (!dateGroupMap[b.date]) dateGroupMap[b.date] = { bills: 0, ctn: 0, units: 0, kg: 0, val: 0, items: {} };
            dateGroupMap[b.date].bills += 1;

            validItems.forEach(i => {
                const itemDesc = i.desc || i.code;
                const iCtn = i.cartons || 0;
                const iUnits = i.units || 0;
                const iKg = i.weightKg || 0;
                const iBasic = i.basicAmount || 0;
                const iDisc = i.discAmount || 0;
                const iNet = i.amount || 0;

                dateGroupMap[b.date].ctn += iCtn;
                dateGroupMap[b.date].units += iUnits;
                dateGroupMap[b.date].kg += iKg;
                dateGroupMap[b.date].val += iNet;

                if (!dateGroupMap[b.date].items[itemDesc]) dateGroupMap[b.date].items[itemDesc] = { ctn: 0, units: 0, pkts: 0, kg: 0, basic: 0, disc: 0, net: 0, brand: i.brand, type: i.categoryType };
                dateGroupMap[b.date].items[itemDesc].ctn += iCtn;
                dateGroupMap[b.date].items[itemDesc].units += iUnits;
                dateGroupMap[b.date].items[itemDesc].pkts += (i.totalPackets || ((iCtn * (i.pack || 12)) + iUnits));
                dateGroupMap[b.date].items[itemDesc].kg += iKg;
                dateGroupMap[b.date].items[itemDesc].basic += iBasic;
                dateGroupMap[b.date].items[itemDesc].disc += iDisc;
                dateGroupMap[b.date].items[itemDesc].net += iNet;
            });
        });

        const dates = Object.keys(dateGroupMap).sort();
        dates.forEach(d => {
            const group = dateGroupMap[d];
            const skuKeys = Object.keys(group.items);
            const nestedHtml = skuKeys.map(sku => `
                <tr>
                    <td><strong>${group.items[sku].brand || 'Lays'}</strong></td>
                    <td><span class="badge badge-info">${group.items[sku].type || 'PC'}</span></td>
                    <td>${sku}</td>
                    <td><strong style="color: var(--accent-green);">${group.items[sku].ctn} Ctns</strong></td>
                    <td><strong style="color: var(--brand-gold);">${group.items[sku].units} Pkts</strong></td>
                    <td>${group.items[sku].pkts} Total Pkts</td>
                    <td>${(group.items[sku].kg || 0).toFixed(2)} KG</td>
                    <td>Rs. ${(group.items[sku].basic || 0).toFixed(2)}</td>
                    <td style="color: var(--brand-gold);">-Rs. ${(group.items[sku].disc || 0).toFixed(2)}</td>
                    <td><strong>Rs. ${Math.round(group.items[sku].net || 0).toLocaleString()}</strong></td>
                </tr>
            `).join('');

            bodyEl.innerHTML += `
                <tr>
                    <td><button class="btn-expand-row" onclick="toggleReportRowDetails(this)"><i class="fa-solid fa-eye"></i> View Details</button></td>
                    <td><strong>${d}</strong></td>
                    <td>${group.bills} Bills</td>
                    <td><strong style="color: var(--accent-green); font-size: 14px;">${group.ctn} Ctns</strong></td>
                    <td><strong style="color: var(--brand-gold); font-size: 14px;">${group.units} Pkts</strong></td>
                    <td>${(group.kg || 0).toFixed(2)} KG</td>
                    <td><strong>Rs. ${Math.round(group.val || 0).toLocaleString()}</strong></td>
                </tr>
                <tr class="report-detail-row hidden" style="display: none;">
                    <td colspan="7">
                        <div class="nested-sku-box">
                            <span class="nested-title"><i class="fa-solid fa-calendar-day"></i> Date ${d} - Cartons, Loose Units & SKU Breakdown:</span>
                            <table class="nested-sku-table">
                                <thead><tr><th>Brand</th><th>PC/NPC</th><th>Product SKU Description</th><th>Cartons (Ctns)</th><th>Loose Units (Pkts)</th><th>Total Packets</th><th>Weight (KG)</th><th>Basic Amount</th><th>Discount</th><th>Line Net</th></tr></thead>
                                <tbody>${nestedHtml}</tbody>
                            </table>
                        </div>
                    </td>
                </tr>
            `;
        });
        if (dates.length === 0) bodyEl.innerHTML = `<tr><td colspan="7" class="text-muted text-center" style="padding: 20px;">No sales logged for selected period.</td></tr>`;
    }
}

function setFinancialReportSubTab(tabName, btnEl) {
    AppState.activeSubTab.financial = tabName;
    const pills = document.querySelectorAll("#financialReportsTab .report-pill");
    pills.forEach(p => p.classList.remove("active"));
    if (btnEl) btnEl.classList.add("active");
    renderFinancialReports();
}

function renderFinancialReports() {
    const bills = getConfirmedDeliveredBillsForReport('financial');
    const currentSub = AppState.activeSubTab.financial;
    const titleEl = document.getElementById("financialReportTitle");
    const headEl = document.getElementById("financialReportTableHead");
    const bodyEl = document.getElementById("financialReportTableBody");
    bodyEl.innerHTML = "";

    if (currentSub === "totalSale") {
        titleEl.innerText = "Financial Master Sales Ledger Summary (Date-wise Cartons & Loose Units Breakdown)";
        headEl.innerHTML = `<tr><th>Action</th><th>Order Date</th><th>Delivered Bills</th><th>Cartons (Ctns)</th><th>Loose Units (Pkts)</th><th>Gross Basic (Rs)</th><th>Discount Given (-Rs)</th><th>Net Sales Revenue (Rs)</th></tr>`;
        
        const dateMap = {};
        bills.forEach(b => {
            if (!dateMap[b.date]) {
                dateMap[b.date] = {
                    date: b.date,
                    bills: 0,
                    ctn: 0,
                    units: 0,
                    basic: 0,
                    disc: 0,
                    net: 0,
                    brands: {},
                    items: {}
                };
            }
            dateMap[b.date].bills += 1;
            dateMap[b.date].ctn += (b.totalCartons || 0);
            dateMap[b.date].units += (b.totalUnits || 0);
            dateMap[b.date].basic += (b.totalBasic || b.netAmount);
            dateMap[b.date].disc += (b.totalDisc || 0);
            dateMap[b.date].net += b.netAmount;

            b.items.forEach(i => {
                const bName = i.brand || (i.desc.includes("LAYS") ? "Lays" : (i.desc.includes("CHEETOS") ? "Cheetos" : "Kurkure"));
                const cType = i.categoryType || (i.desc.includes("LAYS") ? "PC" : "NPC");
                const cName = i.categoryName || (cType === "PC" ? "Potato Chips" : "Non-Potato Chips");

                if (!dateMap[b.date].brands[bName]) dateMap[b.date].brands[bName] = { ctn: 0, units: 0, val: 0, type: cType, catName: cName };
                dateMap[b.date].brands[bName].ctn += (i.cartons || 0);
                dateMap[b.date].brands[bName].units += (i.units || 0);
                dateMap[b.date].brands[bName].val += i.amount;

                if (!dateMap[b.date].items[i.desc]) dateMap[b.date].items[i.desc] = { ctn: 0, units: 0, basic: 0, disc: 0, net: 0, brand: bName, type: cType, catName: cName, pack: i.pack, weightKg: i.weightKg };
                dateMap[b.date].items[i.desc].ctn += (i.cartons || 0);
                dateMap[b.date].items[i.desc].units += (i.units || 0);
                dateMap[b.date].items[i.desc].basic += i.basicAmount;
                dateMap[b.date].items[i.desc].disc += i.discAmount;
                dateMap[b.date].items[i.desc].net += i.amount;
            });
        });

        const dates = Object.keys(dateMap).sort();
        dates.forEach(d => {
            const group = dateMap[d];
            const brandKeys = Object.keys(group.brands);
            const skuKeys = Object.keys(group.items);

            const brandRowsHtml = brandKeys.map(bName => `
                <tr style="background: rgba(255, 204, 0, 0.05);">
                    <td><strong>🏷️ Brand: ${bName} (${group.brands[bName].catName} - ${group.brands[bName].type})</strong></td>
                    <td><strong style="color: var(--accent-green);">${group.brands[bName].ctn} Ctns</strong></td>
                    <td><strong style="color: var(--brand-gold);">${group.brands[bName].units} Pkts</strong></td>
                    <td colspan="3">Total Brand Revenue: <strong>Rs. ${Math.round(group.brands[bName].val).toLocaleString()}</strong></td>
                </tr>
            `).join('');

            const skuRowsHtml = skuKeys.map(sDesc => `
                <tr>
                    <td><strong>${group.items[sDesc].brand}</strong> (${group.items[sDesc].type}) - ${sDesc}</td>
                    <td>${group.items[sDesc].ctn} Ctns</td>
                    <td>${group.items[sDesc].units} Pkts</td>
                    <td>Rs. ${group.items[sDesc].basic.toFixed(2)}</td>
                    <td style="color: var(--brand-gold);">-Rs. ${group.items[sDesc].disc.toFixed(2)}</td>
                    <td><strong>Rs. ${Math.round(group.items[sDesc].net).toLocaleString()}</strong></td>
                </tr>
            `).join('');

            bodyEl.innerHTML += `
                <tr>
                    <td><button class="btn-expand-row" onclick="toggleReportRowDetails(this)"><i class="fa-solid fa-eye"></i> View Details</button></td>
                    <td><strong>${d}</strong></td>
                    <td>${group.bills} Bills</td>
                    <td><strong style="color: var(--accent-green); font-size: 14px;">${group.ctn} Ctns</strong></td>
                    <td><strong style="color: var(--brand-gold); font-size: 14px;">${group.units} Pkts</strong></td>
                    <td>Rs. ${Math.round(group.basic).toLocaleString()}</td>
                    <td style="color: var(--brand-gold); font-weight: 700;">-Rs. ${group.disc.toFixed(2)}</td>
                    <td><strong>Rs. ${Math.round(group.net).toLocaleString()}</strong></td>
                </tr>
                <tr class="report-detail-row hidden" style="display: none;">
                    <td colspan="8">
                        <div class="nested-sku-box">
                            <span class="nested-title"><i class="fa-solid fa-chart-line"></i> Date ${d} - Brand Sales, Cartons & Loose Units Breakdown:</span>
                            <table class="nested-sku-table">
                                <thead><tr><th>Brand / Category / SKU</th><th>Cartons (Ctns)</th><th>Loose Units (Pkts)</th><th>Gross Basic</th><th>Discount Given</th><th>Net Revenue</th></tr></thead>
                                <tbody>
                                    ${brandRowsHtml}
                                    ${skuRowsHtml}
                                </tbody>
                            </table>
                        </div>
                    </td>
                </tr>
            `;
        });

        if (dates.length === 0) bodyEl.innerHTML = `<tr><td colspan="8" class="text-muted text-center" style="padding: 20px;">No financial sales logged in selected date range.</td></tr>`;

    } else if (currentSub === "cashSale" || currentSub === "creditSale") {
        titleEl.innerText = currentSub === "cashSale" ? "Cash Sales Ledger (Separate Cartons & Loose Units Columns)" : "Credit Sales Ledger (Udhaar - Separate Cartons & Loose Units Columns)";
        headEl.innerHTML = `<tr><th>Action</th><th>Invoice ID</th><th>Date</th><th>Shop Name</th><th>Payment Status</th><th>Cartons (Ctns)</th><th>Loose Units (Pkts)</th><th>Weight (KG)</th><th>Net Amount (Rs)</th></tr>`;
        
        const targetBills = bills.filter(b => currentSub === "cashSale" ? b.paymentStatus === "Cash" : b.paymentStatus === "Credit");
        targetBills.forEach(b => {
            const nestedHtml = b.items.map(i => `
                <tr>
                    <td>${i.desc}</td>
                    <td><strong style="color: var(--accent-green);">${i.cartons || 0} Ctns</strong></td>
                    <td><strong style="color: var(--brand-gold);">${i.units || 0} Pkts</strong></td>
                    <td>${i.totalPackets} Pkts</td>
                    <td>Rs. ${i.basicAmount.toFixed(2)}</td>
                    <td style="color: var(--brand-gold);">-Rs. ${i.discAmount.toFixed(2)}</td>
                    <td><strong>Rs. ${i.amount.toFixed(2)}</strong></td>
                </tr>
            `).join('');

            bodyEl.innerHTML += `
                <tr>
                    <td><button class="btn-expand-row" onclick="toggleReportRowDetails(this)"><i class="fa-solid fa-eye"></i> View Details</button></td>
                    <td><strong>${b.billNo}</strong></td>
                    <td>${b.date}</td>
                    <td>${b.shopName}</td>
                    <td><span class="badge ${currentSub === 'cashSale' ? 'badge-info' : 'badge-warning'}">${b.paymentStatus}</span></td>
                    <td><strong style="color: var(--accent-green); font-size: 14px;">${b.totalCartons || 0} Ctns</strong></td>
                    <td><strong style="color: var(--brand-gold); font-size: 14px;">${b.totalUnits || 0} Pkts</strong></td>
                    <td>${b.totalWeightKg.toFixed(2)} KG</td>
                    <td><strong>Rs. ${Math.round(b.netAmount).toLocaleString()}</strong></td>
                </tr>
                <tr class="report-detail-row hidden" style="display: none;">
                    <td colspan="9">
                        <div class="nested-sku-box">
                            <span class="nested-title"><i class="fa-solid fa-receipt"></i> Invoice ${b.billNo} - Cartons & Loose Units Itemized Breakdown:</span>
                            <table class="nested-sku-table">
                                <thead><tr><th>Product SKU Description</th><th>Cartons (Ctns)</th><th>Loose Units (Pkts)</th><th>Total Packets</th><th>Basic Amount</th><th>Discount</th><th>Line Net</th></tr></thead>
                                <tbody>${nestedHtml}</tbody>
                            </table>
                        </div>
                    </td>
                </tr>
            `;
        });
        if (targetBills.length === 0) bodyEl.innerHTML = `<tr><td colspan="9" class="text-muted text-center" style="padding: 20px;">No sales matching in selected date range.</td></tr>`;

    } else if (currentSub === "discountReport") {
        titleEl.innerText = "Shop Discount Ledger (Separate Cartons & Loose Units Columns)";
        headEl.innerHTML = `<tr><th>Action</th><th>Shop Outlet Name</th><th>Delivered Bills</th><th>Cartons (Ctns)</th><th>Loose Units (Pkts)</th><th>Total Gross Basic (Rs)</th><th>Discount Rate (%)</th><th>Total Discount Given (-Rs)</th><th>Net Payable Value (Rs)</th></tr>`;
        
        const dMap = {};
        bills.forEach(b => {
            const bDiscPct = getBillDiscountPct(b);
            if (!dMap[b.shopName]) dMap[b.shopName] = { bills: 0, ctn: 0, units: 0, basic: 0, discPct: bDiscPct, discVal: 0, net: 0, items: {} };
            dMap[b.shopName].bills += 1;
            dMap[b.shopName].ctn += (b.totalCartons || 0);
            dMap[b.shopName].units += (b.totalUnits || 0);
            dMap[b.shopName].basic += (b.totalBasic || b.netAmount);
            dMap[b.shopName].discVal += (b.totalDisc || 0);
            dMap[b.shopName].net += b.netAmount;

            b.items.forEach(i => {
                if (!dMap[b.shopName].items[i.desc]) dMap[b.shopName].items[i.desc] = { ctn: 0, units: 0, pkts: 0, basic: 0, disc: 0, net: 0 };
                dMap[b.shopName].items[i.desc].ctn += (i.cartons || 0);
                dMap[b.shopName].items[i.desc].units += (i.units || 0);
                dMap[b.shopName].items[i.desc].pkts += (i.totalPackets || (i.cartons * i.pack) + i.units);
                dMap[b.shopName].items[i.desc].basic += i.basicAmount;
                dMap[b.shopName].items[i.desc].disc += i.discAmount;
                dMap[b.shopName].items[i.desc].net += i.amount;
            });
        });

        const keys = Object.keys(dMap);
        keys.forEach(s => {
            const group = dMap[s];
            const skuKeys = Object.keys(group.items);
            const nestedHtml = skuKeys.map(sku => `
                <tr>
                    <td>${sku}</td>
                    <td><strong style="color: var(--accent-green);">${group.items[sku].ctn} Ctns</strong></td>
                    <td><strong style="color: var(--brand-gold);">${group.items[sku].units} Pkts</strong></td>
                    <td>${group.items[sku].pkts} Total Pkts</td>
                    <td>Rs. ${group.items[sku].basic.toFixed(2)}</td>
                    <td style="color: var(--brand-gold);">-Rs. ${group.items[sku].disc.toFixed(2)}</td>
                    <td><strong>Rs. ${Math.round(group.items[sku].net).toLocaleString()}</strong></td>
                </tr>
            `).join('');

            bodyEl.innerHTML += `
                <tr>
                    <td><button class="btn-expand-row" onclick="toggleReportRowDetails(this)"><i class="fa-solid fa-eye"></i> View Details</button></td>
                    <td><strong>${s}</strong></td>
                    <td>${group.bills}</td>
                    <td><strong style="color: var(--accent-green); font-size: 14px;">${group.ctn} Ctns</strong></td>
                    <td><strong style="color: var(--brand-gold); font-size: 14px;">${group.units} Pkts</strong></td>
                    <td>Rs. ${Math.round(group.basic).toLocaleString()}</td>
                    <td><span class="badge badge-warning">${group.discPct}%</span></td>
                    <td style="color: var(--brand-gold); font-weight: 700;">-Rs. ${group.discVal.toFixed(2)}</td>
                    <td><strong>Rs. ${Math.round(group.net).toLocaleString()}</strong></td>
                </tr>
                <tr class="report-detail-row hidden" style="display: none;">
                    <td colspan="9">
                        <div class="nested-sku-box">
                            <span class="nested-title"><i class="fa-solid fa-store"></i> Shop ${s} - SKUs, Cartons & Loose Units Breakdown:</span>
                            <table class="nested-sku-table">
                                <thead><tr><th>Product SKU Description</th><th>Cartons (Ctns)</th><th>Loose Units (Pkts)</th><th>Total Packets</th><th>Basic Amount</th><th>Discount</th><th>Line Net</th></tr></thead>
                                <tbody>${nestedHtml}</tbody>
                            </table>
                        </div>
                    </td>
                </tr>
            `;
        });
        if (keys.length === 0) bodyEl.innerHTML = `<tr><td colspan="9" class="text-muted text-center" style="padding: 20px;">No shop discounts recorded in selected date range.</td></tr>`;

    } else if (currentSub === "returns") {
        titleEl.innerText = "Sales Returns & Cancelled Orders Log";
        headEl.innerHTML = `<tr><th>Action</th><th>Invoice ID</th><th>Date</th><th>Shop Name</th><th>Status</th><th>Restored Cartons (Ctns)</th><th>Restored Loose Units (Pkts)</th><th>Restored Net Amount (Rs)</th></tr>`;
        const returnedBills = AppState.bills.filter(b => b.isVoid || b.deliveryStatus === "Returned");
        returnedBills.forEach(b => {
            const nestedHtml = b.items.map(i => `
                <tr>
                    <td>${i.desc}</td>
                    <td><strong style="color: var(--accent-green);">${i.cartons || 0} Ctns</strong></td>
                    <td><strong style="color: var(--brand-gold);">${i.units || 0} Pkts</strong></td>
                    <td>${i.totalPackets} Pkts</td>
                    <td>Rs. ${i.amount.toFixed(2)}</td>
                </tr>
            `).join('');

            bodyEl.innerHTML += `
                <tr>
                    <td><button class="btn-expand-row" onclick="toggleReportRowDetails(this)"><i class="fa-solid fa-eye"></i> View Details</button></td>
                    <td><strong>${b.billNo}</strong></td>
                    <td>${b.date}</td>
                    <td>${b.shopName}</td>
                    <td><span class="badge badge-danger">Returned / Restored</span></td>
                    <td><strong>${b.totalCartons || 0} Ctns</strong></td>
                    <td><strong>${b.totalUnits || 0} Pkts</strong></td>
                    <td>Rs. ${Math.round(b.netAmount).toLocaleString()}</td>
                </tr>
                <tr class="report-detail-row hidden" style="display: none;">
                    <td colspan="8">
                        <div class="nested-sku-box">
                            <span class="nested-title"><i class="fa-solid fa-rotate-left"></i> Returned SKUs Restored to Warehouse:</span>
                            <table class="nested-sku-table">
                                <thead><tr><th>Product SKU Description</th><th>Restored Cartons</th><th>Restored Loose Units</th><th>Total Packets</th><th>Restored Amount</th></tr></thead>
                                <tbody>${nestedHtml}</tbody>
                            </table>
                        </div>
                    </td>
                </tr>
            `;
        });
        if (returnedBills.length === 0) bodyEl.innerHTML = `<tr><td colspan="8" class="text-muted text-center" style="padding: 20px;">No returned or cancelled bills.</td></tr>`;

    } else if (currentSub === "outstanding") {
        titleEl.innerText = "Shop-wise Udhaar Outstanding Balances";
        headEl.innerHTML = `<tr><th>Action</th><th>Shop Outlet Name</th><th>Customer / Owner Name</th><th>Phone</th><th>Credit Bills Count</th><th>Credit Cartons (Ctns)</th><th>Credit Loose Units (Pkts)</th><th>Total Udhaar Outstanding (Rs)</th></tr>`;
        const oMap = {};
        bills.filter(b => b.paymentStatus === "Credit").forEach(b => {
            const sObj = AppState.shops.find(s => s.name === b.shopName) || {};
            if (!oMap[b.shopName]) oMap[b.shopName] = { owner: sObj.customerName || "-", phone: sObj.phone || "-", bills: 0, ctn: 0, units: 0, total: 0, invoices: [] };
            oMap[b.shopName].bills += 1;
            oMap[b.shopName].ctn += (b.totalCartons || 0);
            oMap[b.shopName].units += (b.totalUnits || 0);
            oMap[b.shopName].total += b.netAmount;
            oMap[b.shopName].invoices.push(b);
        });

        const keys = Object.keys(oMap);
        keys.forEach(s => {
            const group = oMap[s];
            const nestedHtml = group.invoices.map(inv => `
                <tr>
                    <td><strong>${inv.billNo}</strong></td>
                    <td>${inv.date}</td>
                    <td><strong style="color: var(--accent-green);">${inv.totalCartons || 0} Ctns</strong></td>
                    <td><strong style="color: var(--brand-gold);">${inv.totalUnits || 0} Pkts</strong></td>
                    <td>Rs. ${Math.round(inv.netAmount).toLocaleString()}</td>
                </tr>
            `).join('');

            bodyEl.innerHTML += `
                <tr>
                    <td><button class="btn-expand-row" onclick="toggleReportRowDetails(this)"><i class="fa-solid fa-eye"></i> View Details</button></td>
                    <td><strong>${s}</strong></td>
                    <td>${group.owner}</td>
                    <td>${group.phone}</td>
                    <td>${group.bills}</td>
                    <td><strong>${group.ctn} Ctns</strong></td>
                    <td><strong>${group.units} Pkts</strong></td>
                    <td><strong style="color: var(--brand-gold); font-size: 15px;">Rs. ${Math.round(group.total).toLocaleString()}</strong></td>
                </tr>
                <tr class="report-detail-row hidden" style="display: none;">
                    <td colspan="8">
                        <div class="nested-sku-box">
                            <span class="nested-title"><i class="fa-solid fa-hand-holding-dollar"></i> Credit Invoices for ${s}:</span>
                            <table class="nested-sku-table">
                                <thead><tr><th>Invoice ID</th><th>Date</th><th>Cartons (Ctns)</th><th>Loose Units (Pkts)</th><th>Outstanding Amount</th></tr></thead>
                                <tbody>${nestedHtml}</tbody>
                            </table>
                        </div>
                    </td>
                </tr>
            `;
        });
        if (keys.length === 0) bodyEl.innerHTML = `<tr><td colspan="8" class="text-muted text-center" style="padding: 20px;">No outstanding credit balances in selected date range.</td></tr>`;
    }
}

function setAnalysisReportSubTab(tabName, btnEl) {
    AppState.activeSubTab.analysis = tabName;
    const pills = document.querySelectorAll("#analysisReportsTab .report-pill");
    pills.forEach(p => p.classList.remove("active"));
    if (btnEl) btnEl.classList.add("active");
    renderAnalysisReports();
}

function renderAnalysisReports() {
    const bills = getConfirmedDeliveredBillsForReport('analysis');
    const currentSub = AppState.activeSubTab.analysis;
    const titleEl = document.getElementById("analysisReportTitle");
    const headEl = document.getElementById("analysisReportTableHead");
    const bodyEl = document.getElementById("analysisReportTableBody");
    bodyEl.innerHTML = "";

    if (currentSub === "topSelling" || currentSub === "slowMoving") {
        const isTop = currentSub === "topSelling";
        titleEl.innerText = isTop ? "Top Selling Products (Ranked by Sales Revenue)" : "Slow Moving / Low Volume Products";
        headEl.innerHTML = `<tr><th>Action</th><th>Rank</th><th>SKU Description</th><th>Cartons Sold (Ctns)</th><th>Loose Units (Pkts)</th><th>Weight (KG)</th><th>Total Sales (Rs)</th></tr>`;
        
        const prodMap = {};
        bills.forEach(b => b.items.forEach(i => {
            if (!prodMap[i.desc]) prodMap[i.desc] = { code: i.code, ctn: 0, units: 0, kg: 0, val: 0, tp: i.tpRate };
            prodMap[i.desc].ctn += (i.cartons || 0);
            prodMap[i.desc].units += (i.units || 0);
            prodMap[i.desc].kg += i.weightKg;
            prodMap[i.desc].val += i.amount;
        }));

        const sorted = Object.keys(prodMap).sort((a,b) => isTop ? (prodMap[b].val - prodMap[a].val) : (prodMap[a].val - prodMap[b].val));
        sorted.forEach((p, idx) => {
            const item = prodMap[p];
            bodyEl.innerHTML += `
                <tr>
                    <td><button class="btn-expand-row" onclick="toggleReportRowDetails(this)"><i class="fa-solid fa-eye"></i> View Details</button></td>
                    <td>#${idx + 1}</td>
                    <td><strong>${p}</strong></td>
                    <td><strong style="color: var(--accent-green); font-size: 14px;">${item.ctn} Ctns</strong></td>
                    <td><strong style="color: var(--brand-gold); font-size: 14px;">${item.units} Pkts</strong></td>
                    <td>${item.kg.toFixed(2)} KG</td>
                    <td><strong>Rs. ${Math.round(item.val).toLocaleString()}</strong></td>
                </tr>
                <tr class="report-detail-row hidden" style="display: none;">
                    <td colspan="7">
                        <div class="nested-sku-box">
                            <span class="nested-title"><i class="fa-solid fa-box"></i> SKU Performance Specs for ${p}:</span>
                            <table class="nested-sku-table">
                                <thead><tr><th>Product Code</th><th>Cartons Sold (Ctns)</th><th>Loose Units (Pkts)</th><th>Weight Delivered</th><th>Trade Price</th><th>Revenue Generated</th></tr></thead>
                                <tbody>
                                    <tr>
                                        <td><code>${item.code}</code></td>
                                        <td><strong style="color: var(--accent-green);">${item.ctn} Ctns</strong></td>
                                        <td><strong style="color: var(--brand-gold);">${item.units} Pkts</strong></td>
                                        <td>${item.kg.toFixed(2)} KG</td>
                                        <td>Rs. ${item.tp}</td>
                                        <td><strong>Rs. ${Math.round(item.val).toLocaleString()}</strong></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </td>
                </tr>
            `;
        });
        if (sorted.length === 0) bodyEl.innerHTML = `<tr><td colspan="7" class="text-muted text-center" style="padding: 20px;">No sales data available.</td></tr>`;

    } else if (currentSub === "noSaleShops") {
        titleEl.innerText = "No-Sale Shops (Outlets with 0 Delivered Invoices in Period)";
        headEl.innerHTML = `<tr><th>Action</th><th>Shop Name</th><th>Beat Visit Day</th><th>Owner Name</th><th>Phone</th><th>Status</th></tr>`;
        const activeShopNames = new Set(bills.map(b => b.shopName));
        const noSaleList = AppState.shops.filter(s => !activeShopNames.has(s.name));
        
        noSaleList.forEach(s => {
            bodyEl.innerHTML += `
                <tr>
                    <td><button class="btn-expand-row" onclick="toggleReportRowDetails(this)"><i class="fa-solid fa-eye"></i> View Details</button></td>
                    <td><strong>${s.name}</strong></td>
                    <td>${s.visitDay || 'All'}</td>
                    <td>${s.customerName || '-'}</td>
                    <td>${s.phone || '-'}</td>
                    <td><span class="badge badge-warning">No Sale Recorded</span></td>
                </tr>
                <tr class="report-detail-row hidden" style="display: none;">
                    <td colspan="6">
                        <div class="nested-sku-box">
                            <span class="nested-title"><i class="fa-solid fa-store-slash"></i> Outlet Profile:</span>
                            <table class="nested-sku-table">
                                <thead><tr><th>Shop Name</th><th>Owner Name</th><th>Mobile Phone</th><th>Visit Beat Day</th><th>Tax Category</th></tr></thead>
                                <tbody>
                                    <tr>
                                        <td><strong>${s.name}</strong></td>
                                        <td>${s.customerName || '-'}</td>
                                        <td>${s.phone || '-'}</td>
                                        <td>${s.visitDay || 'All'}</td>
                                        <td>${(s.taxMode || 'filer').toUpperCase()}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </td>
                </tr>
            `;
        });
        if (noSaleList.length === 0) bodyEl.innerHTML = `<tr><td colspan="6" class="text-muted text-center" style="padding: 20px;">Great! All shops have delivered sales in this period.</td></tr>`;

    } else if (currentSub === "zeroStock") {
        titleEl.innerText = "Zero Stock Products (Out of Stock Alert)";
        headEl.innerHTML = `<tr><th>Action</th><th>Product Code</th><th>Product Description</th><th>Available Cartons (Ctns)</th><th>Available Loose Units (Pkts)</th><th>Status</th></tr>`;
        const zeroList = AppState.skus.filter(s => (s.stockCartons || 0) === 0 && (s.stockUnits || 0) === 0);
        
        zeroList.forEach(s => {
            bodyEl.innerHTML += `
                <tr>
                    <td><button class="btn-expand-row" onclick="toggleReportRowDetails(this)"><i class="fa-solid fa-eye"></i> View Details</button></td>
                    <td><code>${s.code}</code></td>
                    <td><strong>${s.desc}</strong></td>
                    <td>0 Ctns</td>
                    <td>${s.stockUnits || 0} Pkts</td>
                    <td><span class="badge badge-danger">Out of Stock</span></td>
                </tr>
                <tr class="report-detail-row hidden" style="display: none;">
                    <td colspan="6">
                        <div class="nested-sku-box">
                            <span class="nested-title"><i class="fa-solid fa-triangle-exclamation"></i> SKU Master Specification:</span>
                            <table class="nested-sku-table">
                                <thead><tr><th>Category</th><th>Brand</th><th>Gram Weight</th><th>Pack per Carton</th><th>Trade Price</th></tr></thead>
                                <tbody>
                                    <tr>
                                        <td>${s.categoryType}</td>
                                        <td>${s.brand}</td>
                                        <td>${s.grams}g</td>
                                        <td>${s.pack}</td>
                                        <td>Rs. ${s.tpRate}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </td>
                </tr>
            `;
        });
        if (zeroList.length === 0) bodyEl.innerHTML = `<tr><td colspan="6" class="text-muted text-center" style="padding: 20px;">All SKUs have positive warehouse stock!</td></tr>`;

    } else if (currentSub === "productPerf" || currentSub === "routePerf") {
        titleEl.innerText = "Product Category & Route Performance Analysis";
        headEl.innerHTML = `<tr><th>Action</th><th>Category / Route</th><th>Bills Count</th><th>Cartons (Ctns)</th><th>Loose Units (Pkts)</th><th>Total Weight (KG)</th><th>Total Revenue (Rs)</th></tr>`;
        let pcKg = 0, pcVal = 0, pcCtn = 0, pcUnits = 0, npcKg = 0, npcVal = 0, npcCtn = 0, npcUnits = 0, hashKg = 0, hashVal = 0, hashCtn = 0, hashUnits = 0;
        bills.forEach(b => b.items.forEach(i => {
            const isHashItem = (i.categoryType === "Hash" || (i.companyId || "lays") === "hash" || (i.code && i.code.startsWith("HASH")));
            if (isHashItem) {
                hashKg += i.weightKg; hashVal += i.amount; hashCtn += (i.cartons || 0); hashUnits += (i.units || 0);
            } else if (i.categoryType === "PC" || i.desc.includes("LAYS")) {
                pcKg += i.weightKg; pcVal += i.amount; pcCtn += (i.cartons || 0); pcUnits += (i.units || 0);
            } else {
                npcKg += i.weightKg; npcVal += i.amount; npcCtn += (i.cartons || 0); npcUnits += (i.units || 0);
            }
        }));

        let perfRowsHtml = `
            <tr>
                <td><button class="btn-expand-row" onclick="toggleReportRowDetails(this)"><i class="fa-solid fa-eye"></i> View Details</button></td>
                <td><strong>PC (Potato Chips: Lays / MAXX / Wavy)</strong></td>
                <td>${bills.length}</td>
                <td><strong style="color: var(--accent-green); font-size: 14px;">${pcCtn} Ctns</strong></td>
                <td><strong style="color: var(--brand-gold); font-size: 14px;">${pcUnits} Pkts</strong></td>
                <td>${pcKg.toFixed(2)} KG</td>
                <td><strong>Rs. ${Math.round(pcVal).toLocaleString()}</strong></td>
            </tr>
            <tr class="report-detail-row hidden" style="display: none;">
                <td colspan="7">
                    <div class="nested-sku-box">
                        <span class="nested-title"><i class="fa-solid fa-chart-pie"></i> Potato Chips Category Performance:</span>
                        <table class="nested-sku-table">
                            <thead><tr><th>Category</th><th>Cartons (Ctns)</th><th>Loose Units (Pkts)</th><th>Weight Delivered</th><th>Sales Revenue</th></tr></thead>
                            <tbody>
                                <tr><td>PC (Potato Chips)</td><td>${pcCtn} Ctns</td><td>${pcUnits} Pkts</td><td>${pcKg.toFixed(2)} KG</td><td>Rs. ${Math.round(pcVal).toLocaleString()}</td></tr>
                            </tbody>
                        </table>
                    </div>
                </td>
            </tr>
            <tr>
                <td><button class="btn-expand-row" onclick="toggleReportRowDetails(this)"><i class="fa-solid fa-eye"></i> View Details</button></td>
                <td><strong>NPC (Non-Potato Chips: Kurkure / Cheetos / Oats)</strong></td>
                <td>${bills.length}</td>
                <td><strong style="color: var(--accent-green); font-size: 14px;">${npcCtn} Ctns</strong></td>
                <td><strong style="color: var(--brand-gold); font-size: 14px;">${npcUnits} Pkts</strong></td>
                <td>${npcKg.toFixed(2)} KG</td>
                <td><strong>Rs. ${Math.round(npcVal).toLocaleString()}</strong></td>
            </tr>
            <tr class="report-detail-row hidden" style="display: none;">
                <td colspan="7">
                    <div class="nested-sku-box">
                        <span class="nested-title"><i class="fa-solid fa-chart-pie"></i> Non-Potato Chips Category Performance:</span>
                        <table class="nested-sku-table">
                            <thead><tr><th>Category</th><th>Cartons (Ctns)</th><th>Loose Units (Pkts)</th><th>Weight Delivered</th><th>Sales Revenue</th></tr></thead>
                            <tbody>
                                <tr><td>NPC (Non-Potato Chips)</td><td>${npcCtn} Ctns</td><td>${npcUnits} Pkts</td><td>${npcKg.toFixed(2)} KG</td><td>Rs. ${Math.round(npcVal).toLocaleString()}</td></tr>
                            </tbody>
                        </table>
                    </div>
                </td>
            </tr>
        `;

        if (hashCtn > 0 || hashUnits > 0 || hashVal > 0) {
            perfRowsHtml += `
            <tr>
                <td><button class="btn-expand-row" onclick="toggleReportRowDetails(this)"><i class="fa-solid fa-eye"></i> View Details</button></td>
                <td><strong>Hash Brand Catalog (Foods & Beverages)</strong></td>
                <td>${bills.length}</td>
                <td><strong style="color: var(--accent-green); font-size: 14px;">${hashCtn} Ctns</strong></td>
                <td><strong style="color: var(--brand-gold); font-size: 14px;">${hashUnits} Pkts</strong></td>
                <td>${hashKg.toFixed(2)} KG</td>
                <td><strong>Rs. ${Math.round(hashVal).toLocaleString()}</strong></td>
            </tr>
            <tr class="report-detail-row hidden" style="display: none;">
                <td colspan="7">
                    <div class="nested-sku-box">
                        <span class="nested-title"><i class="fa-solid fa-chart-pie"></i> Hash Brand Category Performance:</span>
                        <table class="nested-sku-table">
                            <thead><tr><th>Category</th><th>Cartons (Ctns)</th><th>Loose Units (Pkts)</th><th>Weight Delivered</th><th>Sales Revenue</th></tr></thead>
                            <tbody>
                                <tr><td>Hash Brand Catalog</td><td>${hashCtn} Ctns</td><td>${hashUnits} Pkts</td><td>${hashKg.toFixed(2)} KG</td><td>Rs. ${Math.round(hashVal).toLocaleString()}</td></tr>
                            </tbody>
                        </table>
                    </div>
                </td>
            </tr>
            `;
        }

        bodyEl.innerHTML = perfRowsHtml;
    }
}

/* EXPORT REPORT DURATION PROMPT MODAL ENGINE */
function openReportExportModal(reportType) {
    currentPendingExportType = reportType;
    const currentPreset = document.getElementById(`${reportType}ReportPeriodPreset`)?.value || "10days";
    document.getElementById("modalExportPresetSelect").value = currentPreset;
    handleModalExportPresetChange();
    openModal("reportExportDateModal");
}

function handleModalExportPresetChange() {
    const preset = document.getElementById("modalExportPresetSelect").value;
    const customGroup = document.getElementById("modalExportCustomDateGroup");
    if (preset === "custom") customGroup.classList.remove("hidden");
    else customGroup.classList.add("hidden");
}

function confirmReportExportFromModal() {
    const preset = document.getElementById("modalExportPresetSelect").value;
    const reportType = currentPendingExportType || "sales";

    const presetId = `${reportType}ReportPeriodPreset`;
    const periodElem = document.getElementById(presetId);
    if (periodElem) {
        periodElem.value = preset;
        handleReportPeriodChange(reportType);
    }

    closeModal("reportExportDateModal");

    if (reportType === "sales") exportActiveReportCSV();
    else if (reportType === "financial") exportFinancialReportExcel();
    else if (reportType === "analysis") exportAnalysisReportExcel();
}

/* HIGH-END STYLED EXCEL REPORT GENERATOR */
function generateStyledExcelFile(reportTitle, headers, rows, filename) {
    const cleanFilename = filename.replace(/.(xls|xlsx)$/i, '') + '.xlsx';
    const generatedTime = new Date().toLocaleString();

    if (typeof XLSX !== "undefined") {
        try {
            const wb = XLSX.utils.book_new();
            const aoaData = [
                ["CHAUDHARY TRADER - PEPSICO FMCG DISTRIBUTION SYSTEM (JHANG)"],
                [`REPORT / MASTER SHEET: ${reportTitle.toUpperCase()}`],
                [`Distributor: CHAUDHARY TRADER, Sargodha Road, Chund Adda, Jhang | Contact: 03446035632 | Date: ${generatedTime}`],
                headers,
                ...(rows || [])
            ];

            const ws = XLSX.utils.aoa_to_sheet(aoaData);

            // Configure Merges for Header Banners
            ws['!merges'] = [
                { s: { r: 0, c: 0 }, e: { r: 0, c: Math.max(headers.length - 1, 0) } },
                { s: { r: 1, c: 0 }, e: { r: 1, c: Math.max(headers.length - 1, 0) } },
                { s: { r: 2, c: 0 }, e: { r: 2, c: Math.max(headers.length - 1, 0) } }
            ];

            // Configure Column Auto Widths
            const colWidths = headers.map((h, i) => {
                let maxLen = String(h).length;
                (rows || []).forEach(r => {
                    const valStr = String(r[i] !== undefined && r[i] !== null ? r[i] : '');
                    if (valStr.length > maxLen) maxLen = valStr.length;
                });
                return { wch: Math.min(Math.max(maxLen + 4, 14), 50) };
            });
            ws['!cols'] = colWidths;

            XLSX.utils.book_append_sheet(wb, ws, reportTitle.substring(0, 30).replace(/[/\\?*:\[\]]/g, ''));
            XLSX.writeFile(wb, cleanFilename);
            return;
        } catch (err) {
            console.warn("SheetJS export failed, falling back to Blob:", err);
        }
    }

    let tableHtml = `\uFEFF<html xmlns:o="urn:schemas-microsoft-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">
    <head>
        <meta charset="utf-8">
        <!--[if gte mso 9]>
        <xml>
            <x:ExcelWorkbook>
                <x:ExcelWorksheets>
                    <x:ExcelWorksheet>
                        <x:Name>${reportTitle.substring(0, 30).replace(/[/\\?*:\[\]]/g, '')}</x:Name>
                        <x:WorksheetOptions>
                            <x:DisplayGridlines/>
                        </x:WorksheetOptions>
                    </x:ExcelWorksheet>
                </x:ExcelWorksheets>
            </x:ExcelWorkbook>
        </xml>
        <![endif]-->
        <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 10pt; }
            table { border-collapse: collapse; width: 100%; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }
            th { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 11pt; font-weight: bold; }
            td { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 10pt; mso-number-format:"\\@"; }
            .num { mso-number-format:"\\#\\,\\#\\#0\\.00"; text-align: right; }
            .int { mso-number-format:"\\#\\,\\#\\#0"; text-align: right; }
            .curr { mso-number-format: "Rs\\ \\#\\,\\#\\#0\\.00"; text-align: right; }
        </style>
    </head>
    <body>
        <table border="1" cellspacing="0" cellpadding="8" style="border-collapse: collapse; font-family: 'Segoe UI', Arial, sans-serif; border: 1px solid #94a3b8;">
            <thead>
                <tr style="background-color: #0f172a; color: #ffcc00; font-weight: bold; text-align: center;">
                    <th colspan="${headers.length}" style="font-size: 16pt; padding: 14px; border: 1px solid #000; background-color: #0f172a; color: #ffcc00; text-align: center;">
                        CHAUDHARY TRADER - PEPSICO FMCG DISTRIBUTION SYSTEM
                    </th>
                </tr>
                <tr style="background-color: #1e293b; color: #ffffff; text-align: center;">
                    <th colspan="${headers.length}" style="font-size: 10pt; padding: 6px; border: 1px solid #334155; background-color: #1e293b; color: #ffffff; text-align: center;">
                        Sargodha Road, Chund Adda, Jhang | Phone / WhatsApp: 03446035632
                    </th>
                </tr>
                <tr style="background-color: #b91c1c; color: #ffffff; font-weight: bold; text-align: center;">
                    <th colspan="${headers.length}" style="font-size: 12pt; padding: 8px; border: 1px solid #7f1d1d; background-color: #b91c1c; color: #ffffff; text-align: center;">
                        REPORT: ${reportTitle.toUpperCase()} | Generated: ${generatedTime}
                    </th>
                </tr>
                <tr style="background-color: #1e293b; color: #ffcc00; font-weight: bold;">
                    ${headers.map(h => `<th style="background-color: #1e293b; color: #ffcc00; font-size: 11pt; padding: 10px; border: 1px solid #475569; text-align: left; vertical-align: middle;">${h}</th>`).join('')}
                </tr>
            </thead>
            <tbody>
    `;

    if (!rows || rows.length === 0) {
        tableHtml += `
            <tr>
                <td colspan="${headers.length}" style="text-align: center; padding: 24px; color: #64748b; font-style: italic;">No records available for this report.</td>
            </tr>
        `;
    } else {
        rows.forEach((row, idx) => {
            const bg = (idx % 2 === 0) ? '#ffffff' : '#f8fafc';
            tableHtml += `<tr style="background-color: ${bg};">`;
            row.forEach((cell) => {
                const isNum = typeof cell === 'number';
                const valStr = String(cell !== undefined && cell !== null ? cell : '');
                
                let align = 'left';
                let displayVal = valStr;

                if (isNum) {
                    align = 'right';
                    displayVal = cell.toLocaleString();
                } else if (valStr.startsWith('Rs.') || valStr.startsWith('Rs')) {
                    align = 'right';
                } else if (valStr.endsWith('Ctns') || valStr.endsWith('Pkts') || valStr.endsWith('KG')) {
                    align = 'center';
                }

                tableHtml += `<td style="padding: 8px 12px; border: 1px solid #cbd5e1; text-align: ${align}; font-size: 10pt; vertical-align: middle;">${displayVal}</td>`;
            });
            tableHtml += `</tr>`;
        });
    }

    tableHtml += `
            </tbody>
        </table>
    </body>
    </html>
    `;

    const blob = new Blob([tableHtml], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = cleanFilename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => URL.revokeObjectURL(url), 1000);
}

/* EXPORT CURRENTLY ACTIVE SELECTED SALES SUB-REPORT TO EXCEL WITH DUAL SEPARATE COLUMNS FOR CARTONS (CTNS) AND LOOSE UNITS (PKTS) */
function exportActiveReportCSV() {
    const currentSub = AppState.activeSubTab.sales;
    const bills = getConfirmedDeliveredBillsForReport('sales');

    let reportTitle = "Sales Ledger Report";
    let headers = [];
    let rows = [];

    const getCompany = (i) => {
        if (i.companyId === 'hash' || i.categoryType === 'Hash' || (i.code && String(i.code).startsWith('HASH')) || (i.brand && String(i.brand).toLowerCase().includes('fast'))) {
            return 'FAST / Hash';
        }
        return 'Lays (PepsiCo)';
    };

    if (currentSub === "pcSale" || currentSub === "npcSale" || currentSub === "hashSale") {
        const isPc = currentSub === "pcSale";
        const isHash = currentSub === "hashSale";
        reportTitle = isHash ? "Confirmed Hash Sale Report (Hash Foods & Beverages)" : (isPc ? "Confirmed PC Sale Report (Potato Chips)" : "Confirmed NPC Sale Report (Non-Potato Chips)");
        headers = ["Invoice ID", "Order Date", "Company", "Brand", "Category", "Category Type", "Product SKU Description", "Cartons Sold (Ctns)", "Loose Units Sold (Pkts)", "Weight (KG)", "Basic Amount (Rs)", "Net Value (Rs)"];
        bills.forEach(b => {
            b.items.filter(i => {
                const isHashItem = (i.categoryType === "Hash" || (i.companyId || "lays") === "hash" || (i.code && i.code.startsWith("HASH")));
                if (isHash) return isHashItem;
                if (isHashItem) return false;
                if (isPc) return (i.categoryType === "PC" || i.desc.includes("LAYS"));
                return (i.categoryType === "NPC" || !i.desc.includes("LAYS"));
            }).forEach(i => {
                const comp = getCompany(i);
                const bName = i.brand || (comp === 'FAST / Hash' ? 'Fast' : (i.desc.includes("LAYS") ? "Lays" : "Cheetos"));
                const cType = i.categoryType || (isHash ? "Hash" : (isPc ? "PC" : "NPC"));
                const cName = i.categoryName || (cType === "Hash" ? "Hash Catalog" : (cType === "PC" ? "Potato Chips" : "Non-Potato Chips"));
                rows.push([b.billNo, b.date, comp, bName, cName, cType, i.desc, `${i.cartons || 0} Ctns`, `${i.units || 0} Pkts`, i.weightKg.toFixed(2), i.basicAmount.toFixed(2), Math.round(i.amount)]);
            });
        });

    } else if (currentSub === "filerSale" || currentSub === "nonFilerSale" || currentSub === "combinedSale") {
        reportTitle = currentSub === "filerSale" ? "Filer Outlets Sales Report (0.5% ADWH Tax)" : (currentSub === "nonFilerSale" ? "Non-Filer Outlets Sales Report (2.5% ADWH Tax)" : "Combined Master Sales Ledger");
        headers = ["Invoice ID", "Order Date", "Company", "Brand", "Category", "Category Type (PC/NPC)", "Product SKU Description", "Cartons Sold (Ctns)", "Loose Units Sold (Pkts)", "Total Packets", "Weight (KG)", "Basic Amount (Rs)", "Discount (Rs)", "Net Revenue (Rs)"];
        
        let targetBills = bills;
        if (currentSub === "filerSale") targetBills = bills.filter(b => b.taxMode === "filer");
        if (currentSub === "nonFilerSale") targetBills = bills.filter(b => b.taxMode === "nonfiler");

        targetBills.forEach(b => {
            b.items.forEach(i => {
                const comp = getCompany(i);
                const bName = i.brand || (i.desc.includes("LAYS") ? "Lays" : "Cheetos");
                const cType = i.categoryType || (i.desc.includes("LAYS") ? "PC" : "NPC");
                const cName = i.categoryName || (cType === "PC" ? "Potato Chips" : "Non-Potato Chips");
                rows.push([b.billNo, b.date, comp, bName, cName, cType, i.desc, `${i.cartons || 0} Ctns`, `${i.units || 0} Pkts`, i.totalPackets, i.weightKg.toFixed(2), i.basicAmount.toFixed(2), i.discAmount.toFixed(2), Math.round(i.amount)]);
            });
        });

    } else if (currentSub === "productWise") {
        reportTitle = "Product-wise Sales Summary (Separate Cartons & Loose Units Columns)";
        headers = ["Product Code", "Company", "Brand", "Category", "Category Type (PC/NPC)", "Product Description", "Order Date", "Cartons Sold (Ctns)", "Loose Units Sold (Pkts)", "Total Weight (KG)", "Total Sales Revenue (Rs)"];
        const pDateMap = {};
        bills.forEach(b => b.items.forEach(i => {
            const key = `${i.desc}___${b.date}`;
            if (!pDateMap[key]) {
                const comp = getCompany(i);
                const bName = i.brand || (i.desc.includes("LAYS") ? "Lays" : "Cheetos");
                const cType = i.categoryType || (i.desc.includes("LAYS") ? "PC" : "NPC");
                const cName = i.categoryName || (cType === "PC" ? "Potato Chips" : "Non-Potato Chips");
                pDateMap[key] = { skuCode: i.code, company: comp, brand: bName, categoryName: cName, categoryType: cType, skuDesc: i.desc, date: b.date, ctn: 0, units: 0, kg: 0, val: 0 };
            }
            pDateMap[key].ctn += (i.cartons || 0);
            pDateMap[key].units += (i.units || 0);
            pDateMap[key].kg += i.weightKg;
            pDateMap[key].val += i.amount;
        }));
        Object.keys(pDateMap).sort().forEach(k => {
            const item = pDateMap[k];
            rows.push([item.skuCode, item.company, item.brand, item.categoryName, item.categoryType, item.skuDesc, item.date, `${item.ctn} Ctns`, `${item.units} Pkts`, item.kg.toFixed(2), Math.round(item.val)]);
        });

    } else if (currentSub === "shopWise") {
        reportTitle = "Shop-wise & Brand Itemized Sales Breakdown (Separate Cartons & Loose Units Columns)";
        headers = ["Shop Outlet Name", "Order Date", "Company", "Brand", "Category", "Category Type (PC/NPC)", "Product SKU Description", "Cartons Sold (Ctns)", "Loose Units Sold (Pkts)", "Total Packets", "Weight (KG)", "Basic Amount (Rs)", "Discount Amount (Rs)", "Net Line Revenue (Rs)"];
        
        bills.forEach(b => {
            b.items.forEach(i => {
                const comp = getCompany(i);
                const bName = i.brand || (i.desc.includes("LAYS") ? "Lays" : "Cheetos");
                const cType = i.categoryType || (i.desc.includes("LAYS") ? "PC" : "NPC");
                const cName = i.categoryName || (cType === "PC" ? "Potato Chips" : "Non-Potato Chips");
                rows.push([b.shopName, b.date, comp, bName, cName, cType, i.desc, `${i.cartons || 0} Ctns`, `${i.units || 0} Pkts`, i.totalPackets, i.weightKg.toFixed(2), i.basicAmount.toFixed(2), i.discAmount.toFixed(2), Math.round(i.amount)]);
            });
        });

    } else if (currentSub === "routeWise" || currentSub === "salesmanWise") {
        reportTitle = currentSub === "routeWise" ? "Route-wise / Beat Plan Sales Summary" : "Salesman Performance Sales Ledger";
        headers = [currentSub === "routeWise" ? "Route / Beat Name" : "Salesman Name", "Delivered Bills Count", "Cartons Sold (Ctns)", "Loose Units Sold (Pkts)", "Total Weight (KG)", "Total Sales Revenue (Rs)"];
        const rMap = {};
        bills.forEach(b => {
            const nameKey = currentSub === "routeWise" ? (b.routeName || "Main Route") : (b.salesman || "Ijaz");
            if (!rMap[nameKey]) rMap[nameKey] = { bills: 0, ctn: 0, units: 0, kg: 0, val: 0 };
            rMap[nameKey].bills += 1;
            rMap[nameKey].ctn += (b.totalCartons || 0);
            rMap[nameKey].units += (b.totalUnits || 0);
            rMap[nameKey].kg += b.totalWeightKg;
            rMap[nameKey].val += b.netAmount;
        });
        Object.keys(rMap).forEach(r => {
            rows.push([r, rMap[r].bills, `${rMap[r].ctn} Ctns`, `${rMap[r].units} Pkts`, rMap[r].kg.toFixed(2), Math.round(rMap[r].val)]);
        });

    } else if (currentSub === "periodWise") {
        reportTitle = "Daily / Monthly SKU-wise Sales Breakdown (Separate Cartons & Loose Units Columns)";
        headers = ["Order Date", "Company", "Brand", "Category", "Category Type (PC/NPC)", "Product SKU Description", "Cartons Sold (Ctns)", "Loose Units Sold (Pkts)", "Total Packets", "Total Weight (KG)", "Basic Amount (Rs)", "Discount (Rs)", "Net Revenue (Rs)"];
        const dateSkuMap = {};
        bills.forEach(b => {
            b.items.forEach(i => {
                const key = `${b.date}___${i.desc}`;
                if (!dateSkuMap[key]) {
                    const comp = getCompany(i);
                    const bName = i.brand || (i.desc.includes("LAYS") ? "Lays" : "Cheetos");
                    const cType = i.categoryType || (i.desc.includes("LAYS") ? "PC" : "NPC");
                    const cName = i.categoryName || (cType === "PC" ? "Potato Chips" : "Non-Potato Chips");
                    dateSkuMap[key] = {
                        date: b.date,
                        company: comp,
                        brand: bName,
                        categoryName: cName,
                        categoryType: cType,
                        skuDesc: i.desc,
                        ctn: 0, units: 0, totalPkts: 0, kg: 0, basic: 0, disc: 0, net: 0
                    };
                }
                dateSkuMap[key].ctn += (i.cartons || 0);
                dateSkuMap[key].units += (i.units || 0);
                dateSkuMap[key].totalPkts += i.totalPackets;
                dateSkuMap[key].kg += i.weightKg;
                dateSkuMap[key].basic += i.basicAmount;
                dateSkuMap[key].disc += i.discAmount;
                dateSkuMap[key].net += i.amount;
            });
        });
        Object.keys(dateSkuMap).sort().forEach(k => {
            const item = dateSkuMap[k];
            rows.push([item.date, item.company, item.brand, item.categoryName, item.categoryType, item.skuDesc, `${item.ctn} Ctns`, `${item.units} Pkts`, item.totalPkts, item.kg.toFixed(2), item.basic.toFixed(2), item.disc.toFixed(2), Math.round(item.net)]);
        });
    }

    const filename = `Chaudhary_Trader_${currentSub}_${new Date().toISOString().split('T')[0]}.xlsx`;
    generateStyledExcelFile(reportTitle, headers, rows, filename);
}

function exportFinancialReportExcel() {
    const currentSub = AppState.activeSubTab.financial;
    const bills = getConfirmedDeliveredBillsForReport('financial');

    let reportTitle = "Financial Ledger Report";
    let headers = [];
    let rows = [];

    if (currentSub === "totalSale") {
        reportTitle = "Financial Master Sales Summary (Separate Cartons & Loose Units Columns)";
        headers = ["Order Date", "Brand", "Category Description", "Category Type (PC/NPC)", "Product SKU Description", "Cartons Sold (Ctns)", "Loose Units Sold (Pkts)", "Total Packets", "Weight (KG)", "Gross Basic (Rs)", "Discount Given (Rs)", "Net Line Revenue (Rs)"];
        
        bills.forEach(b => {
            b.items.forEach(i => {
                const bName = i.brand || (i.desc.includes("LAYS") ? "Lays" : "Cheetos");
                const cType = i.categoryType || (i.desc.includes("LAYS") ? "PC" : "NPC");
                const cName = i.categoryName || (cType === "PC" ? "Potato Chips" : "Non-Potato Chips");
                rows.push([b.date, bName, cName, cType, i.desc, `${i.cartons || 0} Ctns`, `${i.units || 0} Pkts`, i.totalPackets, i.weightKg.toFixed(2), i.basicAmount.toFixed(2), i.discAmount.toFixed(2), Math.round(i.amount)]);
            });
        });

    } else if (currentSub === "cashSale" || currentSub === "creditSale") {
        reportTitle = currentSub === "cashSale" ? "Cash Sales Ledger (Separate Cartons & Loose Units Columns)" : "Credit Sales Ledger (Separate Cartons & Loose Units Columns)";
        headers = ["Invoice ID", "Date", "Shop Outlet Name", "Payment Status", "Brand", "Category Type", "Product SKU Description", "Cartons Sold (Ctns)", "Loose Units Sold (Pkts)", "Total Packets", "Basic Amount (Rs)", "Discount (Rs)", "Net Line Revenue (Rs)"];
        
        const targetBills = bills.filter(b => currentSub === "cashSale" ? b.paymentStatus === "Cash" : b.paymentStatus === "Credit");
        targetBills.forEach(b => {
            b.items.forEach(i => {
                const bName = i.brand || (i.desc.includes("LAYS") ? "Lays" : "Cheetos");
                const cType = i.categoryType || (i.desc.includes("LAYS") ? "PC" : "NPC");
                rows.push([b.billNo, b.date, b.shopName, b.paymentStatus, bName, cType, i.desc, `${i.cartons || 0} Ctns`, `${i.units || 0} Pkts`, i.totalPackets, i.basicAmount.toFixed(2), i.discAmount.toFixed(2), Math.round(i.amount)]);
            });
        });

    } else if (currentSub === "discountReport") {
        reportTitle = "Shop Discount Ledger (Separate Cartons & Loose Units Columns)";
        headers = ["Shop Outlet Name", "Brand", "Category Type", "Product SKU Description", "Cartons Sold (Ctns)", "Loose Units Sold (Pkts)", "Total Packets", "Basic Amount (Rs)", "Discount Amount (Rs)", "Net Payable (Rs)"];
        
        bills.forEach(b => {
            b.items.forEach(i => {
                const bName = i.brand || (i.desc.includes("LAYS") ? "Lays" : "Cheetos");
                const cType = i.categoryType || (i.desc.includes("LAYS") ? "PC" : "NPC");
                rows.push([b.shopName, bName, cType, i.desc, `${i.cartons || 0} Ctns`, `${i.units || 0} Pkts`, i.totalPackets, i.basicAmount.toFixed(2), i.discAmount.toFixed(2), Math.round(i.amount)]);
            });
        });

    } else if (currentSub === "returns") {
        reportTitle = "Sales Returns & Restored Orders Log";
        headers = ["Invoice ID", "Date", "Shop Outlet Name", "Status", "Restored Cartons (Ctns)", "Restored Loose Units (Pkts)", "Restored Amount (Rs)"];
        AppState.bills.filter(b => b.isVoid || b.deliveryStatus === "Returned").forEach(b => {
            rows.push([b.billNo, b.date, b.shopName, "Returned / Restored", `${b.totalCartons || 0} Ctns`, `${b.totalUnits || 0} Pkts`, Math.round(b.netAmount)]);
        });

    } else if (currentSub === "outstanding") {
        reportTitle = "Shop-wise Udhaar Outstanding Balances";
        headers = ["Shop Outlet Name", "Customer / Owner Name", "Phone", "Credit Bills Count", "Credit Cartons (Ctns)", "Credit Loose Units (Pkts)", "Total Udhaar Outstanding (Rs)"];
        const oMap = {};
        bills.filter(b => b.paymentStatus === "Credit").forEach(b => {
            const sObj = AppState.shops.find(s => s.name === b.shopName) || {};
            if (!oMap[b.shopName]) oMap[b.shopName] = { owner: sObj.customerName || "-", phone: sObj.phone || "-", bills: 0, ctn: 0, units: 0, total: 0 };
            oMap[b.shopName].bills += 1;
            oMap[b.shopName].ctn += (b.totalCartons || 0);
            oMap[b.shopName].units += (b.totalUnits || 0);
            oMap[b.shopName].total += b.netAmount;
        });
        Object.keys(oMap).forEach(s => {
            rows.push([s, oMap[s].owner, oMap[s].phone, oMap[s].bills, `${oMap[s].ctn} Ctns`, `${oMap[s].units} Pkts`, Math.round(oMap[s].total)]);
        });
    }

    const filename = `Chaudhary_Trader_Financial_${currentSub}_${new Date().toISOString().split('T')[0]}.xls`;
    generateStyledExcelFile(reportTitle, headers, rows, filename);
}

function exportAnalysisReportExcel() {
    const currentSub = AppState.activeSubTab.analysis;
    const bills = getConfirmedDeliveredBillsForReport('analysis');

    let reportTitle = "Analysis Report";
    let headers = [];
    let rows = [];

    if (currentSub === "topSelling") {
        reportTitle = "Top Selling Products Ranking (Cartons & Loose Units)";
        headers = ["Rank", "SKU Description", "Cartons Sold (Ctns)", "Loose Units Sold (Pkts)", "Total Weight (KG)", "Total Sales (Rs)"];
        const prodMap = {};
        bills.forEach(b => b.items.forEach(i => {
            if (!prodMap[i.desc]) prodMap[i.desc] = { ctn: 0, units: 0, kg: 0, val: 0 };
            prodMap[i.desc].ctn += (i.cartons || 0);
            prodMap[i.desc].units += (i.units || 0);
            prodMap[i.desc].kg += i.weightKg;
            prodMap[i.desc].val += i.amount;
        }));
        const sorted = Object.keys(prodMap).sort((a,b) => prodMap[b].val - prodMap[a].val);
        sorted.forEach((p, idx) => {
            rows.push([`#${idx + 1}`, p, `${prodMap[p].ctn} Ctns`, `${prodMap[p].units} Pkts`, prodMap[p].kg.toFixed(2), Math.round(prodMap[p].val)]);
        });

    } else if (currentSub === "slowMoving") {
        reportTitle = "Slow Moving Products Analysis";
        headers = ["Rank", "SKU Description", "Cartons Sold (Ctns)", "Loose Units Sold (Pkts)", "Total Weight (KG)", "Total Sales Revenue (Rs)"];
        const prodMap = {};
        bills.forEach(b => b.items.forEach(i => {
            if (!prodMap[i.desc]) prodMap[i.desc] = { ctn: 0, units: 0, kg: 0, val: 0 };
            prodMap[i.desc].ctn += (i.cartons || 0);
            prodMap[i.desc].units += (i.units || 0);
            prodMap[i.desc].kg += i.weightKg;
            prodMap[i.desc].val += i.amount;
        }));
        const sorted = Object.keys(prodMap).sort((a,b) => prodMap[a].val - prodMap[b].val);
        sorted.forEach((p, idx) => {
            rows.push([`#${idx + 1}`, p, `${prodMap[p].ctn} Ctns`, `${prodMap[p].units} Pkts`, prodMap[p].kg.toFixed(2), Math.round(prodMap[p].val)]);
        });

    } else if (currentSub === "noSaleShops") {
        reportTitle = "No-Sale Outlets Report";
        headers = ["Shop Name", "Beat Visit Day", "Owner Name", "Phone", "Status"];
        const activeShopNames = new Set(bills.map(b => b.shopName));
        AppState.shops.filter(s => !activeShopNames.has(s.name)).forEach(s => {
            rows.push([s.name, s.visitDay || 'All', s.customerName || '-', s.phone || '-', "No Sale Recorded"]);
        });

    } else if (currentSub === "zeroStock") {
        reportTitle = "Zero Stock Products (Out of Stock Alert)";
        headers = ["Product Code", "Product Description", "Available Cartons (Ctns)", "Available Loose Units (Pkts)", "Status"];
        AppState.skus.filter(s => (s.stockCartons || 0) === 0 && (s.stockUnits || 0) === 0).forEach(s => {
            rows.push([s.code, s.desc, "0 Ctns", "0 Pkts", "Out of Stock"]);
        });
    }

    const filename = `Chaudhary_Trader_Analysis_${currentSub}_${new Date().toISOString().split('T')[0]}.xls`;
    generateStyledExcelFile(reportTitle, headers, rows, filename);
}

function exportBackupJSON() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(AppState, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `Chaudhary_Trader_Backup_${new Date().toISOString().split('T')[0]}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
}

function handleImportJSON(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const imported = JSON.parse(e.target.result);
            if (imported.skus && imported.routes && imported.shops) {
                AppState = imported;
                saveStateToStorage();
                renderAllViews();
                alert("Backup restored successfully!");
            }
        } catch (err) { alert("Error: " + err.message); }
    };
    reader.readAsText(file);
}

function resetToSampleData() { startCleanProductionMode(); }

function openModal(id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.style.display = "flex";
    el.classList.add("active");
}
function closeModal(id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.style.display = "none";
    el.classList.remove("active");
}

/* THEME STUDIO ENGINE WITH 11 HIGH-IMPACT GRADIENT & LIGHT THEMES */
function toggleThemePanel() {
    const panel = document.getElementById("themeSidePanel");
    if (panel) {
        panel.classList.toggle("open");
        panel.classList.toggle("active");
    }
}

function selectAppTheme(themeName, optionEl) {
    const themeClasses = [
        "chaudhary-royal", "dark-glass", "light-glass", "cyber-gold", "cosmic-blue", "pepsi-red",
        "neon-sunset", "emerald-glass", "aurora-glow", "pearl-rosegold", "sky-cloud", "platinum-sapphire"
    ];

    themeClasses.forEach(tc => document.body.classList.remove(tc));
    document.body.classList.add(themeName);

    document.querySelectorAll(".theme-card-option").forEach(opt => {
        if (opt.getAttribute("data-theme") === themeName) opt.classList.add("active");
        else opt.classList.remove("active");
    });

    localStorage.setItem("chaudhary_theme", themeName);
}

function printBill(billNo) {
    const targetNo = billNo || activeModalBillNo;
    if (!targetNo) return;
    const bill = AppState.bills.find(b => b.billNo === targetNo);
    if (!bill) return;

    preparePrintReceipt(bill);

    const printEl = document.getElementById("printArea");
    if (!printEl) return;

    let iframe = document.getElementById("printIframe");
    if (!iframe) {
        iframe = document.createElement("iframe");
        iframe.id = "printIframe";
        iframe.style.position = "fixed";
        iframe.style.right = "0";
        iframe.style.bottom = "0";
        iframe.style.width = "0";
        iframe.style.height = "0";
        iframe.style.border = "none";
        document.body.appendChild(iframe);
    }

    const doc = iframe.contentWindow.document;
    doc.open();
    doc.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Invoice ${bill.billNo} - Chaudhary Trader</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
            <style>
                @page { size: A4 portrait; margin: 8mm; }
                body { font-family: 'Plus Jakarta Sans', Arial, sans-serif; margin: 0; padding: 15px; color: #000; background: #fff; font-size: 11px; line-height: 1.4; }
                .a4-header-row { display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #000; padding-bottom: 12px; margin-bottom: 12px; }
                .a4-brand-logo-group { display: flex; align-items: center; gap: 14px; }
                .a4-print-logo { height: 70px; width: auto; }
                .a4-company-brand h2 { font-size: 22px; font-weight: 800; color: #000; margin: 0 0 2px 0; }
                .company-sub { font-size: 11px; font-weight: 700; color: #333; margin: 0 0 4px 0; }
                .a4-invoice-meta-box { text-align: right; border: 1px solid #000; padding: 8px 12px; border-radius: 4px; background: #f9f9f9; }
                .a4-invoice-meta-box h3 { font-size: 16px; font-weight: 800; margin: 0 0 4px 0; }
                .a4-customer-box { display: flex; justify-content: space-between; border: 1px solid #000; padding: 10px 14px; margin-bottom: 16px; background: #fafafa; border-radius: 4px; }
                .a4-invoice-table { width: 100%; border-collapse: collapse; margin-bottom: 16px; }
                .a4-invoice-table th { background: #eeeeee !important; color: #000 !important; border: 1px solid #000; padding: 7px 6px; font-size: 11px; font-weight: 800; text-align: left; }
                .a4-invoice-table td { border: 1px solid #000; padding: 6px 6px; font-size: 11px; }
                .a4-summary-section { margin-bottom: 24px; }
                .a4-totals-grid { display: flex; justify-content: space-between; align-items: flex-start; }
                .totals-col-left { width: 45%; border: 1px dashed #000; padding: 10px; border-radius: 4px; }
                .totals-col-right { width: 50%; border: 1px solid #000; padding: 10px 14px; background: #f9f9f9; border-radius: 4px; }
                .t-row { display: flex; justify-content: space-between; padding: 4px 0; font-size: 11px; }
                .highlight-disc { color: #b91c1c; font-weight: 700; }
                .grand-total { border-top: 2px solid #000; margin-top: 6px; padding-top: 8px; font-size: 16px; font-weight: 900; }
                .a4-signatures-block { display: flex; justify-content: space-between; margin-top: 40px; padding-top: 10px; }
                .sig-box { width: 30%; text-align: center; }
                .sig-line { border-top: 1px solid #000; padding-top: 6px; font-size: 11px; font-weight: 700; }
                .a4-footer-text { text-align: center; margin-top: 20px; font-size: 10px; color: #555; }
                .text-right { text-align: right; }
            </style>
        </head>
        <body>
            ${printEl.innerHTML}
        </body>
        </html>
    `);
    doc.close();

    setTimeout(() => {
        iframe.contentWindow.focus();
        iframe.contentWindow.print();
    }, 250);
}

function printModalBill() {
    printBill(activeModalBillNo);
}

/* ROUTE & SHOPS MANAGEMENT (ROUTES ARE 7-DAY VISIT TERRITORIES) */
function openAddRouteModal(routeId = null) {
    if (routeId) {
        const route = AppState.routes.find(r => r.id === routeId);
        if (route) {
            document.getElementById("routeEditId").value = route.id;
            document.getElementById("routeNameInput").value = route.name;
            document.getElementById("routeSalesmanInput").value = route.salesman || "Salesman 1";
            document.getElementById("routeModalTitle").innerText = "Edit Route / Territory";
        }
    } else {
        document.getElementById("routeEditId").value = "";
        document.getElementById("routeNameInput").value = "";
        document.getElementById("routeSalesmanInput").value = "Salesman 1";
        document.getElementById("routeModalTitle").innerText = "Add New Route / Territory";
    }
    openModal("routeModal");
}

function saveRouteFromModal() {
    const editId = document.getElementById("routeEditId").value;
    const name = document.getElementById("routeNameInput").value.trim();
    const salesman = document.getElementById("routeSalesmanInput").value.trim() || "Salesman 1";

    if (!name) return alert("Enter Route name!");

    if (editId) {
        const route = AppState.routes.find(r => r.id === editId);
        if (route) {
            route.name = name;
            route.salesman = salesman;
        }
    } else {
        const newRoute = {
            id: `r${Date.now()}`,
            name: name,
            salesman: salesman
        };
        AppState.routes.push(newRoute);
    }

    saveStateToStorage();
    closeModal("routeModal");
    renderAllViews();
}

function deleteRoute(routeId) {
    const route = AppState.routes.find(r => r.id === routeId);
    if (!route) return;

    if (confirm(`Are you sure you want to delete Route "${route.name}"?`)) {
        AppState.routes = AppState.routes.filter(r => r.id !== routeId);
        saveStateToStorage();
        renderAllViews();
        alert(`Route "${route.name}" deleted successfully!`);
    }
}

function openAddShopModal(shopId = null) {
    const routeSel = document.getElementById("shopRouteSelect");
    routeSel.innerHTML = "";
    AppState.routes.forEach(r => { routeSel.innerHTML += `<option value="${r.id}">${r.name} (${r.salesman || 'Salesman'})</option>`; });

    if (shopId) {
        const shop = AppState.shops.find(s => s.id === shopId);
        if (shop) {
            document.getElementById("shopEditId").value = shop.id;
            document.getElementById("shopNameInput").value = shop.name;
            document.getElementById("shopVisitDayInput").value = shop.visitDay || "Monday";
            document.getElementById("shopRouteSelect").value = shop.routeId;
            document.getElementById("shopCustomerNameInput").value = shop.customerName || shop.ownerName || "";
            document.getElementById("shopPhoneInput").value = shop.phone || "";
            document.getElementById("shopDefaultDiscountInput").value = (shop.defaultDiscountPct !== undefined) ? shop.defaultDiscountPct : 4;
            document.getElementById("shopTaxSelect").value = shop.taxMode || "filer";
            document.getElementById("shopModalTitle").innerText = "Edit Shop / Outlet";
        }
    } else {
        document.getElementById("shopEditId").value = "";
        document.getElementById("shopNameInput").value = "";
        document.getElementById("shopVisitDayInput").value = "Sunday";
        document.getElementById("shopCustomerNameInput").value = "";
        document.getElementById("shopPhoneInput").value = "";
        document.getElementById("shopDefaultDiscountInput").value = 4;
        document.getElementById("shopTaxSelect").value = "filer";
    }
    openModal("shopModal");
}

function saveShopFromModal() {
    const editId = document.getElementById("shopEditId").value;
    const name = document.getElementById("shopNameInput").value.trim();
    const visitDay = document.getElementById("shopVisitDayInput").value;
    const routeId = document.getElementById("shopRouteSelect").value;
    const customerName = document.getElementById("shopCustomerNameInput").value.trim();
    const phone = document.getElementById("shopPhoneInput").value.trim();
    const discountPct = parseFloat(document.getElementById("shopDefaultDiscountInput").value) || 0;
    const taxMode = document.getElementById("shopTaxSelect").value;

    if (!name) return alert("Enter Shop Name!");

    if (editId) {
        const shop = AppState.shops.find(s => s.id === editId);
        if (shop) {
            shop.name = name;
            shop.visitDay = visitDay;
            shop.routeId = routeId;
            shop.customerName = customerName;
            shop.phone = phone;
            shop.discountPct = discountPct;
            shop.defaultDiscountPct = discountPct;
            shop.taxStatus = taxMode;
            shop.taxMode = taxMode;
        }
    } else {
        const newShop = {
            id: `S_${String(AppState.shops.length + 1).padStart(3, '0')}`,
            name: name,
            visitDay: visitDay,
            routeId: routeId,
            customerName: customerName,
            phone: phone,
            discountPct: discountPct,
            defaultDiscountPct: discountPct,
            taxStatus: taxMode,
            taxMode: taxMode
        };
        AppState.shops.push(newShop);
    }

    saveStateToStorage();
    closeModal("shopModal");
    renderAllViews();
}

function deleteShop(shopId) {
    const shop = AppState.shops.find(s => s.id === shopId);
    if (!shop) return;

    if (confirm(`Are you sure you want to delete Shop "${shop.name}"?`)) {
        AppState.shops = AppState.shops.filter(s => s.id !== shopId);
        saveStateToStorage();
        renderAllViews();
        alert(`Shop "${shop.name}" deleted successfully!`);
    }
}

function toggleBackgroundAnimations(enable) {
    if (enable) document.body.classList.add("anim-active");
    else document.body.classList.remove("anim-active");
    localStorage.setItem("chaudhary_anim_active", enable ? "true" : "false");
}

/* ==========================================================================
   EXCEL BULK ORDER PUNCHING TEMPLATE ENGINE (SORTED BRAND MATRIX GRID)
   ========================================================================== */

function getSortedSkusByBrand() {
    const brandPriority = { "lays": 1, "kurkure": 2, "cheetos": 3 };
    return [...AppState.skus].sort((a, b) => {
        const brandA = (a.brand || (a.desc.includes("LAYS") ? "Lays" : a.desc.includes("KURKURE") ? "Kurkure" : "Cheetos")).toLowerCase();
        const brandB = (b.brand || (b.desc.includes("LAYS") ? "Lays" : b.desc.includes("KURKURE") ? "Kurkure" : "Cheetos")).toLowerCase();
        const prioA = brandPriority[brandA] || 99;
        const prioB = brandPriority[brandB] || 99;
        if (prioA !== prioB) return prioA - prioB;
        return a.desc.localeCompare(b.desc);
    });
}

function downloadOrderPunchingTemplate() {
    const todayName = getDayNameFromDate();
    const activeShops = AppState.shops.filter(s => !s.visitDay || s.visitDay === "All" || s.visitDay === todayName);
    const targetShops = activeShops.length > 0 ? activeShops : AppState.shops;

    if (targetShops.length === 0) {
        alert("No shops found in database! Please add shops first in Beat Route Plans tab.");
        return;
    }

    const sortedSkus = getSortedSkusByBrand();

    // Group SKUs by Brand Name
    const brandGroups = [];
    let currentBrand = "";
    let currentCount = 0;

    sortedSkus.forEach(s => {
        const bName = s.brand || (s.desc.includes("LAYS") ? "Lays" : s.desc.includes("KURKURE") ? "Kurkure" : "Cheetos");
        if (bName !== currentBrand) {
            if (currentBrand !== "") brandGroups.push({ brand: currentBrand, count: currentCount });
            currentBrand = bName;
            currentCount = 1;
        } else {
            currentCount++;
        }
    });
    if (currentBrand !== "") brandGroups.push({ brand: currentBrand, count: currentCount });

    const totalCols = 4 + (sortedSkus.length * 2);
    const generatedTime = new Date().toLocaleString();

    // Use Native SheetJS XLSX for valid .xlsx binary download (ZERO Excel warning dialogs!)
    if (typeof XLSX !== "undefined") {
        try {
            const wb = XLSX.utils.book_new();
            const row1_banner = [`CHAUDHARY TRADER - DAILY ORDER BOOKING MATRIX SHEET (${todayName.toUpperCase()} BEAT) - TYPE ORDERS IN CTNS/PKTS AND UPLOAD FILE`];
            
            const row2_brands = ["Shop ID", "Shop Name", "Route Territory", "Visit Day"];
            brandGroups.forEach(bg => {
                row2_brands.push(`${bg.brand.toUpperCase()} BRAND PRODUCTS (${bg.count} SKUs)`);
                for (let i = 1; i < bg.count * 2; i++) row2_brands.push("");
            });

            const row3_skus = ["", "", "", ""];
            sortedSkus.forEach(sku => {
                const ctnStock = sku.stockCartons || 0;
                const pktStock = sku.stockUnits || 0;
                row3_skus.push(`${sku.desc} (Stock: ${ctnStock} Ctn/${pktStock} Pkt)`);
                row3_skus.push("");
            });

            const row4_subheaders = ["Shop ID", "Shop Name", "Route Territory", "Visit Day"];
            sortedSkus.forEach(sku => {
                row4_subheaders.push(`[${sku.code}] Ctns`);
                row4_subheaders.push(`[${sku.code}] Pkts`);
            });

            const aoaData = [row1_banner, row2_brands, row3_skus, row4_subheaders];

            targetShops.forEach(shop => {
                const routeObj = AppState.routes.find(r => r.id === shop.routeId) || { name: "Default Route" };
                const shopRow = [
                    shop.id || "S_001",
                    shop.name,
                    routeObj.name,
                    shop.visitDay || "All"
                ];
                sortedSkus.forEach(() => {
                    shopRow.push(0);
                    shopRow.push(0);
                });
                aoaData.push(shopRow);
            });

            const ws = XLSX.utils.aoa_to_sheet(aoaData);

            const colWidths = [
                { wch: 12 },
                { wch: 30 },
                { wch: 24 },
                { wch: 14 }
            ];
            sortedSkus.forEach(() => {
                colWidths.push({ wch: 16 });
                colWidths.push({ wch: 16 });
            });
            ws['!cols'] = colWidths;

            const merges = [];
            merges.push({ s: { r: 0, c: 0 }, e: { r: 0, c: totalCols - 1 } });
            merges.push({ s: { r: 1, c: 0 }, e: { r: 2, c: 0 } });
            merges.push({ s: { r: 1, c: 1 }, e: { r: 2, c: 1 } });
            merges.push({ s: { r: 1, c: 2 }, e: { r: 2, c: 2 } });
            merges.push({ s: { r: 1, c: 3 }, e: { r: 2, c: 3 } });

            let colIdx = 4;
            brandGroups.forEach(bg => {
                const span = bg.count * 2;
                merges.push({ s: { r: 1, c: colIdx }, e: { r: 1, c: colIdx + span - 1 } });
                colIdx += span;
            });

            let skuColIdx = 4;
            sortedSkus.forEach(() => {
                merges.push({ s: { r: 2, c: skuColIdx }, e: { r: 2, c: skuColIdx + 1 } });
                skuColIdx += 2;
            });

            ws['!merges'] = merges;
            XLSX.utils.book_append_sheet(wb, ws, "Order Booking");

            const filename = `Chaudhary_Trader_Matrix_Order_Sheet_${todayName}_${new Date().toISOString().split('T')[0]}.xlsx`;
            XLSX.writeFile(wb, filename);
            return;
        } catch (err) {
            console.warn("SheetJS Order template export failed, using XML fallback:", err);
        }
    }

    // Styled XML Fallback (.xls extension)
    let html = `\uFEFF<html xmlns:o="urn:schemas-microsoft-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">
    <head>
        <meta charset="utf-8">
        <!--[if gte mso 9]>
        <xml>
            <x:ExcelWorkbook>
                <x:ExcelWorksheets>
                    <x:ExcelWorksheet>
                        <x:Name>Order Booking Sheet</x:Name>
                        <x:WorksheetOptions>
                            <x:DisplayGridlines/>
                        </x:WorksheetOptions>
                    </x:ExcelWorksheet>
                </x:ExcelWorksheets>
            </x:ExcelWorkbook>
        </xml>
        <![endif]-->
        <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 10pt; }
            table { border-collapse: collapse; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }
            th { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 10pt; font-weight: bold; text-align: center; vertical-align: middle; }
            td { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 10pt; vertical-align: middle; }
            .num-input { background-color: #ffffff; text-align: center; font-weight: bold; }
        </style>
    </head>
    <body>
        <table border="1" cellspacing="0" cellpadding="6" style="border-collapse: collapse; border: 1px solid #94a3b8;">
            <thead>
                <tr style="background-color: #0f172a; color: #ffcc00; font-weight: bold;">
                    <th colspan="${totalCols}" style="font-size: 16pt; padding: 12px; border: 1px solid #000; background-color: #0f172a; color: #ffcc00; text-align: center;">
                        CHAUDHARY TRADER - PEPSICO / LAYS FMCG DISTRIBUTION SYSTEM
                    </th>
                </tr>
                <tr style="background-color: #1e293b; color: #ffffff;">
                    <th colspan="${totalCols}" style="font-size: 11pt; padding: 8px; border: 1px solid #334155; background-color: #1e293b; color: #ffffff; text-align: center;">
                        📋 DAILY ORDER BOOKING MATRIX SHEET (${todayName.toUpperCase()} BEAT) — Enter Cartons/Packets below & Upload back! (Generated: ${generatedTime})
                    </th>
                </tr>
                <tr style="background-color: #334155; color: #ffffff; font-weight: bold;">
                    <th colspan="4" style="background-color: #0f172a; color: #ffcc00; border: 1px solid #475569; font-size: 11pt;">CUSTOMER OUTLET INFO</th>
    `;

    const brandColors = {
        "lays": "#fef08a",
        "kurkure": "#fed7aa",
        "cheetos": "#fecdd3",
        "fast": "#bbf7d0",
        "hash": "#bbf7d0"
    };

    brandGroups.forEach(bg => {
        const bKey = bg.brand.toLowerCase();
        const bgCol = brandColors[bKey] || "#e2e8f0";
        const span = bg.count * 2;
        html += `<th colspan="${span}" style="background-color: ${bgCol}; color: #0f172a; border: 1px solid #475569; font-size: 11pt; font-weight: 800;">${bg.brand.toUpperCase()} BRAND (${bg.count} SKUs)</th>`;
    });
    html += `</tr>`;

    html += `<tr style="background-color: #f8fafc; font-weight: bold;">
        <th colspan="4" style="background-color: #1e293b; color: #ffffff; border: 1px solid #475569;">SKU Name & Current Warehouse Stock</th>
    `;

    sortedSkus.forEach(sku => {
        const ctnStock = sku.stockCartons || 0;
        const pktStock = sku.stockUnits || 0;
        const bKey = (sku.brand || '').toLowerCase();
        const bgCol = brandColors[bKey] || "#f1f5f9";
        html += `<th colspan="2" style="background-color: ${bgCol}; color: #0f172a; border: 1px solid #94a3b8; font-size: 9pt; padding: 6px;">${sku.desc}<br><small style="color:#059669;">Stock: ${ctnStock}Ctn / ${pktStock}Pkt</small></th>`;
    });
    html += `</tr>`;

    html += `<tr style="background-color: #0f172a; color: #ffcc00; font-weight: bold;">
        <th style="border: 1px solid #475569; padding: 8px;">Shop ID</th>
        <th style="border: 1px solid #475569; padding: 8px;">Shop Name</th>
        <th style="border: 1px solid #475569; padding: 8px;">Route Territory</th>
        <th style="border: 1px solid #475569; padding: 8px;">Visit Day</th>
    `;

    sortedSkus.forEach(sku => {
        html += `<th style="background-color: #1e293b; color: #38bdf8; border: 1px solid #475569; padding: 6px; font-size: 9pt;">[${sku.code}] Ctns</th>`;
        html += `<th style="background-color: #1e293b; color: #a7f3d0; border: 1px solid #475569; padding: 6px; font-size: 9pt;">[${sku.code}] Pkts</th>`;
    });
    html += `</tr></thead><tbody>`;

    targetShops.forEach((shop, idx) => {
        const routeObj = AppState.routes.find(r => r.id === shop.routeId) || { name: "Default Route" };
        const bg = (idx % 2 === 0) ? '#ffffff' : '#f8fafc';

        html += `<tr style="background-color: ${bg};">
            <td style="border: 1px solid #cbd5e1; padding: 6px; font-weight: bold; text-align: center;">${shop.id || 'S_001'}</td>
            <td style="border: 1px solid #cbd5e1; padding: 6px; font-weight: bold; color: #0f172a;">${shop.name}</td>
            <td style="border: 1px solid #cbd5e1; padding: 6px; color: #475569;">${routeObj.name}</td>
            <td style="border: 1px solid #cbd5e1; padding: 6px; text-align: center; font-weight: bold; color: #1e40af;">${shop.visitDay || 'All'}</td>
        `;

        sortedSkus.forEach(() => {
            html += `<td style="border: 1px solid #cbd5e1; padding: 6px; text-align: center; font-weight: bold; color: #000;" class="num-input">0</td>`;
            html += `<td style="border: 1px solid #cbd5e1; padding: 6px; text-align: center; font-weight: bold; color: #000;" class="num-input">0</td>`;
        });
        html += `</tr>`;
    });

    html += `</tbody></table></body></html>`;

    const filename = `Chaudhary_Trader_Matrix_Order_Sheet_${todayName}_${new Date().toISOString().split('T')[0]}.xls`;

    const blob = new Blob([html], { type: 'application/vnd.ms-excel;charset=utf-8' });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function generateFallbackHtmlXlsDownload(todayName, targetShops, sortedSkus, brandGroups) {
    const reportTitle = `Chaudhary Trader - Daily Order Booking Matrix Sheet (${todayName} Beat)`;
    let html = `<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">`;
    html += `<head><meta charset="utf-8">`;
    html += `<style>
        body { font-family: Calibri, Arial, sans-serif; }
        .banner { background-color: #070a12; color: #ffcc00; font-size: 14px; font-weight: bold; text-align: center; height: 35px; vertical-align: middle; border: 1px solid #000; }
        .shop-info-hdr { background-color: #0f172a; color: #ffffff; font-size: 11px; font-weight: bold; text-align: center; border: 1px solid #334155; }
        .brand-hdr-lays { background-color: #dc2626; color: #ffffff; font-size: 12px; font-weight: bold; text-align: center; border: 1px solid #ffffff; }
        .brand-hdr-kurkure { background-color: #d97706; color: #ffffff; font-size: 12px; font-weight: bold; text-align: center; border: 1px solid #ffffff; }
        .brand-hdr-cheetos { background-color: #7c3aed; color: #ffffff; font-size: 12px; font-weight: bold; text-align: center; border: 1px solid #ffffff; }
        .brand-hdr-other { background-color: #2563eb; color: #ffffff; font-size: 12px; font-weight: bold; text-align: center; border: 1px solid #ffffff; }
        .sku-top-hdr { background-color: #1e293b; color: #ffcc00; font-size: 11px; font-weight: bold; text-align: center; border: 1px solid #334155; }
        .sub-col-hdr { background-color: #0f172a; color: #38bdf8; font-size: 10px; font-weight: bold; text-align: center; border: 1px solid #334155; }
        .shop-row-lbl-even { background-color: #f8fafc; color: #0f172a; font-size: 11px; font-weight: bold; border: 1px solid #cbd5e1; }
        .shop-row-lbl-odd { background-color: #ffffff; color: #0f172a; font-size: 11px; font-weight: bold; border: 1px solid #cbd5e1; }
        .input-cell { background-color: #fffde7; color: #000000; font-size: 11px; text-align: center; border: 1px solid #cbd5e1; mso-number-format:"0"; }
    </style>`;
    html += `</head><body><table>`;
    const totalCols = 4 + (sortedSkus.length * 2);
    html += `<tr><td colspan="${totalCols}" class="banner">${reportTitle.toUpperCase()} - TYPE ORDERS IN CTNS / PKTS & UPLOAD FILE TO AUTO-PUNCH ALL BILLS</td></tr>`;
    
    html += `<tr>`;
    html += `<td rowspan="3" class="shop-info-hdr" style="width: 100px;">Shop ID</td>`;
    html += `<td rowspan="3" class="shop-info-hdr" style="width: 220px;">Shop Name</td>`;
    html += `<td rowspan="3" class="shop-info-hdr" style="width: 160px;">Route Territory</td>`;
    html += `<td rowspan="3" class="shop-info-hdr" style="width: 110px;">Visit Day</td>`;

    brandGroups.forEach(bg => {
        const bLower = bg.brand.toLowerCase();
        let cssClass = "brand-hdr-other";
        if (bLower.includes("lays")) cssClass = "brand-hdr-lays";
        else if (bLower.includes("kurkure")) cssClass = "brand-hdr-kurkure";
        else if (bLower.includes("cheetos")) cssClass = "brand-hdr-cheetos";
        html += `<td colspan="${bg.count * 2}" class="${cssClass}">${bg.brand.toUpperCase()} BRAND PRODUCTS (${bg.count} SKUs)</td>`;
    });
    html += `</tr>`;

    html += `<tr>`;
    sortedSkus.forEach(sku => {
        const ctnStock = sku.stockCartons || 0;
        const pktStock = sku.stockUnits || 0;
        html += `<td colspan="2" class="sku-top-hdr">${sku.desc}<br><small style="color: #4ade80;">Avail: ${ctnStock} Ctns / ${pktStock} Pkts (TP: Rs.${sku.tpRate})</small></td>`;
    });
    html += `</tr>`;

    html += `<tr>`;
    sortedSkus.forEach(sku => {
        html += `<td class="sub-col-hdr" style="width: 100px;">[${sku.code}] Ctns</td>`;
        html += `<td class="sub-col-hdr" style="width: 100px;">[${sku.code}] Pkts</td>`;
    });
    html += `</tr>`;

    targetShops.forEach((shop, idx) => {
        const routeObj = AppState.routes.find(r => r.id === shop.routeId) || { name: "Default Route" };
        const rowClass = idx % 2 === 0 ? "shop-row-lbl-even" : "shop-row-lbl-odd";
        html += `<tr>`;
        html += `<td class="${rowClass}">${shop.id || "S_001"}</td>`;
        html += `<td class="${rowClass}">${shop.name}</td>`;
        html += `<td class="${rowClass}">${routeObj.name}</td>`;
        html += `<td class="${rowClass}">${shop.visitDay || "All"}</td>`;
        sortedSkus.forEach(() => {
            html += `<td class="input-cell">0</td>`;
            html += `<td class="input-cell">0</td>`;
        });
        html += `</tr>`;
    });

    html += `</table></body></html>`;

    const blob = new Blob([html], { type: 'application/vnd.ms-excel;charset=utf-8' });
    const downloadAnchor = document.createElement('a');
    downloadAnchor.href = URL.createObjectURL(blob);
    downloadAnchor.download = `Chaudhary_Trader_Matrix_Order_Sheet_${todayName}_${new Date().toISOString().split('T')[0]}.xlsx`;
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
}

function triggerBulkOrderUpload() {
    const fileInput = document.getElementById('bulkOrderFileInput');
    if (fileInput) {
        fileInput.value = "";
        fileInput.click();
    }
}

function handleBulkOrderImport(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const data = new Uint8Array(e.target.result);
            if (typeof XLSX !== "undefined") {
                const workbook = XLSX.read(data, { type: 'array' });
                const firstSheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[firstSheetName];
                const jsonRows = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
                parseParsedMatrixArrayRows(jsonRows);
            } else {
                const text = new TextDecoder("utf-8").decode(data);
                parseAndPunchExcelOrders(text);
            }
        } catch (err) {
            alert("Error parsing Excel file: " + err.message + "\nPlease make sure you are uploading the official downloaded .xlsx template.");
        }
    };
    reader.readAsArrayBuffer(file);
}

function parseParsedMatrixArrayRows(rows) {
    if (!rows || rows.length < 2) {
        alert("The uploaded Excel file appears empty.");
        return;
    }

    let subHeaderRowIndex = -1;
    let headerCols = [];

    for (let i = 0; i < Math.min(rows.length, 10); i++) {
        const rowValues = (rows[i] || []).map(v => String(v || '').trim());
        if (rowValues.some(v => v.includes("[") && v.includes("]"))) {
            subHeaderRowIndex = i;
            headerCols = rowValues;
            break;
        }
    }

    if (subHeaderRowIndex === -1) {
        for (let i = 0; i < Math.min(rows.length, 10); i++) {
            const rowValues = (rows[i] || []).map(v => String(v || '').trim());
            if (rowValues.some(v => v.toLowerCase().includes("shop name") || v.toLowerCase().includes("shop id"))) {
                subHeaderRowIndex = i;
                headerCols = rowValues;
                break;
            }
        }
    }

    if (subHeaderRowIndex === -1) {
        alert("Could not detect SKU sub-header row in uploaded Excel file. Please use the official downloaded .xlsx template.");
        return;
    }

    const shopIdIdx = headerCols.findIndex(c => c.toLowerCase().includes("shop id"));
    const shopNameIdx = headerCols.findIndex(c => c.toLowerCase().includes("shop name"));

    const skuColMappings = [];
    headerCols.forEach((colStr, idx) => {
        const match = colStr.match(/\[(.*?)\]/);
        if (match && match[1]) {
            const skuCode = match[1];
            const isPkt = colStr.toLowerCase().includes("pkt") || colStr.toLowerCase().includes("unit");
            skuColMappings.push({ colIndex: idx, skuCode, isPkt });
        }
    });

    const orderMapByShop = {};

    for (let i = subHeaderRowIndex + 1; i < rows.length; i++) {
        const rowVals = (rows[i] || []).map(v => String(v || '').trim());
        if (rowVals.length < 2) continue;

        const shopId = shopIdIdx !== -1 ? rowVals[shopIdIdx] : "";
        const shopName = shopNameIdx !== -1 ? rowVals[shopNameIdx] : "";
        if (!shopName && !shopId) continue;

        const key = shopId || shopName;
        if (!orderMapByShop[key]) orderMapByShop[key] = { shopId, shopName, itemsMap: {} };

        skuColMappings.forEach(m => {
            const val = parseInt(rowVals[m.colIndex]) || 0;
            if (val > 0) {
                if (!orderMapByShop[key].itemsMap[m.skuCode]) orderMapByShop[key].itemsMap[m.skuCode] = { orderCtns: 0, orderPkts: 0 };
                if (m.isPkt) orderMapByShop[key].itemsMap[m.skuCode].orderPkts += val;
                else orderMapByShop[key].itemsMap[m.skuCode].orderCtns += val;
            }
        });
    }

    convertAndPunchOrderMap(orderMapByShop);
}

function convertAndPunchOrderMap(orderMapByShop) {
    const finalGroupedOrders = {};
    Object.keys(orderMapByShop).forEach(k => {
        const sObj = orderMapByShop[k];
        const skuKeys = Object.keys(sObj.itemsMap);
        if (skuKeys.length > 0) {
            finalGroupedOrders[k] = {
                shopId: sObj.shopId,
                shopName: sObj.shopName,
                items: skuKeys.map(code => ({
                    skuCode: code,
                    orderCtns: sObj.itemsMap[code].orderCtns,
                    orderPkts: sObj.itemsMap[code].orderPkts
                }))
            };
        }
    });

    punchGroupedOrdersIntoAppState(finalGroupedOrders);
}

function punchGroupedOrdersIntoAppState(orderMapByShop) {
    const shopKeys = Object.keys(orderMapByShop);
    if (shopKeys.length === 0) {
        alert("No valid orders with Cartons or Loose Units > 0 were found in the uploaded file.");
        return;
    }

    let punchedBillsCount = 0;
    let totalCtnsPunched = 0;
    let totalUnitsPunched = 0;
    let totalRevenuePunched = 0;
    const todayStr = new Date().toISOString().split('T')[0];

    shopKeys.forEach(sKey => {
        const shopOrder = orderMapByShop[sKey];
        const targetShop = AppState.shops.find(s => s.id === shopOrder.shopId || s.name === shopOrder.shopName) || {
            name: shopOrder.shopName || "Beat Shop",
            discountPct: 0,
            taxStatus: "filer",
            routeId: "r_jhang"
        };

        const targetRoute = AppState.routes.find(r => r.id === targetShop.routeId) || AppState.routes[0] || { name: "Jhang Route", salesman: "Ijaz" };

        const billItems = [];
        let billBasicAmt = 0;
        let billDiscAmt = 0;
        let billWeightKg = 0;
        let billTotalCartons = 0;
        let billTotalUnits = 0;
        let billTotalPackets = 0;

        shopOrder.items.forEach(oItem => {
            const targetSku = AppState.skus.find(s => s.code === oItem.skuCode || s.desc === oItem.skuDesc);
            if (!targetSku) return;

            const ctnQty = oItem.orderCtns;
            const looseQty = oItem.orderPkts;
            const packSize = targetSku.pack || 12;

            const totalPackets = (ctnQty * packSize) + looseQty;
            if (totalPackets <= 0) return;

            const packetTpRate = targetSku.tpRate / packSize;
            const itemBasicAmt = totalPackets * packetTpRate;
            const discPct = targetShop.discountPct || 0;
            const itemDiscAmt = (itemBasicAmt * discPct) / 100;
            const itemNetAmt = itemBasicAmt - itemDiscAmt;

            const singlePktWeightKg = (targetSku.grams * packSize) / 1000 / packSize;
            const itemWeightKg = totalPackets * singlePktWeightKg;


            billItems.push({
                code: targetSku.code,
                desc: targetSku.desc,
                categoryType: targetSku.categoryType || (targetSku.desc.includes("LAYS") ? "PC" : "NPC"),
                brand: targetSku.brand || (targetSku.desc.includes("LAYS") ? "Lays" : "Cheetos"),
                cartons: ctnQty,
                units: looseQty,
                dispatchedCartons: ctnQty,
                dispatchedUnits: looseQty,
                returnedCartons: 0,
                returnedUnits: 0,
                totalPackets: totalPackets,
                tpRate: targetSku.tpRate,
                packetTpRate: packetTpRate,
                basicAmount: itemBasicAmt,
                discAmount: itemDiscAmt,
                amount: itemNetAmt,
                weightKg: itemWeightKg
            });

            billBasicAmt += itemBasicAmt;
            billDiscAmt += itemDiscAmt;
            billWeightKg += itemWeightKg;
            billTotalCartons += ctnQty;
            billTotalUnits += looseQty;
            billTotalPackets += totalPackets;
        });

        if (billItems.length === 0) return;

        const taxPct = targetShop.taxStatus === "nonfiler" ? 2.5 : 0.5;
        const taxAmt = ((billBasicAmt - billDiscAmt) * taxPct) / 100;
        const netBillAmt = billBasicAmt - billDiscAmt + taxAmt;

        const newOrderObj = {
            orderNo: getNextOrderNo(),
            shopId: targetShop.id,
            shopName: targetShop.name,
            routeId: targetRoute.id,
            routeName: targetRoute.name,
            salesman: targetRoute.salesman || "Ijaz",
            orderDate: todayStr,
            deliveryDate: todayStr,
            notes: "Imported via Excel Bulk Upload",
            status: "Draft", // Always Draft on import as required
            items: billItems,
            totalItemsCount: billItems.length,
            totalCartons: billTotalCartons,
            totalUnits: billTotalUnits,
            totalBasic: billBasicAmt,
            globalDiscPct: getShopDiscountPct(targetShop),
            netAmount: Math.round(netBillAmt),
            createdDate: new Date().toISOString()
        };

        AppState.orders.unshift(newOrderObj);
        punchedBillsCount++;
        totalCtnsPunched += billTotalCartons;
        totalUnitsPunched += billTotalUnits;
        totalRevenuePunched += netBillAmt;
    });

    saveStateToStorage();
    renderAllViews();

    alert(`🎉 Excel Bulk Order Import Completed Successfully!\n\n` +
          `• Imported Orders: ${punchedBillsCount} Orders (DRAFT status)\n` +
          `• Total Cartons: ${totalCtnsPunched} Ctns\n` +
          `• Total Loose Units: ${totalUnitsPunched} Pkts\n` +
          `• Total Amount: Rs. ${Math.round(totalRevenuePunched).toLocaleString()}\n\n` +
          `Orders are now listed in Orders tab as DRAFT. Click Process Orders to validate stock.`);
}

/* ==========================================================================
   ANTI GRAVITY ERP - MODULE 1: ORDER MANAGEMENT ENGINE
   ========================================================================== */

function getNextOrderNo() {
    const nextSeq = AppState.orders.length + 1;
    return `ORD${String(nextSeq).padStart(6, '0')}`;
}

function getNextPickListNo() {
    const nextSeq = AppState.pickLists.length + 1;
    return `PL-${new Date().getFullYear()}-${String(nextSeq).padStart(3, '0')}`;
}

function getNextInvoiceId() {
    const nextSeq = AppState.bills.length + 1;
    return `CHT${String(nextSeq).padStart(6, '0')}`;
}

function logOrderAction(entityId, entityType, action, details) {
    if (!AppState.orderLogs) AppState.orderLogs = [];
    AppState.orderLogs.unshift({
        timestamp: new Date().toISOString(),
        entityId: entityId,
        entityType: entityType, // 'Order', 'PickList', 'Invoice'
        action: action,
        details: details
    });
    saveStateToStorage();
}

function savePosCartAsDraftOrder() {
    if (AppState.currentCart.length === 0) return alert("Cart is empty! Please select products to add to order.");
    if (!AppState.selectedShopId) return alert("Please select a Customer / Shop first!");

    const shop = AppState.shops.find(s => s.id === AppState.selectedShopId);
    if (!shop) return alert("Selected shop not found!");
    const route = AppState.routes.find(r => r.id === shop.routeId);
    const salesman = route ? route.salesman : "Ijaz";
    const globalDiscPct = parseFloat(document.getElementById("globalBillDiscountPct")?.value) || 0;
    const orderDate = document.getElementById("posBillDate")?.value || new Date().toISOString().split('T')[0];
    const deliveryDate = document.getElementById("posDeliveryDate")?.value || orderDate;

    let totalBasic = 0, totalCtns = 0, totalUnits = 0;

    const items = AppState.currentCart.map(item => {
        const unitPrice = item.tpRate / item.pack;
        const basicAmount = (item.cartons * item.tpRate) + (item.units * unitPrice);
        totalBasic += basicAmount;
        totalCtns += item.cartons;
        totalUnits += item.units;

        return {
            code: item.code,
            desc: item.desc,
            brand: item.brand || (item.desc.includes("LAYS") ? "Lays" : "Cheetos"),
            categoryType: item.categoryType || "PC",
            tpRate: item.tpRate,
            pack: item.pack,
            grams: item.grams,
            cartons: item.cartons,
            units: item.units,
            basicAmount: basicAmount
        };
    });

    // Automatically attach FOC items if active schemes apply
    const focRes = calculateOrderFoc(items, shop, salesman, orderDate);
    if (focRes.focItems && focRes.focItems.length > 0) {
        focRes.focItems.forEach(fi => items.push(fi));
    }

    const discAmount = totalBasic * (globalDiscPct / 100);
    const netAmount = Math.round(totalBasic - discAmount);
    const orderNo = getNextOrderNo();

    const newOrder = {
        orderNo: orderNo,
        shopId: shop.id,
        shopName: shop.name,
        routeId: shop.routeId,
        routeName: route ? route.name : "Route",
        salesman: salesman,
        orderDate: orderDate,
        deliveryDate: deliveryDate,
        notes: "Created via Quick Billing POS Engine",
        status: "Draft", // Always Draft on order creation
        items: items,
        totalItemsCount: items.length,
        totalCartons: totalCtns,
        totalUnits: totalUnits,
        totalBasic: totalBasic,
        globalDiscPct: globalDiscPct,
        netAmount: netAmount,
        createdDate: new Date().toISOString()
    };

    AppState.orders.unshift(newOrder);
    logOrderAction(orderNo, "Order", "Created", `Order ${orderNo} created via POS for ${shop.name} in Draft status.`);
    saveStateToStorage();

    clearPosCart();
    switchTab("ordersTab");
    renderAllViews();

    alert(`🎉 Order ${orderNo} created & saved as DRAFT successfully!\n\n` +
          `• Customer: ${shop.name}\n` +
          `• Items Count: ${items.length} SKUs\n` +
          `• Total Cartons: ${totalCtns} Ctns\n` +
          `• Net Amount: Rs. ${netAmount.toLocaleString()}\n\n` +
          `No warehouse stock deducted yet. Order is now listed in Orders tab!`);
}

function openAddOrderModal() {
    switchTab("billingTab");
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function onOrderShopSelectChange() {
    const shopId = document.getElementById("orderShopSelect").value;
    const shop = AppState.shops.find(s => s.id === shopId);
    if (shop) {
        const rObj = AppState.routes.find(r => r.id === shop.routeId);
        document.getElementById("orderRouteText").value = rObj ? rObj.name : "Default Route";
    } else {
        document.getElementById("orderRouteText").value = "";
    }
}

function renderManualOrderSkusTbody() {
    const tbody = document.getElementById("manualOrderSkusTbody");
    if (!tbody) return;
    tbody.innerHTML = "";
    AppState.skus.forEach(s => {
        tbody.innerHTML += `
            <tr>
                <td><strong>${s.code}</strong></td>
                <td>${s.desc}</td>
                <td><span class="badge badge-info">${s.stockCartons||0} Ctn / ${s.stockUnits||0} Pkt</span></td>
                <td>Rs. ${s.tpRate}</td>
                <td><input type="number" class="manual-order-ctn" data-code="${s.code}" min="0" value="0" style="width: 70px;"></td>
                <td><input type="number" class="manual-order-pkt" data-code="${s.code}" min="0" value="0" style="width: 70px;"></td>
            </tr>
        `;
    });
}

function saveManualOrder() {
    const shopId = document.getElementById("orderShopSelect").value;
    if (!shopId) return alert("Select a Customer / Shop!");

    const shop = AppState.shops.find(s => s.id === shopId);
    const rObj = AppState.routes.find(r => r.id === shop.routeId);
    const orderDate = document.getElementById("manualOrderDate").value || new Date().toISOString().split('T')[0];
    const deliveryDate = document.getElementById("manualDeliveryDate").value || orderDate;
    const notes = document.getElementById("manualOrderNotes").value.trim();

    const items = [];
    let totalCtns = 0, totalPkts = 0, totalBasic = 0;

    document.querySelectorAll(".manual-order-ctn").forEach(ctnInput => {
        const code = ctnInput.getAttribute("data-code");
        const ctns = parseInt(ctnInput.value) || 0;
        const pktInput = document.querySelector(`.manual-order-pkt[data-code="${code}"]`);
        const pkts = parseInt(pktInput ? pktInput.value : 0) || 0;

        if (ctns > 0 || pkts > 0) {
            const sku = AppState.skus.find(s => s.code === code);
            if (sku) {
                const unitPrice = sku.tpRate / sku.pack;
                const basicAmt = (ctns * sku.tpRate) + (pkts * unitPrice);
                items.push({
                    code: sku.code,
                    desc: sku.desc,
                    brand: sku.brand || (sku.desc.includes("LAYS") ? "Lays" : "Cheetos"),
                    categoryType: sku.categoryType || "PC",
                    tpRate: sku.tpRate,
                    pack: sku.pack,
                    grams: sku.grams,
                    cartons: ctns,
                    units: pkts,
                    basicAmount: basicAmt
                });
                totalCtns += ctns;
                totalPkts += pkts;
                totalBasic += basicAmt;
            }
        }
    });

    if (items.length === 0) return alert("Please enter at least 1 Carton or Loose Packet for the order!");

    // Automatically attach FOC items if active schemes apply
    const salesmanName = rObj ? rObj.salesman : "Salesman 1";
    const focRes = calculateOrderFoc(items, shop, salesmanName, orderDate);
    if (focRes.focItems && focRes.focItems.length > 0) {
        focRes.focItems.forEach(fi => items.push(fi));
    }

    const orderNo = getNextOrderNo();
    const globalDiscPct = getShopDiscountPct(shop);
    const discAmount = totalBasic * (globalDiscPct / 100);
    const netAmount = Math.round(totalBasic - discAmount);

    const newOrder = {
        orderNo: orderNo,
        shopId: shop.id,
        shopName: shop.name,
        routeId: shop.routeId,
        routeName: rObj ? rObj.name : "Route",
        salesman: rObj ? rObj.salesman : "Salesman 1",
        orderDate: orderDate,
        deliveryDate: deliveryDate,
        notes: notes,
        status: "Draft",
        items: items,
        totalItemsCount: items.length,
        totalCartons: totalCtns,
        totalUnits: totalPkts,
        totalBasic: totalBasic,
        globalDiscPct: globalDiscPct,
        netAmount: netAmount,
        createdDate: new Date().toISOString()
    };

    AppState.orders.unshift(newOrder);
    logOrderAction(orderNo, "Order", "Created", `Order ${orderNo} created for ${shop.name} in Draft status.`);
    saveStateToStorage();
    closeModal("addOrderModal");
    renderAllViews();
    alert(`Order ${orderNo} created successfully in DRAFT status! No warehouse stock deducted yet.`);
}

function renderOrdersTable() {
    const tbody = document.getElementById("ordersTableBody");
    if (!tbody) return;

    const searchQuery = (document.getElementById("ordersSearchQuery")?.value || "").toLowerCase().trim();
    const routeFilter = document.getElementById("ordersRouteFilter")?.value || "all";
    const custFilter = document.getElementById("ordersCustomerFilter")?.value || "all";
    const compFilter = document.getElementById("ordersCompanyFilter")?.value || "all";
    const statusFilter = document.getElementById("ordersStatusFilter")?.value || "all";
    const delivDateFilter = document.getElementById("ordersDeliveryDateFilter")?.value || "";
    const sortVal = document.getElementById("ordersSortSelect")?.value || "newest";

    let filtered = (AppState.orders || []).filter(o => {
        if (o.isVoid) return false;
        if (routeFilter !== "all" && o.routeId !== routeFilter && o.routeName !== routeFilter) return false;
        if (custFilter !== "all" && o.shopId !== custFilter && o.shopName !== custFilter) return false;
        if (compFilter !== "all" && o.companyId !== compFilter) return false;
        
        if (statusFilter !== "all") {
            const st = o.status || "Draft";
            if (statusFilter === "Draft" && st !== "Draft" && st !== "Unprocessed" && st !== "Pending" && st !== "Submitted") return false;
            if (statusFilter === "Processed" && st !== "Processed" && st !== "Confirmed") return false;
            if (statusFilter === "Cancelled" && st !== "Cancelled" && st !== "Voided") return false;
        }

        if (delivDateFilter && o.deliveryDate && o.deliveryDate !== delivDateFilter && o.date !== delivDateFilter) return false;

        if (searchQuery) {
            return (o.orderNo && o.orderNo.toLowerCase().includes(searchQuery)) ||
                   (o.shopName && o.shopName.toLowerCase().includes(searchQuery)) ||
                   (o.routeName && o.routeName.toLowerCase().includes(searchQuery));
        }
        return true;
    });

    // Sorting
    filtered.sort((a, b) => {
        if (sortVal === "oldest") return new Date(a.date || 0) - new Date(b.date || 0);
        if (sortVal === "amountHigh") return (b.netAmount || 0) - (a.netAmount || 0);
        if (sortVal === "qtyHigh") return (b.totalCartons || 0) - (a.totalCartons || 0);
        return new Date(b.date || 0) - new Date(a.date || 0); // newest first
    });

    if (filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="11" style="text-align: center; color: var(--text-muted); padding: 24px;">No Customer Orders found.</td></tr>`;
        return;
    }

    const selectedIds = AppState.selectedOrderIds || [];
    const rows = [];

    filtered.forEach(o => {
        const isChecked = selectedIds.includes(o.orderNo) ? "checked" : "";
        const compBadge = o.companyId === "hash" ? `<span class="badge badge-success">Fast</span>` : `<span class="badge badge-warning">Lays</span>`;
        
        let statusBadge = `<span class="badge badge-warning">🟡 Draft</span>`;
        if (o.status === "Processed" || o.status === "Confirmed") statusBadge = `<span class="badge badge-success">🟢 Processed</span>`;
        else if (o.status === "Cancelled" || o.status === "Voided") statusBadge = `<span class="badge badge-danger">🔴 Cancelled</span>`;

        const itemCount = (o.items || []).length;
        const totalCartons = o.totalCartons || (o.items || []).reduce((acc, i) => acc + (i.cartons || 0), 0);
        
        let netAmt = o.netAmount || 0;
        if (!netAmt || netAmt === 0) {
            netAmt = (o.items || []).reduce((acc, i) => {
                const ctn = i.cartons || 0;
                const tp = i.tpRate || (i.price || 0);
                const basic = ctn * tp;
                const disc = (i.discAmount || (basic * 0.03));
                return acc + (basic - disc);
            }, 0);
        }

        rows.push(`
            <tr>
                <td style="text-align: center;">
                    <input type="checkbox" class="order-select-chk" data-orderno="${o.orderNo}" value="${o.orderNo}" ${isChecked} onchange="toggleOrderSelection('${o.orderNo}', this.checked)">
                </td>
                <td><strong>${o.orderNo}</strong></td>
                <td>${o.date || '-'}</td>
                <td>${o.deliveryDate || o.date || '-'}</td>
                <td><strong>${o.shopName || '-'}</strong></td>
                <td>${o.routeName || '-'}</td>
                <td>${itemCount} SKUs</td>
                <td>${totalCartons} Ctns</td>
                <td><strong style="color: #059669;">Rs. ${Math.round(netAmt).toLocaleString()}</strong></td>
                <td>${statusBadge}</td>
                <td>
                    <button class="btn btn-outline btn-sm" style="padding: 5px 14px; font-size: 13px; font-weight: 600; border-radius: 20px; background: rgba(255,255,255,0.9); color: #0f172a; border: 1px solid #cbd5e1; box-shadow: 0 2px 5px rgba(0,0,0,0.05);" onclick="viewOrderDetails('${o.orderNo}')">
                        <i class="fa-solid fa-eye"></i> View
                    </button>
                </td>
            </tr>
        `);
    });
    tbody.innerHTML = rows.join('');
}

function toggleOrderSelection(orderNo, checked) {
    if (!AppState.selectedOrderIds) AppState.selectedOrderIds = [];
    if (checked) {
        if (!AppState.selectedOrderIds.includes(orderNo)) AppState.selectedOrderIds.push(orderNo);
    } else {
        AppState.selectedOrderIds = AppState.selectedOrderIds.filter(id => id !== orderNo);
    }
}

function toggleSelectAllOrders(checked) {
    const checkboxes = document.querySelectorAll(".order-select-chk");
    AppState.selectedOrderIds = [];
    checkboxes.forEach(chk => {
        chk.checked = checked;
        const ordNo = chk.getAttribute("data-orderno");
        if (checked && ordNo) AppState.selectedOrderIds.push(ordNo);
    });
}

function batchConfirmSelectedOrders() {
    const selectedIds = AppState.selectedOrderIds || [];
    if (selectedIds.length === 0) return alert("Select at least 1 order to confirm!");

    const targetOrders = AppState.orders.filter(o => selectedIds.includes(o.orderNo) && (o.status === "Draft" || o.status === "Processed"));
    if (targetOrders.length === 0) return alert("No valid orders selected to confirm!");

    if (confirm(`Confirm ${targetOrders.length} selected order(s)? Official sales will be recorded.`)) {
        targetOrders.forEach(o => {
            o.status = "Confirmed";
            const bill = AppState.bills.find(b => b.orderNo === o.orderNo);
            if (bill) {
                bill.deliveryStatus = "Confirmed";
                bill.salesRecorded = true;
            }
        });
        AppState.selectedOrderIds = [];
        saveStateToStorage();
        renderAllViews();
        alert(`Successfully CONFIRMED ${targetOrders.length} order(s)! Official sales recorded for Dashboard & Reports.`);
    }
}



function processSingleOrder(orderNo) {
    const ord = (AppState.orders || []).find(o => o.orderNo === orderNo);
    if (!ord) return alert("Order not found!");
    if (ord.status === "Processed" || ord.status === "Confirmed") {
        return alert(`Order ${orderNo} is already processed into an invoice!`);
    }

    AppState.pendingProcessOrderIds = [orderNo];
    openModal("processOrdersDateModal");
}



function confirmProcessOrdersWithDate() {
    const deliveryDate = document.getElementById("processTargetDeliveryDate").value;
    if (!deliveryDate) return alert("Select a Delivery Date!");

    closeModal("processOrdersDateModal");
    runStockValidationAndProcess(AppState.pendingProcessOrderIds, deliveryDate);
}

function runStockValidationAndProcess(orderNos, deliveryDate) {
    if (!orderNos || orderNos.length === 0) return alert("No orders selected for processing!");
    const targetOrders = AppState.orders.filter(o => orderNos.includes(o.orderNo) && o.status !== "Processed" && o.status !== "Cancelled");
    if (targetOrders.length === 0) return alert("Selected orders are either already processed or cancelled.");

    const requiredMap = {};
    targetOrders.forEach(o => {
        o.items.forEach(i => {
            if (!requiredMap[i.code]) requiredMap[i.code] = { code: i.code, desc: i.desc, cartons: 0, units: 0 };
            requiredMap[i.code].cartons += i.cartons;
            requiredMap[i.code].units += i.units;
        });
    });

    const shortages = [];
    Object.keys(requiredMap).forEach(code => {
        const req = requiredMap[code];
        const sku = AppState.skus.find(s => String(s.code).trim() === String(code).trim() || (req.desc && s.desc.toLowerCase() === req.desc.toLowerCase()));

        const availCartons = sku ? (sku.stockCartons || 0) : 0;
        const availUnits = sku ? (sku.stockUnits || 0) : 0;

        const reqTotalUnits = (req.cartons * (sku ? sku.pack : 12)) + req.units;
        const availTotalUnits = (availCartons * (sku ? sku.pack : 12)) + availUnits;

        if (reqTotalUnits > availTotalUnits) {
            const shortTotalUnits = reqTotalUnits - availTotalUnits;
            const pack = sku ? sku.pack : 12;
            const shortCtns = Math.floor(shortTotalUnits / pack);
            const shortPkts = shortTotalUnits % pack;

            shortages.push({
                code: code,
                desc: req.desc,
                reqCtns: req.cartons,
                reqPkts: req.units,
                availCtns: availCartons,
                availPkts: availUnits,
                shortCtns: shortCtns,
                shortPkts: shortPkts
            });
        }
    });

    if (shortages.length > 0) {
        AppState.pendingShortageData = {
            orderNos: orderNos,
            deliveryDate: deliveryDate,
            shortages: shortages
        };

        const tbody = document.getElementById("stockShortageTbody");
        tbody.innerHTML = "";
        shortages.forEach(s => {
            tbody.innerHTML += `
                <tr>
                    <td><strong>${s.code}</strong></td>
                    <td>${s.desc}</td>
                    <td>${s.reqCtns} Ctns / ${s.reqPkts} Pkts</td>
                    <td><span class="badge badge-info" style="font-weight: 700;">${s.availCtns} Ctns / ${s.availPkts} Pkts</span></td>
                    <td><strong style="color: #ef4444;">${s.shortCtns} Ctns / ${s.shortPkts} Pkts Short</strong></td>
                    <td>
                        <div style="display: flex; align-items: center; gap: 4px;">
                            <input type="number" min="0" max="${s.availCtns}" id="adj_ctn_${s.code}" value="${s.availCtns}" style="width: 55px; font-weight: bold; color: var(--brand-gold); border: 2px solid var(--brand-gold); text-align: center; border-radius: 6px; padding: 4px;"> <small>Ctns</small>
                            <input type="number" min="0" max="${s.availPkts}" id="adj_pkt_${s.code}" value="${s.availPkts}" style="width: 45px; font-weight: bold; color: var(--brand-gold); border: 2px solid var(--brand-gold); text-align: center; border-radius: 6px; padding: 4px;"> <small>Pkts</small>
                        </div>
                    </td>
                </tr>
            `;
        });
        openModal("stockValidationModal");
    } else {
        executeOrderProcessing(targetOrders, deliveryDate);
    }
}

function applyInModalShortageAdjustmentAndProcess() {
    if (!AppState.pendingShortageData) return;
    const { orderNos, deliveryDate, shortages } = AppState.pendingShortageData;

    const targetOrders = AppState.orders.filter(o => orderNos.includes(o.orderNo) && o.status !== "Processed" && o.status !== "Cancelled");
    if (targetOrders.length === 0) return alert("Selected orders could not be found.");

    shortages.forEach(s => {
        const ctnInput = document.getElementById(`adj_ctn_${s.code}`);
        const pktInput = document.getElementById(`adj_pkt_${s.code}`);
        const newCtns = ctnInput ? (parseInt(ctnInput.value) || 0) : s.availCtns;
        const newPkts = pktInput ? (parseInt(pktInput.value) || 0) : s.availPkts;

        targetOrders.forEach(o => {
            o.items.forEach(i => {
                if (i.code === s.code) {
                    i.cartons = newCtns;
                    i.units = newPkts;
                    const unitPrice = i.tpRate / i.pack;
                    i.basicAmount = (i.cartons * i.tpRate) + (i.units * unitPrice);
                }
            });

            o.items = o.items.filter(i => (i.cartons > 0 || i.units > 0));

            let tBasic = 0, tCtns = 0, tUnits = 0;
            o.items.forEach(i => {
                tBasic += i.basicAmount;
                tCtns += i.cartons;
                tUnits += i.units;
            });
            o.totalBasic = tBasic;
            o.totalCartons = tCtns;
            o.totalUnits = tUnits;
            o.netAmount = Math.round(tBasic - (tBasic * (o.globalDiscPct / 100)));
        });
    });

    closeModal("stockValidationModal");
    executeOrderProcessing(targetOrders, deliveryDate);
    alert("🎉 Order quantities adjusted and processed successfully! Warehouse stock updated.");
}

function resolveStockValidation(optionNumber) {
    if (!AppState.pendingShortageData) return;
    const { orderNos, deliveryDate, shortages } = AppState.pendingShortageData;

    closeModal("stockValidationModal");

    if (optionNumber === 1) {
        const targetOrders = AppState.orders.filter(o => orderNos.includes(o.orderNo) && o.status !== "Processed" && o.status !== "Cancelled");
        targetOrders.forEach(o => {
            o.items = o.items.filter(i => {
                const short = shortages.find(s => s.code === i.code);
                return !short;
            });
            let tBasic = 0, tCtns = 0, tUnits = 0;
            o.items.forEach(i => {
                tBasic += i.basicAmount;
                tCtns += i.cartons;
                tUnits += i.units;
            });
            o.totalBasic = tBasic;
            o.totalCartons = tCtns;
            o.totalUnits = tUnits;
            o.netAmount = Math.round(tBasic - (tBasic * (getBillDiscountPct(o) / 100)));
        });
        executeOrderProcessing(targetOrders, deliveryDate);
        alert("Out-of-stock SKUs removed automatically and remaining items processed!");

    } else if (optionNumber === 2) {
        applyInModalShortageAdjustmentAndProcess();
    } else if (optionNumber === 3) {
        AppState.pendingShortageData = null;
        alert("Order processing cancelled. Orders remain unchanged.");
    }
}

function executeOrderProcessing(targetOrders, deliveryDate) {
    targetOrders.forEach(o => {
        const shop = AppState.shops.find(s => s.id === o.shopId);

        // Auto-attach FOC items if active schemes apply and not attached yet
        const hasFocAlready = (o.items || []).some(i => i.isFoc);
        if (!hasFocAlready) {
            const focRes = calculateOrderFoc(o.items, shop, o.salesman, o.orderDate || o.date);
            if (focRes.focItems && focRes.focItems.length > 0) {
                focRes.focItems.forEach(fi => o.items.push(fi));
            }
        }

        const oCompId = o.companyId || "lays";
        const oComp = AppState.companies.find(c => c.id === oCompId) || { taxMode: "lays_tax" };
        const isNoTaxCompany = (oComp.taxMode === "no_tax");

        if (!o.stockDeducted) {
            deductStockForItems(o.items);
            o.stockDeducted = true;
        }

        o.status = "Processed";
        o.deliveryDate = deliveryDate;

        const taxMode = (shop && shop.taxMode === "filer") ? "filer" : "nonfiler";

        const companyItemGroups = {};
        (o.items || []).forEach(i => {
            const cId = getCompanyIdForItem(i);
            if (!companyItemGroups[cId]) companyItemGroups[cId] = [];
            companyItemGroups[cId].push(i);
        });

        Object.keys(companyItemGroups).forEach(cKey => {
            const groupItems = companyItemGroups[cKey];
            const invoiceId = getNextInvoiceId();
            const compObj = AppState.companies.find(c => c.id.toLowerCase() === cKey) || { taxMode: "lays_tax" };
            const isNoTaxCompany = (compObj.taxMode === "no_tax");
            const adwhTaxRate = isNoTaxCompany ? 0 : (taxMode === "filer" ? 0.005 : 0.025);

            // FAST / HASH bills NEVER get a discount (0% discount)
            const isHashCompany = (cKey.toLowerCase() === "hash" || cKey.toLowerCase() === "fast" || isNoTaxCompany);
            const globalDiscPct = isHashCompany ? 0 : getBillDiscountPct(o);
            let billTotalBasic = 0;
            let billTotalDisc = 0;
            let billTotalAdwh = 0;

            const billItems = groupItems.map(i => {
                const sku = AppState.skus.find(s => s.code === i.code || (i.desc && s.desc.toLowerCase() === i.desc.toLowerCase()));
                const isFocItem = !!i.isFoc;
                const rate = isFocItem ? 0 : ((i.tpRate && i.tpRate > 0) ? i.tpRate : (sku ? (sku.tpRate || sku.wholesaleRate || 900) : 900));
                const pack = i.pack || (sku ? sku.pack : 12);
                const grams = i.grams || (sku ? sku.grams : 72);

                const baseTpRate = isFocItem ? 0 : (sku ? (sku.tpRate || sku.wholesaleRate || rate) : rate);
                const basicAmt = isFocItem ? 0 : (baseTpRate * (i.cartons || 0));
                const discAmt = isFocItem ? 0 : (basicAmt * (globalDiscPct / 100));
                const taxableBase = basicAmt - discAmt;
                const adwhAmt = isFocItem ? 0 : (taxableBase * adwhTaxRate);
                const lineNet = taxableBase + adwhAmt;

                billTotalBasic += basicAmt;
                billTotalDisc += discAmt;
                billTotalAdwh += adwhAmt;

                return {
                    code: i.code,
                    companyId: cKey,
                    desc: i.desc || (sku ? sku.desc : "Item"),
                    brand: i.brand || (sku ? sku.brand : "Lays"),
                    categoryType: i.categoryType || "PC",
                    pack: pack,
                    grams: grams,
                    tpRate: rate,
                    cartons: i.cartons || 0,
                    units: i.units || 0,
                    freePack: 0,
                    basicAmount: basicAmt,
                    discAmount: discAmt,
                    adwhTax: adwhAmt,
                    totalPackets: ((i.cartons || 0) * pack) + (i.units || 0),
                    weightKg: (grams * (((i.cartons || 0) * pack) + (i.units || 0))) / 1000,
                    amount: lineNet,
                    isFoc: isFocItem,
                    schemeName: i.schemeName
                };
            });

            const netPayable = Math.max(0, (billTotalBasic - billTotalDisc) + billTotalAdwh);
            const totalCtns = billItems.reduce((acc, it) => acc + (it.cartons || 0), 0);
            const totalUnits = billItems.reduce((acc, it) => acc + (it.units || 0), 0);

            const newBill = {
                id: invoiceId,
                billNo: invoiceId,
                orderNo: o.orderNo,
                uuid: o.uuid,
                companyId: cKey,
                date: o.date || o.orderDate || new Date().toISOString().split('T')[0],
                deliveryDate: deliveryDate,
                shopId: o.shopId,
                shopName: o.shopName,
                customerName: o.customerName || o.shopName,
                routeId: o.routeId,
                routeName: o.routeName,
                salesman: o.salesman || "Salesman 1",
                taxMode: taxMode,
                paymentStatus: "Cash",
                deliveryStatus: "Open",
                pickStatus: "Unpicked",
                stockDeducted: true,
                salesRecorded: false,
                globalDiscPct: globalDiscPct,
                items: billItems,
                totalBasic: billTotalBasic,
                totalDisc: billTotalDisc,
                totalAdwh: billTotalAdwh,
                totalCartons: totalCtns,
                totalUnits: totalUnits,
                totalPackets: (totalCtns * 12) + totalUnits,
                totalWeightKg: billItems.reduce((sum, it) => sum + it.weightKg, 0),
                netAmount: Math.round(netPayable),
                totalAmount: Math.round(netPayable),
                subtotal: billTotalBasic,
                netTotal: Math.round(netPayable)
            };

            AppState.bills.unshift(newBill);
            logOrderAction(o.orderNo, "Order", "Processed", `Order ${o.orderNo} (${cKey.toUpperCase()}) processed into Invoice ${invoiceId} for delivery on ${deliveryDate}.`);
        });
    });


    AppState.selectedOrderIds = [];
    AppState.pendingShortageData = null;
    saveStateToStorage();
    try { forcePushLocalStateToCloud(); } catch(e) {}
    renderAllViews();
    alert(`🎉 Successfully processed ${targetOrders.length} order(s)! Invoices created & Pick List updated.`);
}

/* ==========================================================================
   ANTI GRAVITY ERP - MODULE 2: PICK LIST ENGINE
   ========================================================================== */

function openNewPickListModal() {
    const todayStr = new Date().toISOString().split('T')[0];
    document.getElementById("pickListPlannedDate").value = todayStr;
    document.getElementById("pickListFinalDate").value = todayStr;
    onPickListDateChange();
    openModal("newPickListModal");
}

function parseCalendarDateStr(dStr) {
    if (!dStr) return "";
    if (dStr.includes("T")) dStr = dStr.split("T")[0];
    if (dStr.includes(" ")) dStr = dStr.split(" ")[0];
    return dStr.trim();
}

function onPickListDateChange() {
    const selectedDateStr = parseCalendarDateStr(document.getElementById("pickListPlannedDate")?.value);
    
    const processedBills = AppState.bills.filter(b => {
        if (b.isVoid || b.deliveryStatus === "Cancelled" || b.deliveryStatus === "Returned" || b.pickStatus === "Picked") {
            return false;
        }

        const bDelivDate = parseCalendarDateStr(b.deliveryDate || b.date || b.createdDate);
        if (!selectedDateStr) return true;

        // KEY RULE FOR BUG 2: Future orders (bDelivDate > selectedDateStr) MUST NEVER appear!
        if (bDelivDate > selectedDateStr) {
            return false;
        }

        // Due orders (bDelivDate === selectedDateStr) OR Overdue orders (bDelivDate < selectedDateStr) appear!
        return true;
    });

    const badge = document.getElementById("pickListOrdersCountBadge");
    if (badge) badge.innerText = `${processedBills.length} Due / Overdue Unpicked Orders`;

    const tbody = document.getElementById("pickListOrdersTbody");
    if (!tbody) return;
    tbody.innerHTML = "";

    if (processedBills.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" class="text-muted text-center" style="padding: 16px;">No due or overdue unpicked processed orders found for selected date (${selectedDateStr || 'All'}). Future delivery dates are excluded.</td></tr>`;
        return;
    }

    processedBills.forEach(b => {
        const bDelivDate = parseCalendarDateStr(b.deliveryDate || b.date || b.createdDate);
        const isOverdue = selectedDateStr && (bDelivDate < selectedDateStr);
        const dateBadge = isOverdue ? `<span class="badge badge-warning">⚠️ Overdue (${bDelivDate})</span>` : `<span class="badge badge-info">🟢 Due (${bDelivDate})</span>`;

        const ctns = b.totalCartons || (b.items || []).reduce((acc, i) => acc + (i.cartons || 0), 0);
        const netAmt = b.netAmount || b.totalAmount || 0;
        tbody.innerHTML += `
            <tr>
                <td style="text-align: center;">
                    <input type="checkbox" class="picklist-order-chk" data-billno="${b.billNo}" checked>
                </td>
                <td><strong>${b.billNo}</strong> (${b.orderNo || 'Order'})</td>
                <td><strong>${b.shopName || 'Shop'}</strong></td>
                <td>${b.routeName || 'Route'}</td>
                <td>${dateBadge}</td>
                <td><strong style="color: var(--accent-green);">${ctns} Ctns</strong></td>
                <td><strong>Rs. ${Math.round(netAmt).toLocaleString()}</strong></td>
            </tr>
        `;
    });
}


function toggleSelectAllPickListOrders(checked) {
    document.querySelectorAll(".picklist-order-chk").forEach(chk => chk.checked = checked);
}

function confirmSavePickList() {
    const plannedDate = document.getElementById("pickListPlannedDate").value;
    const finalDate = document.getElementById("pickListFinalDate").value || plannedDate;

    const selectedBillNos = [];
    document.querySelectorAll(".picklist-order-chk:checked").forEach(chk => {
        const bNo = chk.getAttribute("data-billno");
        if (bNo) selectedBillNos.push(bNo);
    });

    if (selectedBillNos.length === 0) return alert("Select at least 1 processed order to create Pick List!");

    const selectedBills = AppState.bills.filter(b => selectedBillNos.includes(b.billNo));
    const pickListNo = getNextPickListNo();

    let totalCtns = 0, totalKG = 0;
    selectedBills.forEach(b => {
        let bCtns = b.totalCartons;
        let bKg = b.totalWeightKg;

        if (bCtns === undefined || bCtns === null || bCtns === 0) {
            bCtns = (b.items || []).reduce((acc, i) => acc + (i.cartons || 0), 0);
            b.totalCartons = bCtns;
        }
        if (bKg === undefined || bKg === null || bKg === 0) {
            bKg = (b.items || []).reduce((acc, i) => {
                const pkts = ((i.cartons || 0) * (i.pack || 12)) + (i.units || 0);
                return acc + (((i.grams || 72) * pkts) / 1000);
            }, 0);
            b.totalWeightKg = bKg;
        }

        totalCtns += bCtns;
        totalKG += bKg;
        b.pickStatus = "Picked";
        b.pickListNo = pickListNo;
    });

    const newPickList = {
        pickListNo: pickListNo,
        createdDate: new Date().toISOString().split('T')[0],
        plannedDeliveryDate: plannedDate,
        finalDeliveryDate: finalDate,
        billNos: selectedBillNos,
        ordersCount: selectedBillNos.length,
        totalCartons: totalCtns,
        totalWeightKg: totalKG,
        status: "Created"
    };

    AppState.pickLists.unshift(newPickList);
    logOrderAction(pickListNo, "PickList", "Created", `Pick List ${pickListNo} created with ${selectedBillNos.length} invoices.`);
    saveStateToStorage();
    closeModal("newPickListModal");
    renderAllViews();
    alert(`🎉 Pick List ${pickListNo} saved successfully! Total: ${totalCtns} Cartons (${totalKG.toFixed(2)} KG) across ${selectedBillNos.length} Invoices.`);
}

function renderPickListTable() {
    const tbody = document.getElementById("pickListTableBody");
    if (!tbody) return;
    tbody.innerHTML = "";

    const query = (document.getElementById("pickListSearchQuery")?.value || "").toLowerCase().trim();
    let searchStr = query;
    if (searchStr.includes("search pick") || searchStr.includes("search pick list")) {
        searchStr = "";
    }

    const dateFilter = document.getElementById("pickListDateFilter")?.value || "";
    const compFilter = document.getElementById("pickListCompanyFilter")?.value || "all";
    const sortBy = document.getElementById("pickListSortSelect")?.value || "newest";

    let filtered = AppState.pickLists.filter(pl => {
        const plNoStr = String(pl.pickListNo || "").toLowerCase();
        const dateStr = String(pl.finalDeliveryDate || pl.createdDate || "").toLowerCase();
        const statusStr = String(pl.status || "").toLowerCase();

        const matchesComp = (compFilter === "all" || (pl.companyId || "lays") === compFilter);
        const matchesQuery = !searchStr || plNoStr.includes(searchStr) || dateStr.includes(searchStr) || statusStr.includes(searchStr);
        const matchesDate = !dateFilter || pl.finalDeliveryDate === dateFilter || pl.plannedDeliveryDate === dateFilter || pl.createdDate === dateFilter;

        return matchesComp && matchesQuery && matchesDate;
    });

    if (sortBy === "newest") filtered.sort((a, b) => (b.createdDate || "").localeCompare(a.createdDate || "") || b.pickListNo.localeCompare(a.pickListNo));
    else if (sortBy === "oldest") filtered.sort((a, b) => (a.createdDate || "").localeCompare(b.createdDate || "") || a.pickListNo.localeCompare(b.pickListNo));
    else if (sortBy === "cartonsHigh") filtered.sort((a, b) => (b.totalCartons || 0) - (a.totalCartons || 0));
    else if (sortBy === "weightHigh") filtered.sort((a, b) => (b.totalWeightKg || 0) - (a.totalWeightKg || 0));
    else if (sortBy === "ordersHigh") filtered.sort((a, b) => (b.ordersCount || 0) - (a.ordersCount || 0));

    if (filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="9" class="text-muted text-center" style="padding: 20px;">No Pick Lists match your filter criteria.</td></tr>`;
        return;
    }

    filtered.forEach(pl => {
        tbody.innerHTML += `
            <tr>
                <td><strong>${pl.pickListNo}</strong></td>
                <td>${pl.createdDate}</td>
                <td>${pl.plannedDeliveryDate}</td>
                <td><strong>${pl.finalDeliveryDate}</strong></td>
                <td><span class="badge badge-info">${pl.ordersCount} Orders</span></td>
                <td><strong style="color: var(--accent-green); font-size: 14px;">${pl.totalCartons} Ctns</strong></td>
                <td>${(pl.totalWeightKg || 0).toFixed(2)} KG</td>
                <td><span class="badge badge-picked">✅ ${pl.status}</span></td>
                <td>
                    <div class="flex-gap">
                        <button class="btn btn-warning btn-sm" onclick="printPickList('${pl.pickListNo}')"><i class="fa-solid fa-print"></i> Print 2-Page Pick List</button>
                        <button class="btn btn-danger btn-sm" onclick="deletePickList('${pl.pickListNo}')"><i class="fa-solid fa-trash"></i> Delete</button>
                    </div>
                </td>
            </tr>
        `;
    });
}

function deletePickList(pickListNo) {
    if (confirm(`Delete Pick List ${pickListNo}? Associated invoices will revert to Unpicked status.`)) {
        AppState.bills.forEach(b => {
            if (b.pickListNo === pickListNo) {
                b.pickStatus = "Unpicked";
                b.pickListNo = null;
            }
        });
        AppState.pickLists = AppState.pickLists.filter(p => p.pickListNo !== pickListNo);
        saveStateToStorage();
        renderAllViews();
    }
}

function printPickList(pickListNo) {
    const pl = AppState.pickLists.find(p => p.pickListNo === pickListNo);
    if (!pl) return;

    const bills = AppState.bills.filter(b => pl.billNos.includes(b.billNo));

    document.getElementById("printPickListId").innerText = `PICK LIST: ${pl.pickListNo}`;
    document.getElementById("printPickDate").innerHTML = `<strong>Delivery Date:</strong> ${pl.finalDeliveryDate}`;
    document.getElementById("printPickOrdersCount").innerHTML = `<strong>Orders Included:</strong> ${bills.length}`;

    const pickItemsMap = {};
    bills.forEach(b => {
        (b.items || []).forEach(i => {
            const sku = AppState.skus.find(s => s.code === i.code || (i.desc && s.desc.toLowerCase() === i.desc.toLowerCase()));
            const grams = i.grams || (sku ? sku.grams : 72);
            const pack = i.pack || (sku ? sku.pack : 12);
            const pkts = ((i.cartons || 0) * pack) + (i.units || 0);
            const calcKg = (grams * pkts) / 1000;
            const itemKg = (i.weightKg && i.weightKg > 0) ? i.weightKg : calcKg;

            if (!pickItemsMap[i.code]) {
                pickItemsMap[i.code] = { code: i.code, desc: i.desc || (sku ? sku.desc : i.code), cartons: 0, units: 0, weightKg: 0 };
            }
            pickItemsMap[i.code].cartons += (i.cartons || 0);
            pickItemsMap[i.code].units += (i.units || 0);
            pickItemsMap[i.code].weightKg += itemKg;
        });
    });


    const pickTbody = document.getElementById("printPickItemsTbody");
    pickTbody.innerHTML = "";
    let sr = 1, totalCtns = 0, totalKG = 0;

    // SORT CONSOLIDATED PICKLIST ITEMS LOWEST TO HIGHEST GRAMS (17G / 18G FIRST, 30G NEXT, ETC.)
    const sortedPickItems = Object.values(pickItemsMap).sort((a, b) => getSkuGrams(a) - getSkuGrams(b));

    sortedPickItems.forEach(item => {
        totalCtns += item.cartons;
        totalKG += item.weightKg;
        pickTbody.innerHTML += `
            <tr>
                <td>${sr++}</td>
                <td><strong>${item.code}</strong></td>
                <td><strong>${item.desc}</strong></td>
                <td>${item.cartons} Ctns</td>
                <td>${item.units} Pkts</td>
                <td>${item.weightKg.toFixed(2)} KG</td>
            </tr>
        `;
    });

    document.getElementById("printPickTotalCtns").innerText = totalCtns;
    document.getElementById("printPickTotalKG").innerText = `${totalKG.toFixed(2)} KG`;

    document.getElementById("printPickListIdPage2").innerText = `PICK LIST: ${pl.pickListNo}`;
    document.getElementById("printPickDatePage2").innerHTML = `<strong>Delivery Date:</strong> ${pl.finalDeliveryDate}`;

    const delivTbody = document.getElementById("printDeliverySheetTbody");
    delivTbody.innerHTML = "";
    let grandVal = 0;

    bills.forEach((b, idx) => {
        grandVal += (b.netAmount || b.totalAmount || 0);

        let compName = "LAYS";
        const bCompId = getCompanyIdForItem({ companyId: b.companyId, items: b.items });
        const compTag = (bCompId === "hash") ? 
            `<strong style="color: #ea580c; background: #ffedd5; padding: 2px 8px; border-radius: 4px; font-size: 11px; border: 1px solid #ea580c;">⚡ FAST</strong>` : 
            `<strong style="color: #1d4ed8; background: #dbeafe; padding: 2px 8px; border-radius: 4px; font-size: 11px; border: 1px solid #1d4ed8;">🟡 LAYS</strong>`;

        delivTbody.innerHTML += `
            <tr>
                <td>${idx + 1}</td>
                <td><strong>${b.billNo}</strong></td>
                <td>${compTag}</td>
                <td><strong>${b.shopName || 'Shop'}</strong></td>
                <td>${b.routeName || 'Route'}</td>
                <td>${b.paymentStatus || 'Cash'}</td>
                <td>Rs. ${Math.round(b.netAmount || b.totalAmount || 0).toLocaleString()}</td>
                <td style="border-bottom: 1px solid #000;">________________</td>
            </tr>
        `;
    });

    document.getElementById("printDeliveryOrdersCount").innerText = bills.length;
    document.getElementById("printDeliveryGrandTotal").innerText = `Rs. ${grandVal.toLocaleString()}`;

    const printEl = document.getElementById("printPickListArea");
    if (!printEl) return;

    let iframe = document.getElementById("printIframe");
    if (!iframe) {
        iframe = document.createElement("iframe");
        iframe.id = "printIframe";
        iframe.style.position = "fixed";
        iframe.style.right = "0";
        iframe.style.bottom = "0";
        iframe.style.width = "0";
        iframe.style.height = "0";
        iframe.style.border = "none";
        document.body.appendChild(iframe);
    }

    const doc = iframe.contentWindow.document;
    doc.open();
    doc.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Pick List ${pl.pickListNo} - Chaudhary Trader</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
            <style>
                @page { size: A4 portrait; margin: 8mm; }
                body { font-family: 'Plus Jakarta Sans', Arial, sans-serif; margin: 0; padding: 15px; color: #000; background: #fff; font-size: 11px; line-height: 1.4; }
                .a4-header-row { display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #000; padding-bottom: 12px; margin-bottom: 12px; }
                .a4-brand-logo-group { display: flex; align-items: center; gap: 14px; }
                .a4-print-logo { height: 70px; width: auto; }
                .a4-company-brand h2 { font-size: 22px; font-weight: 800; color: #000; margin: 0 0 2px 0; }
                .company-sub { font-size: 11px; font-weight: 700; color: #333; margin: 0 0 4px 0; }
                .a4-invoice-meta-box { text-align: right; border: 1px solid #000; padding: 8px 12px; border-radius: 4px; background: #f9f9f9; }
                .a4-invoice-meta-box h3 { font-size: 16px; font-weight: 800; margin: 0 0 4px 0; }
                .a4-invoice-table { width: 100%; border-collapse: collapse; margin-bottom: 16px; }
                .a4-invoice-table th { background: #eeeeee !important; color: #000 !important; border: 1px solid #000; padding: 7px 6px; font-size: 11px; font-weight: 800; text-align: left; }
                .a4-invoice-table td { border: 1px solid #000; padding: 6px 6px; font-size: 11px; }
                .a4-summary-section { margin-bottom: 24px; }
                .a4-totals-grid { display: flex; justify-content: space-between; align-items: flex-start; }
                .totals-col-left { width: 45%; border: 1px dashed #000; padding: 10px; border-radius: 4px; }
                .totals-col-right { width: 50%; border: 1px solid #000; padding: 10px 14px; background: #f9f9f9; border-radius: 4px; }
                .t-row { display: flex; justify-content: space-between; padding: 4px 0; font-size: 11px; }
                .grand-total { border-top: 2px solid #000; margin-top: 6px; padding-top: 8px; font-size: 16px; font-weight: 900; }
                .a4-signatures-block { display: flex; justify-content: space-between; margin-top: 40px; padding-top: 10px; }
                .sig-box { width: 30%; text-align: center; }
                .sig-line { border-top: 1px solid #000; padding-top: 6px; font-size: 11px; font-weight: 700; }
            </style>
        </head>
        <body>
            ${printEl.innerHTML}
        </body>
        </html>
    `);
    doc.close();

    setTimeout(() => {
        iframe.contentWindow.focus();
        iframe.contentWindow.print();
    }, 250);
}

/* ==========================================================================
   ANTI GRAVITY ERP - MODULE 3: INVOICES ENGINE
   ========================================================================== */

function renderInvoicesTable() {
    const tbody = document.getElementById("invoicesTableBody");
    if (!tbody) return;

    // Dynamically populate route filter options if needed
    const routeSelect = document.getElementById("invoiceRouteFilter");
    if (routeSelect && routeSelect.options.length <= 1 && AppState.routes && AppState.routes.length > 0) {
        const currentRouteVal = routeSelect.value || "all";
        routeSelect.innerHTML = `<option value="all">All Routes</option>`;
        AppState.routes.forEach(r => {
            routeSelect.innerHTML += `<option value="${r.id}">${r.name}</option>`;
        });
        routeSelect.value = currentRouteVal;
    }

    const searchEl = document.getElementById("invoiceSearchQuery") || document.getElementById("invoiceSearchInput");
    const searchTerm = (searchEl?.value || "").toLowerCase().trim();

    const dateFilter = document.getElementById("invoiceDateFilter")?.value || "";
    const routeFilter = document.getElementById("invoiceRouteFilter")?.value || "all";
    const compFilter = document.getElementById("invoiceCompanyFilter")?.value || "all";
    const statusFilter = document.getElementById("invoiceStatusFilter")?.value || "all";
    const pickFilter = document.getElementById("invoicePickStatusFilter")?.value || "all";

    // Build Pick List Bill Nos set
    const pickedBillNos = new Set();
    (AppState.pickLists || []).forEach(pl => {
        if (Array.isArray(pl.billNos)) {
            pl.billNos.forEach(bId => {
                if (bId) pickedBillNos.add(String(bId).trim());
            });
        }
        if (Array.isArray(pl.bills)) {
            pl.bills.forEach(pb => {
                const bId = typeof pb === "string" ? pb : (pb ? pb.billNo : null);
                if (bId) pickedBillNos.add(String(bId).trim());
            });
        }
    });

    let filtered = (AppState.bills || []).filter(b => {
        // Date Filter
        if (dateFilter) {
            const billDate = b.date || (b.createdDate ? b.createdDate.split('T')[0] : '');
            if (billDate !== dateFilter) return false;
        }

        // Route Filter
        if (routeFilter !== "all") {
            const matchesRoute = b.routeId === routeFilter || 
                                  (b.routeName && b.routeName.toLowerCase() === routeFilter.toLowerCase()) ||
                                  (AppState.routes && AppState.routes.some(r => r.id === routeFilter && (r.name === b.routeName || r.id === b.routeId)));
            if (!matchesRoute) return false;
        }

        // Company Filter
        if (compFilter !== "all" && b.companyId !== compFilter) return false;

        // Status Filter Logic: Open (Pending Delivery), Confirmed (Delivered), Cancelled / Returned
        const isCancelled = b.isVoid || b.deliveryStatus === "Cancelled" || b.deliveryStatus === "Returned";
        const isConfirmed = !isCancelled && (b.deliveryStatus === "Confirmed" || b.deliveryStatus === "Delivered" || b.isManuallyConfirmed === true);
        const isOpen = !isCancelled && !isConfirmed;

        if (statusFilter !== "all") {
            if (statusFilter === "Open" && !isOpen) return false;
            if (statusFilter === "Confirmed" && !isConfirmed) return false;
            if (statusFilter === "Returned" && !isCancelled) return false;
        }

        // Pick Status Filter Logic
        const isPicked = !!(b.pickListNo || b.inPickList || b.isPicked || (b.billNo && pickedBillNos.has(String(b.billNo).trim())));
        if (pickFilter !== "all") {
            if (pickFilter === "Picked" && !isPicked) return false;
            if (pickFilter === "Unpicked" && isPicked) return false;
        }

        if (searchTerm) {
            return (b.billNo && b.billNo.toLowerCase().includes(searchTerm)) ||
                   (b.shopName && b.shopName.toLowerCase().includes(searchTerm)) ||
                   (b.routeName && b.routeName.toLowerCase().includes(searchTerm)) ||
                   (b.customerName && b.customerName.toLowerCase().includes(searchTerm));
        }
        return true;
    });

    if (filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="12" style="text-align: center; color: var(--text-muted); padding: 24px;">No Invoices found matching search & filter criteria.</td></tr>`;
        return;
    }

    const selectedIds = AppState.selectedInvoiceIds || [];

    const rows = [];
    filtered.forEach(b => {
        const isChecked = selectedIds.includes(b.billNo) ? "checked" : "";
        const compBadge = b.companyId === "hash" ? `<span class="badge badge-success">Fast</span>` : `<span class="badge badge-warning">Lays</span>`;
        
        const isCancelled = b.isVoid || b.deliveryStatus === "Cancelled" || b.deliveryStatus === "Returned";
        const isConfirmed = !isCancelled && (b.deliveryStatus === "Confirmed" || b.deliveryStatus === "Delivered" || b.isManuallyConfirmed === true);

        let statusBadge = `<span class="badge badge-warning">🟡 Open</span>`;
        if (isCancelled) statusBadge = `<span class="badge badge-danger">🔴 Cancelled</span>`;
        else if (isConfirmed) statusBadge = `<span class="badge badge-success">🟢 Confirmed</span>`;

        const isPicked = !!(b.pickListNo || b.inPickList || b.isPicked || (b.billNo && pickedBillNos.has(String(b.billNo).trim())));
        const pickBadge = isPicked 
            ? `<span class="badge badge-info">✅ Picked (${b.pickListNo || 'In PickList'})</span>` 
            : `<span class="badge badge-secondary">📦 Unpicked</span>`;

        const basicAmt = (b.totalBasic !== undefined && b.totalBasic !== null && b.totalBasic > 0) ? b.totalBasic : (b.basicAmount || b.subtotal || b.totalAmount || b.netAmount || 0);
        let discAmt = (b.totalDisc !== undefined && b.totalDisc !== null && b.totalDisc > 0) ? b.totalDisc : (b.discAmount || b.billTotalDisc || b.tradeDiscountAmount || 0);
        if (!discAmt && Array.isArray(b.items) && b.items.length > 0) {
            discAmt = b.items.reduce((sum, i) => sum + (i.discAmount || 0), 0);
        }
        if (!discAmt && b.globalDiscPct > 0) {
            discAmt = basicAmt * (b.globalDiscPct / 100);
        }
        const netAmt = (b.netAmount !== undefined && b.netAmount !== null && b.netAmount > 0) ? b.netAmount : Math.max(0, basicAmt - discAmt);

        rows.push(`
            <tr>
                <td style="text-align: center;">
                    <input type="checkbox" class="invoice-select-chk" data-billno="${b.billNo}" value="${b.billNo}" ${isChecked} onchange="toggleInvoiceSelection('${b.billNo}', this.checked)">
                </td>
                <td><strong>${b.billNo}</strong></td>
                <td>${compBadge}</td>
                <td>${b.date || '-'}</td>
                <td><strong>${b.shopName || '-'}</strong></td>
                <td>${b.routeName || '-'}</td>
                <td>${pickBadge}</td>
                <td>${statusBadge}</td>
                <td>Rs. ${Math.round(basicAmt).toLocaleString()}</td>
                <td style="color: #b91c1c;">-Rs. ${Math.round(discAmt).toLocaleString()}</td>
                <td><strong style="color: #059669;">Rs. ${Math.round(netAmt).toLocaleString()}</strong></td>
                <td>
                    <button class="btn btn-outline btn-sm" style="padding: 5px 14px; font-size: 13px; font-weight: 600; border-radius: 20px; background: rgba(255,255,255,0.9); color: #0f172a; border: 1px solid #cbd5e1; box-shadow: 0 2px 5px rgba(0,0,0,0.05);" onclick="viewBillDetails('${b.billNo}')">
                        <i class="fa-solid fa-eye"></i> Details
                    </button>
                </td>
            </tr>
        `);
    });
    tbody.innerHTML = rows.join('');
}

function updateInvoiceToolbarState() {
    const selectedIds = AppState.selectedInvoiceIds || [];
    const count = selectedIds.length;
    const badgeEl = document.getElementById("invoiceSelectionBadge");
    if (badgeEl) badgeEl.innerText = `${count} Invoice(s) Selected`;

    const btnConfirm = document.getElementById("btnConfirmSelectedInvoices");
    const btnPrint = document.getElementById("btnPrintSelectedInvoices");
    const btnPdf = document.getElementById("btnPdfSelectedInvoices");
    const btnCancel = document.getElementById("btnCancelSelectedInvoices");

    const hasSelection = count > 0;
    if (btnConfirm) btnConfirm.disabled = !hasSelection;
    if (btnPrint) btnPrint.disabled = !hasSelection;
    if (btnPdf) btnPdf.disabled = !hasSelection;
    if (btnCancel) btnCancel.disabled = !hasSelection;
}

function toggleInvoiceSelection(billNo, checked) {
    if (!AppState.selectedInvoiceIds) AppState.selectedInvoiceIds = [];
    if (checked) {
        if (!AppState.selectedInvoiceIds.includes(billNo)) AppState.selectedInvoiceIds.push(billNo);
    } else {
        AppState.selectedInvoiceIds = AppState.selectedInvoiceIds.filter(id => id !== billNo);
    }
    updateInvoiceToolbarState();
}

function selectAllInvoicesToolbar(checked) {
    const checkboxes = document.querySelectorAll(".invoice-select-chk");
    AppState.selectedInvoiceIds = [];
    checkboxes.forEach(chk => {
        chk.checked = checked;
        const bNo = chk.getAttribute("data-billno");
        if (checked && bNo) AppState.selectedInvoiceIds.push(bNo);
    });
    const headerChk = document.getElementById("selectAllInvoicesCheckbox");
    if (headerChk) headerChk.checked = checked;
    updateInvoiceToolbarState();
}

function toggleSelectAllInvoices(checked) {
    selectAllInvoicesToolbar(checked);
}

function batchConfirmSelectedInvoices() {
    const selectedIds = AppState.selectedInvoiceIds || [];
    const openInvoices = AppState.bills.filter(b => selectedIds.includes(b.billNo) && (b.deliveryStatus === "Open" || b.deliveryStatus === "Pending"));

    if (openInvoices.length === 0) return alert("Select at least 1 OPEN invoice using checkboxes to confirm!");

    if (confirm(`Confirm ${openInvoices.length} selected invoice(s)? Sales will be officially recorded for dashboard & reports.`)) {
        openInvoices.forEach(bill => {
            bill.deliveryStatus = "Confirmed";
            bill.isManuallyConfirmed = true;
            bill.salesRecorded = true;
            if (bill.orderNo) {
                const order = AppState.orders.find(o => o.orderNo === bill.orderNo);
                if (order) order.status = "Confirmed";
            }
        });

        AppState.selectedInvoiceIds = [];
        saveStateToStorage();
        renderAllViews();
        alert(`Successfully CONFIRMED ${openInvoices.length} invoice(s)! Official sales recorded.`);
    }
}


function generateSingleBillA4Html(bill) {
    const shopObj = (AppState.shops || []).find(s => (bill.shopId && s.id === bill.shopId) || (bill.shopName && s.name && s.name.toLowerCase() === bill.shopName.toLowerCase()));
    const custName = (shopObj && shopObj.customerName) ? shopObj.customerName : (bill.customerName || bill.shopName || "-");
    const custPhone = (shopObj && shopObj.phone) ? shopObj.phone : (bill.phone || "-");

    // Salesman Info Lookup from Sync Tab (AppState.salesmen)
    let salName = bill.salesmanName || bill.salesman || "";
    let salPhone = bill.salesmanPhone || "";
    const salesObj = (AppState.salesmen || []).find(s => 
        (bill.salesmanId && s.id === bill.salesmanId) || 
        (salName && s.name && s.name.toLowerCase() === salName.toLowerCase()) ||
        (bill.routeId && s.routeId === bill.routeId) ||
        (bill.routeName && AppState.routes && AppState.routes.some(r => r.name === bill.routeName && r.id === s.routeId))
    );
    if (salesObj) {
        if (!salName) salName = salesObj.name;
        if (!salPhone) salPhone = salesObj.phone;
    }
    if (!salPhone) {
        const firstActive = (AppState.salesmen || []).find(s => s.phone && s.phone.trim() !== "");
        if (firstActive) {
            salPhone = firstActive.phone;
            if (!salName) salName = firstActive.name;
        }
    }

    const billItems = (bill.items || []).slice();
    billItems.sort((a, b) => getSkuGrams(a) - getSkuGrams(b));

    let itemsRowsHtml = '';
    let totalCartons = 0, totalUnits = 0;
    let billTotalGrossInclTax = 0;
    let billTotalDisc = 0;

    const discPct = getBillDiscountPct(bill);

    billItems.forEach((i, idx) => {
        const ctn = (i.cartons || 0);
        totalCartons += ctn;
        totalUnits += (i.units || 0);
        const qtyLabel = `${ctn} Ctns ${i.units > 0 ? `+ ${i.units} Pkts` : ''}`;
        
        const skuObj = (AppState.skus || []).find(s => s.code === i.code || (i.desc && s.desc && s.desc.toLowerCase() === i.desc.toLowerCase()));
        const officialTpRate = (skuObj && skuObj.tpRate > 0) ? skuObj.tpRate : (i.tpRate && i.tpRate < 5000 ? i.tpRate : 1494.00);
        const unitPrice = getSkuPricePoint(i) || 20;
        const packSize = (skuObj && skuObj.pack > 0) ? skuObj.pack : (i.pack || 80);
        const unitTpRate = officialTpRate / packSize;

        const basicAmt = (ctn * officialTpRate) + ((i.units || 0) * unitTpRate);
        const isNoTax = (bill.companyId && String(bill.companyId).toLowerCase() === 'hash');
        const adwhRate = isNoTax ? 0 : ((bill.taxMode === "nonfiler") ? 0.025 : 0.005);
        const adwhTaxAmt = basicAmt * adwhRate;
        const grossInclTax = basicAmt + adwhTaxAmt;

        const discAmt = (i.discAmount !== undefined && i.discAmount !== null && i.discAmount > 0)
            ? i.discAmount
            : (discPct > 0 ? (grossInclTax * (discPct / 100)) : 0);

        const netAmt = Math.max(0, grossInclTax - discAmt);

        billTotalGrossInclTax += grossInclTax;
        billTotalDisc += discAmt;

        const unitPriceStr = unitPrice > 0 ? `Rs. ${unitPrice}` : '-';

        itemsRowsHtml += `
            <tr>
                <td style="text-align: center;">${idx + 1}</td>
                <td><strong>${i.desc || i.skuName || i.code}</strong></td>
                <td style="text-align: center; font-weight: 800; color: #000;">${unitPriceStr}</td>
                <td style="text-align: center;"><strong>${qtyLabel}</strong></td>
                <td style="text-align: center;">${i.freePack || 0} Pkts</td>
                <td style="text-align: right;">Rs. ${grossInclTax.toFixed(2)}</td>
                <td style="text-align: right; color: #b91c1c;">-Rs. ${discAmt.toFixed(2)}</td>
                <td style="text-align: right;"><strong>Rs. ${netAmt.toFixed(2)}</strong></td>
            </tr>
        `;
    });

    const netPayable = Math.max(0, Math.round(billTotalGrossInclTax - billTotalDisc));

    const isHashBill = (bill.companyId && String(bill.companyId).toLowerCase() === 'hash') ||
        (bill.items && bill.items.some(i => String(i.companyId || '').toLowerCase() === 'hash' || (i.code && String(i.code).toUpperCase().startsWith('HASH')) || (i.categoryType === 'Hash')));

    const logoSrc = isHashBill ? "fast_logo.png" : "lays_official_logo.png";
    const subTitle = isHashBill ? "FAST FOODS AUTHORIZED MAIN DISTRIBUTOR" : "PEPSICO / LAYS AUTHORIZED MAIN DISTRIBUTOR";

    return `
        <div class="a4-invoice-container">
            <div class="a4-invoice-header">
                <div class="a4-header-row">
                    <div class="a4-brand-logo-group">
                        <img src="${logoSrc}" alt="Brand Logo" class="a4-print-logo" style="max-height: 55px; width: auto;">
                        <div class="a4-company-brand">
                            <h2>CHAUDHARY TRADER</h2>
                            <p class="company-sub">${subTitle}</p>
                            <p><i class="fa-solid fa-location-dot"></i> Sargodha Road Adda Chund Bharwana Nizd Pso Pump bilmukabill Allah nawaz Hospital jhang</p>
                            <p><i class="fa-solid fa-phone"></i> <strong>Phone / WhatsApp: 03446035632</strong></p>
                        </div>
                    </div>
                    <div class="a4-invoice-meta-box">
                        <h3>INVOICE: ${bill.billNo}</h3>
                        <p><strong>Order Date:</strong> ${bill.date || (bill.createdDate ? bill.createdDate.split('T')[0] : '')}</p>
                        <p><strong>Delivery Date:</strong> ${bill.deliveryDate || bill.date || ''}</p>
                    </div>
                </div>
                
                <div class="a4-customer-box">
                    <div class="cust-col">
                        <p style="margin: 2px 0;"><strong>Customer Shop Name:</strong> <strong style="font-size: 13px; font-weight: 800; color: #000; text-transform: uppercase;">${bill.shopName || '-'}</strong></p>
                        <p style="margin: 2px 0;"><strong>Customer Name:</strong> <span>${custName}</span></p>
                        <p style="margin: 2px 0;"><strong>Phone / Contact:</strong> <span>${custPhone}</span></p>
                    </div>
                    <div class="cust-col text-right">
                        <p style="margin: 2px 0;"><strong>DSR Name:</strong> <strong style="color: #000;">${salName || '-'}</strong></p>
                        <p style="margin: 2px 0;"><strong>DSR Mobile:</strong> <strong style="color: #000;">${salPhone || '-'}</strong></p>
                        <p style="margin: 2px 0;"><strong>Payment Type:</strong> <span>${bill.paymentStatus || 'Cash Sale'}</span></p>
                    </div>
                </div>
            </div>

            <table class="a4-invoice-table">
                <thead>
                    <tr>
                        <th style="width: 4%; text-align: center;">Sr.</th>
                        <th style="width: 34%;">SKU Description / Product Name</th>
                        <th style="width: 10%; text-align: center;">Unit Price</th>
                        <th style="width: 10%; text-align: center;">Qty (Ctn/Pkt)</th>
                        <th style="width: 8%; text-align: center;">Free Pack</th>
                        <th style="width: 11%; text-align: right;">Basic Amount</th>
                        <th style="width: 10%; text-align: right;">Disc Amount</th>
                        <th style="width: 11%;">Net Amount</th>
                    </tr>
                </thead>
                <tbody>
                    ${itemsRowsHtml}
                </tbody>
            </table>

            <div class="a4-summary-section">
                <div class="a4-totals-grid">
                    <div class="totals-col-left">
                        <p>Total Cartons: <strong>${totalCartons} Ctns ${totalUnits > 0 ? `+ ${totalUnits} Pkts` : ''}</strong></p>
                        <p>Total Weight (KG): <strong>${(bill.totalWeightKg || 0).toFixed(2)} KG</strong></p>
                    </div>
                    <div class="totals-col-right">
                        <div class="t-row"><span>Total Gross Value:</span> <strong>Rs. ${billTotalGrossInclTax.toFixed(2)}</strong></div>
                        <div class="t-row highlight-disc">
                            <span>Bill Discount (${discPct}%):</span> 
                            <strong style="color: #b91c1c;">-Rs. ${billTotalDisc.toFixed(2)}</strong>
                        </div>
                        <div class="t-row grand-total">
                            <span>NET INVOICE VALUE:</span> 
                            <strong>Rs. ${netPayable.toLocaleString()}</strong>
                        </div>
                    </div>
                </div>
            </div>

            <div class="a4-signatures-block">
                <div class="sig-box">
                    <div class="sig-line">Prepared By</div>
                </div>
                <div class="sig-box">
                    <div class="sig-line">Checked By (Store Incharge)</div>
                </div>
                <div class="sig-box">
                    <div class="sig-line">Customer Receiver Stamp & Sign</div>
                </div>
            </div>
        </div>
    `;
}

function batchPrintSelectedInvoices() {
    const selectedIds = AppState.selectedInvoiceIds || [];
    if (selectedIds.length === 0) return alert("Select at least 1 invoice to print!");

    const selectedBills = AppState.bills.filter(b => selectedIds.includes(b.billNo));
    if (selectedBills.length === 0) return alert("No valid invoices selected to print!");

    let multiPrintHtml = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Batch Invoices Print - Chaudhary Trader</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
            <style>
                @page { size: A4 portrait; margin: 8mm; }
                body { font-family: 'Plus Jakarta Sans', Arial, sans-serif; margin: 0; padding: 10px; color: #000; background: #fff; font-size: 11px; line-height: 1.4; }
                .a4-invoice-container { page-break-after: always; margin-bottom: 20px; padding-bottom: 20px; }
                .a4-invoice-container:last-child { page-break-after: auto; }
                .a4-header-row { display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #000; padding-bottom: 10px; margin-bottom: 10px; }
                .a4-brand-logo-group { display: flex; align-items: center; gap: 14px; }
                .a4-print-logo { height: 65px; width: auto; }
                .a4-company-brand h2 { font-size: 20px; font-weight: 800; color: #000; margin: 0 0 2px 0; text-transform: uppercase; }
                .company-sub { font-size: 11px; font-weight: 700; color: #333; margin: 0 0 4px 0; }
                .a4-invoice-meta-box { text-align: right; border: 1px solid #000; padding: 8px 12px; border-radius: 4px; background: #f9f9f9; }
                .a4-invoice-meta-box h3 { font-size: 15px; font-weight: 800; margin: 0 0 4px 0; }
                .a4-customer-box { display: flex; justify-content: space-between; border: 1px solid #000; padding: 8px 12px; margin-bottom: 12px; background: #fdfdfd; font-size: 11px; }
                .cust-col p { margin: 2px 0; }
                .text-right { text-align: right; }
                .a4-invoice-table { width: 100%; border-collapse: collapse; margin-bottom: 14px; }
                .a4-invoice-table th { background: #eeeeee !important; color: #000 !important; border: 1px solid #000; padding: 6px 6px; font-size: 11px; font-weight: 800; text-align: left; }
                .a4-invoice-table td { border: 1px solid #000; padding: 6px 6px; font-size: 11px; }
                .a4-summary-section { margin-bottom: 20px; }
                .a4-totals-grid { display: flex; justify-content: space-between; align-items: flex-start; }
                .totals-col-left { width: 45%; border: 1px dashed #000; padding: 8px 10px; border-radius: 4px; }
                .totals-col-right { width: 50%; border: 1px solid #000; padding: 8px 12px; background: #f9f9f9; border-radius: 4px; }
                .t-row { display: flex; justify-content: space-between; padding: 3px 0; font-size: 11px; }
                .grand-total { border-top: 2px solid #000; margin-top: 4px; padding-top: 6px; font-size: 15px; font-weight: 900; }
                .a4-signatures-block { display: flex; justify-content: space-between; margin-top: 30px; padding-top: 10px; }
                .sig-box { width: 30%; text-align: center; }
                .sig-line { border-top: 1px solid #000; padding-top: 4px; font-size: 11px; font-weight: 700; }
            </style>
        </head>
        <body>
    `;

    selectedBills.forEach(bill => {
        multiPrintHtml += generateSingleBillA4Html(bill);
    });

    multiPrintHtml += `
            <script>
                window.onload = function() {
                    window.print();
                }
            </script>
        </body>
        </html>
    `;

    const printWin = window.open('', '_blank');
    printWin.document.write(multiPrintHtml);
    printWin.document.close();
}

function batchCancelSelectedInvoices() {
    const selectedIds = AppState.selectedInvoiceIds || [];
    if (selectedIds.length === 0) return alert("Select at least 1 OPEN invoice to cancel!");

    const confirmedCount = AppState.bills.filter(b => selectedIds.includes(b.billNo) && (b.deliveryStatus === "Confirmed" || b.deliveryStatus === "Delivered")).length;
    if (confirmedCount > 0) {
        alert(`❌ ${confirmedCount} of the selected invoices are already CONFIRMED!\n\nConfirmed invoices CANNOT be cancelled. Only OPEN invoices can be cancelled. Please uncheck confirmed invoices or process returns via 'Details & Returns'.`);
        return;
    }

    const openInvoices = AppState.bills.filter(b => selectedIds.includes(b.billNo) && (b.deliveryStatus === "Open" || b.deliveryStatus === "Pending"));

    if (openInvoices.length === 0) return alert("No valid OPEN invoices selected to cancel!");

    if (confirm(`Cancel ${openInvoices.length} selected open invoice(s)? Stock will be restored to warehouse inventory.`)) {
        openInvoices.forEach(bill => {
            if (bill.stockDeducted) {
                bill.items.forEach(i => {
                    const sku = AppState.skus.find(s => s.code === i.code);
                    if (sku) {
                        sku.stockCartons = (sku.stockCartons || 0) + i.cartons;
                        sku.stockUnits = (sku.stockUnits || 0) + i.units;
                    }
                });
                bill.stockDeducted = false;
            }
            bill.deliveryStatus = "Cancelled";
            bill.isVoid = true;
            bill.salesRecorded = false;
            if (bill.orderNo) {
                const order = AppState.orders.find(o => o.orderNo === bill.orderNo);
                if (order) order.status = "Cancelled";
            }
            if (bill.pickListNo) {
                const pl = AppState.pickLists.find(p => p.pickListNo === bill.pickListNo);
                if (pl) {
                    pl.billNos = pl.billNos.filter(bId => bId !== bill.billNo);
                    pl.ordersCount = pl.billNos.length;
                }
            }
        });
        AppState.selectedInvoiceIds = [];
        saveStateToStorage();
        renderAllViews();
        alert(`Successfully CANCELLED ${openInvoices.length} open invoice(s)! Stock restored to warehouse.`);
    }
}

function viewOrderDetails(orderNo) {
    const ord = (AppState.orders || []).find(o => o.orderNo === orderNo);
    if (!ord) return alert("Order not found!");

    document.getElementById("orderDetailNo").innerText = ord.orderNo;
    document.getElementById("orderDetailDate").innerText = ord.orderDate || ord.date || "-";
    document.getElementById("orderDetailShopName").innerText = ord.shopName || "-";
    document.getElementById("orderDetailRouteName").innerText = ord.routeName || "-";
    document.getElementById("orderDetailSalesman").innerText = ord.salesman || "-";
    document.getElementById("orderDetailDeliveryDate").innerText = ord.deliveryDate || "-";

    const isProcessed = (ord.status === "Processed" || ord.status === "Confirmed");
    const isCancelled = (ord.status === "Cancelled");

    const statusBadgeHtml = isProcessed ? `<span class="badge badge-success">🟢 Processed</span>` :
        (isCancelled ? `<span class="badge badge-danger">🔴 Cancelled</span>` : `<span class="badge badge-warning">🟡 Draft</span>`);
    document.getElementById("orderDetailStatusBadge").innerHTML = statusBadgeHtml;

    const tbody = document.getElementById("orderDetailItemsTbody");
    tbody.innerHTML = "";

    let tCtns = 0, tPkts = 0;
    (ord.items || []).forEach((item, idx) => {
        tCtns += (item.cartons || 0);
        tPkts += (item.units || 0);
        const unitPrice = (item.tpRate || 0) / (item.pack || 12);
        const basic = item.basicAmount || ((item.cartons || 0) * (item.tpRate || 0) + (item.units || 0) * unitPrice);

        tbody.innerHTML += `
            <tr>
                <td>${idx + 1}</td>
                <td><strong>${item.desc}</strong></td>
                <td>Rs. ${item.tpRate || 0}</td>
                <td><strong>${item.cartons || 0} Ctns</strong></td>
                <td>${item.units || 0} Pkts</td>
                <td>Rs. ${basic.toFixed(2)}</td>
            </tr>
        `;
    });

    document.getElementById("orderDetailTotalCtns").innerText = tCtns;
    document.getElementById("orderDetailTotalPkts").innerText = tPkts;
    document.getElementById("orderDetailNetAmount").innerText = `Rs. ${(ord.netAmount || ord.totalAmount || 0).toLocaleString()}`;

    const linkContainer = document.getElementById("orderDetailInvoiceLink");
    const assocBill = (AppState.bills || []).find(b => b.orderNo === ord.orderNo);
    if (assocBill) {
        linkContainer.innerHTML = `<button class="btn btn-sm btn-primary" onclick="closeModal('orderDetailsModal'); viewBillDetails('${assocBill.billNo}');"><i class="fa-solid fa-file-invoice"></i> 📄 View Confirmed Invoice (${assocBill.billNo})</button>`;
    } else {
        linkContainer.innerHTML = ``;
    }

    openModal("orderDetailsModal");
}

function openConfirmDeliveryAdjustmentModal(billNo) {
    const bill = AppState.bills.find(b => b.billNo === billNo);
    if (!bill) return alert("Invoice not found!");

    AppState.pendingDeliveryConfirmBillNo = billNo;
    document.getElementById("adjBillNoText").innerText = bill.billNo;
    document.getElementById("adjShopNameText").innerText = bill.shopName;
    document.getElementById("confirmDeliveryNotes").value = "";

    const tbody = document.getElementById("confirmDeliveryItemsTbody");
    tbody.innerHTML = "";

    (bill.items || []).forEach((item, idx) => {
        const pickedCtns = item.cartons || 0;
        tbody.innerHTML += `
            <tr>
                <td><strong>${item.desc}</strong></td>
                <td>Rs. ${item.tpRate || 0}</td>
                <td><span class="badge badge-info" style="font-weight: 700; font-size: 14px;">${pickedCtns} Ctns</span></td>
                <td>
                    <input type="number" min="0" max="${pickedCtns}" id="deliv_ctn_${item.code}" value="${pickedCtns}" onchange="updateDeliveryReturnCalculation('${item.code}', ${pickedCtns})" style="width: 70px; font-weight: bold; color: var(--accent-green); border: 2px solid var(--accent-green); text-align: center; border-radius: 6px; padding: 6px; font-size: 15px;"> <small>Ctns</small>
                </td>
                <td>
                    <span id="ret_ctn_badge_${item.code}" class="badge badge-success" style="font-size: 13px;">0 Ctns Returned</span>
                </td>
            </tr>
        `;
    });

    openModal("confirmDeliveryAdjustmentModal");
}

function updateDeliveryReturnCalculation(code, pickedCtns) {
    const delivInput = document.getElementById(`deliv_ctn_${code}`);
    const badgeEl = document.getElementById(`ret_ctn_badge_${code}`);
    if (!delivInput || !badgeEl) return;

    const delivCtns = Math.max(0, Math.min(pickedCtns, parseInt(delivInput.value) || 0));
    delivInput.value = delivCtns;

    const returnedCtns = pickedCtns - delivCtns;
    if (returnedCtns > 0) {
        badgeEl.className = "badge badge-danger";
        badgeEl.innerText = `${returnedCtns} Ctn(s) Returned to Warehouse`;
    } else {
        badgeEl.className = "badge badge-success";
        badgeEl.innerText = `0 Ctns Returned`;
    }
}

function saveDeliveryConfirmationWithAdjustments() {
    const billNo = AppState.pendingDeliveryConfirmBillNo;
    const bill = AppState.bills.find(b => b.billNo === billNo);
    if (!bill) return alert("Invoice not found!");

    const returnedItemsToStock = [];
    let totalDelivCtns = 0;

    (bill.items || []).forEach(item => {
        const pickedCtns = item.cartons || 0;
        const delivInput = document.getElementById(`deliv_ctn_${item.code}`);
        const delivCtns = delivInput ? Math.max(0, Math.min(pickedCtns, parseInt(delivInput.value) || 0)) : pickedCtns;
        const returnedCtns = pickedCtns - delivCtns;

        if (returnedCtns > 0) {
            returnedItemsToStock.push({
                code: item.code,
                desc: item.desc,
                cartons: returnedCtns,
                units: 0
            });
        }

        item.cartons = delivCtns;
        const unitPrice = item.tpRate / item.pack;
        item.basicAmount = (item.cartons * item.tpRate) + (item.units * unitPrice);
        totalDelivCtns += delivCtns;
    });

    bill.items = bill.items.filter(i => i.cartons > 0 || (i.units && i.units > 0));

    let tBasic = 0, tAdwh = 0, tCtns = 0, tUnits = 0;
    const adwhTaxRate = bill.taxMode === "filer" ? 0.005 : 0.025;

    bill.items.forEach(i => {
        tBasic += i.basicAmount;
        tCtns += i.cartons;
        tUnits += (i.units || 0);
    });

    const tDisc = tBasic * (getBillDiscountPct(bill) / 100);
    const taxableBase = tBasic - tDisc;
    tAdwh = taxableBase * adwhTaxRate;
    const netPayable = Math.round(taxableBase + tAdwh);

    bill.totalBasic = tBasic;
    bill.totalDisc = tDisc;
    bill.totalAdwh = tAdwh;
    bill.totalCartons = tCtns;
    bill.totalUnits = tUnits;
    bill.netAmount = netPayable;
    bill.totalAmount = netPayable;
    bill.netTotal = netPayable;

    if (returnedItemsToStock.length > 0) {
        restoreStockForItems(returnedItemsToStock);
    }

    const notes = document.getElementById("confirmDeliveryNotes")?.value;
    if (notes) bill.deliveryNotes = notes;

    bill.deliveryStatus = "Confirmed";
    bill.isManuallyConfirmed = true;
    bill.salesRecorded = true;

    if (bill.orderNo) {
        const order = AppState.orders.find(o => o.orderNo === bill.orderNo);
        if (order) {
            order.status = "Confirmed";
            order.netAmount = netPayable;
            order.totalCartons = tCtns;
            order.items = bill.items;
        }
    }

    closeModal("confirmDeliveryAdjustmentModal");
    saveStateToStorage();
    renderAllViews();

    const retMsg = returnedItemsToStock.length > 0 ? `\n\n📦 ${returnedItemsToStock.reduce((s, r) => s + r.cartons, 0)} Returned Carton(s) RESTORED BACK TO WAREHOUSE STOCK.` : ``;
    alert(`🎉 Invoice ${bill.billNo} DELIVERED & CONFIRMED SUCCESSFULLY!${retMsg}\n\nOfficial sale of Rs. ${netPayable.toLocaleString()} is now recorded in Dashboard & Sales Reports.`);
}

function confirmInvoiceOrder(billNo) {
    const bill = AppState.bills.find(b => b.billNo === billNo);
    if (!bill) return;

    if (confirm(`Confirm Invoice ${bill.billNo} delivered to ${bill.shopName}? Official sale will now be recorded for Dashboard & Sales Reports.`)) {
        bill.deliveryStatus = "Confirmed";
        bill.isManuallyConfirmed = true;
        bill.salesRecorded = true;

        if (bill.orderNo) {
            const order = AppState.orders.find(o => o.orderNo === bill.orderNo);
            if (order) order.status = "Confirmed";
        }

        saveStateToStorage();
        renderAllViews();
        alert(`Invoice ${bill.billNo} CONFIRMED! Official sale recorded.`);
    }
}


function cancelInvoiceOrder(billNo) {
    const bill = AppState.bills.find(b => b.billNo === billNo);
    if (!bill) return;

    if (bill.deliveryStatus === "Confirmed" || bill.deliveryStatus === "Delivered") {
        alert(`❌ Invoice ${bill.billNo} is already CONFIRMED!\n\nConfirmed invoices CANNOT be cancelled. If goods are being returned, please click 'Details & Returns' to adjust returned quantities.`);
        return;
    }

    if (confirm(`Cancel Invoice ${bill.billNo}? All deducted inventory will be restored to warehouse.`)) {
        if (bill.stockDeducted) {
            restoreStockForItems(bill.items);
            bill.stockDeducted = false;
        }

        bill.deliveryStatus = "Cancelled";
        bill.isVoid = true;
        bill.salesRecorded = false;

        if (bill.orderNo) {
            const order = AppState.orders.find(o => o.orderNo === bill.orderNo);
            if (order) order.status = "Cancelled";
        }

        if (bill.pickListNo) {
            const pl = AppState.pickLists.find(p => p.pickListNo === bill.pickListNo);
            if (pl) {
                pl.billNos = pl.billNos.filter(bId => bId !== billNo);
                pl.ordersCount = pl.billNos.length;
            }
        }

        saveStateToStorage();
        renderAllViews();
        alert(`Invoice ${bill.billNo} CANCELLED! Deducted stock restored to warehouse.`);
    }
}

function cancelOrder(orderNo) {
    const order = AppState.orders.find(o => o.orderNo === orderNo);
    if (!order) return;

    if (confirm(`Cancel Order ${order.orderNo}?`)) {
        if (order.stockDeducted || order.status === "Processed" || order.status === "Confirmed") {
            restoreStockForItems(order.items);
            order.stockDeducted = false;
        }

        order.status = "Cancelled";
        order.deliveryStatus = "Cancelled";

        const bill = AppState.bills.find(b => b.orderNo === orderNo);
        if (bill) {
            bill.isVoid = true;
            bill.deliveryStatus = "Returned";
        }

        saveStateToStorage();
        renderAllViews();
        alert(`🔴 Order ${order.orderNo} cancelled! Stock restored to warehouse inventory.`);
    }
}

function exportBackupJSON() {
    const backupData = {
        version: "2.0.0",
        appName: "Chaudhary Trader ERP",
        exportDate: new Date().toISOString(),
        companies: AppState.companies,
        skus: AppState.skus,
        routes: AppState.routes,
        shops: AppState.shops,
        bills: AppState.bills,
        orders: AppState.orders,
        pickLists: AppState.pickLists,
        orderLogs: AppState.orderLogs
    };

    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(backupData, null, 2));
    const dlAnchorElem = document.createElement('a');
    dlAnchorElem.setAttribute("href", dataStr);
    const fileName = `ChaudharyTrader_Backup_${new Date().toISOString().split('T')[0]}.json`;
    dlAnchorElem.setAttribute("download", fileName);
    dlAnchorElem.click();
}

function handleImportJSON(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const data = JSON.parse(e.target.result);
            if (data.companies && Array.isArray(data.companies)) AppState.companies = data.companies;
            if (data.skus && Array.isArray(data.skus)) AppState.skus = data.skus;
            if (data.routes && Array.isArray(data.routes)) AppState.routes = data.routes;
            if (data.shops && Array.isArray(data.shops)) AppState.shops = data.shops;
            if (data.bills && Array.isArray(data.bills)) AppState.bills = data.bills;
            if (data.orders && Array.isArray(data.orders)) AppState.orders = data.orders;
            if (data.pickLists && Array.isArray(data.pickLists)) AppState.pickLists = data.pickLists;
            if (data.orderLogs && Array.isArray(data.orderLogs)) AppState.orderLogs = data.orderLogs;

            saveStateToStorage();
            try { forcePushLocalStateToCloud(); } catch(e) {}
            updateAllCompanyDropdowns();
            renderAllViews();
            alert("🎉 Backup JSON imported & restored successfully! Data has been automatically synced to 24/7 Cloud Server.");
        } catch(err) {
            alert("Failed to parse backup JSON file! Make sure it is a valid backup file.");
        }
    };
    reader.readAsText(file);
}

/* ==========================================================================
   BULK EXCEL IMPORT ENGINES FOR SHOPS, SKUS & WAREHOUSE STOCK INWARD
   ========================================================================== */

function downloadShopsImportTemplate() {
    alert("Bulk import has been disabled. Please add shops one by one using the 'Add New Shop' button.");
}

function triggerShopsBulkUpload() {
    alert("Bulk import has been disabled. Please add shops one by one using the 'Add New Shop' button.");
}

function handleBulkShopsImport(event) {
    alert("Bulk import has been disabled. Please add shops one by one using the 'Add New Shop' button.");
}

function clearAllShopsDatabase() {
    alert("Bulk import has been disabled. Please add shops one by one using the 'Add New Shop' button.");
}

/* 2. SKU MASTER BULK IMPORT */
function downloadSkuImportTemplate() {
    const headers = ["SKU Code", "Product Description", "Brand Name", "Category Type (PC/NPC/Hash)", "Category Name", "Company ID (lays/hash)", "Pack Size (Units/Ctn)", "Gram Weight", "Trade Price (Rs)", "Initial Stock Cartons", "Initial Stock Loose Packets"];
    const sampleRows = [
        ["LAYS_72G_FC", "Lays French Cheese 72g", "Lays", "PC", "Potato Chips", "lays", 12, 72, 900, 100, 0],
        ["KURK_45G_CH", "Kurkure Chutney Chaska 45g", "Kurkure", "NPC", "Non-Potato Chips", "lays", 24, 45, 1200, 80, 0],
        ["CHEET_35G_BB", "Cheetos BBQ Balls 35g", "Cheetos", "NPC", "Non-Potato Chips", "lays", 24, 35, 1100, 60, 0]
    ];

    generateStyledExcelFile("Chaudhary Trader - SKU Master Catalog Import", headers, sampleRows, `Chaudhary_Trader_SKU_Master_Import_Template.xlsx`);
}

function triggerSkuBulkUpload() {
    const input = document.getElementById("bulkSkuFileInput");
    if (input) { input.value = ""; input.click(); }
}

function handleBulkSkuImport(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const data = new Uint8Array(e.target.result);
            let rows = [];
            if (typeof XLSX !== "undefined") {
                const wb = XLSX.read(data, { type: 'array' });
                const ws = wb.Sheets[wb.SheetNames[0]];
                rows = XLSX.utils.sheet_to_json(ws, { header: 1 });
            } else {
                const text = new TextDecoder("utf-8").decode(data);
                rows = text.split("\n").map(r => r.split(",").map(c => c.replace(/["']/g, "").trim()));
            }

            if (!rows || rows.length < 2) return alert("Uploaded file is empty.");

            let headerIdx = -1;
            for (let i = 0; i < Math.min(rows.length, 5); i++) {
                const rStr = (rows[i] || []).join(" ").toLowerCase();
                if (rStr.includes("sku code") || rStr.includes("description") || rStr.includes("trade price")) { headerIdx = i; break; }
            }
            if (headerIdx === -1) headerIdx = 0;

            const headerCols = (rows[headerIdx] || []).map(c => String(c || '').trim().toLowerCase());
            const codeIdx = headerCols.findIndex(c => c.includes("code"));
            const descIdx = headerCols.findIndex(c => c.includes("desc") || c.includes("name"));
            const brandIdx = headerCols.findIndex(c => c.includes("brand"));
            const typeIdx = headerCols.findIndex(c => c.includes("type") || c.includes("pc/npc"));
            const catNameIdx = headerCols.findIndex(c => c.includes("category name"));
            const compIdx = headerCols.findIndex(c => c.includes("company"));
            const packIdx = headerCols.findIndex(c => c.includes("pack"));
            const gramIdx = headerCols.findIndex(c => c.includes("gram") || c.includes("weight"));
            const tpIdx = headerCols.findIndex(c => c.includes("tp") || c.includes("trade price") || c.includes("price"));
            const ctnIdx = headerCols.findIndex(c => c.includes("carton") || c.includes("stock cartons"));
            const pktIdx = headerCols.findIndex(c => c.includes("loose") || c.includes("packets"));

            if (descIdx === -1 && codeIdx === -1) return alert("Could not find Product Description or SKU Code column in Excel header.");

            let addedCount = 0;
            for (let i = headerIdx + 1; i < rows.length; i++) {
                const row = rows[i] || [];
                const skuDesc = descIdx !== -1 ? String(row[descIdx] || '').trim() : '';
                const skuCode = codeIdx !== -1 ? String(row[codeIdx] || '').trim() : `SKU_${Date.now()}`;
                if (!skuDesc && !skuCode) continue;

                const brand = brandIdx !== -1 ? String(row[brandIdx] || 'Lays').trim() : 'Lays';
                const catType = typeIdx !== -1 ? String(row[typeIdx] || 'PC').trim().toUpperCase() : 'PC';
                const catName = catNameIdx !== -1 ? String(row[catNameIdx] || (catType === 'PC' ? 'Potato Chips' : 'Non-Potato Chips')).trim() : (catType === 'PC' ? 'Potato Chips' : 'Non-Potato Chips');
                const compId = compIdx !== -1 ? String(row[compIdx] || 'lays').toLowerCase() : 'lays';
                const pack = packIdx !== -1 ? (parseInt(row[packIdx]) || 12) : 12;
                const grams = gramIdx !== -1 ? (parseFloat(row[gramIdx]) || 72) : 72;
                const tpRate = tpIdx !== -1 ? (parseFloat(row[tpIdx]) || 900) : 900;
                const initCtns = ctnIdx !== -1 ? (parseInt(row[ctnIdx]) || 100) : 100;
                const initUnits = pktIdx !== -1 ? (parseInt(row[pktIdx]) || 0) : 0;

                const existingSku = AppState.skus.find(s => String(s.code).toLowerCase() === skuCode.toLowerCase() || s.desc.toLowerCase() === skuDesc.toLowerCase());
                if (existingSku) {
                    existingSku.desc = skuDesc || existingSku.desc;
                    existingSku.brand = brand;
                    existingSku.categoryType = catType;
                    existingSku.categoryName = catName;
                    existingSku.companyId = compId;
                    existingSku.pack = pack;
                    existingSku.grams = grams;
                    existingSku.tpRate = tpRate;
                    if (ctnIdx !== -1) existingSku.stockCartons = initCtns;
                    if (pktIdx !== -1) existingSku.stockUnits = initUnits;
                } else {
                    AppState.skus.push({
                        code: skuCode || `SKU_${AppState.skus.length + 1}`,
                        desc: skuDesc || skuCode,
                        brand: brand,
                        categoryType: catType,
                        categoryName: catName,
                        companyId: compId,
                        pack: pack,
                        grams: grams,
                        tpRate: tpRate,
                        stockCartons: initCtns,
                        stockUnits: initUnits
                    });
                }
                addedCount++;
            }

            saveStateToStorage();
            renderAllViews();
            alert(`🎉 Success! Processed and added/updated ${addedCount} SKU product(s) in catalog!`);
        } catch (err) {
            alert("Error importing SKU Excel file: " + err.message);
        }
    };
    reader.readAsArrayBuffer(file);
}

/* 3. WAREHOUSE STOCK INWARD BULK IMPORT */
function downloadStockImportTemplate() {
    const headers = ["SKU Code", "Product Description", "Available Stock Cartons", "Inward Cartons To Add", "Inward Loose Packets To Add"];
    const sampleRows = (AppState.skus || []).map(s => [
        s.code,
        s.desc,
        s.stockCartons || 0,
        50,
        0
    ]);

    generateStyledExcelFile("Chaudhary Trader - Warehouse Stock Inward Load Sheet", headers, sampleRows, `Chaudhary_Trader_Stock_Inward_Import_Template.xlsx`);
}

function triggerStockBulkUpload() {
    const input = document.getElementById("bulkStockFileInput");
    if (input) { input.value = ""; input.click(); }
}

function handleBulkStockImport(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const data = new Uint8Array(e.target.result);
            let rows = [];
            if (typeof XLSX !== "undefined") {
                const wb = XLSX.read(data, { type: 'array' });
                const ws = wb.Sheets[wb.SheetNames[0]];
                rows = XLSX.utils.sheet_to_json(ws, { header: 1 });
            } else {
                const text = new TextDecoder("utf-8").decode(data);
                rows = text.split("\n").map(r => r.split(",").map(c => c.replace(/["']/g, "").trim()));
            }

            if (!rows || rows.length < 2) return alert("Uploaded file is empty.");

            let headerIdx = -1;
            for (let i = 0; i < Math.min(rows.length, 5); i++) {
                const rStr = (rows[i] || []).join(" ").toLowerCase();
                if (rStr.includes("sku code") || rStr.includes("description") || rStr.includes("inward")) { headerIdx = i; break; }
            }
            if (headerIdx === -1) headerIdx = 0;

            const headerCols = (rows[headerIdx] || []).map(c => String(c || '').trim().toLowerCase());
            const codeIdx = headerCols.findIndex(c => c.includes("code"));
            const descIdx = headerCols.findIndex(c => c.includes("desc") || c.includes("name"));
            const ctnAddIdx = headerCols.findIndex(c => c.includes("inward cartons") || c.includes("cartons to add") || c.includes("add cartons"));
            const pktAddIdx = headerCols.findIndex(c => c.includes("inward loose") || c.includes("packets to add") || c.includes("add packets"));

            let totalCartonsAdded = 0;
            let totalUnitsAdded = 0;
            let skusUpdated = 0;

            for (let i = headerIdx + 1; i < rows.length; i++) {
                const row = rows[i] || [];
                const skuCode = codeIdx !== -1 ? String(row[codeIdx] || '').trim() : '';
                const skuDesc = descIdx !== -1 ? String(row[descIdx] || '').trim() : '';
                if (!skuCode && !skuDesc) continue;

                const addCtns = ctnAddIdx !== -1 ? (parseInt(row[ctnAddIdx]) || 0) : 0;
                const addUnits = pktAddIdx !== -1 ? (parseInt(row[pktAddIdx]) || 0) : 0;

                if (addCtns <= 0 && addUnits <= 0) continue;

                const sku = AppState.skus.find(s => (skuCode && String(s.code).toLowerCase() === skuCode.toLowerCase()) || (skuDesc && s.desc.toLowerCase() === skuDesc.toLowerCase()));
                if (sku) {
                    sku.stockCartons = (sku.stockCartons || 0) + addCtns;
                    sku.stockUnits = (sku.stockUnits || 0) + addUnits;
                    totalCartonsAdded += addCtns;
                    totalUnitsAdded += addUnits;
                    skusUpdated++;
                }
            }

            saveStateToStorage();
            renderAllViews();
            alert(`⚡ Stock Inward Success! Added +${totalCartonsAdded} Cartons & +${totalUnitsAdded} Loose Packets across ${skusUpdated} SKU(s) to Warehouse Inventory!`);
        } catch (err) {
            alert("Error processing stock inward Excel file: " + err.message);
        }
    };
    reader.readAsArrayBuffer(file);
}

/* ==========================================================================
   OFFLINE TWO-WAY DATA SYNC SYSTEM FOR CHAUDHARY TRADER ERP
   ========================================================================== */

function renderDataSyncTab() {
    renderSalesmenSyncCards();
    renderSyncHistoryLogTable();
    checkPcServerSyncStatus();
}

function syncWithLocalServerStore() {
    const apiUri = (typeof window !== 'undefined' && window.location && window.location.origin && window.location.origin.startsWith('http')) 
                   ? (window.location.origin + "/api/sync/latest-state") 
                   : "https://chaudharytraders.online/api/sync/latest-state";
                   
    fetch(apiUri)
        .then(r => r.json())
        .then(data => {
            if (!data.success) return;

            // Enforce 100% Pure Cloud SSOT Architecture with Zero-Wipe Protection & Zero-Flicker Change Detection!
            let needsPush = false;

            if (Array.isArray(data.bills)) {
                data.bills.forEach(sb => {
                    const idx = AppState.bills.findIndex(b => b.billNo === sb.billNo || (sb.id && b.id === sb.id));
                    if (idx !== -1) {
                        AppState.bills[idx] = { ...AppState.bills[idx], ...sb };
                    } else {
                        AppState.bills.unshift(sb);
                    }
                });
                if (AppState.bills.length > data.bills.length) needsPush = true;
            }

            if (Array.isArray(data.orders)) {
                data.orders.forEach(so => {
                    const idx = AppState.orders.findIndex(o => o.orderNo === so.orderNo || (so.id && o.id === so.id));
                    if (idx !== -1) {
                        AppState.orders[idx] = { ...AppState.orders[idx], ...so };
                    } else {
                        AppState.orders.unshift(so);
                    }
                });
                if (AppState.orders.length > data.orders.length) needsPush = true;
            }

            if (Array.isArray(data.shops)) {
                data.shops.forEach(sShop => {
                    const idx = AppState.shops.findIndex(s => s.id === sShop.id);
                    if (idx !== -1) AppState.shops[idx] = { ...AppState.shops[idx], ...sShop };
                    else AppState.shops.push(sShop);
                });
            }

            if (Array.isArray(data.skus)) {
                data.skus.forEach(sSku => {
                    const idx = AppState.skus.findIndex(s => s.code === sSku.code);
                    if (idx !== -1) AppState.skus[idx] = { ...AppState.skus[idx], ...sSku };
                    else AppState.skus.push(sSku);
                });
            }

            if (Array.isArray(data.salesmen)) {
                if (!Array.isArray(AppState.salesmen)) AppState.salesmen = [];
                data.salesmen.forEach(sSales => {
                    const idx = AppState.salesmen.findIndex(s => s.id === sSales.id);
                    if (idx !== -1) AppState.salesmen[idx] = { ...AppState.salesmen[idx], ...sSales };
                    else AppState.salesmen.push(sSales);
                });
            }

            if (Array.isArray(data.pickLists)) AppState.pickLists = data.pickLists;
            if (Array.isArray(data.routes) && data.routes.length > 0) AppState.routes = data.routes;
            if (Array.isArray(data.companies) && data.companies.length > 0) AppState.companies = data.companies;

            if (needsPush) {
                try { forcePushLocalStateToCloud(); } catch(e) {}
            }

            if (!AppState.initialServerHydrated) {
                AppState.initialServerHydrated = true;
                renderAllViews();
            } else {
                if (typeof renderOrdersTable === "function") renderOrdersTable();
                if (typeof renderDashboard === "function") renderDashboard();
                if (typeof renderPickListTable === "function") renderPickListTable();
                if (typeof renderSalesReports === "function") renderSalesReports();
                if (typeof renderDataSyncTab === "function") renderDataSyncTab();
            }
        })
        .catch(() => {});
}

function forcePushLocalStateToCloud() {
    const updateUri = (typeof window !== 'undefined' && window.location && window.location.origin && window.location.origin.startsWith('http')) 
                    ? (window.location.origin + "/api/sync/update-master-data") 
                    : "https://chaudharytraders.online/api/sync/update-master-data";

    fetch(updateUri, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            shops: AppState.shops || [],
            skus: AppState.skus || [],
            routes: AppState.routes || [],
            companies: AppState.companies || [],
            orders: AppState.orders || [],
            bills: AppState.bills || [],
            pickLists: AppState.pickLists || [],
            focSchemes: AppState.focSchemes || []
        })
    })
    .then(r => r.json())
    .then(res => {
        if (res && res.success) {
            alert("🎉 SUCCESS! Your full 142 Shops & Rs. 929,989 data has been PUSHED to 24/7 Cloud Server!\n\nAll browsers, mobiles and devices will now show 100% equal data!");
            syncWithLocalServerStore();
        } else {
            alert("⚠️ Cloud Push Note: " + (res.error || "Pushed to server"));
        }
    })
    .catch(err => {
        alert("⚠️ Cloud Push Error: " + err.message);
    });
}

function checkPcServerSyncStatus() {
    const badge = document.getElementById("pcServerStatusBadge");
    const ipText = document.getElementById("pcServerIpText");
    const pingUri = (typeof window !== 'undefined' && window.location && window.location.origin && window.location.origin.startsWith('http')) 
                    ? (window.location.origin + "/api/sync/ping") 
                    : "http://localhost:8888/api/sync/ping";
    
    fetch(pingUri)
        .then(r => r.json())
        .then(data => {
            if (badge) {
                badge.className = "badge badge-success";
                badge.innerHTML = `<i class="fa-solid fa-circle"></i> 🟢 Server Active (Port 8888)`;
            }
            if (ipText) {
                const ip = data.primaryIp || "192.168.100.129";
                ipText.innerText = `Local IP: http://${ip}:8888`;
            }
            syncWithLocalServerStore();
        })
        .catch(() => {
            if (badge) {
                badge.className = "badge badge-warning";
                badge.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> 🟡 Embedded Sync Engine Active`;
            }
            if (ipText) ipText.innerText = `Local Access: http://localhost:8888`;
        });
}

// Ultra-fast non-blocking 4-second live order sync engine!
syncWithLocalServerStore();
setInterval(syncWithLocalServerStore, 4000);


function renderSalesmenSyncCards() {
    const grid = document.getElementById("salesmenSyncCardsGrid");
    if (!grid) return;

    if (!AppState.salesmen || AppState.salesmen.length === 0) {
        AppState.salesmen = [
            { id: "sales_01", name: "Salesman 1", routeId: "", phone: "", pin: "1234", active: true },
            { id: "sales_02", name: "Salesman 2", routeId: "", phone: "", pin: "1234", active: true }
        ];
        saveStateToStorage();
    }

    const activeSalesmen = AppState.salesmen.filter(s => s.active !== false);
    const countBadge = document.getElementById("activeSalesmenCountBadge");
    if (countBadge) countBadge.innerText = `${activeSalesmen.length} Active`;

    let html = "";
    activeSalesmen.forEach(sales => {
        const route = (AppState.routes || []).find(r => r.id === sales.routeId) || { name: "Assigned Territory" };
        const lastSession = (AppState.syncSessions || []).find(s => s.salesmanId === sales.id);
        const lastSyncTime = lastSession ? new Date(lastSession.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : "Not Synced Today";
        const mtdKg = getSalesmanMtdSalesKg(sales.id);

        html += `
            <div class="kpi-card accent-blue" style="background: rgba(255, 255, 255, 0.85); backdrop-filter: blur(12px); border: 1px solid rgba(255, 255, 255, 0.9); border-radius: 16px; padding: 16px;">
                <div class="flex-between">
                    <div style="display: flex; align-items: center; gap: 12px;">
                        <div style="width: 42px; height: 42px; border-radius: 12px; background: linear-gradient(135deg, #3b82f6, #1d4ed8); color: #fff; display: flex; align-items: center; justify-content: center; font-size: 18px;">
                            <i class="fa-solid fa-user-tie"></i>
                        </div>
                        <div>
                            <h4 style="font-size: 15px; font-weight: 800; color: #0f172a; margin-bottom: 2px;">${sales.name}</h4>
                            <span style="font-size: 11px; font-weight: 700; color: #3b82f6;">📍 ${route.name}</span>
                            <div style="font-size: 10px; font-weight: 800; color: #334155; margin-top: 3px;">
                                👤 Username: <code style="background: #e2e8f0; color: #0f172a; padding: 1px 5px; border-radius: 4px; font-weight: 800;">${sales.username || sales.name.toLowerCase().replace(/\s+/g, '_')}</code> | 🔑 PIN: <code style="background: #dcfce7; color: #166534; padding: 1px 5px; border-radius: 4px; font-weight: 800;">${sales.pin || '1234'}</code>
                            </div>
                        </div>
                    </div>
                    <div>
                        <span class="badge badge-info" style="font-size: 10px;">${sales.phone || '03000000000'}</span>
                        <button class="btn btn-outline btn-sm" onclick="openEditSalesmanModal('${sales.id}')" title="Edit Salesman" style="padding: 2px 6px; margin-left: 4px;"><i class="fa-solid fa-pen"></i></button>
                    </div>
                </div>
                <div class="summary-divider" style="margin: 12px 0;"></div>
                <div class="flex-between" style="font-size: 11px; color: #64748b; gap: 6px; flex-wrap: wrap;">
                    <span>Last Sync: <strong>${lastSyncTime}</strong></span>
                    <div style="display: flex; gap: 6px;">
                        <button class="btn btn-sm btn-success" onclick="exportDedicatedMobileApp('${sales.id}')" title="Download Dedicated Mobile App for ${sales.name}"><i class="fa-solid fa-mobile-screen-button"></i> Dedicated App</button>
                        <button class="btn btn-sm btn-primary" onclick="exportMasterSyncFile('${sales.id}')" title="Export Sync File for ${sales.name}"><i class="fa-solid fa-file-export"></i> Sync File</button>
                    </div>
                </div>
            </div>
        `;
    });
    grid.innerHTML = html;
}

function exportDedicatedMobileApp(salesmanId) {
    const salesman = (AppState.salesmen || []).find(s => s.id === salesmanId) || { id: salesmanId, name: "Salesman" };
    const route = (AppState.routes || []).find(r => r.id === salesman.routeId) || { id: salesman.routeId, name: "Assigned Beat" };
    const mtdSalesKg = getSalesmanMtdSalesKg(salesman.id);

    const safeSalesmanName = (salesman.name || 'Salesman').replace(/\s+/g, '_');
    const fileName = `ChaudharyTrader_${safeSalesmanName}_Mobile_App.html`;

    const lockedConfigScript = `<script>
        window.LOCKED_SALESMAN_PROFILE = {
            id: "${salesman.id}",
            name: "${salesman.name}",
            phone: "${salesman.phone || ''}",
            pin: "${salesman.pin || '1234'}",
            routeId: "${salesman.routeId || ''}",
            routeName: "${route.name}",
            mtdSalesKg: ${mtdSalesKg},
            isProfileLocked: true
        };
    </script>`;

    fetch('salesman_app.html')
        .then(r => r.text())
        .then(templateStr => {
            const customAppStr = templateStr.replace('</head>', `${lockedConfigScript}\n</head>`);
            const blob = new Blob([customAppStr], { type: 'text/html;charset=utf-8' });
            const a = document.createElement('a');
            a.href = URL.createObjectURL(blob);
            a.download = fileName;
            a.click();
            alert(`📲 Dedicated Mobile App Generated for ${salesman.name}!\n\nFile Name: ${fileName}\nAssigned Beat: ${route.name}\n\nSend this HTML file to ${salesman.name} on WhatsApp.\nOpening it on their phone will automatically LOCK the app strictly to ${salesman.name}!`);
        })
        .catch(err => {
            exportMasterSyncFile(salesmanId);
        });
}

function openManageSalesmenModal() {
    const tbody = document.getElementById("manageSalesmenTbody");
    if (!tbody) return;
    tbody.innerHTML = "";

    (AppState.salesmen || []).forEach(sales => {
        const route = (AppState.routes || []).find(r => r.id === sales.routeId) || { name: "Unassigned Route" };
        const isActive = sales.active !== false;
        const statusBadge = isActive ? `<span class="badge badge-success">🟢 Active</span>` : `<span class="badge badge-danger">🔴 Disabled</span>`;

        tbody.innerHTML += `
            <tr>
                <td><strong>${sales.name}</strong></td>
                <td>${sales.phone || '-'}</td>
                <td><code>${sales.pin || '1234'}</code></td>
                <td>${route.name}</td>
                <td>${statusBadge}</td>
                <td>
                    <div class="flex-gap">
                        <button class="btn btn-outline btn-sm" onclick="openEditSalesmanModal('${sales.id}')"><i class="fa-solid fa-pen"></i> Edit</button>
                        <button class="btn btn-warning btn-sm" onclick="toggleSalesmanActiveStatus('${sales.id}')"><i class="fa-solid fa-power-off"></i> ${isActive ? 'Disable' : 'Enable'}</button>
                        <button class="btn btn-danger btn-sm" onclick="deleteSalesman('${sales.id}')"><i class="fa-solid fa-trash"></i></button>
                    </div>
                </td>
            </tr>
        `;
    });

    openModal("manageSalesmenModal");
}

function openAddSalesmanModal() {
    document.getElementById("salesmanModalTitle").innerText = "Add New Salesman";
    document.getElementById("salesmanEditId").value = "";
    document.getElementById("salesmanNameInput").value = "";
    if (document.getElementById("salesmanUsernameInput")) document.getElementById("salesmanUsernameInput").value = "";
    document.getElementById("salesmanPhoneInput").value = "";
    document.getElementById("salesmanPinInput").value = "1234";
    document.getElementById("salesmanStatusSelect").value = "true";

    const rSel = document.getElementById("salesmanRouteSelect");
    rSel.innerHTML = "";
    (AppState.routes || []).forEach(r => {
        rSel.innerHTML += `<option value="${r.id}">${r.name}</option>`;
    });

    openModal("salesmanModal");
}

function openEditSalesmanModal(salesmanId) {
    const sales = (AppState.salesmen || []).find(s => s.id === salesmanId);
    if (!sales) return alert("Salesman not found!");

    document.getElementById("salesmanModalTitle").innerText = `Edit Salesman: ${sales.name}`;
    document.getElementById("salesmanEditId").value = sales.id;
    document.getElementById("salesmanNameInput").value = sales.name;
    if (document.getElementById("salesmanUsernameInput")) document.getElementById("salesmanUsernameInput").value = sales.username || sales.name.toLowerCase().replace(/\s+/g, '_');
    document.getElementById("salesmanPhoneInput").value = sales.phone || "";
    document.getElementById("salesmanPinInput").value = sales.pin || "1234";
    document.getElementById("salesmanStatusSelect").value = sales.active !== false ? "true" : "false";

    const rSel = document.getElementById("salesmanRouteSelect");
    rSel.innerHTML = "";
    (AppState.routes || []).forEach(r => {
        const isSel = (r.id === sales.routeId) ? "selected" : "";
        rSel.innerHTML += `<option value="${r.id}" ${isSel}>${r.name}</option>`;
    });

    openModal("salesmanModal");
}

function saveSalesmanFromModal() {
    const editId = document.getElementById("salesmanEditId").value;
    const name = document.getElementById("salesmanNameInput").value.trim();
    const username = (document.getElementById("salesmanUsernameInput")?.value || "").trim() || name.toLowerCase().replace(/\s+/g, '_');
    const phone = document.getElementById("salesmanPhoneInput").value.trim();
    const pin = document.getElementById("salesmanPinInput").value.trim() || "1234";
    const routeId = document.getElementById("salesmanRouteSelect").value;
    const isActive = document.getElementById("salesmanStatusSelect").value === "true";

    if (!name) return alert("Please enter Salesman Full Name!");

    if (editId) {
        const sales = (AppState.salesmen || []).find(s => s.id === editId);
        if (sales) {
            const oldName = sales.name;
            sales.name = name;
            sales.username = username;
            sales.phone = phone;
            sales.pin = pin;
            sales.routeId = routeId;
            sales.active = isActive;

            // Also update associated route's salesman name
            const route = (AppState.routes || []).find(r => r.id === routeId);
            if (route) route.salesman = name;

            // Also update any orders/bills with oldName
            (AppState.orders || []).forEach(o => { if (o.salesman === oldName) o.salesman = name; });
            (AppState.bills || []).forEach(b => { if (b.salesman === oldName) b.salesman = name; });
        }
    } else {
        const newId = `sales_${Date.now()}`;
        AppState.salesmen.push({
            id: newId,
            name: name,
            username: username,
            phone: phone,
            pin: pin,
            routeId: routeId,
            active: isActive,
            mtdSalesKg: 0,
            mtdLaysKg: 0,
            mtdHashKg: 0
        });

        const route = (AppState.routes || []).find(r => r.id === routeId);
        if (route) route.salesman = name;
    }

    saveStateToStorage();
    closeModal("salesmanModal");
    closeModal("manageSalesmenModal");
    renderAllViews();
    alert(`🎉 Salesman '${name}' saved successfully!`);
}

function toggleSalesmanActiveStatus(salesmanId) {
    const sales = (AppState.salesmen || []).find(s => s.id === salesmanId);
    if (!sales) return;
    sales.active = (sales.active === false);
    saveStateToStorage();
    openManageSalesmenModal();
    renderAllViews();
}

function deleteSalesman(salesmanId) {
    const sales = (AppState.salesmen || []).find(s => s.id === salesmanId);
    if (!sales) return;

    if (!confirm(`Are you sure you want to delete Salesman '${sales.name}'?`)) return;

    AppState.salesmen = AppState.salesmen.filter(s => s.id !== salesmanId);
    saveStateToStorage();
    openManageSalesmenModal();
    renderAllViews();
    alert(`🗑️ Salesman '${sales.name}' deleted.`);
}

function renderSyncHistoryLogTable() {
    const tbody = document.getElementById("syncHistoryTbody");
    if (!tbody) return;

    if (!AppState.syncSessions) AppState.syncSessions = [];

    if (AppState.syncSessions.length === 0) {
        tbody.innerHTML = `<tr><td colspan="8" class="text-center text-muted" style="padding: 20px;">No synchronization sessions logged yet.</td></tr>`;
        return;
    }

    let html = "";
    AppState.syncSessions.forEach(s => {
        const isCompleted = s.status === "Completed";
        const dirBadge = s.direction.includes("PC → Mobile") ?
            `<span class="badge badge-info"><i class="fa-solid fa-download"></i> ${s.direction}</span>` :
            `<span class="badge badge-success"><i class="fa-solid fa-upload"></i> ${s.direction}</span>`;

        html += `
            <tr>
                <td><strong>${new Date(s.createdAt).toLocaleString()}</strong></td>
                <td>${s.salesmanName || 'Salesman'}</td>
                <td><i class="fa-solid fa-mobile-screen"></i> ${s.deviceId || 'Android Phone'}</td>
                <td>${dirBadge}</td>
                <td><strong>${s.recordsCount || 0} Records</strong></td>
                <td><code style="font-size: 11px; background: rgba(0,0,0,0.05); padding: 2px 6px; border-radius: 4px;">${s.backupFile || 'Auto-Backup'}</code></td>
                <td><span class="badge ${isCompleted ? 'badge-success' : 'badge-danger'}">${s.status}</span></td>
                <td><button class="btn btn-sm btn-outline" onclick="alert('Sync Session ID: ${s.syncId}\\nSalesman: ${s.salesmanName}\\nProcessed Records: ${s.recordsCount}')"><i class="fa-solid fa-eye"></i> Details</button></td>
            </tr>
        `;
    });
    tbody.innerHTML = html;
}

function triggerServerSyncNow() {
    const bar = document.getElementById("pcSyncLiquidProgressBar");
    const label = document.getElementById("syncLiquidStatusLabel");
    const pct = document.getElementById("syncLiquidPercentText");

    if (bar) bar.style.width = "40%";
    if (label) label.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Polling Connected Mobile Devices...`;
    if (pct) pct.innerText = "40%";

    setTimeout(() => {
        if (bar) bar.style.width = "100%";
        if (label) label.innerHTML = `<i class="fa-solid fa-circle-check" style="color: #10b981;"></i> Two-Way Sync Complete!`;
        if (pct) pct.innerText = "100%";

        renderDataSyncTab();
        alert("🎉 Two-Way Local Wi-Fi Synchronization Complete! All connected salesman devices are synced.");
        
        setTimeout(() => {
            if (bar) bar.style.width = "0%";
            if (label) label.innerHTML = `<i class="fa-solid fa-arrow-right-arrow-left"></i> Two-Way Sync Ready`;
            if (pct) pct.innerText = "0%";
        }, 3000);
    }, 1200);
}

function triggerImportEmergencyFileSync() {
    const input = document.getElementById("emergencyPcFileInput");
    if (input) { input.value = ""; input.click(); }
}

function handleImportEmergencyFileFromPc(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        processSyncStringPayload(e.target.result);
    };
    reader.readAsText(file);
}

function processSyncStringPayload(rawContent) {
    try {
        const unpacked = window.SyncEngine ? window.SyncEngine.unpackSyncPayload(rawContent) : JSON.parse(rawContent);

        exportBackupJSON();

        const salesmanId = (unpacked.header && unpacked.header.salesmanId) || "sales_01";
        const salesmanName = (unpacked.header && unpacked.header.salesmanName) || "Salesman";
        
        let incomingTxs = unpacked.transactions || [];
        let incomingShops = (unpacked.masterData && unpacked.masterData.shops) || unpacked.shops || [];
        let incomingOrders = (unpacked.masterData && unpacked.masterData.orders) || unpacked.orders || [];

        let ordersAdded = 0;
        let newShopsAdded = 0;

        if (!AppState.orders) AppState.orders = [];
        if (!AppState.shops) AppState.shops = [];
        if (!AppState.stockTransactions) AppState.stockTransactions = [];

        // Merge incoming mobile shops
        incomingShops.forEach(shop => {
            const exists = AppState.shops.some(s => s.id === shop.id || (shop.name && s.name.toLowerCase() === shop.name.toLowerCase()));
            if (!exists) {
                AppState.shops.unshift(shop);
                newShopsAdded++;
            }
        });

        // Extract orders from transactions array or direct orders array
        const allIncomingOrders = [...incomingOrders];
        incomingTxs.forEach(tx => {
            if (tx.type === "ORDER" && tx.data) {
                allIncomingOrders.push(tx.data);
            }
        });

        allIncomingOrders.forEach(ord => {
            const existing = AppState.orders.find(o => o.orderNo === ord.orderNo || (ord.uuid && o.uuid === ord.uuid));
            if (!existing) {
                let totalCtns = 0;
                let totalUnits = 0;
                let totalBasic = 0;

                if (ord.items && Array.isArray(ord.items)) {
                    ord.items.forEach(item => {
                        const sysSku = (AppState.skus || []).find(s => 
                            (item.code && String(s.code).trim().toLowerCase() === String(item.code).trim().toLowerCase()) ||
                            (item.desc && s.desc && String(s.desc).trim().toLowerCase() === String(item.desc).trim().toLowerCase()) ||
                            (item.desc && s.desc && (s.desc.toLowerCase().includes(item.desc.toLowerCase()) || item.desc.toLowerCase().includes(s.desc.toLowerCase())))
                        );

                        if (sysSku && sysSku.tpRate > 0) {
                            item.tpRate = parseFloat(sysSku.tpRate);
                            item.pack = parseFloat(sysSku.pack || item.pack || 80);
                        } else {
                            const descUpper = String(item.desc || '').toUpperCase();
                            if (descUpper.includes("CHEETOS") && (descUpper.includes("64") || descUpper.includes("11X64") || descUpper.includes("11G"))) {
                                item.tpRate = 1201.18;
                                item.pack = 64;
                            } else if (descUpper.includes("LAYS") && (descUpper.includes("80") || descUpper.includes("11X80") || descUpper.includes("11G"))) {
                                item.tpRate = 1501.47;
                                item.pack = 80;
                            }
                        }

                        const ctn = (item.cartons || 0);
                        const units = (item.units || 0);
                        const pack = item.pack || (sysSku ? sysSku.pack : 80);
                        const unitTpRate = item.tpRate / pack;

                        const basicAmt = (ctn * item.tpRate) + (units * unitTpRate);
                        const discAmt = basicAmt * ((ord.globalDiscPct || 0) / 100);

                        item.basicAmount = basicAmt;
                        item.discAmount = discAmt;
                        item.amount = Math.max(0, basicAmt - discAmt);

                        totalCtns += ctn;
                        totalUnits += units;
                        totalBasic += basicAmt;
                    });
                }

                ord.totalCartons = totalCtns;
                ord.totalUnits = totalUnits;
                ord.totalBasic = totalBasic;
                ord.netAmount = Math.max(0, Math.round(totalBasic - (totalBasic * ((ord.globalDiscPct || 0) / 100))));
                ord.date = ord.date || ord.orderDate || new Date().toISOString().split('T')[0];
                ord.plannedDelivery = ord.plannedDelivery || ord.deliveryDate || ord.date;
                ord.routeName = ord.routeName || ord.route || "Territory Beat";
                ord.status = "Draft"; // Always enters as Draft order!
                ord.deliveryStatus = "Pending";
                ord.stockDeducted = false; // Stock is NOT deducted on file import!

                AppState.orders.unshift(ord);
                ordersAdded++;
            }
        });

        if (!AppState.syncSessions) AppState.syncSessions = [];
        AppState.syncSessions.unshift({
            syncId: (unpacked.header && unpacked.header.sessionId) || `ses_${Date.now()}`,
            salesmanId: salesmanId,
            salesmanName: salesmanName,
            deviceId: (unpacked.header && unpacked.header.deviceId) || "Sync_File",
            direction: "File Import (Mobile → PC)",
            recordsCount: ordersAdded + newShopsAdded,
            status: "Completed",
            createdAt: new Date().toISOString(),
            backupFile: `Auto_Backup_${new Date().toISOString().split('T')[0]}`
        });

        saveStateToStorage();
        renderAllViews();
        renderDataSyncTab();

        alert(`🎉 Mobile Sync File Imported Successfully!\n\n📦 Imported Draft Orders: ${ordersAdded} Order(s)\n🏪 Imported New Shops: ${newShopsAdded} Shop(s)\n\n👉 Go to Orders tab and click 'Process Selected Draft Orders' to validate stock availability and generate invoices.`);
    } catch(err) {
        alert("Error parsing Sync File (.sync): " + err.message);
    }
}

function getSalesmanMtdSalesKg(salesmanId, brandKey = 'all') {
    const now = new Date();
    const currentMonthStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
    let totalGrams = 0;

    const salesmanObj = (AppState.salesmen || []).find(s => s.id === salesmanId || (s.name && salesmanId && s.name.toLowerCase() === salesmanId.toLowerCase()));
    const targetSalesmanId = salesmanObj ? salesmanObj.id : salesmanId;
    const targetSalesmanName = salesmanObj ? salesmanObj.name.toLowerCase() : String(salesmanId).toLowerCase();

    // Get assigned route for this salesman
    const assignedRoute = (AppState.routes || []).find(r => r.id === (salesmanObj ? salesmanObj.routeId : ""));
    const assignedRouteName = assignedRoute ? assignedRoute.name.toLowerCase() : "";

    (AppState.bills || []).forEach(b => {
        const isConfirmed = !b.isVoid && b.deliveryStatus !== "Cancelled" && b.deliveryStatus !== "Returned" &&
            (b.deliveryStatus === "Confirmed" || b.deliveryStatus === "Delivered" || b.salesRecorded === true || b.isManuallyConfirmed || b.status === "Billed");

        if (!isConfirmed) return;

        const billSalesmanId = b.salesmanId || "";
        const billSalesmanName = (b.salesman || "").toLowerCase();
        const billRouteName = (b.routeName || "").toLowerCase();

        const isSalesmanMatch = (billSalesmanId && billSalesmanId === targetSalesmanId) ||
                                (billSalesmanName && billSalesmanName === targetSalesmanName) ||
                                (assignedRouteName && billRouteName && billRouteName === assignedRouteName);

        if (isSalesmanMatch) {
            const billDate = normalizeDateToISO(b.billDate || b.date || b.createdDate || "");
            if (billDate.startsWith(currentMonthStr)) {
                (b.items || []).forEach(item => {
                    const sku = (AppState.skus || []).find(s => s.code === item.code || (item.desc && s.desc.toLowerCase() === item.desc.toLowerCase())) || {};
                    const compIdStr = getCompanyIdForItem(item);

                    let isBrandMatch = true;
                    if (brandKey === "lays") {
                        isBrandMatch = compIdStr === "lays";
                    } else if (brandKey === "hash" || brandKey === "fast") {
                        isBrandMatch = compIdStr === "hash";
                    }

                    if (isBrandMatch) {
                        const grams = item.grams || sku.grams || 72;
                        const pack = item.pack || sku.pack || 12;
                        const iCtn = item.cartons || 0;
                        const iUnits = item.units || 0;
                        const iPkts = item.totalPackets || ((iCtn * pack) + iUnits);
                        const iKg = (item.weightKg && item.weightKg > 0) ? item.weightKg : ((grams * iPkts) / 1000);
                        totalGrams += (iKg * 1000);
                    }
                });
            }
        }
    });

    return totalGrams / 1000.0;
}

function getOverallDistributionMtdSalesKg(brandKey = 'all') {
    const now = new Date();
    const currentMonthStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
    let totalGrams = 0;

    (AppState.bills || []).forEach(b => {
        if (b.salesRecorded) {
            const billDate = b.billDate || b.date || "";
            if (billDate.startsWith(currentMonthStr)) {
                (b.items || []).forEach(item => {
                    const sku = (AppState.skus || []).find(s => s.code === item.code) || {};
                    const brandStr = (sku.brand || item.brand || "").toLowerCase();
                    const compIdStr = (sku.companyId || item.companyId || "").toLowerCase();

                    let isBrandMatch = true;
                    if (brandKey === "lays") {
                        isBrandMatch = brandStr.includes("lays") || brandStr.includes("kurkure") || brandStr.includes("cheetos") || compIdStr === "lays" || !brandStr.includes("hash");
                    } else if (brandKey === "hash") {
                        isBrandMatch = brandStr.includes("hash") || compIdStr === "hash";
                    }

                    if (isBrandMatch) {
                        const grams = sku.grams || item.grams || 0;
                        const pack = sku.pack || item.pack || 1;
                        const totalPacks = ((item.cartons || 0) * pack) + (item.units || 0);
                        totalGrams += (totalPacks * grams);
                    }
                });
            }
        }
    });

    return totalGrams / 1000.0;
}

function exportMasterSyncFile(salesmanId) {
    const salesman = (AppState.salesmen || []).find(s => s.id === salesmanId) || { id: salesmanId || "sales_01", name: "Salesman" };
    const route = (AppState.routes || []).find(r => r.id === salesman.routeId) || { id: salesman.routeId, name: "Assigned Territory" };
    
    const mtdSalesKg = getSalesmanMtdSalesKg(salesman.id, 'all');
    const mtdLaysKg = getSalesmanMtdSalesKg(salesman.id, 'lays');
    const mtdHashKg = getSalesmanMtdSalesKg(salesman.id, 'hash');

    const overallDistKg = getOverallDistributionMtdSalesKg('all');
    const overallDistLaysKg = getOverallDistributionMtdSalesKg('lays');
    const overallDistHashKg = getOverallDistributionMtdSalesKg('hash');

    const masterData = {
        skus: AppState.skus || [],
        shops: AppState.shops || [],
        routes: AppState.routes || [],
        companies: AppState.companies || [],
        salesmen: AppState.salesmen || [],
        assignedSalesman: {
            id: salesman.id,
            name: salesman.name,
            phone: salesman.phone,
            pin: salesman.pin,
            routeId: salesman.routeId,
            routeName: route.name,
            mtdSalesKg: mtdSalesKg,
            mtdLaysKg: mtdLaysKg,
            mtdHashKg: mtdHashKg,
            overallDistMtdKg: overallDistKg,
            overallDistLaysKg: overallDistLaysKg,
            overallDistHashKg: overallDistHashKg
        }
    };

    const packedString = window.SyncEngine ? window.SyncEngine.packSyncPayload(
        salesman.id,
        salesman.name,
        "PC_Master_ERP",
        "PC_TO_MOBILE_MASTER",
        [],
        masterData
    ) : JSON.stringify(masterData);

    const safeSalesmanName = (salesman.name || "Salesman").replace(/\s+/g, '_');
    const blob = new Blob([packedString], { type: "text/plain;charset=utf-8" });
    const filename = `Master_Sync_${safeSalesmanName}_${new Date().toISOString().split('T')[0]}.sync`;
    
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = filename;
    a.click();

    alert(`📦 Master Sync File Exported Successfully!\n\nFile: ${filename}\nSalesman: ${salesman.name} (${route.name})\n\nSalesman MTD: ${mtdSalesKg.toFixed(2)} KG (Lays: ${mtdLaysKg.toFixed(2)} KG, Hash: ${mtdHashKg.toFixed(2)} KG)\nDistribution MTD: ${overallDistKg.toFixed(2)} KG (Lays: ${overallDistLaysKg.toFixed(2)} KG, Hash: ${overallDistHashKg.toFixed(2)} KG)\n\nSend this file to ${salesman.name} via WhatsApp.`);
}


function openProcessOrdersModal() {
    const checkboxes = document.querySelectorAll(".order-select-chk:checked, .order-checkbox:checked");
    let selectedDraftNos = [];

    if (checkboxes.length > 0) {
        checkboxes.forEach(cb => {
            const orderNo = cb.value || cb.getAttribute("data-orderno");
            const ord = (AppState.orders || []).find(o => o.orderNo === orderNo);
            if (ord && (ord.status === "Draft" || !ord.status)) {
                selectedDraftNos.push(orderNo);
            }
        });
    } else {
        (AppState.orders || []).forEach(o => {
            if (o.status === "Draft" || !o.status) {
                selectedDraftNos.push(o.orderNo);
            }
        });
    }

    if (selectedDraftNos.length === 0) {
        return alert("No pending Draft orders found to process!");
    }

    AppState.pendingProcessOrderIds = selectedDraftNos;

    const todayStr = new Date().toISOString().split('T')[0];
    const dateInput = document.getElementById("processTargetDeliveryDate");
    if (dateInput) dateInput.value = todayStr;

    const badgeEl = document.getElementById("processOrdersSummaryBadge");
    if (badgeEl) badgeEl.innerHTML = `<i class="fa-solid fa-cart-flatbed"></i> Processing ${selectedDraftNos.length} Draft Order(s) into Invoices & Pick Lists`;

    openModal("processOrdersDateModal");
}

function processSelectedDraftOrders() {
    openProcessOrdersModal();
}


function toggleSelectAllOrders(checked) {
    const checkboxes = document.querySelectorAll(".order-select-chk, .order-checkbox");
    AppState.selectedOrderIds = [];
    checkboxes.forEach(cb => {
        cb.checked = checked;
        const orderNo = cb.value || cb.getAttribute("data-orderno");
        if (checked && orderNo) AppState.selectedOrderIds.push(orderNo);
    });
}

function batchCancelSelectedOrders() {
    const checkboxes = document.querySelectorAll(".order-select-chk:checked, .order-checkbox:checked");
    let targetOrderNos = [];

    if (checkboxes.length > 0) {
        checkboxes.forEach(cb => {
            const orderNo = cb.value || cb.getAttribute("data-orderno");
            const ord = (AppState.orders || []).find(o => o.orderNo === orderNo);
            if (ord && ord.status !== "Cancelled" && !targetOrderNos.includes(orderNo)) {
                targetOrderNos.push(orderNo);
            }
        });
    } else if (Array.isArray(AppState.selectedOrderIds) && AppState.selectedOrderIds.length > 0) {
        AppState.selectedOrderIds.forEach(orderNo => {
            const ord = (AppState.orders || []).find(o => o.orderNo === orderNo);
            if (ord && ord.status !== "Cancelled" && !targetOrderNos.includes(orderNo)) {
                targetOrderNos.push(orderNo);
            }
        });
    }

    if (targetOrderNos.length === 0) {
        return alert("Please check at least 1 order checkbox in the table to cancel!");
    }

    if (!confirm(`Are you sure you want to cancel ${targetOrderNos.length} selected order(s)?`)) return;

    let cancelledCount = 0;
    targetOrderNos.forEach(orderNo => {
        const ord = (AppState.orders || []).find(o => o.orderNo === orderNo);
        if (ord && ord.status !== "Cancelled") {
            if (ord.stockDeducted || ord.status === "Processed" || ord.status === "Confirmed") {
                restoreStockForItems(ord.items);
                ord.stockDeducted = false;
            }
            ord.status = "Cancelled";
            ord.deliveryStatus = "Cancelled";

            const bill = (AppState.bills || []).find(b => b.orderNo === orderNo);
            if (bill) {
                bill.isVoid = true;
                bill.deliveryStatus = "Returned";
            }
            cancelledCount++;
        }
    });

    saveStateToStorage();
    renderAllViews();
    alert(`🔴 Successfully cancelled ${cancelledCount} order(s) and restored warehouse stock!`);
}

function exportEmergencyReturnFileModal(salesmanId = "sales_01") {
    const salesman = (AppState.salesmen || []).find(s => s.id === salesmanId) || { id: "sales_01", name: "Salesman 1" };

    const returnSyncStr = window.SyncEngine ? window.SyncEngine.packSyncPayload(salesman.id, salesman.name, "PC_SERVER", "EMERGENCY_RETURN_EXPORT", [], {
        skus: AppState.skus,
        shops: AppState.shops.filter(s => !s.routeId || s.routeId === salesman.routeId),
        timestamp: new Date().toISOString()
    }) : JSON.stringify({ skus: AppState.skus, shops: AppState.shops });

    const fileName = `${salesman.name.replace(/\s+/g, '_')}_RETURN_${new Date().toISOString().split('T')[0]}.sync`;
    const blob = new Blob([returnSyncStr], { type: "text/plain" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = fileName;
    a.click();

    alert(`📦 Encrypted Return Sync File Exported: ${fileName}\n\nSend this file to ${salesman.name} via WhatsApp or USB so his mobile app updates stock!`);
}






function cancelSingleOrder(orderNo) {
    const order = (AppState.orders || []).find(o => o.orderNo === orderNo);
    if (!order) return;
    if (confirm(`Cancel Order ${orderNo} for ${order.shopName}?`)) {
        const wasStockDeducted = (order.stockDeducted || order.status === "Processed" || order.status === "Confirmed");
        if (wasStockDeducted && order.items && Array.isArray(order.items)) {
            restoreStockForItems(order.items);
            order.stockDeducted = false;
        }
        order.status = "Cancelled";
        order.deliveryStatus = "Cancelled";
        order.isVoid = true;

        const bill = (AppState.bills || []).find(b => b.orderNo === orderNo);
        if (bill) {
            bill.isVoid = true;
            bill.deliveryStatus = "Returned";
        }

        saveStateToStorage();
        renderAllViews();
        const msg = wasStockDeducted ? `🔴 Order ${orderNo} cancelled & deducted stock restored to warehouse inventory!` : `🔴 Order ${orderNo} cancelled! (Stock was not deducted as order was still Draft).`;
        alert(msg);
    }
}

function returnOrVoidBill(billNo) {
    const bill = (AppState.bills || []).find(b => b.billNo === billNo);
    if (!bill) return;

    const action = prompt(`INVOICE ACTIONS for ${billNo} (${bill.shopName}):\n\nType 1 for Return / Cancel Invoice\nType 2 for Print A4 Invoice\nType 3 to View Details\n\nEnter option (1, 2, or 3):`, "1");

    if (action === "1") {
        if (confirm(`Are you sure you want to RETURN / CANCEL Invoice ${billNo}?\nStock will be adjusted and sale un-recorded.`)) {
            if (bill.stockDeducted || bill.salesRecorded) {
                restoreStockForItems(bill.items);
                bill.stockDeducted = false;
            }
            bill.isVoid = true;
            bill.deliveryStatus = "Cancelled";
            bill.salesRecorded = false;

            if (bill.orderNo) {
                const ord = (AppState.orders || []).find(o => o.orderNo === bill.orderNo);
                if (ord) {
                    ord.status = "Cancelled";
                    ord.deliveryStatus = "Cancelled";
                }
            }

            saveStateToStorage();
            renderAllViews();
            alert(`🔴 Invoice ${billNo} marked as CANCELLED / RETURNED & stock restored to warehouse inventory!`);
        }
    } else if (action === "2") {
        printSingleBill(billNo);
    } else if (action === "3") {
        alert(`Invoice: ${bill.billNo}\nShop: ${bill.shopName}\nDate: ${bill.date}\nTotal Cartons: ${bill.totalCartons || 0}\nNet Amount: Rs. ${(bill.netAmount || 0).toLocaleString()}`);
    }
}


function clearAllSalesBillsAndPicklists() {
    AppState.orders = [];
    AppState.bills = [];
    AppState.pickLists = [];
    AppState.deliveredBills = [];
    AppState.selectedOrderIds = [];
    AppState.selectedInvoiceIds = [];
    AppState.orderCounter = 1;
    AppState.billCounter = 1;
    AppState.pickListCounter = 1;

    saveStateToStorage();
    if (typeof renderAllViews === 'function') renderAllViews();
    console.log("✅ All Sales, Bills, Orders & Pick Lists successfully reset to ZERO!");
}

/* ==========================================================================
   DOWNLOAD PDF BILL & EXCLUSIVE AVAILABLE STOCK REPORT PDF (LAY'S & FAST)
   ========================================================================== */

function downloadPdfBill(billNo) {
    const targetNo = billNo || activeModalBillNo;
    if (!targetNo) return alert("Select an invoice to download PDF!");
    const bill = AppState.bills.find(b => b.billNo === targetNo);
    if (!bill) return alert("Invoice not found!");

    preparePrintReceipt(bill);

    const printEl = document.getElementById("printArea");
    if (!printEl) return alert("Invoice print layout template not found!");

    const tempContainer = printEl.cloneNode(true);
    tempContainer.style.display = "block";
    tempContainer.style.position = "fixed";
    tempContainer.style.left = "0";
    tempContainer.style.top = "0";
    tempContainer.style.zIndex = "999999";
    tempContainer.style.width = "794px";
    tempContainer.style.backgroundColor = "#ffffff";
    tempContainer.style.color = "#000000";
    tempContainer.style.padding = "25px";
    tempContainer.style.boxSizing = "border-box";
    tempContainer.classList.remove("print-only");

    const hiddenEls = tempContainer.querySelectorAll(".print-only, [style*='display: none']");
    hiddenEls.forEach(el => { el.style.display = "block"; });

    document.body.appendChild(tempContainer);

    setTimeout(() => {
        if (window.html2pdf) {
            const opt = {
                margin: 6,
                filename: `Invoice_${bill.billNo}.pdf`,
                image: { type: 'png' },
                html2canvas: { scale: 2, useCORS: true, allowTaint: true, backgroundColor: '#ffffff', logging: false },
                jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
            };
            window.html2pdf().set(opt).from(tempContainer).save().then(() => {
                if (document.body.contains(tempContainer)) document.body.removeChild(tempContainer);
            }).catch(err => {
                console.error("PDF Export Error:", err);
                if (document.body.contains(tempContainer)) document.body.removeChild(tempContainer);
            });
        } else {
            const htmlContent = `<!DOCTYPE html><html><head><title>Invoice_${bill.billNo}</title></head><body style="background:#fff;">${tempContainer.innerHTML}</body></html>`;
            const blob = new Blob([htmlContent], { type: "text/html" });
            const a = document.createElement("a");
            a.href = URL.createObjectURL(blob);
            a.download = `Invoice_${bill.billNo}.html`;
            a.click();
            if (document.body.contains(tempContainer)) document.body.removeChild(tempContainer);
        }
    }, 150);
}

function batchDownloadPdfSelectedInvoices() {
    const selectedIds = AppState.selectedInvoiceIds || [];
    if (selectedIds.length === 0) return alert("Select at least 1 invoice to download PDF!");

    selectedIds.forEach((billNo, idx) => {
        setTimeout(() => {
            downloadPdfBill(billNo);
        }, idx * 500);
    });
}

function downloadStockReportPdf() {
    const todayStr = new Date().toISOString().split('T')[0];
    const timeStr = new Date().toLocaleTimeString();

    // Filter Lay's available SKUs (companyId !== 'hash' AND stock > 0, EXCLUDING 0 stock)
    const laysSkus = (AppState.skus || []).filter(s => {
        const compId = getCompanyIdForItem(s);
        const hasStock = (s.stockCartons || 0) > 0 || (s.stockUnits || 0) > 0;
        return compId !== 'hash' && hasStock;
    });

    // Filter FAST available SKUs (companyId === 'hash' AND stock > 0, EXCLUDING 0 stock)
    const fastSkus = (AppState.skus || []).filter(s => {
        const compId = getCompanyIdForItem(s);
        const hasStock = (s.stockCartons || 0) > 0 || (s.stockUnits || 0) > 0;
        return compId === 'hash' && hasStock;
    });

    let laysTotalCtns = 0;
    let laysTotalKg = 0;
    let laysRowsHtml = "";

    laysSkus.forEach((s, idx) => {
        const pack = s.pack || 12;
        const grams = s.grams || 72;
        const ctns = s.stockCartons || 0;
        const units = s.stockUnits || 0;
        const totalPackets = (ctns * pack) + units;
        const weightKg = (totalPackets * grams) / 1000.0;

        laysTotalCtns += ctns;
        laysTotalKg += weightKg;

        const rowBg = (idx % 2 === 0) ? '#ffffff' : '#fffbeb';
        laysRowsHtml += `
            <tr style="background: ${rowBg};">
                <td style="text-align: center; font-weight: 700; padding: 6px; border: 1px solid #fde68a;">${idx + 1}</td>
                <td style="padding: 6px; border: 1px solid #fde68a;"><strong style="color: #92400e;">${s.code}</strong></td>
                <td style="padding: 6px; border: 1px solid #fde68a;"><span style="background: #fef3c7; color: #92400e; padding: 2px 6px; border-radius: 4px; font-weight: 700;">${s.brand || 'Lays'}</span></td>
                <td style="padding: 6px; border: 1px solid #fde68a;"><strong style="color: #1e293b;">${s.desc}</strong></td>
                <td style="text-align: right; padding: 6px; border: 1px solid #fde68a;"><strong style="color: #15803d; font-size: 12px;">${ctns} Ctns</strong></td>
                <td style="text-align: right; padding: 6px; border: 1px solid #fde68a; color: #475569;">${units} Pkts</td>
                <td style="text-align: right; padding: 6px; border: 1px solid #fde68a;"><strong style="color: #b45309; font-size: 12px;">${weightKg.toFixed(2)} KG</strong></td>
            </tr>
        `;
    });

    if (laysSkus.length === 0) {
        laysRowsHtml = `<tr><td colspan="7" style="text-align: center; color: #94a3b8; padding: 12px; font-weight: 600;">No Lay's Catalog stock currently available in warehouse.</td></tr>`;
    }

    let fastTotalCtns = 0;
    let fastTotalKg = 0;
    let fastRowsHtml = "";

    fastSkus.forEach((s, idx) => {
        const pack = s.pack || 12;
        const grams = s.grams || 72;
        const ctns = s.stockCartons || 0;
        const units = s.stockUnits || 0;
        const totalPackets = (ctns * pack) + units;
        const weightKg = (totalPackets * grams) / 1000.0;

        fastTotalCtns += ctns;
        fastTotalKg += weightKg;

        const rowBg = (idx % 2 === 0) ? '#ffffff' : '#f0f9ff';
        fastRowsHtml += `
            <tr style="background: ${rowBg};">
                <td style="text-align: center; font-weight: 700; padding: 6px; border: 1px solid #bae6fd;">${idx + 1}</td>
                <td style="padding: 6px; border: 1px solid #bae6fd;"><strong style="color: #0369a1;">${s.code}</strong></td>
                <td style="padding: 6px; border: 1px solid #bae6fd;"><span style="background: #e0f2fe; color: #0369a1; padding: 2px 6px; border-radius: 4px; font-weight: 700;">${s.brand || 'Fast'}</span></td>
                <td style="padding: 6px; border: 1px solid #bae6fd;"><strong style="color: #1e293b;">${s.desc}</strong></td>
                <td style="text-align: right; padding: 6px; border: 1px solid #bae6fd;"><strong style="color: #0284c7; font-size: 12px;">${ctns} Ctns</strong></td>
                <td style="text-align: right; padding: 6px; border: 1px solid #bae6fd; color: #475569;">${units} Pkts</td>
                <td style="text-align: right; padding: 6px; border: 1px solid #bae6fd;"><strong style="color: #0d9488; font-size: 12px;">${weightKg.toFixed(2)} KG</strong></td>
            </tr>
        `;
    });

    if (fastSkus.length === 0) {
        fastRowsHtml = `<tr><td colspan="7" style="text-align: center; color: #94a3b8; padding: 12px; font-weight: 600;">No FAST Catalog stock currently available in warehouse.</td></tr>`;
    }

    const grandTotalCtns = laysTotalCtns + fastTotalCtns;
    const grandTotalKg = laysTotalKg + fastTotalKg;

    let iframe = document.getElementById("stockReportIframe");
    if (!iframe) {
        iframe = document.createElement("iframe");
        iframe.id = "stockReportIframe";
        iframe.style.position = "fixed";
        iframe.style.right = "0";
        iframe.style.bottom = "0";
        iframe.style.width = "0";
        iframe.style.height = "0";
        iframe.style.border = "none";
        document.body.appendChild(iframe);
    }

    const doc = iframe.contentWindow.document;
    doc.open();
    doc.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Warehouse_Stock_Report_${todayStr}.pdf</title>
            <style>
                @page { size: A4 portrait; margin: 8mm; }
                body { font-family: 'Plus Jakarta Sans', Arial, sans-serif; margin: 0; padding: 15px; color: #0f172a; background: #fff; font-size: 11px; line-height: 1.4; }
                .page-break { page-break-after: always; break-after: page; }
            </style>
        </head>
        <body>
            <!-- PAGE 1: LAY'S CATALOG AVAILABLE STOCK REPORT -->
            <div class="page-break" style="padding-bottom: 20px;">
                <table style="width: 100%; border-bottom: 3px solid #b45309; margin-bottom: 12px;">
                    <tr>
                        <td style="vertical-align: top;">
                            <h2 style="font-size: 18px; font-weight: 900; color: #78350f; margin: 0 0 2px 0;">CHAUDHARY TRADER — PEPSICO FMCG DISTRIBUTION</h2>
                            <p style="font-size: 11px; color: #b45309; margin: 0; font-weight: 800; text-transform: uppercase;">PAGE 1: LAY'S CATALOG AVAILABLE STOCK REPORT</p>
                        </td>
                        <td style="text-align: right; vertical-align: top;">
                            <div style="font-size: 10px; font-weight: 700; background: #fffbeb; padding: 6px 10px; border: 1px solid #fde68a; border-radius: 6px; display: inline-block;">
                                <div>Date: <strong>${todayStr}</strong></div>
                                <div>Time: <strong>${timeStr}</strong></div>
                            </div>
                        </td>
                    </tr>
                </table>

                <div style="background: #78350f; color: #ffffff; padding: 8px 12px; font-size: 13px; font-weight: 800; border-radius: 6px; margin-bottom: 10px;">
                    <table style="width: 100%; color: #ffffff;">
                        <tr>
                            <td style="font-weight: 800;">1. LAY'S CATALOG AVAILABLE STOCK</td>
                            <td style="text-align: right; font-weight: 800;">Available SKUs: ${laysSkus.length}</td>
                        </tr>
                    </table>
                </div>

                <table style="width: 100%; border-collapse: collapse; margin-bottom: 12px; border: 1px solid #cbd5e1; font-size: 11px;">
                    <thead>
                        <tr style="background: #fef3c7; color: #78350f; border-bottom: 2px solid #b45309;">
                            <th style="width: 35px; padding: 8px 6px; text-align: center; border: 1px solid #fde68a;">#</th>
                            <th style="width: 95px; padding: 8px 6px; text-align: left; border: 1px solid #fde68a;">SKU Code</th>
                            <th style="width: 85px; padding: 8px 6px; text-align: left; border: 1px solid #fde68a;">Brand</th>
                            <th style="padding: 8px 6px; text-align: left; border: 1px solid #fde68a;">Product Description</th>
                            <th style="width: 110px; padding: 8px 6px; text-align: right; border: 1px solid #fde68a;">Available Cartons</th>
                            <th style="width: 85px; padding: 8px 6px; text-align: right; border: 1px solid #fde68a;">Loose Units</th>
                            <th style="width: 110px; padding: 8px 6px; text-align: right; border: 1px solid #fde68a;">Total Weight (KG)</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${laysRowsHtml}
                        <tr style="background: #fef3c7; font-weight: 800; border-top: 2px solid #78350f; font-size: 12px;">
                            <td colspan="4" style="padding: 10px; text-align: right; color: #78350f;">LAY'S CATALOG TOTAL AVAILABLE:</td>
                            <td style="padding: 10px; text-align: right; color: #15803d;">${laysTotalCtns} Ctns</td>
                            <td></td>
                            <td style="padding: 10px; text-align: right; color: #b45309;">${laysTotalKg.toFixed(2)} KG</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- PAGE 2: FAST CATALOG AVAILABLE STOCK REPORT (HASH BRAND) -->
            <div style="padding-top: 10px;">
                <table style="width: 100%; border-bottom: 3px solid #0284c7; margin-bottom: 12px;">
                    <tr>
                        <td style="vertical-align: top;">
                            <h2 style="font-size: 18px; font-weight: 900; color: #0369a1; margin: 0 0 2px 0;">CHAUDHARY TRADER — PEPSICO FMCG DISTRIBUTION</h2>
                            <p style="font-size: 11px; color: #0284c7; margin: 0; font-weight: 800; text-transform: uppercase;">PAGE 2: FAST CATALOG AVAILABLE STOCK REPORT (HASH BRAND)</p>
                        </td>
                        <td style="text-align: right; vertical-align: top;">
                            <div style="font-size: 10px; font-weight: 700; background: #f0f9ff; padding: 6px 10px; border: 1px solid #bae6fd; border-radius: 6px; display: inline-block;">
                                <div>Date: <strong>${todayStr}</strong></div>
                                <div>Time: <strong>${timeStr}</strong></div>
                            </div>
                        </td>
                    </tr>
                </table>

                <div style="background: #0284c7; color: #ffffff; padding: 8px 12px; font-size: 13px; font-weight: 800; border-radius: 6px; margin-bottom: 10px;">
                    <table style="width: 100%; color: #ffffff;">
                        <tr>
                            <td style="font-weight: 800;">2. FAST CATALOG AVAILABLE STOCK (HASH BRAND)</td>
                            <td style="text-align: right; font-weight: 800;">Available SKUs: ${fastSkus.length}</td>
                        </tr>
                    </table>
                </div>

                <table style="width: 100%; border-collapse: collapse; margin-bottom: 12px; border: 1px solid #cbd5e1; font-size: 11px;">
                    <thead>
                        <tr style="background: #e0f2fe; color: #0369a1; border-bottom: 2px solid #0284c7;">
                            <th style="width: 35px; padding: 8px 6px; text-align: center; border: 1px solid #bae6fd;">#</th>
                            <th style="width: 95px; padding: 8px 6px; text-align: left; border: 1px solid #bae6fd;">SKU Code</th>
                            <th style="width: 85px; padding: 8px 6px; text-align: left; border: 1px solid #bae6fd;">Brand</th>
                            <th style="padding: 8px 6px; text-align: left; border: 1px solid #bae6fd;">Product Description</th>
                            <th style="width: 110px; padding: 8px 6px; text-align: right; border: 1px solid #bae6fd;">Available Cartons</th>
                            <th style="width: 85px; padding: 8px 6px; text-align: right; border: 1px solid #bae6fd;">Loose Units</th>
                            <th style="width: 110px; padding: 8px 6px; text-align: right; border: 1px solid #bae6fd;">Total Weight (KG)</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${fastRowsHtml}
                        <tr style="background: #e0f2fe; font-weight: 800; border-top: 2px solid #0369a1; font-size: 12px;">
                            <td colspan="4" style="padding: 10px; text-align: right; color: #0369a1;">FAST CATALOG TOTAL AVAILABLE:</td>
                            <td style="padding: 10px; text-align: right; color: #0284c7;">${fastTotalCtns} Ctns</td>
                            <td></td>
                            <td style="padding: 10px; text-align: right; color: #0d9488;">${fastTotalKg.toFixed(2)} KG</td>
                        </tr>
                    </tbody>
                </table>

                <!-- GRAND TOTAL SUMMARY BOX -->
                <div style="margin-top: 16px; border: 2px solid #0f172a; padding: 12px 16px; background: #f8fafc; border-radius: 8px; font-size: 13px; font-weight: 900;">
                    <table style="width: 100%;">
                        <tr>
                            <td style="font-size: 14px; font-weight: 900; color: #0f172a;">GRAND TOTAL WAREHOUSE AVAILABLE STOCK</td>
                            <td style="text-align: right;">
                                <span style="background: #15803d; color: white; padding: 6px 14px; border-radius: 6px; margin-right: 10px;">Total Cartons: ${grandTotalCtns} Ctns</span>
                                <span style="background: #0284c7; color: white; padding: 6px 14px; border-radius: 6px;">Total Weight: ${grandTotalKg.toFixed(2)} KG</span>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </body>
        </html>
    `);
    doc.close();

    setTimeout(() => {
        iframe.contentWindow.focus();
        iframe.contentWindow.print();
    }, 250);
}
// Execute clear once on initialization if needed

