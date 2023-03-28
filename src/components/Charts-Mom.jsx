import { Chart } from 'react-google-charts';

const dataMap = (
  [
    ['Country', 'Word'],
    ['US', 'Hello'],
    ['Canada', 'Bonjour'],
    ['Mexico', 'Hola'],
    ['France', 'Salut'],
    ['Brazil' , 'PIRASSUNUNGA \n Curitiba (PR) Rio de Janeiro (RJ)']
  ]
)

const Map = () => (
  <div className="Map">
    <Chart
      chartType="GeoChart"
      width="100%"
      height="30vw"
      data={dataMap}
      options={{
        colorAxis: { colors: ['#6a3463', '#6a3463'] }
      }}
    />
  </div>
);

export default Map;