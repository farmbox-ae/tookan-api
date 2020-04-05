var request = require('request');

/*
 AGENT API's
 */

Client.prototype.editAgent = function (object) {
  return new Promise((resolve, reject) => {
    object.api_key = this.api_key;
    sendPostRequest({ url: this.url + "edit_agent", data: object }, (response) => {
      resolve(response);
    });
  });
};

Client.prototype.addAgent = function (object) {
  return new Promise((resolve, reject) => {
    object.api_key = this.api_key;
    sendPostRequest({ url: this.url + "add_agent", data: object }, (response) => {
      resolve(response);
    });
  });
};

Client.prototype.getAllAgents = function (object) {
  return new Promise((resolve, reject) => {
    object.api_key = this.api_key;
    sendPostRequest({ url: this.url + "get_available_agents", data: object }, (response) => {
      resolve(response);
    });
  });
};

Client.prototype.blockAndUnblockAgent = function (object) {
  return new Promise((resolve, reject) => {
    object.api_key = this.api_key;
    sendPostRequest({ url: this.url + "block_and_unblock_agent", data: object }, (response) => {
      resolve(response);
    });
  });
};

Client.prototype.viewAgentProfile = function (object) {
  return new Promise((resolve, reject) => {
    object.api_key = this.api_key;
    sendPostRequest({ url: this.url + "view_fleet_profile", data: object }, (response) => {
      resolve(response);
    });
  });
};

Client.prototype.updateAgentTags = function (object) {
  return new Promise((resolve, reject) => {
    object.api_key = this.api_key;
    sendPostRequest({ url: this.url + "update_fleet_tags", data: object }, (response) => {
      resolve(response);
    });
  });
};

Client.prototype.getAgentTags = function (object) {
  return new Promise((resolve, reject) => {
    object.api_key = this.api_key;
    sendPostRequest({ url: this.url + "get_fleet_tags", data: object }, (response) => {
      resolve(response);
    });
  });
};

Client.prototype.getAgentLogs = function (object) {
  return new Promise((resolve, reject) => {
    object.api_key = this.api_key;
    sendPostRequest({ url: this.url + "get_agent_duty_logs", data: object }, (response) => {
      resolve(response);
    });
  });
};

Client.prototype.getAgentLocation = function (object) {
  return new Promise((resolve, reject) => {
    object.api_key = this.api_key;
    sendPostRequest({ url: this.url + "get_fleet_location", data: object }, (response) => {
      resolve(response);
    });
  });
};

Client.prototype.sendNotificationToAgent = function (object) {
  return new Promise((resolve, reject) => {
    object.api_key = this.api_key;
    sendPostRequest({ url: this.url + "send_notification", data: object }, (response) => {
      resolve(response);
    });
  });
};

Client.prototype.getAgentSchedule = function (object) {
  return new Promise((resolve, reject) => {
    object.api_key = this.api_key;
    sendPostRequest({ url: this.url + "get_fleets_availability", data: object }, (response) => {
      resolve(response);
    });
  });
};

Client.prototype.assignAgentToTask = function (object) {
  return new Promise((resolve, reject) => {
    object.api_key = this.api_key;
    sendPostRequest({ url: this.url + "assign_fleet_to_task", data: object }, (response) => {
      resolve(response);
    });
  });
};

Client.prototype.deleteAgent = function (object) {
  return new Promise((resolve, reject) => {
    object.api_key = this.api_key;
    sendPostRequest({ url: this.url + "delete_fleet_account", data: object }, (response) => {
      resolve(response);
    });
  });
};

/*
 TASK API's
 */

Client.prototype.createTask = function (object) {
  return new Promise((resolve, reject) => {
    object.api_key = this.api_key;
    sendPostRequest({ url: this.url + "create_task", data: object }, (response) => {
      resolve(response);
    });
  });
};

Client.prototype.createMultipleTasks = function (object) {
  return new Promise((resolve, reject) => {
    object.api_key = this.api_key;
    sendPostRequest({ url: this.url + "create_multiple_tasks", data: object }, (response) => {
      resolve(response);
    });
  });
};

Client.prototype.getTaskDetails = function (object) {
  return new Promise((resolve, reject) => {
    object.api_key = this.api_key;
    sendPostRequest({ url: this.url + "get_task_details", data: object }, (response) => {
      resolve(response);
    });
  });
};

Client.prototype.getTaskDetailsFromOrderId = function (object) {
  return new Promise((resolve, reject) => {
    object.api_key = this.api_key;
    sendPostRequest({ url: this.url + "get_job_details_by_order_id", data: object }, (response) => {
      resolve(response);
    });
  });
};

