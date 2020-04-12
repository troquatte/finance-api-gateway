'use strict'
const Env = use('Env')
const axios = use('axios');
const getAuthUsers = use('App/Controllers/Helpers/GetAuthUsers.js');


class GatWayExpenseController {
  getAuthUsers = new getAuthUsers();

  async create({request, response, auth}){
    const users_id = await this.getAuthUsers.userId({auth});
    const req      = request.body;

    const payload = {
      users_id: users_id,
      ...req
    };

    //Response axios Data
    const res = await axios.post(`${Env.get('ROUTE_EXPENSE')}/create`, { payload });

    return res.data
  }

  async read({request, response, auth}){
    const users_id = await this.getAuthUsers.userId({auth});

    const payload = {
      id: request.params.id,
      users_id: users_id,
    }

    //Response axios Data
    const res = await axios.post(`${Env.get('ROUTE_EXPENSE')}/read/`, { payload });

    return res.data
  }

  async update({request, response, auth}){
    const users_id = await this.getAuthUsers.userId({auth});
    const req = request.body.payload;

    const payload = {
      id: request.params.id,
      users_id: users_id,
      ...req
    }

    //Response axios Data
    const res = await axios.put(`${Env.get('ROUTE_EXPENSE')}/update`, { payload });

    return res.data
  }

  async delete({request, response, auth}){
    const users_id = await this.getAuthUsers.userId({auth});

    const payload = {
      id: request.params.id,
      users_id: users_id,
    }

    //Response axios Data
    const res = await axios.delete(`${Env.get('ROUTE_EXPENSE')}/delete/id/${payload.id}/user-id/${payload.users_id}`, { payload });

    return res.data
  }

  async tag({request, response}){
      //Response axios Data
      const res = await axios.get(`${Env.get('ROUTE_EXPENSE')}/tag`);

      return res.data
  }
}

module.exports = GatWayExpenseController
