import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";

function Event({}) {
  // const { frontmatter } = data;
  // const { title, images } = frontmatter;
  // console.log(data);
  return (
    <section className="section px-4">
      <h2 className="mb-5 text-center font-bold">
        EVENT BASKETBALL BANGKA BELITUNG
      </h2>

      <div
        style={{
          display: "flex",
          padding: "5px",
          paddingLeft: 50,
          paddingRight: 50,
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <div
          style={{
            backgroundImage: "url(/images/IMG-20231025-WA0001.jpg)",
            backgroundSize: "cover",
            height: 500,
            width: "100%",
          }}
        ></div>

        <div style={{ height: 500, width: "100%" }}>
          <div style={{ height: "50%", display: "flex" }}>
            <div
              style={{
                backgroundImage: "url(/images/IMG-20221223-WA0046.jpg)",
                backgroundSize: "cover",
                width: "70%",
              }}
            ></div>
            <div
              style={{
                backgroundColor: "cadetblue",
                width: "30%",
                backgroundImage: "url(/images/event1.jpeg)",
                backgroundSize: "cover",
              }}
            ></div>
          </div>
          <div style={{ height: "50%", display: "flex" }}>
            <div
              style={{
                backgroundImage: "url(/images/event-2.jpeg)",
                backgroundSize: "cover",
                width: "50%",
              }}
            ></div>
            <div style={{ width: "50%" }}>
              <div
                style={{
                  backgroundImage: "url(/images/event-3.jpeg)",
                  backgroundSize: "cover",
                  height: "50%",
                }}
              ></div>
              <div
                style={{
                  height: "50%",
                  display: "flex",
                }}
              >
                <div
                  style={{
                    backgroundImage: "url(/images/event-4.jpeg)",
                    backgroundSize: "cover",
                    width: "50%",
                  }}
                ></div>
                <div
                  style={{
                    backgroundImage: "url(/images/event-5.jpeg)",
                    backgroundSize: "cover",
                    width: "50%",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Event;
