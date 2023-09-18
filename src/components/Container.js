import css from './Container.module.css';
import PropTypes from 'prop-types';

export const Container = ({ children }) => {
  return (
    <>
      <div className={css.Container}>{children}</div>
    </>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
// export default Container;
