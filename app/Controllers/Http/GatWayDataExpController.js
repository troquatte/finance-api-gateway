'use strict'
const Env = use('Env')
const axios = use('axios');
const getAuthUsers = use('App/Controllers/Helpers/GetAuthUsers.js');

class GatWayDataExpController {
  getAuthUsers = new getAuthUsers();

  async dataListPaginator({request, response, auth}){
    const { page, tag, prev_date, curr_date } = request.all();
    const users_id = await this.getAuthUsers.userId({auth});

    //Response axios Data
    const res = await axios.get(`${Env.get('ROUTE_DATA_EXP')}/data-list-paginator/user-id/${users_id}/?tag=${tag}&page=${page}&prev_date=${prev_date}&curr_date=${curr_date}`);

    return res.data
  }

}

module.exports = GatWayDataExpController
