exports.checkAccountPayload = (req, res, next) => {
  // DO YOUR MAGIC
  // Note: you can either write "manual" validation logic
  // or use the Yup library (not currently installed)
  console.log(`Middleware payload`)
}

exports.checkAccountNameUnique = (req, res, next) => {
  // DO YOUR MAGIC
  console.log(`Middleware Unique account`)
}

exports.checkAccountId = (req, res, next) => {
  // DO YOUR MAGIC
  console.log(`Middleware ID valid`)
}
