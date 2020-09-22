import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.footer`
	display: flex;
	align-items: center;
	background-color: #222;
	height: 60px;
	justify-content: center;
`;

const P = styled.p`
	font-size: 8px;
	color: white;
	text-align: center;
`;
const Footer = () => {
	return (
		<Wrapper>
			<P>Mateusz Mikulski. 2020</P>
		</Wrapper>
	);
};

export default Footer;
