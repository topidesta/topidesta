import React from "react";
import AutoLink from "../AutoLink/AutoLink";
import WidgetContainer from "./WidgetContainer";
import WidgetTitle from "./WidgetTitle";
import { getYearPath } from "../../utils/helpers";
import config from "../../../data/SiteConfig";

const WidgetYear = ({ yearList }) => (
  <WidgetContainer extraClass="years-container">
    <WidgetTitle title={config.yearWidgetTitle} />
    <div>
      {yearList.map((year) => (
        <AutoLink
          key={year}
          to={getYearPath(year)}
          className="block border-bottom border-color-light-grey padding-top-half padding-bottom-half"
        >
          <span>{year}</span>
        </AutoLink>
      ))}
    </div>
  </WidgetContainer>
);

export default WidgetYear;
