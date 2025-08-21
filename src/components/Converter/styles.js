import styled from "styled-components";

export const Button = styled.button`
  background-color: #000;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #000;
`

export const Row = styled.tr`
  border: 1px solid #000;
`

export const Cell = styled.td`
  padding: 5px;
  text-align: start;
  border: 1px solid #000;
`

export const HeadCell = styled.th`
  padding: 5px;
  text-align: start;
  border: 1px solid #000;
`

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Modal = styled.div`
  position: fixed;
  width: 50%;
  height: 50%;
  z-index: 1000;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1rem;
  align-items: center;
  background-color: var(--bg-color);
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 480px) {
    width: 90%;
  }
`