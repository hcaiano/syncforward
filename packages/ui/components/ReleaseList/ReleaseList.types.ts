import { ReactNode } from 'react';

import { Release } from '@uicomponents/Accordion/Accordion.types';

export interface ReleaseListProps {
  children?: ReactNode;
  data?: Release[];
}
