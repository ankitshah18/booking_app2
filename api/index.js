const express = require("express");
const cors = require("cors");
const connectDB = require("../api/utils/db");
const authRoute = require("../api/router/auth-route");
const errorMiddleware = require("./middlewares/error-middleware");
const app = express();

const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET, POST , DELETE, PUT, PTACH",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use("/", authRoute);

// app.get("/", (req, res) => {
//   res.status(200).send("Hello from backend");
// });

app.use(errorMiddleware);
const PORT = 9000;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
  });
});
