import React from "react";
import clsx from "clsx";

const ContactUs = () => {
  return (
    <div className="container mx-auto">
      <div className={clsx("flex justify-center items-center", "my-20 mx-6")}>
        <div className={clsx("pt-5 px-10 pb-10", "backdrop-blur-sm bg-white/40", "max-w-4xl")}>
          <p className="mb-5">Contact Us</p>
          <div>
            It is a long established fact that a reader will be distracted by the readable content
            of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
            more-or-less normal distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing packages and web
            page editors now use Lorem Ipsum as their default model text, and a search for 'lorem
            ipsum' will uncover many web sites still in their infancy. Various versions have evolved
            over the years, sometimes by accident, sometimes on purpose (injected humour and the
            like).
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
