import axios from "axios";

const api = axios.create({
  baseURL: "https://5ff71a40e7164b0017e1a256.mockapi.io",
});

function getExtras() {
  const res = api.get("/extras");
  return res;
}

function getById(id) {
  const res = api.get(`/extras/${id}`);
  return res;
}

function create(data) {
  const res = api.post("/extras", data);
  return res;
}

function update(id, data) {
  const res = api.put(`extras/${id}`, data);
  return res;
}

function deleteExtra(id) {
  const res = api.delete(`/extras/${id}`);
  return res;
}

async function deleteAll(itens) {
  let isAllDeleted = false;

  try {
    for (let item of itens) {
      const res = await api.delete(`/extras/${item.id}`);
      if (!res.status || res.status !== 200) return isAllDeleted;
      setTimeout(() => {}, 500);
    }
  } catch (err) {
    return isAllDeleted;
  }

  return !isAllDeleted;
}

const exportDate = {
  getExtras,
  getById,
  deleteExtra,
  create,
  update,
  deleteAll,
};

export default exportDate;
