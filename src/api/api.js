import http from "./http.js";

const dataMap = {
  1: [
    {
      日期: "2023-01-01",
      地区: "北京",
      产品类别: "电子产品",
      销售额: 10000,
      利润: 2000,
      销售数量: 100,
    },
    {
      日期: "2023-01-01",
      地区: "上海",
      产品类别: "电子产品",
      销售额: 8000,
      利润: 1500,
      销售数量: 80,
    },
    {
      日期: "2023-01-01",
      地区: "北京",
      产品类别: "家居用品",
      销售额: 5000,
      利润: 1200,
      销售数量: 50,
    },
    {
      日期: "2023-01-01",
      地区: "上海",
      产品类别: "家居用品",
      销售额: 6000,
      利润: 900,
      销售数量: 60,
    },
    {
      日期: "2023-01-02",
      地区: "北京",
      产品类别: "电子产品",
      销售额: 12000,
      利润: 2500,
      销售数量: 120,
    },
    {
      日期: "2023-01-02",
      地区: "上海",
      产品类别: "电子产品",
      销售额: 9000,
      利润: 1800,
      销售数量: 90,
    },
    {
      日期: "2023-01-02",
      地区: "北京",
      产品类别: "家居用品",
      销售额: 6500,
      利润: 1000,
      销售数量: 65,
    },
    {
      日期: "2023-01-02",
      地区: "上海",
      产品类别: "家居用品",
      销售额: 7500,
      利润: 1100,
      销售数量: 75,
    },
    {
      日期: "2023-01-03",
      地区: "北京",
      产品类别: "电子产品",
      销售额: 11500,
      利润: 2200,
      销售数量: 110,
    },
    {
      日期: "2023-01-03",
      地区: "上海",
      产品类别: "电子产品",
      销售额: 9500,
      利润: 1700,
      销售数量: 95,
    },
    {
      日期: "2023-01-03",
      地区: "北京",
      产品类别: "家居用品",
      销售额: 7000,
      利润: 1300,
      销售数量: 70,
    },
  ],
};

class API {
  test() {
    return http.get("test");
  }
  getChartData({ datasetId, groupList, countList }) {
    console.error("[API getChartData]", datasetId, groupList, countList);
    // 获取数据集
    const data = dataMap[datasetId];
    // 遍历维度数据，获取对应度量值
    const res = [];
    groupList.map((group) => {
      res.push(getGroupData(data, group, countList));
    });
    // return http.get('chartData')
    return new Promise((resolve) => {
      resolve({ data: res });
    });
  }
}

function getGroupData(list, group, count) {
  const sumData = {};
  list.forEach((item) => {
    if (!sumData[item[group.name]]) {
      sumData[item[group.name]] = {};
      count.map((c) => {
        // 初始化 该维度 该度量 初始值
        sumData[item[group.name]][c.name] = 0;
      });
    }
    count.map((c) => {
      sumData[item[group.name]][c.name] += item[c.name];
    });
  });
  return sumData;
}

export default new API();
