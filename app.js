const express = require("express");

const app = express();

app.use(express.json());

app.get("/users", (req, res) => {
  console.log("Rota GET users");
  res.json({ msg: "Resposta da rota com GET" });
});

app.post("/users", (req, res) => {
  const userMock = {
    email: "lucas.soares@email.com",
    pass: "12345",
  };
  const { email, pass } = req.body;

  if (email !== userMock.email) {
    console.log("E-mail diferente");
    return res.status(401).json({ msg: "E-mail não autorizado" });
  }

  if (pass !== userMock.pass) {
    console.log("Senha diferente");
    return res.status(401).json({ msg: "Senha não autorizado" });
  }

  console.log("Usuário autorizado");
  res.status(201).json({ msg: "Usuário autorizado" });
});

app.put("/users", (req, res) => {
  console.log("Rota PUT users");
  res.json({ msg: "Ok" });
});

app.delete("/users", (req, res) => {
  console.log("Rota DELETE users");
  res.json({ msg: "Ok" });
});

app.listen(3000, () => console.log("API Funcionando"));
