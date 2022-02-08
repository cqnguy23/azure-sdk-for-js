let nock = require('nock');

module.exports.hash = "b99c24c4afe47af61abf9e947e5dbda4";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://endpoint:443', {"encodedQueryParams":true})
  .post('/formrecognizer/documentModels/modelName164373411918807673:analyze', {"urlSource":"https://storageaccount/testingdata/Form_1.jpg?sastoken"})
  .query(true)
  .reply(202, "", [
  'Content-Length',
  '0',
  'Operation-Location',
  'https://endpoint/formrecognizer/documentModels/modelName164373411918807673/analyzeResults/12a81d39-ca26-4041-990f-aa8d93ebaddd?api-version=2022-01-30-preview',
  'x-envoy-upstream-service-time',
  '569',
  'apim-request-id',
  '12a81d39-ca26-4041-990f-aa8d93ebaddd',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Tue, 01 Feb 2022 16:48:45 GMT'
]);

nock('https://endpoint:443', {"encodedQueryParams":true})
  .get('/formrecognizer/documentModels/modelName164373411918807673/analyzeResults/12a81d39-ca26-4041-990f-aa8d93ebaddd')
  .query(true)
  .reply(200, {"status":"running","createdDateTime":"2022-02-01T16:48:46Z","lastUpdatedDateTime":"2022-02-01T16:48:46Z"}, [
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-envoy-upstream-service-time',
  '19',
  'apim-request-id',
  'edf38c44-c470-4cd2-9178-57b2af656e37',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Tue, 01 Feb 2022 16:48:45 GMT'
]);

nock('https://endpoint:443', {"encodedQueryParams":true})
  .get('/formrecognizer/documentModels/modelName164373411918807673/analyzeResults/12a81d39-ca26-4041-990f-aa8d93ebaddd')
  .query(true)
  .reply(200, {"status":"running","createdDateTime":"2022-02-01T16:48:46Z","lastUpdatedDateTime":"2022-02-01T16:48:46Z"}, [
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-envoy-upstream-service-time',
  '22',
  'apim-request-id',
  'c4d2ef12-a0a4-4a91-87da-fbda864dd5a4',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Tue, 01 Feb 2022 16:48:46 GMT'
]);

