import Mock from "mockjs";

Mock.mock("/api/dataset/executeByColumn", "post", {
  username: "John Smith",
  age: 28,
  gender: "male",
});
