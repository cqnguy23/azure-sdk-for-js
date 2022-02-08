let nock = require('nock');

module.exports.hash = "b57d6ff56d073adb4639c13a7962ca4b";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .get('/common/discovery/instance')
  .query(true)
  .reply(200, {"tenant_discovery_endpoint":"https://login.microsoftonline.com/12345678-1234-1234-1234-123456789012/v2.0/.well-known/openid-configuration","api-version":"1.1","metadata":[{"preferred_network":"login.microsoftonline.com","preferred_cache":"login.windows.net","aliases":["login.microsoftonline.com","login.windows.net","login.microsoft.com","sts.windows.net"]},{"preferred_network":"login.partner.microsoftonline.cn","preferred_cache":"login.partner.microsoftonline.cn","aliases":["login.partner.microsoftonline.cn","login.chinacloudapi.cn"]},{"preferred_network":"login.microsoftonline.de","preferred_cache":"login.microsoftonline.de","aliases":["login.microsoftonline.de"]},{"preferred_network":"login.microsoftonline.us","preferred_cache":"login.microsoftonline.us","aliases":["login.microsoftonline.us","login.usgovcloudapi.net"]},{"preferred_network":"login-us.microsoftonline.com","preferred_cache":"login-us.microsoftonline.com","aliases":["login-us.microsoftonline.com"]}]}, [
  'Cache-Control',
  'max-age=86400, private',
  'Content-Type',
  'application/json; charset=utf-8',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Methods',
  'GET, OPTIONS',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  '3628bcc3-cefe-45a8-929f-88b881f52a00',
  'x-ms-ests-server',
  '2.1.12381.24 - WUS2 ProdSlices',
  'Set-Cookie',
  'fpc=AoHLMhYhcztCjz3NrXMEt_k; expires=Thu, 03-Mar-2022 22:02:26 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'esctx=AQABAAAAAAD--DLA3VO7QrddgJg7Wevr4acbk9K1rx1_ETEwe3h5BJ_LrRVk5dDTdwAuEFQjVDxKGzYD3YSyB8PSc_rqxCEY_Mjj0ejJ8YLIn7fYkPFzrobB6_xV088c_KqqoaOLJ2LDRC9IMGAxq-6yZiyWd3abRSuNdFKy0ZnWQ9DgkrOFnFvrqLbDSAJs8jVhYE3hdyYgAA; domain=.login.microsoftonline.com; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Tue, 01 Feb 2022 22:02:26 GMT',
  'Content-Length',
  '980'
]);

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .get('/12345678-1234-1234-1234-123456789012/v2.0/.well-known/openid-configuration')
  .reply(200, {"token_endpoint":"https://login.microsoftonline.com/12345678-1234-1234-1234-123456789012/oauth2/v2.0/token","token_endpoint_auth_methods_supported":["client_secret_post","private_key_jwt","client_secret_basic"],"jwks_uri":"https://login.microsoftonline.com/12345678-1234-1234-1234-123456789012/discovery/v2.0/keys","response_modes_supported":["query","fragment","form_post"],"subject_types_supported":["pairwise"],"id_token_signing_alg_values_supported":["RS256"],"response_types_supported":["code","id_token","code id_token","id_token token"],"scopes_supported":["openid","profile","email","offline_access"],"issuer":"https://login.microsoftonline.com/12345678-1234-1234-1234-123456789012/v2.0","request_uri_parameter_supported":false,"userinfo_endpoint":"https://graph.microsoft.com/oidc/userinfo","authorization_endpoint":"https://login.microsoftonline.com/12345678-1234-1234-1234-123456789012/oauth2/v2.0/authorize","device_authorization_endpoint":"https://login.microsoftonline.com/12345678-1234-1234-1234-123456789012/oauth2/v2.0/devicecode","http_logout_supported":true,"frontchannel_logout_supported":true,"end_session_endpoint":"https://login.microsoftonline.com/12345678-1234-1234-1234-123456789012/oauth2/v2.0/logout","claims_supported":["sub","iss","cloud_instance_name","cloud_instance_host_name","cloud_graph_host_name","msgraph_host","aud","exp","iat","auth_time","acr","nonce","preferred_username","name","tid","ver","at_hash","c_hash","email"],"kerberos_endpoint":"https://login.microsoftonline.com/12345678-1234-1234-1234-123456789012/kerberos","tenant_region_scope":"WW","cloud_instance_name":"microsoftonline.com","cloud_graph_host_name":"graph.windows.net","msgraph_host":"graph.microsoft.com","rbac_url":"https://pas.windows.net"}, [
  'Cache-Control',
  'max-age=86400, private',
  'Content-Type',
  'application/json; charset=utf-8',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Methods',
  'GET, OPTIONS',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  '6bd12f62-f088-40f2-9731-59a3a9a0d300',
  'x-ms-ests-server',
  '2.1.12381.24 - SCUS ProdSlices',
  'Set-Cookie',
  'fpc=AqO8wOFTkAlOlaFJDutRcvk; expires=Thu, 03-Mar-2022 22:02:26 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'esctx=AQABAAAAAAD--DLA3VO7QrddgJg7Wevrma1JyxUBy8Bl2GOQb-4m8VV8128SlF_i8ayig7K8rLb_Zo9rp1tSjDOYvDCzmSYO24zgGpDBoV15LC18yO6kKW0s7chhp2aCMScuSTtccIeOqKEhzm3pXsNjaTUALNhqdBiAJ4YEN5Wg-wFJufR6ck_4e7WhVJs2igp3KVPvJAUgAA; domain=.login.microsoftonline.com; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Tue, 01 Feb 2022 22:02:26 GMT',
  'Content-Length',
  '1753'
]);

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .post('/12345678-1234-1234-1234-123456789012/oauth2/v2.0/token', "client_id=azure_client_id&scope=https%3A%2F%2Fsanitized%2F&grant_type=client_credentials&x-client-SKU=msal.js.node&x-client-VER=1.5.0&x-client-OS=linux&x-client-CPU=x64&x-ms-lib-capability=retry-after, h429&x-client-current-telemetry=5|771,2,,,|,&x-client-last-telemetry=5|0|||0,0&client-request-id=b4d5498e-c4b1-4788-ac23-dde6304eac09&client_secret=azure_client_secret&claims=%7B%22access_token%22%3A%7B%22xms_cc%22%3A%7B%22values%22%3A%5B%22cp1%22%5D%7D%7D%7D")
  .reply(200, {"token_type":"Bearer","expires_in":86399,"ext_expires_in":86399,"access_token":"access_token"}, [
  'Cache-Control',
  'no-store, no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  'e33d3f00-27e9-45c7-85ce-efda66d9a400',
  'x-ms-ests-server',
  '2.1.12381.24 - WUS2 ProdSlices',
  'x-ms-clitelem',
  '1,0,0,,',
  'Set-Cookie',
  'fpc=Ao7G2U0vMrBGvft_Rksoeik; expires=Thu, 03-Mar-2022 22:02:26 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Tue, 01 Feb 2022 22:02:26 GMT',
  'Content-Length',
  '1331'
]);

