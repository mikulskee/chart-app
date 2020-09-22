import React from 'react';
import styled from 'styled-components';
import coverPhoto from '../../assets/images/covid-photo.jpg';

const HeroWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const TitleWrapper = styled.div`
	margin-left: 20px;
`;
const Title = styled.h1`
	font-size: 2.6rem;
	max-width: 400px;
	line-height: 1;
	margin-bottom: 20px;
	transform: translate(-115%, -36%);
	@media only screen and (min-width: 1024px) {
		font-size: 4.6rem;
		transform: translate(0, 0);
	}
	span {
		font-style: oblique;
		margin-right: 20px;
	}
`;
const Subtitle = styled.p`
	position: relative;
	font-weight: 300;
	color: white;
	transform: translate(-115%, -36%);

	@media only screen and (min-width: 1024px) {
		transform: translate(0, 0);
		color: #cacaca;
	}
	::after {
		position: absolute;
		right: -210px;

		bottom: 12px;
		content: '';
		width: 300px;
		height: 1px;
		background-color: white;
		@media only screen and (min-width: 1024px) {
			transform: translate(0, 0);
			background-color: #cacaca;
			right: -50px;
		}
	}
`;

const CoverPhoto = styled.img`
	max-height: 600px;
`;

const Hero = () => {
	return (
		<HeroWrapper>
			<CoverPhoto src={coverPhoto} alt="people in masks" />
			<TitleWrapper>
				<Title>
					How much COVID-19 influenced <span>us</span>?
				</Title>
				<Subtitle>
					by <br />
					Mateusz Mikulski
				</Subtitle>
			</TitleWrapper>
		</HeroWrapper>
	);
};

export default Hero;
