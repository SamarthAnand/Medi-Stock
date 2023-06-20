import axios from "axios";

const MEDICINE_API_BASE_URL = "http://localhost:8203/medicine/";

class MedicineService {

  saveMedicine(medicine) {
    return axios.post(MEDICINE_API_BASE_URL + "add-medicine", medicine);
  }

  getMedicines() {
    return axios.get(MEDICINE_API_BASE_URL + "all-medicines");
  }

  deleteMedicine(id) {
    return axios.delete(MEDICINE_API_BASE_URL + "deleteMedicine" + "/" + id);
  }

  getMedicineById(id) {
    return axios.get(MEDICINE_API_BASE_URL + "getMedicine" + "/" + id);
  }

  updateMedicine(medicine) {
    return axios.put(MEDICINE_API_BASE_URL + "update-medicine" , medicine);
  }
}

export default new MedicineService();
