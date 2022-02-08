import { Typography , Row , Col } from 'antd';
import React from 'react'
import {Line} from 'react-chartjs-2';

const {Title} = Typography

const LineChart = ({coinHistory, currentPrice, coinName}) => {
    const coinPrice = [];
    const coinTimestamp = [];

    for(let i = 0; i< coinHistory.data?.history?.lenght; i += 1){
        coinPrice.push(coinHistory.data.History[i].price)
        coinTimestamp.push(new Date(coinHistory.data.History[i].Timestamp).toLocaleDataString());

    }


    const data = {
        labels: coinTimestamp,
        datasets: [
          {
            label: 'Price In USD',
            data: coinPrice,
            fill: false,
            backgroundColor: '#0071bd',
            borderColor: '#0071bd',
          },
        ],
      };
    
      const options = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      };

    return (
        <>
          <Row className="chart-header">
              <Title level={2} className="chart-title">{coinName} Price Chart</Title>
          <Col className="price-cointainer">
          <Title level={5} className="price-change" > {coinHistory?.data?.change}%</Title>
          <Title level={5} className="current-price" >Current {coinName} Price: $ {currentPrice} </Title>
          </Col>
          
          </Row> 
          <Line data={data} options={options} >
              </Line> 
        </>
    )
}

export default LineChart
