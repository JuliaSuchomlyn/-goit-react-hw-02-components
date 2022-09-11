import styled from "@emotion/styled";


export const StatisticsList = styled.ul`
`
export const StatisticsItem = styled.li`
display: flex;
align-items: center;
justify-content: space-between;
padding: 12px;
margin-bottom: 4px;
border: 1px solid #9e9e9e;
border-radius: 4px;
box-shadow: 0 1px 4px rgba(0, 0, 0, .3),
            -23px 0 20px -23px rgba(0, 0, 0, .6),
            23px 0 20px -23px rgba(0, 0, 0, .6),
            inset 0 0 40px rgba(0, 0, 0, .1);

font-size: 20px;
font-weight: bold;
color: rgba(2, 2, 2, 0.1);
background: #666666;
-webkit-background-clip: text;
-moz-background-clip: text;
background-clip: text;
text-shadow: 0px 3px 3px rgba(255,255,255,0.5);
span{
    font-size: 25px;
}
.positiveFeedback {
    font-size: 30px;
}
`