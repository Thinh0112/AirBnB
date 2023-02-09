import Axios from "axios";
import { DOMAIN, ACESSTOKEN, TOKENCYBERSOFT } from "../util/settings/config";

export class baseService {
  config = (_method, url, _data) => {
    return Axios({
      url: `${DOMAIN}/${url}`,
      method: _method,
      data: _data,
      headers: {
        token: localStorage.getItem(ACESSTOKEN),
        tokenByClass: TOKENCYBERSOFT,
      },
    });
  };

  put = (url, data) => {
    return this.config("PUT", url, data);
  };

  post = (url, data) => {
    return this.config("POST", url, data);
  };

  get = (url) => {
    return this.config("GET", url);
  };

  delete = (url) => {
    return this.config("DELETE", url);
  };

  // put = (url, model) => {
  //   return Axios({
  //     url: `${DOMAIN}/${url}`,
  //     method: "PUT",
  //     data: model,
  //     headers: {
  //       tokenByClass: TOKENCYBERSOFT,
  //       Authorization: "Bearer " + localStorage.getItem(ACESSTOKEN)
  //      },
  //   });
  // };

  // post = (url, model) => {
  //   return Axios({
  //     url: `${DOMAIN}/${url}`,
  //     method: "POST",
  //     data: model,
  //       headers: {
  //         tokenByClass: TOKENCYBERSOFT,
  //         Authorization: "Bearer " + localStorage.getItem(ACESSTOKEN) },
  //   });
  // };

  // get = (url) => {
  //   return Axios({
  //     url: `${DOMAIN}/${url}`,
  //     method: "GET",
  //     headers: {
  //       tokenByClass: TOKENCYBERSOFT,
  //       Authorization: "Bearer " + localStorage.getItem(ACESSTOKEN)
  //     },
  //   });
  // };

  // delete = (url) => {
  //   return Axios({
  //     url: `${DOMAIN}/${url}`,
  //     method: "DELETE",
  //     headers: {
  //       tokenByClass: TOKENCYBERSOFT,
  //       Authorization: "Bearer " + localStorage.getItem(ACESSTOKEN) },
  //   });
  // };
}
