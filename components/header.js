import PropTypes from 'prop-types';
import tw from 'tailwind.macro';

const Header = props => {
  const { className, children } = props;
  return (
    <div css={tw`py-12 px-12 bg-purple-700 rounded`} className={className}>
      {children}
    </div>
  );
};

Header.defaultProps = {
  children: 'Header',
};
Header.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Header;
