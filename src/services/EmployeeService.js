import axios from "axios";

const EMPLOYEE_API_BASE_URL = 'http://localhost:8201/users/';
//"http://localhost:8082/users/";

class EmployeeService {
  saveEmployee(employee) {
    return axios.post(EMPLOYEE_API_BASE_URL+"add-users", employee);
  }

  getEmployees() {
    return axios.get(EMPLOYEE_API_BASE_URL+"all-users");
  }

  deleteEmployee(id) {
    return axios.delete(EMPLOYEE_API_BASE_URL + "/deleteUser" + id);
  }

  getEmployeeById(id) {
    return axios.get(EMPLOYEE_API_BASE_URL + "/getUser" + id);
  }

  // updateEmployee(employee, id) {
  //   return axios.put(EMPLOYEE_API_BASE_URL + "update-user" + id, employee);
  // }
}

export default new EmployeeService();
