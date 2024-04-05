import React,{useEffect} from 'react'

function AuthData(props) {
    useEffect(() => {
        console.log("Component  Mounted")
        // this callBack Function is called before Unmount 
        return function () {
            console.log("Unmount The Component")
          }
      }, []);

    // useEffect(() => {
   
    //     console.log("Component  Updated")
    //   }, [props]);

    return (
        <div>
            <table className="table">
               

                <tbody>
                    <tr>
                        <th scope="row">{props.id}</th>
                        <td>{props.name}</td>
                        <td>{props.email}</td>
                        <td>{props.pass}</td>
                        <td>{props.date}</td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}

export default AuthData