Client.prototype.editTask = function (object) {
  return new Promise((resolve, reject) => {
    object.api_key = this.api_key;
    sendPostRequest({ url: this.url + "edit_task", data: object }, (response) => {
      resolve(response);
    });
  });
};

Client.prototype.editMultipleTask = function (object) {
  return new Promise((resolve, reject) => {
    object.api_key = this.api_key;
    sendPostRequest({ url: this.url + "edit_multiple_tasks", data: object }, (response) => {
      resolve(response);
    });
  });
};

Client.prototype.updateTaskStatus = function (object) {
  return new Promise((resolve, reject) => {
    object.api_key = this.api_key;
    sendPostRequest({ url: this.url + "update_task_status", data: object }, (response) => {
      resolve(response);
    });
  });
};

Client.prototype.startTask = function (object) {
  return new Promise((resolve, reject) => {
    object.api_key = this.api_key;
    sendPostRequest({ url: this.url + "update_task_status", data: object }, (response) => {
      resolve(response);
    });
  });
};

Client.prototype.cancelTask = function (object) {
  return new Promise((resolve, reject) => {
    object.api_key = this.api_key;
    sendPostRequest({ url: this.url + "update_task_status", data: object }, (response) => {
      resolve(response);
    });
  });
};

Client.prototype.assignTask = function (object) {
  return new Promise((resolve, reject) => {
    object.api_key = this.api_key;
    sendPostRequest({ url: this.url + "assign_task", data: object }, (response) => {
      resolve(response);
    });
  });
};

Client.prototype.autoAssignTask = function (object) {
  return new Promise((resolve, reject) => {
    object.api_key = this.api_key;
    sendPostRequest({ url: this.url + "re_autoassign_task", data: object }, (response) => {
      resolve(response);
    });
  });
};

Client.prototype.getAllTasks = function (object) {
  return new Promise((resolve, reject) => {
    object.api_key = this.api_key;
    sendPostRequest({ url: this.url + "get_all_tasks", data: object }, (response) => {
      resolve(response);
    });
  });
};

Client.prototype.getTaskStatistics = function (object) {
  return new Promise((resolve, reject) => {
    object.api_key = this.api_key;
    sendPostRequest({ url: this.url + "user_task_stats", data: object }, (response) => {
      resolve(response);
    });
  });
};

Client.prototype.deleteTask = function (object) {
  return new Promise((resolve, reject) => {
    object.api_key = this.api_key;
    sendPostRequest({ url: this.url + "delete_task", data: object }, (response) => {
      resolve(response);
    });
  });
};

/*
 TEAM API's
 */

Client.prototype.createTeam = function (object) {
  return new Promise((resolve, reject) => {
    object.api_key = this.api_key;
    sendPostRequest({ url: this.url + "create_team", data: object }, (response) => {
      resolve(response);
    });
  });
};

Client.prototype.updateTeam = function (object) {
  return new Promise((resolve, reject) => {
    object.api_key = this.api_key;
    sendPostRequest({ url: this.url + "update_team", data: object }, (response) => {
      resolve(response);
    });
  });
};

Client.prototype.deleteTeam = function (object) {
  return new Promise((resolve, reject) => {
    object.api_key = this.api_key;
    sendPostRequest({ url: this.url + "delete_team", data: object }, (response) => {
      resolve(response);
    });
  });
};

Client.prototype.getTeamDetails = function (object) {
  return new Promise((resolve, reject) => {
    object.api_key = this.api_key;
    sendPostRequest({ url: this.url + "view_teams", data: object }, (response) => {
      resolve(response);
    });
  });
};

Client.prototype.getJobAndAgentDetails = function (object) {
  return new Promise((resolve, reject) => {
    object.api_key = this.api_key;
    sendPostRequest({ url: this.url + "get_job_and_fleet_details", data: object }, (response) => {
      resolve(response);
    });
  });
};

/*
 MANAGER API's
 */

Client.prototype.createManager = function (object) {
  return new Promise((resolve, reject) => {
    object.api_key = this.api_key;
    sendPostRequest({ url: this.url + "add_manager", data: object }, (response) => {
      resolve(response);
    });
  });
};

Client.prototype.viewManager = function (object) {
  return new Promise((resolve, reject) => {
    object.api_key = this.api_key;
    sendPostRequest({ url: this.url + "view_all_manager", data: object }, (response) => {
      resolve(response);
    });
  });
};

