import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

//component - CoreUI / CPagination
const CPagination = (props) => {
  const {
    className,
    //
    innerRef,
    addListClass,
    activePage,
    size,
    firstButton,
    previousButton,
    nextButton,
    lastButton,
    dots,
    arrows,
    doubleArrows,
    limit,
    pages,
    align,
    onActivePageChange,
    ...attributes
  } = props;

  // useEffect(() => {
  //   pages < activePage && onActivePageChange(pages, true)
  // }, [pages])

  //render
  const listClasses = classNames(
    "pagination",
    size && "pagination-" + size,
    "justify-content-" + align,
    addListClass
  );

  const backArrowsClasses = classNames(
    "page-item",
    activePage === 1 && "disabled"
  );

  const nextArrowsClasses = classNames(
    "page-item",
    activePage === pages && "disabled"
  );

  const showDots = (() => {
    return dots && limit > 4 && limit < pages;
  })();
  const maxPrevItems = (() => {
    return Math.floor((limit - 1) / 2);
  })();
  const maxNextItems = (() => {
    return Math.ceil((limit - 1) / 2);
  })();
  const beforeDots = (() => {
    return showDots && activePage > maxPrevItems + 1;
  })();
  const afterDots = (() => {
    return showDots && activePage < pages - maxNextItems;
  })();
  const computedLimit = (() => {
    return limit - afterDots - beforeDots;
  })();
  const range = (() => {
    return activePage + maxNextItems;
  })();
  const lastItem = (() => {
    return range >= pages ? pages : range - afterDots;
  })();
  const itemsAmount = (() => {
    return pages < computedLimit ? pages : computedLimit;
  })();
  const items = (() => {
    if (activePage - maxPrevItems <= 1) {
      return Array.from(
        {
          length: itemsAmount,
        },
        (v, i) => i + 1
      );
    } else {
      return Array.from(
        {
          length: itemsAmount,
        },
        (v, i) => {
          return lastItem - i;
        }
      ).reverse();
    }
  })();

  const setPage = (number) => {
    if (number !== activePage) {
      onActivePageChange(number);
    }
  };

  return (
    <nav
      className={className}
      aria-label="pagination"
      {...attributes}
      ref={innerRef}
    >
      <ul className={listClasses}>
        {doubleArrows && (
          <li className={backArrowsClasses}>
            {activePage !== 1 ? (
              <a
                className="page-link"
                onClick={() => setPage(1)}
                aria-label="Go to last page"
              >
                {firstButton}
              </a>
            ) : (
              <a className="page-link" aria-label="Go to last page">
                {firstButton}
              </a>
            )}
          </li>
        )}
        {arrows && (
          <li className={backArrowsClasses}>
            {activePage !== 1 ? (
              <a
                className="page-link"
                onClick={() => setPage(activePage - 1)}
                aria-label="Go to last page"
              >
                {previousButton}
              </a>
            ) : (
              <a className="page-link" aria-label="Go to last page">
                {previousButton}
              </a>
            )}
          </li>
        )}
        {beforeDots && (
          <li role="separator" className="page-item disabled">
            <span className="page-link">…</span>
          </li>
        )}
        {items.map((i) => {
          return (
            <li
              className={`${activePage === i ? "active" : ""} page-item`}
              key={i}
            >
              <a
                className="page-link"
                onClick={(e) => setPage(i, e)}
                aria-label={
                  activePage === i ? `Current page ${i}` : `Go to page ${i}`
                }
              >
                {i}
              </a>
              {/* <a></a> */}
            </li>
          );
        })}
        {afterDots && (
          <li role="separator" className="page-item disabled">
            <span className="page-link">…</span>
          </li>
        )}
        {arrows && (
          <li className={nextArrowsClasses}>
            {activePage !== pages ? (
              <a
                className="page-link"
                onClick={() => setPage(activePage + 1)}
                aria-label="Go to last page"
              >
                {nextButton}
              </a>
            ) : (
              <a className="page-link" aria-label="Go to last page">
                {nextButton}
              </a>
            )}
          </li>
        )}
        {doubleArrows && (
          <li className={nextArrowsClasses}>
            {activePage !== pages ? (
              <a
                className="page-link"
                onClick={() => setPage(pages)}
                aria-label="Go to last page"
              >
                {lastButton}
              </a>
            ) : (
              <a className="page-link" aria-label="Go to last page">
                {lastButton}
              </a>
            )}
          </li>
        )}
      </ul>
    </nav>
  );
};

CPagination.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  activePage: PropTypes.number,
  dots: PropTypes.bool,
  arrows: PropTypes.bool,
  doubleArrows: PropTypes.bool,
  firstButton: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  previousButton: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  nextButton: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  lastButton: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  size: PropTypes.oneOf(["", "sm", "lg"]),
  align: PropTypes.oneOf(["start", "center", "end"]),
  addListClass: PropTypes.string,
  limit: PropTypes.number,
  pages: PropTypes.number,
  onActivePageChange: PropTypes.func.isRequired,
};

CPagination.defaultProps = {
  activePage: 1,
  dots: true,
  arrows: true,
  doubleArrows: true,
  limit: 5,
  firstButton: <React.Fragment>&laquo;</React.Fragment>,
  previousButton: <React.Fragment>&lsaquo;</React.Fragment>,
  nextButton: <React.Fragment>&rsaquo;</React.Fragment>,
  lastButton: <React.Fragment>&raquo;</React.Fragment>,
  align: "start",
  pages: 10,
};

export default CPagination;
