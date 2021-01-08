import axios from "axios";

const api = axios.create({
  baseURL: "https://5ff71a40e7164b0017e1a256.mockapi.io",
});

async function getExtras() {
  let data = true;

  await api
    .get("/extras")
    .then(response => {
      if (response) data = response.data;
    })
    .catch(err => console.log("Error: ", err));

  return data;
}

async function deleteExtra(id) {
  let data = false;

  await api
    .delete(`/extras/${id}`)
    .then(response => {
      if (response) data = true;
    })
    .catch(err => {
      console.log("Err", err);
    });

  return data;
}

const exportDate = { getExtras, deleteExtra };

export default exportDate;
