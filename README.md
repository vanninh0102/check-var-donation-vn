Okay, here's a `README.md` file tailored for your Node.js/Bun.js PDF transaction extraction script:

```markdown
# PDF Transaction Extractor

This script extracts transaction data from PDF files and outputs it in JSON format. It's built with Node.js and can also be run using Bun.js.


## Features

* Extracts transaction information from PDF files.
* Outputs extracted data in a structured JSON format.
* Optimized for performance.


## Requirements

* **Hardware:**
    * Minimum 8GB RAM
    * SSD for optimal performance
* **Software:**
    * Node.js (v16 or higher) or Bun.js 
* **Dependencies:** (will be installed automatically when you run the script)
    * ... (List any specific dependencies if there are any)


## Usage

1. **Clone the repository:**
   ```bash
   git clone https://github.com/vanninh0102/check-var-donation-vn
   ```
2. **Navigate to the project directory:**
   ```bash
   cd check-var-donation-vn
   ```
3. **Install dependencies (using npm or bun):**
   ```bash
   npm install 
   # OR
   bun install 
   ```

## Performance

* Tested on an Intel CPU with 8GB RAM, the script completes extraction in under 1 minute for VCB PDF 12.000 pages.
* Performance may vary based on the complexity of the PDF file and system resources.

## Output

The script will output a JSON file containing the extracted transaction data. The output structure might look something like this:


```json
[
{
    "date": "01/09/2024",
    "raw": [
      "01/09/2024",
      "50.000 292976.010924.013647.xin cam on",
      "5213.45946"
    ],
    "money": "50000",
    "note": "292976.010924.013647.xin cam on",
    "code": "5213.45946"
  },
  {
    "date": "01/09/2024",
    "raw": [
      "01/09/2024",
      "20.000",
      "VCB.CTDK.31/03/2024.ADIDA PHAT. CT tu",
      "5090.85797",
      "0481000755821 toi 0011001932418 MAT",
      "TRAN TO QUOC VN - BAN CUU TRO TW"
    ],
    "money": "20000",
    "note": "VCB.CTDK.31/03/2024.ADIDA PHAT. CT tu 0481000755821 toi 0011001932418 MAT TRAN TO QUOC VN - BAN CUU TRO TW",
    "code": "5090.85797"
  }
]
```
Note: The JSON output may vary in format depending on the bank's PDF export specifications.



## Contributing

Contributions are welcome! If you have any suggestions or find any bugs, please submit a pull request or issue.


## License

This project is licensed under the [MIT License](LICENSE).
