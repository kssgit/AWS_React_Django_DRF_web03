import React, { Component } from "react";
import { inject, observer } from "mobx-react";
// import QuesionView from "../view/QuesionView";

// 함수 변수이름 알맞게 수정
// view 완성후 다시 수정
@inject("QuestionStore")
@observer
class QuestionContainer extends Component {
  componentDidMount() {
    // this.props.ArticleStore.selectAll();
    this.props.QuestionStore.selectArticleBook(
      this.props.location.state.bookId
    );
  }

  onSetArticleProp = (name, value) => {
    this.props.QuestionStore.setArticleProp(name, value);
  };

  onAddArticle = () => {
    this.props.QuestionStore.addArticle();
  };

  onRemoveArticle = () => {
    this.props.QuestionStore.removeArticle();
  };

  onModifyArticle = () => {
    this.props.QuestionStore.modifyArticle();
  };

  onsetIndexProp = id => {
    this.props.QuestionStore.setIndexProp(id);
  };

  onsetArticleBook = id => {
    this.props.QuestionStore.selectArticleBook(id);
  };

  render() {
    const { articles } = this.props.QuestionStore;
    const bookId = this.props.location.state.bookId;
    const id = this.props.QuestionStore.index;

    return (
      <div>
        {/* <BookView
          articles={articles}
          id={id}
          bookId={bookId}
          onSetArticleProp={this.onSetArticleProp}
          onAddArticle={this.onAddArticle}
          onRemoveArticle={this.onRemoveArticle}
          onModifyArticle={this.onModifyArticle}
          setIndexProp={this.onsetIndexProp} */}
        />
      </div>
    );
  }
}

export default QuestionContainer;
