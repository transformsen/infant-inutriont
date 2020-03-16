import { Label } from 'ng2-charts';
import { ChartDataSets } from 'chart.js';

export interface BrandMostNutrient extends NutrientPrcentage{
    brand: string
    image: string
}

export interface NutrientPrcentage{
    nutrient : string
    percentage: number
}

export interface ChartCompData{
    label : Label[]
    data: ChartDataSets[]
}