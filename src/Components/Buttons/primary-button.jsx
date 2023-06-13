import React from "react";

// ** Third party imports
import clsx from "clsx";

const PrimaryButton = ({ onClick, content }) => {
  function handleAction() {
    onClick();
  }
  return (
    <button
      onClick={handleAction}
      className={clsx(
        "bg-secondary hover:bg-accent-secondary",
        "md:py-4 md:px-6 px-4 py-2",
        "rounded",
        "text-primary md:text-2xl text-xl font-medium transition-all"
      )}
    >
      {content}
    </button>
  );
};

export default PrimaryButton;
