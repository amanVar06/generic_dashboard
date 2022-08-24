import React from "react";
import {
  SparklineTooltip,
  SparklineComponent,
  Inject,
} from "@syncfusion/ej2-react-charts";

const SparkLine = ({ id, height, width, color, data, type, currentColor }) => {
  return (
    <SparklineComponent
      id={id}
      height={height}
      width={width}
      lineWidth={1}
      valueType="Numeric"
      fill={color}
      border={{ color: currentColor, width: 2 }}
      dataSource={data}
      xName="xval"
      //changed here x to xval and y to yval
      yName="yval"
      type={type}
      tooltipSettings={{
        visible: true,
        format: "${xval} : data ${yval}",
        trackLineSettings: {
          visible: true,
        },
      }}
    >
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  );
};

export default SparkLine;
