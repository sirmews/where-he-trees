interface IconInterface {
  src: any;
  size?: number;
  style?: React.CSSProperties;
}

const Icon = ({ src, size = 3, style }: IconInterface) => (
  <div 
    style={{
      ...style, 
      height: `${size}rem`,
      width: `${size}rem`,
      padding: `0.5rem`,
    }}
  >
    <img src={src} alt="logo" style={{ height: '100%', width: '100%'}}/>
  </div>
)

export default Icon;