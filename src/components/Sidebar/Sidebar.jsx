import React from "react";
import WidgetCategory from "./WidgetCategory";
import WidgetTag from "./WidgetTag";
import WidgetYear from "./WidgetYear";
import WidgetLatestPosts from "./WidgetLatestPosts";
import WidgetLinks from "./WidgetLinks";
import WidgetSearch from "./WidgetSearch";
import config from "../../../data/SiteConfig";

const Sidebar = ({ tagList, categoryList, yearList, latestPostEdges, links }) => {
  return (
    <aside
      className={`sidebar-container width-full ${
        config.sidebarSticky ? "height-full" : ""
      }`}
    >
      <WidgetSearch />

      {latestPostEdges && (
        <WidgetLatestPosts latestPostEdges={latestPostEdges} />
      )}

      {categoryList && <WidgetCategory categoryList={categoryList} />}

      {tagList && <WidgetTag tagList={tagList} />}

      {yearList && yearList.length > 0 && <WidgetYear yearList={yearList} />}

      {links && (
        <div className="position-sticky top-zero">
          <WidgetLinks links={links} />
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
