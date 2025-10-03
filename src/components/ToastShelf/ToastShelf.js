import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ toasts, removeToast }) {
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
