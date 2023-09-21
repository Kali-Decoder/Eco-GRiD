const express = require("express");
const axios = require("axios");
const { getSHAHash } = require("../utils");
const router = express.Router();
const uuidv4 = require("uuid");

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
  const uniqueID = uuidv4();
  const name = "Neeraj";
  const title = "Software Engineer";
  const number = "1234567890";
  const fileURL =
    "https://drive.google.com/open?id=1E2X78s6vI2lYWyy1Vu7onFfr0jYb6t0H";
  const sendData = {
    uniqueId: uniqueID,
    fileurl: fileURL,
    metadata: `Name: ${name} || Title: ${title} || Phone: ${number}`,
    parent_delimiter: "||",
    child_delimiter: ":",
    Ispublic: 0,
    authorizedusers: "eco-grid@gmail.com",
    Redirecturl: "https://www.google.com",
    IsVerificationGatewayRequired: "true",
    sendmetadatatoblockchain: "true",
    metadataforblockchain: "Nothing to record",
    isparent: 0,
    parentid: "0xcfa038455b54714821f291814071161c9870B891",
  };

  try {
    let response = await axios.post(
      "https://my.veridocglobal.com/api/submitdocument",
      sendData,
      {
        headers: {
          "Content-Type": "application/json",
          apikey: process.env.VERI_DOC_PRIVATE_KEY,
          payload: await getSHAHash(
            [
              process.env.VERI_DOC_PRIVATE_KEY,
              sendData.uniqueId,
              sendData.fileurl,
              sendData.metadata,
              sendData.parent_delimiter,
              sendData.child_delimiter,
              sendData.Redirecturl,
              sendData.sendmetadatatoblockchain,
              sendData.metadataforblockchain,
              sendData.isparent,
              sendData.parentid,
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
