export interface IngredientType {
  name: string;
  category: string;
}

export interface IngredientDetailType {
  ingredientDetailId: number;
  iconImage: string;
  name: string;
  quantity: number;
  location: string;
  memo: string;
  addDate: string;
  expirationDate: string;
  isDeleted: true;
}
