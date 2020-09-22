import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.p`
	width: 80vw;
	max-width: 800px;
	margin: 0 auto;
	text-indent: 50px;
	margin-top: 20px;
	text-align: justify;
`;

const PostContent = (props) => {
	return <Wrapper>{props.children}</Wrapper>;
};

export default PostContent;
