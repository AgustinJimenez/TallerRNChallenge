export type GenericStateType = {
  drawer_is_open: boolean;
  // Add more key-value pairs as needed
};
export type UpdateGenericReducerActionType = {
  type: 'UPDATE';
  key: string;
  value: any;
};
