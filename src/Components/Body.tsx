import './arquivo.css';
import styled from 'styled-components';
import React from 'react';

export interface TicketBodyProps {
  backgroundColor?: string;
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

//Acabamos de adicionar essa interface
interface STicketBodyProps{
    children: React.ReactNode;
  }

export const TicketBody = styled.div<STicketBodyProps>`
  position: relative;
  margin: auto;
  background-color: #FFEBD9;
  padding-top: 20px;
  width: 95vw;
  height: 23vh;
  font-weight: 800;
  font-family: 'Roboto', sans-serif;
  text-align: center;
`;


export const TicketItens = styled.div<STicketBodyProps>`
  position: relative;
  margin: auto;
  background-color: #FFEBD9;
  padding-top: 20px;
  width: 95vw;
  height: 20vh;
  
  font-weight: 800;
  font-family: 'Roboto', sans-serif;
  text-align: center;
`;


export const MenuBody = styled.div`
  background-color: #944500;
  margin: auto;
  width: 95vw;
  padding-top: 50px;
  padding-bottom: 50px;
  height: fit-content;
  font-family: 'Roboto', sans-serif;
  display: grid;
`;


