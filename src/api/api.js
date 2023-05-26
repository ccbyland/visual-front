// import http from "./http.js";

/**
 * request
 * 
 * {"data":{"id":"1101560227625594880","dimensions":[{"key":"城市","condition":"group"},{"key":"重量","condition":"sum"},{"key":"费用","condition":"sum"}],"spaceId":1}}
 */

/**
 * response
 * 
 * {"code":0,"data":[{"城市":"北京","重量":222.0,"费用":534.0},{"城市":"南昌","重量":2138.0,"费用":3448.0},{"城市":"桂林","重量":1220.0,"费用":1112.0},{"城市":"武汉","重量":1899.0,"费用":4814.0},{"城市":"深圳市","重量":230.0,"费用":224.0},{"城市":"茂名","重量":270.0,"费用":1214.0},{"城市":"长沙","重量":1111.0,"费用":8.0}],"msg":"ok","success":true}
 */

// class API {
//   test() {
//     return http.get("test");
//   }
//   getChartData({ datasetId, groupList, countList }) {
//     console.error("[API getChartData]", datasetId, groupList, countList);
//     // 获取数据集
//     const data = dataMap[datasetId];
//     // 遍历维度数据，获取对应度量值
//     const res = [];
//     groupList.map((group) => {
//       res.push(getGroupData(data, group, countList));
//     });
//     // return http.get('chartData')
//     return new Promise((resolve) => {
//       resolve({ data: res });
//     });
//   }
// }

// function getGroupData(list, group, count) {
//   const sumData = {};
//   list.forEach((item) => {
//     if (!sumData[item[group.name]]) {
//       sumData[item[group.name]] = {};
//       count.map((c) => {
//         // 初始化 该维度 该度量 初始值
//         sumData[item[group.name]][c.name] = 0;
//       });
//     }
//     count.map((c) => {
//       sumData[item[group.name]][c.name] += item[c.name];
//     });
//   });
//   return sumData;
// }

// export default new API();
