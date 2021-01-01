import styled from "styled-components";

export const Container = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  padding: 20px;
  border-radius: 0 0 10px 10px;
  background: #005c97; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #363795,
    #005c97
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #363795,
    #005c97
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

export const Title = styled.div`
  cursor: pointer;
  font-size: 25px;
  font-weight: 700;
  color: #ffffff;
  font-family: Inter, system-ui, serif;
`;
export const Icon = styled.img`
  height: 80%;
  margin-right: 10px;
`;
