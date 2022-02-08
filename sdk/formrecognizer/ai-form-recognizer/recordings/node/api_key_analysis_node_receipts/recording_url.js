let nock = require('nock');

module.exports.hash = "6fca080e5d5a22c67d314cb254f75622";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://endpoint:443', {"encodedQueryParams":true})
  .post('/formrecognizer/documentModels/prebuilt-receipt:analyze', {"urlSource":"https://storageaccount/testingdata/contoso-allinone.jpg?sastoken"})
  .query(true)
  .reply(202, "", [
  'Content-Length',
  '0',
  'Operation-Location',
  'https://endpoint/formrecognizer/documentModels/prebuilt-receipt/analyzeResults/0a064544-00f0-401f-aca0-80e43e66db35?api-version=2022-01-30-preview',
  'x-envoy-upstream-service-time',
  '172',
  'apim-request-id',
  '0a064544-00f0-401f-aca0-80e43e66db35',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Tue, 01 Feb 2022 16:47:01 GMT'
]);

nock('https://endpoint:443', {"encodedQueryParams":true})
  .get('/formrecognizer/documentModels/prebuilt-receipt/analyzeResults/0a064544-00f0-401f-aca0-80e43e66db35')
  .query(true)
  .reply(200, {"status":"running","createdDateTime":"2022-02-01T16:47:01Z","lastUpdatedDateTime":"2022-02-01T16:47:01Z"}, [
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-envoy-upstream-service-time',
  '11',
  'apim-request-id',
  '46f01dce-24c8-47fa-98b8-0fdfbf64353e',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Tue, 01 Feb 2022 16:47:01 GMT'
]);

nock('https://endpoint:443', {"encodedQueryParams":true})
  .get('/formrecognizer/documentModels/prebuilt-receipt/analyzeResults/0a064544-00f0-401f-aca0-80e43e66db35')
  .query(true)
  .reply(200, {"status":"running","createdDateTime":"2022-02-01T16:47:01Z","lastUpdatedDateTime":"2022-02-01T16:47:01Z"}, [
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-envoy-upstream-service-time',
  '10',
  'apim-request-id',
  'a0d07014-9cbd-40b8-8968-12d2038135ed',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Tue, 01 Feb 2022 16:47:01 GMT'
]);

