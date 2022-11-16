const router = require('express').Router();
const md = require('./accounts-middleware');
const Account = require('./accounts-model');

router.get('/', async (req, res, next) => {
  // DO YOUR 
  try{
    const accounts = await Account.getAll();
    res.json(accounts)
  }
  catch(err){
    next(err)
  }
})

router.get('/:id',
  md.checkAccountId,
  (req, res, next) => {
  // DO YOUR 
  try{

  }
  catch(err){
    next(err)
  }
})

router.post('/',
  md.checkAccountNameUnique,
  md.checkAccountPayload,
  (req, res, next) => {
  // DO YOUR 
  try{

  }
  catch(err){
    next(err)
  }
})

router.put('/:id',
  md.checkAccountId,
  md.checkAccountNameUnique,
  md.checkAccountPayload,
  (req, res, next) => {
  // DO YOUR 
  try{

  }
  catch(err){
    next(err)
  }
});

router.delete('/:id',
  md.checkAccountId,
  (req, res, next) => {
  // DO YOUR 
  try{

  }
  catch(err){
    next(err)
  }
})

router.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message,
  })
})

module.exports = router;
