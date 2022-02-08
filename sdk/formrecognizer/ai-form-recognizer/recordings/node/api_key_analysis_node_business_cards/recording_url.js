let nock = require('nock');

module.exports.hash = "bc4be6e810a91755d8a90ee9cb11d364";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://endpoint:443', {"encodedQueryParams":true})
  .post('/formrecognizer/documentModels/prebuilt-businessCard:analyze', {"urlSource":"https://storageaccount/testingdata/businessCard.png?sastoken"})
  .query(true)
  .reply(202, "", [
  'Content-Length',
  '0',
  'Operation-Location',
  'https://endpoint/formrecognizer/documentModels/prebuilt-businessCard/analyzeResults/acff0959-4d14-478f-918e-3aa88e103c91?api-version=2022-01-30-preview',
  'x-envoy-upstream-service-time',
  '745',
  'apim-request-id',
  'acff0959-4d14-478f-918e-3aa88e103c91',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Tue, 01 Feb 2022 16:47:39 GMT'
]);

nock('https://endpoint:443', {"encodedQueryParams":true})
  .get('/formrecognizer/documentModels/prebuilt-businessCard/analyzeResults/acff0959-4d14-478f-918e-3aa88e103c91')
  .query(true)
  .reply(200, {"status":"running","createdDateTime":"2022-02-01T16:47:40Z","lastUpdatedDateTime":"2022-02-01T16:47:40Z"}, [
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-envoy-upstream-service-time',
  '11',
  'apim-request-id',
  '4a89cf5e-dbb9-4f93-883d-40688169e714',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Tue, 01 Feb 2022 16:47:41 GMT'
]);

nock('https://endpoint:443', {"encodedQueryParams":true})
  .get('/formrecognizer/documentModels/prebuilt-businessCard/analyzeResults/acff0959-4d14-478f-918e-3aa88e103c91')
  .query(true)
  .reply(200, {"status":"running","createdDateTime":"2022-02-01T16:47:40Z","lastUpdatedDateTime":"2022-02-01T16:47:40Z"}, [
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-envoy-upstream-service-time',
  '13',
  'apim-request-id',
  '34af2209-d948-4b4c-a513-b3e47f6db14f',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Tue, 01 Feb 2022 16:47:41 GMT'
]);

