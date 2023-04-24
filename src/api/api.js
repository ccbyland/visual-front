import http from './http.js'

class API {
  test() {
    return http.get('test')
  }
  getChartData() {
    // return http.get('chartData')
    return new Promise((resolve) => {
      resolve({
        "data": [
          {
            "time": "11:20:52",
            "code": "110000198106227425",
            "waybill_number": "62000020170414873X",
            "number": 6885,
            "city": "香港岛",
            "weight": 949
          },
          {
            "time": "15:42:49",
            "code": "210000198709137852",
            "waybill_number": "110000199501269822",
            "number": 4311,
            "city": "湘潭市",
            "weight": 706
          },
          {
            "time": "20:51:36",
            "code": "350000198308242855",
            "waybill_number": "46000020160605078X",
            "number": 3771,
            "city": "黄南藏族自治州",
            "weight": 96
          },
          {
            "time": "19:03:28",
            "code": "510000197811142574",
            "waybill_number": "130000200708036179",
            "number": 1845,
            "city": "永州市",
            "weight": 745
          },
          {
            "time": "00:42:12",
            "code": "500000197512231591",
            "waybill_number": "540000200610066114",
            "number": 1773,
            "city": "本溪市",
            "weight": 602
          },
          {
            "time": "03:15:27",
            "code": "120000200401276168",
            "waybill_number": "150000200110071117",
            "number": 8808,
            "city": "厦门市",
            "weight": 691
          },
          {
            "time": "06:46:19",
            "code": "820000199005132429",
            "waybill_number": "510000199201221565",
            "number": 5140,
            "city": "包头市",
            "weight": 924
          },
          {
            "time": "11:24:02",
            "code": "710000199802024257",
            "waybill_number": "340000199107094166",
            "number": 6658,
            "city": "吉安市",
            "weight": 765
          },
          {
            "time": "06:16:42",
            "code": "210000198505192059",
            "waybill_number": "500000199311076037",
            "number": 6007,
            "city": "攀枝花市",
            "weight": 970
          },
          {
            "time": "08:21:34",
            "code": "360000201703094027",
            "waybill_number": "610000198401248323",
            "number": 3750,
            "city": "黄南藏族自治州",
            "weight": 710
          },
          {
            "time": "21:06:20",
            "code": "540000198710095043",
            "waybill_number": "13000019970206531X",
            "number": 907,
            "city": "佳木斯市",
            "weight": 89
          },
          {
            "time": "19:37:33",
            "code": "620000199301144232",
            "waybill_number": "640000199408255227",
            "number": 2706,
            "city": "随州市",
            "weight": 994
          },
          {
            "time": "02:25:14",
            "code": "370000200806225568",
            "waybill_number": "320000199703289652",
            "number": 9775,
            "city": "铁岭市",
            "weight": 657
          },
          {
            "time": "09:51:42",
            "code": "360000197309236737",
            "waybill_number": "420000201508013435",
            "number": 3321,
            "city": "上海市",
            "weight": 657
          },
          {
            "time": "14:59:19",
            "code": "140000199412065583",
            "waybill_number": "220000199207186650",
            "number": 3207,
            "city": "潮州市",
            "weight": 933
          },
          {
            "time": "13:53:27",
            "code": "210000201704227220",
            "waybill_number": "110000199203176521",
            "number": 8582,
            "city": "上海市",
            "weight": 692
          },
          {
            "time": "09:51:22",
            "code": "620000202204250898",
            "waybill_number": "330000197911124257",
            "number": 9535,
            "city": "大庆市",
            "weight": 210
          },
          {
            "time": "02:47:06",
            "code": "370000200307203276",
            "waybill_number": "360000197902031345",
            "number": 174,
            "city": "桂林市",
            "weight": 979
          },
          {
            "time": "17:33:03",
            "code": "350000201604173641",
            "waybill_number": "430000200810176494",
            "number": 7858,
            "city": "塔城地区",
            "weight": 895
          },
          {
            "time": "23:26:08",
            "code": "820000198108134748",
            "waybill_number": "420000198204192812",
            "number": 2873,
            "city": "莆田市",
            "weight": 665
          },
          {
            "time": "23:51:24",
            "code": "500000202209208923",
            "waybill_number": "130000199311164652",
            "number": 7689,
            "city": "台州市",
            "weight": 609
          },
          {
            "time": "03:39:33",
            "code": "130000200811127802",
            "waybill_number": "320000199706221581",
            "number": 1066,
            "city": "常州市",
            "weight": 205
          },
          {
            "time": "08:00:17",
            "code": "370000197808310163",
            "waybill_number": "43000019760422178X",
            "number": 6758,
            "city": "日照市",
            "weight": 143
          },
          {
            "time": "21:01:09",
            "code": "640000198606213533",
            "waybill_number": "990000198004213296",
            "number": 1329,
            "city": "黔西南布依族苗族自治州",
            "weight": 19
          },
          {
            "time": "08:46:30",
            "code": "620000198905091720",
            "waybill_number": "630000199504057077",
            "number": 6223,
            "city": "锡林郭勒盟",
            "weight": 349
          },
          {
            "time": "10:27:41",
            "code": "310000197201142625",
            "waybill_number": "820000199704224648",
            "number": 2311,
            "city": "泰州市",
            "weight": 641
          },
          {
            "time": "05:48:08",
            "code": "420000201407151935",
            "waybill_number": "51000019760121981X",
            "number": 8876,
            "city": "中山市",
            "weight": 138
          },
          {
            "time": "19:02:34",
            "code": "33000019830329752X",
            "waybill_number": "64000019980604373X",
            "number": 7882,
            "city": "白山市",
            "weight": 271
          },
          {
            "time": "15:39:44",
            "code": "130000201207144491",
            "waybill_number": "990000200002107369",
            "number": 2894,
            "city": "文山壮族苗族自治州",
            "weight": 38
          },
          {
            "time": "23:27:20",
            "code": "230000197706014434",
            "waybill_number": "520000197009043781",
            "number": 5372,
            "city": "昌都地区",
            "weight": 528
          },
          {
            "time": "14:26:49",
            "code": "81000019940320342X",
            "waybill_number": "340000198005148464",
            "number": 3118,
            "city": "绵阳市",
            "weight": 173
          },
          {
            "time": "13:35:07",
            "code": "310000201909028341",
            "waybill_number": "370000200001084796",
            "number": 9843,
            "city": "苗栗县",
            "weight": 625
          },
          {
            "time": "18:41:55",
            "code": "610000200008238436",
            "waybill_number": "510000201704165542",
            "number": 8005,
            "city": "大庆市",
            "weight": 78
          },
          {
            "time": "13:27:38",
            "code": "340000201806276516",
            "waybill_number": "510000198107253371",
            "number": 2468,
            "city": "三沙市",
            "weight": 732
          },
          {
            "time": "01:22:34",
            "code": "650000201104223033",
            "waybill_number": "150000200210068484",
            "number": 1121,
            "city": "秦皇岛市",
            "weight": 304
          },
          {
            "time": "19:30:45",
            "code": "440000200611107308",
            "waybill_number": "460000200809105248",
            "number": 2137,
            "city": "延边朝鲜族自治州",
            "weight": 152
          },
          {
            "time": "04:53:10",
            "code": "150000202004156271",
            "waybill_number": "340000199804282058",
            "number": 3359,
            "city": "辽源市",
            "weight": 75
          },
          {
            "time": "15:41:16",
            "code": "430000197208261739",
            "waybill_number": "120000199806204941",
            "number": 9199,
            "city": "平顶山市",
            "weight": 864
          },
          {
            "time": "13:59:03",
            "code": "420000199603173824",
            "waybill_number": "220000199611297774",
            "number": 4531,
            "city": "吴忠市",
            "weight": 26
          },
          {
            "time": "06:16:37",
            "code": "650000201711051317",
            "waybill_number": "310000201806094725",
            "number": 5144,
            "city": "南阳市",
            "weight": 19
          },
          {
            "time": "18:11:32",
            "code": "150000200203018251",
            "waybill_number": "460000197410318618",
            "number": 619,
            "city": "承德市",
            "weight": 879
          },
          {
            "time": "18:12:35",
            "code": "220000197310225778",
            "waybill_number": "310000198106102427",
            "number": 2122,
            "city": "三亚市",
            "weight": 615
          },
          {
            "time": "15:02:20",
            "code": "640000198807238278",
            "waybill_number": "500000197409233740",
            "number": 3090,
            "city": "咸阳市",
            "weight": 429
          },
          {
            "time": "05:14:18",
            "code": "530000197607021525",
            "waybill_number": "310000199704133746",
            "number": 8219,
            "city": "武汉市",
            "weight": 667
          },
          {
            "time": "16:54:21",
            "code": "15000019920116820X",
            "waybill_number": "310000202110195880",
            "number": 5566,
            "city": "桂林市",
            "weight": 50
          },
          {
            "time": "06:44:45",
            "code": "210000198303091380",
            "waybill_number": "320000199110296945",
            "number": 6248,
            "city": "滁州市",
            "weight": 185
          },
          {
            "time": "11:10:22",
            "code": "650000198709111275",
            "waybill_number": "420000199202134664",
            "number": 7455,
            "city": "新界",
            "weight": 978
          },
          {
            "time": "02:50:18",
            "code": "310000201312090230",
            "waybill_number": "990000198509090375",
            "number": 2433,
            "city": "天津市",
            "weight": 790
          },
          {
            "time": "23:18:15",
            "code": "23000020160210627X",
            "waybill_number": "710000198806282814",
            "number": 9538,
            "city": "商洛市",
            "weight": 196
          },
          {
            "time": "15:30:16",
            "code": "330000198902130238",
            "waybill_number": "990000200901309917",
            "number": 7026,
            "city": "九龙",
            "weight": 692
          },
          {
            "time": "03:53:31",
            "code": "150000201501167276",
            "waybill_number": "350000201107236429",
            "number": 4114,
            "city": "海外",
            "weight": 24
          },
          {
            "time": "23:04:37",
            "code": "500000199202225427",
            "waybill_number": "450000200806184516",
            "number": 7506,
            "city": "上海市",
            "weight": 629
          },
          {
            "time": "21:42:44",
            "code": "450000201707014962",
            "waybill_number": "540000197912082975",
            "number": 5269,
            "city": "三亚市",
            "weight": 603
          },
          {
            "time": "04:29:38",
            "code": "640000200101139251",
            "waybill_number": "320000198109187552",
            "number": 3705,
            "city": "绍兴市",
            "weight": 100
          },
          {
            "time": "07:43:07",
            "code": "430000201111140446",
            "waybill_number": "210000198503263220",
            "number": 2306,
            "city": "天津市",
            "weight": 247
          },
          {
            "time": "23:41:18",
            "code": "810000197706193725",
            "waybill_number": "220000199305020590",
            "number": 8034,
            "city": "淮北市",
            "weight": 532
          },
          {
            "time": "22:59:54",
            "code": "130000199203097333",
            "waybill_number": "150000201803162411",
            "number": 751,
            "city": "广安市",
            "weight": 403
          },
          {
            "time": "18:30:02",
            "code": "230000200304223430",
            "waybill_number": "650000201911135574",
            "number": 7079,
            "city": "宜春市",
            "weight": 388
          },
          {
            "time": "00:39:56",
            "code": "510000200611162807",
            "waybill_number": "370000199701214883",
            "number": 8599,
            "city": "巢湖市",
            "weight": 612
          },
          {
            "time": "03:44:28",
            "code": "37000019750110981X",
            "waybill_number": "530000199412143660",
            "number": 4917,
            "city": "石嘴山市",
            "weight": 34
          },
          {
            "time": "02:26:02",
            "code": "460000198602240012",
            "waybill_number": "540000201103217883",
            "number": 8297,
            "city": "新界",
            "weight": 32
          },
          {
            "time": "21:12:43",
            "code": "320000199410269826",
            "waybill_number": "650000202102155481",
            "number": 3171,
            "city": "澳门半岛",
            "weight": 907
          },
          {
            "time": "02:33:21",
            "code": "450000198205272131",
            "waybill_number": "53000020061005535X",
            "number": 9708,
            "city": "彰化县",
            "weight": 202
          },
          {
            "time": "03:26:56",
            "code": "360000202303198227",
            "waybill_number": "220000199404105709",
            "number": 1797,
            "city": "滨州市",
            "weight": 524
          },
          {
            "time": "05:37:30",
            "code": "430000200308297776",
            "waybill_number": "540000202004173832",
            "number": 7774,
            "city": "连云港市",
            "weight": 921
          },
          {
            "time": "12:54:39",
            "code": "110000200507217500",
            "waybill_number": "510000201008032295",
            "number": 426,
            "city": "澳门半岛",
            "weight": 600
          },
          {
            "time": "07:11:16",
            "code": "360000200804162362",
            "waybill_number": "230000198906273486",
            "number": 1646,
            "city": "海外",
            "weight": 562
          },
          {
            "time": "22:30:29",
            "code": "14000020091001790X",
            "waybill_number": "430000198511252012",
            "number": 1731,
            "city": "广安市",
            "weight": 975
          },
          {
            "time": "15:30:58",
            "code": "640000202109303107",
            "waybill_number": "330000201507208554",
            "number": 812,
            "city": "塔城地区",
            "weight": 169
          },
          {
            "time": "13:01:38",
            "code": "820000197602201593",
            "waybill_number": "810000201104117476",
            "number": 4655,
            "city": "株洲市",
            "weight": 412
          },
          {
            "time": "01:51:53",
            "code": "710000201709137265",
            "waybill_number": "820000197103064045",
            "number": 5450,
            "city": "中卫市",
            "weight": 41
          },
          {
            "time": "00:05:44",
            "code": "620000200311231634",
            "waybill_number": "820000199011184508",
            "number": 5164,
            "city": "南京市",
            "weight": 103
          },
          {
            "time": "01:52:13",
            "code": "640000201604271734",
            "waybill_number": "330000200907084154",
            "number": 6247,
            "city": "保定市",
            "weight": 862
          },
          {
            "time": "17:30:13",
            "code": "530000199508129978",
            "waybill_number": "650000197905248936",
            "number": 3217,
            "city": "佳木斯市",
            "weight": 759
          },
          {
            "time": "20:10:39",
            "code": "640000197410151153",
            "waybill_number": "230000200804273856",
            "number": 6046,
            "city": "汕尾市",
            "weight": 953
          },
          {
            "time": "23:20:48",
            "code": "430000199611111262",
            "waybill_number": "810000201211183364",
            "number": 7591,
            "city": "那曲地区",
            "weight": 996
          },
          {
            "time": "02:43:39",
            "code": "430000202303312454",
            "waybill_number": "610000201212239473",
            "number": 2290,
            "city": "重庆市",
            "weight": 879
          },
          {
            "time": "07:47:53",
            "code": "530000202208256873",
            "waybill_number": "500000202201162887",
            "number": 6555,
            "city": "盘锦市",
            "weight": 424
          },
          {
            "time": "07:26:25",
            "code": "520000197907304154",
            "waybill_number": "44000020021130680X",
            "number": 5607,
            "city": "汉中市",
            "weight": 205
          },
          {
            "time": "03:53:48",
            "code": "220000200104186979",
            "waybill_number": "370000199803234885",
            "number": 6278,
            "city": "肇庆市",
            "weight": 833
          },
          {
            "time": "19:03:32",
            "code": "710000198409105056",
            "waybill_number": "510000198401293892",
            "number": 8428,
            "city": "自贡市",
            "weight": 996
          },
          {
            "time": "13:58:14",
            "code": "220000200608078226",
            "waybill_number": "710000199612218288",
            "number": 5227,
            "city": "阿拉善盟",
            "weight": 286
          },
          {
            "time": "14:47:15",
            "code": "620000198406170512",
            "waybill_number": "820000201111137362",
            "number": 5154,
            "city": "延安市",
            "weight": 837
          },
          {
            "time": "00:35:33",
            "code": "340000199307282276",
            "waybill_number": "460000198203278654",
            "number": 8914,
            "city": "马鞍山市",
            "weight": 602
          },
          {
            "time": "09:34:25",
            "code": "150000201304302133",
            "waybill_number": "220000199306186111",
            "number": 3066,
            "city": "岳阳市",
            "weight": 550
          },
          {
            "time": "05:04:03",
            "code": "440000201710204650",
            "waybill_number": "460000201704076203",
            "number": 4389,
            "city": "永州市",
            "weight": 919
          },
          {
            "time": "02:52:46",
            "code": "810000202110118680",
            "waybill_number": "130000197608156507",
            "number": 9027,
            "city": "阿克苏地区",
            "weight": 712
          },
          {
            "time": "07:35:07",
            "code": "230000197312273812",
            "waybill_number": "510000197508057887",
            "number": 6974,
            "city": "襄阳市",
            "weight": 640
          },
          {
            "time": "22:25:45",
            "code": "990000199610128176",
            "waybill_number": "630000202208152242",
            "number": 2849,
            "city": "澳门半岛",
            "weight": 858
          },
          {
            "time": "19:26:58",
            "code": "330000198802253636",
            "waybill_number": "420000200802205951",
            "number": 3983,
            "city": "杭州市",
            "weight": 86
          },
          {
            "time": "13:42:52",
            "code": "520000201801168835",
            "waybill_number": "440000197110308318",
            "number": 991,
            "city": "白银市",
            "weight": 885
          },
          {
            "time": "13:51:34",
            "code": "810000198606210895",
            "waybill_number": "120000199606274515",
            "number": 6522,
            "city": "荆门市",
            "weight": 343
          },
          {
            "time": "23:55:35",
            "code": "620000199205275910",
            "waybill_number": "610000198003184512",
            "number": 7030,
            "city": "莆田市",
            "weight": 282
          },
          {
            "time": "16:17:00",
            "code": "370000199506102755",
            "waybill_number": "360000198010257925",
            "number": 4897,
            "city": "运城市",
            "weight": 541
          },
          {
            "time": "14:04:09",
            "code": "540000198605068537",
            "waybill_number": "360000199912264918",
            "number": 7807,
            "city": "贵港市",
            "weight": 855
          },
          {
            "time": "21:48:06",
            "code": "120000197906206363",
            "waybill_number": "320000197203183991",
            "number": 9140,
            "city": "彰化县",
            "weight": 242
          },
          {
            "time": "00:03:09",
            "code": "640000197309087820",
            "waybill_number": "710000201604209517",
            "number": 8443,
            "city": "辽源市",
            "weight": 525
          },
          {
            "time": "06:09:18",
            "code": "990000198011062297",
            "waybill_number": "620000200501177595",
            "number": 5049,
            "city": "金昌市",
            "weight": 712
          },
          {
            "time": "07:47:13",
            "code": "140000197602078861",
            "waybill_number": "630000201112256384",
            "number": 262,
            "city": "潮州市",
            "weight": 762
          },
          {
            "time": "19:21:18",
            "code": "540000199906103863",
            "waybill_number": "410000200010074859",
            "number": 2279,
            "city": "巴音郭楞蒙古自治州",
            "weight": 490
          }
        ]
      })
    })
  }
}

export default new API