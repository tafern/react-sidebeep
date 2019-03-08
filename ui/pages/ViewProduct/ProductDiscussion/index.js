import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import {
  ContentWrapper,
  DiscussionTab,
  DiscussionWrapper,
  FaqWrapper,
  AskQuetionWrapper,
  TitleAsk,
  ButtonAskQuestion,
  DiscussionBeeperName,
  BeeperImage,
  CreatedAt,
  ReviewDescription,
  LineReview,
  AnswerWrapper,
  InputWrapper,
  ButtonComment,
  InputDiscussion,
  FAQPanel,
} from '../styles';
import FAQ from './FAQ';
import ProductDiscussionList from '../Json/ProductDiscussion';
import FAQList from '../Json/FAQ';

const productDiscussionDataList = ProductDiscussionList;
const faqDataList = FAQList;
const ProductDiscussion = ({ onHandleDiscussion, openDiscussion, boxDiscuss, boxFaq }) => (
  <ContentWrapper>
    <DiscussionTab className="clearfix">
      <DiscussionWrapper
        active={boxDiscuss}
        onClick={(e) => onHandleDiscussion(e, 'Discussion', true)}
      >
        Discussion
      </DiscussionWrapper>
      <FaqWrapper active={boxFaq} onClick={(e) => onHandleDiscussion(e, 'FAQ', true)}>
        FAQ
      </FaqWrapper>
    </DiscussionTab>
    {openDiscussion === 'Discussion' ? (
      <div>
        <AskQuetionWrapper className="clearfix">
          <TitleAsk>
            Any Question about this service? Let`s discuss with sider or other beeper
          </TitleAsk>
          <ButtonAskQuestion>Ask Question</ButtonAskQuestion>
        </AskQuetionWrapper>
        {(() => {
          if (productDiscussionDataList.length > 0) {
            const discussionItems = [];

            productDiscussionDataList.map((item) =>
              discussionItems.push(
                <Row key={`question-${item.review_id}`}>
                  <Col md={1}>
                    <BeeperImage src={item.review_beeper_image} alt="siderImage" />
                  </Col>
                  <Col md={11}>
                    <div className="clearfix">
                      <DiscussionBeeperName>{item.beeper_name}</DiscussionBeeperName>
                      <CreatedAt>{item.review_created_at}</CreatedAt>
                    </div>
                    <ReviewDescription>{item.review_note}</ReviewDescription>
                    <LineReview />
                    <AnswerWrapper>
                      {(() => {
                        const discussionAnswers = [];
                        if (item.review_replay.length > 0) {
                          item.review_replay
                            .sort((a, b) => {
                              const firstAnswerId = new Date(a.review_created_at);
                              const secondAnswerId = new Date(b.review_created_at);

                              return firstAnswerId - secondAnswerId;
                            })
                            .map((answer) =>
                              discussionAnswers.push(
                                <Row key={`answer-${answer.id}`}>
                                  <Col md={1}>
                                    <BeeperImage
                                      src={answer.review_beeper_image}
                                      alt="siderImage"
                                    />
                                  </Col>
                                  <Col md={11}>
                                    <div className="clearfix">
                                      <DiscussionBeeperName>{answer.name}</DiscussionBeeperName>
                                      <CreatedAt>{answer.review_created_at}</CreatedAt>
                                    </div>
                                    <ReviewDescription>{answer.review_note}</ReviewDescription>
                                    <LineReview />
                                  </Col>
                                </Row>,
                              ),
                            );
                        }
                        discussionAnswers.push(
                          <div key="answer-input">
                            <Row key={`answer-${item.id}`}>
                              <Col md={1}>
                                <BeeperImage src={item.review_beeper_image} alt="siderImage" />
                              </Col>
                              <Col md={11}>
                                <form
                                  className="form-horizontal"
                                  // onSubmit={handleSubmit(submitHandler)}
                                >
                                  <InputWrapper>
                                    <textarea
                                      name="content"
                                      size="12"
                                      placeholder="Enter your comment here"
                                      className="form-control"
                                    />
                                  </InputWrapper>
                                  <ButtonComment type="submit" className="btn">
                                    SEND
                                  </ButtonComment>
                                </form>
                              </Col>
                            </Row>
                          </div>,
                        );
                        return discussionAnswers;
                      })()}
                    </AnswerWrapper>
                  </Col>
                </Row>,
              ),
            );
            return discussionItems;
          }
          return null;
        })()}
        <InputDiscussion>
          <form
            className="form-horizontal"
            // onSubmit={handleSubmit(submitHandler)}
          >
            <InputWrapper>
              <textarea
                name="content"
                rows="8"
                cols="50"
                size="12"
                placeholder="Enter your comment here"
                className="form-control"
              />
            </InputWrapper>
            <ButtonComment type="submit" className="btn">
              SEND
            </ButtonComment>
          </form>
        </InputDiscussion>
      </div>
    ) : (
      <FAQPanel>
        {faqDataList.map((faq) => (
          <FAQ key={faq.id} question={faq.faq_question} answer={faq.faq_answer} />
        ))}
      </FAQPanel>
    )}
  </ContentWrapper>
);
ProductDiscussion.propTypes = {
  onHandleDiscussion: PropTypes.func.isRequired,
  openDiscussion: PropTypes.bool.isRequired,
  boxDiscuss: PropTypes.bool.isRequired,
  boxFaq: PropTypes.bool.isRequired,
};

export default ProductDiscussion;
