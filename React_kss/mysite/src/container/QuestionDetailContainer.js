import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import QuestionDetailView from '../view/QuestionDetailView';


@inject('QuestionStore')
@observer
class QuestionDetailContainer extends Component {
    render() {
        return (
            <QuestionDetailView
            question = {this.props.QuestionStore.question}/>
        );
    }
}

export default QuestionDetailContainer;