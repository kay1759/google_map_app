import axios from "axios";

class AjaxClass {

    getAjax(url, params, func, errfunc, options = {}) {
	options['params'] = params;
	return axios.get(url, options)
	    .then(function(res) {
		return func(res.data);
	    })
	    .catch(function(error) {
		return errfunc(error);
	    });
    };

    postAjax(url, params, func, errfunc, options = {}) {
	return axios.post(url, params, options)
	    .then(function(res) {
		return func(res.data);
	    })
	    .catch(function(error) {
		return errfunc(error);
	    });
    };

    putAjax(url, params, func, errfunc, options = {}) {
	return axios.put(url, params, options)
	    .then(function(res) {
		return func(res.data);
	    })
	    .catch(function(error) {
		return errfunc(error);
	    });
    };

    patchAjax(url, params, func, errfunc, options = {}) {
	return axios.patch(url, params, options)
	    .then(function(res) {
		return func(res.data);
	    })
	    .catch(function(error) {
		return errfunc(error);
	    });
    };

    deleteAjax(url, params, func, errfunc, options = {}) {
	return axios.delete(url, options)
	    .then(function(res) {
		return func(res.data);
	    })
	    .catch(function(error) {
		return errfunc(error);
	    });
    };
}

const ajax = new AjaxClass();

const processOK = (res) => {
    return res;
}

const processErr = (error) => {
    // console.log(error);
    if (error.response && error.response.status == 401) {
	// window.location.reload();
    } else {
	// alert(error);
    }
    return error;
}

export const getAjax = (url, params, options = {}) => {
    return ajax.getAjax(url, params, processOK, processErr, options);
};

export const postAjax = (url, params, options = {}) => {
    return ajax.postAjax(url, params, processOK, processErr, options);
};

export const putAjax = (url, params, options = {}) => {
    return ajax.putAjax(url, params, processOK, processErr, options);
};

export const patchAjax = (url, params, options = {}) => {
    return ajax.patchAjax(url, params, processOK, processErr, options);
};

export const deleteAjax = (url, params, options = {}) => {
    return ajax.deleteAjax(url, params, processOK, processErr, options);
};
