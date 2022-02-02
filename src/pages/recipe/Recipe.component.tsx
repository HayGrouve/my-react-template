import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./recipe.module.css";

const Recipe: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <section>
      <h1>Recipe page</h1>
    </section>
  );
};

export default Recipe;
