import React, { useEffect, useState, useRef, useCallback } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import moment from 'moment';
import PostTitle from '../PostTitle/PostTitle';

const ChartSection = styled.section`
	position: relative;
`;

const ChartWrapper = styled.div`
	max-width: 90vw;
	max-height: 60vh;
`;

const Chart = () => {
	const [datasets, setDatasets] = useState([]);
	const [prevDatasets, setPrevDatasets] = useState([]);
	const [labels, setLabels] = useState([]);
	const [mainData, setMainData] = useState({});
	const [chartSectionHeight, setChartSectionHeight] = useState();
	const [topOffset, setTopOffset] = useState(40);
	const [chartHeight, setChartHeight] = useState(120);

	useEffect(() => {
		axios
			.get('https://api.covid19api.com/total/dayone/country/poland')
			.then((res) => {
				const ds = res.data.map((item) => {
					return item.Confirmed;
				});

				console.log(res.data);
				ds.forEach((item, i) => {
					if (i === 0) {
						setPrevDatasets((state) => [...state, item]);
					} else {
						setPrevDatasets((state) => [...state, ds[i] - ds[i - 1]]);
					}
				});

				const lb = res.data.map((item) => {
					return moment(item.Date).format('YYYY-MM-DD');
				});
				setLabels(lb);
			});
	}, []);
	useEffect(() => {
		if (datasets.length > 0 && labels.length > 0) {
			setMainData({
				labels: labels,
				datasets: [
					{
						label: 'Confirmed Cases of COVID-19 in Poland',
						data: datasets,
					},
				],
			});
		}
	}, [datasets, labels]);
	const chartWrapper = useRef();
	const chartSection = useRef();
	const handleScrollChart = useCallback(() => {
		if (chartSection.current.getBoundingClientRect().top < topOffset) {
			chartWrapper.current.style.position = 'fixed';
			chartWrapper.current.style.top = `${topOffset}px`;
			chartWrapper.current.style.width = '100%';
			chartWrapper.current.style.left = '50%';
			chartWrapper.current.style.transform = 'translatex(-49.25%)';
		} else if (chartSection.current.getBoundingClientRect().top > topOffset) {
			chartWrapper.current.style.position = 'static';
			chartWrapper.current.style.top = '';
			chartWrapper.current.style.width = '100%';
			chartWrapper.current.style.left = '';
			chartWrapper.current.style.transform = '';
			chartWrapper.current.style.margin = '0 auto';
			setDatasets([]);
		}

		for (
			let step = 100, i = 1;
			i < prevDatasets.length, step > prevDatasets.length * -50;
			i++, step -= 50
		) {
			if (
				chartSection.current.getBoundingClientRect().top < step &&
				chartSection.current.getBoundingClientRect().top > step - 50
			) {
				setDatasets([...prevDatasets.slice(0, i)]);
			}
		}

		if (
			chartSection.current.getBoundingClientRect().top <
			-chartSectionHeight + window.innerHeight
		) {
			chartWrapper.current.style.position = 'absolute';

			chartWrapper.current.style.top = `${
				chartSectionHeight - window.innerHeight + topOffset
			}px`;
			chartWrapper.current.style.transform = 'translatex(-50%)';
		}
	});

	const handleHeightUpdate = useCallback(() => {
		if (prevDatasets.length > 0) {
			setChartSectionHeight(
				prevDatasets.length * 50 - topOffset + window.innerHeight
			);
		}
	});
	useEffect(() => {
		handleHeightUpdate();
		window.addEventListener('scroll', handleScrollChart);
		return () => {
			window.removeEventListener('scroll', handleScrollChart);
		};
	}, [handleScrollChart]);

	useEffect(() => {
		window.addEventListener('resize', handleHeightUpdate);
		return () => {
			window.removeEventListener('resize', handleHeightUpdate);
		};
	}, [handleHeightUpdate]);

	useEffect(() => {
		handleScrollChart();
	}, [topOffset]);

	return (
		<ChartSection
			ref={chartSection}
			style={{ height: `${chartSectionHeight}px` }}
		>
			<ChartWrapper ref={chartWrapper}>
				<PostTitle style={{ margin: '40px auto' }}>
					Lorem ipsum dolor sit amet
				</PostTitle>
				<Line
					options={{ responsive: true, maintainAspectRatio: false }}
					data={mainData}
					height={chartHeight}
				/>
			</ChartWrapper>
		</ChartSection>
	);
};

export default Chart;
