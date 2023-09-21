const express = require("express");
const axios = require("axios");
const { getSHAHash } = require("../utils");
const router = express.Router();
// const uuidv4 = require("uuid");

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
  const uniqueID = "0df07d58-d596-4676-b7df-342f891c2cf1";
  const name = "Neeraj Choubisa";
  const title = "Software Engineer";
  const number = "1234567890";
  const fileURL =
    "https://drive.google.com/file/d/1Y_PMrGnwCQo3aYTZfEi_gu1yzGkasQH_/view";
  
  const sendData = {
    uniqueId: uniqueID,
    fileurl: fileURL,
    isfileurlpublic: "1",
    metadata: `Name: ${name} || Title: ${title} || Phone: ${number}`,
    parent_delimiter: "||",
    child_delimiter: ":",
    Ispublic: 1,
    authorizedusers: "eco-grid@gmail.com",
    // Redirecturl: "https://www.google.com",
    IsVerificationGatewayRequired: "true",
    sendmetadatatoblockchain: "true",
    metadataforblockchain: `Name: ${name} || Title: ${title} || Phone: ${number}`,
    // isparent: 1,
    // parentid: "",
  };

  https: try {
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
              sendData.isfileurlpublic,
              sendData.metadata,
              sendData.parent_delimiter,
              sendData.child_delimiter,
              sendData.Ispublic,
              sendData.authorizedusers,
              // sendData.Redirecturl,
              sendData.IsVerificationGatewayRequired,
              sendData.sendmetadatatoblockchain,
              sendData.metadataforblockchain,
              // sendData.isparent,
              // sendData.parentid,
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

router.post("/verify-doc", async (req, res) => {
  const uniqueID = "0df07d58-d596-4676-b7df-342f891c2cf1";
  const sendData = {
     uniqueId: uniqueID,
   };
  
  try {
    let response = await axios.post(
      "https://my.veridocglobal.com/api/getblockchainstatus",
      sendData,
      {
        headers: {
          "Content-Type": "application/json",
          apikey: process.env.VERI_DOC_PRIVATE_KEY,
          payload: await getSHAHash(
            [
              process.env.VERI_DOC_PRIVATE_KEY,
              sendData.uniqueId,
              process.env.VERI_DOC_SECRET_KEY,
            ].join()
          ),
        },
      }


    );
    console.log(await getSHAHash(
      [
        process.env.VERI_DOC_PRIVATE_KEY,
        sendData.uniqueId,
        process.env.VERI_DOC_SECRET_KEY,
      ].join()
    ));
    return res.json({ message: response.data });
  } catch (error) {
    console.log(error);
    return error;
  }
});

module.exports = router;
