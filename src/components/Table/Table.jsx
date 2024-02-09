import { customerData } from "costumerData";
import { TableCell, TableData, TableDataStatus, TableHeader, TableString } from "./Table.styled";

export default function Table() {
    return (        
      <table>
        <TableHeader>
          <tr>
            <TableCell>Customer Name</TableCell>
            <TableCell>Company</TableCell>
            <TableCell>Phone Number</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Country</TableCell>
            <TableCell>Status</TableCell>
          </tr>
        </TableHeader>
        <tbody>
        {customerData.map((customer) => (
          <TableString key={customer.id}>
            <TableData>{customer.name}</TableData>
            <TableData>{customer.company}</TableData>
            <TableData>{customer.number}</TableData>
            <TableData>{customer.email}</TableData>
            <TableData>{customer.country}</TableData>
            <TableDataStatus status={customer.status}>{customer.status}</TableDataStatus>
          </TableString>
          ))}
        </tbody>
      </table>
    )
}