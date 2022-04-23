import { Fragment } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";
import Card from "./Card";
import styles from "./ErrorModal.module.css";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onErrorView} />;
};

const Overlay = (props) => {
  return (
    <Card classes={styles.modal}>
      <header className={styles.header}>
        <h2>{props.errorText.title}</h2>
      </header>
      <div className={styles.content}>
        <p>{props.errorText.message}</p>
      </div>
      <footer className={styles.actions}>
        <Button onClick={props.onErrorView}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <Fragment>
      {createPortal(<Backdrop onErrorView={props.onErrorView} />, document.getElementById('backdrop-root'))}
      {createPortal(<Overlay errorText={props.errorText} onErrorView={props.onErrorView} />, document.getElementById('overlay-root'))}
    </Fragment>
  );
};

export default ErrorModal;
