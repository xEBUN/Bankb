import React from 'react';
import SpendInTuesday from "@components/spendInTuesday";
import styled from 'styled-components'
import SpendInMouth from "@components/spendInMouth";
import HistoryFall from "@components/historyFall";
import HistoryPopup from "@components/historyPopup";
const Container = styled.div`
  .fast-statistic{
    margin-top: 24px;
  }
  .total{
    margin-top: 47px;
  }
`;

const History = () => {
    return (
        <Container className="history">
            <h1 className="screen-title">История операций <svg width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.36719 20.9961C2.10938 21.2539 1.78125 21.3945 1.39453 21.3945C0.621094 21.3945 0 20.7852 0 20.0117C0 19.625 0.164062 19.2734 0.433594 19.0039L8.63672 10.9883L0.433594 2.99609C0.164062 2.72656 0 2.36328 0 1.98828C0 1.21484 0.621094 0.605469 1.39453 0.605469C1.78125 0.605469 2.10938 0.746094 2.36719 1.00391L11.4844 9.91016C11.8125 10.2148 11.9648 10.5898 11.9766 11C11.9766 11.4102 11.8125 11.7617 11.4844 12.0781L2.36719 20.9961Z" fill="#FFDD2D"/>
            </svg>
            </h1>
            <div className="fast-statistic">
                <SpendInTuesday/>
            </div>
            <SpendInMouth color />
    <HistoryFall/>
            <HistoryPopup/>
        </Container>
    );
};

export default History;