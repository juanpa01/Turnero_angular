import { Category } from './category.model';
import { Adviser } from './adviser.model';

export interface Turn {
    id: number;
    name: string;
    state: string;
    category: Category;
    adviser: Adviser;
}