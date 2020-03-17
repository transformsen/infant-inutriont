export interface Product {
    name: string;
    image: string;
    description: string;
}

export interface ProductRank {
    rank: number;
    yAxis: string;
}

export interface ProductAnalysis {
    ratings: number[];
    percentage: number;
    totalRating: number;
}

export interface ProductSale {
    month: string;
    sales: number;
    review: number;
}
