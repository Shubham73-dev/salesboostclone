import axios from 'axios';

import { Props } from '@/axios/interfaces';

export const note = (props: Props) => {
  const url = `bff/api/v1/notes/${props?.url ?? ''}`;
  return axios({
    ...props,
    url,
  });
};
