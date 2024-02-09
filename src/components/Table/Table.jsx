
export default function Table() {
    const customerData = [{id:"1",
    name:'3', email:'3',age:'3',country:'3',active:'3', }]
    return (        
        <table>
        <thead>
        <tr>
          <th>Customer Name</th>
          <th>Company</th>
          <th>Phone Number</th>
          <th>Email</th>
          <th>Country</th>
          <th>Status</th>
        </tr>
        </thead>
        <tbody>
        {customerData.map((customer) => (
          <tr key={customer.id}>
            <td>{customer.id}</td>
            <td>{customer.name}</td>
            <td>{customer.email}</td>
            <td>{customer.age}</td>
            <td>{customer.country}</td>
            <td>{customer.active ? "Yes" : "No"}</td>
          </tr>
          ))}
        </tbody>
      </table>
    )
}