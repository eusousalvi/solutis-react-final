import axios from "axios";

const api = axios.create({
  baseURL: "https://5ff73ec7e7164b0017e1a59c.mockapi.io",
});

async function getReviews() {
  let data = false;
  try {
    const response = await api.get("/reviews");

    if (response) data = response.data;
  } catch (error) {
    console.log(error);
  }
  return data;
}

async function deteleReviews(id) {

  try {
    const response = await api.delete(`/reviews/${id}`);
    const data = response.data;

    if(data) return true;
  } catch (error) {
    console.log("Ocorreu algum erro:", error);
  }

}

const apiExport = {
  getReviews,
  deteleReviews,
};

export default apiExport;
