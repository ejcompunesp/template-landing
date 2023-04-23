import { ReactComponent as MySvg } from '../../assets/svg/instagram-167-svgrepo-com.svg';

type SvgLabelProps = {
    svg: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    label: string;
  };
  
  const SvgLabel = ({ svg: SvgComponent, label }: SvgLabelProps) => (
    <div>
      <SvgComponent />
      <span>{label}</span>
    </div>
  );
  
  export default SvgLabel;
  