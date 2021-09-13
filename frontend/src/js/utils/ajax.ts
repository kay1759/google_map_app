import axios from "axios";

class AjaxClass {
  getAjax(
    url: string,
    params: TAssociative,
    func: (res: TAssociative) => TAssociative,
    errfunc: (error: TAssociative) => TAssociative,
    options: TAssociative = {}
  ) {
    options["params"] = params;
    return axios
      .get(url, options)
      .then(function (res: { data: { data: TAssociative } }) {
        return func(res.data.data);
      })
      .catch(function (error: TAssociative) {
        return errfunc(error);
      });
  }

  postAjax(
    url: string,
    params: TAssociative,
    func: (res: TAssociative) => TAssociative,
    errfunc: (error: TAssociative) => TAssociative,
    options: TAssociative = {}
  ) {
    return axios
      .post(url, params, options)
      .then(function (res: { data: { data: TAssociative } }) {
        return func(res.data.data);
      })
      .catch(function (error: TAssociative) {
        return errfunc(error);
      });
  }

  putAjax(
    url: string,
    params: TAssociative,
    func: (res: TAssociative) => TAssociative,
    errfunc: (error: TAssociative) => TAssociative,
    options: TAssociative = {}
  ) {
    return axios
      .put(url, params, options)
      .then(function (res: { data: { data: TAssociative } }) {
        return func(res.data.data);
      })
      .catch(function (error: TAssociative) {
        return errfunc(error);
      });
  }

  patchAjax(
    url: string,
    params: TAssociative,
    func: (res: TAssociative) => TAssociative,
    errfunc: (error: TAssociative) => TAssociative,
    options: TAssociative = {}
  ) {
    return axios
      .patch(url, params, options)
      .then(function (res: { data: { data: TAssociative } }) {
        return func(res.data.data);
      })
      .catch(function (error: TAssociative) {
        return errfunc(error);
      });
  }

  deleteAjax(
    url: string,
    params: TAssociative,
    func: (res: TAssociative) => TAssociative,
    errfunc: (error: TAssociative) => TAssociative,
    options: TAssociative = {}
  ) {
    return axios
      .delete(url, options)
      .then(function (res: { data: { data: TAssociative } }) {
        return func(res.data.data);
      })
      .catch(function (error: TAssociative) {
        return errfunc(error);
      });
  }
}

const ajax = new AjaxClass();

const processOK = (res: TAssociative) => {
  return res;
};

const processErr = (error: { response?: { status: number } }) => {
  // console.log(error);
  if (error.response && error.response.status == 401) {
    // window.location.reload();
  } else {
    // alert(error);
  }
  return error;
};

export const getAjax = (
  url: string,
  params: TAssociative,
  options: TAssociative = {}
) => {
  return ajax.getAjax(url, params, processOK, processErr, options);
};

export const postAjax = (
  url: string,
  params: TAssociative,
  options: TAssociative = {}
) => {
  return ajax.postAjax(url, params, processOK, processErr, options);
};

export const putAjax = (
  url: string,
  params: TAssociative,
  options: TAssociative = {}
) => {
  return ajax.putAjax(url, params, processOK, processErr, options);
};

export const patchAjax = (
  url: string,
  params: TAssociative,
  options: TAssociative = {}
) => {
  return ajax.patchAjax(url, params, processOK, processErr, options);
};

export const deleteAjax = (
  url: string,
  params: TAssociative,
  options: TAssociative = {}
) => {
  return ajax.deleteAjax(url, params, processOK, processErr, options);
};
