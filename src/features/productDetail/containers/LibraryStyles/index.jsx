import React from "react";
import { Sliders, StyleImageCard } from "../../../../components";
import { StylesSlideSettings } from "../../../../config";
import { styles } from "../../../../config";

const LibraryStyles = () => {
  return (
    <div className="StyleImage m-auto mb-10 px-8 text-center">
      <Sliders settings={StylesSlideSettings} datas={styles}>
        <StyleImageCard />
      </Sliders>
    </div>
  );
};

export default LibraryStyles;
