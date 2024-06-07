import React from "react";
import { IconButton, ButtonGroup } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

const Pagination = ({pages}) => {
  const [active, setActive] = React.useState(1);

  const getItemProps = (index) => ({
    className: active === index ? "bg-gray-100 text-gray-900" : "",
    onClick: () => setActive(index),
  });

  const next = () => {
    if (active === 5) return;

    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;

    setActive(active - 1);
  };
  return (
    <div className="mt-4 flex   justify-center">
      <ButtonGroup variant="outlined">
        <IconButton onClick={prev}>
          <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
        </IconButton>
       
        {pages.map((page, idx) => (
              <IconButton key={idx} {...getItemProps(page)}>
                {page + 1}
              </IconButton>
            ))}
        <IconButton onClick={next}>
          <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
        </IconButton>
      </ButtonGroup>
    </div>
  );
};

export default Pagination;
