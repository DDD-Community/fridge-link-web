interface ShareData {
  shareId: number;
  title: string;
  itemName: string;
  content: string;
  shareTime: {
    hour: number;
    minute: number;
    second: number;
    nano: number;
  };
  shareDate: string;
  limitDate: string;
  limitPerson: number;
  location: string;
  status: string;
  thumbNailImage: string;
}
