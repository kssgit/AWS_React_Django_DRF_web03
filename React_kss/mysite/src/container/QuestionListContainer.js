import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import QuestionListView from '../view/QuestionListView';

@inject('QuestionStore')
@observer
class QuestionListContainer extends Component{
    componentDidMount(){
        
    }

    render(){
        return (
            <QuestionListView/>
        );
    }
}

export default QuestionListContainer;