Client.prototype.deleteManager = function (object) {
  return new Promise((resolve, reject) => {
    object.api_key = this.api_key;
    sendPostRequest({ url: this.url + "delete_manager", data: object }, (response) => {
      resolve(response);
    });
  });
};

/*
 CUSTOMER API's
 */

Client.prototype.getCustomers = function (object) {
  return new Promise((resolve, reject) => {
    object.api_key = this.api_key;
    sendPostRequest({ url: this.url + "get_all_customers", data: object }, (response) => {
      resolve(response);
    });
  });
};

Client.prototype.addCustomer = function (object) {
  return new Promise((resolve, reject) => {
    object.api_key = this.api_key;
    sendPostRequest({ url: this.url + "customer/add", data: object }, (response) => {
      resolve(response);
    });
  });
};

Client.prototype.editCustomer = function (object) {
  return new Promise((resolve, reject) => {
    object.api_key = this.api_key;
    sendPostRequest({ url: this.url + "customer/edit", data: object }, (response) => {
      resolve(response);
    });
  });
};

Client.prototype.deleteCustomer = function (object) {
  return new Promise((resolve, reject) => {
    object.api_key = this.api_key;
    sendPostRequest({ url: this.url + "delete_customer", data: object }, (response) => {
      resolve(response);
    });
  });
};

Client.prototype.findCustomerWithPhone = function (object) {
  return new Promise((resolve, reject) => {
    object.api_key = this.api_key;
    sendPostRequest({ url: this.url + "find_customer_with_phone", data: object }, (response) => {
      resolve(response);
    });
  });
};

Client.prototype.findCustomerWithName = function (object) {
  return new Promise((resolve, reject) => {
    object.api_key = this.api_key;
    sendPostRequest({ url: this.url + "find_customer_with_name", data: object }, (response) => {
      resolve(response);
    });
  });
};

Client.prototype.viewCustomerProfile = function (object) {
  return new Promise((resolve, reject) => {
    object.api_key = this.api_key;
    sendPostRequest({ url: this.url + "view_customer_profile", data: object }, (response) => {
      resolve(response);
    });
  });
};

/*
 MERCHANT API's
 */

Client.prototype.createMerchant = function (object) {
  return new Promise((resolve, reject) => {
    object.api_key = this.api_key;
    sendPostRequest({ url: this.url + "merchant/sign_up", data: object }, (response) => {
      resolve(response);
    });
  });
};

Client.prototype.viewMerchant = function (object) {
  return new Promise((resolve, reject) => {
    object.api_key = this.api_key;
    sendPostRequest({ url: this.url + "merchant/get_merchant", data: object }, (response) => {
      resolve(response);
    });
  });
};

Client.prototype.editMerchant = function (object) {
  return new Promise((resolve, reject) => {
    object.api_key = this.api_key;
    sendPostRequest({ url: this.url + "merchant/edit_merchant", data: object }, (response) => {
      resolve(response);
    });
  });
};

Client.prototype.getMerchantDetails = function (object) {
  return new Promise((resolve, reject) => {
    object.api_key = this.api_key;
    sendGetRequest({ url: this.url + "merchant/get_merchant_data", data: object }, (response) => {
      resolve(response);
    });
  });
};

Client.prototype.getMerchantReport = function (object) {
  return new Promise((resolve, reject) => {
    object.api_key = this.api_key;
    sendGetRequest({ url: this.url + "merchant/report", data: object }, (response) => {
      resolve(response);
    });
  });
};

Client.prototype.blockAndUnblockMerchant = function (object) {
  return new Promise((resolve, reject) => {
    object.api_key = this.api_key;
    sendPostRequest({ url: this.url + "merchant/block_merchant", data: object }, (response) => {
      resolve(response);
    });
  });
};

Client.prototype.deleteMerchant = function (object) {
  return new Promise((resolve, reject) => {
    object.api_key = this.api_key;
    sendPostRequest({ url: this.url + "merchant/delete", data: object }, (response) => {
      resolve(response);
    });
  });
};

Client.prototype.getAvailableMerchantAgents = function (object) {
  return new Promise((resolve, reject) => {
    object.api_key = this.api_key;
    sendPostRequest({ url: this.url + "get_available_agents", data: object }, (response) => {
      resolve(response);
    });
  });
};

Client.prototype.assignMerchantAgentToTask = function (object) {
  return new Promise((resolve, reject) => {
    object.api_key = this.api_key;
    sendPostRequest({ url: this.url + "assign_fleet_to_task", data: object }, (response) => {
      resolve(response);
    });
  });
};

