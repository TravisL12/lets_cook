import styled from "styled-components";

// colors
const appBg = "white";
const borderColor = "lightgray";

const SectionShared = styled.div`
  padding: 10px;
`;

export const SApp = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: 80px 1fr;
  background: ${appBg};
  height: 100vh;
`;

export const SMain = styled(SectionShared)`
  grid-column: 2;
  grid-row: 2;
`;

export const SSidebar = styled(SectionShared)`
  border-right: 1px solid ${borderColor};
  grid-column: 1;
  grid-row: 2;
`;

export const SHeader = styled(SectionShared)`
  border-bottom: 1px solid ${borderColor};
  grid-column: 1 / 3;
  grid-row: 1;
`;
