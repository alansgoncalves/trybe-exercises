module.exports = (req, res) => {
  if (req.fileDuplicated)
  return res.status(409).json({ error: { mesage: "File already exists" } })
return res.send();
}
