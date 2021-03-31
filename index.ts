import express from "express";
import router from "./src/routes/index";
import cors from "cors";
import path from "path";

const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, 'frontend', 'build')));

app.use("/", router);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/frontend/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at port ${PORT}`);
});
