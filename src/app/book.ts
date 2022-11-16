import {Editorial} from "./editorial";

export interface Book{
  id:number;
  name: string;
  description: string;
  imageUrl: string;
  cantidad: number;
  editorialId: Editorial;
}