nock('https://endpoint:443', {"encodedQueryParams":true})
  .get('/formrecognizer/documentModels/prebuilt-receipt/analyzeResults/0a064544-00f0-401f-aca0-80e43e66db35')
  .query(true)
  .reply(200, {"status":"succeeded","createdDateTime":"2022-02-01T16:47:01Z","lastUpdatedDateTime":"2022-02-01T16:47:03Z","analyzeResult":{"apiVersion":"2022-01-30-preview","modelId":"prebuilt-receipt","stringIndexType":"textElements","content":"Contoso\nContoso\n123 Main Street\nRedmond, WA 98052\n987-654-3210\n6/10/2019 13:59\nSales Associate: Paul\n- -\n-\n-\n1 Cappuccino\n1 BACON & EGGS\n===\n$2.20\nSunny-side-up\n$9.5\n--- -\n-\n----\nSub-Total\nTax\nTip\nTotal\n$ 11.70\n$ 1.17\n$ 1.63\n$14,50","pages":[{"pageNumber":1,"angle":0.2836,"width":1688,"height":3000,"unit":"pixel","words":[{"content":"Contoso","boundingBox":[638,510,1056,471,1072,551,638,598],"confidence":0.998,"span":{"offset":0,"length":7}},{"content":"Contoso","boundingBox":[310,573,517,629,502,686,298,633],"confidence":0.935,"span":{"offset":8,"length":7}},{"content":"123","boundingBox":[302,677,385,698,375,759,291,739],"confidence":0.998,"span":{"offset":16,"length":3}},{"content":"Main","boundingBox":[399,702,524,731,514,791,388,762],"confidence":0.994,"span":{"offset":20,"length":4}},{"content":"Street","boundingBox":[535,734,694,768,686,827,526,794],"confidence":0.999,"span":{"offset":25,"length":6}},{"content":"Redmond,","boundingBox":[295,786,550,838,544,901,285,847],"confidence":0.724,"span":{"offset":32,"length":8}},{"content":"WA","boundingBox":[562,840,643,849,639,912,556,903],"confidence":0.997,"span":{"offset":41,"length":2}},{"content":"98052","boundingBox":[656,850,817,858,816,918,652,913],"confidence":0.994,"span":{"offset":44,"length":5}},{"content":"987-654-3210","boundingBox":[280,1006,648,1055,644,1119,272,1068],"confidence":0.988,"span":{"offset":50,"length":12}},{"content":"6/10/2019","boundingBox":[264,1223,522,1246,515,1334,255,1312],"confidence":0.996,"span":{"offset":63,"length":9}},{"content":"13:59","boundingBox":[539,1247,680,1258,674,1340,532,1336],"confidence":0.999,"span":{"offset":73,"length":5}},{"content":"Sales","boundingBox":[258,1346,415,1358,411,1434,252,1418],"confidence":0.997,"span":{"offset":79,"length":5}},{"content":"Associate:","boundingBox":[429,1359,706,1374,703,1448,425,1435],"confidence":0.992,"span":{"offset":85,"length":10}},{"content":"Paul","boundingBox":[720,1374,854,1378,852,1447,718,1448],"confidence":0.971,"span":{"offset":96,"length":4}},{"content":"-","boundingBox":[255,1501,262,1501,261,1513,254,1513],"confidence":0.749,"span":{"offset":101,"length":1}},{"content":"-","boundingBox":[288,1502,295,1503,293,1514,287,1514],"confidence":0.685,"span":{"offset":103,"length":1}},{"content":"-","boundingBox":[1167,1503,1175,1502,1175,1513,1168,1514],"confidence":0.918,"span":{"offset":105,"length":1}},{"content":"-","boundingBox":[748,1525,755,1525,754,1535,747,1535],"confidence":0.798,"span":{"offset":107,"length":1}},{"content":"1","boundingBox":[248,1579,291,1582,284,1673,241,1670],"confidence":0.96,"span":{"offset":109,"length":1}},{"content":"Cappuccino","boundingBox":[310,1583,659,1596,657,1693,303,1675],"confidence":0.955,"span":{"offset":111,"length":10}},{"content":"1","boundingBox":[229,1837,275,1838,276,1919,231,1919],"confidence":0.994,"span":{"offset":122,"length":1}},{"content":"BACON","boundingBox":[299,1838,502,1838,503,1920,300,1920],"confidence":0.999,"span":{"offset":124,"length":5}},{"content":"&","boundingBox":[518,1838,561,1839,562,1920,519,1920],"confidence":0.98,"span":{"offset":130,"length":1}},{"content":"EGGS","boundingBox":[577,1839,734,1839,735,1919,578,1920],"confidence":0.994,"span":{"offset":132,"length":4}},{"content":"===","boundingBox":[1208,1499,1267,1496,1267,1508,1209,1511],"confidence":0.576,"span":{"offset":137,"length":3}},{"content":"$2.20","boundingBox":[1110,1581,1267,1575,1270,1650,1113,1657],"confidence":0.994,"span":{"offset":141,"length":5}},{"content":"Sunny-side-up","boundingBox":[343,1972,746,1973,747,2063,346,2061],"confidence":0.994,"span":{"offset":147,"length":13}},{"content":"$9.5","boundingBox":[1135,1956,1261,1952,1264,2036,1138,2040],"confidence":0.991,"span":{"offset":161,"length":4}},{"content":"---","boundingBox":[1197,2129,1269,2129,1269,2143,1197,2144],"confidence":0.762,"span":{"offset":166,"length":3}},{"content":"-","boundingBox":[1296,2129,1303,2129,1303,2142,1295,2142],"confidence":0.94,"span":{"offset":170,"length":1}},{"content":"-","boundingBox":[224,2146,232,2146,232,2158,224,2158],"confidence":0.966,"span":{"offset":172,"length":1}},{"content":"----","boundingBox":[257,2145,367,2143,367,2155,257,2157],"confidence":0.712,"span":{"offset":174,"length":4}},{"content":"Sub-Total","boundingBox":[436,2234,761,2220,765,2315,442,2325],"confidence":0.992,"span":{"offset":179,"length":9}},{"content":"Tax","boundingBox":[439,2366,561,2361,565,2455,443,2460],"confidence":0.998,"span":{"offset":189,"length":3}},{"content":"Tip","boundingBox":[440,2499,543,2498,544,2613,441,2614],"confidence":0.997,"span":{"offset":193,"length":3}},{"content":"Total","boundingBox":[430,2655,604,2645,610,2735,436,2747],"confidence":0.991,"span":{"offset":197,"length":5}},{"content":"$","boundingBox":[1085,2224,1118,2223,1121,2322,1088,2323],"confidence":0.917,"span":{"offset":203,"length":1}},{"content":"11.70","boundingBox":[1138,2222,1299,2221,1303,2316,1141,2321],"confidence":0.999,"span":{"offset":205,"length":5}},{"content":"$","boundingBox":[1129,2355,1171,2355,1170,2452,1128,2452],"confidence":0.941,"span":{"offset":211,"length":1}},{"content":"1.17","boundingBox":[1190,2356,1304,2357,1302,2454,1189,2453],"confidence":0.993,"span":{"offset":213,"length":4}},{"content":"$","boundingBox":[1023,2470,1039,2470,1033,2586,1019,2585],"confidence":0.922,"span":{"offset":218,"length":1}},{"content":"1.63","boundingBox":[1058,2470,1276,2480,1271,2597,1053,2587],"confidence":0.442,"span":{"offset":220,"length":4}},{"content":"$14,50","boundingBox":[1032,2625,1376,2637,1371,2759,1030,2744],"confidence":0.841,"span":{"offset":225,"length":6}}],"lines":[{"content":"Contoso","boundingBox":[634,510,1089,466,1098,558,636,598],"spans":[{"offset":0,"length":7}]},{"content":"Contoso","boundingBox":[309,573,517,628,501,686,298,630],"spans":[{"offset":8,"length":7}]},{"content":"123 Main Street","boundingBox":[300,676,695,769,685,827,288,737],"spans":[{"offset":16,"length":15}]},{"content":"Redmond, WA 98052","boundingBox":[293,786,818,859,814,918,284,864],"spans":[{"offset":32,"length":17}]},{"content":"987-654-3210","boundingBox":[280,1005,648,1055,643,1119,271,1067],"spans":[{"offset":50,"length":12}]},{"content":"6/10/2019 13:59","boundingBox":[259,1222,679,1254,672,1340,252,1313],"spans":[{"offset":63,"length":15}]},{"content":"Sales Associate: Paul","boundingBox":[256,1346,855,1376,852,1448,252,1426],"spans":[{"offset":79,"length":21}]},{"content":"- -","boundingBox":[253,1500,310,1503,309,1515,253,1512],"spans":[{"offset":101,"length":3}]},{"content":"-","boundingBox":[1157,1503,1189,1502,1189,1513,1158,1514],"spans":[{"offset":105,"length":1}]},{"content":"-","boundingBox":[741,1525,767,1526,766,1536,741,1534],"spans":[{"offset":107,"length":1}]},{"content":"1 Cappuccino","boundingBox":[242,1578,661,1596,658,1693,237,1673],"spans":[{"offset":109,"length":12}]},{"content":"1 BACON & EGGS","boundingBox":[226,1837,737,1838,737,1920,226,1918],"spans":[{"offset":122,"length":14}]},{"content":"===","boundingBox":[1207,1498,1281,1495,1281,1507,1208,1511],"spans":[{"offset":137,"length":3}]},{"content":"$2.20","boundingBox":[1110,1581,1268,1575,1269,1650,1113,1657],"spans":[{"offset":141,"length":5}]},{"content":"Sunny-side-up","boundingBox":[343,1972,747,1973,747,2063,343,2060],"spans":[{"offset":147,"length":13}]},{"content":"$9.5","boundingBox":[1133,1957,1265,1952,1266,2036,1136,2040],"spans":[{"offset":161,"length":4}]},{"content":"--- -","boundingBox":[1184,2129,1320,2128,1320,2142,1184,2144],"spans":[{"offset":166,"length":5}]},{"content":"-","boundingBox":[223,2146,249,2147,248,2159,222,2158],"spans":[{"offset":172,"length":1}]},{"content":"----","boundingBox":[254,2144,381,2142,381,2154,254,2157],"spans":[{"offset":174,"length":4}]},{"content":"Sub-Total","boundingBox":[435,2232,765,2219,769,2312,439,2325],"spans":[{"offset":179,"length":9}]},{"content":"Tax","boundingBox":[438,2368,565,2361,564,2455,440,2459],"spans":[{"offset":189,"length":3}]},{"content":"Tip","boundingBox":[437,2500,541,2498,545,2613,437,2613],"spans":[{"offset":193,"length":3}]},{"content":"Total","boundingBox":[427,2655,607,2645,611,2734,437,2747],"spans":[{"offset":197,"length":5}]},{"content":"$ 11.70","boundingBox":[1082,2224,1304,2221,1303,2312,1087,2323],"spans":[{"offset":203,"length":7}]},{"content":"$ 1.17","boundingBox":[1129,2355,1305,2358,1302,2453,1128,2452],"spans":[{"offset":211,"length":6}]},{"content":"$ 1.63","boundingBox":[1023,2470,1294,2481,1296,2599,1019,2584],"spans":[{"offset":218,"length":6}]},{"content":"$14,50","boundingBox":[1032,2625,1380,2637,1384,2761,1030,2741],"spans":[{"offset":225,"length":6}]}],"spans":[{"offset":0,"length":231}]}],"styles":[{"isHandwritten":true,"confidence":0.9,"spans":[{"offset":218,"length":6}]},{"isHandwritten":true,"confidence":0.95,"spans":[{"offset":225,"length":6}]}],"documents":[{"docType":"receipt.retailMeal","boundingRegions":[{"pageNumber":1,"boundingBox":[0,0,1688,0,1688,3000,0,3000]}],"fields":{"Items":{"type":"array","valueArray":[{"type":"object","valueObject":{"Description":{"type":"string","valueString":"Cappuccino","content":"Cappuccino","boundingRegions":[{"pageNumber":1,"boundingBox":[310,1583,659,1596,657,1693,303,1675]}],"confidence":0.935,"spans":[{"offset":111,"length":10}]},"Quantity":{"type":"number","valueNumber":1,"content":"1","boundingRegions":[{"pageNumber":1,"boundingBox":[248,1579,291,1582,284,1673,241,1670]}],"confidence":0.972,"spans":[{"offset":109,"length":1}]},"TotalPrice":{"type":"number","valueNumber":2.2,"content":"$2.20","boundingRegions":[{"pageNumber":1,"boundingBox":[1110,1581,1267,1575,1270,1650,1113,1657]}],"confidence":0.962,"spans":[{"offset":141,"length":5}]}}},{"type":"object","valueObject":{"Description":{"type":"string","valueString":"BACON & EGGS","content":"BACON & EGGS","boundingRegions":[{"pageNumber":1,"boundingBox":[299,1838,735,1838,735,1920,299,1920]}],"confidence":0.939,"spans":[{"offset":124,"length":12}]},"Quantity":{"type":"number","valueNumber":1,"content":"1","boundingRegions":[{"pageNumber":1,"boundingBox":[229,1837,275,1838,276,1919,231,1919]}],"confidence":0.974,"spans":[{"offset":122,"length":1}]},"TotalPrice":{"type":"number","valueNumber":9.5,"content":"$9.5","boundingRegions":[{"pageNumber":1,"boundingBox":[1135,1956,1261,1952,1264,2036,1138,2040]}],"confidence":0.962,"spans":[{"offset":161,"length":4}]}}}]},"Locale":{"type":"string","valueString":"en-US","confidence":0.993},"MerchantAddress":{"type":"string","valueString":"123 Main Street Redmond, WA 98052","content":"123 Main Street Redmond, WA 98052","boundingRegions":[{"pageNumber":1,"boundingBox":[302,677,843,791,808,957,267,843]}],"confidence":0.97,"spans":[{"offset":16,"length":33}]},"MerchantName":{"type":"string","valueString":"Contoso","content":"Contoso","boundingRegions":[{"pageNumber":1,"boundingBox":[310,573,517,629,502,686,298,633]}],"confidence":0.97,"spans":[{"offset":8,"length":7}]},"MerchantPhoneNumber":{"type":"phoneNumber","valuePhoneNumber":"+19876543210","content":"987-654-3210","boundingRegions":[{"pageNumber":1,"boundingBox":[280,1006,648,1055,644,1119,272,1068]}],"confidence":0.99,"spans":[{"offset":50,"length":12}]},"Subtotal":{"type":"number","valueNumber":11.7,"content":"$ 11.70","boundingRegions":[{"pageNumber":1,"boundingBox":[1085,2223,1301,2219,1303,2319,1087,2323]}],"confidence":0.948,"spans":[{"offset":203,"length":7}]},"Tip":{"type":"number","valueNumber":1.63,"content":"$ 1.63","boundingRegions":[{"pageNumber":1,"boundingBox":[1023,2468,1276,2480,1271,2597,1018,2585]}],"confidence":0.972,"spans":[{"offset":218,"length":6}]},"Total":{"type":"number","valueNumber":14.5,"content":"$14,50","boundingRegions":[{"pageNumber":1,"boundingBox":[1032,2625,1376,2637,1371,2759,1030,2744]}],"confidence":0.972,"spans":[{"offset":225,"length":6}]},"TotalTax":{"type":"number","valueNumber":1.17,"content":"$ 1.17","boundingRegions":[{"pageNumber":1,"boundingBox":[1129,2355,1304,2356,1303,2454,1128,2452]}],"confidence":0.982,"spans":[{"offset":211,"length":6}]},"TransactionDate":{"type":"date","valueDate":"2019-06-10","content":"6/10/2019","boundingRegions":[{"pageNumber":1,"boundingBox":[264,1223,522,1246,515,1334,255,1312]}],"confidence":0.99,"spans":[{"offset":63,"length":9}]},"TransactionTime":{"type":"time","valueTime":"13:59:00","content":"13:59","boundingRegions":[{"pageNumber":1,"boundingBox":[539,1247,680,1258,674,1340,532,1336]}],"confidence":0.988,"spans":[{"offset":73,"length":5}]}},"confidence":0.987,"spans":[{"offset":0,"length":231}]}]}}, [
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-envoy-upstream-service-time',
  '27',
  'apim-request-id',
  'e43f37d5-1b61-4ba3-8083-f709156b4ccb',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Tue, 01 Feb 2022 16:47:06 GMT'
]);
