import styled from "styled-components";
import PropTypes from "prop-types";

export const SkeletonLoader = ({ children, loading, ...restProps }) => {
  return loading ? (
  <SkeletonBaseLoader {...restProps}>
    {children}
  </SkeletonBaseLoader>
  ): (
    <>
    {children}
    </>
  )
};

SkeletonLoader.propTypes = {
    children: PropTypes.node,
    loading: PropTypes.bool
}

const SkeletonBaseLoader = styled.div`
  animation: skeleton-loading 1s linear infinite alternate;

  @keyframes skeleton-loading {
    0% {
      background-color: hsl(200, 20%, 80%);
    }
    100% {
      background-color: hsl(200, 20%, 95%);
    }
  }

  ${({style}) => style};
`;
