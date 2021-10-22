const connection = require('./connection');
const { ObjectId } = require('mongodb');

const getNewUser = ({ id, firstName, lastName, email, password }) => ({
  id,
  firstName,
  lastName,
  email,
  password,
});

const getAll = async () => {
  return connection()
    .then((db) => db.collection('users').find().toArray());
};

function isValid({ firstName, lastName, email, password }) {
  const PASSWORD_REGEX = /[a-z0-9]{6,}/ig;
  const fields = [firstName, lastName, email, password];

  if (fields.includes(undefined) || fields.includes(null) || fields.includes('')) {
      return false;
  }
  return PASSWORD_REGEX.test(password);
}

const create = async (userObject) => {
  return connection()
    .then((db) => db.collection('users').insertOne(userObject))
    .then((result) => getNewUser({ id: result.insertedId, ...userObject }));
};

const getById = async (id) => {
  return connection()
    .then((db) => db.collection('users').findOne(new ObjectId(id)));
};

const updateOneById = async (id, newValues) => {
  return connection()
    .then((db) => db.collection('users').updateOne(
      {
        _id: new ObjectId(id),
      },
      {
        $set: { ...newValues },
      },
    ));
};

module.exports = { getAll, isValid, create, getById, updateOneById };
