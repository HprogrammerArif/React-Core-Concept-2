export default function Friend({arif}) {
  const {name, email, phone} = arif;
  return(
    <div className="box">
      <h4>Name: {name} </h4>
      <p>Email: {email} </p>
      <p>Email: {phone} </p>
    </div>
  )
}