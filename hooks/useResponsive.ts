import {useEffect} from 'react';
import {useMediaQuery} from 'react-responsive';

export interface UseResponsiveProps {
  query: string;
}

export const useResponsive = ({query}: UseResponsiveProps) => {
  const isResponsive = useMediaQuery({query: '(min-width: 425px)'});

  useEffect(() => {}, [isResponsive]);
};
