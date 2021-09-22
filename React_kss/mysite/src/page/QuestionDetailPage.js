import React, { Component } from 'react';
import QuestionDetailContainer from '../container/QuestionDetailContainer';
import NavigationBar from '../view/NavigationBar';

class QuestionDetailPage extends Component {

    

    render() {
        const style={
            color: '#2f3b52',
            fontWeight: '900',
            margin: '2.5rem 0 1.5rem',
            textAlign:'center',
          }
        return (
            <div>
                <NavigationBar/>
                <header style ={style}>
                    <h1>질문과 답변</h1>
                </header>
                <QuestionDetailContainer/>
            </div>
        );
    }
}

export default QuestionDetailPage;