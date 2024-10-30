export const data: Data ={
    report: []
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
enum ReportType {
    INCOME = 'income',
    EXPENSE = 'expense'
}

data.report.push({
    id: 'uuid',
        source: 'Salary',
        amount: 150000,
        created_at: new Date(),
        updated_at: new Date(),
        type: ReportType.EXPENSE
})