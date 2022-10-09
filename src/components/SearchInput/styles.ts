import styled from "styled-components";

export const SearchInputContainer = styled.div`
  width: 100%;
`

export const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  margin-top: 12px;
  height: 50px;
  background-color: ${({ theme }) => theme.input};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 6px;
  color: ${({ theme }) => theme.text};

  &::placeholder {
    color: ${({ theme }) => theme.label};
  }

  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.blue};
  }
`