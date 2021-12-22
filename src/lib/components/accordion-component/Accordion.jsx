import React, { useState, useEffect } from "react";
import classNames from "classnames";
import "./Accordion.scss";

const SingleAccordion = ({
  children,
  headerText,
  headerClass,
  isExpanded,
  headerIcon,
}) => {
  const [expanded, setExpanded] = useState(isExpanded);
  return (
    <article
      tabIndex="0"
      className={classNames(
        "accordion-item",
        expanded ? "active-accordion" : ""
      )}
      onClick={() => setExpanded(!expanded)}
    >
      <span className="flex flexRow align-center cursor-pointer">
        <span className="material-icons f-s-3rem">{headerIcon}</span>
        <p className={headerClass}>{headerText}</p>
        <button className="br-full block accordion-btn box-shadow cursor-pointer">
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
        "accordion-group-item col-w-3",
        expanded ? "active-accordion" : "",
        activeId !== accordId ? "hide-md-down" : ""
      )}
      onClick={handleExpand}
    >
      <span className="flex flexRow align-center cursor-pointer">
        <span className="material-icons f-s-3rem">{headerIcon}</span>
        <p className={headerClass}>{headerText}</p>
        <button className="br-full block accordion-btn box-shadow cursor-pointer">
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
}) => {
  return accordionType === "single" ? (
    <SingleAccordion
      children={children}
      headerText={headerText}
      headerClass={headerClass}
      isExpanded={isExpanded}
      headerIcon={headerIcon}
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
    />
  );
};

export default Accordion;