nock('https://endpoint:443', {"encodedQueryParams":true})
  .get('/formrecognizer/documentModels/prebuilt-businessCard/analyzeResults/acff0959-4d14-478f-918e-3aa88e103c91')
  .query(true)
  .reply(200, {"status":"succeeded","createdDateTime":"2022-02-01T16:47:40Z","lastUpdatedDateTime":"2022-02-01T16:47:43Z","analyzeResult":{"apiVersion":"2022-01-30-preview","modelId":"prebuilt-businessCard","stringIndexType":"textElements","content":"Dr. Avery Smith\nSenior Researcher\nCloud & Al Department\navery.smith@contoso.com\nhttps://www.contoso.com/\nmob: +44 (0) 7911 123456\ntel: +44 (0) 20 9876 5432\nfax: +44 (0) 20 6789 2345\nContoso\n2 Kingdom Street\nPaddington, London, W2 6BD","pages":[{"pageNumber":1,"angle":-16.312,"width":4032,"height":3024,"unit":"pixel","words":[{"content":"Dr.","boundingBox":[418,1159,656,1105,684,1211,446,1260],"confidence":0.994,"span":{"offset":0,"length":3}},{"content":"Avery","boundingBox":[681,1099,1104,1000,1132,1108,709,1206],"confidence":0.999,"span":{"offset":4,"length":5}},{"content":"Smith","boundingBox":[1171,984,1558,888,1586,991,1199,1092],"confidence":0.999,"span":{"offset":10,"length":5}},{"content":"Senior","boundingBox":[454,1315,756,1240,772,1312,471,1383],"confidence":1,"span":{"offset":16,"length":6}},{"content":"Researcher","boundingBox":[785,1233,1303,1108,1319,1176,802,1305],"confidence":0.995,"span":{"offset":23,"length":10}},{"content":"Cloud","boundingBox":[477,1412,734,1348,753,1424,495,1483],"confidence":0.999,"span":{"offset":34,"length":5}},{"content":"&","boundingBox":[789,1334,834,1323,853,1400,808,1411],"confidence":0.975,"span":{"offset":40,"length":1}},{"content":"Al","boundingBox":[899,1308,1006,1282,1025,1358,917,1385],"confidence":0.82,"span":{"offset":42,"length":2}},{"content":"Department","boundingBox":[1023,1278,1584,1144,1603,1206,1041,1354],"confidence":0.995,"span":{"offset":45,"length":10}},{"content":"avery.smith@contoso.com","boundingBox":[2106,937,2904,709,2920,764,2122,993],"confidence":0.967,"span":{"offset":56,"length":23}},{"content":"https://www.contoso.com/","boundingBox":[2121,1006,2989,765,3002,819,2143,1072],"confidence":0.967,"span":{"offset":80,"length":24}},{"content":"mob:","boundingBox":[2243,1103,2416,1045,2435,1110,2262,1159],"confidence":0.992,"span":{"offset":105,"length":4}},{"content":"+44","boundingBox":[2429,1041,2544,1005,2563,1073,2448,1106],"confidence":0.982,"span":{"offset":110,"length":3}},{"content":"(0)","boundingBox":[2563,999,2660,969,2679,1038,2582,1067],"confidence":0.983,"span":{"offset":114,"length":3}},{"content":"7911","boundingBox":[2673,965,2827,919,2846,988,2692,1034],"confidence":0.993,"span":{"offset":118,"length":4}},{"content":"123456","boundingBox":[2846,914,3065,853,3084,913,2865,982],"confidence":0.997,"span":{"offset":123,"length":6}},{"content":"tel:","boundingBox":[2339,1162,2454,1125,2477,1191,2363,1225],"confidence":0.994,"span":{"offset":130,"length":4}},{"content":"+44","boundingBox":[2467,1121,2584,1083,2606,1151,2490,1187],"confidence":0.998,"span":{"offset":135,"length":3}},{"content":"(0)","boundingBox":[2600,1078,2697,1047,2718,1117,2622,1146],"confidence":0.994,"span":{"offset":139,"length":3}},{"content":"20","boundingBox":[2710,1043,2783,1020,2804,1090,2732,1112],"confidence":0.998,"span":{"offset":143,"length":2}},{"content":"9876","boundingBox":[2799,1015,2956,966,2976,1035,2820,1085],"confidence":0.99,"span":{"offset":146,"length":4}},{"content":"5432","boundingBox":[2972,962,3125,915,3144,981,2991,1030],"confidence":0.994,"span":{"offset":151,"length":4}},{"content":"fax:","boundingBox":[2375,1242,2507,1200,2526,1268,2394,1305],"confidence":0.993,"span":{"offset":156,"length":4}},{"content":"+44","boundingBox":[2521,1196,2642,1157,2661,1229,2539,1264],"confidence":0.994,"span":{"offset":161,"length":3}},{"content":"(0)","boundingBox":[2657,1152,2759,1120,2778,1193,2676,1224],"confidence":0.994,"span":{"offset":165,"length":3}},{"content":"20","boundingBox":[2772,1116,2845,1093,2864,1166,2791,1189],"confidence":0.998,"span":{"offset":169,"length":2}},{"content":"6789","boundingBox":[2865,1087,3017,1040,3036,1109,2884,1159],"confidence":0.994,"span":{"offset":172,"length":4}},{"content":"2345","boundingBox":[3037,1034,3190,988,3209,1048,3056,1102],"confidence":0.994,"span":{"offset":177,"length":4}},{"content":"Contoso","boundingBox":[1144,1899,2244,1582,2308,1753,1193,2106],"confidence":0.998,"span":{"offset":182,"length":7}},{"content":"2","boundingBox":[1239,2142,1283,2127,1309,2205,1266,2219],"confidence":0.994,"span":{"offset":190,"length":1}},{"content":"Kingdom","boundingBox":[1316,2116,1682,1992,1707,2073,1342,2195],"confidence":0.998,"span":{"offset":192,"length":7}},{"content":"Street","boundingBox":[1751,1969,2024,1876,2048,1947,1776,2048],"confidence":0.999,"span":{"offset":200,"length":6}},{"content":"Paddington,","boundingBox":[1283,2264,1857,2068,1885,2146,1310,2342],"confidence":0.995,"span":{"offset":207,"length":11}},{"content":"London,","boundingBox":[1872,2062,2233,1933,2261,2009,1900,2140],"confidence":0.997,"span":{"offset":219,"length":7}},{"content":"W2","boundingBox":[2248,1927,2388,1876,2416,1952,2276,2004],"confidence":0.997,"span":{"offset":227,"length":2}},{"content":"6BD","boundingBox":[2405,1870,2555,1814,2583,1888,2433,1945],"confidence":0.997,"span":{"offset":230,"length":3}}],"lines":[{"content":"Dr. Avery Smith","boundingBox":[417,1158,1606,876,1631,987,444,1260],"spans":[{"offset":0,"length":15}]},{"content":"Senior Researcher","boundingBox":[452,1314,1314,1105,1330,1174,469,1383],"spans":[{"offset":16,"length":17}]},{"content":"Cloud & Al Department","boundingBox":[476,1411,1586,1144,1603,1214,495,1483],"spans":[{"offset":34,"length":21}]},{"content":"avery.smith@contoso.com","boundingBox":[2104,929,2934,700,2952,754,2119,993],"spans":[{"offset":56,"length":23}]},{"content":"https://www.contoso.com/","boundingBox":[2121,1005,2987,765,3003,824,2140,1072],"spans":[{"offset":80,"length":24}]},{"content":"mob: +44 (0) 7911 123456","boundingBox":[2242,1095,3072,851,3093,912,2260,1159],"spans":[{"offset":105,"length":24}]},{"content":"tel: +44 (0) 20 9876 5432","boundingBox":[2336,1160,3136,911,3155,977,2357,1225],"spans":[{"offset":130,"length":25}]},{"content":"fax: +44 (0) 20 6789 2345","boundingBox":[2373,1241,3195,986,3215,1053,2393,1305],"spans":[{"offset":156,"length":25}]},{"content":"Contoso","boundingBox":[1143,1894,2316,1565,2376,1744,1192,2105],"spans":[{"offset":182,"length":7}]},{"content":"2 Kingdom Street","boundingBox":[1236,2142,2022,1876,2048,1953,1264,2219],"spans":[{"offset":190,"length":16}]},{"content":"Paddington, London, W2 6BD","boundingBox":[1282,2264,2575,1806,2602,1888,1312,2342],"spans":[{"offset":207,"length":26}]}],"spans":[{"offset":0,"length":233}]}],"styles":[],"documents":[{"docType":"businessCard","boundingRegions":[{"pageNumber":1,"boundingBox":[0,0,4032,0,4032,3024,0,3024]}],"fields":{"Addresses":{"type":"array","valueArray":[{"type":"string","valueString":"2 Kingdom Street Paddington, London, W2 6BD","content":"2 Kingdom Street Paddington, London, W2 6BD","boundingRegions":[{"pageNumber":1,"boundingBox":[1239,2142,2512,1689,2586,1896,1313,2350]}],"confidence":0.958,"spans":[{"offset":190,"length":43}]}]},"CompanyNames":{"type":"array","valueArray":[{"type":"string","valueString":"Contoso","content":"Contoso","boundingRegions":[{"pageNumber":1,"boundingBox":[1144,1899,2244,1582,2308,1753,1193,2106]}],"confidence":0.951,"spans":[{"offset":182,"length":7}]}]},"ContactNames":{"type":"array","valueArray":[{"type":"object","valueObject":{"FirstName":{"type":"string","valueString":"Avery","content":"Avery","boundingRegions":[{"pageNumber":1,"boundingBox":[681,1099,1104,1000,1132,1108,709,1206]}],"confidence":0.98,"spans":[{"offset":4,"length":5}]},"LastName":{"type":"string","valueString":"Smith","content":"Smith","boundingRegions":[{"pageNumber":1,"boundingBox":[1171,984,1558,888,1586,991,1199,1092]}],"confidence":0.985,"spans":[{"offset":10,"length":5}]}},"content":"Dr. Avery Smith","boundingRegions":[{"pageNumber":1,"boundingBox":[417,1154,1562,887,1588,1002,443,1268]}],"confidence":0.973,"spans":[{"offset":0,"length":15}]}]},"Departments":{"type":"array","valueArray":[{"type":"string","valueString":"Cloud & Al Department","content":"Cloud & Al Department","boundingRegions":[{"pageNumber":1,"boundingBox":[477,1410,1587,1139,1606,1217,496,1488]}],"confidence":0.868,"spans":[{"offset":34,"length":21}]}]},"Emails":{"type":"array","valueArray":[{"type":"string","valueString":"avery.smith@contoso.com","content":"avery.smith@contoso.com","boundingRegions":[{"pageNumber":1,"boundingBox":[2106,937,2904,709,2920,764,2122,993]}],"confidence":0.964,"spans":[{"offset":56,"length":23}]}]},"Faxes":{"type":"array","valueArray":[{"type":"phoneNumber","content":"+44 (0) 20 6789 2345","boundingRegions":[{"pageNumber":1,"boundingBox":[2518,1196,3189,984,3212,1056,2540,1268]}],"confidence":0.987,"spans":[{"offset":161,"length":20}]}]},"JobTitles":{"type":"array","valueArray":[{"type":"string","valueString":"Senior Researcher","content":"Senior Researcher","boundingRegions":[{"pageNumber":1,"boundingBox":[454,1313,1303,1108,1320,1180,471,1385]}],"confidence":0.98,"spans":[{"offset":16,"length":17}]}]},"Locale":{"type":"string","valueString":"en-US","confidence":1},"MobilePhones":{"type":"array","valueArray":[{"type":"phoneNumber","content":"+44 (0) 7911 123456","boundingRegions":[{"pageNumber":1,"boundingBox":[2428,1038,3065,848,3085,917,2448,1107]}],"confidence":0.984,"spans":[{"offset":110,"length":19}]}]},"Websites":{"type":"array","valueArray":[{"type":"string","valueString":"https://www.contoso.com/","content":"https://www.contoso.com/","boundingRegions":[{"pageNumber":1,"boundingBox":[2121,1006,2989,765,3002,819,2143,1072]}],"confidence":0.977,"spans":[{"offset":80,"length":24}]}]},"WorkPhones":{"type":"array","valueArray":[{"type":"phoneNumber","content":"+44 (0) 20 9876 5432","boundingRegions":[{"pageNumber":1,"boundingBox":[2466,1119,3124,913,3146,983,2488,1189]}],"confidence":0.971,"spans":[{"offset":135,"length":20}]}]}},"confidence":1,"spans":[{"offset":0,"length":233}]}]}}, [
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-envoy-upstream-service-time',
  '29',
  'apim-request-id',
  'ace915a0-29b9-48d0-b2de-8981490a32b0',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Tue, 01 Feb 2022 16:47:46 GMT'
]);
