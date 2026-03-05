import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

/**
 * A very lightweight toast notification component.  
 * Props:
 *   - message: text to display
 *   - type: 'success' | 'error' (affects background color)
 *   - onClose: callback when toast is dismissed
 */
const Toast = ({ message, type = 'success', onClose }) => {
  useEffect(() => {
    const id = setTimeout(onClose, 3000);
    return () => clearTimeout(id);
  }, [onClose]);

  const color = type === 'error' ? 'bg-red-500' : 'bg-green-500';

  return (
    <div className={`fixed top-6 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded shadow-lg text-white ${color} z-50`}>
      {message}
    </div>
  );
};

Toast.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['success', 'error']),
  onClose: PropTypes.func.isRequired,
};

export default Toast;
