let nock = require('nock');

module.exports.hash = "49ee0255ff279d99052929bd49bc21b8";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://endpoint:443', {"encodedQueryParams":true})
  .get('/formrecognizer/documentModels')
  .query(true)
  .reply(200, {"value":[{"modelId":"prebuilt-businessCard","createdDateTime":"2022-01-30T00:00:00Z","apiVersion":"2022-01-30-preview","description":"Prebuilt model to extract key information from English business cards, including personal contact info, company name, job title, and more."},{"modelId":"prebuilt-document","createdDateTime":"2022-01-30T00:00:00Z","apiVersion":"2022-01-30-preview","description":"Prebuilt model to extract text, selection marks, tables, entities, and general key-value pairs."},{"modelId":"prebuilt-idDocument","createdDateTime":"2022-01-30T00:00:00Z","apiVersion":"2022-01-30-preview","description":"Prebuilt model to extract key information from US driver licenses and international passports."},{"modelId":"prebuilt-invoice","createdDateTime":"2022-01-30T00:00:00Z","apiVersion":"2022-01-30-preview","description":"Prebuilt model to extract key information from English invoices, including customer, vendor, invoice ID, due date, total, and more."},{"modelId":"prebuilt-layout","createdDateTime":"2022-01-30T00:00:00Z","apiVersion":"2022-01-30-preview","description":"Prebuilt model to extract text, selection marks, tables, and other layout information."},{"modelId":"prebuilt-receipt","createdDateTime":"2022-01-30T00:00:00Z","apiVersion":"2022-01-30-preview","description":"Prebuilt model to extract key information from English receipts, including merchant name, transaction date, transaction total, and more."},{"modelId":"prebuilt-tax.us.w2","createdDateTime":"2022-01-30T00:00:00Z","apiVersion":"2022-01-30-preview","description":"Prebuilt model to extract key information from IRS US W2 tax forms (year 2018-2021)"},{"modelId":"selectionmark","createdDateTime":"2021-08-26T18:00:33Z","apiVersion":"2021-07-30-preview","description":"modelDescription"},{"modelId":"yuyun_qq","createdDateTime":"2021-11-10T04:59:19Z","apiVersion":"2021-11-30-preview"},{"modelId":"chetho-1112-abcde","createdDateTime":"2021-11-17T06:48:52Z","apiVersion":"2021-11-30-preview"},{"modelId":"rajiv_Nov_9_2","createdDateTime":"2021-11-09T15:02:57Z","apiVersion":"2021-11-30-preview"},{"modelId":"rajiv_jan_13_private_preview","createdDateTime":"2022-01-14T05:33:39Z","apiVersion":"2021-11-30-preview"},{"modelId":"chetho-2111061109","createdDateTime":"2021-11-09T15:50:27Z","apiVersion":"2021-11-30-preview"},{"modelId":"rajiv_Dec_18_ben","createdDateTime":"2021-12-18T22:29:29Z","apiVersion":"2021-11-30-preview","tags":{"modelType":"document"}},{"modelId":"chetho-1121_Test_form","createdDateTime":"2021-11-05T04:40:27Z","apiVersion":"2021-07-30-preview"},{"modelId":"rajiv_Nov_10_Compose_1","createdDateTime":"2021-11-10T18:42:24Z","apiVersion":"2021-07-30-preview"},{"modelId":"rajiv_Nov_9_Compose_1","createdDateTime":"2021-11-09T15:05:50Z","apiVersion":"2021-11-30-preview"},{"modelId":"4c9539d3-8284-4ff6-b1b4-f0edec6e5e0b","createdDateTime":"2022-01-21T19:28:28Z","apiVersion":"2022-01-30-preview"},{"modelId":"07287be9-4d6f-4765-b44d-f8028f632b8b","createdDateTime":"2022-01-20T00:31:26Z","apiVersion":"2022-01-30-preview"},{"modelId":"customFormModelName164373399639301918","createdDateTime":"2022-02-01T16:46:39Z","apiVersion":"2022-01-30-preview"},{"modelId":"rajiv_Nov_9_1","createdDateTime":"2021-11-09T15:01:49Z","apiVersion":"2021-11-30-preview"},{"modelId":"input2164331089610309085","createdDateTime":"2022-01-27T19:14:59Z","apiVersion":"2022-01-30-preview"},{"modelId":"customFormModelName164330505335909794","createdDateTime":"2022-01-27T17:37:39Z","apiVersion":"2022-01-30-preview"},{"modelId":"composedModelName164331090306002599","createdDateTime":"2022-01-27T19:15:03Z","apiVersion":"2022-01-30-preview"},{"modelId":"rajiv_Dec_29","createdDateTime":"2021-12-29T22:33:35Z","apiVersion":"2021-11-30-preview","tags":{"modelType":"document"}},{"modelId":"rajiv_jan_13_public_preview_old_api_2","createdDateTime":"2022-01-17T00:47:44Z","apiVersion":"2021-11-30-preview"},{"modelId":"rajiv_jan_13_private_preview_2","createdDateTime":"2022-01-14T05:34:07Z","apiVersion":"2021-11-30-preview"},{"modelId":"7d7d31e5-b779-491c-8df3-2a8e887b43d9","createdDateTime":"2022-01-20T00:31:43Z","apiVersion":"2022-01-30-preview"},{"modelId":"chetho-1111","createdDateTime":"2021-11-10T19:01:01Z","apiVersion":"2021-11-30-preview"},{"modelId":"input1164331089610203463","createdDateTime":"2022-01-27T19:14:59Z","apiVersion":"2022-01-30-preview"},{"modelId":"rajiv_jan_10","createdDateTime":"2022-01-10T22:38:23Z","apiVersion":"2021-11-30-preview"},{"modelId":"1a5d4dc1-7c2d-495d-bcd8-0cf0b2ce328f","createdDateTime":"2022-01-20T00:32:16Z","apiVersion":"2022-01-30-preview"},{"modelId":"a6b32d1d-6c93-47ba-9c78-54df63850521","createdDateTime":"2022-01-21T19:25:38Z","apiVersion":"2022-01-30-preview"},{"modelId":"input2164365399720408600","createdDateTime":"2022-01-31T18:33:22Z","apiVersion":"2022-01-30-preview"},{"modelId":"chetho-1111-abc","createdDateTime":"2021-11-11T10:15:48Z","apiVersion":"2021-11-30-preview"},{"modelId":"d6b162bd-e6ec-476a-928d-fa803405cc22","createdDateTime":"2022-01-21T19:29:31Z","apiVersion":"2022-01-30-preview"},{"modelId":"yuyun_q2","createdDateTime":"2021-11-11T23:10:07Z","apiVersion":"2021-11-30-preview"},{"modelId":"rajiv_Nov_23_2","createdDateTime":"2021-11-23T12:43:05Z","apiVersion":"2021-11-30-preview","tags":{"modelType":"document"}},{"modelId":"a73869c2-5449-43e3-a39c-2a198e970aaa","createdDateTime":"2022-01-21T19:28:35Z","apiVersion":"2022-01-30-preview"},{"modelId":"rajiv_Dec_23_ben","createdDateTime":"2021-12-23T22:04:01Z","apiVersion":"2021-11-30-preview","tags":{"modelType":"document"}},{"modelId":"rajiv_Jan1_2022","createdDateTime":"2022-01-04T21:12:28Z","apiVersion":"2021-11-30-preview","tags":{"modelType":"document"}},{"modelId":"customFormModelName164331080167403484","createdDateTime":"2022-01-27T19:13:24Z","apiVersion":"2022-01-30-preview"},{"modelId":"rajiv_Dec_16_ben","createdDateTime":"2021-12-16T15:50:34Z","apiVersion":"2021-11-30-preview","tags":{"modelType":"document"}},{"modelId":"chetho-211106chetho-20211110-a","createdDateTime":"2021-11-10T15:29:32Z","apiVersion":"2021-11-30-preview"},{"modelId":"c753225e-1142-47c3-b78b-b6b5fcbac300","createdDateTime":"2022-01-20T00:32:04Z","apiVersion":"2022-01-30-preview"},{"modelId":"578f47bd-f3f7-4e2a-8792-8008f7ad993b","createdDateTime":"2022-01-20T00:31:27Z","apiVersion":"2022-01-30-preview"},{"modelId":"customFormModelName164365387781309868","createdDateTime":"2022-01-31T18:31:23Z","apiVersion":"2022-01-30-preview"},{"modelId":"rajiv_Dec_23_large","createdDateTime":"2021-12-23T23:50:52Z","apiVersion":"2021-11-30-preview","tags":{"modelType":"document"}},{"modelId":"f976c5cc-a3cd-494f-9c29-291e0e218124","createdDateTime":"2022-01-20T02:35:24Z","apiVersion":"2022-01-30-preview"},{"modelId":"yuyun-test-composex","createdDateTime":"2021-11-10T19:19:24Z","apiVersion":"2021-11-30-preview"},{"modelId":"yuyun-testc","createdDateTime":"2021-11-10T17:02:26Z","apiVersion":"2021-07-30-preview"},{"modelId":"rajiv_jan_13_public_preview_new_api","createdDateTime":"2022-01-16T21:59:56Z","apiVersion":"2022-01-30-preview"},{"modelId":"input2164373410659503905","createdDateTime":"2022-02-01T16:48:30Z","apiVersion":"2022-01-30-preview"},{"modelId":"rajiv_Dec_30_ephemeral_2","createdDateTime":"2021-12-30T22:25:41Z","apiVersion":"2021-11-30-preview","tags":{"modelType":"document"}},{"modelId":"2a1d64b7-83a5-4990-9505-13c8c74a2479","createdDateTime":"2022-01-31T23:56:57Z","apiVersion":"2022-01-30-preview"},{"modelId":"yuyun_qq2","createdDateTime":"2021-11-10T05:25:46Z","apiVersion":"2021-11-30-preview"},{"modelId":"d9a2b5d7-80b5-4e8e-ab32-5fd63ff79283","createdDateTime":"2022-01-19T22:40:10Z","apiVersion":"2022-01-30-preview"},{"modelId":"yuyun_haha2","createdDateTime":"2021-11-10T04:51:00Z","apiVersion":"2021-11-30-preview"},{"modelId":"modelName164330867173607491","createdDateTime":"2022-01-27T18:47:16Z","apiVersion":"2022-01-30-preview"},{"modelId":"rajiv_Nov_29_v2_ocr_no_alpha_3","createdDateTime":"2021-11-29T17:23:22Z","apiVersion":"2021-11-30-preview","tags":{"modelType":"document"}},{"modelId":"yuyun_h2","createdDateTime":"2021-11-11T23:13:21Z","apiVersion":"2021-11-30-preview"},{"modelId":"rajiv_new_image_test","createdDateTime":"2022-01-20T21:40:52Z","apiVersion":"2022-01-30-preview"},{"modelId":"modelName164330834110903592","createdDateTime":"2022-01-27T18:43:39Z","apiVersion":"2022-01-30-preview"},{"modelId":"rajiv_jan_13_public_preview_new_api_2","createdDateTime":"2022-01-17T00:49:53Z","apiVersion":"2022-01-30-preview"},{"modelId":"rajiv_Nov_10_2","createdDateTime":"2021-11-10T18:41:59Z","apiVersion":"2021-07-30-preview"},{"modelId":"chetho-1112-abcd","createdDateTime":"2021-11-17T06:49:37Z","apiVersion":"2021-11-30-preview"},{"modelId":"composedModelName164365400481801096","createdDateTime":"2022-01-31T18:33:25Z","apiVersion":"2022-01-30-preview"},{"modelId":"579c3913-5067-4db9-b1e5-2cf88b12d411","createdDateTime":"2022-01-19T22:39:09Z","apiVersion":"2022-01-30-preview"},{"modelId":"rajiv_jan_13_public_preview_old_api","createdDateTime":"2022-01-16T22:01:42Z","apiVersion":"2021-11-30-preview"},{"modelId":"rajiv_Dec_30_ephemeral","createdDateTime":"2021-12-30T22:39:03Z","apiVersion":"2021-11-30-preview","tags":{"modelType":"document"}},{"modelId":"chetho-2111061110b","createdDateTime":"2021-11-10T14:58:27Z","apiVersion":"2021-11-30-preview"},{"modelId":"modelName164330804292800584","createdDateTime":"2022-01-27T18:35:48Z","apiVersion":"2022-01-30-preview"},{"modelId":"chetho-1111-ab","createdDateTime":"2021-11-11T04:58:22Z","apiVersion":"2021-11-30-preview"},{"modelId":"bb1ec4d7-813c-4491-a45a-0aa3e1dbc572","createdDateTime":"2022-01-24T23:14:53Z","apiVersion":"v2.1"},{"modelId":"rajiv_Nov_9_3_cus_form","createdDateTime":"2021-11-09T15:20:17Z","apiVersion":"2021-07-30-preview"},{"modelId":"8fffe71f-7678-4452-b4a2-84157a116812","createdDateTime":"2022-01-19T22:39:18Z","apiVersion":"2022-01-30-preview"},{"modelId":"rajiv_jan_13_private_preview_compose_acsac","createdDateTime":"2022-01-17T00:59:41Z","apiVersion":"2021-11-30-preview"},{"modelId":"input2164330518234301771","createdDateTime":"2022-01-27T17:49:08Z","apiVersion":"2022-01-30-preview"},{"modelId":"8974ef26-5703-4dd5-bbd5-7f037af25f3f","createdDateTime":"2022-01-20T00:31:57Z","apiVersion":"2022-01-30-preview"},{"modelId":"ed56d363-cd85-4afc-af22-4abc9ad9ad62","createdDateTime":"2022-01-19T22:39:07Z","apiVersion":"2022-01-30-preview"},{"modelId":"rajiv_jan_13_public_preview_compose","createdDateTime":"2022-01-17T00:52:19Z","apiVersion":"2022-01-30-preview"},{"modelId":"input1164365399720301580","createdDateTime":"2022-01-31T18:33:23Z","apiVersion":"2022-01-30-preview"},{"modelId":"yuyun-test-compose2","createdDateTime":"2021-11-10T17:16:33Z","apiVersion":"2021-11-30-preview"},{"modelId":"rajiv_jan_13_private_preview_compose_new_api","createdDateTime":"2022-01-17T00:59:00Z","apiVersion":"2021-11-30-preview"},{"modelId":"rajiv_jan_13_private_preview_compose","createdDateTime":"2022-01-14T06:18:50Z","apiVersion":"2021-11-30-preview"},{"modelId":"input1164373410659402637","createdDateTime":"2022-02-01T16:48:30Z","apiVersion":"2022-01-30-preview"},{"modelId":"input1164330518234103289","createdDateTime":"2022-01-27T17:52:13Z","apiVersion":"2022-01-30-preview"},{"modelId":"rajiv_Nov_9_3_cus_form2","createdDateTime":"2021-11-09T15:21:20Z","apiVersion":"2021-07-30-preview"},{"modelId":"rajiv_Nov_23_1","createdDateTime":"2021-11-23T12:36:58Z","apiVersion":"2021-11-30-preview","tags":{"modelType":"document"}},{"modelId":"81dcf8fb-4f7a-4d12-ab13-d4543ab18c91","createdDateTime":"2022-01-21T19:29:22Z","apiVersion":"2022-01-30-preview"},{"modelId":"composedModelName164373411356202147","createdDateTime":"2022-02-01T16:48:34Z","apiVersion":"2022-01-30-preview"},{"modelId":"66d2c4a5-c118-4137-853d-9cb27d1a78e0","createdDateTime":"2022-01-19T22:39:05Z","apiVersion":"2022-01-30-preview"},{"modelId":"modelName164373411918807673","createdDateTime":"2022-02-01T16:48:42Z","apiVersion":"2022-01-30-preview"},{"modelId":"labeledtablesdynamicrows3","createdDateTime":"2021-08-25T18:30:23Z","apiVersion":"2021-07-30-preview","description":"modelDescription"},{"modelId":"f27012b8-b6c0-4ef3-99b8-3e9c222aac80","createdDateTime":"2022-01-21T19:33:08Z","apiVersion":"2022-01-30-preview"},{"modelId":"16dab5e9-a1e8-4df3-93d3-decc27b1a871","createdDateTime":"2022-01-19T22:40:03Z","apiVersion":"2022-01-30-preview"},{"modelId":"831c528d-3cc4-462d-a50b-1c48f2f31c44","createdDateTime":"2022-01-21T19:32:09Z","apiVersion":"2022-01-30-preview"},{"modelId":"28e02c4e-3874-4d15-89bb-c382cd7b6a4c","createdDateTime":"2022-01-20T00:31:26Z","apiVersion":"2022-01-30-preview"},{"modelId":"rajiv_Nov_29_v2_fail","createdDateTime":"2021-11-29T19:41:41Z","apiVersion":"2021-11-30-preview","tags":{"modelType":"document"}}]}, [
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-envoy-upstream-service-time',
  '2263',
  'apim-request-id',
  '93393509-f060-4ea3-8349-c7ebffdf5a96',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Tue, 01 Feb 2022 16:48:53 GMT'
]);
