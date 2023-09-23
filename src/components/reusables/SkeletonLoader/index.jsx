import { SkeletonBody, SkeletonLoaderContainer, SkeletonContainer, SkeletonText} from './style'
import PropTypes from "prop-types";

export function SkeletonLoader({ children, width, height, ...restProps }) {
  return (
    <SkeletonLoaderContainer width={width} height={height} {...restProps}>
      {children}
    </SkeletonLoaderContainer>
  );
}

SkeletonLoader.Body = function SkeletonBodyLoader({ height, width, ...restProps }) {
  return (<SkeletonBody height={height} width={width} {...restProps}/>);
};

SkeletonLoader.Container = function Container({ children, styles }) {
  return (<SkeletonContainer  styles={styles}>
    {children}
  </SkeletonContainer>);
};

SkeletonLoader.Text = function SkeletonTextLoader({ height, width, ...restProps }) {
  return (
    <SkeletonText height={height} width={width} {...restProps} />
  );
};

SkeletonLoader.propTypes = {
    children: PropTypes.any,
    height: PropTypes.string,
    width: PropTypes.string
}

SkeletonLoader.Body.propTypes = {
  children: PropTypes.any,
  height: PropTypes.string,
  width: PropTypes.string,
};

SkeletonLoader.Text.propTypes = {
  children: PropTypes.any,
  height: PropTypes.string,
  width: PropTypes.string,
};

SkeletonLoader.Container.propTypes = {
  children: PropTypes.any,
  styles: PropTypes.object,
  width: PropTypes.string,
};

