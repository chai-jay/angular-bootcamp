export interface View {
    age: number;
    region: 'North America' | 'Europe' | 'Asia';
    date: string;
}

export interface Video {
    title: string;
    author: string;
    id: string;
    viewDetails: View[];
}
