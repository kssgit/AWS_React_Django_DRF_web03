import React, { Component } from 'react';
import { Pagination, Table } from 'semantic-ui-react';

class QuestionListView extends Component{
    render(){
        const {questions,selectQuestion} = this.props;
        return(
            <>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>질문 사항</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {Array.isArray(questions)&& questions.length ?(
                        questions.map((question)=>{
                            return(
                                <Table.Row
                                key = {question.id}
                                onClick={()=>selectQuestion(question.id)}
                                >
                                    <Table.Cell>{questions.title}</Table.Cell>
                                </Table.Row>
                            );
                        })
                    
                    ):(
                    <Table.Row>
                        <Table.Cell>Empty</Table.Cell>
                    </Table.Row>
                    )}
                </Table.Body>
            </Table>
            <div style = {{marginLeft : 'auto',marginRight :'auto' }} >
                <Pagination
                defaultActivePage={1}
                // totalPages={6}
                totalPages={Math.ceil(questions.length / 5)}
                onPageChange/>
            </div>
            </>
        );
    }
}

export default QuestionListView;