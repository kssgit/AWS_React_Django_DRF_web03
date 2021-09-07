import React from 'react';
import QuestionListContainer from '../container/QuestionListContainer';
import NavigationBar from '../view/NavigationBar';

const style={
    color: '#2f3b52',
    fontWeight: '900',
    margin: '2.5rem 0 1.5rem',
    textAlign:'center',
  }

function QuestionListPage(){
    return (
        <div>
            <NavigationBar/>
            <header style ={style}>
                <h1>질문과 답변</h1>
            </header>
            <QuestionListContainer/>
        </div>
    );
}

export default QuestionListPage;