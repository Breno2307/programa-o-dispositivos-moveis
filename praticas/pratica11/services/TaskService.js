import axios from "axios";

const API_URL = process.env.EXPO_PUBLIC_API_URL;

function getTask() {
  return axios
    .get(`${API_URL}/`)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
}

function addTask(task) {
  return axios
    .post(`${API_URL}/`, task)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
}

function updateTask(taskID, task) {
  return axios
    .put(`${API_URL}/${taskId}`, task)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
}
function deleteTask(taskID, task) {
  return axios
    .delete(`${API_URL}/${taskId}`)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
}

export { getTask, addTask, updateTask, deleteTask };
