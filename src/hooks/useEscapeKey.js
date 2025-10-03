import React from 'react';

export function useEscapeKey(onKeyDown) {
  React.useEffect(() => {
    function handleKeydown(event) {
      console.log(event.code);
      if (event.code === 'Escape') {
        onKeyDown();
      }
    }

    window.addEventListener('keydown', handleKeydown);

    return () => window.removeEventListener('keydown', handleKeydown);
  }, [onKeyDown]);
}
