/**
 * @param {string[]} data
 */
export function parseData(data) {
  const start_debug = 1;

  const transactions = [];

  const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
  const moneyRegex = /^([1-9]{1}[0-9]{0,2})(\.\d{3})*?$/;

  let currentTransaction = {};
  let line_count = 0;
  for (let item of data) {
    item = item.trim();

    if (item.startsWith("Postal address:")) break;

    if (dateRegex.test(item)) {
      line_count = 1;
      if (currentTransaction.date) {
        transactions.push(currentTransaction);
        currentTransaction = {};
      }
      currentTransaction.date = item;
    }

    if (!line_count) continue;

    if (line_count == 2) {
      const check_space = item.trim().indexOf(" ");

      if (check_space != -1) {
        const split_space = [
          item.slice(0, check_space),
          item.slice(check_space + 1),
        ];
        currentTransaction.money = split_space[0].replaceAll(".", "");
        if (!moneyRegex.test(split_space[1].trim())) {
          currentTransaction.note = split_space[1];
        }
      } else {
        currentTransaction.money = item.trim().replaceAll(".", "");
      }
    }

    if (line_count == 3) {
      if (currentTransaction.note) currentTransaction.code = item;
      if (!currentTransaction.note) currentTransaction.note = item;
    }

    if (line_count == 4) {
      if (currentTransaction.code) currentTransaction.note = item;
      if (!currentTransaction.code) currentTransaction.code = item;
    }

    if (line_count > 4) {
      currentTransaction.note += " " + item;
    }

    if (start_debug) {
      if (!currentTransaction.raw) currentTransaction.raw = [];
      currentTransaction.raw.push(item);
    }

    line_count++;
  }

  if (currentTransaction.date && currentTransaction.code) {
    transactions.push(currentTransaction);
  }

  return transactions;
}

// const data = [
//   "Ngày GD/",
//   "Số tiền ghi nợ/    Số tiền ghi có/      Số dư/           Nội dung chi tiết/",
//   "TNX Date",
//   "Debit        Credit         Balance            Transactions in detail",
//   "Số CT/ Doc No",
//   "",
//   "01/09/2024",
//   "3.000",
//   "267515.010924.122904.NGUYEN THI MAO",
//   "5215.97152",
//   "Chuyen tien",
// ];

// console.log(parseData(data));
