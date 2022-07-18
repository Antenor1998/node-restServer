const { response, request } = require('express');

const getUsers = (req = request, res = response) => {

      const { q, nombre = "No name", apikey } = req.query;

      res.json({
            msg: "Get API",
            q,
            nombre,
            apikey
      })
}


const putUser = (req, res = response) => {
      const id = req.params.id;
      res.json({
            msg: "Put API",
            id
      })
}


const postUser = (req, res = response) => {
      const body = req.body;


      res.json({
            msg: "Post API",
            body
      })
}

const deleteUser = (req, res = response) => {
      res.json({
            msg: "Delete API"
      })
}



module.exports = {
      getUsers,
      putUser,
      postUser,
      deleteUser
}