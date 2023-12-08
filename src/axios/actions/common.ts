import axios from 'axios';

import { Props } from '@/axios/interfaces';

export const tenant = (props: Props) => {
  const url = `bff/api/v1/tenant/${props?.url ?? ''}`;
  return axios({
    ...props,
    url,
  });
};
