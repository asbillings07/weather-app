import styled from "styled-components";

export const SkeletonBase = styled.div`
  animation: skeleton-loading 1s linear infinite alternate;

  @keyframes skeleton-loading {
    0% {
      background-color: hsl(200, 20%, 80%);
    }
    100% {
      background-color: hsl(200, 20%, 95%);
    }
  }
`;

export const SkeletonContainer = styled.div`
  height: 100%;
  width: 100%;
  display: ${({ display }) => display};
  ${({ styles }) => styles};
`;

export const SkeletonLoaderContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 15px;
  ${({ styles }) => styles};
`;

export const SkeletonBody = styled(SkeletonBase)`
  border-radius: ${({ radius }) => (radius ? radius : "0.25rem")};
  width: ${({ width }) => (width ? width : "85%")};
  height: ${({ height }) => (height ? height : "40px")};
  margin: 10px 0;
`;

export const SkeletonText = styled(SkeletonBase)`
  border-radius: ${({ radius }) => (radius ? radius : "0.25rem")};
  width: ${({ width }) => (width ? width : "85%")};
  height: ${({ height }) => (height ? height : "30px")};
  margin: 10px 0;
`;
