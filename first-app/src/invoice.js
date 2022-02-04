import { useState } from "react";
import './invoice.css'

export function InvoiceTable() {
    const [invoices, setInvoices] = useState([
        { invNum: '26346245', invDt: '2021-01-01', amt: 6254, sts: 1 },
        { invNum: '347657', invDt: '2022-01-03', amt: 35356, sts: 2 },
        { invNum: '59687', invDt: '1999-10-11', amt: 28476, sts: 1 },
        { invNum: '51345745', invDt: '1999-11-10', amt: 54967, sts: 2 },
        { invNum: '0395827245', invDt: '2022-09-17', amt: 12345, sts: 2 },
        { invNum: '7847547356', invDt: '2021-10-10', amt: 409873, sts: 1 },
    ])

    const invoiceRows = invoices.map( (inv, ind) => (
            <tr>
                <td>{ind + 1}</td>
                <td>{inv.invNum}</td>
                <td>{inv.invDt}</td>
                <td>{inv.amt}</td>
                <td>{inv.sts}</td>
            </tr>
        )
    )

    return (
        <> {/* <> </> called react fragment */}
            <table>
                <tr>
                    <th>Sr #</th>
                    <th>Invoice #</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Status</th>
                </tr>
                {invoiceRows}
            </table>
        </>
    )
}