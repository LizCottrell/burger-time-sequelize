var mysql = require("mysql");
var connection;

connection = mysql.createConnection({
  host: "gzp0u91edhmxszwf.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "dk879ogz35ovvbxz",
  password: "ocxv99ft4ihbxvd0",
  database: "xzbojmzsjm2v7jcw"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;