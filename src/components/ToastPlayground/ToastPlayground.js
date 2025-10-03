import React from 'react';

import Button from '../Button';
import Toast from '../Toast/Toast';
import styles from './ToastPlayground.module.css';
import ToastShelf from '../ToastShelf/ToastShelf';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [message, setMessage] = React.useState('');
  const [variant, setVariant] = React.useState('notice');
  const [isPreviewShown, setIsPreviewShown] = React.useState(false);
  const [toasts, setToasts] = React.useState([]);

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

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf toasts={toasts} removeToast={removeToast} />
      {isPreviewShown && (
        <Toast
          message={message}
          variant={variant}
          setIsPreviewShown={setIsPreviewShown}
        />
      )}

      <form
        className={styles.controlsWrapper}
        onSubmit={(event) => {
          event.preventDefault()
          addToast(variant, message)}}
      >
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((option) => {
              const radioId = `variant-${option}`;
              return (
                <label htmlFor={radioId} key={option}>
                  <input
                    id={radioId}
                    type="radio"
                    name="variant"
                    value={option}
                    onChange={(event) => setVariant(event.target.value)}
                    checked={option === variant}
                  />
                  {option}
                </label>
              );
            })}

            {/* TODO Other Variant radio buttons here */}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button type="submit">Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
