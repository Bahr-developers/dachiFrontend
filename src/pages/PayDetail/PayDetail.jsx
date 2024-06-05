import Footer from "../../components/Footer/Footer";
import MiniNaw from "../../components/MiniNaw/MiniNaw";
import Navbar from "../../components/Navbar/Navbar";
import "./PayDetail.css";

const PayDetail = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="pay-detail">
          <h2 className="pay-detail-user">Здравствуйте уважаемый Umidjon!</h2>
          <p className="pay-detail-date">Получено в: Сегодня 21:40</p>
          <p className="pay-detail-text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
            expedita adipisci aperiam laborum eos quam dolore sapiente fugit,
            voluptatibus itaque?
          </p>

          <button className="pay-detail-btn">Удалить</button>
        </div>
      </div>
      <MiniNaw />
      <Footer />
    </>
  );
};

export default PayDetail;
