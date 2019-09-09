import ApiConst from "./ApiConst";

var axios = require("axios");
var authToken = null;

export default class ApiHandler {
  instance = null;
  reservationLimit = 20; // number of reservations to be fetched from api

  /**
   * provides token for api calls
   * @param {token for api call} authToken
   */
  static getInstance(token) {
    if (this.instance == null) {
      this.instance = new ApiHandler();
    }
    authToken = token;
    return this.instance;
  }

  /**
   * returns header
   */
  getHeader() {
    return {
      headers:
        authToken != null && authToken != undefined
          ? this.getHeaderWithToken()
          : ""
    };
  }

  /**
   * returns header with authtoken
   */
  getHeaderWithToken() {
    return {
      token: authToken
    };
  }

  /**
   * Logs user in to the app.
   * @param {users's email address} email
   * @param {user's password} password
   */
  getUserData(userId, loggedin_user_id) {
    return new Promise((resolve, reject) => {
      postData = { user_id: userId, loggedin_user_id: loggedin_user_id };
      axios
        .post(
          ApiConst.BASE_URL +
            "/test_staging_merged/ocr-web/mbapiv2/mbapiv2directory/getStaticDirectoryData",
          postData
        )
        .then(function(response) {
          return resolve({ response });
        })
        .catch(function(error) {
          return reject({ error });
        });
    });
  }
}
