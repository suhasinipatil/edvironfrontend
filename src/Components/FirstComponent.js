import MonetizationOnTwoToneIcon from '@mui/icons-material/MonetizationOnTwoTone';
import { createContext, useContext, useState, useEffect } from "react";

const FirstComponent = () => {
    const schoolName = 'DAV Public School';
    const [defaulter, setDefaulter] = useState(0);

    const [count, setCount] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('http://localhost:8080/students/' + schoolName, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
              },
            });
    
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
    
            const data = await response.json();
            setCount(data);
            console.log(data);
          } catch (error) {
            console.error('Error fetching data:', error);
            setCount(null);
          }
        };
            
        fetchData();
    }, [schoolName]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('http://localhost:8080/students/defaulters/' + schoolName, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
              },
            });
    
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
    
            const data = await response.json();
            setDefaulter(data);
            console.log(data);
          } catch (error) {
            console.error('Error fetching data:', error);
            setDefaulter(null);
          }
        };
            
        fetchData();
    }, [schoolName]);
    
  return (
    <div className="first-component">
        <table>
            <tr className="one-row">
                <th>
                    <MonetizationOnTwoToneIcon fontSize="large" />
                </th>
                <th className="one-col">
                    <h5 className='headingStyle'>Collection till date</h5>
                    <p>$5.34Cr</p>
                    <p className='subParaStyle'>10% in last 30 days</p>
                </th>
                <th>
                    <MonetizationOnTwoToneIcon fontSize="large" />
                </th>
                <th className="two-col">
                    <h5 className='headingStyle'>Balance</h5>
                    <p>$2.4L</p>
                </th>
                <th>
                    <MonetizationOnTwoToneIcon fontSize="large" />
                </th>
                <th className="three-col">
                    <h5 className='headingStyle'>Defaulters</h5>
                    <p>{defaulter}/{count}</p>
                    <p className='subParaStyle'>11% in last 30 days</p>
                </th>
            </tr>
        </table>
    </div>
  )
}
export default FirstComponent;