nock('https://endpoint:443', {"encodedQueryParams":true})
  .post('/formrecognizer/documentModels/prebuilt-idDocument:analyze', {"urlSource":"https://storageaccount/testingdata/license.jpg?sastoken"})
  .query(true)
  .reply(202, "", [
  'Content-Length',
  '0',
  'Operation-Location',
  'https://endpoint/formrecognizer/documentModels/prebuilt-idDocument/analyzeResults/bc6f70c6-ed03-4e8d-a18e-596df85c7a1e?api-version=2022-01-30-preview',
  'x-envoy-upstream-service-time',
  '353',
  'apim-request-id',
  'bc6f70c6-ed03-4e8d-a18e-596df85c7a1e',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Tue, 01 Feb 2022 22:02:26 GMT'
]);

nock('https://endpoint:443', {"encodedQueryParams":true})
  .get('/formrecognizer/documentModels/prebuilt-idDocument/analyzeResults/bc6f70c6-ed03-4e8d-a18e-596df85c7a1e')
  .query(true)
  .reply(200, {"status":"running","createdDateTime":"2022-02-01T22:02:26Z","lastUpdatedDateTime":"2022-02-01T22:02:26Z"}, [
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-envoy-upstream-service-time',
  '79',
  'apim-request-id',
  'fab5ce46-7254-4b7a-9c2c-a792be2d74db',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Tue, 01 Feb 2022 22:02:27 GMT'
]);

