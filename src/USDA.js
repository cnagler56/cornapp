import { useSelector } from 'react-redux'



const USDA = () => {
    const usda = useSelector(state => state.usda)
    console.log('USDA :', usda);
    console.log('Item:', usda?.[0]);
    // const renderedUsers = usda?.map(item => (
    //     <li key={item.id}>

    //         <div>{item.state}   {item.yield}</div>
            
    //     </li>
       
    // ))
    


    return (
        <section className="contain">
            <h2>USDA Data</h2>

            {/* <ul>{renderedUsers}</ul> */}
        </section>
    )
}

export default USDA;
