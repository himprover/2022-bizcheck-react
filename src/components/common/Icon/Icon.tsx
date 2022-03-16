export interface IconProps extends React.HTMLAttributes<HTMLElement> {
  children: string;
  type?: string;
}

export const Icon = ({children, type, onClick}: IconProps) => {
  return (
    <div className={type ? type : 'material-icons'} onClick={onClick}>
      {children}
    </div>
  );
};
