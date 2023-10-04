function handler(req,res) {
  console.log("handling request")
  res.status(200).json({message: "This works!"})
}

export default handler;