import { Label } from 'ng2-charts';
import { ChartDataSets } from 'chart.js';

export interface BrandTrandingInMarket{
    brand: string
    trend: number
    overallTrend: number
}

export interface BarChartData{
    label: Label[],
    data: ChartDataSets[]
}

export interface BrandPriceUpdated{
    brand: string
    image: string
    price: number
    percentage: number
}

export interface RecentUpdatedBrand{
    brand: string
    image: string
    brandWebRating: number
    onlineReview: number
    sellingPrice: number
    shareMarket: number
    positivePercentage: number
}

export interface BrandRatings{
    brand: string
    ratings: number
    image: string
    marginTop?: string
}

export interface BrandRatingsPointData{
    Labels: number[]
    data: []
}


export interface BrandReview{
    positive: number
    negative: number
    nutral: number
}

export interface RatingDetails{
    product: string
    rank: number
    price: number
    size: number
    weight: number
    star1: number
    star2: number
    star3: number
    star4: number
    star5: number
    review: number
}