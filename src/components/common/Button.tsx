import React from "react";
import styled from "styled-components";

interface iBtn {
  title?: string;
  fs?: string;
  w?: string;
}

const Button: React.FC<iBtn> = ({ title, fs, w }) => {
  return (
    <div>
      <Container w={`${w}`} fs={`${fs}`}>
        {title}
      </Container>
    </div>
  );
};

export default Button;

const Container = styled.div<{
  fs?: string;
  w?: string;
}>`
  padding: 10px 30px;
  background-color: black;
  color: white;
  border-radius: 20px;
  cursor: pointer;
  width: ${({ w }) => w};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ fs }) => (fs ? "14px" : "20px")};
`;
