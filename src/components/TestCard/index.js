import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getQuestion, setAnswer, getUserInfo, setCategory } from '../../AC';
import Card from 'react-bulma-components/lib/components/card';
import Content from 'react-bulma-components/lib/components/content';
import Button from 'react-bulma-components/lib/components/button';
import Image from 'react-bulma-components/lib/components/image';
import Loader from '../Loader';
import './index.scss';

class TestCard extends Component {
  handleClick = (answerId, ev) => {
    ev.preventDefault();
    const { setAnswer, getUserInfo, categoryId, getQuestion } = this.props;

    setAnswer(answerId);
    getQuestion(categoryId);
  };

  handleBackClick = ev => {
    ev.preventDefault();
    const { setCategory } = this.props;
    setCategory(null);
  };

  componentDidMount() {
    const { categoryId, getQuestion } = this.props;

    console.log('mount:', 'Card');
    getQuestion(categoryId);
  }

  render() {
    const { question = {} } = this.props;

    if (!question.answers) {
      question.answers = [];
    }

    const answers = question.answers
      .sort((a, b) => Number(a) - Number(b))
      .map(answer => (
        <Card.Footer.Item
          key={answer.id}
          className="question__item"
          renderAs="a"
          onClick={ev => this.handleClick(answer.id, ev)}
        >
          {answer.text}
        </Card.Footer.Item>
      ));

    return question.isLoading ? (
      <Loader />
    ) : (
      <React.Fragment>
        <Card className="question">
          <Card.Image size="3by2" src={question.image} />
          <Card.Content>
            <Content>{question.text}</Content>
          </Card.Content>
          <Card.Footer className="question__footer">{answers}</Card.Footer>
        </Card>
        <Button onClick={this.handleBackClick} color="link" text>
          Назад
        </Button>
        (question.isRight === null ? false : ( question.isRight ?
        <Image className="answer answer-ok" src={'./img/choice-ok.png'} /> :{' '}
        <Image className="answer answer-fail" src={'./img/choice-fail.png'} />
        ))
      </React.Fragment>
    );
  }
}

export default connect(
  state => ({
    question: state.question,
    categoryId: state.categories.active,
  }),
  { getQuestion, setAnswer, getUserInfo, setCategory },
)(TestCard);
