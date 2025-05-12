import { PieChart, Pie, Cell } from 'recharts';

const data = [
  { value: 51, color: '#16255D', label: 'TIETOJENKALASTELUHUIJAUKSET' },
  { value: 32, color: '#EF7C3C', label: 'SIJOITUSHUIJAUKSET' },
  { value: 17, color: '#6FE3EB', label: 'DOKUMENTTI-, RAKKAUS-, SEKÄ TOIMITUSJOHTAJAHUIJAUKSET' },
];

const DonutChart = ({ value, color, label }) => {
  const chartData = [
    { name: 'Shown', value },
    { name: 'Hidden', value: 100 - value },
  ];

  return (
    <div className="flex flex-col items-center text-center max-w-[10rem]">
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
            dataKey="value"
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={index === 0 ? color : '#000'} />
            ))}
          </Pie>
        </PieChart>
        <div
          className="absolute inset-0 flex items-center justify-center text-xl md:text-2xl font-semibold"
          style={{ color }}
        >
          {value}%
        </div>
      </div>
      {/* Colored label text */}
      <div className="mt-3 text-sm font-medium" style={{ color }}>
        {label}
      </div>
    </div>
  );
};

export default function FraudInfographic() {
  return (
    <div className="bg-[#F5E9E2] text-black min-h-screen py-10 px-4 md:px-8 font-sans">

      {/* Responsive layout: vertical on mobile, horizontal on desktop */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-10">
        {data.map((item, index) => (
          <DonutChart
            key={index}
            value={item.value}
            color={item.color}
            label={item.label}
          />
        ))}
      </div>
    </div>
  );
}
