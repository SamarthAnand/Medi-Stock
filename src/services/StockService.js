import axios from "axios";

const STOCK_API_BASE_URL = 'http://localhost:3000/';
//"http://localhost:8080/api/v1/employees";

class StockService {
  saveStock(stockName) {
    return axios.post(STOCK_API_BASE_URL, stockName);
  }

  getStock() {
    return axios.get(STOCK_API_BASE_URL);
  }

  deleteStock(id) {
    return axios.delete(STOCK_API_BASE_URL + "/" + id);
  }

  getStockById(id) {
    return axios.get(STOCK_API_BASE_URL + "/" + id);
  }

  updateStock(employee, id) {
    return axios.put(STOCK_API_BASE_URL + "/" + id, employee);
  }
}

export default new StockService();
