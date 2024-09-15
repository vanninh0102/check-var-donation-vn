import { readPdfPages } from "pdf-text-reader";
import fs from "fs"; // Import the fs module for file system operations
import { parseData } from "./parseData";

async function main() {
  console.log("Reading PDF file");
  const pages = await readPdfPages({ url: "data.pdf" });
  let allTransactions = []; // Array to store transactions from all pages
  const countPages = pages.length;

  console.log(`Total pages: ${countPages}`);

  for (let index = 0; index < countPages; index++) {
    const element = pages[index];
    const pageTransactions = parseData(element?.lines);
    allTransactions.push(...pageTransactions); // Add transactions from this page
  }

  fs.writeFileSync(
    "transactions.json",
    JSON.stringify(allTransactions, null, 2)
  );
  console.log("Transactions written to transactions.json");
}

main();
