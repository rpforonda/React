import React from 'react';
import PropTypes from 'prop-types';
import { Card, Col } from 'react-bootstrap';
import debug from 'sabio-debug';

function SurveyCard(props) {
    const _logger = debug.extend('SurveyCard');

    const options = { month: 'long', year: 'numeric', day: 'numeric' };

    _logger(props);

    return (
        <Card>
            <Card.Header>
                <Col>
                    <h5>{props.survey.name}</h5>
                </Col>
            </Card.Header>
            <Card.Body>
                <h6>Survey Id:{props.survey.id}</h6>
                <h6>Survey Type:{props.survey.surveyType.name}</h6>
                <h6>Date Created:{new Date(props.survey.dateCreated).toLocaleDateString(options)}</h6>
                <h6>Date Modified:{new Date(props.survey.dateModified).toLocaleDateString(options)}</h6>
            </Card.Body>
        </Card>
    );
}

export default React.memo(SurveyCard);

SurveyCard.propTypes = {
    survey: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        createdBy: PropTypes.number.isRequired,
        surveyType: PropTypes.shape({
            name: PropTypes.string,
        }).isRequired,
        dateCreated: PropTypes.string.isRequired,
        dateModified: PropTypes.string.isRequired,
    }).isRequired,
};
