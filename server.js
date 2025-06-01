// server.js
const express = require("express");
const axios = require("axios");
const dotenv = require("dotenv");
const CryptoJS = require("crypto-js");
const cors = require("cors");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.static("public")); // serve os arquivos da pasta "public"

const PORT = 3000;

app.get("/api/characters", async (req, res) => {
  const { name } = req.query;
  const ts = Date.now();
  const hash = CryptoJS.MD5(
    ts + process.env.PRIVATE_KEY + process.env.PUBLIC_KEY
  ).toString();

  try {
    const params = {
      ts,
      apikey: process.env.PUBLIC_KEY,
      hash,
      limit: 20,
    };

    if (name && name.trim() !== "") {
      params.nameStartsWith = name;
    }

    const marvelRes = await axios.get(
      "https://gateway.marvel.com/v1/public/characters",
      { params }
    );

    res.json(marvelRes.data);
  } catch (err) {
    console.error("Erro no proxy:", err.response?.data || err.message);
    res.status(500).json({ error: "Erro ao buscar dados da Marvel" });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
