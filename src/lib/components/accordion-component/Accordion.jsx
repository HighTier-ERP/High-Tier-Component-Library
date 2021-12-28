import React, { useState, useEffect } from "react";
import classNames from "classnames";
import "./Accordion.scss";

const SingleAccordion = ({
  children,
  headerText,
  headerClass,
  isExpanded,
  headerIcon,
  accordionWidth,
}) => {
  const [expanded, setExpanded] = useState(isExpanded);
  return (
    <article
      tabIndex="0"
      className={classNames(
        "accordion-item",
        expanded ? "active-accordion" : "",
        accordionWidth
      )}
      onClick={() => setExpanded(!expanded)}
    >
      <span className="flex flex-row items-center pointer">
        <span className="material-icons f-s-3rem">{headerIcon}</span>
        <p className={headerClass}>{headerText}</p>
        <button className="br-full block accordion-btn box-shadow pointer">
          <span className="material-icons text-color-primary">
            {!expanded ? "add" : "remove"}
          </span>
        </button>
      </span>
      {expanded && children}
    </article>
  );
};

const GroupAccordion = ({
  children,
  headerText,
  headerClass,
  headerIcon,
  accordId,
  activeId,
  setActiveId,
  accordionWidth,
}) => {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    setExpanded(activeId === accordId);
  }, [setExpanded, activeId, accordId]);

  function handleExpand() {
    setExpanded(!expanded);
    setActiveId(accordId);
  }

  return (
    <article
      tabIndex="0"
      className={classNames(
        "accordion-group-item",
        expanded ? "active-accordion" : "",
        accordionWidth
      )}
      onClick={handleExpand}
    >
      <span className="flex flex-row items-center pointer">
        <span className="material-icons f-s-3rem">{headerIcon}</span>
        <p className={headerClass}>{headerText}</p>
        <button className="br-full block accordion-btn box-shadow pointer">
          <span className="material-icons text-color-primary">
            {!expanded ? "add" : "remove"}
          </span>
        </button>
      </span>
      {expanded && children}
    </article>
  );
};

const Accordion = ({
  children,
  headerText,
  headerClass,
  isExpanded,
  headerIcon,
  accordionType,
  accordId,
  activeId,
  setActiveId,
  accordionWidth,
}) => {
  return accordionType === "single" ? (
    <SingleAccordion
      children={children}
      headerText={headerText}
      headerClass={headerClass}
      isExpanded={isExpanded}
      headerIcon={headerIcon}
      accordionWidth={accordionWidth}
    />
  ) : (
    <GroupAccordion
      children={children}
      headerText={headerText}
      headerClass={headerClass}
      headerIcon={headerIcon}
      accordId={accordId}
      activeId={activeId}
      setActiveId={setActiveId}
      accordionWidth={accordionWidth}
    />
  );
};

export default Accordion;
