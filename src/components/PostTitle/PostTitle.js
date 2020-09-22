import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.h4`
	text-transform: uppercase;
	margin: 0 auto 40px;
	width: fit-content;
	font-size: 2.2rem;
	max-width: 600px;
	text-align: center;
`;

const PostContent = (props) => {
	return <Wrapper>{props.children}</Wrapper>;
};

export default PostContent;
