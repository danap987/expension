import "./Menu.css";
import img1 from "../../ASSETS/IMAGES/image2.jpg";


function Menu(): JSX.Element {
    return (
        <div className="Menu">
			<h3> actions:</h3>
            <a href="">test1</a>
            <a href="">test2</a>
            <a href="">test3</a>

            <img src={img1} alt="img1" />
            <h3>Contact us:</h3>
            <p> Adress: bla bla bla</p>
            <p> phone number: 03-1234567</p>

            <a href="mailto:ggg.gmail.com"> send us mail</a>
        </div>
    );
}

export default Menu;
