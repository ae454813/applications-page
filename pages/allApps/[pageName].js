import { useRouter } from "next/router";
import React from "react";

import AppPageComponent from "../../components/applications Page";
import ALL_APPS_DATA from "../../components/applications Page/allAppsData";

const AppPage = () => {
  const { query } = useRouter();
  const data = ALL_APPS_DATA.find(({ name }) => name == query.pageName);
  if (!data) return <h1> 404</h1>;
  return (
    <div>
      <AppPageComponent data={data} />
    </div>
  );
};

export default AppPage;
