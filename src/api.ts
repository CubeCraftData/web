import API from "cc-data-api-wrapper";

export default new API(10 * 1000, localStorage.getItem("api_key") ?? "");