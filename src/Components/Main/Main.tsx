import "./Main.css";
import img4 from "../../ASSETS/IMAGES/image4.jpg";

function Main(): JSX.Element {
    return (
        <div className="Main">
			<p> bla bla bla bla bla bla bla bla bla bla bla blabla bla bla bla bla bla 
            bla bla bla bla bla bla bla bla bla bla bla blabla bla bla bla bla blabla bla bla bla bla bla bla bla bla bla bla blabla bla bla bla bla blabla bla bla bla bla bla bla bla bla bla bla blabla bla bla bla bla blabla bla bla bla bla bla bla bla bla bla bla blabla bla bla bla bla blabla bla bla bla bla bla bla bla bla bla bla blabla bla bla bla bla blabla bla bla bla bla bla bla bla bla bla bla blabla bla bla bla bla bla
            </p>
           
            
           <h3>Add new costumer:</h3>

            <form>
            
                <label>Costumer name:
                    <input id="costumerName" type="text" name="costumerName" placeholder="Enter your costumer name" />
                    
                </label>
                <label>Adress:
                    <input id="adress" type="text" name="costumerAdress" placeholder="Enter costumer adress" />
                </label>
                <br />
                <label> Opening hours:
                    <input id="opening hours" type="text" name="openingHours" placeholder="Enter opening hours" />
                </label>
               
                <label>Closing Hours:
                    <input id="closing hours" type="text" name="closingHours" placeholder="Enter  closing hours" />
                </label>
                <br />
                <label> Contact person:
                    <input id="contact person" type="text" name="contactPerson" placeholder="Enter  contact person's name" />
                </label>
                
                <label> Contact phone number:
                    <input id="contact number" type="text" name="contactNumber" placeholder="Enter  contact phone number" />
                </label>
                <br />

            </form>

                <img src={img4} alt="bigImg" />
        </div>
    );
}

export default Main;
