import { PieChart, Pie, Cell } from 'recharts';
import { useEffect, useRef, useState } from 'react';


const data = [
  { value: 51, color: '#16255D', label: 'TIETOJENKALASTELUHUIJAUKSET' },
  { value: 32, color: '#EF7C3C', label: 'SIJOITUSHUIJAUKSET' },
  { value: 17, color: '#6FE3EB', label: 'DOKUMENTTI-, RAKKAUS-, SEKÄ TOIMITUSJOHTAJAHUIJAUKSET' },
];



const DonutChart = ({ value, color, label }) => {
  const [isVisible, setIsVisible] = useState(false);
  const chartRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (chartRef.current) {
      observer.observe(chartRef.current);
    }

    return () => {
      if (chartRef.current) observer.unobserve(chartRef.current);
    };
  }, []);

  const chartData = [
    { name: 'Shown', value: isVisible ? value : 0 },
    { name: 'Hidden', value: 100 - value },
  ];

  return (
    <div
      ref={chartRef}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '200px',
        margin: '20px',
        transition: 'all 0.3s ease-in-out',
      }}
    >
      <div style={{ position: 'relative', width: '160px', height: '160px' }}>
        <PieChart width={160} height={160}>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={75}
            startAngle={90}
            endAngle={-270}
            dataKey="value"
            isAnimationActive={isVisible}
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={index === 0 ? color : '#000'} />
            ))}
          </Pie>
        </PieChart>
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: '1.8rem',
            fontWeight: '600',
            color: color,
            whiteSpace: 'nowrap',
          }}
        >
          {value}%
        </div>
      </div>
      <div
        style={{
          marginTop: '16px',
          textAlign: 'center',
          color: color,
          fontWeight: '600',
          fontSize: '0.85rem',
          lineHeight: '1.3',
        }}
      >
        {label}
      </div>
    </div>
  );
};



export default function FraudInfographic() {
  return (
    <div className="bg-[#F5E9E2] text-black min-h-screen py-10 px-4 md:px-8 font-sans">

   
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
