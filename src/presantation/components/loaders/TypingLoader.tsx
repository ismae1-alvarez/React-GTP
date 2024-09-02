import './TypingLoader.css';

type TypingLoaderProps = {
    className?: string;
  };

export function TypingLoader({ className }:TypingLoaderProps) {
  return (
    <div className={`${ className } typing`}>
        <span className="circle scaling"></span>
        <span className="circle scaling"></span>
        <span className="circle scaling"></span>
    </div>
  )
}