function Address(props) {

    let isLoggedIn = false;//true

    let address = (

        <>

            <div>

                <span><b>Torry Harris Business Solutions Pvt Ltd</b> Bengaluru, Karnataka 560037</span>

                <br />

                <span><b>Contact Info:</b>9100685411</span>

                <br></br>

                <span>I am inside address component</span>

                <p>Office time: {props.time}</p>

            </div>

        </>

    );

    if (isLoggedIn) {

        return (<h1> I am loggIn </h1>);

    } else {

        return address;

    }

}

export default Address;