import axios from "axios";

class QuestionApi {
  URL = "/api/Question";

  questionCreate(data) {
    return axios
      .post(this.URL + "create/", { data: `${data}` })
      .then(response => response.data); // resolve
    // .create(()=>{}) // 예외발생 reject
    // .finally(()=>{}); // resolve, reject 모든 경우
  }

  questionUpdate(id, data) {
    return axios
      .put(this.URL + `update/${id}/`, { data: `${data}` })
      .then(response => response.data);
  }

  questionDelete(id) {
    return axios
      .delete(this.URL + `delete/${id}/`)
      .then(response => response.data);
  }

  // // book_id로 분류한 article
  // questionBook(id) {
  //   return axios.get(this.URL + `${id}/`).then(response => response.data);
  // }

  questionDetail(id) {
    return axios
      .get(this.URL + `detail/${id}/`)
      .then(response => response.data);
  }

  questionList() {
    return axios
      .get(
        this.URL + ""
        //  {
        //   headers: {
        //     Authorization: `JWT ${localStorage.getItem("token")}`,
        //   },
        // }
      )
      .then(response => response.data);
  }
}

export default QuestionApi;
