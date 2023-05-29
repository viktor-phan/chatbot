const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv").config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post("/message", (req, res) => {
  const message = req.body.prompt.toLowerCase();
  console.log(message);
  if (message == "how are you") {
    res.send({ message: "I am doing well. How about you?" });
  } else if (message == "how can i assign an article") {
    res.send({
      message:
        "As a content manager >>> Go to Publication Tab >>> Open a book contains the article >>> Expand the chapter and click select the article >>> Click Statuses and choose Assign from the dropdown >>> Choose a writer and click Assign",
    });
  } else if (message == "how can i reset the changes i just made") {
    res.send({ message: "I don't have an asnwer to your question. I will create a ticket to the Sequoia team and have them look at the issue. Can you please confirm by entering your email?" });
  } else if (message == "thang.phan@internetbrands.com") {
    res.send({ message: "Thank you, Thang! When the ticket is created, you will receive an email from Sequoia team." });
  } else if (message == "thank you") {
    res.send({ message: "My pleasure!" });
  } else {
    console.log("here");
    res.send({ message: "Sorry, I dont understand." });
  }
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
