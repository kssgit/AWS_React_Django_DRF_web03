import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import QuestionDetailView from '../view/QuestionDetailView';


@inject('QuestionStore')
@observer
class QuestionDetailContainer extends Component {

    // 해당 게시글 댓글 목록 가져오기
    componentDidMount(){
        
    }

    render() {
        return (
            <QuestionDetailView
            question = {this.props.QuestionStore.question}/>
        );
    }
}

export default QuestionDetailContainer;