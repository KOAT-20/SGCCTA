import React, { Component } from 'react';
import {
	XYPlot,  
	VerticalGridLines,
	HorizontalGridLines,
	XAxis, YAxis, 
	VerticalBarSeries,
	LineSeries
} from 'react-vis';

const Estd = (props) => {

	const dataArr = props.data.map((result) => {
		return {
			x: result.motivo_id, 
			y: parseFloat(result.monto_motivo/1000)
		}
	});

	return (
		<XYPlot xType="ordinal" height={300} width= {700}>
			<VerticalGridLines />
			<HorizontalGridLines />
			<XAxis title="Meses"/>
			<YAxis title="Total de Solicitudes"/> 
			<VerticalBarSeries 
			data={dataArr} 
			/>
		</XYPlot>
	)
}

export default Estd;