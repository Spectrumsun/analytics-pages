import { ResponsiveLine } from '@nivo/line';
import { priorityType } from '../../data';

const MyResponsiveLine = ({ data, priority }) => (
    <ResponsiveLine
      data={[
        {
          "id": "Analytic",
          data
        }
      ]}
      xScale={{ type: 'point' }}
      margin={{ top: 30, right: 20, bottom: 50, left: 40 }}
      axisTop={null}
      axisRight={null}
      pointSize={10}
      pointBorderWidth={2}
      pointLabelYOffset={-12}
      useMesh={false}
      enableGridX={false}
      pointColor="white"
      pointBorderColor={{ from: "serieColor" }}
      yScale={{
        type: 'linear',
        min: 10,
        max: 50,
        stacked: false,
        reverse: false,
        base: 10,
      }}
      axisLeft={{
        orient: 'left',
        tickSize: 0,
        tickPadding: 20,
        tickRotation: 0,
        legend: '',
        legendOffset: -40,
        legendPosition: 'middle'
      }}
      axisBottom={{
        orient: 'bottom',
        tickSize: 0,
        tickPadding: 18,
        tickRotation: 0,
        legend: 'transportation',
        legendOffset: 60,
        legendPosition: 'middle'
      }}
      colors={[priorityType[priority]]}
    />
);

export default MyResponsiveLine;