nock('https://endpoint:443', {"encodedQueryParams":true})
  .get('/formrecognizer/documentModels/prebuilt-idDocument/analyzeResults/bc6f70c6-ed03-4e8d-a18e-596df85c7a1e')
  .query(true)
  .reply(200, {"status":"running","createdDateTime":"2022-02-01T22:02:26Z","lastUpdatedDateTime":"2022-02-01T22:02:26Z"}, [
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-envoy-upstream-service-time',
  '83',
  'apim-request-id',
  'e30d0228-d988-4861-97a2-7fd798dee486',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Tue, 01 Feb 2022 22:02:27 GMT'
]);

nock('https://endpoint:443', {"encodedQueryParams":true})
  .get('/formrecognizer/documentModels/prebuilt-idDocument/analyzeResults/bc6f70c6-ed03-4e8d-a18e-596df85c7a1e')
  .query(true)
  .reply(200, {"status":"succeeded","createdDateTime":"2022-02-01T22:02:26Z","lastUpdatedDateTime":"2022-02-01T22:02:29Z","analyzeResult":{"apiVersion":"2022-01-30-preview","modelId":"prebuilt-idDocument","stringIndexType":"textElements","content":"WA WASHINGTON\n20 1234567XX1101\nDRIVER LICENSE\nFEDERAL LIMITS APPLY\n4d LIC#WDLABCD456DG 9CLASS\nDONORS\n1 TALBOT\n2 LIAM R.\n3 DOB 01/06/1958\n4a ISS 01/06/2015\n8 123 STREET ADDRESS\nYOUR CITY WA 99999-1234\n15 SEX M\n16 HGT 5'-08\"\n12 RESTRICTIONS\nB\n18 EYES BLU\n17 WGT 165 lb\n9a END L\n4b EXP 08/12/2020\n5 DDWDLABCD456DG 1234567XX1101\nVeteran\nREV 07/01/2018","pages":[{"pageNumber":1,"angle":-0.5846,"width":450,"height":294,"unit":"pixel","words":[{"content":"WA","boundingBox":[18,23,37,23,38,44,18,41],"confidence":0.868,"span":{"offset":0,"length":2}},{"content":"WASHINGTON","boundingBox":[42,23,223,23,223,46,42,44],"confidence":0.995,"span":{"offset":3,"length":10}},{"content":"20","boundingBox":[10,172,10,162,20,163,20,173],"confidence":0.994,"span":{"offset":14,"length":2}},{"content":"1234567XX1101","boundingBox":[10,153,11,83,21,83,20,153],"confidence":0.983,"span":{"offset":17,"length":13}},{"content":"DRIVER","boundingBox":[275,28,328,28,328,43,275,43],"confidence":0.994,"span":{"offset":31,"length":6}},{"content":"LICENSE","boundingBox":[334,28,397,28,397,42,334,43],"confidence":0.998,"span":{"offset":38,"length":7}},{"content":"FEDERAL","boundingBox":[259,49,319,50,319,63,259,63],"confidence":0.994,"span":{"offset":46,"length":7}},{"content":"LIMITS","boundingBox":[322,50,364,50,364,63,322,63],"confidence":0.999,"span":{"offset":54,"length":6}},{"content":"APPLY","boundingBox":[368,50,411,49,411,63,368,63],"confidence":0.992,"span":{"offset":61,"length":5}},{"content":"4d","boundingBox":[149,71,157,70,157,84,150,84],"confidence":0.979,"span":{"offset":67,"length":2}},{"content":"LIC#WDLABCD456DG","boundingBox":[160,70,314,68,314,84,160,84],"confidence":0.966,"span":{"offset":70,"length":16}},{"content":"9CLASS","boundingBox":[318,69,366,70,366,85,318,84],"confidence":0.799,"span":{"offset":87,"length":6}},{"content":"DONORS","boundingBox":[381,71,431,69,431,83,382,84],"confidence":0.148,"span":{"offset":94,"length":6}},{"content":"1","boundingBox":[150,87,158,87,158,101,151,101],"confidence":0.932,"span":{"offset":101,"length":1}},{"content":"TALBOT","boundingBox":[160,87,214,85,213,99,161,101],"confidence":0.998,"span":{"offset":103,"length":6}},{"content":"2","boundingBox":[150,103,156,102,157,116,150,116],"confidence":0.96,"span":{"offset":110,"length":1}},{"content":"LIAM","boundingBox":[159,102,189,101,189,116,159,116],"confidence":0.994,"span":{"offset":112,"length":4}},{"content":"R.","boundingBox":[199,101,213,101,213,115,199,115],"confidence":0.967,"span":{"offset":117,"length":2}},{"content":"3","boundingBox":[151,135,156,135,156,149,151,149],"confidence":0.994,"span":{"offset":120,"length":1}},{"content":"DOB","boundingBox":[159,135,185,134,185,149,159,149],"confidence":0.998,"span":{"offset":122,"length":3}},{"content":"01/06/1958","boundingBox":[188,134,272,132,272,148,188,149],"confidence":0.987,"span":{"offset":126,"length":10}},{"content":"4a","boundingBox":[315,135,324,135,324,149,316,149],"confidence":0.973,"span":{"offset":137,"length":2}},{"content":"ISS","boundingBox":[327,135,345,134,345,149,327,149],"confidence":0.652,"span":{"offset":140,"length":3}},{"content":"01/06/2015","boundingBox":[348,134,432,132,431,148,348,149],"confidence":0.995,"span":{"offset":144,"length":10}},{"content":"8","boundingBox":[151,152,157,152,157,165,151,165],"confidence":0.649,"span":{"offset":155,"length":1}},{"content":"123","boundingBox":[160,152,180,152,180,165,160,165],"confidence":0.994,"span":{"offset":157,"length":3}},{"content":"STREET","boundingBox":[183,152,235,151,235,165,184,165],"confidence":0.999,"span":{"offset":161,"length":6}},{"content":"ADDRESS","boundingBox":[238,151,300,151,300,164,238,165],"confidence":0.997,"span":{"offset":168,"length":7}},{"content":"YOUR","boundingBox":[159,163,193,164,193,177,160,177],"confidence":0.994,"span":{"offset":176,"length":4}},{"content":"CITY","boundingBox":[198,164,228,164,229,177,199,177],"confidence":0.992,"span":{"offset":181,"length":4}},{"content":"WA","boundingBox":[231,164,251,164,251,177,232,177],"confidence":0.998,"span":{"offset":186,"length":2}},{"content":"99999-1234","boundingBox":[256,164,326,163,326,177,256,177],"confidence":0.994,"span":{"offset":189,"length":10}},{"content":"15","boundingBox":[184,190,195,190,196,202,185,203],"confidence":0.997,"span":{"offset":200,"length":2}},{"content":"SEX","boundingBox":[199,190,221,189,221,201,200,202],"confidence":0.999,"span":{"offset":203,"length":3}},{"content":"M","boundingBox":[226,189,233,189,233,201,226,201],"confidence":0.994,"span":{"offset":207,"length":1}},{"content":"16","boundingBox":[185,203,195,202,195,214,185,214],"confidence":0.995,"span":{"offset":209,"length":2}},{"content":"HGT","boundingBox":[198,202,223,202,223,214,199,214],"confidence":0.996,"span":{"offset":212,"length":3}},{"content":"5'-08\"","boundingBox":[227,202,263,201,263,212,227,214],"confidence":0.973,"span":{"offset":216,"length":6}},{"content":"12","boundingBox":[185,217,196,217,196,229,186,229],"confidence":0.994,"span":{"offset":223,"length":2}},{"content":"RESTRICTIONS","boundingBox":[198,217,280,217,280,228,199,229],"confidence":0.99,"span":{"offset":226,"length":12}},{"content":"B","boundingBox":[231,228,238,228,237,240,230,239],"confidence":0.994,"span":{"offset":239,"length":1}},{"content":"18","boundingBox":[295,190,304,190,304,202,295,202],"confidence":0.994,"span":{"offset":241,"length":2}},{"content":"EYES","boundingBox":[308,190,336,189,336,201,308,202],"confidence":0.994,"span":{"offset":244,"length":4}},{"content":"BLU","boundingBox":[339,189,363,189,363,201,339,201],"confidence":0.998,"span":{"offset":249,"length":3}},{"content":"17","boundingBox":[294,203,304,203,305,215,294,216],"confidence":0.994,"span":{"offset":253,"length":2}},{"content":"WGT","boundingBox":[307,203,334,202,334,214,307,215],"confidence":0.994,"span":{"offset":256,"length":3}},{"content":"165","boundingBox":[337,202,357,201,357,214,337,214],"confidence":0.998,"span":{"offset":260,"length":3}},{"content":"lb","boundingBox":[361,201,372,201,372,214,361,214],"confidence":0.558,"span":{"offset":264,"length":2}},{"content":"9a","boundingBox":[293,217,305,216,305,228,293,228],"confidence":0.95,"span":{"offset":267,"length":2}},{"content":"END","boundingBox":[308,216,331,215,331,228,308,228],"confidence":0.998,"span":{"offset":270,"length":3}},{"content":"L","boundingBox":[337,215,343,215,343,228,337,228],"confidence":0.994,"span":{"offset":274,"length":1}},{"content":"4b","boundingBox":[293,232,304,231,305,245,293,245],"confidence":0.977,"span":{"offset":276,"length":2}},{"content":"EXP","boundingBox":[307,231,329,230,329,245,308,245],"confidence":0.999,"span":{"offset":279,"length":3}},{"content":"08/12/2020","boundingBox":[332,230,414,228,414,244,332,245],"confidence":0.992,"span":{"offset":283,"length":10}},{"content":"5","boundingBox":[155,262,159,262,159,274,155,274],"confidence":0.622,"span":{"offset":294,"length":1}},{"content":"DDWDLABCD456DG","boundingBox":[161,262,270,261,270,274,161,274],"confidence":0.994,"span":{"offset":296,"length":14}},{"content":"1234567XX1101","boundingBox":[273,261,355,261,355,274,273,274],"confidence":0.994,"span":{"offset":311,"length":13}},{"content":"Veteran","boundingBox":[389,259,434,260,433,271,388,271],"confidence":0.998,"span":{"offset":325,"length":7}},{"content":"REV","boundingBox":[366,275,384,275,384,285,367,285],"confidence":0.998,"span":{"offset":333,"length":3}},{"content":"07/01/2018","boundingBox":[386,275,434,274,434,285,387,285],"confidence":0.995,"span":{"offset":337,"length":10}}],"lines":[{"content":"WA WASHINGTON","boundingBox":[18,22,233,22,233,49,18,48],"spans":[{"offset":0,"length":13}]},{"content":"20 1234567XX1101","boundingBox":[10,173,10,82,21,82,20,173],"spans":[{"offset":14,"length":16}]},{"content":"DRIVER LICENSE","boundingBox":[275,27,401,27,401,42,275,42],"spans":[{"offset":31,"length":14}]},{"content":"FEDERAL LIMITS APPLY","boundingBox":[259,49,412,49,412,63,259,63],"spans":[{"offset":46,"length":20}]},{"content":"4d LIC#WDLABCD456DG 9CLASS","boundingBox":[148,67,365,67,365,84,148,84],"spans":[{"offset":67,"length":26}]},{"content":"DONORS","boundingBox":[380,70,431,69,431,82,381,83],"spans":[{"offset":94,"length":6}]},{"content":"1 TALBOT","boundingBox":[149,86,213,84,214,98,150,100],"spans":[{"offset":101,"length":8}]},{"content":"2 LIAM R.","boundingBox":[149,102,212,101,212,115,149,116],"spans":[{"offset":110,"length":9}]},{"content":"3 DOB 01/06/1958","boundingBox":[150,134,274,131,274,147,150,150],"spans":[{"offset":120,"length":16}]},{"content":"4a ISS 01/06/2015","boundingBox":[314,133,433,132,434,147,315,149],"spans":[{"offset":137,"length":17}]},{"content":"8 123 STREET ADDRESS","boundingBox":[150,151,303,151,303,164,150,165],"spans":[{"offset":155,"length":20}]},{"content":"YOUR CITY WA 99999-1234","boundingBox":[158,162,328,163,328,176,158,176],"spans":[{"offset":176,"length":23}]},{"content":"15 SEX M","boundingBox":[183,189,240,188,240,201,184,202],"spans":[{"offset":200,"length":8}]},{"content":"16 HGT 5'-08\"","boundingBox":[184,202,263,200,264,212,184,214],"spans":[{"offset":209,"length":13}]},{"content":"12 RESTRICTIONS","boundingBox":[185,217,283,216,283,227,185,228],"spans":[{"offset":223,"length":15}]},{"content":"B","boundingBox":[229,228,240,229,241,240,230,240],"spans":[{"offset":239,"length":1}]},{"content":"18 EYES BLU","boundingBox":[294,190,368,188,369,200,294,202],"spans":[{"offset":241,"length":11}]},{"content":"17 WGT 165 lb","boundingBox":[293,202,373,200,373,213,293,215],"spans":[{"offset":253,"length":13}]},{"content":"9a END L","boundingBox":[293,216,346,215,346,227,293,228],"spans":[{"offset":267,"length":8}]},{"content":"4b EXP 08/12/2020","boundingBox":[292,230,418,228,418,243,292,246],"spans":[{"offset":276,"length":17}]},{"content":"5 DDWDLABCD456DG 1234567XX1101","boundingBox":[154,261,354,261,354,273,154,273],"spans":[{"offset":294,"length":30}]},{"content":"Veteran","boundingBox":[388,258,436,258,436,271,388,271],"spans":[{"offset":325,"length":7}]},{"content":"REV 07/01/2018","boundingBox":[365,274,436,274,436,284,365,284],"spans":[{"offset":333,"length":14}]}],"spans":[{"offset":0,"length":347}]}],"styles":[],"documents":[{"docType":"idDocument.driverLicense","boundingRegions":[{"pageNumber":1,"boundingBox":[0,0,450,0,450,294,0,294]}],"fields":{"Address":{"type":"string","valueString":"123 STREET ADDRESS YOUR CITY WA 99999-1234","content":"123 STREET ADDRESS YOUR CITY WA 99999-1234","boundingRegions":[{"pageNumber":1,"boundingBox":[159,151,326,151,326,177,159,177]}],"confidence":0.863,"spans":[{"offset":157,"length":42}]},"CountryRegion":{"type":"countryRegion","valueCountryRegion":"USA","confidence":0.889},"DateOfBirth":{"type":"date","valueDate":"1958-01-06","content":"01/06/1958","boundingRegions":[{"pageNumber":1,"boundingBox":[188,134,272,132,272,148,188,149]}],"confidence":0.871,"spans":[{"offset":126,"length":10}]},"DateOfExpiration":{"type":"date","valueDate":"2020-08-12","content":"08/12/2020","boundingRegions":[{"pageNumber":1,"boundingBox":[332,230,414,228,414,244,332,245]}],"confidence":0.875,"spans":[{"offset":283,"length":10}]},"DocumentNumber":{"type":"string","valueString":"WDLABCD456DG","content":"LIC#WDLABCD456DG","boundingRegions":[{"pageNumber":1,"boundingBox":[160,70,314,68,314,84,160,84]}],"confidence":0.861,"spans":[{"offset":70,"length":16}]},"Endorsements":{"type":"string","valueString":"L","content":"L","boundingRegions":[{"pageNumber":1,"boundingBox":[337,215,343,215,343,228,337,228]}],"confidence":0.947,"spans":[{"offset":274,"length":1}]},"FirstName":{"type":"string","valueString":"LIAM R.","content":"LIAM R.","boundingRegions":[{"pageNumber":1,"boundingBox":[159,101,213,101,213,116,159,116]}],"confidence":0.886,"spans":[{"offset":112,"length":7}]},"LastName":{"type":"string","valueString":"TALBOT","content":"TALBOT","boundingRegions":[{"pageNumber":1,"boundingBox":[160,87,214,85,213,99,161,101]}],"confidence":0.897,"spans":[{"offset":103,"length":6}]},"Region":{"type":"string","valueString":"Washington","confidence":0.886},"Restrictions":{"type":"string","valueString":"B","content":"B","boundingRegions":[{"pageNumber":1,"boundingBox":[231,228,238,228,237,240,230,239]}],"confidence":0.889,"spans":[{"offset":239,"length":1}]},"Sex":{"type":"string","valueString":"M","content":"M","boundingRegions":[{"pageNumber":1,"boundingBox":[226,189,233,189,233,201,226,201]}],"confidence":0.872,"spans":[{"offset":207,"length":1}]}},"confidence":0.908,"spans":[{"offset":0,"length":347}]}]}}, [
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-envoy-upstream-service-time',
  '173',
  'apim-request-id',
  'c20a0283-1008-41ee-89b7-2d60cdfd1dbd',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Tue, 01 Feb 2022 22:02:31 GMT'
]);
