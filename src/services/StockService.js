import axios from "axios";

const STOCK_API_BASE_URL = 'http://localhost:8080/api';
//"http://localhost:8080/api/v1/employees";

class StockService {
  saveStock() {
    return axios.post(STOCK_API_BASE_URL + "/stock");
  }

  getStock() {
    return axios.get(STOCK_API_BASE_URL+ "/stocks");
  }

  deleteStock(id) {
    return axios.delete(STOCK_API_BASE_URL + "/stock/" + id);
  }

  getStockById(id) {
    return axios.get(STOCK_API_BASE_URL + "/stock/" + id);
  }

  updateStock(id) {
    return axios.put(` http://localhost:8080/api/stock/${id}` );
  }
}

export default new StockService();
