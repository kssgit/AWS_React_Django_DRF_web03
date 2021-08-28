import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import QuestionListView from '../view/QuestionListView';

@inject('QuestionStore')
@observer
class QuestionListContainer extends Component{
    componentDidMount(){
        this.props.QuestionStore.selectAll();
    }

    render(){
        return (
            <QuestionListView 
            questions={this.props.QuestionStore.questions}
            selectQuestion={this.props.selectQuestion}/>
        );
    }
}

export default QuestionListContainer;