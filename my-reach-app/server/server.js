const express = require('express');
const multer = require('multer');
const xlsx = require('xlsx');
const fs = require("fs")

const app = express();
const port = 9001;

const storage  = multer.memoryStorage();
// const upload = multer({storage: storage})
const upload = multer({ dest: "uploads/"});

const ROBOFLOW_API_KEY = 'XKFX1OSLwXCVoe1qy6pu';
const WORKSPACE = "yedils-workspace";

const WORKFLOW_ID = "receipt-extraction-to-sheets-backend-1780109560470";

//ADD ROBOFLOW STUFF HERE

app.post("/receipts", upload.single("receipt"), async (req, res) => {
  try {
    const imageBase64 = fs.readFileSync(req.file.path).toString("base64");

    const rfResponse = await fetch(
      `https://serverless.roboflow.com/infer/workflows/${WORKSPACE}/${WORKFLOW_ID}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          api_key: ROBOFLOW_API_KEY,
          inputs: {
            image: {
              type: "base64",
              value: imageBase64
            }
          }
        })
      }
    );

    const rfResult = await rfResponse.json();

    if (!rfResponse.ok) {
      return res.status(500).json({ error: "Roboflow error", details: rfResult });
    }

    const receipt = rfResult.outputs?.[0]?.receipt_json || rfResult[0]?.receipt_json;

    // Example row format, adjust to match your sheet.
    const row = [
      receipt.store_name,
      receipt.purchase_date,
      receipt.subtotal,
      receipt.tax,
      receipt.total,
      receipt.payment_method,
      JSON.stringify(receipt.line_items || [])
    ];

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/upload-sheet', upload.single('sheet'), file, async(req, res) => {
    try{
        if(!req.file){
            return res.status(400).send('No File Uploaded');
        }
        const workbook = xlsx.read(req.file.buffer, {type:'buffer'});
        const sheetName = workbook.SheetNames[0];
        const jsonData = xlsx.utils.sheet_to_json(worksheet);

        res.json({
            message: "File parsed succesfully", 
            data: jsonData
        })
    }
    catch(err){
        res.status(500).sendFile("error parsing the file");
    }

});



const {google} = require('googleapis');

app.listen(port, ()=>{
    console.log("SERVER RUNNING ON PORT 3000");
})

// import { GoogleSpreadsheet } from 'google-spreadsheet';

