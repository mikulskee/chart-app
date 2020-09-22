import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareAlt, faMapPin } from '@fortawesome/free-solid-svg-icons';

const Wrapper = styled.header`
	padding: 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const LogoWrapper = styled.div`
	display: flex;
	align-items: center;
`;

const Logo = styled.h1`
	position: relative;
	color: red;
	width: fit-content;
	span {
		color: black;
		font-weight: 400;
		font-size: 1rem;
	}
	::after {
		content: '';
		width: 1px;
		height: 70%;
		position: absolute;
		right: -10px;
		top: 50%;
		transform: translateY(-50%);
		background-color: #cacaca;
	}
`;

const Subtitle = styled.p`
	font-weight: 300;
	color: #cacaca;
	margin-left: 20px;
	margin-top: 10px;
`;

const SocialsWrapper = styled.div`
	color: #cacaca;
	svg {
		margin-left: 20px;
	}
`;
const Navbar = () => {
	return (
		<Wrapper>
			<LogoWrapper>
				<Logo>
					B<span>login</span>
				</Logo>
				<Subtitle>Health</Subtitle>
			</LogoWrapper>
			<SocialsWrapper>
				<FontAwesomeIcon icon={faShareAlt} />
				<FontAwesomeIcon icon={faMapPin} />
			</SocialsWrapper>
		</Wrapper>
	);
};

export default Navbar;
