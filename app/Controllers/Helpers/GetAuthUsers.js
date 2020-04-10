'use strict'

class GetAuthUsers {

  async userId({auth}){
    const attrUser = await auth.getUser();
    const users_id = attrUser.$attributes.id

    return users_id;
  }

}

module.exports = GetAuthUsers
