var axios = require("axios");
var FormData = require("form-data");
var fs = require("fs");
var data = new FormData();
data.append(
  "images",
  fs.createReadStream(
    "/C:/Users/paulm/Downloads/wetransfer-804f81/20200730_145548.jpg"
  )
);
data.append("role", "authzzzzzzor");
data.append("articleId", "lui987867");
data.append("userId", "wew22");

var config = {
  method: "post",
  url: "http://localhost:8000/api/files/upload",
  headers: {
    "Content-Type": "application/json",
    "x-auth-token":
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMWNhMWIzYjAxOTgxNGNkNGY2NTcyNSIsImlhdCI6MTU5OTE1MjU2MywiZXhwIjoxNTk5MzI1MzYzfQ.vmspBJG82fo0GUMVS0mF2a-Tgg8xitdmcNnaUyLaCbk",
    ...data.getHeaders(),
  },
  data: data,
};

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
