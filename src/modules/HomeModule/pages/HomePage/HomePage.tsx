import React, { useState } from "react";
import "./HomePage.scss";
import { PasswordGenerator } from "../../components/PasswordGenerator";

interface IProps {
  msg: string;
}

export const HomePage: React.FC<IProps> = ({ msg }) => {
  

  return (
    <>
      <PasswordGenerator />
    </>
  );
};
