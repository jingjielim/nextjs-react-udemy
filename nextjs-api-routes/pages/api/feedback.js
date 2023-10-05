import path from "path";
import fs from "fs";

function handler(req, res) {
  if (req.method === "POST") {
    const email = req.body.email;
    const feedbackText = req.body.feedbackText;

    const newFeedback = {
      id: new Date().toISOString(),
      email: email,
      text: feedbackText,
    };

    // store feedback in a database
    const filePath = path.join(process.cwd(), "data", "feedback.json");
    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData);
    data.push(newFeedback);
    fs.writeFileSync(data);
    res.status(200).json({ message: "Success!", feedback: newFeedback });
  } else {
    res.status(200).json({ message: "This works!" });
  }
}

export default handler;
