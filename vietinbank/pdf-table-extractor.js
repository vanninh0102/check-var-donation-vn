import pdf_table_extractor from "pdf-table-extractor-forked";
import fs from "fs";

function success(result) {
  const data = [];
  const countArr = result.pageTables.length;
  for (let i = 0; i < countArr; i++) {
    data.push(...result.pageTables[i].tables);
  }
  fs.writeFileSync(
    "vietinbank/transaction.json",
    JSON.stringify(data, null, 2)
  );
}

//Error
function error(err) {
  console.error("Error: " + err);
}

var buffer = fs.readFileSync("vietinbank/data.pdf");

pdf_table_extractor(buffer, success, error);