Client.prototype.createMerchantTask = function (object) {
  return new Promise((resolve, reject) => {
    object.api_key = this.api_key;
    sendPostRequest({ url: this.url + "create_task", data: object }, (response) => {
      resolve(response);
    });
  });
};

Client.prototype.createMultipleMerchantTasks = function (object) {
  return new Promise((resolve, reject) => {
    object.api_key = this.api_key;
    sendPostRequest({ url: this.url + "create_multiple_tasks", data: object }, (response) => {
      resolve(response);
    });
  });
};

Client.prototype.editMerchantTask = function (object) {
  return new Promise((resolve, reject) => {
    object.api_key = this.api_key;
    sendPostRequest({ url: this.url + "edit_task", data: object }, (response) => {
      resolve(response);
    });
  });
};

Client.prototype.assignMerchantToTask = function (object) {
  return new Promise((resolve, reject) => {
    object.api_key = this.api_key;
    sendPostRequest({ url: this.url + "merchant/assign_merchant_to_task", data: object }, (response) => {
      resolve(response);
    });
  });
};

Client.prototype.getMerchantTeams = function (object) {
  return new Promise((resolve, reject) => {
    object.api_key = this.api_key;
    sendPostRequest({ url: this.url + "merchant/get_merchant_teams", data: object }, (response) => {
      resolve(response);
    });
  });
};

/*
 GEOFENCE API's
 */

Client.prototype.addRegion = function (object) {
  return new Promise((resolve, reject) => {
    object.api_key = this.api_key;
    sendPostRequest({ url: this.url + "add_region", data: object }, (response) => {
      resolve(response);
    });
  });
};

Client.prototype.editRegion = function (object) {
  return new Promise((resolve, reject) => {
    object.api_key = this.api_key;
    sendPostRequest({ url: this.url + "edit_region", data: object }, (response) => {
      resolve(response);
    });
  });
};

Client.prototype.viewRegions = function (object) {
  return new Promise((resolve, reject) => {
    object.api_key = this.api_key;
    sendPostRequest({ url: this.url + "view_regions", data: object }, (response) => {
      resolve(response);
    });
  });
};

Client.prototype.viewRegionDetails = function (object) {
  return new Promise((resolve, reject) => {
    object.api_key = this.api_key;
    sendPostRequest({ url: this.url + "view_regions_only", data: object }, (response) => {
      resolve(response);
    });
  });
};

Client.prototype.removeRegionForAgent = function (object) {
  return new Promise((resolve, reject) => {
    object.api_key = this.api_key;
    sendPostRequest({ url: this.url + "remove_region_for_agent", data: object }, (response) => {
      resolve(response);
    });
  });
};

Client.prototype.deleteRegion = function (object) {
  return new Promise((resolve, reject) => {
    object.api_key = this.api_key;
    sendPostRequest({ url: this.url + "remove_region", data: object }, (response) => {
      resolve(response);
    });
  });
};

/*
 MISSION API's
 */
Client.prototype.createMission = function (object) {
  return new Promise((resolve, reject) => {
    object.api_key = this.api_key;
    sendPostRequest({ url: this.url + "create_mission_task", data: object }, (response) => {
      resolve(response);
    });
  });
};

Client.prototype.missionList = function (object) {
  return new Promise((resolve, reject) => {
    object.api_key = this.api_key;
    sendPostRequest({ url: this.url + "get_mission_list", data: object }, (response) => {
      resolve(response);
    });
  });
};

Client.prototype.deleteMission = function (object) {
  return new Promise((resolve, reject) => {
    object.api_key = this.api_key;
    sendPostRequest({ url: this.url + "delete_mission", data: object }, (response) => {
      resolve(response);
    });
  });
};

var baseConfig = {
  url: "https://api.tookanapp.com/v2/"
};

function sendPostRequest(options, cb) {
  request({
    url: options.url,
    method: "POST",
    headers: {
      'content-type': 'application/json'
    },
    json: true,
    body: options.data
  }, (error, response, body) => {
    cb(body);
  });
}

function sendGetRequest(options, cb) {
  request({
    url: options.url,
    method: "GET",
    headers: {
      'content-type': 'application/json'
    },
    json: true,
    qs: options.data
  }, (error, response, body) => {
    cb(body);
  });
}

// constructor
function Client(payload) {
  this.url = baseConfig.url;
  this.api_key = payload.api_key;
}

module.exports = Client;
