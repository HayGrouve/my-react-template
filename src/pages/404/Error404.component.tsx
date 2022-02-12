import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./error404.module.css";

const Error404: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.wrapper}>
      <h1>404 not found!</h1>
      <button onClick={() => navigate("/")}>Home</button>
    </div>
  );
};

export default Error404;
