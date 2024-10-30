export enum ReportType {
    INCOME = 'income',
    EXPENSE = 'expense'
}
export const data: Data ={
    report: [
        {
        id: 'uuid1',
        source: 'hookup',
        amount: 58000,
        created_at: new Date(),
        updated_at: new Date(),
        type: ReportType.INCOME
    },
        {
        id: 'uuid2',
        source: 'zaddy',
        amount: 528000,
        created_at: new Date(),
        updated_at: new Date(),
        type: ReportType.INCOME
    },
        {
        id: 'uuid3',
        source: 'food',
        amount: 58000,
        created_at: new Date(),
        updated_at: new Date(),
        type: ReportType.EXPENSE
    },
]
}

interface Data{
    report:{
        id: String
        source: String
        amount: Number
        created_at: Date
        updated_at: Date
        type: ReportType
    }[]
}

