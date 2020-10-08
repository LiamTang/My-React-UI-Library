import React from "react";
import PropTypes from "prop-types";
import StyledContactCard, { Intro, Name } from "./style";
import Avatar from "components/Avatar";
import face1 from "stories/assets/images/face-male-1.jpg";

function ContactCard({children,...rest}) {
  return (
    <StyledContactCard {...rest}>
      <Avatar src={face1} status="online" />
      <Name>Liam</Name>
      <Intro>I am a front end developer</Intro>
    </StyledContactCard>
  );
}

ContactCard.propTypes = {
  children: PropTypes.any
};

export default ContactCard;
