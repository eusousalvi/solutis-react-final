import axios from "axios";

const api = axios.create({
    baseURL: "https://5ff63868941eaf0017f378a8.mockapi.io/api/"
})

async function getAirports() {
    let data = false;
    await api.get("/airports").then(response => {
      if (response) data = response.data;
    }).catch(error => {
      console.log("Ocorreu algum erro:", error);
    })
  
    return data;
}

async function deleteAirport(id) {
    let data = false;
  
    await api.delete(`/airports/${id}`).then(response => {
      if (response) data = true;
    }).catch(error => {
      console.log('Ocorreu algum erro:', error)
    })
  
    return data;
  }
  
  async function searchAirports(query) {
    let data = false;
    await api.get(`/airports/?cityname=${query}`).then(response => {
      if(response) data = response.data;
    })
    .catch(error => {
      console.error("Ocorreu algum erro: ", error);
    })

    return data
  }

  async function getAirportsPaginated(page, limit) {
    let data = false;

    await api.get(`/airports/?page=${page}&limit=${limit}`).then(response => {
      if(response) data = response.data
    })
    .catch(error => {
      console.error("Ocorreu algum erro: ", error);
    })

    return data
  }
  
  export default {
    getAirports,
    deleteAirport,
    searchAirports,
    getAirportsPaginated
  }