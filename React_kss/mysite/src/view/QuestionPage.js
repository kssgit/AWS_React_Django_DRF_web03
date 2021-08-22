import React from 'react';
import QuestionListContainer from '../container/QuestionListContainer';


const style={
    color: '#2f3b52',
    fontWeight: '900',
    margin: '2.5rem 0 1.5rem',
    textAlign:'center',
  }

function QuestionPage(){
    return (
        <div>
            <header style ={style}>
                <h1>게시판</h1>
            </header>
            <QuestionListContainer/>
        </div>
    );
}

export default QuestionPage;