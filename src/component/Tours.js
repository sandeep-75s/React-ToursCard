import './Tours.css'
import Card from './Card';

function Tours({tours,removeHandler}){
    return(
        <div className='Tours'>
            <div className='heading-div'>
                <h1 className='heading'>Plan With Sandeep</h1>
            </div>
            <div className='Tour-card'>
                {
                    tours.map((tour)=>{
                        return <Card {...tour} removeTour={removeHandler}></Card>
                    })
                }
            </div>
        </div>
    );
}
export default Tours;