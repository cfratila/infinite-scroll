import React from 'react';
import { UseQueryResult } from 'react-query';

type Pattern = {
  isIdle: () => React.ReactElement;
  isLoading: () => React.ReactElement;
  isError?: (error: unknown) => React.ReactElement;
  isSuccess: (query: any) => React.ReactElement;
};

export function matchQuery<Data>(query: UseQueryResult<Data>, pattern: Pattern) {
  if (query.isLoading) {
    return pattern.isLoading();
  }

  if (query.isIdle) {
    return pattern.isIdle();
  }

  if (query.isError && pattern.isError) {
    return pattern.isError(query.error);
  }

  if (query.isSuccess) {
    return pattern.isSuccess(query);
  }

  throw new Error('Encountered an unknown state.');
}
