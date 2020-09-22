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
	font-size: 4.6rem;
	max-width: 400px;
	line-height: 1;
	margin-bottom: 20px;
	span {
		font-style: oblique;
		margin-right: 20px;
	}
`;
const Subtitle = styled.p`
	position: relative;
	font-weight: 300;
	color: #cacaca;
	::after {
		position: absolute;
		right: -50px;
		bottom: 12px;
		content: '';
		width: 300px;
		height: 1px;
		background-color: #cacaca;
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
