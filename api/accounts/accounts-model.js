
const db = require('../../data/db-config');


const getAll = () => {
  // DO YOUR MAGIC
  return db('accounts');
}

const getById = id => {
  return db('accounts').where('id', id).first()
}

const create = async account => {
  const [id] = await db('accounts').insert(account)
  return getById(id)
}

const uniqueName = name => {
  return db('accounts')
    .where('name', name.trim())
    .first()
}

const updateById = (id, account) => {
  // DO YOUR MAGIC
}

const deleteById = id => {
  return db('accounts').where('id', id).del()
}

module.exports = {
  getAll,
  getById,
  create,
  uniqueName,
  updateById,
  deleteById,
}
