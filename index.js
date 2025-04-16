const express = require("express");
const cors = require("cors");
const multer = require("multer");

const app = express();
app.use(cors());

const upload = multer({ dest: "uploads/" });

app.post("/kyc/upload", upload.fields([
  { name: "dniFrente" },
  { name: "dniDorso" },
  { name: "selfie" }
]), (req, res) => {
  console.log("Archivos recibidos:", Object.keys(req.files));
  res.json({ message: "Archivos recibidos correctamente" });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log("Servidor KYC activo en puerto", PORT));
