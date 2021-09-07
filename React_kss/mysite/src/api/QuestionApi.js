import axios from 'axios';

class QuestionApi{
    URL = "/api/Question";
    questionCreate(data){

    }

    questionUpdate(id,data){

    }

    questionDelete(id){
        
    }

    //
    questionDetail(id){
        return axios.get(this.URL + `detail/${id}/`).then((response) => response.data);
    }

    //게시판 목록?
    questionList(){
        return axios.get(this.URL).then((response)=>response.data)
    }

}
export default QuestionApi;