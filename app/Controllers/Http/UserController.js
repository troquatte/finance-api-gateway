'use strict'
const User = use('App/Models/User');

class UserController {
  async create({request, response}){
    const { username, email, password } = request.body;

    //Find Email
    const findEmail = await User.query().where("email", email).first();

    //Check Email in DataBase
    if(findEmail){
      return response.status(404).json({
        status: 404,
        response: "E-mail já existente tente outro!"
      });
    };

    await User.create({
      "username": username,
      "email": email,
      "password": password,
    });

    return response.status(200).json({
      status: 200,
      response: "Conta criada com sucesso!"
    })

  }
}

module.exports = UserController
