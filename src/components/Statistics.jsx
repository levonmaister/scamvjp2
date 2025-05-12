import { PieChart, Pie, Cell } from 'recharts';

const data = [
  { value: 51, color: '#16255D', label: 'TIETOJENKALASTELUHUIJAUKSET' },
  { value: 32, color: '#EF7C3C', label: 'SIJOITUSHUIJAUKSET' },
  { value: 17, color: '#6FE3EB', label: 'DOKUMENTTI-, RAKKAUS-, SEKÄ TOIMITUSJOHTAJAHUIJAUKSET' },
];

const DonutChart = ({ value, color }) => {
  const chartData = [
    { name: 'Shown', value },
    { name: 'Hidden', value: 100 - value },
  ];

  return (
    <div className="relative w-24 h-24 md:w-28 md:h-28">
      <PieChart width={112} height={112}>
        <Pie
          data={chartData}
          cx="50%"
          cy="50%"
          innerRadius={34}
          outerRadius={52}
          startAngle={90}
          endAngle={-270}
          paddingAngle={0}
          dataKey="value"
        >
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={index === 0 ? color : '#000'} />
          ))}
        </Pie>
      </PieChart>
      <div className="absolute inset-0 flex items-center justify-center text-xl md:text-2xl font-semibold">
        {value}%
      </div>
    </div>
  );
};

export default function FraudInfographic() {
  return (
    <div className="bg-[#F5E9E2] text-black min-h-screen py-10 px-4 md:px-8 font-sans">
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-10 leading-snug tracking-wide">
        SUOMALASILTA HUIJATAAN YLI<br />60 MILJOONAA EUROA VUODESSA
      </h1>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10 mb-8">
        {data.map((item, index) => (
          <DonutChart key={index} value={item.value} color={item.color} />
        ))}
      </div>

      <div className="max-w-md mx-auto text-sm md:text-base space-y-4">
        {data.map((item, index) => (
          <div key={index} className="flex items-center space-x-3">
            <span
              className="inline-block w-4 h-4 rounded-full"
              style={{ backgroundColor: item.color }}
            />
            <span className="font-medium">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
