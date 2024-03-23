export const FAQBox = ({ header, text }: any) => {
  return (
    <div className="text-black border border-accent p-4" style={{backgroundColor: "#f5efd6"}}>
  <p className="font-black text-lg">{header}</p>
  <p className="mt-1">{text}</p>
</div>
  );
};
