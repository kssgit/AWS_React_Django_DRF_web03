import { makeObservable, action, observable, runInAction } from "mobx";
import QuestionApi from "../api/QuestionApi";

class QuestionStore {
  @observable questions = [];

  @observable question = {
    questionId: "",
    questionTitle: "",
    questionDate: "",
    questionViews: "",
  };

  @observable Message = "";

  @observable index = 0;

  @observable bookId = 0;

  @observable viewState = "";

  questionApi = new QuestionApi();

  constructor() {
    makeObservable(this);
  }

  @action
  setQuestionProp(name, value) {
    this.question = {
      ...this.question,
      [name]: value,
    };
  }

  // article_id 저장
  @action
  setIndexProp(id) {
    this.index = id;
  }

  // viewState 관리
  @action
  setViewState(key) {
    this.viewState = key;
  }

  @action
  async addQuestion() {
    const result = await this.QuestionApi.questionCreate(this.question);
    if (result == null) {
      this.message = "추가되지 않았습니다.";
    }
    this.question = this.question.concat(this.question);
  }

  @action
  async removeQuestion() {
    await this.QuestionApi.questionDelete(this.question.communication_id);
    const result = await this.questionApi.questionList();
    runInAction(() => {
      this.questions = result;
    });
    runInAction(() => {
      this.question = {};
    });
  }

  @action
  async modifyQuestion() {
    await this.questionApi.questionUpdate(
      this.question.communication_id,
      this.question
    );
    const result = await this.articleApi.questionList();
    runInAction(() => {
      this.questions = result;
    });
    runInAction(() => {
      this.question = {};
    });
  }

  @action
  async selectQuestion(id) {
    const result = await this.questionApi.questionDetail(id);
    runInAction(() => {
      this.question = result;
    });
  }

  // @action
  // async selectQuestionBook(id) {
  //   const result = await this.questionApi.questionBook(id);
  //   runInAction(() => {
  //     this.questions = result;
  //   });
  // }

  @action
  async selectAll() {
    const result = await this.questionApi.questionList();
    runInAction(() => {
      this.questions = result;
    });
  }
}
export default new QuestionStore();
