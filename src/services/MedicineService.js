import axios from "axios";

const MEDICINE_API_BASE_URL = "http://localhost:8203/api";

class MedicineService {

  saveMedicine(medicine) {
    return axios.post(MEDICINE_API_BASE_URL + "/" + "add-medicine", medicine);
  }

  getMedicines() {
    return axios.get(MEDICINE_API_BASE_URL + "all-medicines");
  }

  deleteMedicine(id) {
    return axios.delete(MEDICINE_API_BASE_URL + "/deleteMedicine/{medicineId}" + id);
  }

  getMedicineById(id) {
    return axios.get(MEDICINE_API_BASE_URL + "/getMedicine/{medicineId}" + id);
  }

  updateMedicine(medicine, id) {
    return axios.put(MEDICINE_API_BASE_URL + "/update-medicine" + id, medicine);
  }
}

export default new MedicineService();
