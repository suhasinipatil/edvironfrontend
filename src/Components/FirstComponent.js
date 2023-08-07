import MonetizationOnTwoToneIcon from '@mui/icons-material/MonetizationOnTwoTone';

const FirstComponent = () => {
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
                    <p>11/1049</p>
                    <p className='subParaStyle'>11% in last 30 days</p>
                </th>
            </tr>
        </table>
    </div>
  )
}
export default FirstComponent;