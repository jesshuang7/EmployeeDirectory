import axios from "axios";


export default {
  getRandomEmployee: function() {
    return axios.get("https://randomuser.me/api/?results=50", {
        headers: {"Access-Control-Allow-Origin": ""}
    });
  }
};
