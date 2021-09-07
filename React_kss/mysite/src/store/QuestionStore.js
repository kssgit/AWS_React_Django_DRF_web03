import {makeObservable, action, observable ,runInAction} from 'mobx';
import QuestionApi from '../api/QuestionApi';

class QuestionStore{
    @observable questions = []
    @observable question={}
    questionApi = new QuestionApi

    constructor(){
        makeObservable(this);
    }

    @action
    async selectQuestion(id){
        const result = await this.QuestionApi.questionDetail(id);
        runInAction(()=>{this.question=result})
    }

    @action
    async selectAll(){
        const result = await this.questionApi.questionList();
        runInAction(()=>{this.questions=result});
    }

}

export default new QuestionStore();