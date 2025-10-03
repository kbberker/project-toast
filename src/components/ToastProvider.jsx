import React from 'react';

export const ToastContext = React.createContext();

export function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const toastContextValue = React.useMemo(() => {
    function addToast(variant, message) {
      setToasts((currToasts) => [
        ...currToasts,
        { variant, message, toastId: crypto.randomUUID() },
      ]);
    }

    function removeToast(toastId) {
      setToasts((currToasts) => {
        return currToasts.filter((toast) => toast.toastId !== toastId);
      });
    }

    return {
      addToast,
      removeToast,
      toasts,
    };
  }, [toasts]);

  return (
    <ToastContext.Provider value={toastContextValue}>
      {children}
    </ToastContext.Provider>
  );
}
