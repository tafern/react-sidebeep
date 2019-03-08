import React from 'react';
import PropTypes from 'prop-types';
import { HeaderWrapper, FaqPanel, ToggleButton, AnswerFAQ, LineReview } from '../styles';

class FAQ extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShown: false,
    };
  }
  handleShowHideBody = () => {
    this.setState({ isShown: !this.state.isShown });
  };
  render() {
    const { question, answer } = this.props;
    return (
      <div>
        <HeaderWrapper onClick={this.handleShowHideBody}>
          <FaqPanel>
            {question}
            <ToggleButton className={this.state.isShown ? 'toggleDown' : ''} />
          </FaqPanel>
        </HeaderWrapper>
        {this.state.isShown ? <AnswerFAQ>{answer}</AnswerFAQ> : ''}
        <LineReview />
      </div>
    );
  }
}
FAQ.defaultProps = {
  question: '',
  answer: '',
};
FAQ.propTypes = {
  question: PropTypes.string,
  answer: PropTypes.string,
};

export default FAQ;
