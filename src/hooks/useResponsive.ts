import {useEffect, useState} from 'react';
import {useMediaQuery} from 'react-responsive';

export interface UseResponsiveProps {
  type: string;
}

export const useResponsive = ({type}: UseResponsiveProps) => {
  const [isResponsive, setIsResponsive] = useState<boolean>(false);
  let checkMediaQuery = false;
  if (type === 'mobile') {
    checkMediaQuery = useMediaQuery({query: '(max-width: 425px)'});
  }

  useEffect(() => {
    setIsResponsive(checkMediaQuery);
  }, [checkMediaQuery]);

  return isResponsive;
};
