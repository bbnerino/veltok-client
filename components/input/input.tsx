import React from "react";
import { styled } from "styled-components";

interface Props {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

const Input = ({ placeholder, value, onChange, type }: Props) => {
  return (
    <Wrapper
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      type={type || "text"}
    />
  );
};

const Wrapper = styled.input`
  background-color: #fff;
  color: #000;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  width: 380px;
  height: 50px;
  border: 0.5px solid #b6b6b6;
  border-radius: 10px;
  padding-left: 20px;
  margin-bottom: 1rem;
  font-size: 1rem;
  &:focus {
    outline: none;
  }
`;

export default Input;
