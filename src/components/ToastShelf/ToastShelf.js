import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { ToastContext } from '../ToastProvider';

function ToastShelf() {
  const { toasts, removeToast } = React.useContext(ToastContext);

  return (
    <ol className={styles.wrapper}>
      {toasts?.map(({ variant, message, toastId }) => {
        return (
          <li className={styles.toastWrapper} key={toastId}>
            <Toast
              variant={variant}
              message={message}
              removeToast={() => removeToast(toastId)}
            />
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
