export default function Pattern({ className }: { className?: string }) {
  return (
    <div 
      className={`absolute pointer-events-none opacity-20 ${className}`}
      style={{
        backgroundImage: 'repeating-linear-gradient(45deg, #C59B27 0, #C59B27 1px, transparent 0, transparent 50%)',
        backgroundSize: '10px 10px',
      }}
    ></div>
  );
}