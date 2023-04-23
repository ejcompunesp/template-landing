import { useRef } from 'react';

type SvgLabelProps = {
  svg: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  label: string;
};

const SvgLabel = ({ svg: SvgComponent, label }: SvgLabelProps) => {
  const svgRef = useRef<SVGSVGElement>(null);

  return (
    <div>
      <SvgComponent ref={svgRef} />
      <span>{label}</span>
    </div>
  );
};

export default SvgLabel;