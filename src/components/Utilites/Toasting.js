import React from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../StudyItem/StudyItem.css";
import { resetData } from "./LocalDb";

function App({ total, display, reset }) {
  //console.log(total);
  const notify = () => {
    if (total > 0) {
      toast.success(
        `
    Congrates!!
    You have completed ${total} minute Study 😍
    Let's start again!!!
    `,
        {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
    } else {
      toast.warn(
        `
        Please Add some topic 📚 and study!! 😡
        Your Current Study time = ${total} minute
        `,
        {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
    }
    reset();

    resetData("total-study-time");
  };

  return (
    <div>
      <button onClick={notify} className="card-btn">
        Completed
      </button>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}
export default App;
