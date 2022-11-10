import styled from "styled-components";

export const Card = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: ${(p) => p.theme.palette.background.paper[2]};
`;

export const CardHeader = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const HeaderContent = styled.div``;

export const Text = styled.p`
  margin-top: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Icon = styled.div`
  aspect-ratio: 1;
`;

export const Name = styled.h3``;