nock('https://endpoint:443', {"encodedQueryParams":true})
  .get('/formrecognizer/documentModels/modelName164373411918807673/analyzeResults/12a81d39-ca26-4041-990f-aa8d93ebaddd')
  .query(true)
  .reply(200, {"status":"succeeded","createdDateTime":"2022-02-01T16:48:46Z","lastUpdatedDateTime":"2022-02-01T16:48:48Z","analyzeResult":{"apiVersion":"2022-01-30-preview","modelId":"modelName164373411918807673","stringIndexType":"textElements","content":"Purchase Order\nHero Limited\nCompany Phone: 555-348-6512\nWebsite: www.herolimited.com\nEmail:\naccounts@herolimited.com\nShipped To\nVendor Name: Hillary Swank\nCompany Name: Higgly Wiggly Books\nAddress: 938 NE Burner Road\nBoulder City, CO 92848\nPhone: 938-294-2949\nShipped From\nName: Bernie Sanders\nCompany Name: Jupiter Book Supply\nAddress: 383 N Kinnick Road\nSeattle, WA 38383\nPurchase Order\nDated As: 12/20/2020\nPurchase Order #: 948284\nPhone: 932-299-0292\nDetails\nQuantity\nUnit Price\nTotal\nBindings\n20\n1.00\n20.00\nCovers Small\n20\n1.00\n20.00\nFeather Bookmark\n20\n5.00\n100.00\nCopper Swirl Marker\n20\n5.00\n100.00\nBernie Sanders\nBernie Sanders\nManager\nAdditional Notes:\nDo not Jostle Box. Unpack carefully. Enjoy.\nSUBTOTAL\n$140.00\nTAX\n$4.00\nTOTAL\n$144.00\nJupiter Book Supply will refund you 50% per book if returned within 60 days of reading and\noffer you 25% off you next total purchase.","pages":[{"pageNumber":1,"angle":0,"width":1700,"height":2200,"unit":"pixel","words":[{"content":"Purchase","boundingBox":[135,136,261,137,260,170,135,168],"confidence":0.997,"span":{"offset":0,"length":8}},{"content":"Order","boundingBox":[267,137,351,137,350,170,267,170],"confidence":0.999,"span":{"offset":9,"length":5}},{"content":"Hero","boundingBox":[620,203,773,200,772,268,617,269],"confidence":0.994,"span":{"offset":15,"length":4}},{"content":"Limited","boundingBox":[802,200,1061,199,1063,269,801,268],"confidence":0.998,"span":{"offset":20,"length":7}},{"content":"Company","boundingBox":[163,352,272,350,272,379,163,380],"confidence":0.993,"span":{"offset":28,"length":7}},{"content":"Phone:","boundingBox":[278,350,360,350,360,378,278,379],"confidence":0.999,"span":{"offset":36,"length":6}},{"content":"555-348-6512","boundingBox":[366,350,526,350,526,375,366,378],"confidence":0.994,"span":{"offset":43,"length":12}},{"content":"Website:","boundingBox":[163,392,267,392,268,418,164,417],"confidence":0.996,"span":{"offset":56,"length":8}},{"content":"www.herolimited.com","boundingBox":[272,392,522,394,522,419,273,418],"confidence":0.994,"span":{"offset":65,"length":19}},{"content":"Email:","boundingBox":[164,436,236,435,236,459,165,460],"confidence":0.999,"span":{"offset":85,"length":6}},{"content":"accounts@herolimited.com","boundingBox":[164,480,471,479,471,504,164,504],"confidence":0.941,"span":{"offset":92,"length":24}},{"content":"Shipped","boundingBox":[167,546,327,546,328,592,167,592],"confidence":0.994,"span":{"offset":117,"length":7}},{"content":"To","boundingBox":[344,546,391,545,391,592,344,592],"confidence":0.998,"span":{"offset":125,"length":2}},{"content":"Vendor","boundingBox":[160,609,253,608,253,639,160,637],"confidence":1,"span":{"offset":128,"length":6}},{"content":"Name:","boundingBox":[259,608,343,608,343,640,259,639],"confidence":0.999,"span":{"offset":135,"length":5}},{"content":"Hillary","boundingBox":[349,608,429,608,429,640,349,640],"confidence":0.998,"span":{"offset":141,"length":7}},{"content":"Swank","boundingBox":[435,608,520,609,520,638,435,640],"confidence":0.999,"span":{"offset":149,"length":5}},{"content":"Company","boundingBox":[159,648,279,647,279,679,160,677],"confidence":0.998,"span":{"offset":155,"length":7}},{"content":"Name:","boundingBox":[285,647,370,647,370,680,285,679],"confidence":0.999,"span":{"offset":163,"length":5}},{"content":"Higgly","boundingBox":[376,647,453,647,453,680,376,680],"confidence":1,"span":{"offset":169,"length":6}},{"content":"Wiggly","boundingBox":[459,647,544,647,544,678,459,680],"confidence":1,"span":{"offset":176,"length":6}},{"content":"Books","boundingBox":[550,647,630,647,630,676,550,678],"confidence":0.999,"span":{"offset":183,"length":5}},{"content":"Address:","boundingBox":[160,684,267,684,267,714,160,712],"confidence":0.995,"span":{"offset":189,"length":8}},{"content":"938","boundingBox":[273,684,320,684,320,714,273,714],"confidence":0.997,"span":{"offset":198,"length":3}},{"content":"NE","boundingBox":[327,684,361,684,361,714,326,714],"confidence":0.996,"span":{"offset":202,"length":2}},{"content":"Burner","boundingBox":[367,684,453,684,452,714,366,714],"confidence":0.993,"span":{"offset":205,"length":6}},{"content":"Road","boundingBox":[459,684,521,684,520,713,458,713],"confidence":0.994,"span":{"offset":212,"length":4}},{"content":"Boulder","boundingBox":[279,720,372,721,372,752,279,750],"confidence":0.977,"span":{"offset":217,"length":7}},{"content":"City,","boundingBox":[378,721,433,721,434,752,378,752],"confidence":0.999,"span":{"offset":225,"length":5}},{"content":"CO","boundingBox":[439,721,474,721,474,751,440,752],"confidence":0.997,"span":{"offset":231,"length":2}},{"content":"92848","boundingBox":[483,721,561,721,562,750,483,751],"confidence":0.999,"span":{"offset":234,"length":5}},{"content":"Phone:","boundingBox":[613,721,702,721,702,751,613,751],"confidence":0.999,"span":{"offset":240,"length":6}},{"content":"938-294-2949","boundingBox":[708,721,882,721,882,749,708,750],"confidence":0.994,"span":{"offset":247,"length":12}},{"content":"Shipped","boundingBox":[165,784,327,784,327,829,165,828],"confidence":0.998,"span":{"offset":260,"length":7}},{"content":"From","boundingBox":[340,784,431,785,431,827,340,829],"confidence":0.994,"span":{"offset":268,"length":4}},{"content":"Name:","boundingBox":[161,850,247,848,248,882,163,882],"confidence":0.999,"span":{"offset":273,"length":5}},{"content":"Bernie","boundingBox":[253,848,334,848,335,881,254,881],"confidence":0.997,"span":{"offset":279,"length":6}},{"content":"Sanders","boundingBox":[340,848,446,850,446,881,341,881],"confidence":0.998,"span":{"offset":286,"length":7}},{"content":"Company","boundingBox":[163,889,282,889,281,920,163,920],"confidence":0.994,"span":{"offset":294,"length":7}},{"content":"Name:","boundingBox":[288,889,375,889,374,920,288,920],"confidence":0.999,"span":{"offset":302,"length":5}},{"content":"Jupiter","boundingBox":[381,889,465,889,465,921,380,920],"confidence":0.997,"span":{"offset":308,"length":7}},{"content":"Book","boundingBox":[472,889,536,889,535,921,471,921],"confidence":0.994,"span":{"offset":316,"length":4}},{"content":"Supply","boundingBox":[542,889,628,889,626,921,541,921],"confidence":1,"span":{"offset":321,"length":6}},{"content":"Address:","boundingBox":[163,925,274,925,274,954,164,954],"confidence":0.995,"span":{"offset":328,"length":8}},{"content":"383","boundingBox":[280,925,326,925,326,954,280,954],"confidence":0.996,"span":{"offset":337,"length":3}},{"content":"N","boundingBox":[332,925,348,925,348,954,332,954],"confidence":0.99,"span":{"offset":341,"length":1}},{"content":"Kinnick","boundingBox":[358,925,448,925,448,954,358,954],"confidence":0.997,"span":{"offset":343,"length":7}},{"content":"Road","boundingBox":[454,925,517,926,516,954,454,954],"confidence":0.994,"span":{"offset":351,"length":4}},{"content":"Seattle,","boundingBox":[281,962,376,963,376,992,282,992],"confidence":0.996,"span":{"offset":356,"length":8}},{"content":"WA","boundingBox":[382,963,426,963,426,992,382,992],"confidence":0.998,"span":{"offset":365,"length":2}},{"content":"38383","boundingBox":[435,963,513,963,513,991,435,992],"confidence":0.999,"span":{"offset":368,"length":5}},{"content":"Purchase","boundingBox":[1115,320,1365,319,1365,372,1115,371],"confidence":0.997,"span":{"offset":374,"length":8}},{"content":"Order","boundingBox":[1385,318,1553,317,1553,372,1385,372],"confidence":0.999,"span":{"offset":383,"length":5}},{"content":"Dated","boundingBox":[1025,420,1104,419,1104,450,1025,450],"confidence":0.994,"span":{"offset":389,"length":5}},{"content":"As:","boundingBox":[1115,419,1159,419,1159,450,1115,450],"confidence":0.994,"span":{"offset":395,"length":3}},{"content":"12/20/2020","boundingBox":[1165,419,1312,419,1312,450,1165,450],"confidence":0.996,"span":{"offset":399,"length":10}},{"content":"Purchase","boundingBox":[1025,461,1149,461,1149,490,1025,489],"confidence":0.997,"span":{"offset":410,"length":8}},{"content":"Order","boundingBox":[1156,461,1238,461,1238,490,1155,490],"confidence":0.999,"span":{"offset":419,"length":5}},{"content":"#:","boundingBox":[1244,461,1272,461,1272,490,1244,490],"confidence":0.997,"span":{"offset":425,"length":2}},{"content":"948284","boundingBox":[1278,461,1371,461,1370,490,1277,490],"confidence":0.999,"span":{"offset":428,"length":6}},{"content":"Phone:","boundingBox":[759,963,848,963,848,992,759,992],"confidence":1,"span":{"offset":435,"length":6}},{"content":"932-299-0292","boundingBox":[854,963,1029,963,1029,991,854,992],"confidence":0.994,"span":{"offset":442,"length":12}},{"content":"Details","boundingBox":[445,1049,556,1046,556,1078,445,1079],"confidence":0.994,"span":{"offset":455,"length":7}},{"content":"Quantity","boundingBox":[886,1046,1029,1047,1028,1082,886,1083],"confidence":0.994,"span":{"offset":463,"length":8}},{"content":"Unit","boundingBox":[1111,1046,1180,1047,1180,1078,1111,1078],"confidence":0.994,"span":{"offset":472,"length":4}},{"content":"Price","boundingBox":[1186,1047,1266,1047,1266,1078,1186,1078],"confidence":0.999,"span":{"offset":477,"length":5}},{"content":"Total","boundingBox":[1385,1046,1469,1046,1469,1077,1385,1077],"confidence":0.999,"span":{"offset":483,"length":5}},{"content":"Bindings","boundingBox":[173,1093,279,1096,278,1123,173,1121],"confidence":0.993,"span":{"offset":489,"length":8}},{"content":"20","boundingBox":[860,1093,891,1093,891,1125,860,1125],"confidence":0.997,"span":{"offset":498,"length":2}},{"content":"1.00","boundingBox":[1241,1094,1292,1093,1292,1118,1241,1119],"confidence":0.993,"span":{"offset":501,"length":4}},{"content":"20.00","boundingBox":[1460,1094,1526,1094,1526,1118,1460,1118],"confidence":0.998,"span":{"offset":506,"length":5}},{"content":"Covers","boundingBox":[170,1134,254,1135,254,1162,170,1162],"confidence":1,"span":{"offset":512,"length":6}},{"content":"Small","boundingBox":[260,1135,331,1134,330,1162,260,1162],"confidence":0.999,"span":{"offset":519,"length":5}},{"content":"20","boundingBox":[862,1135,888,1135,888,1159,862,1159],"confidence":0.994,"span":{"offset":525,"length":2}},{"content":"1.00","boundingBox":[1242,1135,1291,1135,1291,1160,1242,1160],"confidence":0.994,"span":{"offset":528,"length":4}},{"content":"20.00","boundingBox":[1460,1134,1525,1134,1525,1159,1459,1159],"confidence":0.999,"span":{"offset":533,"length":5}},{"content":"Feather","boundingBox":[171,1178,268,1178,267,1206,171,1204],"confidence":0.994,"span":{"offset":539,"length":7}},{"content":"Bookmark","boundingBox":[273,1178,401,1178,400,1206,273,1206],"confidence":0.997,"span":{"offset":547,"length":8}},{"content":"20","boundingBox":[863,1179,887,1179,887,1202,863,1202],"confidence":0.997,"span":{"offset":556,"length":2}},{"content":"5.00","boundingBox":[1239,1176,1292,1176,1292,1206,1239,1207],"confidence":0.994,"span":{"offset":559,"length":4}},{"content":"100.00","boundingBox":[1445,1179,1525,1180,1525,1204,1446,1204],"confidence":0.999,"span":{"offset":564,"length":6}},{"content":"Copper","boundingBox":[169,1221,260,1221,260,1253,169,1253],"confidence":1,"span":{"offset":571,"length":6}},{"content":"Swirl","boundingBox":[266,1221,328,1221,328,1252,266,1253],"confidence":0.999,"span":{"offset":578,"length":5}},{"content":"Marker","boundingBox":[334,1221,430,1222,429,1249,334,1252],"confidence":1,"span":{"offset":584,"length":6}},{"content":"20","boundingBox":[862,1222,887,1222,887,1246,862,1246],"confidence":0.998,"span":{"offset":591,"length":2}},{"content":"5.00","boundingBox":[1240,1222,1292,1222,1292,1247,1240,1246],"confidence":0.994,"span":{"offset":594,"length":4}},{"content":"100.00","boundingBox":[1443,1223,1524,1223,1524,1246,1444,1247],"confidence":0.994,"span":{"offset":599,"length":6}},{"content":"Bernie","boundingBox":[488,1670,602,1670,602,1706,487,1707],"confidence":0.996,"span":{"offset":606,"length":6}},{"content":"Sanders","boundingBox":[616,1670,763,1670,762,1707,616,1706],"confidence":0.998,"span":{"offset":613,"length":7}},{"content":"Bernie","boundingBox":[543,1718,616,1718,616,1743,544,1743],"confidence":0.994,"span":{"offset":621,"length":6}},{"content":"Sanders","boundingBox":[622,1718,716,1718,715,1744,622,1743],"confidence":0.998,"span":{"offset":628,"length":7}},{"content":"Manager","boundingBox":[578,1753,681,1754,680,1779,578,1777],"confidence":0.994,"span":{"offset":636,"length":7}},{"content":"Additional","boundingBox":[173,1794,353,1796,353,1832,173,1831],"confidence":0.995,"span":{"offset":644,"length":10}},{"content":"Notes:","boundingBox":[360,1796,480,1796,479,1832,360,1832],"confidence":0.999,"span":{"offset":655,"length":6}},{"content":"Do","boundingBox":[173,1881,203,1880,203,1908,172,1907],"confidence":0.994,"span":{"offset":662,"length":2}},{"content":"not","boundingBox":[209,1880,256,1879,255,1909,209,1908],"confidence":0.999,"span":{"offset":665,"length":3}},{"content":"Jostle","boundingBox":[262,1879,331,1878,331,1910,262,1909],"confidence":0.998,"span":{"offset":669,"length":6}},{"content":"Box.","boundingBox":[337,1878,398,1878,398,1911,337,1910],"confidence":0.99,"span":{"offset":676,"length":4}},{"content":"Unpack","boundingBox":[405,1878,499,1878,499,1912,404,1911],"confidence":0.999,"span":{"offset":681,"length":6}},{"content":"carefully.","boundingBox":[505,1878,621,1878,620,1912,505,1912],"confidence":0.995,"span":{"offset":688,"length":10}},{"content":"Enjoy.","boundingBox":[627,1878,704,1879,703,1912,626,1912],"confidence":0.994,"span":{"offset":699,"length":6}},{"content":"SUBTOTAL","boundingBox":[1146,1574,1295,1574,1294,1600,1148,1601],"confidence":0.996,"span":{"offset":706,"length":8}},{"content":"$140.00","boundingBox":[1426,1572,1527,1572,1526,1598,1427,1599],"confidence":0.99,"span":{"offset":715,"length":7}},{"content":"TAX","boundingBox":[1239,1618,1288,1618,1289,1643,1239,1643],"confidence":0.998,"span":{"offset":723,"length":3}},{"content":"$4.00","boundingBox":[1458,1614,1528,1613,1528,1641,1458,1642],"confidence":0.994,"span":{"offset":727,"length":5}},{"content":"TOTAL","boundingBox":[1205,1673,1293,1673,1294,1700,1205,1700],"confidence":0.999,"span":{"offset":733,"length":5}},{"content":"$144.00","boundingBox":[1427,1670,1526,1669,1526,1698,1427,1698],"confidence":0.984,"span":{"offset":739,"length":7}},{"content":"Jupiter","boundingBox":[169,1922,270,1922,270,1960,169,1960],"confidence":0.994,"span":{"offset":747,"length":7}},{"content":"Book","boundingBox":[277,1922,353,1922,354,1959,277,1960],"confidence":0.994,"span":{"offset":755,"length":4}},{"content":"Supply","boundingBox":[363,1922,464,1923,465,1959,364,1959],"confidence":1,"span":{"offset":760,"length":6}},{"content":"will","boundingBox":[471,1923,521,1923,521,1959,472,1959],"confidence":0.994,"span":{"offset":767,"length":4}},{"content":"refund","boundingBox":[528,1923,623,1923,623,1959,528,1959],"confidence":1,"span":{"offset":772,"length":6}},{"content":"you","boundingBox":[631,1923,686,1923,687,1958,632,1959],"confidence":0.998,"span":{"offset":779,"length":3}},{"content":"50%","boundingBox":[694,1923,762,1923,763,1958,695,1958],"confidence":0.994,"span":{"offset":783,"length":3}},{"content":"per","boundingBox":[769,1923,821,1923,821,1958,770,1958],"confidence":0.999,"span":{"offset":787,"length":3}},{"content":"book","boundingBox":[828,1923,901,1923,901,1958,829,1958],"confidence":0.994,"span":{"offset":791,"length":4}},{"content":"if","boundingBox":[908,1923,929,1923,929,1958,908,1958],"confidence":0.997,"span":{"offset":796,"length":2}},{"content":"returned","boundingBox":[936,1923,1061,1923,1062,1958,936,1958],"confidence":0.996,"span":{"offset":799,"length":8}},{"content":"within","boundingBox":[1070,1923,1156,1923,1157,1958,1070,1958],"confidence":0.999,"span":{"offset":808,"length":6}},{"content":"60","boundingBox":[1164,1923,1202,1923,1203,1958,1164,1958],"confidence":0.998,"span":{"offset":815,"length":2}},{"content":"days","boundingBox":[1210,1923,1283,1923,1284,1958,1211,1958],"confidence":0.994,"span":{"offset":818,"length":4}},{"content":"of","boundingBox":[1290,1923,1321,1923,1321,1958,1291,1958],"confidence":0.999,"span":{"offset":823,"length":2}},{"content":"reading","boundingBox":[1328,1923,1440,1923,1441,1958,1328,1958],"confidence":0.994,"span":{"offset":826,"length":7}},{"content":"and","boundingBox":[1447,1923,1505,1924,1505,1959,1448,1958],"confidence":0.999,"span":{"offset":834,"length":3}},{"content":"offer","boundingBox":[168,1957,235,1957,235,1993,169,1992],"confidence":0.994,"span":{"offset":838,"length":5}},{"content":"you","boundingBox":[242,1957,297,1957,297,1993,242,1993],"confidence":0.998,"span":{"offset":844,"length":3}},{"content":"25%","boundingBox":[308,1957,373,1957,373,1993,308,1993],"confidence":0.982,"span":{"offset":848,"length":3}},{"content":"off","boundingBox":[380,1957,422,1957,423,1994,380,1993],"confidence":0.998,"span":{"offset":852,"length":3}},{"content":"you","boundingBox":[429,1957,482,1957,482,1994,430,1994],"confidence":0.998,"span":{"offset":856,"length":3}},{"content":"next","boundingBox":[490,1957,556,1957,556,1994,490,1994],"confidence":0.993,"span":{"offset":860,"length":4}},{"content":"total","boundingBox":[563,1957,629,1958,628,1994,563,1994],"confidence":0.999,"span":{"offset":865,"length":5}},{"content":"purchase.","boundingBox":[636,1958,787,1959,786,1993,636,1994],"confidence":0.994,"span":{"offset":871,"length":9}}],"selectionMarks":[],"lines":[{"content":"Purchase Order","boundingBox":[133,135,351,137,351,170,133,168],"spans":[{"offset":0,"length":14}]},{"content":"Hero Limited","boundingBox":[617,200,1073,198,1073,268,617,269],"spans":[{"offset":15,"length":12}]},{"content":"Company Phone: 555-348-6512","boundingBox":[161,351,526,349,526,376,162,379],"spans":[{"offset":28,"length":27}]},{"content":"Website: www.herolimited.com","boundingBox":[162,391,535,392,534,419,162,417],"spans":[{"offset":56,"length":28}]},{"content":"Email:","boundingBox":[164,436,236,435,236,459,164,460],"spans":[{"offset":85,"length":6}]},{"content":"accounts@herolimited.com","boundingBox":[163,479,483,478,483,503,163,504],"spans":[{"offset":92,"length":24}]},{"content":"Shipped To","boundingBox":[166,545,398,545,399,591,166,592],"spans":[{"offset":117,"length":10}]},{"content":"Vendor Name: Hillary Swank","boundingBox":[159,607,520,608,520,639,159,639],"spans":[{"offset":128,"length":26}]},{"content":"Company Name: Higgly Wiggly Books","boundingBox":[159,646,629,646,630,679,159,679],"spans":[{"offset":155,"length":33}]},{"content":"Address: 938 NE Burner Road","boundingBox":[158,683,526,684,526,713,158,713],"spans":[{"offset":189,"length":27}]},{"content":"Boulder City, CO 92848","boundingBox":[279,720,563,720,563,751,279,751],"spans":[{"offset":217,"length":22}]},{"content":"Phone: 938-294-2949","boundingBox":[612,720,885,720,885,749,612,750],"spans":[{"offset":240,"length":19}]},{"content":"Shipped From","boundingBox":[164,783,454,783,454,828,165,829],"spans":[{"offset":260,"length":12}]},{"content":"Name: Bernie Sanders","boundingBox":[160,848,445,848,445,881,160,881],"spans":[{"offset":273,"length":20}]},{"content":"Company Name: Jupiter Book Supply","boundingBox":[162,888,628,888,628,920,162,920],"spans":[{"offset":294,"length":33}]},{"content":"Address: 383 N Kinnick Road","boundingBox":[162,925,520,925,520,953,162,953],"spans":[{"offset":328,"length":27}]},{"content":"Seattle, WA 38383","boundingBox":[280,962,513,962,513,991,280,991],"spans":[{"offset":356,"length":17}]},{"content":"Purchase Order","boundingBox":[1114,317,1554,317,1554,371,1114,372],"spans":[{"offset":374,"length":14}]},{"content":"Dated As: 12/20/2020","boundingBox":[1025,419,1317,419,1317,449,1025,449],"spans":[{"offset":389,"length":20}]},{"content":"Purchase Order #: 948284","boundingBox":[1024,460,1376,461,1376,489,1024,489],"spans":[{"offset":410,"length":24}]},{"content":"Phone: 932-299-0292","boundingBox":[758,962,1032,962,1032,991,758,991],"spans":[{"offset":435,"length":19}]},{"content":"Details","boundingBox":[444,1047,558,1046,559,1077,445,1079],"spans":[{"offset":455,"length":7}]},{"content":"Quantity","boundingBox":[885,1045,1031,1046,1031,1082,885,1082],"spans":[{"offset":463,"length":8}]},{"content":"Unit Price","boundingBox":[1110,1046,1270,1046,1270,1077,1110,1077],"spans":[{"offset":472,"length":10}]},{"content":"Total","boundingBox":[1382,1046,1469,1046,1468,1077,1382,1077],"spans":[{"offset":483,"length":5}]},{"content":"Bindings","boundingBox":[173,1093,279,1095,279,1124,172,1122],"spans":[{"offset":489,"length":8}]},{"content":"20","boundingBox":[856,1093,898,1093,896,1125,855,1124],"spans":[{"offset":498,"length":2}]},{"content":"1.00","boundingBox":[1239,1095,1294,1093,1294,1118,1240,1118],"spans":[{"offset":501,"length":4}]},{"content":"20.00","boundingBox":[1460,1094,1530,1094,1530,1117,1459,1118],"spans":[{"offset":506,"length":5}]},{"content":"Covers Small","boundingBox":[170,1133,330,1133,330,1161,170,1162],"spans":[{"offset":512,"length":12}]},{"content":"20","boundingBox":[861,1135,895,1135,894,1159,861,1159],"spans":[{"offset":525,"length":2}]},{"content":"1.00","boundingBox":[1238,1135,1296,1135,1295,1160,1239,1160],"spans":[{"offset":528,"length":4}]},{"content":"20.00","boundingBox":[1457,1134,1530,1135,1530,1159,1458,1159],"spans":[{"offset":533,"length":5}]},{"content":"Feather Bookmark","boundingBox":[170,1178,401,1178,401,1206,170,1205],"spans":[{"offset":539,"length":16}]},{"content":"20","boundingBox":[861,1179,895,1180,895,1202,861,1202],"spans":[{"offset":556,"length":2}]},{"content":"5.00","boundingBox":[1236,1177,1292,1176,1293,1207,1238,1207],"spans":[{"offset":559,"length":4}]},{"content":"100.00","boundingBox":[1442,1178,1527,1178,1527,1204,1442,1204],"spans":[{"offset":564,"length":6}]},{"content":"Copper Swirl Marker","boundingBox":[168,1221,429,1221,429,1251,168,1253],"spans":[{"offset":571,"length":19}]},{"content":"20","boundingBox":[860,1222,894,1223,893,1246,861,1246],"spans":[{"offset":591,"length":2}]},{"content":"5.00","boundingBox":[1239,1222,1294,1222,1293,1247,1240,1246],"spans":[{"offset":594,"length":4}]},{"content":"100.00","boundingBox":[1442,1222,1529,1222,1529,1246,1442,1246],"spans":[{"offset":599,"length":6}]},{"content":"Bernie Sanders","boundingBox":[481,1670,765,1670,765,1706,481,1706],"spans":[{"offset":606,"length":14}]},{"content":"Bernie Sanders","boundingBox":[543,1717,717,1717,717,1743,543,1742],"spans":[{"offset":621,"length":14}]},{"content":"Manager","boundingBox":[577,1752,681,1753,680,1779,577,1777],"spans":[{"offset":636,"length":7}]},{"content":"Additional Notes:","boundingBox":[171,1793,479,1795,479,1832,171,1830],"spans":[{"offset":644,"length":17}]},{"content":"Do not Jostle Box. Unpack carefully. Enjoy.","boundingBox":[172,1877,705,1878,704,1912,172,1910],"spans":[{"offset":662,"length":43}]},{"content":"SUBTOTAL","boundingBox":[1143,1573,1296,1573,1296,1600,1143,1600],"spans":[{"offset":706,"length":8}]},{"content":"$140.00","boundingBox":[1425,1571,1530,1571,1530,1598,1425,1598],"spans":[{"offset":715,"length":7}]},{"content":"TAX","boundingBox":[1237,1618,1293,1618,1292,1642,1237,1643],"spans":[{"offset":723,"length":3}]},{"content":"$4.00","boundingBox":[1457,1614,1529,1613,1529,1641,1458,1642],"spans":[{"offset":727,"length":5}]},{"content":"TOTAL","boundingBox":[1202,1672,1295,1672,1295,1699,1202,1699],"spans":[{"offset":733,"length":5}]},{"content":"$144.00","boundingBox":[1426,1669,1528,1669,1529,1697,1426,1698],"spans":[{"offset":739,"length":7}]},{"content":"Jupiter Book Supply will refund you 50% per book if returned within 60 days of reading and","boundingBox":[167,1922,1509,1922,1509,1959,167,1959],"spans":[{"offset":747,"length":90}]},{"content":"offer you 25% off you next total purchase.","boundingBox":[168,1956,786,1957,786,1993,168,1992],"spans":[{"offset":838,"length":42}]}],"spans":[{"offset":0,"length":880}]}],"tables":[{"rowCount":5,"columnCount":4,"cells":[{"kind":"columnHeader","rowIndex":0,"columnIndex":0,"rowSpan":1,"columnSpan":1,"content":"Details","boundingRegions":[{"pageNumber":1,"boundingBox":[156,1037,846,1037,846,1086,155,1086]}],"spans":[{"offset":455,"length":7}]},{"kind":"columnHeader","rowIndex":0,"columnIndex":1,"rowSpan":1,"columnSpan":1,"content":"Quantity","boundingRegions":[{"pageNumber":1,"boundingBox":[846,1037,1071,1037,1071,1085,846,1086]}],"spans":[{"offset":463,"length":8}]},{"kind":"columnHeader","rowIndex":0,"columnIndex":2,"rowSpan":1,"columnSpan":1,"content":"Unit Price","boundingRegions":[{"pageNumber":1,"boundingBox":[1071,1037,1306,1037,1307,1085,1071,1085]}],"spans":[{"offset":472,"length":10}]},{"kind":"columnHeader","rowIndex":0,"columnIndex":3,"rowSpan":1,"columnSpan":1,"content":"Total","boundingRegions":[{"pageNumber":1,"boundingBox":[1306,1037,1541,1037,1543,1086,1307,1085]}],"spans":[{"offset":483,"length":5}]},{"rowIndex":1,"columnIndex":0,"rowSpan":1,"columnSpan":1,"content":"Bindings","boundingRegions":[{"pageNumber":1,"boundingBox":[155,1086,846,1086,846,1127,155,1128]}],"spans":[{"offset":489,"length":8}]},{"rowIndex":1,"columnIndex":1,"rowSpan":1,"columnSpan":1,"content":"20","boundingRegions":[{"pageNumber":1,"boundingBox":[846,1086,1071,1085,1071,1127,846,1127]}],"spans":[{"offset":498,"length":2}]},{"rowIndex":1,"columnIndex":2,"rowSpan":1,"columnSpan":1,"content":"1.00","boundingRegions":[{"pageNumber":1,"boundingBox":[1071,1085,1307,1085,1307,1127,1071,1127]}],"spans":[{"offset":501,"length":4}]},{"rowIndex":1,"columnIndex":3,"rowSpan":1,"columnSpan":1,"content":"20.00","boundingRegions":[{"pageNumber":1,"boundingBox":[1307,1085,1543,1086,1543,1127,1307,1127]}],"spans":[{"offset":506,"length":5}]},{"rowIndex":2,"columnIndex":0,"rowSpan":1,"columnSpan":1,"content":"Covers Small","boundingRegions":[{"pageNumber":1,"boundingBox":[155,1128,846,1127,846,1171,155,1171]}],"spans":[{"offset":512,"length":12}]},{"rowIndex":2,"columnIndex":1,"rowSpan":1,"columnSpan":1,"content":"20","boundingRegions":[{"pageNumber":1,"boundingBox":[846,1127,1071,1127,1071,1171,846,1171]}],"spans":[{"offset":525,"length":2}]},{"rowIndex":2,"columnIndex":2,"rowSpan":1,"columnSpan":1,"content":"1.00","boundingRegions":[{"pageNumber":1,"boundingBox":[1071,1127,1307,1127,1307,1171,1071,1171]}],"spans":[{"offset":528,"length":4}]},{"rowIndex":2,"columnIndex":3,"rowSpan":1,"columnSpan":1,"content":"20.00","boundingRegions":[{"pageNumber":1,"boundingBox":[1307,1127,1543,1127,1543,1171,1307,1171]}],"spans":[{"offset":533,"length":5}]},{"rowIndex":3,"columnIndex":0,"rowSpan":1,"columnSpan":1,"content":"Feather Bookmark","boundingRegions":[{"pageNumber":1,"boundingBox":[155,1171,846,1171,846,1214,155,1214]}],"spans":[{"offset":539,"length":16}]},{"rowIndex":3,"columnIndex":1,"rowSpan":1,"columnSpan":1,"content":"20","boundingRegions":[{"pageNumber":1,"boundingBox":[846,1171,1071,1171,1071,1214,846,1214]}],"spans":[{"offset":556,"length":2}]},{"rowIndex":3,"columnIndex":2,"rowSpan":1,"columnSpan":1,"content":"5.00","boundingRegions":[{"pageNumber":1,"boundingBox":[1071,1171,1307,1171,1307,1214,1071,1214]}],"spans":[{"offset":559,"length":4}]},{"rowIndex":3,"columnIndex":3,"rowSpan":1,"columnSpan":1,"content":"100.00","boundingRegions":[{"pageNumber":1,"boundingBox":[1307,1171,1543,1171,1543,1214,1307,1214]}],"spans":[{"offset":564,"length":6}]},{"rowIndex":4,"columnIndex":0,"rowSpan":1,"columnSpan":1,"content":"Copper Swirl Marker","boundingRegions":[{"pageNumber":1,"boundingBox":[155,1214,846,1214,846,1258,155,1258]}],"spans":[{"offset":571,"length":19}]},{"rowIndex":4,"columnIndex":1,"rowSpan":1,"columnSpan":1,"content":"20","boundingRegions":[{"pageNumber":1,"boundingBox":[846,1214,1071,1214,1071,1258,846,1258]}],"spans":[{"offset":591,"length":2}]},{"rowIndex":4,"columnIndex":2,"rowSpan":1,"columnSpan":1,"content":"5.00","boundingRegions":[{"pageNumber":1,"boundingBox":[1071,1214,1307,1214,1307,1258,1071,1258]}],"spans":[{"offset":594,"length":4}]},{"rowIndex":4,"columnIndex":3,"rowSpan":1,"columnSpan":1,"content":"100.00","boundingRegions":[{"pageNumber":1,"boundingBox":[1307,1214,1543,1214,1544,1260,1307,1258]}],"spans":[{"offset":599,"length":6}]}],"boundingRegions":[{"pageNumber":1,"boundingBox":[157,1035,1547,1035,1547,1263,157,1263]}],"spans":[{"offset":455,"length":150}]},{"rowCount":3,"columnCount":2,"cells":[{"rowIndex":0,"columnIndex":0,"rowSpan":1,"columnSpan":1,"content":"SUBTOTAL","boundingRegions":[{"pageNumber":1,"boundingBox":[1070,1564,1308,1565,1308,1609,1071,1609]}],"spans":[{"offset":706,"length":8}]},{"rowIndex":0,"columnIndex":1,"rowSpan":1,"columnSpan":1,"content":"$140.00","boundingRegions":[{"pageNumber":1,"boundingBox":[1308,1565,1542,1565,1543,1609,1308,1609]}],"spans":[{"offset":715,"length":7}]},{"rowIndex":1,"columnIndex":0,"rowSpan":1,"columnSpan":1,"content":"TAX","boundingRegions":[{"pageNumber":1,"boundingBox":[1071,1609,1308,1609,1308,1658,1071,1658]}],"spans":[{"offset":723,"length":3}]},{"rowIndex":1,"columnIndex":1,"rowSpan":1,"columnSpan":1,"content":"$4.00","boundingRegions":[{"pageNumber":1,"boundingBox":[1308,1609,1543,1609,1543,1659,1308,1658]}],"spans":[{"offset":727,"length":5}]},{"rowIndex":2,"columnIndex":0,"rowSpan":1,"columnSpan":1,"content":"TOTAL","boundingRegions":[{"pageNumber":1,"boundingBox":[1071,1658,1308,1658,1308,1708,1071,1708]}],"spans":[{"offset":733,"length":5}]},{"rowIndex":2,"columnIndex":1,"rowSpan":1,"columnSpan":1,"content":"$144.00","boundingRegions":[{"pageNumber":1,"boundingBox":[1308,1658,1543,1659,1543,1708,1308,1708]}],"spans":[{"offset":739,"length":7}]}],"boundingRegions":[{"pageNumber":1,"boundingBox":[1068,1563,1546,1563,1546,1711,1068,1711]}],"spans":[{"offset":706,"length":40}]}],"styles":[{"isHandwritten":true,"confidence":0.95,"spans":[{"offset":606,"length":14}]}],"documents":[{"docType":"modelName164373411918807673:modelName164373411918807673","boundingRegions":[{"pageNumber":1,"boundingBox":[0,0,1700,0,1700,2200,0,2200]}],"fields":{"PurchaseOrderNumber":{"type":"string","valueString":"948284","content":"948284","boundingRegions":[{"pageNumber":1,"boundingBox":[1277,461,1371,461,1371,490,1277,490]}],"confidence":0.95,"spans":[{"offset":428,"length":6}]},"CompanyPhoneNumber":{"type":"string","valueString":"938-294-2949","content":"938-294-2949","boundingRegions":[{"pageNumber":1,"boundingBox":[708,721,882,721,882,750,708,750]}],"confidence":0.95,"spans":[{"offset":247,"length":12}]},"VendorName":{"type":"string","valueString":"Hillary Swank","content":"Hillary Swank","boundingRegions":[{"pageNumber":1,"boundingBox":[349,608,520,608,520,640,349,640]}],"confidence":0.95,"spans":[{"offset":141,"length":13}]},"CompanyAddress":{"type":"string","valueString":"938 NE Burner Road Boulder City, CO 92848","content":"938 NE Burner Road Boulder City, CO 92848","boundingRegions":[{"pageNumber":1,"boundingBox":[273,684,562,684,562,752,273,752]}],"confidence":0.701,"spans":[{"offset":198,"length":41}]},"Total":{"type":"string","valueString":"$144.00","content":"$144.00","boundingRegions":[{"pageNumber":1,"boundingBox":[1427,1669,1526,1669,1526,1698,1427,1698]}],"confidence":0.95,"spans":[{"offset":739,"length":7}]},"DatedAs":{"type":"string","valueString":"12/20/2020","content":"12/20/2020","boundingRegions":[{"pageNumber":1,"boundingBox":[1165,419,1312,419,1312,450,1165,450]}],"confidence":0.95,"spans":[{"offset":399,"length":10}]},"Merchant":{"type":"string","valueString":"Hero Limited","content":"Hero Limited","boundingRegions":[{"pageNumber":1,"boundingBox":[617,199,1063,199,1063,269,617,269]}],"confidence":0.95,"spans":[{"offset":15,"length":12}]},"Email":{"type":"string","valueString":"accounts@herolimited.com","content":"accounts@herolimited.com","boundingRegions":[{"pageNumber":1,"boundingBox":[164,479,471,479,471,504,164,504]}],"confidence":0.95,"spans":[{"offset":92,"length":24}]},"Subtotal":{"type":"string","valueString":"$140.00","content":"$140.00","boundingRegions":[{"pageNumber":1,"boundingBox":[1426,1572,1527,1572,1527,1599,1426,1599]}],"confidence":0.95,"spans":[{"offset":715,"length":7}]},"CompanyName":{"type":"string","valueString":"Higgly Wiggly Books","content":"Higgly Wiggly Books","boundingRegions":[{"pageNumber":1,"boundingBox":[376,647,630,647,630,680,376,680]}],"confidence":0.95,"spans":[{"offset":169,"length":19}]},"Quantity":{"type":"number","valueNumber":20,"content":"20","boundingRegions":[{"pageNumber":1,"boundingBox":[860,1093,891,1093,891,1125,860,1125]}],"confidence":0.95,"spans":[{"offset":498,"length":2}]},"Website":{"type":"string","valueString":"www.herolimited.com","content":"www.herolimited.com","boundingRegions":[{"pageNumber":1,"boundingBox":[272,392,522,392,522,419,272,419]}],"confidence":0.95,"spans":[{"offset":65,"length":19}]},"FullSignature":{"type":"signature","valueSignature":"signed","content":"","boundingRegions":[{"pageNumber":1,"boundingBox":[439,1658,811,1658,811,1721,439,1721]}],"confidence":0.95},"Signature":{"type":"string","confidence":0.919},"Tax":{"type":"string","valueString":"$4.00","content":"$4.00","boundingRegions":[{"pageNumber":1,"boundingBox":[1458,1613,1528,1613,1528,1642,1458,1642]}],"confidence":0.95,"spans":[{"offset":727,"length":5}]},"PhoneNumber":{"type":"string","valueString":"555-348-6512","content":"555-348-6512","boundingRegions":[{"pageNumber":1,"boundingBox":[366,350,526,350,526,378,366,378]}],"confidence":0.95,"spans":[{"offset":43,"length":12}]}},"confidence":0.92,"spans":[{"offset":0,"length":880}]}]}}, [
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-envoy-upstream-service-time',
  '42',
  'apim-request-id',
  '219af345-fccb-4a1e-93ca-682ad8b552ff',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Tue, 01 Feb 2022 16:48:50 GMT'
]);
