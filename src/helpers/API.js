import * as axios from "axios";
import {setIsAjaxLoading} from "./global";


export class API {

  static postExample(name, patronymic, surname, phoneNumber, callback) {
    setIsAjaxLoading(true);

    return axios({
      method: "POST",
      url: 'https://taxiyour.ru/api/register',
      data: {
        name: name,
        patronymic: patronymic,
        surname: surname,
        phone_number: phoneNumber.replace(/\D+/ig, '')
      },
      json: true
    })
    .then(response => {
      setIsAjaxLoading(false);
      console.log(response);

      callback({});
    })
    .catch(error => {
      setIsAjaxLoading(false);
      alert("Ошибка!\n\n" + JSON.stringify(error.response));
    });
  }

  static getExample (callback) {
    setIsAjaxLoading(true);

    axios({
      method: "GET",
      url: 'https://taxiyour.ru/api/driver',
      data: {
        phone_number: localStorage.phone,
        password: localStorage.password
      },
      headers: {
        'Authorization': 'Bearer ' + localStorage.token
      },
      json: true
    })
    .then(response => {
      setIsAjaxLoading(false);
      console.log(response);

      callback({isSuccess: true});
    })
    .catch(error => {
      setIsAjaxLoading(false);
      alert("Ошибка!\n\n" + JSON.stringify(error.response));
      callback({isSuccess: false});
    });
  }

}
