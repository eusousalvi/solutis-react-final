import axios from "axios";
import extrasAction from "../redux/actions/extras";

const api = axios.create({
  baseURL: "https://5ff71a40e7164b0017e1a256.mockapi.io",
});

async function getExtras(dispatch) {
  return api
    .get("/extras")
    .then(res => {
      if (res) dispatch(extrasAction.getAllExtras(res.data));
    })
    .catch(error => console.log("An error has occurred:", error));
}

function getExtrasPaginate(page, limit, dispatch) {
  return api
    .get(`/extras?page=${page}&limit=${limit}`)
    .then(res => {
      if (res) dispatch(extrasAction.getAllExtrasPaginate(res.data));
    })
    .catch(error => console.log("An error has occurred:", error));
}

async function getById(id) {
  return api
    .get(`/extras/${id}`)
    .then(res => {
      if (res.status === 200 || res.status === 201) return res.data;
    })
    .catch(error => {
      console.log("An error has occurred:", error);
      return false;
    });
}

async function create(data) {
  return api
    .post("/extras", data)
    .then(res => {
      if (res.status === 200 || res.status === 201) return true;
    })
    .catch(error => {
      console.log("An error has occurred:", error);
      return false;
    });
}

async function update(id, data) {
  return api
    .put(`/extras/${id}`, data)
    .then(res => {
      if (res.status === 200 || res.status === 201) return true;
    })
    .catch(error => {
      console.log("An error has occurred:", error);
      return false;
    });
}

async function deleteExtra(id) {
  return api
    .delete(`/extras/${id}`)
    .then(res => {
      if (res.status === 200 || res.status === 201) return true;
    })
    .catch(error => {
      console.log("An error has occurred:", error);
      return false;
    });
}

function getExtrasSize(dispatch) {
  return api
    .get("/extras")
    .then(response => {
      if (response) {
        dispatch(extrasAction.getExtrasSize(response.data.length));
      }
    })
    .catch(error => console.log("An error has occurred:", error));
}

const exportDate = {
  getExtras,
  getById,
  deleteExtra,
  create,
  update,
  getExtrasPaginate,
  getExtrasSize,
};

export default exportDate;
