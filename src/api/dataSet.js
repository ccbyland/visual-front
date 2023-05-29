// import http from "@/api/http";
// import store from "@/store/index";
// const spaceId = store.state.workSpaceId;

const sourceData = {
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

/**
 *
 * @param {*} params  {"data":{"id":"1101560227625594880","dimensions":[{"key":"城市","condition":"group"},{"key":"重量","condition":"sum"},{"key":"费用","condition":"sum"}],"spaceId":1}}
 * @returns
 */
export const datasetExcuteByColumn = async (params) => {
  const { id, dimensions } = params;
  const group = [];
  const sum = [];
  dimensions.forEach((dimension) => {
    if (dimension["condition"] === "group") {
      group.push(dimension["key"]);
    }
    if (dimension["condition"] === "sum") {
      sum.push(dimension["key"]);
    }
  });
  const dataMap = {};
  // TODO 暂仅支持一个维度
  const g = group[0];
  sourceData[id].forEach((item) => {
    if (!dataMap[g]) {
      dataMap[item[g]] = {};
    }
    sum.forEach((s) => {
      if (!dataMap[item[g]][s]) {
        dataMap[item[g]][s] = 0;
      }
      dataMap[item[g]][s] += item[s];
    });
  });
  const list = [];
  for (const k in dataMap) {
    list.push({
      [g]: k,
      ...dataMap[k],
    });
  }
  return new Promise((resolve, reject) => {
    // const e = {
    //   code: 0,
    //   data: [
    //     { 城市: "北京", 重量: 222.0, 费用: 534.0 },
    //     { 城市: "南昌", 重量: 2138.0, 费用: 3448.0 },
    //     { 城市: "桂林", 重量: 1220.0, 费用: 1112.0 },
    //     { 城市: "武汉", 重量: 1899.0, 费用: 4814.0 },
    //     { 城市: "深圳市", 重量: 230.0, 费用: 224.0 },
    //     { 城市: "茂名", 重量: 270.0, 费用: 1214.0 },
    //     { 城市: "长沙", 重量: 1111.0, 费用: 8.0 },
    //   ],
    //   msg: "ok",
    //   success: true,
    // };
    resolve(list);
    // http
    //   .post("/dataset/executeByColumn", {
    //     data: {
    //       ...params,
    //       spaceId,
    //     },
    //   })
    //   .then((res) => {
    //     resolve(res);
    //   })
    //   .catch((err) => {
    //     reject(err);
    //   });
  });
};
