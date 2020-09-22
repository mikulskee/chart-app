import React from 'react';
import styled from 'styled-components';
import postPhoto from '../../assets/images/covid-photo-2.jpg';
import PostTitle from '../PostTitle/PostTitle';
import PostContent from '../PostContent/PostContent';

const PostCategoryTitle = styled.p`
	margin: 40px auto;
	color: #e29b9b;
	width: fit-content;
	font-family: ${({ theme }) => theme.fonts.cursive};
	font-weight: 700;
	font-size: 1.4rem;
`;

const PostPhoto = styled.img`
	display: block;
	width: 60vw;
	max-width: 600px;
	margin: 60px auto;
`;

const Post = () => {
	return (
		<div>
			<PostCategoryTitle>Health</PostCategoryTitle>
			<PostTitle>Charts presenting COVID statistics for Poland</PostTitle>
			<PostContent>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in
				convallis urna, a efficitur mauris. Nam eu est malesuada, posuere diam
				in, malesuada eros. Etiam sit amet lorem facilisis, condimentum lectus
				id, pulvinar ex. Nulla dignissim eget lacus in consequat. Nulla
				tincidunt egestas lectus, et consequat erat. Nullam elementum rhoncus
				ante, nec porta elit. Donec eget massa neque. Donec sed velit quis nibh
				faucibus rhoncus vel nec libero. Sed eleifend id dui vel faucibus.
			</PostContent>
			<PostContent>
				Etiam tempus nisl et urna hendrerit, quis posuere enim hendrerit. Donec
				sodales molestie nulla, et mattis eros sollicitudin sit amet. Nullam in
				eros a est egestas ullamcorper vitae sed mauris. In hac habitasse platea
				dictumst. Nunc ut nunc eget urna efficitur eleifend. Donec pellentesque
				felis rhoncus, sodales tellus sit amet, vehicula sem. In venenatis eros
				eget semper pellentesque. Donec auctor feugiat enim, vel maximus neque
				posuere quis. Ut semper ac nisl ac congue. Sed id dui facilisis, rhoncus
				dolor in, hendrerit tellus.
			</PostContent>
			<PostPhoto src={postPhoto} alt="people in masks" />
			<PostContent>
				Curabitur sit amet lectus eros. Nam ornare, dolor vel scelerisque
				facilisis, ipsum nisi euismod dui, eget malesuada lorem sapien vel urna.
				Vestibulum efficitur neque porta ullamcorper faucibus. Proin hendrerit
				tellus ligula, et sagittis sapien ornare vitae. Vestibulum tempus in ex
				ut hendrerit. Integer vel mattis nunc, molestie commodo metus.
				Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
				cubilia curae; Praesent semper auctor imperdiet. Aenean aliquet varius
				risus in tincidunt. Proin pellentesque rhoncus urna ac lacinia. Nullam
				ultricies ultricies ipsum, ut auctor erat lobortis quis. Donec lacinia,
				turpis ac sollicitudin facilisis, urna justo rhoncus felis, vitae
				placerat ipsum urna ut ipsum.
			</PostContent>
		</div>
	);
};

export default Post;
