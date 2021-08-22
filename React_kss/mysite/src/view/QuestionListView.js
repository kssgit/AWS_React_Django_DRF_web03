import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';

class QuestionListView extends Component{
    render(){
        return(
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>게시판 목록</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    
                </Table.Body>
            </Table>
        );
    }
}

export default QuestionListView;