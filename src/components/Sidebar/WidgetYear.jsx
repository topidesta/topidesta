import React from "react";
import { navigate } from "gatsby";
import WidgetContainer from "./WidgetContainer";
import WidgetTitle from "./WidgetTitle";
import { getYearPath } from "../../utils/helpers";
import config from "../../../data/SiteConfig";

const WidgetYear = ({ yearList }) => {
  const handleYearChange = (event) => {
    const selectedYear = event.target.value;
    if (selectedYear) {
      navigate(getYearPath(selectedYear));
    }
  };

  return (
    <WidgetContainer extraClass="years-container">
      <WidgetTitle title={config.yearWidgetTitle} />
      <select
        onChange={handleYearChange}
        className="width-full padding-half border border-color-light-grey"
        defaultValue=""
        style={{
          fontSize: "1rem",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        <option value="" disabled>
          Pilih Tahun...
        </option>
        {yearList.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </WidgetContainer>
  );
};

export default WidgetYear;
