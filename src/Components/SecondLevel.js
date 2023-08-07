import { createContext, useContext, useState, useEffect } from "react";

const SecondLevel = () => {
    const schoolName = 'DAV Public School';
    const [count, setCount] = useState(0);
    const [section, setSection] = useState(0);

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
          const response = await fetch('http://localhost:8080/sections/' + schoolName, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });
  
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
  
          const data = await response.json();
          setSection(data);
          console.log(data);
        } catch (error) {
          console.error('Error fetching data:', error);
          setCount(null);
        }
      };
          
      fetchData();
  }, [schoolName]);

    return (
        <div className="second-Level">
            <div className="student-component">
                <h4 className='headingStyle'>Students</h4>
                <h2>{count}</h2>
            </div>
            <div className="section-component">
                <h4 className='headingStyle'>Sections</h4>
                <h2>{section}</h2>
                <p>in 12 classes</p>
            </div>
            <div className="collection-component">
                <h4 className='headingStyle'>Collection this month</h4>
                <h2>$90.56L</h2>
            </div>
            <div className="fine-component">
                <h4 className='headingStyle'>Fine Collected till date</h4>
                <h2>$11.20L</h2>
            </div>
        </div>
    );
}
export default SecondLevel;