export interface TabLabel {
  label: string;
  value: string;
}

export interface SortLabel {
  label: string;
  value: string;
}

export interface ResErrorType {
  timestamp: string;
  status: number;
  error: string;
  path: string;
}

export type ProfileEnum = 'GREEN' | 'RED' | 'BLUE' | 'YELLOW';

export interface IngredientType {
  name: string;
  iconImage: string;
}
