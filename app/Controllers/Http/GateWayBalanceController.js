'use strict'
const Env = use('Env')
const axios = require('axios');
const getAuthUsers = use('App/Controllers/Helpers/GetAuthUsers.js');

class GateWayBalanceController {
  getAuthUsers = new getAuthUsers();

  async createOrUpdate({request, response, auth}){
    const { balance } = request.body;
    const users_id = await this.getAuthUsers.userId({auth});

    //Response axios Data
    const res = await axios.post(`${Env.get('ROUTE_BALANCE')}/create-or-update`, {
      "balance": balance,
      "users_id": users_id
    });

    return res.data
  }

  async read({request, response, auth}){
    const users_id = await this.getAuthUsers.userId({auth});
    //Response axios Data
    const res = await axios.post(`${Env.get('ROUTE_BALANCE')}/read`, {
      "users_id": users_id
    });

    return res.data
  }

}

module.exports = GateWayBalanceController
