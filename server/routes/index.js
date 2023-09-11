const express = require("express");
const axios = require("axios");
const { getSHAHash } = require("../utils");
const router = express.Router();

router.get("/get-qrcode", async (req, res) => {
  try {
    let response = await axios.post(
      "https://my.veridocglobal.com/api/generateqr",
      {},
      {
        headers: {
          apikey: process.env.VERI_DOC_PRIVATE_KEY,
          payload: await getSHAHash(
            [
              process.env.VERI_DOC_PRIVATE_KEY,
              process.env.VERI_DOC_SECRET_KEY,
            ].join("")
          ),
        },
      }
    );
    return res.json({ message: response.data });
  } catch (error) {
    console.log(error);
    return error;
  }
});

router.post("/register-doc", async (req, res) => {
  try {
    let response = await axios.post(
      "https://my.veridocglobal.com/api/submitdocument",
      {
        uniqueId: "uniqueidgoeshere",
        fileurl: "fileurlgoeshere",
        metadata:
          "Name: John Smith || Title: Test Analyst || Email: John.Smith@test.com",
        parent_delimiter: "||",
        child_delimiter: ":",
        Ispublic: 0,
        authorizedusers:
          "john.smith@abc.com; andrew.white@def.com; peter.wood@xyz.com",
        Redirecturl: "https://yourwebsiteverifypage.com/",
        IsVerificationGatewayRequired: "true or false",
        sendmetadatatoblockchain: "true",
        metadataforblockchain:
          "Add any data string or UHV here to show in blockchain record",
        isparent: 0,
        parentid: "parentidgoeshere",
      },
      {
        headers: {
          "Content-Type": "application/json",
          apikey: process.env.VERI_DOC_PRIVATE_KEY,
          payload: await getSHAHash(
            [
              process.env.VERI_DOC_PRIVATE_KEY,
              process.env.VERI_DOC_SECRET_KEY,
            ].join("")
          ),
        },
      }
    );
    return res.json({ message: response.data });
  } catch (error) {
    console.log(error);
    return error;
  }
});

module.exports = router;
