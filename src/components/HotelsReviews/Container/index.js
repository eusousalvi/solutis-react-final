import React from "react";

const Container = ({ className, children }) => {
  return <section className={className || "container"}>{children}</section>;
};

export default Container;
