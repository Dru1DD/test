import type { ReactNode } from 'react';
import { useInView } from '@/hooks/use-in-view';

interface FadeInDownProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

const FadeInDown = ({ children, delay = 0, duration = 500, className = '' }: FadeInDownProps) => {
  const { ref, isInView } = useInView<HTMLDivElement>({
    threshold: 0.1,
    rootMargin: '0px 0px -30px 0px',
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`fade-in-down ${isInView ? 'is-visible' : ''} ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default FadeInDown;
